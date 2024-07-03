//静态方法的主动调用
function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.money");
        money.setFlag("I'd like to obliterate the world");
    })
}
test();

//通过$new进行实例方法的主动调用
function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.money");
        var moneyobj = money.$init("美元",1000);
        console.log(moneyobj.getInfo());
    })
}

//通过choose方法进行实例方法的主动调用
function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.money");
        Java.choose("com.hook.Money",{
            onMatch:function (obj) {
                console.log(obj.getInfo);
            },
            onComplete:function () {
                console.log("内存中的Money对象搜索完毕")
            }
        })
    })
}