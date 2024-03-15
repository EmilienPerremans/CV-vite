import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderCard } from './components/card.js';
import './style.css';
import users from './cv.json';


const app = document.getElementById('app');

app.innerHTML = `
  ${renderNav()}
  <div id="cards-container"></div>
  ${renderFooter()}
`;

document.getElementById('cards-container').innerHTML = users.map(user => renderCard(user)).join('');