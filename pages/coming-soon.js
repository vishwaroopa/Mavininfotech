import React from "react";
import Link from "next/link";

const ComingSoon = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2023 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };
  return (
    <>
      <div className="coming-soon-area">
        <div className="container">
          <div className="coming-soon-content">
            <Link href="/">
              <a className="logo">
                <img
                  src="/images/logo.png"
                  className="black-logo"
                  alt="image"
                />
              </a>
            </Link>

            <h2>We Are Launching Soon</h2>
            <div id="timer" className="flex-wrap d-flex justify-content-center">
              <div
                id="days"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                <span className="days">{days}</span> Days
              </div>
              <div
                id="hours"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                <span className="hours">{hours}</span> Hours
              </div>
              <div
                id="minutes"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                <span className="minutes">{minutes}</span> Minutes
              </div>
              <div
                id="seconds"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                <span className="seconds">{seconds}</span> Seconds
              </div>
            </div>

            <form className="newsletter-form" data-bs-toggle="validator">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                />
              </div>
              <button type="submit" className="default-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
