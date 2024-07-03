// 打印函数栈
function showStacks() {  
    Java.perform(function(){
        console.log(
            Java.use("android.util.Log").getStackTraceString(
                Java.use("java.lang.Throwable").$new())
        )
    })
}

function main(){
    Java.perform(function(){
        var hashMap = Java.use("java.util.HashMap");
        hashMap.put.implementation = function(a,b){
            if(a == "username"){
                showStacks();
                console.log("hashMap.put:",a,b);
            }
             return this.put(a,b);
        }
    })
}
setImmediate(main);