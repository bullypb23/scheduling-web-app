<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Event;

class EventController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'start' => 'required',
            'end' => 'required',
            'title' => 'required|string',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 400);
        }

        $events = Event::where('user_id', $request->get('user_id'))->get();
        foreach ($events as $event) {
            if ($request->get('start') === $event->start) {
                return response()->json(['message' => 'Selected date is busy, please select differente date!']);
            }
        }


        $event = new Event();
        $event->start = $request->get('start');
        $event->end = $request->get('end');
        $event->title = $request->get('title');
        $event->user_id = $request->get('user_id');

        $event->save();

        return response()->json(Event::where('user_id', $event->user_id)->orderBy('start')->get());
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'start' => 'required',
            'end' => 'required',
            'title' => 'required|string',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 400);
        }

        $event = Event::findOrFail($id);

        $event->update($request->all());

        return response()->json(Event::where('user_id', $event->user_id)->get(), 200);
    }

    public function show($user_id)
    {
        return response()->json(Event::where('user_id', $user_id)->orderBy('start')->get());
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        if ($event) {
            $event->delete();
        } else {
            return response()->json(['message' => 'Could not find event!']);
        }
        return response()->json(null, 204);
    }
}
