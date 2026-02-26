// Countries Component
export function Countries() {
  const x = "Africa";
  return (
    <div className="countries-container">
      <h2>{(x) === "Africa" ? "AFRICA" : "NOT AFRICA"}</h2>
    </div>
  );
}
