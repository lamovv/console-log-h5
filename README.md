# `console-log-h5`
> console.log在移动端可视化打印log，支持颜色配置%c，格式化输出json。

![](https://s1.ax1x.com/2020/03/20/8g7lJP.png)

## Usage
```js
import 'console-log-h5';

//格式化json
console.log({
  a: false,
  b: 0,
  c: null,
  d: undefined,
  e: [1, 2, 3]
  f: NaN
});

//配置颜色
console.log('str 1', '%c a 比 b 大', 'color:#0f0;');
```