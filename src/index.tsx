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


const Section = (props: { list: any[] }) => {
  return React.createElement('div', {},
    React.createElement('h1', null, 'Todos'),
    React.createElement('ul', null,
      props.list.map(x => React.createElement('li', {
        key: x,
        className: "list-item",
        style: { color: x % 2 == 0 ? 'red' : 'black' }
      }, 'Item ' + x))
    ),
  )
}

setInterval(() => {
  lista.unshift(lista.length + 1)



  ReactDOM.render(Section({
    list: lista
  }), document.getElementById('root'))
}, 500)




window['React'] = React;
window['ReactDOM'] = ReactDOM

