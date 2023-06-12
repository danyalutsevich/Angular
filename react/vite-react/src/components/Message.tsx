import "./Message.css";
import img from "/images/car1.jpg";

const Message = (props:any) => {
  console.log(props);
  const { text, data } = props;
  return (
    <>
      <div className="message">
        <img src={img} alt="" />
        <h2 style={{ color: "blue" }}>
          {data} {text}
        </h2>
      </div>
    </>
  );
};
export default Message;
