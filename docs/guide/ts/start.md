# typescript

## ts与js相比较有哪些优势
-   ts是js的超集，存在类型的脚本语言
-   继承了js的所有编程类型，js代码可在ts环境很好的运行
-   为构建大型应用而生，但小程序同样适用
-   强大的类型系统，拥有静态类型检查能力
-   新增类型注解和类型推断
-   拥有丰富的class扩展功能
-   添加了系统级设计能力，设计模式由顶层由下进行设计

## TypeScript 中的原始类型有哪些

布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。

## 说说数组在 TypeScript 中是如何工作的
ts限制了你要定义的数组中数据的数据类型

1.类型 + []表示法
```
let array : number[] = [1, 2, 3];
```
2.接口
```
interface array {
    [index: number]: number
}
let arr: array = [1, 2, 3, 4, 5];
```
3.any(常用)
```
let arr: any[] = [1, 2, 3, 4, '5'];
```
## any/void/never 类型，何时使用
any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any
一般用于定义一些通用性比较强的变量, 或者用于保存从其它框架中获取的不确定类型的值
在TS中任何数据类型的值都可以负责给any类型

void与any正好相反, 表示没有任何类型, 一般用于函数返回值
在TS中只有undefined可以赋值给void类型

never 类型表示永远不会有值的一种类型。(很抽象是不是)
never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

## TypeScript 中声明变量有哪些不同的关键字
var/let/const 标识符: 数据类型 = 赋值;

## 如何书写带有类型注释的函数
在ts中，类型注解是一种为函数或者变量添加约束的方式
```
const str: string = 'Hello World';
```
## 如何在 TypeScript 中创建对象
```
// 我们先定义一个对象的属性，需要注意的是我们使用接口interface定义对象时，接口的首字母最好是大写
interface Person {
    name : string ,
    age: number
}
let zhangsan : Person {
    name : 'zhangsan',
    age : 25
}
```

## 如何在 TypeScript 中指定可选属性
接口可选属性的声明，你可以在属性名旁边加上一个问号 ? 来实现。
```ts
  age?: number;
```
## 说说枚举在 TypeScript 中是如何工作的
通俗来说,枚举就是一个对象的所有可能取值的集合
``` ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```
## 说说TypeScript 中 for 循环的不同变体
- 逗号运算符。逗号运算符使 for 循环的变体成为可能，如下例所示 -
```ts
for(x=0, y=0; x+y < 10; ++x);
```
在这里，x 和 y 都控制循环。

- 循环定义的缺失部分。for 循环的一个有趣特征是循环定义的部分不需要存在。
```ts
for (x=0; x!=456; )
```

- 无限循环。如果循环定义中的所有部分都缺失，则会创建一个无限循环。break 语句用于跳出循环
```ts
for(;;)
```

- 没有实体的 for 循环。for 循环的主体也可能为空。这提高了一些代码的效率。
```ts
for ( ; *str==' '; str++) ;
```
循环的另一个应用是具有空体的时间延迟
```ts
for (t=0; t<1000; t++);
```


## 类型注解和类型别名有什么区别
-   在ts中，类型注解是一种为函数或者变量添加约束的方式。
>let arr1: number[] = [1, 2, 3, 4, 5];
-   定义类型别名的时候以type开头  可以使用类型别名为任何类型命名，而不仅仅是对象类型。
>type infoType = { name:string,age:number };

## 类型别名和interface区别是什么
不同点：

>（1）类型别名type用来给一个类型起个新名字，接口interface是命名数据结构（例如对象）的另一种方式

>（2）type可以用来表示基本类型、对象类型、联合类型、元组和交集；interface仅限于描述对象类型

>（3）interface 定义重名了会合并属性，type 会报错

>（4）interface 可以 extends， type 是不允许 extends ，但是 type 缺可以通过交叉类型 实现 interface 的 extend 行为，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 与 interface 类型 交叉

相同点：
（1）都可以描述 Object和Function
（2）interface 和 type 都可以继承。

## 谈谈你对泛型的认识
​ A：泛型其实就是在定义类、接口、方法的时候不局限地指定某一种特定类型，而让类、接口、方法的调用者来决定具体使用哪一种类型的参数。

​ B：比如一个水杯生产的时候不用指定它将来干什么？而是由将来的使用者决定放入什么。

​ C：其实就是一句话：我是一个泛型队列，狗可以站进来，猫也可以站进来，但最好不要既站猫，又站狗！别让猫狗站在队列里


## ts中class类有哪些属性
静态方法和属性  
实例属性  
私有方法和属性  

## 文件声明的关键字是什么
declare namespace  
namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。

由于历史遗留原因，在早期还没有 ES6 的时候，ts 提供了一种模块化方案，使用 module 关键字表示内部模块。但由于后来 ES6 也使用了 module 关键字，ts 为了兼容 ES6，使用 namespace 替代了自己的 module，更名为命名空间。

随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。

namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

## ts如何实现模块化开发
ts 中的模块化，尽量统一使用 es6（es2015）的模块化标准
前端领域中的模块化标准：ES6、commonjs、amd、umd、system、esnext

## 你认为ts开发中，开发过程是什么