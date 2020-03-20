# `console-log-h5`
> console.log在移动端可视化打印log，支持颜色配置%c，格式化输出json。

<img width="200" src="https://gw.alicdn.com/tfs/TB1c7aSy7T2gK0jSZFkXXcIQFXa-750-1334.png"/>

## Usage
```js
import 'console-log-h5';

//格式化json
console.log({
  a:1,
  b:2,
  c: [1, 2, 3]
});

//配置颜色
console.log('%c a 比 b 大', 'color:#0f0;');
```