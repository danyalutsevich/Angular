import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import IEventDetailsState from "../redux-toolkit/interfaces/IEventDetailsState";
import { getEvent } from "../redux-toolkit/slices/eventDetailsSlice";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { event }: IEventDetailsState = useSelector(
    (state: any) => state.eventDetails
  );
  useEffect(() => {
    dispatch(getEvent(id));
    console.log(event);
  }, [dispatch]);

  return (
    <div>
      <Link to="/">
        <button>Домой</button>
      </Link>
      <h1>{event.title}</h1>
      <img
        style={{ height: "200px" }}
        src={event.image}
        alt={`${event.title} img`}
      />
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventDetails;
