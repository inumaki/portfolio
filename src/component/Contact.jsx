import "../App.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [temporaryText, setTemporaryText] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!name.trim()) {
      setNameError("Name cannot be empty");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Message cannot be empty");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_h7lasif",
          "template_ga0uwci",
          form.current,
          "UPaKXrdCeMu_CYAUQ"
        )
        .then(
          () => {
            setEmail("");
            setMessage("");
            setName("");
            setTemporaryText("Mail sent successfully!");
            setTimeout(() => {
              setTemporaryText("");
            }, 2000);
          },
          (error) => {
            setMessageError("error");
            setTemporaryText("Some error has occurred");
            setTimeout(() => {
              setTemporaryText("");
              setMessageError("");
            }, 2000);
          }
        );
    }
  };

  return (
    <form ref={form}>
      <div className="contact-me">
        <div className="title">Contact.</div>
        <p className="summary">
          Reach me directly at <strong>aryankatiyar1420@gmail.com</strong>
        </p>
        <input
          placeholder="Name"
          value={name}
          name="from_name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div className="error">{nameError}</div>}
        <input
          placeholder="Email"
          name="reply_to"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error">{emailError}</div>}
        <textarea
          className="message"
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {temporaryText && <div className= {messageError ? 'error' : 'status'}>{temporaryText}</div>}
        <input
          type="submit"
          className="send-message"
          value="Send"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default Contact;
