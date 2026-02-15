import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are passionate about delivering premium quality cannabis products
          with safety, transparency, and customer satisfaction at our core.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>🌿 Our Mission</h2>
          <p>
            To provide high-quality, lab-tested cannabis products that promote
            wellness and enhance lifestyle experiences responsibly.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 Our Vision</h2>
          <p>
            To become a trusted leader in the cannabis industry by focusing on
            innovation, sustainability, and customer care.
          </p>
        </div>

        <div className="about-card">
          <h2>💚 Why Choose Us?</h2>
          <ul>
            <li>Premium Quality Products</li>
            <li>Lab Tested & Certified</li>
            <li>Secure & Fast Delivery</li>
            <li>Excellent Customer Support</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
