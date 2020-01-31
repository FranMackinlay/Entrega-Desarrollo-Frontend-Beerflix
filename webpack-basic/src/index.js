import sayHello from './js/utils';
import './scss/style.scss';

const container = document.querySelector('#root');

container.innerHTML = `
  <div class="card">
    <p> This is a Card </p>
  </div>
`;

console.log(`${sayHello()} and Hello World!!`);
