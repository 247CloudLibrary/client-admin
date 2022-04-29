const Button = ({ onClick, text }) => {
  return (
    <div className="btn" onClick={onClick}>
      <button className="button">{text}</button>
    </div>
  );
};

export default Button;
