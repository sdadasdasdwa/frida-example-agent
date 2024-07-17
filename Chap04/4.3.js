//MAC消息认证码,结合密钥和输入内容生成固定长度的输出
//通常用于通信协议中，确保消息在传输过程中未被篡改且来自合法发送者。与MD5相比更安全
// MAC算法的密钥有两种途径：Hook Secret SecreKeySpec或init方法
function main(){
    Java.perform(function(){
        var mac = Java.use("javax.crypto.Mac");
        mac.init.overload('java.security.Key','java.security.spec.AlgorithmParameterSpec')
                .implementation = function(key,AlgorithmParameterSpec){
            console.log("Mac.init('Key','AlgorithmParamSpec') is called!");
            return this.init(key,AlgorithmParameterSpec);
        }

        mac.init.overload('java.security.Key').implementation = function(key){
            console.log("Mac.init('Key') is called!");
            var algorithm = this.getAlgorithm();
            var tag = algorithm + "init key";
            var keyBytes = key.getEncoded();
            return this.init(key);
        }
    })
}
setImmediate(main)