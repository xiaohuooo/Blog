# js异步

## async/await 是什么
async/await其实是Promise的语法糖，它能实现的效果都能用then链来实现，这也和我们之前提到的一样，它是为优化then链而开发出来的

async声明一个异步函数，await等待异步结果，把以前then链的结果放到直接放在await

如果等待的是Promise对象，则返回Promise的处理结果；如果是其他值，则返回该值本身

## async/await 相⽐于Promise的优势
代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅

错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余

调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then代码块，因为调试器只能跟踪同步代码的『每⼀步』。