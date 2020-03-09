### HTTP

#### 1. The message format of HTTP

HTTP is the abbreviated form of Hypertext Transfer Protocol, which is based on the TCP protocol in Transport Layer.

Firstly, you need to learn the message format of HTTP, here is an example for a simple HTTP request and response.

Request Message:
```
GET /index.html HTTP/1.1
Host: www.httpcanary.com
```
The 1st line is request line, the 2nd line is request header(a HTTP request could have more than one request header). If the method of request is POST, there will also be a request body.

Response message:
```
HTTP/1.1 200 OK
Server: Apache
Connection: Keep-Alive
Content-Type: text/html; charset=UTF-8
Content-Length: 12

Hello World!
```
The 1st line is response line, the 2nd to 4th line are response headers, the last line is response body.

In practical usage, the format of HTTP is far more complex than this example. You can get more details from this [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).


#### 2. HTTP Viewers

HttpCanary supports parsing HTTP packets in different versions, including HTTP/1.0, HTTP/1.1, and HTTP/2, and provides a variety of operation views.

In packet content page, you can swipe left or swipe right to switch between the HTTP request and response. Then you can click the tags below to switch in different viewers.

##### 2.1 Overview

Here is a content overview of a request and response which protocol is HTTP/1.1:

![](/assets/http_overview.png)

The overview page displays the basic properties of a HTTP request, including URL, server information, content, time, the size of request and so on.

##### 2.2 Raw Viewer

The Raw Viewer displays the raw data of a HTTP request(data in HTTP/2 will be transformatted to HTTP/1.x automatically). You can do a long press on the content to copy it.

![](/assets/http_raw.png)

##### 2.3 Headers Viewer

The Headers Viewer displays the request headers and response headers. You could tap on the header items to do more operations.

![](/assets/http_headers.png)

##### 2.4 HEX Viewer

HttpCanary provides the HEX Viewer which displays the request boday and response body in hexadecimal. This view could help the developers to analysis the data format of the packets. 

![](/assets/http_hex.png)

##### 2.5 Text Viewer

The Text Viewer displays the request body and response body in text format. The content of packets will be decoded to text automatically. It supports the format such as gzip, chunked, Brotli and so on.

![](/assets/http_text.png)

Remark: The non-text content will be displayed in messy code.

##### 2.6 Preview Viewer

HttpCanary supports formatting and previewing the data of some data formats, such as json, pictures, audio, and video.

For example, the json content will be formatted automatically:

![](/assets/http_preview.png)

##### 2.7 JSON Viewer

Although the preview already supports formatting json content, HttpCanary still provides a professional colorful JSON Viewer, which can be accessed by tapping on the preview content. The JSON View supports the closing and expansion of JSON nodes, and you can click on the nodes for more operations.


![](/assets/http_json.png)

##### 2.8 Image Viewer

HttpCanary supports previewing the image content. You can tap on the image in content page to enter the image preview mode, use gesture to zoom in and out, and tap the upper right corner to save.

![](/assets/http_image.png)

The Image View not only supports the animated images(.gif, .webp and so on format), but also supports the static images(.jpg and .png and so on format).

##### 2.9 Audio Viewer

HttpCanary supports playing audio content, including standard audio formats such as mp3, wav, aac, ogg and so on.

![](/assets/http_audio.png)

##### 2.10 Video Viewer

HttpCanary supports playing video content too, including standard video formats such as mp4, wav and so on.

![](/assets/http_video.png)

##### 2.11 URL Viewer

Some URLs may contain a quantity of parameters, you can tap the URL and get into the URL Viewer. In this Viewer, you can preview the splitted parameters and do operations on them.

![](/assets/http_url.png)

##### 2.12 Cookie Viewer

Cookies are commonly used data in web pages. HttpCanary designed a corresponding Cookie Viewer which displays Set-Cookie content and Cookie content.

![](/assets/http_set-cookie.png)
![](/assets/http_cookie.png)

<br>

#### 3. Save and share the HTTP packets

##### 3.1 Save

In the packet content page, click the save button in the upper right corner to save the captured packet data. The target directory is HttpCanary/download directory in sdcard. There are two files saved, one is a original packet data in .hcy format, and the other is the content of the request body or response body.


![](/assets/http_save.png)

In addition, the .hcy format can be opened again with HttpCanary in the file manager.

##### 3.2 Share

For HTTP sharing, you can choose to share the request or response separately, or choose to share together. Some applications are not supporting sharing together, such as WeChat and QQ.

![](/assets/http_share.png)



