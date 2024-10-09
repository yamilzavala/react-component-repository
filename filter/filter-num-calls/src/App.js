import "./styles.css";
import { useState } from "react";
//original array
const calls = [
  { name: "paul", numOfCalls: 8 },
  { name: "jane", numOfCalls: 10 },
  { name: "paul", numOfCalls: 20 },
  { name: "san", numOfCalls: 23 },
  { name: "jack", numOfCalls: 16 },
  { name: "mark", numOfCalls: 2 },
  { name: "jack", numOfCalls: 1 },
];
//merge calls by person
const totalCallsPerPerson = calls.reduce((acc, curr) => {
  const currentName = curr.name;
  if (acc.hasOwnProperty(currentName)) {
    acc[currentName] = acc[currentName] + curr.numOfCalls;
  } else {
    acc[currentName] = curr.numOfCalls;
  }
  return acc;
}, {});
//sorted array
const totalCallsPerPersonArraySorted = [];
for (const key in totalCallsPerPerson) {
  totalCallsPerPersonArraySorted.push({
    name: key,
    numOfCalls: totalCallsPerPerson[key],
  });
}
totalCallsPerPersonArraySorted.sort((a, b) => b.numOfCalls - a.numOfCalls);
//render list
const listCalls = calls.map((item) => (
  <li key={new Date().getTime()}>
    {item?.name}: {item?.numOfCalls}
  </li>
));

export default function App() {
  const [filter, setFilter] = useState("");

  const filteredPersons = totalCallsPerPersonArraySorted.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const listPersons = filteredPersons.map((person) => (
    <li>
      {person.name}:{person.numOfCalls}
    </li>
  ));

  return (
    <div className="App">
      <h1>Filter number's calls</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {listPersons}
    </div>
  );
}
