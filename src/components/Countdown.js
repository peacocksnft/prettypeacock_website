import React from "react";

const calculateTimeLeft = () => {
  let difference = +new Date(1637431200000) - Date.now();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  // console.log(timeLeft)
  return () => clearTimeout(timer);
});

export const Countdown = () => {
  return (
    <Row>
      <Col xs={6} lg={3} className="text-center text-white mb-3">
        <h1 style={{ fontSize: "80px" }}>
          {timeLeft.days.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h5>Days</h5>
      </Col>
      <Col xs={6} lg={3} className="text-center text-white mb-3">
        <h1 style={{ fontSize: "80px" }}>
          {timeLeft.hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h5>Hours</h5>
      </Col>
      <Col xs={6} lg={3} className="text-center text-white">
        <h1 style={{ fontSize: "80px" }}>
          {timeLeft.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h5>Minutes</h5>
      </Col>
      <Col xs={6} lg={3} className="text-center text-white">
        <h1 style={{ fontSize: "80px" }}>
          {timeLeft.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h5>Seconds</h5>
      </Col>
    </Row>
  );
};
