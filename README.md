# javascript-design-pattern
about javascript design patten learning path
javascript 中对象分为普通对象和函数对象。
通过new Function();创建的都是函数对象
new fn()  创建的是普通对象
arguments是个Arguments对象[object Arguments];
Object，Array。。。 原生构造函数
Object Function 都是js自带的函数对象
new Object()  通过new 操作符创建实例，这个实例是一个对象
1.创建一个对象
2.将构造函数中的作用于赋给新对象（this指向新的对象）
3.执行构造函数中的代码
4.返回新的对象
对象定义的时候会有一些预定义属性
函数对象 ---> prototype(通过构造函数创建的那个实例对象的原型对象， 所有的实例和共享它所包含的方法和属性)是一个普通对象， Function.prototype是一个函数对象，但没有prototype属性
创建一个新函数就会为该函数创建一个prototype属性，这个属性指向函数的原型对象。默认所有的原型对象都会自动获得一个constructor（构造函数）属性，这个属性包含一个指向prototype属性所在函数的指针
Person.prototype.constructor == Person;

普通对象，函数对象 ---> __proto__, 创建一个实例之后，该实例内部将包含一个之指向->（构造函数的原型对象）<-的指针(isPrototypeOf())

原型链：p1.__proto__ == Person.prototype
Person.prototype也有__proto__属性指向Object.prototype

```
Function.prototype-->function (){}
Function.prototype ==Object.__proto__
Object.prototype.__proto__ == null

Object.prototype == Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
```
