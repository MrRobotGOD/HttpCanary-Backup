### Basic Usage

HttpCanary supports capturing the packages which use TCP or UDP in transport layer, but can only parse the packages whose application layer protocol is HTTP or WebSocket. The packages with other application layer protocols will be displayed as raw data and marked as TCP or UDP.

![](/assets/main_page.png)

The picture above shows the records in different protocol: 1st - HTTP, 2nd - TCP, 3rd - UDP, 4th - Websocket.

Let's see the data format of the following protocols. 

- [HTTP Protocol](/basic/http.md)
- [WebSocket Protocol](/basic/websocket.md)
- [Protocols based on TCP/UDP](/basic/tcp-udp.md)