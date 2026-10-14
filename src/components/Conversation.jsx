import React, { useState } from "react";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SnoozeOutlinedIcon from "@mui/icons-material/SnoozeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

/* ===============================================================
   CONVERSATION MESSAGES
   Victoria Madail Perez — Accommodation Booking
   =============================================================== */

const messages = [
  {
    id: 1,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Sun,09, Aug 2026, 10:15 AM",
    subject: "Accommodation Booking Inquiry",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Good day,</p>

        <p>
          I am writing to inquire about accommodation arrangements for my
          upcoming visit to Kenya. I would appreciate information regarding
          the available accommodation options, booking requirements, and
          airport transfer services.
        </p>

        <p>
          Please let me know the available arrangements and the total cost.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria Madail Perez
        </p>
      </>
    ),
  },
  {
    id: 2,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Sun,09, Aug 2026, 11:30 AM",
    subject: "Re: Accommodation Booking Inquiry",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>Thank you for contacting Esto Safari Dreams.</p>

        <p>
          We would be happy to assist you with your accommodation
          arrangements. We can help coordinate your stay and discuss airport
          transfers and other travel requirements.
        </p>

        <p>
          Please review the proposed itinerary and accommodation details
          before confirming your arrangements.
        </p>

        <p>
          Kind regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 3,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Sun,09, Aug 2026, 12:45 PM",
    subject: "Re: Accommodation Details",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>Thank you for your response.</p>

        <p>
          Please share the proposed accommodation arrangements, including
          the check-in and check-out dates, location, and any additional
          services included in the booking.
        </p>

        <p>
          I would also appreciate clarification regarding the airport
          transfer arrangements.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria
        </p>
      </>
    ),
  },
  {
    id: 4,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Mon,10, Aug 2026, 09:00 AM",
    subject: "Re: Proposed Travel Arrangements",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          Please find the proposed travel arrangements attached for your
          review.
        </p>

        <p>
          <strong>Attachment:</strong>{" "}
          <a
            href="/Victoria_Madail_Perez_Itinerary.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Victoria_Madail_Perez_Itinerary.pdf
          </a>
        </p>

        <p>
          Kindly review the document and let us know if any changes are
          required before the arrangements are finalized.
        </p>

        <p>
          Best regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 5,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Tue,11, Aug 2026, 02:00 PM",
    subject: "Booking Payment Reference",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          For your records, the following payment details have been provided:
        </p>

        <ul>
          <li>
            <strong>Amount:</strong> USD 265.99
          </li>
          <li>
            <strong>Payment date:</strong> 11 August 2026
          </li>
          <li>
            <strong>Payment method:</strong> Credit card through Booking.com
          </li>
          <li>
            <strong>Transaction ID:</strong> 395767
          </li>
        </ul>

        <p>
          Please retain your payment documentation for reference. These
          details alone do not establish the status of the accommodation
          booking.
        </p>

        <p>
          Kind regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 6,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Wed,12, Aug 2026, 03:15 PM",
    subject: "Re: Accommodation Booking",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>Thank you for sharing the travel information.</p>

        <p>
          Could you please confirm the final accommodation details and
          advise whether any additional information is required from me?
        </p>

        <p>
          I would appreciate receiving the finalized itinerary once all
          arrangements have been confirmed.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria Madail Perez
        </p>
      </>
    ),
  },
  {
    id: 7,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Wed,12, Aug 2026, 04:30 PM",
    subject: "Re: Accommodation Booking – Further Details",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          Thank you for following up regarding your accommodation
          arrangements.
        </p>

        <p>
          We have noted your request for clarification on the accommodation
          details and airport transfer arrangements. These details should
          be reviewed against the final itinerary before any arrangements
          are treated as confirmed.
        </p>

        <p>
          Kind regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 8,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Wed,12, Aug 2026, 05:45 PM",
    subject: "Re: Accommodation Booking – Further Details",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>
          Thank you for the update.
        </p>

        <p>
          I would appreciate it if the accommodation address and the
          expected check-in arrangements could be included in the final
          itinerary so I can review the details together.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria Madail Perez
        </p>
      </>
    ),
  },
  {
    id: 9,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Wed,12, Aug 2026, 06:00 PM",
    subject: "Re: Accommodation Address and Check-In",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          We have noted your request to include the accommodation address
          and check-in information in the itinerary.
        </p>

        <p>
          Please ensure that the final accommodation details are checked
          and agreed upon before relying on them for your travel plans.
        </p>

        <p>
          Best regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 10,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Wed,12, Aug 2026, 06:15 PM",
    subject: "Re: Itinerary Review",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>
          I am reviewing the itinerary and would like to ensure that the
          accommodation information and travel arrangements are clearly
          listed.
        </p>

        <p>
          Please let me know if there are any outstanding details that need
          my attention before the itinerary can be finalized.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria
        </p>
      </>
    ),
  },
  {
    id: 11,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Wed,12, Aug 2026, 06:30 PM",
    subject: "Re: Itinerary Review",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          Thank you for reviewing the proposed itinerary.
        </p>

        <p>
          The outstanding accommodation and transfer details should be
          checked with the relevant service providers before a final
          itinerary is issued.
        </p>

        <p>
          We will need to ensure that any revised document reflects the
          arrangements that have actually been agreed.
        </p>

        <p>
          Kind regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 12,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Wed,12, Aug 2026, 06:45 PM",
    subject: "Re: Final Accommodation Details",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>
          Thank you for clarifying the review process.
        </p>

        <p>
          Please share the revised itinerary when the accommodation
          information and any applicable transfer details have been
          verified.
        </p>

        <p>
          I would like to review the complete details before considering
          the arrangements finalized.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria Madail Perez
        </p>
      </>
    ),
  },
  {
    id: 13,
    sender: "Esto Safari Dreams Reservations",
    email: "",
    recipient: "Victoria Madail Perez",
    date: "Wed,12, Aug 2026, 07:00 PM",
    subject: "Re: Final Accommodation Details",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>Dear Victoria,</p>

        <p>
          We have noted your request for the revised itinerary and complete
          accommodation details.
        </p>

        <p>
          Please use the final itinerary once the relevant arrangements
          have been verified. Any booking confirmation or transfer
          confirmation should be retained with your travel records.
        </p>

        <p>
          Best regards,
          <br />
          Reservations Team
          <br />
          Esto Safari Dreams Ltd.
        </p>
      </>
    ),
  },
  {
    id: 14,
    sender: "Victoria Madail Perez",
    email: "victoriamadailp@gmail.com",
    recipient: "Esto Safari Dreams Reservations",
    date: "Wed,12, Aug 2026, 07:00 PM",
    subject: "Re: Accommodation Booking – Follow-Up",
    avatar: "V",
    avatarClass: "avatar-victoria",
    body: (
      <>
        <p>Dear Reservations Team,</p>

        <p>
          I am following up once more regarding the accommodation
          arrangements and final itinerary.
        </p>

        <p>
          Could you please advise on the current status of the arrangements
          and whether any further information is required from me?
        </p>

        <p>
          Thank you for your assistance. I look forward to your response.
        </p>

        <p>
          Kind regards,
          <br />
          Victoria Madail Perez
        </p>
      </>
    ),
  },
];

