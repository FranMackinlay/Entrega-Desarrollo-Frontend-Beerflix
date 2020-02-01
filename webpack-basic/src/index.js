import sayHello from './js/utils';
import getItems from './js/api';
import './scss/style.scss';

const container = document.querySelector('#root');

container.innerHTML = `
  <div class="card">
    <p> This is a Card </p>
  </div>
`;

(async () => {
  const items = await getItems();
  console.log(items);
})();

console.log(`${sayHello()} and Hello World!!`);
