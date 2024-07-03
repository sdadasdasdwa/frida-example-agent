function main(){
    Java.perform(function(){
        var settings = Java.use("com.android.settings.DisplaySettings");
        var getMetricsCategory_func = settings.getMetricsCategory
        getMetricsCategory_func.implementation = function(){
            var result = this.getMetricsCategory()  //执行原函数
            console.log("getMetricsCategory called",',result => ',result)
            return result
        }
    })
}
main();

// setImmediate(main)
// function hook(){
//     Java.perform(function(){
//        var settings  = Java.use("com.android.settings.DisplaySettings");
//        var getMetricsCategory_func = settings.getMetricsCategory.overload()
//        getMetricsCategory_func.implementation = function(){
//            var result = this.getMetricsCategory()
//            console.log("getMetricsCategory called",',result =>',result)
//            return result
//        }
//     })
// }

function test(){
    Java.perform(function(){
        var money = Java.use("com.android.money");
        // Money类原静态方法setFlag
        money.setFlag.implementation
    })
}