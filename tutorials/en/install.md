### Installation

####  1. VPN Configuration（Necessary）

HttpCanary uses VPN as a MITM(Man in the Middle) to capture network packets, so you must configure the VPN first.

![](/assets/install_vpn.png)

<br>

####  2. Install root certificate（Necessary）

**Due to Android system's limitations, you must draw your phone screen lock or enter the phone password when installing the certificate. If you have not set them, you need to set a screen lock or password at first.**

HttpCanary uses MITM(Man in the Middle) technology to capture the network packets or to decrypt the network packets which were encrypted with TLS/SSL in requests of HTTPS, WSS and so on protocols. So you need to install HttpCanary's root certificate first. During installation, click OK by default. Do not modify the configuration.

![](/assets/install_user_cetificate.png)

<br>

####  3. Upgrade the certificate to system certificate（7.0+ Strongly Recommended）

**This step requires a Root device. It is strongly recommended to do this configuration for systems with Android 7.0 and above systems. Skip this step for 5.0-6.0 systems.**

From Android 7.0(Android N), Google changed the network security policy. The CA certificate installed by user will not be trusted by TLS/SSL connection by default. This means HttpCanary may not capture the packets which encrypted with TLS/SSL and can't connect to network during packet capturing. Therefore, you need to upgrade the certificate installed in last step to the system CA certificate.

##### 3.1 Method one：One-click Upgrade in HttpCanary 

![](/assets/install_system_cetificate.png)

This method may fail. If it fails, please refer to other methods below.

##### 3.2 Method two：Manually import(Root required)

First, export the certificate file which was installed in step 2. You can find it under /data/misc/user/0/cacerts-added/ directory (you need to distinguish by file's time attribute if there are more than one file). Or you can export it to SD card in HttpCanary's root certificate settings.

![](/assets/cetificate_export.png)

Copy the .0 file(do not edit it's name) to the system CA directory: /system/etc/security/cacerts/.

There are several ways :

- Use adb commands to copy，

This method requires the installation of adb tools, so this method is suitable for Android developers. If the adb tools are not installed, please refer to other methods.

```shell
# 87bc3517.0 is an example, you should replace with the real file name
adb root
adb shell
mount -o rw,remount /system
cp -f /sdcard/HttpCanary/87bc3517.0 /system/etc/security/cacerts
```

- Use of applications which can operate on system files to perform copy and edit operations, such as the MT manager 2.

Use MT manager 2 to import the certificate file, and copy the .0 format certificate file to /system/etc/security/cacerts directory directly (need to mount the system partition with read and write status).

![](/assets/cetificate_move.png)

##### 3.3 Verify after successfully upgrading

After upgrading successfully，you can find the corresponding HttpCanary's certificate under Settings -> Encryption and credentials
-> Trusted credentials -> System.

![](/assets/cetificate_trust.png)

##### 3.4 Attention

- This operation needs to be performed on devices with root previlege
- It is not necessary to configure this for devices below Android 7.0
- Upgrading/restarting the Android system may delete or reset system certificate file. Please check and re-import
- After upgrading the system certificate, do not uninstall the user certificate which was installed in step 2

<br>

####  4. Add certificate to Mozilla Firefox

Mozilla Firefox is suitable to capture the packets of web pages, but it uses a non-system CA certificate for authentication，So the HttpCanary's system certificate doesn't work. You need to add the certificate to Firefox manually.

![](/assets/cetificate_firefox1.png)

Open HttpCanary's Firefox certificate installation page, click "Install" and choose Firefox. Select all options in the Firefox's certificate installation dialog which pops up automatically and click "Confirm" (**Please select all options**).

![](/assets/cetificate_firefox2.png)

<br>

####  5. Install parallel space (highly recommended for Android versions 7.0 - 9.0 non-root devices)

For non-root users whoes device system version is Android 7.0 and above, it's strongly recommended to install parallel space to assist packet capture. Devices with Android 5.0-6.0 and 10.0+ can ignore this step.

**Attention：Parallel space does not support Android Q version**

Root devices are required to upgrade the certificate to system certificate. Therefore, users who cannot root the device can use parallel space to assist packet capture, which can solve the problem that can't connect to network during packet capturing in some applications.

##### 5.1 Installation

After initializing HttpCanary, find the entrance for installing parallel space in the HttpCanary settings. If it is a 64-bit device, two parallel space installation options will be displayed. Please install them one by one. Mobile phones with Android 8.0 and above will restrict the installation source during the installation. Please choose allow the installation (you can turn off the permissions after completing the installation).


![](/assets/install_paralle_space.png)

**Attention: You must use the built-in version of parallel space from HttpCanary, and packet capture will be invalid in higher version of parallel space**


##### 5.2 The usage of parallel space

For some applications which can't connect to network during packet capturing, you can use parallel space to open it (open the target application, not HttpCanary).


![](/assets/paralle_space_capture.png)

Use HttpCanary to capture packets from parallel space, then you can capture the packets of the target application.

---

#### Summary

- For mobile phones with android version below Android 7.0,upgrading to system certificate is not necessary and parallel space installation is also not necessary. It is very friendly to capture packets.

- For mobile phones which system version is 7.0 and higher, upgrade certificate if rooted, install parallel space if not rooted.

**This is the end of installation tutorial! Start using HttpCanary happily!**






