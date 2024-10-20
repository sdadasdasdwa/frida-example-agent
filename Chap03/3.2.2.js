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
        var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value
        console.log("btn_login_id",btn_login_id)
    })
}
setImmediate(main);