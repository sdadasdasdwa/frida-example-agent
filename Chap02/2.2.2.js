/**
 * 假如在Wallet类中还存在一个InnerStructure类,这是一个内部类
 */

function test(){
    Java.perform(function () {
        var Wallet$InnerStructure = Java.use("com.hook.Wallet $InnerStructure");
        console.log(Wallet$InnerStructure);
        Java.choose("com.hook.Wallet $InnerStructure",{
            onMatch:function (obj) {
                console.log("Java Wallet $InnerStructure:",obj.bankCardList.value);
            },
            onComplete:function(){

            }
        })
    })
}

//匿名类，没有名字的子类
//有个匿名类重写了Money类中的getInfo方法
function test1(){
    Java.perform(function () {
        //到package包中查看相应的Smail语法
        var money = Java.use("com.app.MainActivity $1");
        money.getInfo.implementation = function(){
            var result = this.getInfo();
            console.log(result);
            return  result;
        }
    })
}