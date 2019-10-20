### HTTP总览统计

此插件用于统计HTTP的总览信息，并生成Excel报表，报表存储在/HttpCanary/plugins/StatsOverview目录下。

**此插件免费版本仅限试用期内可用**

统计的总览信息包含如下：
- url
- 服务器IP
- 协议版本
- 请求方法
- 响应状态码
- 请求开始时间戳
- 响应开始时间戳
- 结束时间戳
- 请求数据量
- 响应数据量
- 请求开始->响应开始耗时
- 请求开始->结束耗时

**PS**
- 响应开始时间戳为收到响应状态码的时间点，结束时间戳为响应数据全部收到的时间点。

下面是一个统计的Excel文件示例：

[示例文件](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/HttpOverview/http-overview.xls)