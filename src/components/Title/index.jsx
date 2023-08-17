import "./styles.css";
const Title = ({ title, desc, summary, color, fontSize }) => {
  return (
    <>
      <h1
        className="title"
        style={{
          color,
          fontSize,
        }}
      >
        {title}
      </h1>
      <p>{desc}</p>
      <p>{summary}</p>
    </>
  );
};

export default Title;
