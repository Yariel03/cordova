navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    var camera = document.getElementsByClassName("camera")[0]; //A video element
    // Attach the stream to the video element
    camera.srcObject = stream;
  })
  .catch(function (err) {
    console.error("getUserMediaError", err, err.stack);
  });
var constraints;
// var platform = window.device.platform;
// if (platform == "browser") {
//   constraints = {
//     video: true,
//     audio: false,
//   };
// } else {
constraints = {
  video: { facingMode: { exact: "environment" } },
  audio: false,
};
// }
constraints.video.width = { exact: 1280 };
constraints.video.height = { exact: 720 };
initQr = () => {
  play();
};

function play(deviceId, HDUnsupported) {
  var constraints;
  //   var platform = window.device.platform;
  //   if (platform == "browser") {
  //     constraints = {
  //       video: true,
  //       audio: false,
  //     };
  //   } else {
  constraints = {
    video: { facingMode: { exact: "environment" } },
    audio: false,
  };
  //   }

  constraints.video.width = { exact: 1280 };
  constraints.video.height = { exact: 720 };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      var camera = document.getElementsByClassName("camera")[0];
      // Attach local stream to video element
      camera.srcObject = stream;
    })
    .catch(function (err) {
      console.error("getUserMediaError", err, err.stack);
    });
}
