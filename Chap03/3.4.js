import { Interface } from "readline"

function showStacks(){
    Java.perform(function(){
        //主动调用
        console.log(
            ("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new())
        )
    })
}

// 3.4主要是关于实现接口或抽象类的类的定位查找
// 1. 定位接口的实现类
// public Interface TestRegisterClass{
//      void test1();
//      void test1(String a, int b);
//      String test2(String a, int b);
// }

function main(){
    Java.perform(function(){
        var classes = Java.enumerateClassLoadersSync();
        for(const index of classes){
            var className = classes[index];
            // 如果此类不是com.xiaojianbang
            if(className.indexOf("com.xiaojianbang") === -1)
                continue;
            var clazz = Java.use(className)
            // 这是去找这个类的所有接口
            var resultArr = clazz.class.getInterfaces();
            if(resultArr.length === 0)
                continue;
            // 对这些接口进行遍历，如果其中包含TestRegisterClass接口，则该className就是需要找的实现类
            for(let i=0 ; i<resultArr.length; i++){
                if(resultArr[i].toString().indexOf("com.xiaojianbang.app.TestRegisterClass") !== -1){
                    console.log(className, resultArr);
                }
            }
        }
    });
}

// 2.定位抽象类的实现类
// public abstract class TestAbstract{
//     abstract void test1();
//     abstract void test1(String a, String b);
//     abstract String test2(String a,String b);
// }
function main2(){
    Java.perform(function () {
        var classes = Java.enumerateClassLoadersSync();
        for(const index of classes){
            var className = classes[index];
            //遍历所有的类
            if(className.index("com.xiaojianbang") === -1){
                continue;
            }
            var clazz = Java.use(className);
            //接下来是与定位接口实现类不同的地方
            var resultClass = clazz.class.getSuperClass();
            if(resultClass == null)
                continue;
            if(resultClass.toString().indexOf("com.xiaojianbang.app.TestAbstract") != -1){
                console.log(className,resultClass);
            }
        }
      
    })
}