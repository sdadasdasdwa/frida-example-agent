//枚举所有的类
function test(){
    Java.perform(function () {
        console.log(Java.enumerateLoadedClassesSync().join('\n'));
    })
}

//枚举类的所有方法，需要用到反射
function test1(){
    Java.perform(function () {
        var wallet = Java.use("com.hook.wallet");
        var methods = wallet.class.getDeclaredMethods();
        for(var i=0;i<methods.length;i++){
            console.log(methods[i].getName());
        }
        //如果想获取构造方法
        var constructor = wallet.class.getDeclaredConstructors();
        for(var j=0;j<constructor.length;j++){
            console.log(constructor[i].getName());
        }
        //枚举一个类中的全部字段和全部内部类
        var fields = wallet.class.getDeclaredFields();
        var classes = wallet.class.getDeclaredClasses();
    })
}
