### HTTP Overview

This plugin is used to gather statistics of HTTP packets and generate the report in Excel files. These files are saved under /HttpCanary/plugins/StatsOverview .

**For free verion of HttpCanary, this plugin is available during trial period.**

Here are the statistics in overview:
- url
- server ip
- protocol version
- request method
- response code
- timestamp of starting request
- timestamp of starting response
- timestamp of finishing response
- data size of request
- data size of response
- time duration from starting request to starting response
- time duration from starting request to finishing response

**Remark**
- The timestamp of starting response is the point that received the response code, the timestamp of finishing response is the point that received all response data.

Here is an example of Excel file which contains the statistics.

[Demo File](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/HttpOverview/http-overview.xls)