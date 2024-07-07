// 实战：去除应用程序的强制升级
// 绕过强制升级的两种办法：
//      1.通过页面跳转，直接进入首页（使用Objection）
//      2.通过Hook定位，去除强制升级


// 方法一 Objection页面跳转步骤
// 找到强制升级的上级函数，更改上级函数的调用
// 更改UpgradeUtil类的b方法，将函数体替换为空，可以去除强制升级
upgraderUtil.b.overload('java.lang.String').implementiation = function(context){
    return false;
}


// 方法二 Hook定位 步骤：
//      1.通过showStackTrace()方法打印堆栈得知触发的UpgradeUtil类的run方法
//      2.通过Objection在app启动之前进行hook，打印相关函数调用
//      3.反编译apk后，搜索找到方法a的位置，得知它的逻辑是获取版本号
//      4.frida Hook该方法，返回最新版本号，去除强制升级