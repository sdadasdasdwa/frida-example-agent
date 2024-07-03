/**
 * public class Money{
 *      public static void setFlag(String str){
 *          flag = str;
 *      }
 *      public String getInfo(){
 *          return flag;
 *      }
 * }
 */
function test(){
    Java.perform(function(){
        var money = Java.use("com.hook.Money");
        money.setFlag.implemetion  = function(a){
            console.log("money.setFlagParam："+a);
            return this.setFlag(a);
            
        }
    })
}

function test1(){
    Java.perform(function(){
        var money = Java.use("com.hook.Money");
        money.getInfo.implemetion = function () {
            var result = this.getInfo();
            console.log("money.getInfo:",result);
            return result;
          }
    })
}

