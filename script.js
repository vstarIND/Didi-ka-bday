function getIST() {
  const now = new Date();
  return new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
}

function birthdayDate(year) {
  return new Date(Date.UTC(year, 0, 24)); // 24 Jan
}

function countdown(target, el) {
  const now = getIST();
  const diff = target - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

function update() {
  const now = getIST();
  const year = now.getFullYear();

  const thisYear = birthdayDate(year);
  const nextYear = birthdayDate(year + 1);

  const title = document.getElementById("title");
  const timer = document.getElementById("timer");

  // 🎉 24 January full day
  if (now.getDate() === 24 && now.getMonth() === 0) {
    title.innerHTML = "🎉 Happy Birthday Didi 🎉";
    timer.innerHTML = "💖 Wish you lots of happiness 💖";
    return;
  }

  // ⏳ Before 24 Jan
  if (now < thisYear) {
    title.innerHTML = "🎂 Didi ka birthday soon 🎂";
    countdown(thisYear, timer);
    return;
  }

  // 🔁 After 24 Jan
  title.innerHTML = "⏳ Waiting for next birthday 🎂";
  countdown(nextYear, timer);
}

setInterval(update, 1000);
update();
