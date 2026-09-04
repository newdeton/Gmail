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

   Adrian — One-Night Accommodation Booking

   Every message is stored here.

   Messages start folded and can be expanded individually.
   =============================================================== */

const messages = [
  {
    id: 1,
    sender: "Adrian",
    email: "adrian@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 20, 2026, 9:18 AM",
    subject: "Inquiry – One Night Accommodation",
    avatar: "A",
    avatarClass: "avatar-adrian",
    body: (
      <>
        <p>
          Dear Esto Safari Dreams Team,
        </p>

        <p>
          I was referred to your company by one of your sales
          representatives and would like to make a booking for
          accommodation.
        </p>

        <p>
          I am looking for a room for <strong>one night</strong> and
          would like to know what options you have available,
          including the price and what is included with the
          accommodation.
        </p>

        <p>
          Please let me know the booking process and available
          payment options.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Adrian</strong>
        </p>
      </>
    ),
  },

  {
    id: 2,
    sender: "Esto Safari Dreams Limited",
    email: "estosafaridreams@gmail.com",
    recipient: "Adrian",
    date: "Aug 20, 2026, 10:02 AM",
    subject: "Re: Inquiry – One Night Accommodation",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Adrian,
        </p>

        <p>
          Thank you for contacting <strong>Esto Safari Dreams
          Limited</strong>, and we appreciate the referral from our
          sales representative.
        </p>

        <p>
          We would be happy to assist with your accommodation
          requirements.
        </p>

        <p>
          We can arrange a{" "}
          <strong>one-night room stay</strong> based on your
          requested date.
        </p>

        <p>
          The available package is offered at <strong>USD 149</strong>.
        </p>

        <p>
          The booking includes:
        </p>

        <ul>
          <li>One-night room accommodation;</li>
          <li>
            Standard guest check-in and check-out arrangements;
          </li>
          <li>Accommodation support from our team; and</li>
          <li>Assistance with the booking process.</li>
        </ul>

        <p>
          If you would like to proceed, we can provide the payment
          instructions and finalize the reservation.
        </p>

        <p>
          Kind regards,
          <br />
          <br />
          <strong>Estone Odumbe</strong>
          <br />
          Sole Director
          <br />
          <strong>Esto Safari Dreams Limited</strong>
          <br />
          Travel, Tours &amp; Safari Services
          <br />
          Company Registration No. <strong>PVT-DM1K8YZ5</strong>
          <br />
          <a href="mailto:estosafaridreams@gmail.com">
            estosafaridreams@gmail.com
          </a>
        </p>
      </>
    ),
  },

  {
    id: 3,
    sender: "Adrian",
    email: "adrian@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 20, 2026, 11:15 AM",
    subject: "Re: One Night Accommodation – Confirmation",
    avatar: "A",
    avatarClass: "avatar-adrian",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for the information.
        </p>

        <p>
          The <strong>USD 149</strong> price is acceptable to me and
          I would like to proceed with the one-night accommodation
          booking.
        </p>

        <p>
          Please send me the payment instructions so that I can
          complete the booking.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Adrian</strong>
        </p>
      </>
    ),
  },

  {
    id: 4,
    sender: "Esto Safari Dreams Limited",
    email: "estosafaridreams@gmail.com",
    recipient: "Adrian",
    date: "Aug 20, 2026, 11:42 AM",
    subject: "Re: One Night Accommodation – Payment",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Adrian,
        </p>

        <p>
          Thank you for confirming.
        </p>

        <p>
          The agreed booking details are:
        </p>

        <p>
          <strong>Guest:</strong> Adrian
          <br />
          <strong>Service:</strong> One-night room accommodation
          <br />
          <strong>Booking Date:</strong> 20 August 2026
          <br />
          <strong>Duration:</strong> 1 night
          <br />
          <strong>Total Amount:</strong> USD 149
        </p>

        <p>
          Payment can be completed through our available secure
          online payment channel.
        </p>

        <p>
          Once payment has been successfully completed, please send
          us the payment confirmation so that we can proceed with the
          reservation and provide the applicable accommodation
          confirmation.
        </p>

        <p>
          Kind regards,
          <br />
          <br />
          <strong>Esto Safari Dreams Limited</strong>
        </p>
      </>
    ),
  },

  {
    id: 5,
    sender: "Adrian",
    email: "adrian@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 20, 2026, 1:08 PM",
    subject: "Re: One Night Accommodation – Payment Confirmation",
    avatar: "A",
    avatarClass: "avatar-adrian",
    body: (
      <>
        <p>
          Dear Team,
        </p>

        <p>
          Thank you.
        </p>

        <p>
          I have completed the payment of <strong>USD 149</strong>{" "}
          for the one-night accommodation.
        </p>

        <p>
          Please confirm receipt and proceed with the reservation.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Adrian</strong>
        </p>
      </>
    ),
  },

  {
    id: 6,
    sender: "Esto Safari Dreams Limited",
    email: "estosafaridreams@gmail.com",
    recipient: "Adrian",
    date: "Aug 20, 2026, 1:35 PM",
    subject: "Re: One Night Accommodation – Booking Confirmation",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Adrian,
        </p>

        <p>
          Thank you for the payment update.
        </p>

        <p>
          We have recorded your booking request for the one-night
          accommodation.
        </p>

        <p>
          <strong>Booking Summary</strong>
        </p>

        <p>
          <strong>Guest:</strong> Adrian
          <br />
          <strong>Accommodation:</strong> Room
          <br />
          <strong>Duration:</strong> 1 night
          <br />
          <strong>Booking Date:</strong> 20 August 2026
          <br />
          <strong>Total Package:</strong> USD 149
        </p>

        <p>
          Our team will coordinate the accommodation arrangements
          and provide the relevant check-in information.
        </p>

        <p>
          Please ensure that you have your identification and booking
          information available when checking in.
        </p>

        <p>
          We look forward to assisting you.
        </p>

        <p>
          Kind regards,
          <br />
          <br />
          <strong>Estone Odumbe</strong>
          <br />
          Esto Safari Dreams Limited
        </p>
      </>
    ),
  },

  {
    id: 7,
    sender: "Adrian",
    email: "adrian@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 20, 2026, 5:18 PM",
    subject: "Re: Accommodation Booking – Arrival",
    avatar: "A",
    avatarClass: "avatar-adrian",
    body: (
      <>
        <p>
          Dear Esto Safari Dreams Team,
        </p>

        <p>
          I have arrived and have checked in for the accommodation.
        </p>

        <p>
          Thank you for coordinating the booking and for your
          assistance.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Adrian</strong>
        </p>
      </>
    ),
  },

  {
    id: 8,
    sender: "Esto Safari Dreams Limited",
    email: "estosafaridreams@gmail.com",
    recipient: "Adrian",
    date: "Aug 20, 2026, 5:32 PM",
    subject: "Re: Accommodation Booking – Welcome",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Adrian,
        </p>

        <p>
          We are pleased to hear that you have arrived safely and
          completed your check-in.
        </p>

        <p>
          We hope you have a comfortable stay.
        </p>

        <p>
          Should you require any assistance during your stay, please
          do not hesitate to contact our team.
        </p>

        <p>
          Kind regards,
          <br />
          <br />
          <strong>Esto Safari Dreams Limited</strong>
        </p>
      </>
    ),
  },

  {
    id: 9,
    sender: "Adrian",
    email: "adrian@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 21, 2026, 10:15 AM",
    subject: "Re: One Night Accommodation – Service Completion",
    avatar: "A",
    avatarClass: "avatar-adrian",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for your assistance with my accommodation
          booking.
        </p>

        <p>
          I confirm that the{" "}
          <strong>one-night accommodation service</strong> arranged
          through Esto Safari Dreams Limited has been completed.
        </p>

        <p>
          The accommodation arrangements were provided as agreed, and
          I appreciate the assistance from your team throughout the
          booking process.
        </p>

        <p>
          Thank you for your service.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Adrian</strong>
        </p>
      </>
    ),
  },

  {
    id: 10,
    sender: "Esto Safari Dreams Limited",
    email: "estosafaridreams@gmail.com",
    recipient: "Adrian",
    date: "Aug 21, 2026, 11:02 AM",
    subject: "Re: One Night Accommodation – Thank You",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Adrian,
        </p>

        <p>
          Thank you for confirming completion of your stay.
        </p>

        <p>
          We are pleased to know that your accommodation
          arrangements were completed successfully.
        </p>

        <p>
          We sincerely appreciate your choosing{" "}
          <strong>Esto Safari Dreams Limited</strong> and trusting us
          with your travel arrangements.
        </p>

        <p>
          We hope to assist you again in the future.
        </p>

        <p>
          Warm regards,
          <br />
          <br />
          <strong>Estone Odumbe</strong>
          <br />
          Sole Director
          <br />
          <strong>Esto Safari Dreams Limited</strong>
          <br />
          Travel, Tours &amp; Safari Services
          <br />
          Company Registration No.: <strong>PVT-DM1K8YZ5</strong>
          <br />
          Email:{" "}
          <a href="mailto:estosafaridreams@gmail.com">
            estosafaridreams@gmail.com
          </a>
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


  /* =============================================================
     TOGGLE MESSAGE
  ============================================================= */

  const toggleMessage = (messageId) => {
    setOpenMessages((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };


  /* =============================================================
     TOGGLE DETAILS
  ============================================================= */

  const toggleDetails = (event, messageId) => {
    event.stopPropagation();

    setDetailsOpen((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };


  /* =============================================================
     KEYBOARD MESSAGE TOGGLE
  ============================================================= */

  const handleMessageKeyDown = (event, messageId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMessage(messageId);
    }
  };


  return (
    <div className="conversation-page">

      {/* =========================================================
          TOP TOOLBAR
      ========================================================= */}

      <div className="conversation-toolbar">

        <div className="toolbar-left">

          <button
            className="toolbar-button"
            title="Back"
          >
            <ArrowBackOutlinedIcon />
          </button>

          <button
            className="toolbar-button"
            title="Archive"
          >
            <ArchiveOutlinedIcon />
          </button>

          <button
            className="toolbar-button"
            title="Report spam"
          >
            <ReportOutlinedIcon />
          </button>

          <button
            className="toolbar-button"
            title="Delete"
          >
            <DeleteOutlineOutlinedIcon />
          </button>

          <div className="toolbar-divider" />

          <button
            className="toolbar-button"
            title="Mark as unread"
          >
            <MarkEmailUnreadOutlinedIcon />
          </button>

          <button
            className="toolbar-button"
            title="Snooze"
          >
            <SnoozeOutlinedIcon />
          </button>

          <button
            className="toolbar-button"
            title="More"
          >
            <MoreVertOutlinedIcon />
          </button>

        </div>


        {/* =======================================================
            NAVIGATION
        ======================================================= */}

        <div className="conversation-navigation">

          <span>
            1 of 20
          </span>

          <button
            className="navigation-button"
            title="Older"
          >
            ‹
          </button>

          <button
            className="navigation-button"
            title="Newer"
          >
            ›
          </button>

        </div>

      </div>


      {/* =========================================================
          EMAIL CONTENT
      ========================================================= */}

      <div className="conversation-content">

        {/* =======================================================
            SUBJECT
        ======================================================= */}

        <div className="conversation-subject-row">

          <div className="subject-wrapper">

            <h1>
              Inquiry – One Night Accommodation
            </h1>

            <span className="inbox-label">
              Inbox
            </span>

          </div>

        </div>


        {/* =======================================================
            ALL MESSAGES
        ======================================================= */}

        <div className="messages">

          {messages.map((message) => {

            const isOpen = Boolean(
              openMessages[message.id]
            );

            const isDetailsOpen = Boolean(
              detailsOpen[message.id]
            );

            return (
              <div
                className={`message-card ${
                  isOpen
                    ? "message-card-open"
                    : "message-card-folded"
                }`}
                key={message.id}
              >

                {/* =================================================
                    MESSAGE HEADER
                ================================================= */}

                <div
                  className={`gmail-message ${
                    isOpen
                      ? "gmail-message-open"
                      : "gmail-message-folded"
                  }`}
                >

                  {/* ===============================================
                      AVATAR
                  =============================================== */}

                  <div
                    className={`message-avatar ${
                      message.avatarClass
                    }`}
                  >
                    {message.avatar}
                  </div>


                  {/* ===============================================
                      MESSAGE CONTENT
                  =============================================== */}

                  <div className="gmail-message-content">

                    {/* =============================================
                        CLICKABLE MESSAGE HEADER
                    ============================================= */}

                    <div
                      className="message-top"
                      onClick={() =>
                        toggleMessage(message.id)
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) =>
                        handleMessageKeyDown(
                          event,
                          message.id
                        )
                      }
                    >

                      {/* -------------------------------------------
                          SENDER
                      ------------------------------------------- */}

                      <div className="sender-details">

                        <div className="sender-name">

                          <strong>
                            {message.sender}
                          </strong>

                          <span className="message-email">
                            &lt;{message.email}&gt;
                          </span>

                        </div>


                        {/* -----------------------------------------
                            TO + DROPDOWN
                        ----------------------------------------- */}

                        <div className="message-to">

                          <span>
                            to {message.recipient}
                          </span>

                          <button
                            className="recipient-details"
                            title="Show details"
                            onClick={(event) =>
                              toggleDetails(
                                event,
                                message.id
                              )
                            }
                          >
                            {isDetailsOpen ? (
                              <KeyboardArrowUpOutlinedIcon />
                            ) : (
                              <KeyboardArrowDownOutlinedIcon />
                            )}
                          </button>

                        </div>


                        {/* =========================================
                            DETAILS POPUP
                        ========================================= */}

                        {isDetailsOpen && (

                          <div
                            className="message-details"
                            onClick={(event) =>
                              event.stopPropagation()
                            }
                          >

                            <div className="detail-row">

                              <span className="detail-label">
                                from:
                              </span>

                              <span className="detail-value">
                                {message.sender}{" "}
                                &lt;{message.email}&gt;
                              </span>

                            </div>


                            <div className="detail-row">

                              <span className="detail-label">
                                to:
                              </span>

                              <span className="detail-value">
                                {message.recipient}
                              </span>

                            </div>


                            <div className="detail-row">

                              <span className="detail-label">
                                date:
                              </span>

                              <span className="detail-value">
                                {message.date}
                              </span>

                            </div>


                            <div className="detail-row">

                              <span className="detail-label">
                                subject:
                              </span>

                              <span className="detail-value">
                                {message.subject}
                              </span>

                            </div>


                            <div className="detail-row">

                              <span className="detail-label">
                                mailed-by:
                              </span>

                              <span className="detail-value">
                                {message.email.includes(
                                  "estosafaridreams.com"
                                )
                                  ? "estosafaridreams.com"
                                  : "gmail.com"}
                              </span>

                            </div>

                          </div>

                        )}

                      </div>


                      {/* =========================================
                          DATE + ACTIONS
                      ========================================= */}

                      <div className="message-right">

                        <span className="message-time">
                          {message.date}
                        </span>


                        <button
                          className="message-action"
                          title="Reply"
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                        >
                          <ReplyOutlinedIcon />
                        </button>


                        <button
                          className="message-action"
                          title="More"
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                        >
                          <MoreVertOutlinedIcon />
                        </button>

                      </div>

                    </div>


                    {/* =============================================
                        MESSAGE BODY
                    ============================================= */}

                    {isOpen && (

                      <div className="gmail-message-body">

                        {message.body}


                        {/* =========================================
                            REPLY / FORWARD
                        ========================================= */}

                        <div className="gmail-reply-actions">

                          <button>

                            <ReplyOutlinedIcon />

                            <span>
                              Reply
                            </span>

                          </button>


                          <button>

                            <ForwardOutlinedIcon
                              className="forward-icon"
                            />

                            <span>
                              Forward
                            </span>

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


      {/* =========================================================
          PAGE STYLES
      ========================================================= */}

      <style>{`

        .conversation-page {
          width: 100%;
          height: 100%;
          min-height: 0;

          background: #ffffff;

          color: #202124;

          overflow: hidden;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }


        /* =======================================================
           TOOLBAR
        ======================================================= */

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


        /* =======================================================
           NAVIGATION
        ======================================================= */

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


        /* =======================================================
           CONTENT
        ======================================================= */

        .conversation-content {
          height: calc(100% - 52px);

          overflow-y: auto;

          background: #ffffff;
        }


        /* =======================================================
           SUBJECT
        ======================================================= */

        .conversation-subject-row {
          padding: 24px 40px 14px;
        }


        .subject-wrapper {
          display: flex;
          align-items: center;

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


        /* =======================================================
           MESSAGES
        ======================================================= */

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


        /* =======================================================
           MESSAGE HEADER
        ======================================================= */

        .gmail-message {
          width: 100%;

          display: flex;

          align-items: flex-start;

          padding:
            10px
            40px;

          background: #ffffff;

          transition:
            background 0.15s ease;
        }


        .gmail-message-folded:hover {
          background: #f8fafd;
        }


        .gmail-message-open {
          padding-top: 16px;
        }


        /* =======================================================
           AVATAR
        ======================================================= */

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


        .avatar-adrian {
          background: #7b1fa2;
        }


        .avatar-esto {
          background: #1a73e8;
        }


        /* =======================================================
           MESSAGE CONTENT
        ======================================================= */

        .gmail-message-content {
          flex: 1;

          min-width: 0;

          text-align: left;
        }


        /* =======================================================
           MESSAGE TOP
        ======================================================= */

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


        /* =======================================================
           SENDER DETAILS
        ======================================================= */

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


        /* =======================================================
           TO ROW
        ======================================================= */

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


        /* =======================================================
           MESSAGE DETAILS
        ======================================================= */

        .message-details {
          width: min(540px, 100%);

          margin-top: 10px;

          padding: 14px 16px;

          border: 1px solid #dadce0;

          border-radius: 8px;

          background: #ffffff;

          box-shadow:
            0 2px 6px rgba(60, 64, 67, 0.15);

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


        /* =======================================================
           DATE + ACTIONS
        ======================================================= */

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


        /* =======================================================
           MESSAGE BODY
        ======================================================= */

        .gmail-message-body {
          width: 100%;

          max-width: 900px;

          padding:
            12px
            20px
            10px
            0;

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
          margin:
            0
            0
            20px
            20px;

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


        /* =======================================================
           REPLY / FORWARD
        ======================================================= */

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

          transition:
            background 0.15s ease,
            border-color 0.15s ease;
        }


        .gmail-reply-actions button:hover {
          background: #f6f8fc;

          border-color: #c7c9cc;
        }


        .gmail-reply-actions svg {
          font-size: 18px;
        }


        /* =======================================================
           FORWARD ICON
        ======================================================= */

        .forward-icon {
          transform: scaleX(-1);
        }


        /* =======================================================
           SCROLLBAR
        ======================================================= */

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


        /* =======================================================
           RESPONSIVE
        ======================================================= */

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
            padding:
              18px
              16px
              12px;
          }


          .conversation-subject-row h1 {
            font-size: 18px;

            line-height: 25px;
          }


          .gmail-message {
            padding:
              12px
              16px;
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
            padding:
              10px
              8px
              10px
              0;

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

          .toolbar-left
          .toolbar-button:nth-child(6) {
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

            padding:
              0
              14px;
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