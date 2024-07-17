// Frida Hook MD5算法
function main() {
    Java.perform(function () {
        //MD5类有两种方法：1.update方法    2.digest方法
        //两种方法的Hook形式差不多一样
        var messageDigest = Java.use("java.security.MessageDigest");
        messageDigest.update.overload('byte').implementation = function (data) {
            console.log("messageDigest's overload is:  byte ")
        }
        messageDigest.update.overload('java.nio.ByteBuffer').implementation = function (data) {
            console.log("messageDigest's overload is:  ByteBuffer")
        }
        //前两种重载方式不太常用
        messageDigest.update.overload('[B').implementation = function (data) {
            console.log("messageDigest's overload is:  [B");
            var algorithm = this.getAlgorithm();
            var tag = algorithm + "update data";
            // toUtf8(tag,data);
            // toHex(tag,data);
            // toBase64(tag,data);
            console.log("============================================");
            return this.update(data);
        }
        messageDigest.update.overload('[B','int','int').implementation = function (data,start,length) {
            console.log("messageDigest's overload is:  [B int int");
            var algorithm = this.getAlgorithm();
            var tag = algorithm + "update data";
            // toUtf8(tag,data);
            // toHex(tag,data);
            // toBase64(tag,data);
            console.log("============================================",start,length);
            return this.update(data,start,length);
        }

    
        messageDigest.digest.overload('[B','int','int').implementation = function(data,start,length){
            console.log("MessageDigest.digest('[B','int','int')");;
            var algorithm  = this.getAlgorithm();
            var tag = algorithm + "digest data";    
            var result = this.digest(data,start,length);
            var tags = algorithm + "digest result";
            return result;
            
        }

    })
}

setImmediate(main)