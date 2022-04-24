const Button = ({ onClick, text }) => {
  return (
    <div onClick={onClick}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
