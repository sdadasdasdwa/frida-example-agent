// 工具函数封装
function main() {
    Java.perform(function () {
        function showStacks() {
            var stack = Java.use("android.util.Log").getStackTraceString(
                Java.use("java.lang.Throwable").$new());
            console.log(stack);
        }
    })

    var ByteString = Java.use("com.android.okhttp.okio.ByteString")

    function toBase64(data) {
        console.log("Base64", ByteString.of(data).base64());
    }

    function toHex(data) {
        console.log("Hex:", ByteString.of(data).hex());
    }

    function toUtf8(data) {
        console.log("Utf8:", ByteString.of(data).utf8());
    }

    toBase64([48, 49, 50, 51, 52]);     //MDEyMzQ =
    toHex([48, 49, 50, 51, 52]);        //01234
    toUtf8([48, 49, 50, 51, 52]);       //3031323334
}

function main1() {
    Java.perform(function () {
        var ByteString = Java.use("com.android.okhttp.okio.ByteString")

        function toBase64(data) {
            console.log("Base64", ByteString.of(data).base64());
        }

        function toHex(data) {
            console.log("Hex:", ByteString.of(data).hex());
        }

        function toUtf8(data) {
            console.log("Utf8:", ByteString.of(data).utf8());
        }

        toBase64([48, 49, 50, 51, 52]);     //MDEyMzQ =
        toHex([48, 49, 50, 51, 52]);        //01234
        toUtf8([48, 49, 50, 51, 52]);       //3031323334
    })
}


setImmediate(main1);