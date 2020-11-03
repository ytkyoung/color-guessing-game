console.log(`let's go`);

const generateRandom = () => Math.floor(Math.random() * 255);

const box = document.querySelectorAll('.box');
// console.log(box);

const collector = [];
const result = document.getElementById('result');
const title = document.getElementById('title');
const colorh2 = document.getElementById('color');
const bodyColor = document.getElementById('bodyColor');
const resetButton = document.getElementById('reset');

document.addEventListener(
  'click',
  function (event) {
    const zielFarbe = event.target.style.backgroundColor;
    if (event.target.matches('.box')) {
      console.log(zielFarbe);
      event.target.style.color = randomCollector;
      if (zielFarbe === randomCollector) {
        result.style.backgroundColor = randomCollector;
        result.style.color = '#fff';
        result.innerHTML = `<p>YUUUHUHUUUUUUUU</p> ${zielFarbe}`;

        colorh2.style.color = '#fff';
        colorh2.style.backgroundColor = randomCollector;

        title.style.color = event.target.style.color;
        title.innerText = 'OH YEAH';
        title.style.backgroundColor = '#fff';

        resetButton.style.backgroundColor = '#fff';
        resetButton.style.color = zielFarbe;

        bodyColor.style.backgroundColor = zielFarbe;
        document.querySelector('.container').style.borderColor = '#fff';
      } else if (zielFarbe !== randomCollector) {
        result.style.backgroundColor = '#fff';
        result.innerText = `möööpp ${zielFarbe}`;
        result.style.color = zielFarbe;
      }
    }
  },
  false
);

const randomZahl = function () {
  const containerRGB = [generateRandom(), generateRandom(), generateRandom()];
  // console.log(containerRGB);
  const testColor = containerRGB.join();
  return testColor;
};

const loopBox = box.forEach(function (item) {
  item.style.backgroundColor = `rgb(${randomZahl()})`;
  collector.push(item.style.backgroundColor);
});

console.log(loopBox);
console.log(collector);

const color = document.getElementById('color');

const randomCollector = collector[Math.floor(Math.random() * collector.length)];
color.innerHTML = randomCollector;

const reset = document.getElementById('reset');

reset.addEventListener('click', function (ev) {
  ev.preventDefault();
  location.reload();
});
