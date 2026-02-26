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
