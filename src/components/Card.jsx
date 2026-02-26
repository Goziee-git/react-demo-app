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
