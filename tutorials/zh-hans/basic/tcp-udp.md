### TCP/UDP协议

#### 1. TCP/UDP协议格式

TCP和UDP是两种传输层协议，绝大多数网络协议的传输层都是基于这两种协议，比如HTTP、XMPP、MQTT、RTSP协议等等。HttpCanary支持对TCP/UDP协议进行分析，如果应用层协议是HTTP协议，会自动解析成HTTP协议格式，如果应用层是未知协议，则会回以原始TCP/UDP的数据格式进行显示。

#### 2. TCP/UDP协议视图

由于原始TCP/UDP协议基本都是二进制格式的，所以HttpCanary以文本形式显示会变成乱码，这是正常现象。向左的箭头表示，此数据包是由客户端发向服务器的包；向右的箭头表示，此数据包是由服务器发向客户端的包。

![](/assets/tcp_udp_text.png)

推荐大家在分析TCP/UDP协议的时候，使用HEX视图。通过分析二进制的数据格式，大体可以分析到具体使用的应用层协议。由于HttpCanary只处理HttpCanary的应用层协议，所以其它应用层协议的识别和分析工作需要由使用者自行完成。

![](/assets/tcp_udp_hex.png)

在更多菜单栏中，支持对协议内容进行保存、分享、复制和视图切换等操作。

![](/assets/tcp_udp_more.png)






