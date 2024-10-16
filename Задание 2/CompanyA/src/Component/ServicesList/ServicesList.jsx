import "./ServicesList.css";

const ServicesList = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Consulting",
  ];

  return (
    <section className="services-list">
      <div className="card-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service}</h3>
            <p>
              Discover how our {service} can help your business grow and succeed
              in the digital world.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
