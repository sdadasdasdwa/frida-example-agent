// TODO Hook String字符串转换
function showStacks() {  
    Java.perform(function(){
        // 主动调用Throw抛出异常函数
        console.log(
            Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new())
        )
    })
}

function main(){
    Java.perform(function(){
        
    })

}

setImmediate(main);