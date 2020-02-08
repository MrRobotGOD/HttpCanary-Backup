### Host Blocking

**This plugin has some issue in old versions, please update to v3.1.5 and later**

The Host blocking plugin can block the specific host and IP during network requests. You need to configure the target Host and IP in /HttpCanary/plugins/HostBlock/hosts.txt. The file will be automatically created when the plugin is installed. You could add or edit Host and IP in it directly. The plugin supports using * and ? wildcard character to match Host and IP.


Here is the format of Host and IP in hosts.txt:
```
# block the specified QQ domain
xw.qq.com

# block all domains under baidu.com (using wildcard character *)
*.baidu.com

# block the specified IP address
112.25.105.102

# block the IP address between 112.25.105.240 and 112.25.105.249 (using wildcard character ?)
112.25.105.24?

# block the IP address which starts with 223.111 (using wildcard character *)
223.111.*.*
```

Here is a demo hosts file:

[Demo file](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/HostBlock/hosts.txt)