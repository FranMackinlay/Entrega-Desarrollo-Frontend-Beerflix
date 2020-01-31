import sayHello from './js/utils';
import './scss/style.scss';
import style from './css/card.css';

const container = document.querySelector('#root');

container.innerHTML = `
  <div class="${style.card}">
    <p> This is a Card </p>
  </div>
`;

console.log(`${sayHello()} and Hello World!!`);
