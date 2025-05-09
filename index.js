import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

let text =
    '<h3 align="center">안녕하세요! 백엔드 개발자 배성환입니다 👋</h3>\n' +
    '\n' +
    '<p align="center">\n' +
    '  <a href="mailto:bsh00611@gmail.com">\n' +
    '    <img src="https://img.shields.io/badge/-bsh00611@gmail.com-red?style=flat&logo=gmail&logoColor=white&label=" />\n' +
    '  </a>\n' +
    '  <a href="https://pear-c.tistory.com/">\n' +
    '    <img src="https://img.shields.io/badge/Blog-Tistory-orange?style=flat-square" />\n' +
    '  </a>\n' +
    '  <a href="https://www.acmicpc.net/user/zxcv9676">\n' +
    '    <img src="http://mazassumnida.wtf/api/mini/generate_badge?boj=zxcv9676" />\n' +
    '  </a>\n' +
    '</p>\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 🧑‍💻 About Me\n' +
    '\n' +
    '- 🌱 **Java/Spring 기반 백엔드 개발자**로 성장 중입니다.  \n' +
    '- 💻 하나의 경험을 다양한 경험에 적용시켜보며 꾸준히 성장하고 있습니다.\n' +
    '- 🔍 관심 기술: **Java, Spring Boot, JPA, SQL, AWS, CI/CD**  \n' +
    '- 📘 현재는 CS 지식과 네트워크, 객체지향설계 등 **기본에 충실**한 공부를 하고자 노력하고 있습니다.\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 🛠 Tech\n' +
    '\n' +
    '<p>\n' +
    '  <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white"/>\n' +
    '  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=springboot&logoColor=white"/>\n' +
    '  <img src="https://img.shields.io/badge/JPA-59666C?style=flat&logo=hibernate&logoColor=white"/>\n' +
    '  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"/>\n' +
    '  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"/>\n' +
    '</p>\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 📊 GitHub Stats\n' +
    '\n' +
    '<p align="center">\n' +
    '  <img src="https://github-readme-stats.vercel.app/api?username=pear-c&show_icons=true&theme=default" />\n' +
    '</p>\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 📝 Latest Blog Posts\n' +
    '\n'
;
// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://pear-c.tistory.com/rss'); // 본인의 블로그 주소

    text += `<ul>`;

    // 최신 3개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 3; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;

    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    })
    console.log('업데이트 완료');
})();