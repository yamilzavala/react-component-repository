import {useState} from 'react';
import './App.css';

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2,'0');
  const day = date.getDate().toString().padStart(2, '0');
  return [year, month, day].join('-');
}


function App() {
  const [flightOption, setFlightOption] = useState('one-way');
  const [departureDate, setDepartureDate] = useState(formatDate(new Date(Date.now() + DAY_IN_SECONDS))); //tomorrow
  const [returnDate, setReturnDate] = useState(departureDate);

  function submitForm(event) {
    event.preventDefault();
    if(flightOption === 'one-way') {
      alert(`You have booked a one-way flight on ${departureDate}`)
      return;
    }
    
    alert(`You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`)
  }

  return (
    <div className="App">
      <form className='flight-booker' onSubmit={submitForm}>

        <select 
          value={flightOption}
          onChange={e => setFlightOption(e.target.value)}
        >
          <option value='one-way'>One-way</option>
          <option value='return'>Return flight</option>
        </select>

        <input
          aria-label="Return date" 
          type="date" 
          value={returnDate}
          onChange={e => setReturnDate(e.target.value)}
          min={departureDate}
        />

       {flightOption === 'return' && (
        <input
          aria-label="Departure date" 
          type="date" 
          value={departureDate}
          onChange={e => setDepartureDate(e.target.value)}
          min={TODAY}
        />
       )} 

        <button type="submit">Book</button>

      </form>
    </div>
  );
}

export default App;
