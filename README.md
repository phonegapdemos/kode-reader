# 2D Code Reader

_One app to scan them all_ -- The simplest line and matrix codes reader out there. Scans all major and most popular 2D codes. See below list for details.

This project is initially based on [wildabeast/BarcodeDemo](https://github.com/wildabeast/BarcodeDemo) repository, a demo for [BarcodeScanner plugin](https://github.com/wildabeast/BarcodeScanner), however very highly modified with a lot of changes since inital fork.

For PhoneGap developers Kode Reader may be an interesting example for mobile application monetization, by integrating AdMob an network and displaying their apps. It was achieved using powerful [`floatinghotpot/cordova-admob-pro`](https://github.com/floatinghotpot/cordova-admob-pro) plugin, the only available plugin that lets you serve ads in application build with PhoneGap Build (all other ads SDKs requires you to build application locally).

Some screensshots of compiled application, running under Android platform:

| scanning... | scanned QR Code | scanned UPC-E |
| :----:| :----:| :----:|
|![android-s03.png][androids03]|![android-s02.png][androids02]|![android-s01.png][androids01]|

[androids03]: https://raw.githubusercontent.com/phonegapdemos/kode-reader/master/_publish/android-s03.png "android-s03.png"
[androids02]: https://raw.githubusercontent.com/phonegapdemos/kode-reader/master/_publish/android-s02.png "android-s02.png"
[androids01]: https://raw.githubusercontent.com/phonegapdemos/kode-reader/master/_publish/android-s01.png "android-s01.png"

**This project ABANDONED, because it was meant to be test project only! There is no wiki, issues and no support. There will be no future updates. Unfortunately, you're on your own.**

## Supported 2D codes

Following barcode and 2D code types are currently supported, depending on platform, you use:

- **Android**: `QR_CODE`, `DATA_MATRIX`, `CODABAR`, `CODE_128`, `CODE_39`, `CODE_93`, `EAN_13`, `EAN_8`, `ITF`, `PDF417`, `RSS14`, `RSS_EXPANDED`, `UPC_A` and `UPC_E`.

- **iOS**: `QR_CODE`, `DATA_MATRIX`, `AZTEC`, `CODE_128`, `CODE_39`, `EAN_13`, `EAN_8`, `ITF`, `UPC_A` and `UPC_E`.

- **Windows Phone 8**: `QR_CODE`, `DATA_MATRIX`, `AZTEC`, `CODABAR`, `CODE_128`, `CODE_39`, `CODE_93`, `EAN_13`, `EAN_8`, `ITF`, `MSI`, `PDF417`, `RSS14`, `UPC_A` and `UPC_E`.

Yes, [_Aztec Code_](http://en.wikipedia.org/wiki/Aztec_Code), though quite popular, is currently supported only on Windows Phone 8 platform. Sorry.

## Tests

There's as `tests` folder included in this repository, where you find PDF files containing examples of many codes supported by this scanner, along with necessary comments. Use them to test your application. Note, that not all of them are readable on-screen and some must be printed to be readable.

Note for the developers: The `tests` folder is huge and it adds > 5 MB to your application size, when building through PhoneGap Build with directly specifying GitHub repository. To avoid this, either build locally or zip contents of this repository excluding `tests` folder and build through PhoneGap Build, by uploading private application code from `.zip` file.

This application was tested on four different devices and Android versions:

- Samsung Galaxy Nexus with Android 4.3 (previously Android 4.2.2),
- LG GT540 with Android 2.3.3 and CyanogenMod, 
- GSmart Rola G1317D with Android 2.2.2,
- Sony Xperia E with Android 4.1.1.

All seems to be fine under Android. **Under Windows Phone 8 this application seems to be NOT working at all**. I runs without any problems or errors, but camera is not zooming automatically and I wasn't able to scan ANY code.  Sorry.

Tested **only** as compiled through [PhoneGap Build](http://build.phonegap.com). Never compiled locally or tested after such build.

You can download compiled versions of this application for different platforms from [`_publish`](https://github.com/phonegapdemos/kode-reader/tree/master/_publish) folder or directly from PhoneGap Build public pages for these applications ([here](https://build.phonegap.com/apps/1579359/share)). Note, that they're signed with my own private signing keys and certificates.

Note also, that since these applications are copied directly to SD card (instead of being downloaded from proper mobile stores) you should undertake additional steps (like enabling installation from untrusted sources in Android) to be able to install them on your mobile device.

**This project ABANDONED, because it was meant to be test project only! There is no wiki, issues and no support. There will be no future updates. Unfortunately, you're on your own.**
