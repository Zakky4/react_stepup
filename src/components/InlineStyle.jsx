export const InlineStyle = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    padding: "10px",
    border: "2px solid blue",
    borderRadius: "50px",
  };

  const titleStyle = {
    color: "#78909C",
    fontSize: "24px",
  };

  const buttonStyle = {
    backgroundColor: "#B2DFDB",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
