import { useState } from 'react'

// Navbar Component
export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

// Card Component - demonstrates props.children
export function Card({ title, children }) {
  return (
    <div className="card-wrapper">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// InfoBox Component - another props.children example
export function InfoBox({ title, color, children }) {
  return (
    <div className="info-box" style={{ borderLeft: `4px solid ${color || '#667eea'}` }}>
      <h3 className="info-title">{title}</h3>
      <div className="info-content">
        {children}
      </div>
    </div>
  );
}

// Car Component - receives props from parent
export function Car(props) {
  return (
    <>
      <div className="car-container">
        <h2>Car Details</h2>
        <table className="car-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Car Name</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{props.model}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{props.color}</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>{props.engine}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{props.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

// Car Component WITH DESTRUCTURING - cleaner approach
export function CarDestructured({ name, model, color, engine, price }) {
  // No need to write props.name, props.model, etc.
  // We can use name, model, color directly!
  
  return (
    <>
      <div className="car-container">
        <h2>Car Details (Destructured)</h2>
        <table className="car-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Car Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{model}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{color}</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>{engine}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

// Example showing BOTH methods side by side
export function Person(props) {
  // WITHOUT destructuring - must use props.propertyName
  return (
    <div className="person-container">
      <h2>Person Info (Without Destructuring)</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export function PersonDestructured({ name, age, city }) {
  // WITH destructuring - use variables directly
  return (
    <div className="person-container">
      <h2>Person Info (With Destructuring)</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// You can also destructure INSIDE the function
export function PersonDestructuredInside(props) {
  // Destructure at the top of the function
  const { name, age, city } = props;
  
  return (
    <div className="person-container">
      <h2>Person Info (Destructured Inside)</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Student Component
export function Student() {
  const myobj = {
    size: "XXL",
    age: "20",
    location: "Gwagwa"
  };
  return (
    <>
      <div className="student-container">
        <h2>STUDENT</h2>
        <p>LOCATION: {myobj.location}</p>
        <p>AGE: {myobj.age}</p>
        <p>SIZE: {myobj.size}</p>
      </div>
    </>
  );
}

// Countries Component
export function Countries({continent}) {
  return (
    <div className="countries-container">
      <h2>Nigeria is in {continent}</h2>
    </div>
  );
}

// Vehicle Component - receives array and object props
export function Vehicle(props) {
  return (
    <>
      <div className="vehicle-info">
        <h2>Vehicle Information</h2>
        <div>
          <h3>Available Brands:</h3>
          <ul>
            <li>{props.brands[0]}</li>
            <li>{props.brands[1]}</li>
            <li>{props.brands[2]}</li>
            <li>{props.brands[3]}</li>
          </ul>
        </div>
        <div>
          <h3>Vehicle Details:</h3>
          <p>Year: {props.info.year}</p>
          <p>Speed: {props.info.speed}</p>
          <p>Color: {props.info.color}</p>
        </div>
      </div>
    </>
  );
}

// Fruits Component - demonstrates accessing array elements by index
export function Fruits(props) {
  return (
    <>
      <div className="fruits-container">
        <h2>Fruits Collection</h2>
        
        {/* Accessing array elements by index */}
        <div className="fruits-section">
          <h3>Fruit List:</h3>
          <p>< pre>A list of my favourite fruits</pre></p>
          <ul>
            <li>{props.fruits[0]}</li>
            <li>{props.fruits[1]}</li>
            <li>{props.fruits[2]}</li>
            <li>{props.fruits[3]}</li>
            <li>{props.fruits[4]}</li>
          </ul>
        </div>

        {/* Accessing specific array elements */}
        <div className="fruits-section">
          <h3>Specific Fruits:</h3>
          <p>First fruit: {props.fruits[0]}</p>
          <p>Third fruit: {props.fruits[2]}</p>
          <p>Last fruit: {props.fruits[4]}</p>
        </div>

        {/* Using array of objects - accessing by index */}
        <div className="fruits-section">
          <h3>Fruit Details:</h3>
          <table className="fruits-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.fruitDetails[0].name}</td>
                <td>{props.fruitDetails[0].color}</td>
                <td>${props.fruitDetails[0].price}</td>
              </tr>
              <tr>
                <td>{props.fruitDetails[1].name}</td>
                <td>{props.fruitDetails[1].color}</td>
                <td>${props.fruitDetails[1].price}</td>
              </tr>
              <tr>
                <td>{props.fruitDetails[2].name}</td>
                <td>{props.fruitDetails[2].color}</td>
                <td>${props.fruitDetails[2].price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


// Counter Component - demonstrates multiple events
export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleDoubleClick() {
    setCount(count * 2);
  }

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={handleDecrement} className="counter-btn">-</button>
        <button onClick={handleReset} className="counter-btn reset">Reset</button>
        <button onClick={handleIncrement} className="counter-btn">+</button>
      </div>
      <button onDoubleClick={handleDoubleClick} className="double-click-btn">
        Double Click to Multiply by 2
      </button>
    </div>
  );
}

// Interactive Card - demonstrates hover events
export function InteractiveCard({ title, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <div 
      className={`interactive-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
      <p className="click-counter">Clicked: {clickCount} times</p>
      {isHovered && <span className="hover-indicator">👆 Hovering!</span>}
    </div>
  );
}

// Contact Form - demonstrates form events
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function handleReset() {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Form</h2>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onFocus={() => setFocusedField('name')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'name' ? 'focused' : ''}
        placeholder="Your Name"
      />
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'email' ? 'focused' : ''}
        placeholder="Your Email"
      />
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        onFocus={() => setFocusedField('message')}
        onBlur={() => setFocusedField('')}
        className={focusedField === 'message' ? 'focused' : ''}
        placeholder="Your Message"
        rows="4"
      />
      <div className="button-group">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      {submitted && <p className="success-message">✓ Form submitted successfully!</p>}
    </form>
  );
}
