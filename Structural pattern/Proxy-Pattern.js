/**
 * Created by Stevenzwzhai on 2017/1/8 0008.
 */

/*
* 代理模块
* 这个其实很好理解了，代理模块，顾名思义，就是通过一个代理对象，来替换或者增强一个已经存在的功能。但是它又不会对原来使用该方法的部分造成影响。
* 说道这里，突然想到了两个名词，正向代理和反向代理。大家都应该听说过Nginx，他就是一个著名的可以做反向代理服务的东西。解释下这两个名词（借用别人的比喻）
* 正向代理：用一个比喻来解释，比如有个人他想创业，去找马云借钱，但是人家不借给他，这个时候，他想了个办法，就是找他的大学老师，拜托他老师去跟
* 马云借钱，那么他的老师就是在做正向代理，因为马云并不知道是到底是谁用了他的钱，就像我们想访问使用google,但是某些原因，我们用不了，那么我们就需要
* 国外的一个服务器来做中转，我们请求那个服务器，然后由那个服务器把我们想要的返回来。一句话，请求者知道自己在请求谁，但是发送者却不知道发给了谁。
* 反向代理：更上面相反，大家应该懂了吧。
*
* */

//还是举个简单的例子
//现在我们已经有个方法Data.get();我们要对它实现代理

//首先将这个方法保存起来
var proxiedGet = Data.get;

//重写该方法
Data.get = function(){

    var value = proxiedGet.apply(this, arguments);

    value = value.toUpperCase();

    return value;
}

//代理模式的一个变体被称为虚拟代理，通过延迟对象的实例化时间，直到该对象实例真正被调用

//写一个创建动物类
function CreateAnimal(name,age){
    this.name = name;
    this.age = age;
}
CreateAnimal.prototype.getAnimal = function(){
    return "The animal's name is " + this.name+ " and age is " + this.age;
}

//然后我们来代理这个创建动物的类

CreateAnimal = (function(CreateAnimal){
    function AnimalProxy(name, age){
        this.name = name;
        this.age = age;
    }

    AnimalProxy.prototype = {
        initialize: function(){
            if(!this.animal){
                this.animal = new CreateAnimal(this.name, this.age);
            }
        },
        getAnimal: function(){
            this.initialize();
            return this.animal.getAnimal();
        }
    }
})(CreateAnimal)

/*
* 上面的代码我们可发现，当我们使用了代理去创建一个动物的时候，并没有实例化这个动物，而是当你去获取这个动物的时候才真正的实例化。
* 通过这样，我们创建一个动物，并没有占用内存，把实例化过程做了延迟，在调用这个动物的时候才去实例化。
* */


