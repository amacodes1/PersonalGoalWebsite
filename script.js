document.addEventListener("DOMContentLoaded", function () {
  // Display current time in UTC
  const currentTimeElement = document.getElementById("currentTimeUTC");
  const currentDayElement = document.getElementById("currentDay");

  function updateTimeAndDay() {
    const now = new Date();
    const utcString = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    currentTimeElement.textContent = utcString.slice(17, 25);
    currentDayElement.textContent = dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
