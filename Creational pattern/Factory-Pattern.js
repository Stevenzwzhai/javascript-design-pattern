/**
 * Created by Stevenzwzhai on 2016/12/31 0031.
 */
/*
* 创建型设计模式-工厂模式
*
*创建类一般使用new关键字，使用工程模式可以将创建过程封装于一个简单的接口中，而这种抽象创建类的方式意味着很可能去改变之前创建的这些类和方法
* */

//举个例子，关于form表单的创建

var FormFiledFactory = {
    //makeFiled有一个参数option，其中包含两个选项
    //-type,定义表单对象的类型，button,text,email
    //-defaultText,表单的placeholder，或者button按钮的文字
    makeFiled: function(options){
        var options = options || {};
        var type = options.type || "text";//默认为文本框
        var defaultText = options.defaultTexgt || "";
        var formFiled = null;

        switch(type){
            case "text":
                formFiled = new TextFiled(defaultText);
                break;
            case "email":
                formFiled = new EmailFiled(defaultText);
                break;
            case "button":
                formFiled = new ButtonFiled(defaultText);
                break;
            default :
                formFiled = new TextFiled(defaultText);
                break;
        }
        return formFiled;
    }
};

//定义TextFiled
function TextFiled(defaultText){
    var textFiled = document.createElement("input");
    textFiled.setAttribute("type", "text");
    textFiled.setAttribute("placeholder", defaultText);
    return textFiled;
}

//定义EmailFiled
function EmailFiled(defaultText){
    var emailFiled = document.createElement("email");
    emailFiled.setAttribute("type", "email");
    emailFiled.setAttribute("placeholder", defaultText);
    return emailFiled;
}

//定义ButtonFiled
function ButtonFiled(defaultText){
    var buttonFiled = document.createElement("button");
    buttonFiled.setAttribute("type", "submit");
    buttonFiled.innerHTML = defaultText;
    return buttonFiled;
}

//使用工厂模式定义的表单创建

var textFiled = FormFiledFactory.makeFiled({
    type:"text",
    defaultText:"this is a input text"
});
var emailFiled = FormFiledFactory.makeFiled({
    type:"email",
    defaultText:"this is a input email"
});
var buttonFiled = FormFiledFactory.makeFiled({
    type:"button",
    defaultText:"submit"
});



