// Fruits Component - demonstrates accessing array elements by index
export function Fruits(props) {
  return (
    <>
      <div className="fruits-container">
        <h2>Fruits Collection</h2>
        
        {/* Accessing array elements by index */}
        <div className="fruits-section">
          <h3>Fruit List:</h3>
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
