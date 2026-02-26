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
