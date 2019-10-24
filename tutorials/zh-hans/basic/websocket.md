### WebSocket协议

#### 1. WebSocket协议格式

WebSocket是一种在单个TCP连接上进行全双工通讯的协议。建立一个WebSocket连接，客户端首先要向服务器发起一个HTTP请求，这个请求和通常的HTTP请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的HTTP请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的WebSocket连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

WebSocket协议的协议交互流程如下：

![](/assets/websockets_diagram.png)

#### 2. WebSocket协议视图

HttpCanary支持对WebSocket协议的解析，以对话的形式展示客户端和服务端的数据交互。

![](/assets/websockets_overview.png)







