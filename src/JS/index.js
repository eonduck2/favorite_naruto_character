const buttons = [
  document.querySelector(`.itachi`),
  document.querySelector(`.madara`),
  document.querySelector(`.pain`),
  document.querySelector(`.obito`),
  document.querySelector(`.shisui`),
];

// * 버튼 클릭 이벤트
buttons.forEach((ninjaButton) => {
  if (ninjaButton.className == `itachi`) {
    ninjaButton.onclick = () => {
      location.href = `./public/HTML/ItachiUchiha.html`;
    };
  } else if (ninjaButton.className == `madara`) {
    ninjaButton.onclick = () => {
      location.href = `./public/HTML/MadaraUchiha.html`;
    };
  } else if (ninjaButton.className == `pain`) {
    ninjaButton.onclick = () => {
      location.href = `./public/HTML/Nagato.html`;
    };
  } else if (ninjaButton.className == `obito`) {
    ninjaButton.onclick = () => {
      location.href = `./public/HTML/ObitoUchiha.html`;
    };
  } else if (ninjaButton.className == `shisui`) {
    ninjaButton.onclick = () => {
      location.href = `./public/HTML/ShisuiUchiha.html`;
    };
  }
});
