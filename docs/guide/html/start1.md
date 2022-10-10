---
title: HTML面试题整理
author: 小虎
date: '2022-09-15'
---

## 01.说一下对语义化的理解？✅
- 对开发者友好，让人更容易读懂，利于代码可读性
- 对机器友好，让搜索引擎更容易读懂，利于seo
## 02.说一下HTML5有哪些更新/新增？✅
- 新增语义化标签，音频视频标签
- 新增localstorage，sessionstorage本地存储
- 新增DOM查询 document.querySelector() 、 document.querySelectorAll()
- …
## 03.说一下defer和async的区别？✅
多个带defer的script标签里js同步执行，async是异步执行
defer等所有元素解析完成之后，DOMContentLoaded之前执行
## 04.说一下iframe有哪些优点和缺点？✅
优点：展现嵌入的网页；加载速度较慢的内容，如广告；可以跨子域通信；
缺点：iframe会阻塞主页面onload事件；不利于搜索引擎识别；增加http请求；
## 05.说一下web worker?✅
Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行
Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。
通过postMessage将结果回传到主线程，这样复杂操作的时候，就不会阻塞主进程了
阮一峰文章
## 06.行内，块级，空元素，替换元素有哪些？✅
行内：button，span
块级：div，p，ul，h1
替换元素：img，iframe，video
空元素：link，meta
## 07.DOCTYPE的作用？严格模式和混杂模式的区别？
！DOCTYPE告诉浏览器以HTML5标准解析页面，如果不写，则进入混杂模式
严格模式（标准模式）：以w3c标准解析代码
混杂模式（怪异模式）：浏览器用自己的方式解析代码，混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作
HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别，HTML5 有相对宽松的方法，实现时，已经尽可能大的实现了向后兼容(HTML5 没有严格和混杂之分)。
## 08.说一下渐进增强和优雅降级的区别？
渐进增强是针对低版本浏览器也能保证基础功能，然后对高级浏览器改进追加功能；
优雅降级是一开始构建完整功能，再对低版本进行兼容
## 09.说一下常见的meta标签属性和作用？
``` html
<meta charset="UTF-8" >

<meta name="keywords" content="关键词" />

<meta name="description" content="页面描述内容" />



<meta http-equiv="refresh" content="0;url=" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
## 10.说一下HTML5的离线存储？
指的是没有网络连接的时候，可以正常访问应用，与网络连接时更新缓存文件

在 cache.manifest 文件中编写需要离线存储的资源：
``` html
<html lang="en" manifest="index.manifest">
```
在离线状态时，操作 window.applicationCache 进行离线缓存的操作。

如何清除缓存：更新 manifest 文件，通过 javascript 操作，清除浏览器缓存

## 11.说一下怎么做好seo？
语义化元素
title和meta标签描述页面内容
logo使用a标签加背景图
## 12.说一下b和strong，i和em的区别？
strong是有语义的，起到加强语气的效果，遇到阅读器会重读，即为了强调而加粗
em起到强调文本的作用
## 13.说一下img的srcset作用？alt和title的区别?
响应式页面中经常用到根据屏幕密度设置不同的图片
这时就用到了 img 标签的srcset属性。srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片
alt是图片失效的时候的备用图片地址，title是图片标题
## 14.说一下canvas和svg的区别？
- canvas是画布，适合图形密集型的游戏，不支持事件处理，
- svg是矢量图，不依赖分辨率，不适合游戏，适合大型渲染区域（地图），支持事件处理
## 15.说一下drag api？
- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。

- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。

- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。

- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。

- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。

- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。

- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

## 16.说一下label的作用？
控制表单控件关系，选择lable标签时，自动将焦点转到input上
## 17.说一下src和href的区别？
- src是引入外部资源下载到文档，会暂停其他资源的下载
- href是链接外部资源，不会暂停其他资源的下载
## 18.说一下音视频标签的使用？
- audio和video标签
- controls 控制面板、autoplay 自动播放、loop=‘true’ 循环播放
