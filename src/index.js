(function() {
  var console = window.console || {};
  var _log = console.log;
  var max = 100;
  var count = 0;
  var logc;
  console.log = function() {
    var args = [].slice.call(arguments);
    _log && _log.apply(console, args);
    
    var msg = '';
    var i = 0, l = args.length;
    while (i < l) {
      var arg = args[i];
      var f = /%c/i.test(arg);

      try {
        if (typeof arg == 'string') {
          arg = arg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        } else if (arg !== null && !(arg instanceof RegExp) && typeof arg == 'object') {
          arg ='<pre style="margin:0;padding:0;">'+ JSON.stringify(arg, null, '  ') +'</pre>';
        }
      } catch (e) {}
      if (f) {
        var color = args.splice(i+1, 1);
        arg = arg.replace(/%c\s*(.*)/i, '<span style="' + color + '">$1</span>');
      }
      msg = i == 0 ? arg : msg +', '+ arg;
      i++;
    }
    var _logc = logc || (logc = getLogc());

    count += 1;
    var ih = '&gt; ' + msg + (/<pre /i.test(msg)?'':'<br/>');
    if (count < max) {
      _logc.innerHTML += ih;
    } else {
      count = 0;
      _logc.innerHTML = ih
    }
    _logc.scrollTop =
      _logc.scrollHeight - _logc.clientHeight;
  };
  function getLogc() {
    var box = document.createElement('div');
    var style = box.style;
    box.className = 'console-log';
    style.cssText = 'position:fixed;top:0;left:0;width:100%;max-height:360px;box-sizing:border-box;font:12px Courier New; color:#fff; background-color:rgba(0,0,0,0.7); word-wrap:break-word; word-break:break-all; overflow-y:scroll; padding:2px 2px; z-index:1e6;';
    box.innerHTML = '<p style="margin:0 10px;padding:0;text-align: right"><button class="j_reload" style="width:39px;line-height:12px;font-size:11px;overflow:hidden;color:#eee;background:#000;border:0;position:fixed;right:50px; top:4px; opacity:.5">刷新</button><button class="j_clear" style="width:39px;line-height:12px;font-size:11px;overflow:hidden;color:#eee;background:#000;border:0; margin-left:5px;position:fixed; right:5px; top:4px; opacity: .5">清空</button></p><div></div>';
    document.documentElement.appendChild(box);
    var log = box.querySelector('div');
    box.querySelector('button.j_reload').addEventListener('click', function(e) {
      location.reload();
    });
    box.querySelector('button.j_clear').addEventListener('click', function(e) {
        log.innerHTML = '';
        count = 0;
      }, false);
    return log;
  }
  
  window.log = window.log || console.log;
})();