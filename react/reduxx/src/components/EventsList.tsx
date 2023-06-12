import { useDispatch, useSelector } from "react-redux";
import IEventsState from "../redux-toolkit/interfaces/IEventsState";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
  changeCategory,
  getEvents,
} from "../redux-toolkit/slices/eventsListSlice";
import EventSmallCard from "./EventSmallCard";
import IEvent from "../redux-toolkit/interfaces/IEvent";

const EventsList = () => {
  const dispatch = useDispatch();
  const { Events, Categories, CurrentCategory }: IEventsState = useSelector(
    (state: any) => state.eventsList
  );
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <div>
      <h2>Ивенты</h2>
      <div>
        {Categories.map((el: string, index: number) => {
          return (
            <button
              style={{
                backgroundColor: "gray",
                color: "whitesmoke",
                margin: "10px",
              }}
              key={index}
              onClick={() => dispatch(changeCategory(el))}
            >
              {el}
            </button>
          );
        })}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Events.length > 0 ? (
          CurrentCategory === "all" ? (
            Events.map((event: IEvent, index: number) => (
              <Link to={`${event.id}`} key={index}>
                {" "}
                <EventSmallCard event={event} />{" "}
              </Link>
            ))
          ) : (
            Events.map(
              (event: IEvent, index: number) =>
                event.category === CurrentCategory && (
                  <Link to={`${event.id}`} key={index}>
                    <EventSmallCard event={event} />
                  </Link>
                )
            )
          )
        ) : (
          <h2>Events list is empty</h2>
        )}
      </div>
    </div>
  );
};

export default EventsList;
