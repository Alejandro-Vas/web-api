
// Clipboard API
// const clip = () => {
//     window.navigator.clipboard
//         .readText()
//         .then(
//             (clipText) => {
//                 const element = document.querySelector(".inner")
//                 element.innerHTML = clipText
//             },
//         );
// }

// clip()


// Battery API
// navigator.getBattery().then((battery) => {
//     function updateAllBatteryInfo() {
//       updateChargeInfo();
//       updateLevelInfo();
//       updateChargingInfo();
//       updateDischargingInfo();
//     }
//     updateAllBatteryInfo();
  
//     battery.addEventListener("chargingchange", () => {
//       updateChargeInfo();
//     });
//     function updateChargeInfo() {
//       console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
//     }
  
//     battery.addEventListener("levelchange", () => {
//       updateLevelInfo();
//     });
//     function updateLevelInfo() {
//       console.log(`Battery level: ${battery.level * 100}%`);
//     }
  
//     battery.addEventListener("chargingtimechange", () => {
//       updateChargingInfo();
//     });
//     function updateChargingInfo() {
//       console.log(`Battery charging time: ${battery.chargingTime} seconds`);
//     }
  
//     battery.addEventListener("dischargingtimechange", () => {
//       updateDischargingInfo();
//     });
//     function updateDischargingInfo() {
//       console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
//     }
//   });


// Screen Wake Lock API
// let wakeLock = null;

// async function lockHandler() {
//   wakeLock = await navigator.wakeLock.request("screen");
// }

// async function releaseHandler() {
//   await wakeLock.release();
//   wakeLock = null;
// }


// SendBeacon
// используется для асинхронной передачи небольшого количества информации поверх HTTP веб-серверу.
// window.addEventListener("unload", logData, false);

// function logData() {
//   navigator.sendBeacon("/log", {});
// }

// logData()

// данные о клиенте


// function getCoords(pos) {
//   const crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// const geolocationInfo = navigator.geolocation.getCurrentPosition(getCoords);

// console.log(navigator)

// print('1231231312')
