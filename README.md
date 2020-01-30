# vue 学习造轮子

## 安装
使用本框架请开启border-box


Windows 用户运行 npm run dev-test 时会出现 BUG，解决办法是：
将 dev-test 对应的命令 parcel watch test/* --no-cache & karma start 分别运行，运行方式如下
新开一个 Git Bash 窗口运行 npx parcel watch test/* --no-cache
再开一个 Git Bash 窗口运行 npx karma start