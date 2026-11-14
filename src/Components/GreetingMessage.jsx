const day = new Date();
const language = document.documentElement.lang;
const time = day.toLocaleDateString(language, {
  weekday: "long"
});
const morning = day.getHours() >= 6 && day.getHours() <= 12;

let message;

function GreetingMessage() {
  if (time.toLowerCase() === "monday") {
    message = `Happy ${day} Time = ${time}`;
  } else if (time.toLowerCase() === "tuesday") {
    message = `Happy ${day} Time = ${time} Four days to go`;
  } else if (time.toLowerCase() === "wednesday") {
    message = `Happy ${day} Time = ${time} Three days to go`;
  } else if (time.toLowerCase() === "thursday") {
    message = `Happy ${day} Time = ${time} Two days to go`;
  } else if (time.toLowerCase() === "friday") {
    message = `Happy ${day} Time = ${time} Almost There`;
  } else {
    message = `Enjoy ${day} Time = ${time}`;
  }

  return (
    <>
      <h1>{message}</h1>
      {morning ? (
        <p>Did you have breakfast yet?</p>
      ) : (
        <p>Did you had evening or night tea yet?</p>
      )}
    </>
  );
}

export default GreetingMessage;