import pick from 'lodash/pick';
import sayHello from './js/utils';
import getItems from './js/api';
import './scss/style.scss';
import yacht from './images/yacht_race@tablet.jpg';

const container = document.querySelector('#root');

const _ = { pick };

const data = { title: 'title', surname: 'surname' };

const formatData = _.pick(data, ['title']);
console.log(formatData);

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
