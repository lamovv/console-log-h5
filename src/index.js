import './index.scss';

const log = (function () {
  const console = window.console || {};
  const _log = console.log;
  if (_log.OVERRIDED) {
    return _log;
  }

  const max = 100;
  let count = 0;
  let logNode;

  const tlog = function () {
    const args = [].slice.call(arguments);
    _log && _log.apply(console, args);

    let msg = '';
    let i = 0;
    let l = args.length;
    while (i < l) {
      let arg = args[i];
      const f = /%c/i.test(arg);

      try {
        if (typeof arg == 'string') {
          arg = arg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        } else if (arg !== null && !(arg instanceof RegExp) && typeof arg == 'object') {
          arg = `<pre style="margin:0;padding:0;">${JSON.stringify(arg, null, '  ')}</pre>`;
        }
      } catch (e) {}
      if (f) {
        const color = args.splice(i + 1, 1);
        arg = arg.replace(/%c\s*(.*)/i, `<span style="${color}">$1</span>`);
        l = i;
      }
      msg = i == 0 ? arg : `${msg}, ${arg}`;
      i++;
    }
    logNode = logNode || getLNode();

    count += 1;
    const ih = `&gt; ${msg}${/<pre /i.test(msg) ? '' : '<br/>'}`;
    if (count < max) {
      logNode.innerHTML += ih;
    } else {
      count = 0;
      logNode.innerHTML = ih;
    }
    logNode.scrollTop = logNode.scrollHeight - logNode.clientHeight;
  };

  function getLNode() {
    const box = document.createElement('div');
    box.className = 'console-log-h5';

    const btnWrap = document.createElement('div');
    btnWrap.className = 'console-log-h5-btn-wrap';

    ['刷新', '清空'].forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'console-log-h5-btn';
      btn.innerHTML = item;
      btn.addEventListener('click', e => {
        if (item == '刷新') {
          location.reload();
        } else {
          p.innerHTML = '';
          count = 0;
        }
      });
      btnWrap.appendChild(btn);
    });
    box.appendChild(btnWrap);
    const p = document.createElement('p');
    box.appendChild(p);

    let transformX = 0;
    let transformY = 0;
    box.addEventListener('touchstart', evt => {
      const { clientX, clientY } = evt.targetTouches[0];

      const disX = clientX - transformX;
      const disY = clientY - transformY;
      function moveHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        const touch = e.targetTouches[0];
        transformX = touch.clientX - disX;
        transformY = touch.clientY - disY;
        box.style.transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
      }
      box.addEventListener('touchmove', moveHandler);
      box.addEventListener('touchend', function endHandler(e) {
        box.removeEventListener('touchmove', moveHandler);
        box.removeEventListener('touchend', endHandler);
      });
    });
    document.body.appendChild(box);
    return p;
  }

  Object.defineProperty(window.console, 'log', {
    value: tlog,
  });
  tlog.OVERRIDED = true;
  return tlog;
})();

export { log };
