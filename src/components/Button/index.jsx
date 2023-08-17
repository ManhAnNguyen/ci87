import "./styles.css";

const Button = ({ text, background, radius }) => {
  return (
    <button
      style={{
        background,
        borderRadius: radius,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
