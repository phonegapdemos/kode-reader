# 2D Code Reader

_One app to scan them all_ -- The simplest line and matrix codes reader out there. Scans all major and most popular 2D codes. See below list for details.

This project is initially based on [wildabeast/BarcodeDemo](https://github.com/wildabeast/BarcodeDemo) repository, a demo for [BarcodeScanner plugin](https://github.com/wildabeast/BarcodeScanner), however very highly modified with a lot of changes since inital fork.

For PhoneGap developers Kode Reader may be an interesting example for mobile application monetization, by integrating AdMob an network and displaying their apps. It was achieved using powerful [`floatinghotpot/cordova-admob-pro`](https://github.com/floatinghotpot/cordova-admob-pro) plugin, the only available plugin that lets you serve ads in application build with PhoneGap Build (all other ads SDKs requires you to build application locally).

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

All seems to be fine. I haven't got any chance testing it on either iOS or Windows Mobile so far. Sorry. Tested **only** as compiled through [PhoneGap Build](http://build.phonegap.com). Never compiled locally or tested after such build.

**This project ABANDONED, because it was meant to be test project only! There is no wiki, issues and no support. There will be no future updates. Unfortunately, you're on your own.**
