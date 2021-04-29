import './index.scss';
import 'console-log-h5';

import { log } from 'console-log-h5';

document.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');

    let ret;
    switch (action) {
      case 'compare':
        ret = log(2, ['H', 'a', 'p', 'p', 'y'], {a: 1, b: 6});
        console.log(ret);
        break;
      case 'mock':
        fetch('/api/getData.json')
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(e => console.error('Error:', e));
        break;
      default:
        break;
    }
  },
  false
);
