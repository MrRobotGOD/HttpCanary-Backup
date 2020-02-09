### WebSocket Protocol

#### 1. The Format of WebSocket Protocol

WebSocket is a protocol for full-duplex communication over a single TCP connection. To establish a WebSocket connection, the client must first send an HTTP request to the server. This request is different from the common HTTP request, it contains some additional headers. The additional header "Upgrade: WebSocket" indicates that this is an HTTP request which applies for protocol upgrade. The server parses these additional headers and generates a response message to the client, and the WebSocket connection between the client and server is established. Then the two parties can freely pass information through this connection channel. The connection will exist until The client or server actively closes the connection.


Here is the interaction process of the Websocket protocol:

![](/assets/websockets_diagram.png)

#### 2. WebSocket Protocol Viewer

HttpCanary supports parsing the WebSocket protocol, and displays the data interaction between the client and the server in the form of dialogue.

![](/assets/websockets_overview.png)







