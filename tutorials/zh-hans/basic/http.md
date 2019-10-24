### HTTP协议

#### 1. HTTP协议格式

HTTP是超文本传输协议(Hypertext Transfer Protocol)的简称，传输层是基于TCP协议。

首先，需要了解HTTP协议的报文格式，下面是一个最简单的HTTP请求和响应范例。

请求报文：
```
GET /index.html HTTP/1.1
Host: www.httpcanary.com
```
第1行被称为请求行，第2行被称为请求头（可以有多个），后面还可能有请求体（这里GET请求没有请求体）。

响应报文：
```
HTTP/1.1 200 OK
Server: Apache
Connection: Keep-Alive
Content-Type: text/html; charset=UTF-8
Content-Length: 12

Hello World!
```
第1行被称为响应行，第2-4行被称为响应头，最后一行是响应体。

实际应用中，HTTP协议的格式远比这个要复杂地多，这里不做过多讲解，更多的细节请[点我阅读](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)。

#### 2. HTTP协议视图

HttpCanary支持对HTTP协议的解析，包括HTTP1.0、HTTP1.1以及HTTP2，并提供了丰富的操作视图。

在抓包内容页，左右滑动切换请求和响应内容。点击下方的标签可以切换不同的视图。

##### 2.1 总览视图

下面是一张HTTP1.1协议的内容总览图：

![](/assets/http_overview.png)

总览图概括了HTTP请求的基本信息，包括URL、服务器信息、内容类型、时间以及数据量等。

##### 2.2 Raw视图

Raw视图展示HTTP协议的原始数据（HTTP2协议会自动转为标准的HTTP1.x格式），可以长按内容进行选择复制。

![](/assets/http_raw.png)

##### 2.3 Headers视图

HTTP的请求头和响应头在Headers视图中进行显示，点击Headers子项，可以进行更多操作。

![](/assets/http_headers.png)

##### 2.4 HEX视图

HttpCanary提供了HEX视图以十六进制显示请求体和响应体，方便开发者分析数据格式。

![](/assets/http_hex.png)

##### 2.5 Text视图

Text视图以文本形式展示请求体和响应体，并会自动对内容进行解码，支持gzip、chunked以及Brotli等编码格式。

![](/assets/http_text.png)

注：非文本格式的内容仍然会显示为乱码。

##### 2.6 预览视图

HttpCanary支持对部分格式数据进行格式化和预览，例如json、图片、音频和视频等。

例如最常见的json格式，会自动格式化：

![](/assets/http_preview.png)

##### 2.7 JSON视图

虽然预览已经支持json格式的格式化，但是HttpCanary仍然提供了专业的JSON彩色视图，点击预览内容即可进入。JSON视图支持节点的闭合和展开，并且可以点击节点进行更多的操作。

![](/assets/http_json.png)

##### 2.8 图片视图

HttpCanary支持图片内容的预览，点击内容页图片后进入图片预览模式，可以手势放大和缩小，并且可以点击右上角进行保存。

![](/assets/http_image.png)

图片视图既支持gif、webp等格式动图，也支持jpg、png等静态图片。

##### 2.9 音频视图

HttpCanary支持播放音频内容，包括mp3、wav、aac、ogg等标准音频格式。

![](/assets/http_audio.png)

##### 2.10 视频视图

视频内容也是支持直接播放的，包括mp4、wav等标准视频格式。

![](/assets/http_video.png)

##### 2.11 URL视图

部分URL可能含有非常多的参数，可以点击进入详细的预览页面，方便对参数进行详细的操作。

![](/assets/http_url.png)

##### 2.12 Cookie视图

Cookie作为网页中常用的数据，HttpCanary也对其设计了相应视图，包括Set-Cookie内容和Cookie内容。

![](/assets/http_set-cookie.png)
![](/assets/http_cookie.png)

<br>

#### 3. HTTP内容的保存和分享

##### 3.1 保存

在抓包内容页面，点击右上角的保存按钮，可以对抓包数据进行保存。保存的目录为sdcard下的HttpCanary/download目录，保存的文件有两个，一个原始的抓包数据格式为.hcy，另一个为请求体或响应体的内容。

![](/assets/http_save.png)

另外，hcy格式可以在文件管理器中重新使用HttpCanary打开。

##### 3.2 分享

HTTP分享可以选择单独分享请求或者响应，也可以选择合并分享，但是合并分享有部分应用不支持，例如微信和QQ等。

![](/assets/http_share.png)



