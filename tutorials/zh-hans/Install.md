### 安装

####  1. 配置VPN（必须）

HttpCanary使用VPN拦截设备流量来实现网络数据抓包，所以必须配置VPN才能使用HttpCanary。

![](/assets/install_vpn.png)

<br>

####  2. 安装根证书（必须）

**安装证书要求设备必须设置锁屏密码或者图案，请按照系统提示进行设置（此乃系统限制与HttpCanary无关）**

HttpCanary使用Man-in-the-Middle(MITM)技术抓取和解析TLS/SSL协议数据包，比如常见的HTTPS、WSS等加密请求，所以使用之前必须先安装HttpCanary根证书。安装时，默认点击确定即可，请勿修改配置。

![](/assets/install_user_cetificate.png)

<br>

####  3. 证书升级为系统证书（7.0+强烈建议）

**此步骤需要Root设备，7.0（包括）以上系统强烈建议配置此项，5.0-6.0系统可以跳过此步骤。**

从Android Nougat(7.0)开始，谷歌改变了网络安全策略。用户安装的CA证书将默认不被TLS/SSL连接信任，这意味着HttpCanary可能无法抓取TLS/SSL加密的数据包，抓包时表现为无网络。我们可以将上一步安装的证书升级为系统证书。

##### 3.1 方式一：HttpCanary内一键升级

![](/assets/install_system_cetificate.png)

此方式可能会失败，如果失败了，请参考下面其它方式。

##### 3.2 方式二：手动导入

首先，导出前面第2步中已经安装的根证书文件。此文件可以在/data/misc/user/0/cacerts-added/目录下面找到（如果有多个文件，需要自行按照时间区分），也可以在HttpCanary的根证书设置中导出到SD存储卡。

![](/assets/cetificate_export.png)

接下来，将.0格式文件（勿改名），导入到系统CA证书目录/system/etc/security/cacerts/下。

导入方式有多种：

- adb命令导入

此方式要求安装adb工具，适合Android开发者使用，如果未安装adb工具，请参考其它方式。

```shell
# 87bc3517.0为证书文件，名称以导出为准
adb root
adb shell
mount -o rw,remount /system
cp -f /sdcard/HttpCanary/87bc3517.0 /system/etc/security/cacerts
```

- mt管理器2导入

使用mt管理器2进行证书文件导入，直接将.0格式证书文件复制到/system/etc/security/cacerts目录即可（需挂载系统读写状态）。

![](/assets/cetificate_move.png)

##### 3.3 证书升级成功校验

证书升级系统证书成功后，可以在系统“设置->加密与凭据->信任的凭据->系统”页面中找到添加的HttpCanary系统证书。

![](/assets/cetificate_trust.png)

##### 3.4 注意事项

- 此操作需要在Root设备上进行。
- 7.0以下设备无需配置此项。 
- 升级/重启系统可能会删除重置系统证书文件，请检查后重新导入。
- 升级系统证书完成后，请勿卸载第2步已安装用户证书。

<br>

####  4. 安装证书添加至火狐浏览器

火狐浏览器非常适合用来抓取网页数据包，但是火狐浏览器使用非系统的CA证书进行认证，所以安装的HttpCanary证书无法生效，需要将其添加到火狐浏览器中。

![](/assets/cetificate_firefox1.png)

在HttpCanary内的火狐浏览器证书安装界面，点击安装并选择火狐浏览器打开，火狐浏览器会自动弹出证书安装弹框，勾选所有的信任项并确定（**注意勾选全部选项**）。

![](/assets/cetificate_firefox2.png)

<br>

####  5. 安装平行空间（7.0+非root强烈建议）

如果设备系统版本是Android 7.0（包括）以上的非root用户，强烈建议安装平行空间进行辅助抓包。5.0-6.0的系统可以忽略此步骤。

**注意：平行空间不支持Android Q版本**

由于升级系统证书需要Root设备，所以对于无法Root设备的用户使用平行空间作为抓包辅助，可以解决部分应用抓包无网络的问题。

##### 5.1 安装方式

初始化完成HttpCanary后，在HttpCanary的设置中找到安装平行空间的入口。如果是64位的设备会显示两个平行空间安装选项，请依次进行安装（缺一不可）。安装时8.0及以上的手机会限制安装来源，请勾选同意（安装完成后可以再关闭权限）。

![](/assets/install_paralle_space.png)

**注意：平行空间版本必须使用HttpCanary内置的版本，高于此版本抓包无效**

##### 5.2 平行空间的使用

对于部分抓包无网的应用，可以使用平行空间打开此应用（打开目标应用，而非打开HttpCanary）。

![](/assets/paralle_space_capture.png)

然后使用HttpCanary对平行空间进行抓包，便可以抓到目标应用的数据包。

---

#### 总结一下

- 7.0以下版本手机，无需升级证书无需安装平行空间，抓包非常友好。
- 7.0以上版本手机，Root的升级证书，非Root的安装平行空间。


**安装教程到此结束啦！下面开始愉快地使用HttpCanary吧！**






