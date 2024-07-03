/**
 * public static int getCalc(int i,int i2){
 *      return i+i2;
 * }
 * public static int getCalc(int i,int i2,int i3){
 *      return i+i2+i3;
 * }
 * public static int getCalc(int i,int i2,int i3,int i4){
 *      return i+i2+i3+i4;
 * }
 */

function test(){
    Java.perform(function () {
        var Utils = Java.use("com.hook.Utils");
        Utils.getCalc.implemention = function(){
            //会报错has more than one overload
            //user.overload to choose from
            //overload('int','int')
            //overload('int','int','int')
            //overload('int','int','int','int')
            return this.getCalc();
        }
    })
}
//借助提示编写正确的代码
function test1(){
    Java.perform(function(){
        var Utils = Java.use("com.hook.Utils");
        Utils.getCalc.overload('int','int').implemention = function(a,b){
            return this.getCalc(a,b);
        }
        Utils.getCalc.overload('int','int','int').implemention = function(a,b,c){
            return this.getCalc(a,b,c);
        }
        Utils.getCalc.overload('int','int','int','int').implemention = function(a,b,c,d){
            return this.getCalc(a,b,c,d);
        }
    })
}

//但这种做法效率比较低，可以先优化一下代码
function test2(){
    Java.perform(function(){
        var Utils = Java.use("com.hook.Utils");
        //overloads方法返回的是一个包含所有重载方法的数组
        console.log(Utils.getCalc.overloads);
        //比如这里数组的长度就是3
        console.log(Utils.getCalc.overloads.length);
    })
}

//通过利用overloads方法编写for循环，每循环一次就是用implementation进行方法覆写
function test3(){
    Java.perform(function(){
        var Utils = Java.use("com.hook.Utils");
        var overloadArr = Utils.overloads;
        for(var i=0;i<overloadArr.length;i++){
            overloadArr[i].implemention = function () {
                var params = "";
                //这里arguments居然能够直接知道overloadArr数组的传入参数
                for(var j=0;j<arguments.length;j++){
                    params += arguments[j]+" ";
                }
                console.log("utils.getCalc is called! params is:",params);
                if(arguments.length == 2){
                    return this.getCalc(arguments[0],arguments[1]);
                }else if(arguments.length == 3){
                    return this.getCalc(arguments[0],arguments[1],arguments[2]);
                }else if(arguments.length == 4){
                    return this.getCalc(arguments[0],arguments[1],arguments[2],arguments[3]);
                }
            }
        }
    })
}

//通过对象自带的call和apply方法进行传入
function test4(){
    Java.perform(function(){
        var Utils = Java.use("com.hook.Utils");
        var overloadArr = Utils.getCalc.overloads;
        for(var i=0;i<overloadArr.length;i++){
            overloadArr[i].implemention = function(){
                var params = "";
                for(var j=0;j<arguments.length;j++){
                    params += arguments[j] + " ";
                }
                console.log("utils.getCalc is called! params is:",params);
                return this.getCalc.apply(this,arguments);
            }
        }
    })
}






