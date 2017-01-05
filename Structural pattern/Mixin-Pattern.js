/**
 * Created by Stevenzwzhai on 2017/1/5 0005.
 */
/*
* 掺和模式是通过快速并简易的吧对象中的一组方法或者属性直接应用在其他对象或其prototype上
* */

//首先定义一个日志打印功能
var loggingMixin = {
        logs:[],
        log: function(message){
            this.logs.push(message);
        },
        readLog: function(){
            return this.logs.join('\n');
        }
    },
    element,
    header,
    textFiled,
    emailField;
//复制方法
function extendObj(obj1, obj2){
    var obj2Key;
    for(obj2Key in obj2){
        if(obj2.hasOwnProperty(obj2Key)){
            //在这里要注意一点。如果是引用类型，如对象，数组，那么必须深拷贝。
            obj1[obj2Key] = obj2[obj2Key];
        }
    }
    return obj1;
}
//定义一个单例，将log方法应用于其上
element = {
    allElements:[],
    create: function(type){
        var elem = document.createElement(type);
        this.allElements.push(elem);
        //如果存在就调用
        if(typeof this.log=== "function"){
            this.log("create an element of type:"+type);
        }
        return elem;
    },
    getAllElement: function(){
        return this.allElements;
    }
}
//定义一个类， 可以使用mixin
function Field(type,defaultText){
    this.type=type||"";
    this.defaultText = defaultText||"";

    if(typeof this.log==="function"){
        this.log("create an instance of filed");
    }
}

Field.prototype = {
    getElement: function(){
        var field = document.createElement("input");
        field.setAttribute("type", this.type);
        field.setAttribute("placeholder", this.defaultText);
        if(typeof this.log==="function"){
            this.log("create a DOM element with placeholder text:"+this.defaultText);
        }
        return field;
    }
}
