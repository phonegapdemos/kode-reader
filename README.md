# 2D Code Reader

The simplest line and matrix codes reader out there. Scans all major and most popular 2D codes.

**One app to scan them all**.

## Supported 2D codes

Following barcode and 2D code types are currently supported, depending on platform, you use:

- **Android**: `QR_CODE`, `DATA_MATRIX`, `CODABAR`, `CODE_128`, `CODE_39`, `CODE_93`, `EAN_13`, `EAN_8`, `ITF`, `PDF417`, `RSS14`, `RSS_EXPANDED`, `UPC_A` and `UPC_E`.

- **iOS**: `QR_CODE`, `DATA_MATRIX`, `AZTEC`, `CODE_128`, `CODE_39`, `EAN_13`, `EAN_8`, `ITF`, `UPC_A` and `UPC_E`.

- **Windows Phone 8**: `QR_CODE`, `DATA_MATRIX`, `AZTEC`, `CODABAR`, `CODE_128`, `CODE_39`, `CODE_93`, `EAN_13`, `EAN_8`, `ITF`, `MSI`, `PDF417`, `RSS14`, `UPC_A` and `UPC_E`.

Yes, [_Aztec Code_](http://en.wikipedia.org/wiki/Aztec_Code), though quite popular, is currently supported only on Windows Phone 8 platform. Sorry.

## Tests

Tested on four different devices and Android versions:

- Samsung Galaxy Nexus with Android 4.3 (previously Android 4.2.2),
- LG GT540 with Android 2.3.3 and CyanogenMod, 
- GSmart Rola G1317D with Android 2.2.2,
- Sony Xperia E with Android 4.1.1.

All seems to be fine. I haven't got any chance testing it on either iOS or Windows Mobile so far. Sorry. Tested **only** as compiled through [PhoneGap Build](http://build.phonegap.com). Never compiled locally or tested after such build.

Initially based on [wildabeast/BarcodeDemo](https://github.com/wildabeast/BarcodeDemo) repository, a demo for [BarcodeScanner plugin](https://github.com/wildabeast/BarcodeScanner) for PhoneGap Build. With a lot of changes since then.