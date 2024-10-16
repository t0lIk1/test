import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <footer className="contact-info">
      <div className="container">
        <div className="contact-block">
          <p>
            Email: <a href="mailto:info@company.com">info@company.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+123-456-7890</a>
          </p>
          <p>Address: 1234 Main St, Anytown, USA</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactInfo;
