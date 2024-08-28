const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image poppinsRegular"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        fontFamily: "PoppinsRegular",
        color: "white",
        backgroundColor: "#0064e6",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
