import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Sarah_Shahi_cropped_and_retouched.jpg",
      message: "whats up",
    },
    {
      name: "Sarah",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Sarah_Shahi_cropped_and_retouched.jpg",
      message: "how are u",
    },
    {
      message: "Hi Sarah, how u doing?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH SARAH ON 11/11/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            {" "}
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholer="type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          className="chatScreen__button"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
