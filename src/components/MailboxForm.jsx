import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addMailbox }) => {
  const [mailbox, setMailbox] = useState({ boxholder: "", boxSize: "Small" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setMailbox((prevData) => {
      return { ...prevData, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMailbox(mailbox);
    setMailbox({ boxholder: "", boxSize: "Small" });
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          placeholder="Boxholder name"
          value={mailbox.boxholder}
          onChange={handleInputChange}
          required
        ></input>
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={mailbox.boxSize}
          onChange={handleInputChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
