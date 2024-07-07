// 3.3.3 HookCollections定位排序方法
// 常用的Collection的sort方法
//服务端需要根据收到的数据进行复现算法，以此来比对摘要结果，排序避免因为参数顺序的不同导致不同的结果的不同
    function showStacks() {  
        Java.perform(function(){
            console.log(
                Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new())
            )
        })
    }

    
function main(){
    // Java.perform(function(){
    //     var collections = Java.use("java.util.Collections");
    //     collections.sort.overload('java.util.List').implementation = function(a){
    //         showStacks();
    //         console.log("Collections.sort List:",a.toString());
    //         return this.sort(a);
    //         //输出结果是Object object
    //     }
    // })

    //如果想查看具体的List内容，使用Java.cast进行向下转型
    Java.perform(function(){
        var collections = Java.use("java.util.Collections");
        collections.sort.overload('java.util.List','java.util.Comparator').implementation = function(a,b){
            showStacks();
            var result = Java.cast(a,Java.use("java.util.ArrayList"));
            console.log("Collections.sort List Comparator:",result.toString());
            return this.sort(a,b);
            //输出结果是Object object
        }
    })

}

setImmediate(main);