import image from "./image.svg";

const Message = (props) => {
  const { active } = props;
  return (
    <div className="card message-card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <div className="placeholder">You selected out of {active}</div>
        <h3 className="card-title">Thank you! </h3>
        <p className="card-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Message;
