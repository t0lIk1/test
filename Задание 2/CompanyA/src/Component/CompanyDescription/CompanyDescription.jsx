import "./CompanyDescription.css";

const CompanyDescription = () => {
  return (
    <section className="company-description">
      <div className="container">
        <div className="company">
          <div className="description">
            <h2>About Us</h2>
            <p className="company_descr">
              Welcome to <strong>YourCompany</strong>, where innovation meets
              excellence. Established in 2020, we are dedicated to providing
              exceptional services that meet the unique needs of our clients.
              Our mission is to empower businesses through cutting-edge
              solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
