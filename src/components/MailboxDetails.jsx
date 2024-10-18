import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <main>
      {selectedBox && (
        <>
          <h1>Mailbox {mailboxId}</h1>
          <h2>Details</h2>
          <p>Boxholder: {selectedBox.boxholder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </>
      )}
      {!selectedBox && <h1>Mailbox Not Found!</h1>}
    </main>
  );
};

export default MailboxDetails;
