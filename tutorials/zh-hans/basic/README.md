### 基本操作

HttpCanary支持抓取TCP/UDP传输层的协议，但是只能解析HTTP和WebSocket两种应用层协议，其它应用层协议会以原始的数据显示并标记为TCP还是UDP。

![](/assets/main_page.png)

上图中第一条是HTTP协议，第二条是基于TCP的协议，第二条是基于UDP的协议，第四条是WebSocket协议。

下面我们看以下这几种协议的具体数据内容。

- [HTTP协议](/basic/http.md)
- [WebSocket协议](/basic/websocket.md)
- [基于TCP/UDP的协议](/basic/tcp-udp.md)