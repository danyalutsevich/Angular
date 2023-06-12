import React from "react";
import IEvent from "../redux-toolkit/interfaces/IEvent";

function EventSmallCard(props: any) {
  const event: IEvent = props.event;
  return (
    <div
      style={{
        backgroundColor: "#b6d4e4",
        borderRadius: "12px",
        margin: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          color: "#325263",
          padding: "10px 30px 2px 30px",
          margin: "0",
        }}
      >
        {event.title}
      </h3>
      <div
        style={{
          height: "1px",
          width: "20%",
          backgroundColor: "#8DA4B0",
          margin: "0 auto",
        }}
      ></div>
      <div style={{ color: "#967C5A" }}>{event.category}</div>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "0.8rem", padding: "15px 10px 10px 10px"}}>
        <span>{event.date}</span>
        <span>{event.location}</span>
      </div>
    </div>
  );
}

export default EventSmallCard;
