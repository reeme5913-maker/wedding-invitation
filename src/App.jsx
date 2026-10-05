import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const weddingDate = new Date("2026-10-14T19:00:00");

  const [isOpen, setIsOpen] = useState(false);
const [isOpening, setIsOpening] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="wedding-page">
      {!isOpen ? (
       <section className={`opening-screen ${isOpening ? "is-opening" : ""}`}>
          <div className="stars stars-one">✦</div>
          <div className="stars stars-two">✧</div>
          <div className="stars stars-three">✦</div>
          <div className="stars stars-four">✧</div>
          <div className="stars stars-five">✦</div>

          <div className="opening-content">
            <span className="ornament">✦</span>

            <p className="invited-small">You're</p>

            <h1>Invited</h1>

            <p className="opening-subtitle">
              A celebration of love
              <br />
              & a new beginning
            </p>

            <button
  className="open-button"
  onClick={() => {
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 700);
  }}
>
  ♡ Tap to Open ♡
</button>
          </div>
        </section>
      ) : (
        <section className="invitation-content">

          {/* HERO */}
          <section className="hero-section">
            <span className="top-ornament">✦</span>

            <p className="names">
              I S L A M <span>♡</span> H A N A A
            </p>

            <p className="wedding-title">THE WEDDING</p>

            <div className="divider">
              <span>✧</span>
              <i></i>
              <span>✧</span>
            </div>

            <p className="date-month">OCTOBER</p>

            <h2 className="date-number">14</h2>

            <p className="date-year">2026</p>

            <div className="divider">
              <span>✧</span>
              <i></i>
              <span>✧</span>
            </div>






            <p className="love-message">
              A day to remember,
              <br />
              a love to celebrate.
            </p>

          
          </section>

          {/* PHOTO PLACE */}
          <section className="photo-section">
  <div className="photo-frame">
    <div className="photo-decoration decoration-top">✦</div>
    <div className="photo-decoration decoration-bottom">✦</div>

    <img
      src="/couple.jpg"
      alt="Islam and Hanaa"
      className="couple-photo"
    />
  </div>
</section>

          {/* COUNTDOWN */}
          <section className="countdown-section">
            <p className="section-label">✦ COUNTING DOWN TO OUR DAY ✦</p>

            <div className="countdown">
              <div>
                <strong>{timeLeft.days ?? 0}</strong>
                <span>Days</span>
              </div>

              <div>
                <strong>{timeLeft.hours ?? 0}</strong>
                <span>Hours</span>
              </div>

              <div>
                <strong>{timeLeft.minutes ?? 0}</strong>
                <span>Minutes</span>
              </div>

              <div>
                <strong>{timeLeft.seconds ?? 0}</strong>
                <span>Seconds</span>
              </div>
            </div>
          </section>

          {/* CELEBRATION */}
          <section className="celebration-section">
            <p className="section-label">✦ THE CELEBRATION ✦</p>

            <div className="time">
              7:00 <span>PM</span>
            </div>

            <div className="venue-frame">
              <p className="venue-name">"قاعة اللسان"</p>

              <div className="venue-line"></div>

              <a
                href="https://maps.app.goo.gl/dqrCbtyFTPjq5ib26?g_st=ac"
                target="_blank"
                rel="noreferrer"
                className="location-button"
              >
                📍 View Location
              </a>
            </div>
          </section>

          {/* FINAL MESSAGE */}
          <section className="final-section">

            <h2>
              We can't wait
              <br />
              to celebrate with you
            </h2>

          </section>

        </section>
      )}
    </main>
  );
}

export default App;


