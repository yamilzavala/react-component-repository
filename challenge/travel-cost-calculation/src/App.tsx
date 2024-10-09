import "./styles.css";
import React, { useState, useEffect } from "react";
import { DestinationList, Vehicle } from "./types/types";
import { fetchVehicleTypes, getTotal } from "./utils/utils";

function App() {
  const [startingPoint, setStartingPoint] = useState<string>("Berlin");
  const [destinationList, setDestinationList] = useState<DestinationList[]>([
    { id: String(new Date().getTime()), destination: "France" },
  ]);
  const [vehicleTypeList, setVehicleTypeList] = useState<Vehicle[]>([]);
  const [expenseName, setExpenseName] = useState<string>("");
  const [selectedVehicleType, setSelectedVehicleType] =
    useState<Vehicle | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchVehicleTypes().then((vehicles) => setVehicleTypeList(vehicles));
  }, []);

  const addDestination = () => {
    const newDestination = {
      id: String(new Date().getTime()),
      destination: "",
    };
    setDestinationList([...destinationList, newDestination]);
  };

  const handleSubmit = async () => {
    console.log("submitted");
  };

  // useEffect(() => {
  //   setExpenseName(
  //     `${startingPoint} - ${destinationList
  //       .map((dest) => dest.destination)
  //       .join(" - ")}`
  //   );
  // }, [startingPoint, destinationList]);

  // useEffect(() => {
  //   getTotal(startingPoint, destinationList, vehicleTypeList).then((total) =>
  //     setTotalAmount(+total.toFixed(2))
  //   );
  // }, [startingPoint, destinationList, expenseName, vehicleTypeList]);

  return (
    <div className="container">
      <h1 className="title">Travel Expense Calculation</h1>
      {/* starting point */}
      <div className="input-container">
        <label htmlFor="starting_point">Starting point</label>
        <input
          type="text"
          name="starting_point"
          placeholder="Berlin"
          value={startingPoint}
          onChange={(e) => {
            setStartingPoint(e.target.value);
            setExpenseName(
              `${startingPoint} - ${destinationList
                .map((dest) => dest.destination)
                .join(" - ")}`
            );
            getTotal(startingPoint, destinationList, vehicleTypeList).then(
              (total) => setTotalAmount(+total.toFixed(2))
            );
          }}
        />
      </div>
      {/* destinations */}
      <div>
        <>
          {destinationList.map((currDestination) => {
            function onChangeDestination(
              id: string,
              e: React.ChangeEvent<HTMLInputElement>
            ) {
              const newDestinations = destinationList.map((destination) => {
                return destination.id === id
                  ? { ...destination, destination: e.target.value }
                  : destination;
              });
              setDestinationList(newDestinations);
            }

            return (
              <div key={currDestination.id} className="input-container">
                <label htmlFor={`dest-${currDestination.id}`}>
                  {" "}
                  Destination{" "}
                </label>
                <input
                  type="text"
                  name={`dest-${currDestination.id}`}
                  placeholder="France"
                  value={currDestination.destination}
                  onChange={(e) => {
                    onChangeDestination(currDestination.id, e);
                    setExpenseName(
                      `${startingPoint} - ${destinationList
                        .map((dest) => dest.destination)
                        .join(" - ")}`
                    );
                    getTotal(
                      startingPoint,
                      destinationList,
                      vehicleTypeList
                    ).then((total) => setTotalAmount(+total.toFixed(2)));
                  }}
                />
              </div>
            );
          })}
        </>
      </div>
      {/* add */}
      <button className="add-btn" type="button" onClick={addDestination}>
        + Add additional destination
      </button>
      {/* transportation */}
      <div className="trasportation-container">
        <span> Travel by </span>
        <select
          value={selectedVehicleType}
          onChange={(e) => {
            setSelectedVehicleType(e.target.value);
            getTotal(startingPoint, destinationList, vehicleTypeList).then(
              (total) => setTotalAmount(+total.toFixed(2))
            );
          }}
        >
          {vehicleTypeList.map((vehicle) => {
            return (
              <option key={vehicle.id} value={vehicle.label}>
                {vehicle.label}
              </option>
            );
          })}
        </select>
      </div>
      {/* expenses */}
      <div className="input-container">
        <label htmlFor="expense_name">Expense Name</label>
        <input
          type="text"
          name="expense_name"
          placeholder="Berlin-France"
          value={expenseName}
        />
      </div>
      <div className="totals-container">
        {/* total */}
        <p>total amount: ${totalAmount}</p>
        {/* submit */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
