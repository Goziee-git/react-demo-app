import { useState } from 'react'
import './App.css'
import { Navbar, Car, Student, Countries, Vehicle, Fruits, Card, InfoBox, Counter, InteractiveCard, ContactForm } from './Component.jsx'

export default function App() {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');

  // const for continent
  const continent = "West Africa";

  // Vehicle arrays
  const vehicleBrands = ["Audi", "Toyota", "Volvo", "Mercedes"];
  const vehicleInfo = { 
    year: 2025, 
    speed: "30km/hr",
    color: "Red"
  };

  // Fruits arrays - variable names in App.jsx
  const myFruitList = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const myFruitDetails = [
    { name: "Apple", color: "Red", price: 2.50 },
    { name: "Banana", color: "Yellow", price: 1.20 },
    { name: "Orange", color: "Orange", price: 3.00 }
  ];

  function validateNumber() {
    let message;
    const num = Number(inputValue);
    
    if (inputValue === '' || isNaN(num) || num < 1 || num > 10) {
      message = "number is not valid";
    } else {
      message = "number is valid, Thanks";
    }
    
    setText(message);
  }

  return (
    <>
      <Navbar />
      
      {/* Card Component Example - wraps Car component */}
      <Card title="My Car Information">
        <Car name="Audi" color="blue" model="V8x" engine="H200p" price="$2000000"/>
      </Card>
      
      <Student />
      <Countries country={continent}/>
      
      {/* InfoBox Component Example - wraps Vehicle brands */}
      <InfoBox title="Vehicle Brands" color="#667eea">
        <p>Available brands in our inventory:</p>
        <ul>
          <li>{vehicleBrands[0]}</li>
          <li>{vehicleBrands[1]}</li>
          <li>{vehicleBrands[2]}</li>
          <li>{vehicleBrands[3]}</li>
        </ul>
      </InfoBox>
      
      <Vehicle brands={vehicleBrands} info={vehicleInfo} />
      <Fruits fruits={myFruitList} fruitDetails={myFruitDetails} />
      
      {/* Counter Component - demonstrates events */}
      <Counter />
      
      {/* InteractiveCard Component - demonstrates hover and click events */}
      <InteractiveCard title="Interactive Demo">
        <p>Hover over this card and click it to see the counter increase!</p>
        <p>This demonstrates onMouseEnter, onMouseLeave, and onClick events.</p>
      </InteractiveCard>
      
      {/* ContactForm Component - demonstrates form events */}
      <ContactForm />
      
      <div className="validator-container">
        <input 
          type="number" 
          id="input"
          className="number-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number (1-10)"
          aria-label="Number input for validation"
        />
        <button 
          onClick={validateNumber}
          className="validate-button"
          type="button"
        >
          VALIDATE ME
        </button>
      </div>

      <div id="output" className="output-container">
        <p>{text}</p>
      </div>
    </>
  );
}
