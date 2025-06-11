import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSlash } from "@fortawesome/free-solid-svg-icons"; 
import "./call.css";
import { useState } from "react";

export function Call() {
  const [muted, setMuted] = useState(false);
  const [video, setVideo] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const toggleVideo = () => {
    setVideo(!video);
  };

  const endCall = () => {
    console.log("Call Ended");
  };

  return (
    <>
      <div className="call">
        <video id="called"></video>
        <video id="receiver"></video>

        <div className="btns" >
          <button onClick={toggleMute} className="btnStyle">
            <FontAwesomeIcon icon={muted ? faMicrophoneSlash : faMicrophone} />
          </button>

          <button onClick={toggleVideo} className="btnStyle">
            <FontAwesomeIcon icon={video ? faVideo : faVideoSlash} />
          </button>

          <button onClick={endCall} className="endBtnStyle">
            <FontAwesomeIcon icon={faPhoneSlash} />
          </button>
        </div>
      </div>
    </>
  );
}

