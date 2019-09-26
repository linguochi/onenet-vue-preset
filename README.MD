# OneNET vue-preset
OneNET vue项目开发预设模板

## install
注意windows用户要用系统自带的cmd命令行，否则选项无法使用；

如果你使用的是ssh方式的git 使用下面的命令： 
```
# 首先安装vue-cli 3.0
> npm install -g @vue/cli

> vue create --preset gitlab.onenet.com:linguochi/onenet-vue-preset --clone project-name
```


如果你使用的是http方式的git， 使用下面的命令

```
# 首先安装vue-cli 3.0
> npm install -g @vue/cli
> git clone http://gitlab.onenet.com/linguochi/onenet-vue-preset.git
> vue create --preset ./onenet-vue-preset project-name
```


## local dev

```
# 进入到 本项目所在目录
> vue create --preset ./onenet-vue-preset project-name
```
