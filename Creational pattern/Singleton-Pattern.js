/**
 * Created by Stevenzwzhai on 2017/1/1 0001.
 */
/*
* 单例模式
* 单例模式定义了一个对象的创建过程，这个对象只有一个单独的实例，所以最简单的形式可以是一个对象直接量，其中封装这相关特性的代码。
* 这样就形成一个层级化的结构，成为命名空间
* 命名空间————使用对象直接量来创建一个层级化分组的各项属性和方法的结构
* */

//举个例子，关于cookie

var cookies = {
    get: function(key){
        var output = "";
        var escapedKey = escape(key);
        var start = document.cookie.indexOf(escapedKey + "=");
        //这里使用indexOf函数第二个参数也就是搜索起始位置，主要作用是准确找到相应的cookie，但是也是提高了搜索性能。
        var end = document.cookie.indexof(";", start);
        //这里判断的是这个cookie是否是最后一个，最后一个是没有分号的，所以并不是说分号就一定是结束位置
        end = end===-1 ? (document.cookie.length-1) : end;
        //如果没有找到就返回空字符串
        if(start >= 0){
            output = document.cookie.substring(start+escapedKey.length+1, end);
        }
        return unescape(output);
        //最后说一下，escape和unescape现在已经很少在用，推荐使用encodeURIComponent和decodeURIComponent编码解码
    },
    set: function(key, value, date){
        //这里还设置了cookie的过期时间，要注意date要设置为标准时间，也就是new Date()类型的
        document.cookie = escape(key) + "=" + escape(value) + ";expires="+date;
    },
    delete: function(key){
        //删除原理就是让cookie过期
        var value = this.get(key);
        var date = new Date();
        var cookieDate = date.setTime(date.getTime()-1);
        document.cookie = escape(key) + escape(value) + ";expires=" + cookieDate.toGMTString();
    }
}


