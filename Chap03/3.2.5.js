// 捕捉所有OnClickListener.onClick事件
function main() {
    Java.perform(function () {
        // Hook Activity 的 onCreate 方法
        var Activity = Java.use("android.app.Activity");
        var btnLoginId = Java.use("com.dodonew.online.R$id").btn_login.value;

        Activity.onResume.implementation = function () {
            this.onResume();
        
            // 确认按钮状态
            var button = this.findViewById(btnLoginId);
            if (button) {
                console.log("btn_login is found and clickable: " + button.isClickable());
            } else {
                console.log("btn_login is not found");
            }
        
        };

    });
}