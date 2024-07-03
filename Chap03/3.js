function main(){
    console.log("Script loaded successfullly")
    Java.perform(function(){
        console.log("Inside java perform function")
        
        //静态函数的主动调用
        var MainActivity = Java.use('com.frank.demo02.MainActivity')
        MainActivity.staticSecret()

        //实例函数的主动调用
        Java.choose('com.frank.demo02.MainActivity',{
            onMatch:function (instance) {
                console.log('instance found', instance)
                instance.secret()
            },
            onComplete:function(){
                console.log("search Complete")
            }
        })


    })
}
setImmediate(main)