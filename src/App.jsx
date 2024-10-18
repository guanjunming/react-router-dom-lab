import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import LetterForm from "./components/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (mailbox) => {
    mailbox._id = mailboxes.length + 1;
    setMailboxes((prevMailboxes) => [...prevMailboxes, mailbox]);
  };

  const addLetter = (letter) => {
    setLetters((prevLetters) => [...prevLetters, letter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </>
  );
};

export default App;
