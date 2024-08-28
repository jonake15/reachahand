import { useState } from "react";
// import { sendMessage, isTyping } from "react-chat-engine";
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form flex" onSubmit={handleSubmit}>
      {/* <input
        className="message-input poppinsRegular body-1"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <FaImage className="picture-icon text-color-lightBlue" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <IoSend className="send-icon mt-5 ml-4 text-color-lightBlue" />
      </button> */}
    </form>
  );
};

export default MessageForm;
