import React, { useReducer, useEffect } from "react";
import "./TravelExpenses.css";

const initialState = {
  startingPoint: { id: 1, name: "England" },
  destinations: [{ id: 2, name: "France" }],
  vehicleTypeList: [
    { id: "1", label: "plane" },
    { id: "2", label: "car" },
    { id: "3", label: "train" },
  ],
  expenseName: "",
  selectedVehicleType: "",
  totalAmount: 0,
};

const calcTotals = (startingPoint, destinations, vehicle) => {
  const costVehicle = vehicle === "train" ? 100 : vehicle === "car" ? 200 : 500;
  const startingCost =
    startingPoint.name.toLowerCase() === "paris" ? 1000 : 2000;
  const destinationsCost = destinations.reduce((acc, _) => acc + 100, 0);
  return costVehicle + startingCost + destinationsCost;
};

const setExpenseName = (startingPoint, destinations) => {
  const destinationsStr = destinations.map((dest) => dest.name).join(" - ");
  return `${startingPoint.name} - ${destinationsStr}`;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DESTINATION":
      return {
        ...state,
        destinations: [...state.destinations, { id: Date.now(), name: "" }],
      };
    case "REMOVE_DESTINATION":
      const newDest = state.destinations.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, destinations: [...newDest] };
    case "SET_VEHICLE_TYPE":
      return { ...state, selectedVehicleType: action.payload.vehicle };
    case "SET_STARTING_POINT":
      return {
        ...state,
        startingPoint: { ...state.startingPoint, name: action.payload.name },
      };
    case "SET_DESTINATION":
      const newDestination = state.destinations.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );
      return { ...state, destinations: newDestination };
    case "CALCULATE_NEW_TOTALS":
      return {
        ...state,
        totalAmount: calcTotals(
          state.startingPoint,
          state.destinations,
          state.selectedVehicleType
        ),
      };
    case "SET_EXPENSE_NAME":
      return {
        ...state,
        expenseName: setExpenseName(state.startingPoint, state.destinations),
      };
    default:
      return state;
  }
};

const TravelExpenses = () => {
  const [travelState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_EXPENSE_NAME" });
    dispatch({ type: "CALCULATE_NEW_TOTALS" });
  }, []);

  const handleSetDestination = (id, e) => {
    dispatch({
      type: "SET_DESTINATION",
      payload: { id, name: e.target.value },
    });
    dispatch({ type: "SET_EXPENSE_NAME" });
    dispatch({ type: "CALCULATE_NEW_TOTALS" });
  };

  const handleSetVehicle = (e) => {
    dispatch({
      type: "SET_VEHICLE_TYPE",
      payload: { vehicle: e.target.value },
    });
    dispatch({ type: "CALCULATE_NEW_TOTALS" });
  };

  const handleRemoveDestination = (id) => {
    dispatch({ type: "REMOVE_DESTINATION", payload: { id } });
    dispatch({ type: "SET_EXPENSE_NAME" });
    dispatch({ type: "CALCULATE_NEW_TOTALS" });
  };

  const handleAddDestination = () => {
    dispatch({ type: "ADD_DESTINATION" });
    dispatch({ type: "SET_EXPENSE_NAME" });
    dispatch({ type: "CALCULATE_NEW_TOTALS" });
  };

  return (
    <div className="container">
      <h1 className="title">Travel Expense Calculation</h1>

      {/* starting */}
      <div className="input-container">
        <label htmlFor="starting_point">Starting point</label>
        <input
          placeholder="Berlin"
          type="text"
          name="starting_point"
          value={travelState.startingPoint.name}
          onChange={(e) =>
            dispatch({
              type: "SET_STARTING_POINT",
              payload: { name: e.target.value },
            })
          }
        />
      </div>

      {/* destinations */}
      {travelState.destinations.map((destination, idx) => (
        <div className="input-container-parent">
          <div key={destination.id} className="input-container">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Type a destination..."
              value={destination.name}
              onChange={(e) => handleSetDestination(destination.id, e)}
            />
          </div>
          <button onClick={() => handleRemoveDestination(destination.id)}>
            ❌
          </button>
        </div>
      ))}

      {/* add destination */}
      <button className="add-btn" onClick={handleAddDestination}>
        + Add destination
      </button>

      {/* select travel transport */}
      <div className="trasportation-container">
        <span> Travel by </span>
        <select
          value={travelState.selectedVehicleType}
          onChange={handleSetVehicle}
        >
          {travelState.vehicleTypeList.map((opt) => (
            <option key={opt.id} value={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* expenses */}
      <div className="input-container">
        <input type="text" value={travelState.expenseName} readOnly />
      </div>

      {/* totals */}
      <div className="totals-container">
        <p>Total amount: ${travelState.totalAmount}</p>
      </div>
    </div>
  );
};

export default TravelExpenses;
