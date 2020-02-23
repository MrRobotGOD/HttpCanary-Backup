### SSL Host Mapping

When using SSL/TLS to encrypt the request, the client needs to add the information of host (Server Name Indication, SNI for short) in the handshake packet to request the certificate of the server. This is because one server could have multiple domain names, so the server needs to return the corresponding domain SSL certificate according to the information of host in client request. HttpCanary will parse the SNI to create a MITM certificate for handshake.

![](/assets/ssl_sni.png)

This works well in normal cases. However, in many cases, the server will only have one domain name. In order to improve the speed of response, the client may directly use ip instead of domain name when connecting to server. At this time, the client will not add SNI in the handshake packet so the HttpCanary can't obtain the information of host to create a man-in-middle certificate. As a result, the HttpCanary cannot parse SSL/TLS encrypted data packets. The following image shows the data we will see:

![](/assets/ssl_host_mapping1.png)

Take the packet above as an example. The port of server is 443, indicating that this is most likely an HTTPS request. The first packet is a Client Hello handshake packet sent by the client to the server, and the second packet is a Server Hello handshake packet sent by the server to the client. The information in the red box of the Server Hello packet in the image is the SSL certificate information. The domain name (CN) of the certificate is github.com, but the first Client Hello handshake packet does not have SNI information, that is, there is no github.com information. Therefore, the packets that HttpCanary capture were all encrypted with SSL/TLS.

In this case, you need to complete SNI information manually.

#### Method 1: Automatic Mapping

In "more options" menu, tap "Host Mapping" to automatically bound the host of the certificate to the current ip.

![](/assets/ssl_host_mapping2.png)

#### Method 2: Manual Mapping

Except for automatic mapping, you can use manual mapping to map the host manually. You can get into "Settings-> SSL Certificate Management-> Host Mapping", tap the "+" button in the upper right corner, and add the host and ip.

![](/assets/ssl_host_mapping3.png)

In addition, HttpCanary also supports managing mapped host, batch importing and exporting.

![](/assets/ssl_host_mapping4.png)

After configuring the host mapping, you can obtain unencrypted data of HTTPS packets for analysis!



