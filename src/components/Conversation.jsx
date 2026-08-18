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

   Every message is stored here.

   open:
   false = folded by default
   true  = expanded

   The component creates the open/closed state automatically.
   =============================================================== */

const messages = [
  {
    id: 1,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 18, 2026, 9:18 AM",
    subject:
      "Coastal Kenya Cottage Stay – Referral from Your Sales Agent",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Esto Safari Dreams Team,
        </p>

        <p>
          I was referred to your company by one of your sales agents,
          who recommended Esto Safari Dreams Limited for arranging
          accommodation and travel services in Kenya.
        </p>

        <p>
          I will be travelling to Kenya and would like assistance
          arranging a{" "}
          <strong>
            4-day cottage stay in the Coastal Region from 18 August
            to 21 August 2026
          </strong>
          .
        </p>

        <p>
          Could you please provide details of the available
          accommodation, what is included in the package, and the
          total cost?
        </p>

        <p>
          I would also appreciate information about the booking
          process and payment options.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 2,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 10:02 AM",
    subject: "Re: Coastal Kenya Cottage Stay",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          Thank you for contacting us, and we appreciate the referral
          from our sales representative.
        </p>

        <p>
          We would be delighted to assist with your upcoming visit
          to Kenya.
        </p>

        <p>
          Based on your requested dates, we can arrange a{" "}
          <strong>
            4-day cottage accommodation package in Kenya's Coastal
            Region, from 18 August to 21 August 2026
          </strong>
          .
        </p>

        <p>
          The initial package quotation is <strong>USD 2,500</strong>.
        </p>

        <p>
          The package will cover the agreed cottage accommodation
          and the travel-related arrangements discussed with our
          sales representative.
        </p>

        <p>
          If the proposal is suitable, we can proceed with confirming
          the details and arranging payment.
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
        </p>
      </>
    ),
  },

  {
    id: 3,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 18, 2026, 10:27 AM",
    subject: "Re: Coastal Kenya Cottage Stay – Package Price",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for the proposal.
        </p>

        <p>
          I am interested in proceeding with the package, but the{" "}
          <strong>USD 2,500</strong> quotation is slightly above my
          budget.
        </p>

        <p>
          Considering that I was referred to your company by your
          sales agent, would you be able to offer me a discounted
          rate?
        </p>

        <p>
          If we can agree on a reasonable price, I would be happy to
          confirm the booking and make payment promptly.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 4,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 11:05 AM",
    subject: "Re: Coastal Kenya Cottage Stay – Revised Quote",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          Thank you for getting back to us.
        </p>

        <p>
          We appreciate your interest in booking with Esto Safari
          Dreams Limited.
        </p>

        <p>
          After reviewing your request, we can revise the quotation
          from <strong>USD 2,500 to USD 2,300</strong> as a special
          rate for your booking.
        </p>

        <p>
          The revised package would cover your stay from{" "}
          <strong>18 August to 21 August 2026</strong>.
        </p>

        <p>
          Please let us know if you would like to proceed with the
          revised offer.
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
    id: 5,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 18, 2026, 11:32 AM",
    subject: "Re: Revised Quote – Final Offer",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for reducing the price.
        </p>

        <p>
          I would really like to proceed with the booking. However,
          my maximum available budget is{" "}
          <strong>USD 2,229</strong>.
        </p>

        <p>
          Would you be able to accept{" "}
          <strong>USD 2,229 as the final price</strong> for the
          entire package?
        </p>

        <p>
          If you can accommodate this amount, I am ready to proceed
          with payment immediately.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 6,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 12:04 PM",
    subject: "Re: Final Package Price – USD 2,229",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          Thank you for your message.
        </p>

        <p>
          We have reviewed your request and are pleased to confirm
          that we can accept <strong>USD 2,229</strong> as the final
          agreed package price.
        </p>

        <p>
          <strong>Final Booking Summary</strong>
        </p>

        <p>
          <strong>Guest:</strong> Jade
          <br />
          <strong>Destination:</strong> Kenya – Coastal Region
          <br />
          <strong>Package:</strong> 4-Day Cottage Stay
          <br />
          <strong>Check-in:</strong> 18 August 2026
          <br />
          <strong>Check-out:</strong> 21 August 2026
          <br />
          <strong>Duration:</strong> 4 days
          <br />
          <strong>Original quotation:</strong> USD 2,500
          <br />
          <strong>Final agreed price:</strong> USD 2,229
        </p>

        <p>
          For convenience, payment can be made through the secure
          Paystack checkout:
        </p>

        <p>
          <strong>Paystack Payment Link:</strong>
          <br />
          <a
            href="https://paystack.shop/pay/vt_ypl58dzz"
            target="_blank"
            rel="noreferrer"
          >
            https://paystack.shop/pay/vt_ypl58dzz
          </a>
        </p>

        <p>
          Once payment has actually been completed, please retain
          your payment confirmation for your records.
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
        </p>
      </>
    ),
  },

  {
    id: 7,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 18, 2026, 12:28 PM",
    subject: "Re: Final Package Price – Payment",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for accepting the final price.
        </p>

        <p>
          I have proceeded with the payment of{" "}
          <strong>USD 2,229</strong> using the payment option
          provided.
        </p>

        <p>
          Please confirm receipt of the payment and advise me
          regarding the next steps and any information you require
          from me before arrival.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 8,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 1:01 PM",
    subject: "Re: Payment – Coastal Cottage Booking",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          Thank you for the update.
        </p>

        <p>
          We have noted your payment notification and are proceeding
          with the applicable booking arrangements.
        </p>

        <p>
          Your booking details are recorded as follows:
        </p>

        <p>
          <strong>Guest:</strong> Jade
          <br />
          <strong>Location:</strong> Kenya Coastal Region
          <br />
          <strong>Accommodation:</strong> Cottage
          <br />
          <strong>Check-in:</strong> 18 August 2026
          <br />
          <strong>Check-out:</strong> 21 August 2026
          <br />
          <strong>Duration:</strong> 4 days
          <br />
          <strong>Agreed package price:</strong> USD 2,229
        </p>

        <p>
          Our team will coordinate the arrangements and provide you
          with the relevant information required for your arrival.
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
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 2:15 PM",
    subject: "Final Confirmation – Coastal Cottage Stay",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          We are pleased to confirm the upcoming arrangements for
          your Coastal Region stay.
        </p>

        <p>
          Your scheduled stay is from{" "}
          <strong>18 August 2026 through 21 August 2026</strong>.
        </p>

        <p>
          Please ensure that you have your travel documents and any
          other personal requirements ready for your trip.
        </p>

        <p>
          Our team remains available should you require assistance
          before your arrival.
        </p>

        <p>
          We look forward to welcoming you to Kenya.
        </p>

        <p>
          Warm regards,
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
    id: 10,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 18, 2026, 4:42 PM",
    subject: "Re: Final Confirmation – I Have Arrived",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          I wanted to let you know that I have arrived safely and
          have proceeded with the accommodation arrangements.
        </p>

        <p>
          Thank you for the assistance provided before my arrival.
        </p>

        <p>
          I will let you know if I require any further assistance
          during my stay.
        </p>

        <p>
          Kind regards,
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 11,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 18, 2026, 5:03 PM",
    subject: "Re: Welcome to Kenya",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          We are pleased to hear that you have arrived safely.
        </p>

        <p>
          Should you require any assistance concerning the
          accommodation or the arrangements included in your
          package, please feel free to contact us.
        </p>

        <p>
          We hope you have a pleasant stay along the Kenyan Coast.
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
    id: 12,
    sender: "Jade",
    email: "jade@example.com",
    recipient: "Esto Safari Dreams Limited",
    date: "Aug 21, 2026, 9:20 AM",
    subject: "Re: Coastal Cottage Stay – Service Completion",
    avatar: "J",
    avatarClass: "avatar-jade",
    body: (
      <>
        <p>
          Dear Estone,
        </p>

        <p>
          Thank you for the assistance throughout my stay.
        </p>

        <p>
          I confirm that my scheduled stay from{" "}
          <strong>18 August to 21 August 2026</strong> has been
          completed and that the agreed accommodation and services
          were provided.
        </p>

        <p>
          I appreciate the communication and assistance from your
          team throughout the booking and stay.
        </p>

        <p>
          Kind regards,
          <br />
          <br />
          <strong>Jade</strong>
        </p>
      </>
    ),
  },

  {
    id: 13,
    sender: "Esto Safari Dreams Limited",
    email: "info@estosafaridreams.com",
    recipient: "Jade",
    date: "Aug 21, 2026, 10:11 AM",
    subject: "Re: Coastal Cottage Stay – Thank You",
    avatar: "E",
    avatarClass: "avatar-esto",
    body: (
      <>
        <p>
          Dear Jade,
        </p>

        <p>
          Thank you for taking the time to confirm completion of
          your stay.
        </p>

        <p>
          We are pleased to know that the arrangements were
          completed and that you were satisfied with the services
          provided.
        </p>

        <p>
          It was a pleasure assisting with your trip to Kenya, and
          we sincerely appreciate the trust you placed in{" "}
          <strong>Esto Safari Dreams Limited</strong>.
        </p>

        <p>
          We hope to have the opportunity to assist you again in
          the future.
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
          Company Registration No. <strong>PVT-DM1K8YZ5</strong>
          <br />
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

  /*
   * -------------------------------------------------------------
   * OPEN MESSAGE STATE
   * -------------------------------------------------------------
   *
   * Object format:
   *
   * {
   *   1: false,
   *   2: true,
   *   3: false
   * }
   *
   * Every message starts folded.
   */

  const [openMessages, setOpenMessages] = useState({});


  /*
   * -------------------------------------------------------------
   * DETAILS DROPDOWN STATE
   * -------------------------------------------------------------
   *
   * Each message has its own "to..." dropdown.
   */

  const [detailsOpen, setDetailsOpen] = useState({});


  /*
   * -------------------------------------------------------------
   * TOGGLE MESSAGE
   * -------------------------------------------------------------
   */

  const toggleMessage = (messageId) => {
    setOpenMessages((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };


  /*
   * -------------------------------------------------------------
   * TOGGLE DETAILS
   * -------------------------------------------------------------
   */

  const toggleDetails = (event, messageId) => {
    event.stopPropagation();

    setDetailsOpen((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };


  /*
   * -------------------------------------------------------------
   * KEYBOARD MESSAGE TOGGLE
   * -------------------------------------------------------------
   */

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
              Coastal Kenya Cottage Stay – Referral from Your Sales
              Agent
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
                  isOpen ? "message-card-open" : "message-card-folded"
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

                        ONLY VISIBLE WHEN OPEN
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

        /* =======================================================
           PAGE
        ======================================================= */

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


        .avatar-jade {
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
           MESSAGE TOP / CLICK TARGET
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

           Mirror the forward icon so it points in the opposite
           direction from the reply icon.
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