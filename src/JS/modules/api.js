require("dotenv").config();
const ninjaData = require(`./ninja.js`);
const fs = require(`node:fs`);

const naruto_api = process.env.naruto_api;

// * 나루토 api를 이용해서 약 1000명 가량의 닌자 리스트를 받아온 후, 프로미스 체이닝으로 데이터를 처리한다.
const apiFunc = async (path, ninja) => {
  /**
   *  @param ninjas API로 호출된 닌자 리스트
   *  @param ninja 파일 생성 위해 인자로 전달된 닌자 이름
   */
  const createNinjaHTML = (ninjas, ninja) => {
    ninjas.forEach((element) => {
      if (element == ninja) {
        const trimElement = element.replace(" ", "");
        fs.writeFileSync(`${path}/${trimElement}.html`, ninjaData[trimElement]);
      }
    });
  };

  await fetch(naruto_api)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`통신 실패`);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      const ninjas = data.characters.map((element) => {
        return Object.values(element)[1];
      });
      createNinjaHTML(ninjas, ninja);
    });
  // ! apiFunc return value
};

module.exports = apiFunc;
