function main(){
    Java.perform(function(){
        var jsonRequest = Java.use("com.dodonew.online.http.JsonRequest");
        var requestUtil = Java.use("com.dodonew.online.http.RequestUtil");
        var utils = Java.use("com.dodonew.online.util.Utils");


        //没有输出内容，即函数没有被调用，寻找其他节点
        jsonRequest.paraMap.implementation = function(a){
            console.log("jsonRequest.paraMap is called!");
            return this.paraMap(a);
        }
        //下面addRequestMap被触发，该函数中包含了paraMap函数的调用
        jsonRequest.addRequestMap.overload('java.util.Map','int').implementation = function(a,b){
            console.log("jsonRequest.adRequestMap is called!");
            return this.addRequestMap(a,b);
        }
        //现在来hook一下addRequestMap函数中RequestUtil的encodeDesMap函数中的参数值
        requestUtil.encodeDesMap.overload('java.lang.String','java.lang.String','java.lang.String').implementation = function(data,desKey,desIV){
            console.log("data:",data,desKey,desIV);
            var encodeDesMap = this.encodeDesMap(data,desKey,desIV);
            console.log("result:",encodeDesMap);
            return encodeDesMap;
        }

        utils.md5.implementation = function(builder){
            console.log("sign data: ",builder);
            var md5 = this.md5(builder);
            console.log("sign: ",md5);
            return md5;
        }

    })
}

setImmediate(main);