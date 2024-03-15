import { renderNav } from '/components/nav.js';
import { renderFooter } from '/components/footer.js';
import { renderCv } from '/components/cv.js';
import '/style.css';
import users from '/cv.json';


const app = document.getElementById('app');

app.innerHTML = `
  ${renderNav()}
  <div id="cv"></div>
  ${renderFooter()}
`;

document.getElementById('cv').innerHTML = users.map(user => renderCv(user)).join('');