import React, { lazy } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import { FaUserAlt, FaEnvelope, FaCalendarAlt, FaEdit, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import { EVENT_URL } from '../shared/apiUrl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from '../Spinner/Spinner';

const Modal = lazy(() => import("../Modal/Modal"));

const localizer = momentLocalizer(moment);

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      showEditEventModal: false,
      selectedEvent: null,
      showAddEventModal: false,
      addEvent: {},
      editMessage: '',
      addMessage: '',
      error: false,
      eventRequest: false
    }

    this.getEvents = this.getEvents.bind(this);
  }

  getEvents() {
    axios.get(EVENT_URL + '/' + this.props.user.id, {
      headers: {
        Authorization: 'Bearer ' + this.props.token,
      }
    })
      .then(response => {
        this.setState({
          events: response.data
        })
      }).catch(error => {
        this.setState({
          error: true
        })
      })
  }

  componentDidMount() {
    this.getEvents();
  }

  // functions for editing event
  toggleEditEventModal(event) {
    this.setState({ 
      showEditEventModal: !this.state.showEditEventModal,
      selectedEvent: event
    });
  } 

  handleEditEventTitle(event) {
    this.setState({ 
      selectedEvent: {
        ...this.state.selectedEvent,
        title: event.target.value
    }});
  }

  handleEditEventDate(date) {
    const formatedDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    this.setState({
      selectedEvent: {
        ...this.state.selectedEvent,
        start: formatedDate,
        end: formatedDate
      }
    })
  }

  handleEditEventSubmit(e) {
    e.preventDefault();
    this.setState({
      eventRequest: true
    })
    if(this.state.selectedEvent.title) {
      axios.put(EVENT_URL + '/' + this.state.selectedEvent.id, this.state.selectedEvent, {
        headers: {
          Authorization: 'Bearer ' + this.props.token
        }
      }).then(response => {
        this.setState({
          events: response.data,
          editMessage: '',
          eventRequest: false
        })
        this.toggleEditEventModal({});
      }).catch(error => {
        this.setState({
          eventRequest: false,
          error: true
        })
      })
    } else {
      this.setState({
        eventRequest: false,
        editMessage: 'Please provide title for event.'
      })
    }
  }

  // function for adding event
  toggleAddEventModal({ start }) {
    let isFreeDate = true;
    const startDate = moment(start).format("YYYY-MM-DD HH:mm:ss");
    const events = this.state.events;
    const eventsLength = events.length;
    let now = new Date();
    now.setDate(now.getDate() - 1);
    const yesterday = moment(now).format("YYYY-MM-DD HH:mm:ss");
    
    // cannot add events before today's date
    if(startDate < yesterday) {
      isFreeDate = false;
      return;
    }
    
    for(let i = 0; i < eventsLength; i++) {
      // cannot add events on existing event dates
      if(startDate === events[i].start) {
        isFreeDate = false;
        return;
      }
    }

    if(isFreeDate) {
      this.setState({
        showAddEventModal: !this.state.showAddEventModal,
        addEvent: {
          ...this.state.addEvent,
          start: startDate,
          end: startDate,
          user_id: this.props.user.id
        }
      })
    }
  }

  handleAddEventTitle(event) {
    this.setState({ 
      addEvent: {
        ...this.state.addEvent,
        title: event.target.value
    }});
  }

  handleAddEventSubmit(e) {
    e.preventDefault();
    this.setState({
      eventRequest: true
    })
    if (this.state.addEvent.title) {
      axios.post(EVENT_URL, this.state.addEvent, {
        headers: {
          Authorization: 'Bearer ' + this.props.token
        } 
      }).then(response => {
        this.setState({
          events: response.data,
          eventRequest: false,
          addMessage: ''
        })
        this.toggleAddEventModal({});
      }).catch(error => {
        this.setState({
          error: true,
          eventRequest: false
        })
      })
    } else {
      this.setState({
        eventRequest: false,
        addMessage: 'Please provide title for event.'
      })
    }
  }

  deleteEvent(id) {
    axios.delete(EVENT_URL + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.props.token,
      }
    }).then(response => {
      this.getEvents();
    }).catch(error => {
      this.setState({
        error: true
      })
    })
  }

  render() { 
    let dates = this.state.events.map(event => {
      return moment(event.start, 'YYYY-MM-DD').toDate();
    });
    
    return (
      <div className="main-calendar">
        <div className="main-calendar-navigation">
          <nav>
            <ul>
              <li>
                <FaUserAlt /><span>{this.props.user.username}</span>
              </li>
              <li>
                <FaEnvelope /><span>{this.props.user.email}</span>
              </li>
              <li>
                <FaCalendarAlt /><span>Events</span>
              </li>
              {this.state.events.map(event => {
                return (
                  <li className="event" key={event.id}>
                    <div className="event-title">
                      {event.title}
                    </div>
                    <div className="event-change">
                      <span className="event-edit" onClick={this.toggleEditEventModal.bind(this, event)}><FaEdit /></span>
                      <span className="event-delete" onClick={this.deleteEvent.bind(this, event.id)}><FaTimesCircle /></span>
                    </div>
                  </li>)
              })}
            </ul>
          </nav>
        </div>
        <div className="main-calendar-container">
          <Calendar
            selectable
            localizer={localizer}
            events={this.state.events}
            defaultView="month"
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={this.toggleEditEventModal.bind(this)}
            onSelectSlot={this.toggleAddEventModal.bind(this)}
            allDayAccessor={event => true}
            views={['month', 'agenda']}
          />
        </div>
        {this.state.showEditEventModal ? (
          <Modal>
            <h1>Edit selected event</h1>
            <form onSubmit={this.handleEditEventSubmit.bind(this)}>
              <div>
                <input type="text" placeholder="Change event title" onChange={this.handleEditEventTitle.bind(this)} value={this.state.selectedEvent.title} />
              </div>
              <DatePicker
                selected={moment(this.state.selectedEvent.start, 'YYYY-MM-DD').toDate()}
                onChange={this.handleEditEventDate.bind(this)}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                showDisabledMonthNavigation
                excludeDates={dates}
              />
              <div>
                <button className="button" type="submit">Edit event</button>
                <button className="button cancel" onClick={this.toggleEditEventModal.bind(this, {})}>Cancel</button>
              </div>
              {this.state.editMessage ? <div className="error-handler">{this.state.editMessage}</div> : null}
              {this.state.eventRequest ? <Spinner /> : null}
            </form>
          </Modal>
        ) : null}
        {this.state.showAddEventModal ? (
          <Modal>
            <h1>Add event</h1>
            <form onSubmit={this.handleAddEventSubmit.bind(this)}>
              <div>
                <input type="text" placeholder="Add event title" onChange={this.handleAddEventTitle.bind(this)}  />
              </div>
              <div>
                <p>Selected date is: {moment(this.state.addEvent.end).format("YYYY-MM-DD")}</p>
              </div>
              <div>
                <button className="button" type="submit">Add event</button>
                <button className="button cancel" onClick={this.toggleAddEventModal.bind(this, {})}>Cancel</button>
              </div>
              {this.state.addMessage ? <div className="error-handler">{this.state.addMessage}</div> : null}
              {this.state.eventRequest ? <Spinner /> : null}
            </form>
          </Modal>
        ) : null}
      </div>
    )
  }
}

export default CalendarContainer;