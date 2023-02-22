const output = document.querySelector("h1");

const countDown = () => {
  const yourDate = new Date("2023-12-31");

  const countDownDate = new Date(yourDate).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const dd = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const ss = Math.floor((distance % (1000 * 60)) / 1000);

  output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;
};

setInterval(countDown, 1000);
