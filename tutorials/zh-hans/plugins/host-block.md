### Host屏蔽

**此插件历史版本存在bug，请升级到v3.1.5及之后版本**

Host屏蔽插件可以指定host和IP来进行特定网络请求的屏蔽。Host和IP需要在/HttpCanary/plugins/HostBlock/hosts.txt中进行配置，安装插件的时候会自动创建文件，使用者只需要编辑输入Host和IP即可，Host和IP支持使用 * 和 ? 通配符匹配。

hosts.txt内配置Host和IP的格式如下：
```
# 屏蔽指定的QQ的域名
xw.qq.com

# 屏蔽百度全部域名（使用*通配符）
*.baidu.com

# 屏蔽指定IP
112.25.105.102

# 屏蔽112.25.105.240到112.25.105.249范围内全部IP（使用?通配符）
112.25.105.24?

# 屏蔽223.111开头的全部域名（使用*通配符）
223.111.*.*
```

下面是一个具体的示例：

[示例文件](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/HostBlock/hosts.txt)