import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [letter, setLetter] = useState({
    mailboxId: 1,
    recipient: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setLetter((prevLetter) => {
      return { ...prevLetter, [event.target.id]: event.target.value };
    });
  };

  const handleMailboxChange = (event) => {
    setLetter((prevLetter) => {
      return { ...prevLetter, mailboxId: Number(event.target.value) };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addLetter(letter);
    setLetter({
      mailboxId: 1,
      recipient: "",
      message: "",
    });

    navigate(`/mailboxes/${letter.mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select
          name="mailboxId"
          id="mailboxId"
          value={letter.mailboxId}
          onChange={handleMailboxChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Recipient name"
          value={letter.recipient}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={letter.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;
