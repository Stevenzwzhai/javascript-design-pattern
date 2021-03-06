/**
 * Created by Stevenzwzhai on 2017/1/8 0008.
 */

/*
* 模块模式
* 模块模式可以让我建立一个独立的沙箱安全区域，在这个区域我们可以使用外部的变量或者方法，但是内部的变量或者方法却不会泄露出去，这都基于闭包。
* 当然也可以去暴露给外面的使用，使用return即可。
* */
//举一个最简单的例子
(function(){
    //code
})()

/*
* 用这个我们可以把一个大型的代码库分割成多个小的模块，你只需要把所依赖的模块作为参数传入即可
* */
(function($){

})(Jquery)
/*
* 事实上，我们之前所用到的各种模块化管理工具就是这样，按照它的标准去写代码，这些工具帮你完成各个模块之间的依赖，如果看过webpack合并之后的文件，
* 我们可以看到最开始的代码就是在实现这一功能。
* */
