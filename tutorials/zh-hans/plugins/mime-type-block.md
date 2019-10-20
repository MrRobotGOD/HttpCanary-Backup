### Mime-Type屏蔽

Mime-Type屏蔽插件可以对指定HTTP网络协议的请求或响应进行屏蔽。用户需要在/HttpCanary/plugins/MimeTypeBlock/req-mimes.txt或res-mimes.txt中进行配置，前者是屏蔽请求数据，后者是屏蔽响应数据。安装插件的时候会自动创建文件，使用者只需要编辑输入指定的Mime-Type即可，**v3.1.5版本**及之后支持使用 * 和 ? 通配符匹配。

以req-mimes.txt为例，配置的Mime-Type格式如下：
```
# 屏蔽所有图片请求（使用*通配符）
image/*

# 屏蔽JSON请求
application/json
```

下面是req-mimes.txt和res-mimes.txt的两个具体示例：

[示例文件](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/MimeTypeBlock/req-mimes.txt)

[示例文件](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/MimeTypeBlock/res-mimes.txt)

关于Mime-Type的类型，可以参考：
[官方MimeType列表](https://www.iana.org/assignments/media-types/media-types.xhtml)