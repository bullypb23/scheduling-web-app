import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

const Logout = props => {
  useEffect(() => {
    props.logout();
  }, [])

  return <Redirect to="/" />;
}

export default Logout;