import { useState } from "react";

const MailboxForm = ({ onAdd }) => {
  const [mailbox, setMailbox] = useState({ boxholder: "", size: "small" });

  const handleInputChange = (event) => {
    setMailbox((prevData) => {
      return { ...prevData, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(mailbox);
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
        <label htmlFor="size">Select a Box Size:</label>
        <select
          name="size"
          id="size"
          value={mailbox.size}
          onChange={handleInputChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
