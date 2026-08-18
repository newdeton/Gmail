import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";
import Conversation from "./components/Conversation";

function App() {
  const [composeOpen, setComposeOpen] = useState(false);

  // Change this to true to show the Gmail conversation
  // Change to false to show the inbox
  const [showConversation, setShowConversation] = useState(true);

  return (
    <div className="gmail-app">
      <Header />

      <div className="gmail-body">
        <Sidebar onCompose={() => setComposeOpen(true)} />

        <main className="mail-area">
          {showConversation ? (
            <Conversation />
          ) : (
            <>
              <Toolbar />
              <EmailList />
            </>
          )}
        </main>
      </div>

      {composeOpen && (
        <Compose onClose={() => setComposeOpen(false)} />
      )}
    </div>
  );
}

export default App;