### SSL域名映射

SSL/TLS加密请求时，客户端需要在握手包中加入域名（Server Name Indication，简称SNI）用来请求服务器的证书。这是因为多个域名可能映射到了同一台服务器，服务器需要根据客户端请求的域名返回相应的SSL域名证书。HttpCanary会通过解析SNI来创建中间人（MITM）证书进行握手。

![](/assets/ssl_sni.png)

在常规操作下，这个是没有任何问题的。但是在很多情况下，服务器只会映射一个域名，客户端为了提高响应速度，可以会使用IP直连的方式发起请求并且不在握手包中加入SNI，这时候HttpCanary便无法获取到域名来创建中间人证书了。无法创建中间人证书便无法解析SSL/TLS加密数据包，我们看到的数据便如下图所示：

![](/assets/ssl_host_mapping1.png)

以上方的数据包为例。服务器端口是443，表明这极可能是一个HTTPS请求。第一个数据包是客户端发向服务器的Client Hello握手包，第二个包是服务器发向客户端的Server Hello握手包。图中Server Hello包内红色框内的信息是SSL证书的信息，证书的域名（CN）是github.com，但是第一个Client Hello握手包中并没有SNI信息，也就是没有github.com的信息。因此，HttpCanary获取到的都是加密的SSL/TLS数据包。

这种情况下，需要手动进行SNI信息补全。

#### 方式一：自动映射

在更多选项的菜单中，点击“域名映射”进行自动将证书绑定的域名映射到当前IP。

![](/assets/ssl_host_mapping2.png)

#### 方式二：手动映射

除了自动映射外，还可以进行手动映射。在“设置->SSL证书管理->域名映射”中点击右上角“+”按钮添加域名和IP。

![](/assets/ssl_host_mapping3.png)

除此之外，还支持映射域名的管理、批量导入和导出功能。

![](/assets/ssl_host_mapping4.png)

配置完成域名映射后，便可以获取到HTTPS的明文数据包进行分析了！



