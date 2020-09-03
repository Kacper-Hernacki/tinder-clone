import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey, how u doing?"
        timestamp="40 sec ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/7/70/Sarah_Shahi_cropped_and_retouched.jpg"
      />

      <Chat
        name="Sussanna"
        message="Hey, how u doing?"
        timestamp="4 min ago"
        profilePic="..."
      />

      <Chat
        name="Roxanne"
        message="Hey, how u doing?"
        timestamp="10 hours ago"
        profilePic="..."
      />

      <Chat
        name="Dua Lipa"
        message="Hey, how u doing?"
        timestamp="4 days ago"
        profilePic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUlyTFN60JmTruT2Y-ZKIoD_2M6bUPX3N6G1ROcALY-pyI-Ifw"
      />
    </div>
  );
}

export default Chats;
