import React from "react";
import "../Styles/EventListing.css";

function EventListing() {
  return (
    <div>
      <EventListingsSection1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <BottomContainer />
    </div>
  );
}

const EventListingsSection1 = () => (
  <div className="gradient-bg d-flex flex-row" id="eventlistings_section1">
    <div className="container-1 d-flex flex-column justify-content-center align-items-start">
      <h1>Find Your Next Event</h1>
      <p>Discover and buy tickets for the best events in town with ease.</p>
      <button className="btn btn-primary">Search Events</button>
    </div>

    <div className="right-splash d-flex justify-content-end align-items-center">
      <img
        src="https://static.pollstar.com/wp-content/uploads/2022/01/f44b4140-c28e-4ede-b2ad-5b333452f33f-14726_Coldplay_CPA_6W2A1198-resize-scaled.jpg"
        alt="Event Picture"
      />
    </div>
  </div>
);

const Container2 = () => (
  <div className="container container-2">
    <div className="d-flex flex-row">
      <div className="d-flex flex-column">
        <div>
          <p style={{ color: 'orange', fontSize: '20px' }}>Don't Miss Out</p>
          <h2 style={{ fontSize: '60px', fontWeight: 'bolder' }}>Highlighted Events</h2>
          <p style={{ fontSize: 'large' }}>Check out these must-attend events and secure your tickets now.</p>
        </div>

        <div className="horizontal-line"></div>

        <div className="d-flex flex-row justify-content-between">
          <div className="event-section">
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/91/58/music-note-line-icon-on-black-background-vector-26849158.jpg"
              alt="Concert Logo"
              className="logo"
            />
            <div className="event-description">
              <p>Concerts: Experience live music like never before.</p>
            </div>
          </div>
          <div className="event-section">
            <img
              src="https://www.shutterstock.com/image-vector/american-football-logo-simple-rugby-260nw-1249309804.jpg"
              alt="Sports Logo"
              className="logo"
            />
            <div className="event-description">
              <p>Sports: Catch the excitement of live sports events.</p>
            </div>
          </div>
        </div>
        <button className="cont2-button">Explore Events →</button>
      </div>
      <div>
        <img
          src="https://cdn.wegic.ai/assets/onepage/ai/image/1b3262d0-19df-4940-b0d4-e70488e80542.jpeg"
          alt="Highlighted Event Image"
          style={{ height: '80vh', width: '30vw', borderRadius: '8px', marginLeft: '50px' }}
        />
      </div>
    </div>
  </div>
);

const Container3 = () => (
  <div className="container-3">
    <h2>Event Gallery</h2>
    <div className="d-flex flex-row justify-content-between">
      <BoxComponent
        link="https://example.com/music"
        imgSrc="https://cdn.wegic.ai/assets/onepage/ai/image/7808b7d6-d26c-4db4-98f6-cc124f3619c5.jpeg"
        title="Music"
      />
      <BoxComponent
        link="https://example.com/sports"
        imgSrc="https://media.gettyimages.com/id/642535368/photo/the-tools-for-a-cricket.jpg"
        title="Sports"
      />
      <BoxComponent
        link="https://example.com/business-conference"
        imgSrc="https://cdn.wegic.ai/assets/onepage/ai/image/ede6b68c-7934-4e49-9a89-e640ba8a9422.jpeg"
        title="Business Conference"
      />
      <BoxComponent
        link="https://example.com/cultural-festivals"
        imgSrc="https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.jpg"
        title="Cultural Festivals"
      />
      <BoxComponent
        link="https://example.com/art-exhibition"
        imgSrc="https://cdn.wegic.ai/assets/onepage/ai/image/dff3087b-5afa-43c7-8f9f-65366666a9c2.jpeg"
        title="Art Exhibition"
      />
      <BoxComponent
        link="https://example.com/theatre-play"
        imgSrc="https://images.unsplash.com/photo-1503095396549-807759245b35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlYXRyZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Theatre Play"
      />
    </div>
  </div>
);

const BoxComponent = ({ link, imgSrc, title }) => (
  <div className="box">
    <div className="box-content">
      <a href={link}>
        <img src={imgSrc} alt={title} className="box-image" />
        <h3 className="box-title">{title}</h3>
      </a>
    </div>
  </div>
);

const Container4 = () => (
  <section className="container-4">
    <div className="container ">
      <h2 className="cta">Join the Buzz!</h2>
      <p>
        Over <strong>1200+ events</strong> listed and <strong>5000+ tickets</strong> booked!
      </p>

      <div className="stats-container">
        <div className="stat-box">
          <h3 className="stat-number">5K+</h3>
          <p>Events listed</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-number">200K+</h3>
          <p>Happy users</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-number">1M+</h3>
          <p>Tickets sold</p>
        </div>
      </div>

      <hr className="stats-line" />
      <a href="#eventlistings_section1">
        <button className="cta-button-container start-exploring-button">Start Exploring</button>
      </a>
    </div>
  </section>
);

const Container5 = () => (
  <div className="container container-5">
    <div className="contact-layout">
      <div className="contact-info">
        <h2 className="contact-heading">Get in Touch</h2>
        <p>Have any questions? Reach out to our support team.</p>

        <div className="contact-details">
          <ContactDetail title="USA Office Hours" details="Monday-Friday 8:00 am to 5:00 pm" />
          <ContactDetail title="Canada Office Hours" details="Monday-Friday 9:00 am to 6:00 pm" />
          <ContactDetail title="Our Address" details="123 EventBuzz St, Celebration City, USA" />
          <ContactDetail title="Get in touch" details="+1-800-123-4567 | +1-800-765-4321" />
        </div>
      </div>
      <div className="contact-image">
        <img
          src="https://cdn.wegic.ai/assets/onepage/ai/image/9ed5b1c8-8959-41ce-a025-fc45f0f80ab9.jpeg"
          alt="Contact Us Image"
        />
      </div>
    </div>
  </div>
);

const ContactDetail = ({ title, details }) => (
  <div className="detail-box">
    <h3 className="contact-heading">{title}</h3>
    <p>{details}</p>
  </div>
);

const BottomContainer = () => (
  <div className="bottom-container">
    <div className="d-flex flex-row footer-links">
      <FooterLink link="#" text="About Event Buzz" />
      <FooterLink link="#" text="Our Services" />
      <FooterLink link="#" text="Popular Events" />
      <FooterLink link="#" text="Careers" />
    </div>

    <div className="social-media">
      <SocialMediaLink
        link="https://www.instagram.com"
        imgSrc="https://cdn-icons-png.flaticon.com/128/5968/5968780.png"
        alt="Instagram Logo"
      />
      <SocialMediaLink
        link="https://twitter.com"
        imgSrc="https://cdn-icons-png.flaticon.com/128/733/733579.png"
        alt="Twitter Logo"
      />
      <SocialMediaLink
        link="https://facebook.com"
        imgSrc="https://cdn-icons-png.flaticon.com/128/733/733547.png"
        alt="Facebook Logo"
      />
      <SocialMediaLink
        link="https://linkedin.com"
        imgSrc="https://cdn-icons-png.flaticon.com/128/733/733561.png"
        alt="LinkedIn Logo"
      />
    </div>
  </div>
);

const FooterLink = ({ link, text }) => (
  <a href={link}>
    <p className="footer-link">{text}</p>
  </a>
);

const SocialMediaLink = ({ link, imgSrc, alt }) => (
  <a href={link} className="social-media-icon">
    <img src={imgSrc} alt={alt} style={{ height: '35px', width: '35px' }} />
  </a>
);

export default EventListing;