# React Events - Complete Guide

## What are React Events?

React events are actions that happen in your application, like clicking a button, typing in an input, hovering over an element, or submitting a form. React uses a synthetic event system that works consistently across all browsers.

---

## Key Differences: HTML vs React Events

### HTML Events:
```html
<button onclick="handleClick()">Click Me</button>
<input onchange="handleChange()" />
```

### React Events:
```javascript
<button onClick={handleClick}>Click Me</button>
<input onChange={handleChange} />
```

**Differences:**
1. React uses camelCase: `onClick` not `onclick`
2. Pass function reference: `{handleClick}` not `"handleClick()"`
3. Can't return `false` to prevent default (must use `e.preventDefault()`)

---

## Most Common React Events

### 1. onClick - Button Clicks

**From Your Code (validateNumber function):**
```javascript
// In App.jsx
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

// Usage
<button onClick={validateNumber} className="validate-button">
  VALIDATE ME
</button>
```

**With Event Parameter:**
```javascript
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
}

<button onClick={handleClick}>Click Me</button>
```

---

### 2. onChange - Input Changes

**From Your Code (input handling):**
```javascript
// In App.jsx
const [inputValue, setInputValue] = useState('');

<input 
  type="number" 
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  placeholder="Enter a number (1-10)"
/>
```

**Detailed Example:**
```javascript
function handleInputChange(event) {
  const value = event.target.value;
  console.log('User typed:', value);
  setInputValue(value);
}

<input onChange={handleInputChange} />
```

---

### 3. onSubmit - Form Submission

**Example for Your App:**
```javascript
function handleSubmit(event) {
  event.preventDefault(); // Prevents page reload
  validateNumber();
}

<form onSubmit={handleSubmit}>
  <input 
    type="number" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <button type="submit">VALIDATE ME</button>
</form>
```

---

### 4. onMouseEnter / onMouseLeave - Hover Effects

**Example:**
```javascript
const [isHovered, setIsHovered] = useState(false);

<div 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={isHovered ? 'card-hovered' : 'card'}
>
  {isHovered ? 'You are hovering!' : 'Hover over me'}
</div>
```

---

### 5. onFocus / onBlur - Input Focus

**Example:**
```javascript
const [isFocused, setIsFocused] = useState(false);

<input 
  type="text"
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  placeholder={isFocused ? 'Type here...' : 'Click to focus'}
/>
```

---

### 6. onKeyDown / onKeyPress / onKeyUp - Keyboard Events

**Example - Press Enter to Submit:**
```javascript
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    validateNumber();
  }
}

<input 
  type="number"
  onKeyPress={handleKeyPress}
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>
```

---

### 7. onDoubleClick - Double Click

**Example:**
```javascript
function handleDoubleClick() {
  alert('You double-clicked!');
}

<div onDoubleClick={handleDoubleClick}>
  Double click me
</div>
```

---

### 8. onCopy / onPaste / onCut - Clipboard Events

**Example:**
```javascript
function handlePaste(event) {
  event.preventDefault();
  alert('Pasting is disabled!');
}

<input 
  type="text"
  onPaste={handlePaste}
  placeholder="Try to paste here"
/>
```

---

## Event Object Properties

Every event handler receives an event object with useful properties:

```javascript
function handleEvent(event) {
  console.log(event.type);           // Event type: 'click', 'change', etc.
  console.log(event.target);         // Element that triggered the event
  console.log(event.currentTarget);  // Element with the event handler
  console.log(event.target.value);   // Value of input (for inputs)
  console.log(event.key);            // Key pressed (for keyboard events)
  console.log(event.clientX);        // Mouse X position
  console.log(event.clientY);        // Mouse Y position
}
```

---

## Practical Examples for Your Code

### Example 1: Enhanced Number Validator with Multiple Events

```javascript
// In Component.jsx
export function NumberValidator() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleValidate() {
    const num = Number(inputValue);
    if (inputValue === '' || isNaN(num) || num < 1 || num > 10) {
      setMessage("❌ Number is not valid");
    } else {
      setMessage("✓ Number is valid, Thanks!");
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleValidate();
    }
  }

  function handleClear() {
    setInputValue('');
    setMessage('');
  }

  return (
    <div className="validator-container">
      <input 
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={isFocused ? 'number-input focused' : 'number-input'}
        placeholder="Enter a number (1-10)"
      />
      <div className="button-group">
        <button onClick={handleValidate}>VALIDATE</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
```

