import React from "react";
import "./index.css";
const CircleSelector = props => (
  <div className="CircleSelector">
    <button
      className={props.selectedCircle === "1" ? "selected" : ""}
      onClick={() => props.handleSelectedCircle("1")}
    >
      {props.selectedCircle === "1" ? "Circle 1 SELECTED" : "SELECT CIRCLE 1"}
    </button>
    <button
      className={props.selectedCircle === "2" ? "selected" : ""}
      onClick={() => props.handleSelectedCircle("2")}
    >
      {props.selectedCircle === "2" ? "Circle 2 SELECTED" : "SELECT CIRCLE 2"}
    </button>
    <button
      className={props.selectedCircle === "3" ? "selected" : ""}
      onClick={() => props.handleSelectedCircle("3")}
    >
      {props.selectedCircle === "3" ? "Circle 3 SELECTED" : "SELECT CIRCLE 3"}
    </button>
    <button
      className={props.selectedCircle === "4" ? "selected" : ""}
      onClick={() => props.handleSelectedCircle("4")}
    >
      {props.selectedCircle === "4" ? "Circle 4 SELECTED" : "SELECT CIRCLE 4"}
    </button>
  </div>
);

export default CircleSelector;
