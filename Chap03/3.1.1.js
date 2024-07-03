function main(){
    Java.perform(function(){
        var hashMap = Java.use("java.util.HashMap");
        hashMap.put.implementation = function(a,b){
            console.log("HashMap.put:",a,b);
            return this.put(a,b);
        }

    })
}

setImmediate(main);