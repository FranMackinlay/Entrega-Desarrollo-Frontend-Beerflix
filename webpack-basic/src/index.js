import sayHello from './js/utils';
import getItems from './js/api';
import './scss/style.scss';
import yacht from './images/yacht_race@hires.jpg';

console.log(yacht);

const container = document.querySelector('#root');

container.innerHTML = `
  <div class="card">
    <img src="${yacht}" />
    <p> This is a Card </p>
  </div>
`;

(async () => {
  const items = await getItems();
  console.log(items);
})();

console.log(`${sayHello()} and Hello World!!`);
