# PerssionProject
测试权限系统
## 淘宝镜像已经换掉了 
npm config set registry https://registry.npmmirror.com
npm config get registry
## node 版本
14.17.6
## npm版本
6.14.15
## 下载node_module时要想保证文件不被提交
.gitignore
node_modules/
## node版本与项目不匹配则npm i时会报 类似 dealTree

## moke 
引入mockjs 工具包 使用axios直接调用定义在moke中的url

## 使用vuex
引入对应版本的vuex vue2 ->vuex3  vue3->vuex4 vue与vuex版本不匹配的话会导致功能受损(this.$store)
创建Store的对象，使用module模式
定义每一个module 
调用mutations     store.commit('global/MenuList')
获取每个module store    const { menuList } =store.state.global

使用vuex 获取菜单

## 使用git 打tag 可以找到对应描述的commit

git add .
git commit -m "完成某个功能"
git tag v1.0.1
git push origin v1.0.1

git tag
git tag -a v1.0 -m "Release version 1.0" 增加描述
git show tag_name