---

### Example 2: Interactive Card with Hover and Click

```javascript
// In Component.jsx
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
    </div>
  );
}
```

---

### Example 3: Form with Multiple Events

```javascript
// In Component.jsx
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
  }

  function handleReset() {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      <div className="button-group">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
      {submitted && <p className="success">Form submitted successfully!</p>}
    </form>
  );
}
```

---

### Example 4: Counter with Multiple Event Types

```javascript
// In Component.jsx
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

  function handleKeyPress(event) {
    if (event.key === '+') handleIncrement();
    if (event.key === '-') handleDecrement();
    if (event.key === '0') handleReset();
  }

  return (
    <div 
      className="counter-container"
      onKeyPress={handleKeyPress}
      tabIndex="0"
    >
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onDoubleClick={handleDoubleClick}>
        Double Click to Multiply by 2
      </button>
      <p className="hint">Press +, -, or 0 on keyboard</p>
    </div>
  );
}
```

---

## Event Handler Patterns

### Pattern 1: Inline Arrow Function
```javascript
<button onClick={() => console.log('Clicked!')}>Click</button>
```
**Use when:** Simple one-liner, no need for reusability

### Pattern 2: Function Reference
```javascript
function handleClick() {
  console.log('Clicked!');
}
<button onClick={handleClick}>Click</button>
```
**Use when:** Reusable function, better performance

### Pattern 3: Function with Parameters
```javascript
function handleClick(id) {
  console.log('Clicked item:', id);
}
<button onClick={() => handleClick(5)}>Click</button>
```
**Use when:** Need to pass arguments

### Pattern 4: Event Object
```javascript
function handleClick(event) {
  console.log('Target:', event.target);
}
<button onClick={handleClick}>Click</button>
```
**Use when:** Need event details

---

## Common Mistakes to Avoid

### ❌ Wrong: Calling function immediately
```javascript
<button onClick={handleClick()}>Click</button>
// This calls the function on render, not on click!
```

### ✓ Correct: Pass function reference
```javascript
<button onClick={handleClick}>Click</button>
```

### ❌ Wrong: Using HTML event names
```javascript
<button onclick={handleClick}>Click</button>
```

### ✓ Correct: Use camelCase
```javascript
<button onClick={handleClick}>Click</button>
```

---

## Summary Table

| Event | When it fires | Common use case |
|-------|---------------|-----------------|
| onClick | Element is clicked | Buttons, links |
| onChange | Input value changes | Forms, inputs |
| onSubmit | Form is submitted | Form validation |
| onMouseEnter | Mouse enters element | Hover effects |
| onMouseLeave | Mouse leaves element | Hover effects |
| onFocus | Element receives focus | Input highlighting |
| onBlur | Element loses focus | Input validation |
| onKeyDown | Key is pressed down | Keyboard shortcuts |
| onKeyPress | Key is pressed | Enter to submit |
| onKeyUp | Key is released | Real-time search |
| onDoubleClick | Element is double-clicked | Special actions |
| onCopy/Paste/Cut | Clipboard action | Prevent copying |

---

## Best Practices

1. **Use descriptive names**: `handleSubmit`, `handleInputChange`, not `func1`, `func2`
2. **Prevent default when needed**: Use `event.preventDefault()` for forms
3. **Use arrow functions for inline handlers**: `onClick={() => doSomething()}`
4. **Extract complex logic**: Don't write long functions inline
5. **Consider performance**: Use function references instead of inline functions for frequently rendered components

---

## Key Takeaways

- React events use camelCase: `onClick`, `onChange`, `onSubmit`
- Pass function references, not function calls: `onClick={handleClick}` not `onClick={handleClick()}`
- Event handlers receive an event object with useful properties
- Use `event.preventDefault()` to prevent default browser behavior
- Combine events with state to create interactive UIs
