// 捕捉所有OnClickListener.onClick事件
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

// 重新Hook每次覆盖的OnClickListener
function hookSetOnClickListener() {
    var View = Java.use("android.view.View");
    var OnClickListener = Java.use("android.view.View$OnClickListener");

    // Hook setOnClickListener 方法
    View.setOnClickListener.implementation = function (listener) {
        var viewId = this.getId();
        console.log("New OnClickListener set for View ID: " + viewId);

        if (listener != null) {
            listener.onClick.implementation = function (view) {
                console.log("View clicked! View ID: " + view.getId());
                this.onClick(view);  // 调用原始的 onClick 方法
            };
        }

        return this.setOnClickListener(listener);  // 调用原始方法
    };
}

setImmediate(main);