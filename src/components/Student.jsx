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
