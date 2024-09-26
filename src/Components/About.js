import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">

          <div className="about-content">
            <p className="section-subtitle">Why Choose EventBuzz?</p>

            <h2 className="h2 section-title">
              Your Trusted Ticket Marketplace
            </h2>

            <p className="about-text">
              Experience the best of event ticketing with our intuitive platform, ensuring a secure and hassle-free process for both buyers and sellers.
            </p>
          <div className="image">
            <img src="	https://cdn.wegic.ai/assets/onepage/ai/image/636670f1-87d3-4f3a-9c5c-f9fc11b8942d.jpeg" id="image" alt="About us" />
          </div>
            <ul className="about-list">
              <li className="about-item">
                <p className="about-item-text">User-Friendly Interface
                Navigate with ease using our simple and intuitive design.</p>
              </li>

              <li className="about-item">

                <p className="about-item-text">Secure Payments
                Your transactions are safe with our top-notch security features.</p>
              </li>

              <li className="about-item">
                <p className="about-item-text">Wide Range of Events
                Find tickets for concerts, sports, theater, and more.</p>
              </li>
            </ul>

            <a href="#service" className="btn">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="service" id="service">
        <div className="container">
          <p className="section-subtitle">Our Services</p>
          <h2 className="h2 section-title">Our Main Focus</h2>

          <ul className="service-list">
            {/* Service Card 1 */}
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="./assets/images/service-1.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Buy a home</a>
                </h3>

                <p className="card-text">
                  Over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>
                </a>
              </div>
            </li>

            {/* Service Card 2 */}
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="./assets/images/service-2.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="addlisting.html">Rent a home</a>
                </h3>

                <p className="card-text">
                  Over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>

                <a href="addlisting.html" className="card-link">
                  <span>List A Home</span>
                </a>
              </div>
            </li>

            {/* Service Card 3 */}
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="./assets/images/service-3.png" alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="addlisting.html">Sell a home</a>
                </h3>

                <p className="card-text">
                  Over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>

                <a href="addlisting.html" className="card-link">
                  <span>List A Home</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>

  );
}

export default About;
