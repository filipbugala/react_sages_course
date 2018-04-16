import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();

const lista = [1, 2, 3, 4, 5].reverse()


setInterval(() => {
  lista.unshift(lista.length + 1)


  const section = React.createElement('div', {},
  React.createElement('h1', null, 'Todos'),
  React.createElement('ul', null,
    lista.map(x => React.createElement('li', {
      key: x,
      className: "list-item",
      style: { color: x %2 == 0? 'red' : 'black' } 
    }, 'Item ' + x))
  ),
  )

  ReactDOM.render(section, document.getElementById('root'))
}, 500)




window['React'] = React;
window['ReactDOM'] = ReactDOM

