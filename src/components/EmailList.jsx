import { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";

import { emails } from "../data/emails";

export default function EmailList() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  if (selectedEmail) {
    return (
      <Conversation
        email={selectedEmail}
        onBack={() => setSelectedEmail(null)}
      />
    );
  }

  return (
    <div className="email-list">
      {emails.map((email) => (
        <div
          className="email-row"
          key={email.id}
          onClick={() => setSelectedEmail(email)}
        >
          <CheckBoxOutlineBlankIcon className="email-checkbox" />

          <StarBorderOutlinedIcon className="star-icon" />

          <div className="email-sender">{email.sender}</div>

          <div className="email-content">
            <strong>{email.subject}</strong>
            <span> — {email.preview}</span>
          </div>

          <div className="email-time">{email.time}</div>
        </div>
      ))}
    </div>
  );
}

function Conversation({ email, onBack }) {
  return (
    <div className="conversation">
      {/* Conversation toolbar */}
      <div className="conversation-toolbar">
        <button onClick={onBack}>
          <ArrowBackIcon />
        </button>

        <button>
          <ArchiveOutlinedIcon />
        </button>

        <button>
          <DeleteOutlineOutlinedIcon />
        </button>

        <button>
          <MarkEmailUnreadOutlinedIcon />
        </button>

        <button className="conversation-more">
          <MoreVertIcon />
        </button>
      </div>

      {/* Subject */}
      <div className="conversation-header">
        <h1>{email.subject}</h1>
      </div>

      {/* Message */}
      <div className="message">
        <div className="message-avatar">
          {email.sender.charAt(0)}
        </div>

        <div className="message-body">
          <div className="message-top">
            <div>
              <strong>{email.sender}</strong>
              <span className="message-email">
                &lt;no-reply@2537.com&gt;
              </span>
            </div>

            <span className="message-time">{email.time}</span>
          </div>

          <p>Hi Joe,</p>

          <p>
            {email.preview}. This is a sample conversation area where the
            complete email message will appear.
          </p>

          <p>
            You can replace this content with the real message body when we
            connect the application to your backend.
          </p>

          <p>Regards,</p>
          <p><strong>{email.sender}</strong></p>

          <div className="message-actions">
            <button>
              <ReplyOutlinedIcon />
              Reply
            </button>

            <button>
              <ForwardOutlinedIcon />
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}