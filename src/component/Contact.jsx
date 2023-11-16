import "../App.css"

export const Contact = () => {
  return (
    <>
      <div className="contact-me">
        <div className="title">Contact.</div>
        <p className="summary">Reach me directly at <strong>aryankatiyar1420@gmail.com</strong></p>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea className="message" placeholder="Message" />
        <button className="send-message">Send</button>
      </div>
    </>
  );
};
