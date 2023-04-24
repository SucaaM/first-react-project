import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const isFormValid = () => {
    return name !== '' && email !== '' && date !== '' && time !== '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="numberOfPeople">Number of people:</label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={numberOfPeople}
          onChange={handleNumberOfPeopleChange}
          min={1}
          max={10}
        />
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Reserve
      </button>
    </form>
  );
};

export default BookingForm;