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
