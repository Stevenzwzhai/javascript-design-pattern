/**
 * Created by Stevenzwzhai on 2017/1/1 0001.
 */
/*
* 生成器模式->抽象对象的创建过程，只需要提供创建类型和内容即可
* */

function FormBuilder(){};


FormBuilder.prototype = {
    //创建一个数组，用于保存所创建的表单域
    fileds:[],
    //添加表单域
    addFiled: function(type, defaultText){
        var filed;

        switch(type){
            case "text":
                filed = new TextFiled(defaultText);
                break;
            case "email":
                filed = new EmailFiled(defaultText);
                break;
            case "button":
                filed = new ButtonFiled(defaultText);
                break;
            default :
                filed = new TextFiled(defaultText);
                break;
        }
        this.fileds.push(filed);
    },
    getForm: function(){
        var form = document.createElement("form");
        var index = 0;
        var numFileds = this.fileds.length;
        var filed;

        for(; index<numFileds; index++){
            filed = this.fileds[index];
            form.appendChild(filed);
        }
        return form;
    }
}

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

var formBuilder = new FormBuilder();

var form;

formBuilder.addFiled("text", "this is a text input");
form = formBuilder.getForm();

//这里使用抽象工厂模式把表单的创建都封装起来，我们只需要调用它所暴露出来的借口就可以完成
//个人理解的话，生成器模式把表单域的创建抽象跟工厂模式类似，但是将创建的表单域放入一个数组中暂存，而我们不需要定义那么多的变量去表示创建的内容，我们要做的就是不断地创建，最后将这些添加到form中即可

