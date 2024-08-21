import Toast from "./Toast.js";

const toast = new Toast({
  //   position: "top-right",
  text: "1st",
  //   autoClose: 1000,
});

setTimeout(() => {
  toast.update({ text: "bye" });
}, 1000);

// setTimeout(() => {
//   toast.remove();
// }, 1000);

// setTimeout(() => {
//     new Toast({ position: "top-right", text: "2nd" });
//     new Toast({ position: "top-left", text: "3rd" });
// }, 1000);
