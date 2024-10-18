import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <main>
      {selectedBox && (
        <>
          <h1>Mailbox {mailboxId}</h1>

          <h2>Details</h2>
          <p>Boxholder: {selectedBox.boxholder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>

          <h2>Letters</h2>
          {selectedLetters.map((letter, index) => (
            <div key={index}>
              <p>Recipient: {letter.recipient}</p>
              <p>{letter.message}</p>
            </div>
          ))}
        </>
      )}
      {!selectedBox && <h1>Mailbox Not Found!</h1>}
    </main>
  );
};

export default MailboxDetails;
