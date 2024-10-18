import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              {`Mailbox ${mailbox._id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;
