// TODO Hook String字符串转换
function showStacks() {
    Java.perform(function () {
        // 主动调用Throw抛出异常函数
        console.log(
            Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new())
        )
    })
}

function main() {
    Java.perform(function () {
        // TODO 数据加密前，会将字符串转换为字节，有可能会使用到String类的getBytes方法

        var str = Java.use("java.lang.String");
        str.getBytes.overload().implementation = function () {
            var result = this.getBytes();
            var newStr = str.$new(result);
            console.log("str.getBytes: ", newStr);
            return result;
        }

        str.getBytes.overload('java.lang.String').implementation = function (a) {
            var result = this.getBytes(a);
            var newStr = str.$new(result,a);
            console.log("str.getBytes: ",newStr);
            return result;
        }


    });

}

setImmediate(main);
