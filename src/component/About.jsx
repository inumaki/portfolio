import "../App.css";
import "../assets/Css/list.css";

export const About = () => {
  return (
    <>
      <div className="title">About.</div>
      <ul>
        <li>
          <div className="list-items">Experience</div>
          <div className="sub-heading">Current</div>
          <p className="sub-summary">
            Currently employed as a full-time engineer at <strong>Tata Elxsi</strong>, actively
            engaged in learning and applying skills to develop and implement
            solutions for embedded systems using the C programming language.
          </p>
          <div className="sub-heading">Past</div>
          <p className="sub-summary">
            As a Software Engineer Intern at <strong>Pine Labs</strong>, I
            played a key role in migrating the E-commerce platform from Magento
            1 to Magento 2, implementing three crucial API integrations and
            developing systems for <strong>S2S and WhatsApp notifications </strong>. Additionally,
            I wrote integration API tests, contributing over <strong>10,000 </strong> lines of
            code to enhance the project's stability for global B2B customers.
          </p>
        </li>
        <li>
          <div className="list-items">Open Source Contribution</div>
          <p className="summary ">
            I am an active contributor to{" "}
            <a
              className="reference"
              href="https://github.com/streetwriters/notesnook"
            >
              <strong>Notesnook</strong>
            </a>
            , an open-source repository that has garnered over{" "}
            <strong>7.5k stars </strong>.
          </p>
        </li>
      </ul>
    </>
  );
};
