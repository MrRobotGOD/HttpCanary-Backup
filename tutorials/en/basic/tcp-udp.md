### TCP/UDP Protocol

#### 1. The Format of TCP/UDP Protocol

The TCP and UDP are two transport layer protocols. The transport layer of most network protocols is based on these two protocols, such as HTTP, XMPP, MQTT, RTSP, and so on. HttpCanary supports parsing TCP/UDP protocol. If the application layer uses HTTP, it will be automatically parsed into format of HTTP. If the application layer uses unknown protocol, it will be displayed in the original data format of TCP/UDP.

#### 2. TCP/UDP Protocol Viewer

Since the original network packets of TCP/UDP are almost in binary format, HttpCanary will be garbled when displayed in text form. The left arrow indicates that this data packet is a packet sent from the client to the server and the right arrow indicates that this data packet is a packet sent from the server to the client.

![](/assets/tcp_udp_text.png)

It is recommended to use the HEX Viewer when analyzing the TCP/UDP packets. By analyzing the format of binary data, you can speculate the  application layer protocol of the packets. Since HttpCanary only supports parts of application layer protocol, the identification and analysis of other application layer protocols need to be completed by yourself.

![](/assets/tcp_udp_hex.png)

In the "more" menu, there are some operations such as saving, sharing, copying, and view switching of the protocol content.

![](/assets/tcp_udp_more.png)






