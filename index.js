/** @format */

const LoopNames = (names) => {
  names.map((data, i) => {
    console.log(data);
  });
};

for (var i = 0; i <= 5; i++) {
  console.log(`${i}`);
}

console.log("Hello");

//!CallBack hell
// setTimeout(() => {
//   console.log("In SetTimeout with timer 0");

//   setTimeout(() => {
//     LoopNames(["Rahul", "Ramesh"]);

//     console.log("Second SetTimeout with timer as 0");

//     setTimeout(() => {
//       console.log("Third SetTimeout with timer as 0");
//     }, 0);
//   }, 0);
// }, 0);

//! Solving Callback hell

const solveCallBackHell = () =>
  new Promise((resolve, reject) => {
    return resolve;
  });

solveCallBackHell(
  setTimeout(() => {
    console.log("In SetTimeout with timer 0");
  },0),
)
  .then(
    setTimeout(() => {
      LoopNames(["Rahul", "Ramesh"]);

      console.log("Second SetTimeout with timer as 0");
    },0),
  )
  .then(
    setTimeout(() => {
      console.log("Third SetTimeout with timer as 0");
    }, 0),
  );
