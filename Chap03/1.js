function main(){
    console.log("Script loaded successfully")
    Java.perform(function () {
        console.log("Inside java perform function")
        var MainActivity = Java.use('com.frank.demo02.MainActivity')
        console.log("Java.Use.Successfully")
        MainActivity.fun.implementation = function(x,y){
            console.log("x => ",x,"y => ",y)
            var ret_value = this.fun(2,5)
            return ret_value
        }
      })
}
setImmediate(main)