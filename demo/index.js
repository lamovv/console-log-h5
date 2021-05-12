import 'console-log-h5';
import './index.scss';

document.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');

    switch (action) {
      case 'log':
        console.log(2, ['H', 'a', 'p', 'p', 'y'], {a: 1, b: 6});
        break;
      case 'color':
        console.log('%c red log', '#f00');
        break;
      case 'ignore':
        console.log('[ignore] 被过滤的log');
        break;
      case 'mock':
        fetch('/api/getData.json')
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(e => console.error('Error:', e));
        break;
      case 'error':
        window.a.b = 1;
        break;
      default:
        break;
    }
  },
  false
);
