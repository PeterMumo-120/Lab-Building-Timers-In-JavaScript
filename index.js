// Get output area
var output = document.getElementById("output");
var recurringTask;

// Ensure output exists
if (!output) {
  throw new Error('Element with id "output" not found.');
}

// Countdown Timer
function startCountdown(seconds) {
  var time = seconds;
  output.innerHTML += "Countdown started<br>";

  var countdown = setInterval(function() {
    output.innerHTML += time + " seconds remaining<br>";
    time--;

    if (time < 0) {
      output.innerHTML += "⏰ Countdown finished<br>";
      clearInterval(countdown);
    }
  }, 1000);
}

// Delayed Reminder
function setReminder() {
  output.innerHTML += "Reminder set (3 seconds)<br>";

  setTimeout(function() {
    output.innerHTML += "🔔 Reminder: Take a short break<br>";
  }, 3000);
}

// Recurring Task
function startRecurring() {
  if (recurringTask) {
    output.innerHTML += "Recurring task already running<br>";
    return;
  }

  output.innerHTML += "Recurring task started<br>";

  recurringTask = setInterval(function() {
    output.innerHTML += "💡 Stay focused!<br>";
  }, 2000);
}

// Stop Recurring Task
function stopRecurring() {
  if (recurringTask) {
    clearInterval(recurringTask);
    recurringTask = null;
    output.innerHTML += "Recurring task stopped<br>";
  }
}
