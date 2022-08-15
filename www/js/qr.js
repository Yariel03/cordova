const error = (error) => {
  alert("Scanning failed: " + error);
};

const property = {
  preferFrontCamera: true, // iOS and Android
  showFlipCameraButton: true, // iOS and Android
  showTorchButton: true, // iOS and Android
  torchOn: true, // Android, launch with the torch switched on (if available)
  saveHistory: true, // Android, save scan history (default false)
  prompt: "Place a barcode inside the scan area", // Android
  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  formats: "QR_CODE,EAN_8,EAN_13,CODE_128,CODABAR", // default: all but PDF_417 and RSS_EXPANDED
  orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
  disableAnimations: true, // iOS
  disableSuccessBeep: false, // iOS and Android
};

const initQr = () => {
  cordova.plugins.barcodeScanner.scan(
    (result) => {
      alert(
        "We got a barcode\n" +
          "Result: " +
          result.text +
          "\n" +
          "Format: " +
          result.format +
          "\n" +
          "Cancelled: " +
          result.cancelled
      );
      document.getElementById("codigo").innerHTML = result.text;
    },
    error,
    property
  );
};
