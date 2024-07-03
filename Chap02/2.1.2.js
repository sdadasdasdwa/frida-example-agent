/**
 * Money类的构造方法为
 * pubic Money（String str,int i）{
 *      this.currency = str;
 *      this.amount = i;
 * }
 */

function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.Money");
        money.$init.implementation = function(a,b){
            console.log("money.$init params:",a,b);
            return this.$init("美元",666);
        }
    })
}