/* ===============================================================
   CONVERSATION COMPONENT
   =============================================================== */

const Conversation = () => {
  const [openMessages, setOpenMessages] = useState({});
  const [detailsOpen, setDetailsOpen] = useState({});

  const toggleMessage = (messageId) => {
    setOpenMessages((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };

  const toggleDetails = (event, messageId) => {
    event.stopPropagation();

    setDetailsOpen((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };

  const handleMessageKeyDown = (event, messageId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMessage(messageId);
    }
  };

  return (
    <div className="conversation-page">
      {/* TOP TOOLBAR */}

      <div className="conversation-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-button" title="Back">
            <ArrowBackOutlinedIcon />
          </button>

          <button className="toolbar-button" title="Archive">
            <ArchiveOutlinedIcon />
          </button>

          <button className="toolbar-button" title="Report spam">
            <ReportOutlinedIcon />
          </button>

          <button className="toolbar-button" title="Delete">
            <DeleteOutlineOutlinedIcon />
          </button>

          <div className="toolbar-divider" />

          <button className="toolbar-button" title="Mark as unread">
            <MarkEmailUnreadOutlinedIcon />
          </button>

          <button className="toolbar-button" title="Snooze">
            <SnoozeOutlinedIcon />
          </button>

          <button className="toolbar-button" title="More">
            <MoreVertOutlinedIcon />
          </button>
        </div>

        <div className="conversation-navigation">
          <span>1 of {messages.length}</span>

          <button className="navigation-button" title="Older">
            ‹
          </button>

          <button className="navigation-button" title="Newer">
            ›
          </button>
        </div>
      </div>

      {/* EMAIL CONTENT */}

      <div className="conversation-content">
        <div className="conversation-subject-row">
          <div className="subject-wrapper">
            <h1>Accommodation Booking – Esto Safari Dreams</h1>
            <span className="inbox-label">Inbox X</span>
          </div>
        </div>

        <div className="messages">
          {messages.map((message) => {
            const isOpen = Boolean(openMessages[message.id]);
            const isDetailsOpen = Boolean(detailsOpen[message.id]);

            return (
              <div
                className={`message-card ${
                  isOpen
                    ? "message-card-open"
                    : "message-card-folded"
                }`}
                key={message.id}
              >
                <div
                  className={`gmail-message ${
                    isOpen
                      ? "gmail-message-open"
                      : "gmail-message-folded"
                  }`}
                >
                  {/* AVATAR */}

                  <div
                    className={`message-avatar ${message.avatarClass}`}
                  >
                    {message.avatar}
                  </div>

                  {/* MESSAGE CONTENT */}

                  <div className="gmail-message-content">
                    <div
                      className="message-top"
                      onClick={() => toggleMessage(message.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) =>
                        handleMessageKeyDown(event, message.id)
                      }
                    >
                      <div className="sender-details">
                        <div className="sender-name">
                          <strong>{message.sender}</strong>

                          {message.email && (
                            <span className="message-email">
                              &lt;{message.email}&gt;
                            </span>
                          )}
                        </div>

                        <div className="message-to">
                          <span>to {message.recipient}</span>

                          <button
                            className="recipient-details"
                            title="Show details"
                            onClick={(event) =>
                              toggleDetails(event, message.id)
                            }
                          >
                            {isDetailsOpen ? (
                              <KeyboardArrowUpOutlinedIcon />
                            ) : (
                              <KeyboardArrowDownOutlinedIcon />
                            )}
                          </button>
                        </div>

                        {isDetailsOpen && (
                          <div
                            className="message-details"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <div className="detail-row">
                              <span className="detail-label">from:</span>
                              <span className="detail-value">
                                {message.sender}
                                {message.email && ` <${message.email}>`}
                              </span>
                            </div>

                            <div className="detail-row">
                              <span className="detail-label">to:</span>
                              <span className="detail-value">
                                {message.recipient}
                              </span>
                            </div>

                            <div className="detail-row">
                              <span className="detail-label">date:</span>
                              <span className="detail-value">
                                {message.date}
                              </span>
                            </div>

                            <div className="detail-row">
                              <span className="detail-label">subject:</span>
                              <span className="detail-value">
                                {message.subject}
                              </span>
                            </div>

                            <div className="detail-row">
                              <span className="detail-label">mailed-by:</span>
                              <span className="detail-value">
                                {message.email
                                  ? message.email.split("@")[1]
                                  : "Not provided"}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="message-right">
                        <span className="message-time">{message.date}</span>

                        <button
                          className="message-action"
                          title="Reply"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <ReplyOutlinedIcon />
                        </button>

                        <button
                          className="message-action"
                          title="More"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <MoreVertOutlinedIcon />
                        </button>
                      </div>
                    </div>

                    {/* MESSAGE BODY */}

                    {isOpen && (
                      <div className="gmail-message-body">
                        {message.body}

                        <div className="gmail-reply-actions">
                          <button type="button">
                            <ReplyOutlinedIcon />
                            <span>Reply</span>
                          </button>

                          <button type="button">
                            <ForwardOutlinedIcon className="forward-icon" />
                            <span>Forward</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PAGE STYLES */}

      <style>{`
        .conversation-page {
          width: 100%;
          height: 100%;
          min-height: 0;
          background: #ffffff;
          color: #202124;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .conversation-toolbar {
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px 0 12px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          flex-shrink: 0;
        }

        .toolbar-left {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .toolbar-button {
          width: 40px;
          height: 40px;
          padding: 0;
          border: none;
          background: transparent;
          border-radius: 50%;
          color: #5f6368;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .toolbar-button:hover {
          background: #f1f3f4;
        }

        .toolbar-button svg {
          font-size: 21px;
        }

        .toolbar-divider {
          width: 1px;
          height: 26px;
          margin: 0 8px;
          background: #e5e7eb;
        }

        .conversation-navigation {
          display: flex;
          align-items: center;
          gap: 2px;
          color: #5f6368;
          font-size: 12px;
          white-space: nowrap;
        }

        .conversation-navigation > span {
          margin-right: 8px;
        }

        .navigation-button {
          width: 38px;
          height: 38px;
          padding: 0;
          border: none;
          background: transparent;
          border-radius: 50%;
          color: #5f6368;
          font-size: 28px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .navigation-button:hover {
          background: #f1f3f4;
        }

        .conversation-content {
          height: calc(100% - 52px);
          overflow-y: auto;
          background: #ffffff;
        }

        .conversation-subject-row {
          padding: 24px 40px 14px;
        }

        .subject-wrapper {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .conversation-subject-row h1 {
          margin: 0;
          font-size: 22px;
          line-height: 30px;
          font-weight: 400;
          color: #202124;
        }

        .inbox-label {
          padding: 3px 8px;
          background: #e8eaed;
          color: #5f6368;
          border-radius: 3px;
          font-size: 11px;
          line-height: 16px;
          white-space: nowrap;
        }

        .sample-label {
          padding: 2px 6px;
          border: 1px solid #dadce0;
          border-radius: 3px;
          color: #5f6368;
          font-size: 10px;
          line-height: 15px;
          white-space: nowrap;
        }

        .messages {
          width: 100%;
          background: #ffffff;
        }

        .message-card {
          width: 100%;
          border-bottom: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .message-card:last-child {
          border-bottom: none;
        }

        .gmail-message {
          width: 100%;
          display: flex;
          align-items: flex-start;
          padding: 10px 40px;
          background: #ffffff;
          transition: background 0.15s ease;
        }

        .gmail-message-folded:hover {
          background: #f8fafd;
        }

        .gmail-message-open {
          padding-top: 16px;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          margin-right: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .avatar-victoria {
          background: #7b1fa2;
        }

        .avatar-esto {
          background: #1a73e8;
        }

        .gmail-message-content {
          flex: 1;
          min-width: 0;
          text-align: left;
        }

        .message-top {
          width: 100%;
          min-height: 48px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          text-align: left;
        }

        .sender-details {
          min-width: 0;
          flex: 1;
          text-align: left;
        }

        .sender-name {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 6px;
          text-align: left;
        }

        .sender-name strong {
          color: #202124;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
        }

        .message-email {
          color: #5f6368;
          font-size: 12px;
          line-height: 18px;
        }

        .message-to {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-top: 1px;
          color: #5f6368;
          font-size: 12px;
          line-height: 18px;
          text-align: left;
        }

        .recipient-details {
          width: 20px;
          height: 20px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: transparent;
          color: #5f6368;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .recipient-details:hover {
          background: #f1f3f4;
          color: #202124;
        }

        .recipient-details svg {
          font-size: 17px;
        }

        .message-details {
          width: min(540px, 100%);
          margin-top: 10px;
          padding: 14px 16px;
          border: 1px solid #dadce0;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(60, 64, 67, 0.15);
          font-size: 12px;
          color: #202124;
          text-align: left;
          cursor: default;
        }

        .detail-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 8px;
          line-height: 18px;
          text-align: left;
        }

        .detail-row:last-child {
          margin-bottom: 0;
        }

        .detail-label {
          width: 58px;
          min-width: 58px;
          color: #5f6368;
          text-align: right;
        }

        .detail-value {
          flex: 1;
          min-width: 0;
          color: #202124;
          word-break: break-word;
          text-align: left;
        }

        .message-right {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
          color: #5f6368;
        }

        .message-time {
          margin-right: 4px;
          color: #5f6368;
          font-size: 12px;
          white-space: nowrap;
        }

        .message-action {
          width: 36px;
          height: 36px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: transparent;
          color: #5f6368;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .message-action:hover {
          background: #f1f3f4;
          color: #202124;
        }

        .message-action svg {
          font-size: 19px;
        }

        .gmail-message-body {
          width: 100%;
          max-width: 900px;
          padding: 12px 20px 10px 0;
          color: #202124;
          font-size: 14px;
          line-height: 1.7;
          text-align: left;
        }

        .gmail-message-body p {
          margin: 0 0 20px;
          text-align: left;
        }

        .gmail-message-body p:last-child {
          margin-bottom: 0;
        }

        .gmail-message-body strong {
          font-weight: 600;
        }

        .gmail-message-body ul {
          margin: 0 0 20px 20px;
          padding-left: 20px;
        }

        .gmail-message-body li {
          margin-bottom: 6px;
        }

        .gmail-message-body a {
          color: #1a73e8;
          text-decoration: underline;
          word-break: break-word;
        }

        .gmail-message-body a:hover {
          color: #174ea6;
        }

        .gmail-reply-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 34px;
          padding-bottom: 24px;
        }

        .gmail-reply-actions button {
          min-width: 105px;
          height: 40px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #dadce0;
          border-radius: 20px;
          background: #ffffff;
          color: #3c4043;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.15s ease, border-color 0.15s ease;
        }

        .gmail-reply-actions button:hover {
          background: #f6f8fc;
          border-color: #c7c9cc;
        }

        .gmail-reply-actions svg {
          font-size: 18px;
        }

        .forward-icon {
          transform: scaleX(-1);
        }

        .conversation-content::-webkit-scrollbar {
          width: 10px;
        }

        .conversation-content::-webkit-scrollbar-track {
          background: #f1f3f4;
        }

        .conversation-content::-webkit-scrollbar-thumb {
          background: #c1c5c8;
          border-radius: 8px;
          border: 2px solid #f1f3f4;
        }

        .conversation-content::-webkit-scrollbar-thumb:hover {
          background: #9aa0a6;
        }

        @media (max-width: 900px) {
          .conversation-subject-row {
            padding-left: 24px;
            padding-right: 24px;
          }

          .gmail-message {
            padding-left: 24px;
            padding-right: 24px;
          }

          .message-time {
            display: none;
          }

          .gmail-message-body {
            max-width: 100%;
          }
        }

        @media (max-width: 650px) {
          .conversation-toolbar {
            padding-left: 6px;
            padding-right: 6px;
          }

          .conversation-subject-row {
            padding: 18px 16px 12px;
          }

          .conversation-subject-row h1 {
            font-size: 18px;
            line-height: 25px;
          }

          .gmail-message {
            padding: 12px 16px;
          }

          .message-avatar {
            width: 36px;
            height: 36px;
            min-width: 36px;
            margin-right: 10px;
          }

          .sender-name {
            display: block;
          }

          .message-email {
            display: block;
            margin-top: 1px;
          }

          .message-top {
            gap: 8px;
          }

          .message-action {
            width: 32px;
            height: 32px;
          }

          .gmail-message-body {
            padding: 10px 8px 10px 0;
            font-size: 14px;
          }

          .gmail-reply-actions {
            margin-top: 26px;
          }

          .message-details {
            width: calc(100vw - 90px);
          }

          .conversation-navigation > span {
            display: none;
          }
        }

        @media (max-width: 450px) {
          .toolbar-left .toolbar-button:nth-child(6) {
            display: none;
          }

          .toolbar-divider {
            display: none;
          }

          .conversation-subject-row h1 {
            font-size: 17px;
          }

          .message-right {
            display: none;
          }

          .gmail-message-body {
            padding-left: 0;
          }

          .gmail-reply-actions {
            flex-wrap: wrap;
          }

          .gmail-reply-actions button {
            min-width: 92px;
            padding: 0 14px;
          }

          .detail-row {
            gap: 10px;
          }

          .detail-label {
            width: 45px;
            min-width: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default Conversation;