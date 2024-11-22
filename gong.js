const startHours = 9;
const endHours = 17;
const step = 2;
const length = (17 - 9) / 2;
const arr = genOneDayDate(new Date());

const today = new Date();
function genOneDayDate(date) {
  const arr = [];
  const tempDate = new Date(date);
  tempDate.setMinutes(0);
  tempDate.setSeconds(0);
  tempDate.setMilliseconds(0);
  let temp = startHours;
  for (let i = 0; i < length; i++) {
    arr.push({
      start: new Date(tempDate.setHours(temp)),
      end: new Date(tempDate.setHours((temp += step))),
    });
  }
  return arr;
}
const ddd = dateOp(new Date());
console.log(ddd);
function dateOp(date) {
  return new changeDate(date);
}
function changeDate() {}
function addDay(day) {
  this.setDate(day);
  return this;
}
function addHours(hours) {
  const temp = new Date(
    date.getFullYears(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    0,
    0
  );
  temp.setHours();
  this.setHours(hours);
  return this;
}
const day = 5;
function genDayDate() {
  const date = new Date();
  const arr = [genOneDayDate(date)];
  for (let i = 0; i < day - 1; i++) {
    arr.push(genOneDayDate(new Date(date.setDate(date.getDate() + 1))));
  }
  return arr;
}
const giao = genDayDate();
console.log(giao);
const currentDate = new Date(2024, 10, 22, 10, 58, 0);
function findDate(currentDate) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let tempEnd = new Date(item.end);
    tempEnd = new Date(tempEnd.setMinutes(tempEnd.getMinutes() - 1));
    console.log(`item.end: ${item.end}`);
    console.log(`tempEnd: ${tempEnd}`);
    if (currentDate < tempEnd) {
      return i;
    }
  }
}
console.log(arr);
const findDateResult = findDate(currentDate);
console.log(findDateResult);
