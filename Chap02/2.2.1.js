/**
 * public class Money{
 *      private static String flag;
 *      private String curerency;
 * }
 */

function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.Money");
        //对于类的静态字段
        console.log(money.flag.value);
        money.flag.value = "修改后的结果";
        console.log(money.flag.value);
        //对于类的实例字段
        //1.采用$new创建一个新的对象
        var moneyobj = money.$new("美元",1000);
        console.log(moneyobj.currency.value);
        moneyobj.currency.value = "修改后的currentcy";
        console.log(moneyobj.currency.value);
        //2.采用choose方法获取已有对象
        Java.choose("com.hook.money",{
            onMatch:function (obj) {
                console.log("Java onMatch:",obj.currency.value);
            },
            onComplete:function () {
                
            }
        })

    })
}