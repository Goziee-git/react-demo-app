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
