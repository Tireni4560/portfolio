function SectionHeader({ title, description, small }) {
  return (
    <div className="section-header">
      {small && <span className="section-label">{small}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeader;
