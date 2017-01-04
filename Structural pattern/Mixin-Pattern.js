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
            obj1[obj2Key] = obj2[obj2Key];
        }
    }
    return obj1;
}
