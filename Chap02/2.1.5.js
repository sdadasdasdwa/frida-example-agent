/**
 * public boolean deposit(Money money){
 *      if(money == null || money.getAmount()<=0){
 *          return false;
 *      } 
 *      this.balance += money.getAmount();
 *      return true;
 * }
 */

function test(){
    Java.perform(function () {
        var wallettils = Java.use("com.hook.wallet");
        var Money = Java.use("com.hook.Money");
        wallettils.depost.implementation = function (a) { 
            //这里传入的a指代的就是Money类
            console.log("money.$init param:",a.getInfo());
            return this.deposit();
            //如果真的要构造一个Money类，那么
            // return this.deposit(Money.$new("美元",1000));
        }
    })
}

