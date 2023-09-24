//made by smiilliin
//contact
//https://smiilliin.com
//https://www.instagram.com/smiilliin/

const { ggk } = require("./ggk");

const activity = 0x4;

//------------------------you have to input these data ----------------------//
const cookie = "";
const set_idx = "";
const tid = "";
const class_idx = "";
const referer = ""; //classcard match uri
//------------------------you have to input these data ----------------------//

const arr_score = [];

//------------------------ options ------------------------------------------//
const count = 6000;
const interval = 2;
//------------------------ options ------------------------------------------//

const startTime = new Date().getTime();
// const endTime = new Date().getTime() + count * interval * 1000;
for (let i = 0; i < count; i++) {
  arr_score.push(ggk.hack(startTime + i * interval * 1000, 130));
}
// console.log(arr_score);

const encodedDataArray = [];

encodedDataArray.push(`set_idx=${set_idx}`);
ggk.a().forEach((value) => {
  encodedDataArray.push(`arr_key%5B%5D=${value}`);
});
arr_score.forEach((value, index) => {
  encodedDataArray.push(`arr_score%5B${index}%5D%5Bt%5D=${encodeURI(value.t)}`);
  encodedDataArray.push(`arr_score%5B${index}%5D%5Bs%5D=${encodeURI(value.s)}`);
  encodedDataArray.push(`arr_score%5B${index}%5D%5Bm%5D=${encodeURI(value.m)}`);
});
encodedDataArray.push(`activity=${activity}`);
encodedDataArray.push(`tid=${tid}`);
encodedDataArray.push(`class_idx=${class_idx}`);
// console.log(encodedDataArray);

// console.log("wait for endTime");

// setTimeout(() => {
console.log("sent");

fetch("https://www.classcard.net/Match/save", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Referer: referer,
    Origin: "https://classcard.net",
    Cookie: cookie,
  },
  body: encodedDataArray.join("&"),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
// }, endTime - new Date().getTime() + 500);
