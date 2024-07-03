function main(){
    console.log("Script Loaded Successfully")
    Java.perform(function(){
        console.log("Inside loaded successfully")
        var MainActivity = Java.use('com.frank.demo02.MainActivity')
        console.log("Java.Use.Successfully")
        MainActivity.fun.overload('int','int').implementation = function(x,y){
            console.log("x => ",x,", y => ",y)
            var ret_value = this.fun(2,5);
            return ret_value
        }
    })
}
setImmediate(main)