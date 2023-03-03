const output = document.querySelector("h1");

const countDown = () => {
  const yourDate = new Date("2023-03-04");

  const countDownDate = new Date(yourDate).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const ss = Math.floor((distance % (1000 * 60)) / 1000);

  const ddFormatted = String(dd).padStart(2, "0");
  const hhFormatted = String(hh).padStart(2, "0");
  const mmFormatted = String(mm).padStart(2, "0");
  const ssFormatted = String(ss).padStart(2, "0");

  output.innerText = `${ddFormatted}d ${hhFormatted}h ${mmFormatted}m ${ssFormatted}s`;
};

countDown();
setInterval(countDown, 1000);
