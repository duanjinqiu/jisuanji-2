let startHours = 9;
let endHours = 17;
let step = 2;
let day = 5;

// let today = new Date(2024, 10, 23, 9, 0, 0, 0);
let today = new Date();

function start(
  { startHours, endHours, step, day, today } = {
    startHours: 9,
    endHours: endHours,
    step: step,
    day: day,
    today: today,
  }
) {
  // const currentDate = new Date(2024, 10, 22, 17, 59, 0);
  // const currentDate = today;

  startHours = startHours;
  endHours = endHours;
  step = step;
  day = day;
  today = today;

  /**day传入5天，生成5天的时间。 */
  let dayDate = genDayDate(today, day);
  console.log(`dayDate:`);
  console.log(dayDate);

  const index = findDate(currentDate);
  if (index === undefined) {
    /**day传入5天，生成5天的时间。 */
    dayDate = genDayDate(addDay(today, 1), day);
    console.log(`dayDate:`);
    console.log(dayDate);
  } else {
    const arr = dayDate[0];
    const dealDayDate = arr.slice(index);
    dayDate[0] = arr.slice(index);
    console.log(index);
    console.log(`dealDayDate`);
    console.log(dealDayDate);
  }
}
/** 生成一天中的时间。传入当天的日期。 */
/**
 *
 * @param {Object} dateInfo
 * @param {number} dateInfo.startHours
 * @param {number} dateInfo.endHours
 * @param {number} dateInfo.step
 * @param {Date} dateInfo.date
 *  @returns {Object[]} returns
 * @returns {string} returns[].ju
 * @returns {Date} returns[].start
 * @returns {Date} returns[].end
 */
function genOneDayDate({ startHours, endHours, step, date }) {
  const arr = [];
  let temp = startHours;
  /**开始时间为9点，结束时间为17点，步长为2，则生成4个时间段。 */
  const length = (endHours - startHours) / step;
  for (let i = 0; i < length; i++) {
    arr.push({
      start: setHours(date, temp),
      end: setHours(date, (temp += step)),
    });
  }
  return arr;
}

/**生成未来几天的时间。传入开始的日期对象，和未来的天数。 */
function genDayDate(date, day) {
  const arr = [genOneDayDate(date)];
  for (let i = 0; i < day - 1; i++) {
    date = addDay(date, 1);
    arr.push(genOneDayDate(date));
  }
  return arr;
}

function findDate(currentDate) {
  const arr = dayDate[0];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let tempEnd = new Date(item.end);
    tempEnd = minusMinutes(tempEnd, 1);
    // console.log(`item.end: ${item.end}`);
    // console.log(`tempEnd: ${tempEnd}`);
    if (currentDate < tempEnd) {
      return i;
    }
  }
}

function renderYearMonthDay() {
  const yearMonthDay = [];
  for (let i = 0; i < dayDate.length; i++) {
    const dayDateItem = dayDate[i];
    const temp = dayDateItem[0].start;
    yearMonthDay.push(
      temp.getFullYear() + "-" + (temp.getMonth() + 1) + "-" + temp.getDate()
    );
  }
  return yearMonthDay;
}

function renderHours(index) {
  const hours = [];
  const oneDay = dayDate[index];
  for (let i = 0; i < oneDay.length; i++) {
    const temp = oneDay[i];
    hours.push(`${temp.start.getHours()}:00 - ${temp.end.getHours()}:00`);
  }
  return hours;
}

function addDay(date, day) {
  date = new Date(date);
  date.setDate(date.getDate() + day);
  return date;
}
function getHours(date) {
  if (date) {
    date = new Date(date);
  } else {
    date = today;
  }
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
function setHours(date, hours) {
  date = new Date(date);
  date.setHours(hours);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
function minusMinutes(date, minutes) {
  date = new Date(date);
  date.setMinutes(date.getMinutes() - minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
function getCurrentDate() {
  date = today;
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * 此函数用于获取一组用户信息并以数组形式返回，数组中的每个元素为一个用户信息对象。
 *
 * @returns {Object[]} - 返回一个数组，数组中的元素均为用户信息对象。
 * @returns {Object} returns[].user - 每个用户信息对象的具体信息。
 * @returns {string} returns[].user.name - 用户的姓名。
 * @returns {number} returns[].user.age - 用户的年龄。
 * @returns {string} returns[].user.email - 用户的电子邮箱地址。
 */
function getUsersInfo() {
  const users = [
    {
      name: "张三",
      age: 25,
      email: "zhangsan@example.com",
    },
    {
      name: "李四",
      age: 30,
      email: "lisi@example.com",
    },
  ];
  return users;
}
