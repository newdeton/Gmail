import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function Compose({ onClose }) {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = () => {
    if (!to.trim()) {
      alert("Please enter a recipient.");
      return;
    }

    alert("Message sent!");

    setTo("");
    setSubject("");
    setBody("");
    onClose();
  };

  if (minimized) {
    return (
      <div className="compose-minimized" onClick={() => setMinimized(false)}>
        <strong>New Message</strong>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <div className={`compose-window ${maximized ? "maximized" : ""}`}>
      <div className="compose-header">
        <strong>New Message</strong>

        <div className="compose-header-actions">
          <button onClick={() => setMinimized(true)}>
            <MinimizeIcon />
          </button>

          <button onClick={() => setMaximized(!maximized)}>
            <CropSquareIcon />
          </button>

          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>

      <input
        className="compose-input"
        placeholder="Recipients"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        className="compose-input"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        className="compose-body"
        placeholder=""
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="compose-footer">
        <button className="send-email" onClick={sendEmail}>
          Send
        </button>

        <button className="compose-tool">
          <AttachFileIcon />
        </button>

        <button className="compose-tool">
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}