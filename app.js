const http = require(`node:http`);
const fs = require(`node:fs`);
const path = require("node:path");
const api = require("./src/JS/modules/api.js");
const port = 8080;

const readFiles = (req, res, path, contentType) => {
  fs.readFile(path, (err, data) => {
    if (err != null) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

// * 서버
http
  .createServer((req, res) => {
    let url = req.url;
    let fileExtension = url.split(`.`)[1];
    let path = url.slice(1, url.length);

    // * 서버에서 요청한 url과, 그 url을 이용해 잡은 상대 경로를 콘솔로 확인
    console.log(`요청 url: ${url}`);
    console.log(`지정 경로: ${path}`);

    // * 확장자명에 따라 타입별로 처리
    if (url === `/`) {
      readFiles(req, res, `index.html`, `text/html`);
      // * api 읽고 개별 파일 생성
      api(`${__dirname}/public/HTML/`, `Itachi Uchiha`);
      api(`${__dirname}/public/HTML/`, `Obito Uchiha`);
      api(`${__dirname}/public/HTML/`, `Madara Uchiha`);
      api(`${__dirname}/public/HTML/`, `Shisui Uchiha`);
      api(`${__dirname}/public/HTML/`, `Nagato`);
    } else if (fileExtension === `ico`) {
      readFiles(req, res, path, `image/vnd.microsoft.icon`);
    } else if (fileExtension === `css`) {
      readFiles(req, res, path, `text/css`);
    } else if (fileExtension === `js`) {
      readFiles(req, res, path, `text/javascript`);
    } else if (fileExtension === `html`) {
      readFiles(req, res, path, `text/html`);
    } else if (fileExtension === `png`) {
      readFiles(req, res, path, `image/png`);
    } else if (fileExtension === `jpg` || fileExtension === `jpeg`) {
      readFiles(req, res, path, `image/jpeg`);
    } else if (fileExtension === `webp`) {
      readFiles(req, res, path, `image/webp`);
    }
  })
  .listen(port, () => {
    console.log(`the server is processing on Http://localhost:8080`);
  });
