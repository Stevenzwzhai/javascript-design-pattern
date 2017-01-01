/**
 * Created by Stevenzwzhai on 2017/1/1 0001.
 */
/*
* 结构型设计模式-适配型
*
* 将不同代码进行关联，比如某个外部的API进行更新是， 可以创建一个适配器来将新方法映射到旧方法
* */
//以ajax请求为例
var http = {
    makeRequest: function(type, url, callback, data){
        var xhr = null;
        //window.ActiveXObject主要是为了兼容ie5,6
        if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        try{
            xhr.onreadystatechange = function(){

                if(xhr.readyState !== 4){
                    return ;
                }
                if(xhr.status === 200) {
                    callback(xhr.responseText);
                }

            }
            //这里open方法,三个参数，前两个常用，第三个表示请求类型，这个类型指同步异步，true表示异步，默认为true
            //xhr还有一个方法abort();表示终止一个请求，当一个请求被发出，使用这个方法之后xhr的readyState被置为0
            xhr.open(type.toUpperCase(), url, true);
            xhr.send(data);
        }
        catch(error){
            alert("xhr failed");
        }
    }
}

//加入以后修改了请求代码为
var ajax = (function(){
    function createXHR(callback){
        var xhr = null;
        if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        xhr.onreadystatechange = function(){

            if(xhr.readyState !== 4){
                return ;
            }
            if(xhr.status === 200) {
                callback(xhr.responseText);
            }

        }
        return xhr;
    }
    return {
        get: function(url,callback){
            var XHR = createXHR(callback);
            XHR.open("GET", url);
            XHR.send();
        },
        post: function(url, callback, data){
            var XHR = createXHR(callback);
            XHR.open("POST", url);
            XHR.send(data);
        }
    }
})()
/*
* 如果我们有大量的代码中使用了老的写法，当我们更换了新的请求方式时，修改量太大，这个时候就可以用适配器模式，将新的方法映射到旧方法上，而不至于修改所有
* 做法如下
* */
function adapterAjax(type, url, callback, data){
    if(type === 'get'){
        ajax.get(url, callback);
    }else if(type === "post"){
        ajax.post(url, callback, data);
    }else{
        alert('no method of '+type);
    }
}
//这样原来的代码就不用修改了
http.makeRequest = adapterAjax;

