// Hook JSONObeject定位JSON数据
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
        var JSONObject = Java.use("org.json.JSONObject");
        JSONObject.put.overload('java.lang.String','java.lang.Object').implementation = function(a,b){
            showStacks();
            console.log("JSONObject.put",a,b);
            return this.put(a,b);
        }

        //不知道为什么这里的JSONObject的getString方法没有被触发
        JSONObject.getString.implementation = function(a){
            showStacks();
            var result = this.getString(a);
            console.log("JSONObject.getString:",a,result);
            return result;
        }
    })
}
setImmediate(main);