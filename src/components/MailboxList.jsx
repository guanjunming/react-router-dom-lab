const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id}>
          <h1>{mailbox._id}</h1>
          <p>{mailbox.boxholder}</p>
          <p>{mailbox.size}</p>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
