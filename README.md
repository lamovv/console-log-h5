# `console-log-h5`

> console.log，方便在移动设备上查看log

[![Coverage Status](https://coveralls.io/repos/github/lamovv/console-log-h5/badge.svg?branch=master)](https://coveralls.io/github/lamovv/console-log-h5?branch=master)

## Usage
顶部btn栏可拖动log面板

```js
import 'console-log-h5';

// 正常打印log
console.log(['H', 'a', 'p', 'p', 'y'], {a: 1, b: 6});
// 彩色打印log 
console.log('%c red log', '#f00');
// 过滤log
console.log('[ignore] 被过滤的log');

// 开启“打印error”后，可打印js error信息
```