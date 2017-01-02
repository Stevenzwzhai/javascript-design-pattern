/**
 * Created by Stevenzwzhai on 2017/1/2 0002.
 */
/*
* 享元模式-这是一个关于优化的模式。对于那些创建大量相似对象却消耗大量内存的代码来说是很有帮助的。使用少量的可公用的对象来代替，这样既可以
* 减少运行内存又可以提高效率
* */

//以创建员工对象为例，者系员工工作于一个或多个公司

function Employee(data){

    //员工ID
    this.employeeId = data.employeeId || 0;
    //员工社保号码
    this.ssId = data.ssId || 0;
    //员工名字
    this.name = data.name || "";
    //员工职业
    this.occupation = data.occupation || "";
    //公司名称和地址
    this.companyName = data.companyName || "";
    this.companyAddress = data.companyAddress || "";
}

Employee.prototype = {
    getName: function (){
        return this.name;
    },
    getOccupation: function(){
        return this.occupation;
    },
    getCompany: function(){
        return this.companyName+"-"+this.companyAddress;
    }
}
//加入要创建多个员工，而有的员工是同时在多个公司工作，那么他的个人信息将被创建多次，但都是一样的，同理，对于在同一家公司工作的人来说，他们的公司信息都是一样的。
//因此我们可以把这些信息抽象出一个小的对象,大概有三步
//把个人信息和公司信息独立创建
function Person(data){
    this.name = data.name || "";
    this.ssId = data.ssId || 0;
}

function Company(data){
    this.companyName = data.companyName || "";
    this.companyAddress = data.companyAddress || "";
}
//使用工厂模式保证不去重复创建这些公共信息
var PersonFactory = (function(){
    var people = {},
        personCount = 0;
    return {
        createPerson: function(data){
            var person = people[data.ssId],
                newPerson;
            if(person){
                return person;
            }else{
                newPerson = new Person(data);
                people[data.ssId] = newPerson;
                personCount++;
                return newPerson;
            }
        },
        getPersonCount: function(){
            return personCount;
        }
    }
})()
var CompanyFactory = (function(){
    var companies = {},
        companyCount = 0;
    return {
        createCompany: function(data){
            var company = companies[data.name],
                newCompany;
            if(company){
                return company;
            }else{
                newCompany = new Company(data);
                companies[data.name] = newPerson;
                companyCount++;
                return newCompany;
            }
        },
        getCompanyCount: function(){
            return companyCount;
        }
    }
})()

//处理所有的内容
employee = (function(){
    var employees = {},
        employeeCount = 0;
    return {
        add: function(data){
            var person = PersonFactory.createPerson({
                    ssId: data.ssId,
                    name: data.name
                }),
                company = CompanyFactory.createCompany({
                    name: data.companyName,
                    address: data.companyAddress
                });
            employees[data.employeeId] = {
                employeeId: data.employeeId,
                occupation: data.occupation,
                person: person,
                company: company
            };
            employeeCount++;
        },
        getName: function(employeeId){
            return employees[employeeId].person.name;
        },
        getOccupation: function(employeeId){
            return employees[employeeId].occupation;
        },
        getCompany: function(employeeId){
            return employees[employeeId].company.name+"-"+employees[employeeId].company.address;
        }
    }
})()

