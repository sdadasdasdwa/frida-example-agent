function main() {
    Java.perform(function () {
        // Hook Activity 的 onCreate 方法
        var Activity = Java.use("android.app.Activity");
        Activity.onCreate.overload('android.os.Bundle').implementation = function (bundle) {
            console.log("Activity.onCreate Hooked: " + this.getClass().getName());

            // 在 Activity 中 hook setOnClickListener
            this.onCreate(bundle);
            hookSetOnClickListener();
        };
    });
}

var lastListener = null;

// 观察 Listener 对象是否变化
function hookSetOnClickListener() {
    var View = Java.use("android.view.View");
    var Exception = Java.use("java.lang.Exception");  // 用于堆栈跟踪

    // Hook setOnClickListener 方法
    View.setOnClickListener.implementation = function (listener) {
        var viewId = this.getId();
        if (listener !== lastListener) {
            console.log("New OnClickListener set for View ID: " + viewId);
            
            // 打印调用堆栈
            var ex = Exception.$new();
            // console.log(ex.getStackTrace().toString());
            
            lastListener = listener;  // 记录最新的监听器
        } else {
            console.log("OnClickListener is the same as before for View ID: " + viewId);
        }

        return this.setOnClickListener(listener);  // 调用原始方法
    };
}
setImmediate(main);