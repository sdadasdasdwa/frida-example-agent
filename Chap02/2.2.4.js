//Hook类的所有方法
function test(){
    Java.perform(function(){
        var Utils = Java.use("com.hook.utils");
        var methods = Utils.class.getDeclaredMethods();
        for(let i=0;i<methods.length;i++){
            let methodName = methods[i].getName();
            var overLoadArr = Utils[methods[i].getName()].overloads;
            console.log("fun:",methodName);
            for(var k=0;k<overLoadArr.length;k++){
                overLoadArr[k].implemention = function(){
                    var param = "";
                    for(var j=0;j<arguments.length;j++){
                        params += arguments[j]+" ";
                    }
                    console.log("utils."+methodName+" is called!param is:",param);
                    return this[methodName].apply(this,arguments);
                }
            }
        }
    })
}

