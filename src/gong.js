let startHours = 9;
let endHours = 17;
let step = 2;
let day = 4;

let today = new Date(2024, 10, 23, 12, 59, 0, 0);
// let today = new Date();


/** 打开页面的时候，生成日期选择器。 */
function start({ startHours, endHours, step, day, today }) {
  // const currentDate = new Date(2024, 10, 22, 17, 59, 0);
  const currentDate = today;
  currentDate.setSeconds(0, 0);

  let oneDayDateArr = genOneDayDate({
    startHours,
    endHours,
    step,
    date: today,
  });

  /**day传入4天，生成4天的时间。 */
  let dayDate = genDayDate({ date: today, day });
  console.log(`dayDate:`);
  console.log(dayDate);

  const index = findDate({ oneDayDateArr, currentDate, minusMinutes: 1 });
  if (index === undefined) {
    const date = new Date(today);
    date.setDate(date.getDate() + 1);
    dayDate = genDayDate({ date, day });
    oneDayDateArr = genOneDayDate({ startHours, endHours, step, date });
    console.log(`dayDate:`);
    console.log(dayDate);
    console.log(`oneDayDateArr:`);
    console.log(oneDayDateArr);
  } else {
    const arr = oneDayDateArr;
    oneDayDateArr = arr.slice(index);
    console.log(index);
    console.log(`oneDayDateArr`);
    console.log(oneDayDateArr);
  }
  return {
    oneDayDateArr,
    dayDate
  };
}

/**
 * 根据指定的起始小时、结束小时、间隔小时数和当前日期，生成一天内的时间段数组。
 *
 * 该函数通过循环，按照指定的步长，在给定的日期上依次设置不同的小时数，从而生成一系列的时间段对象，每个时间段对象包含开始时间和结束时间。
 *
 * @param {Object} params - 包含生成时间段所需参数的对象。
 * @param {number} params.startHours - 开始的小时数，取值范围为0到23。
 * @param {number} params.endHours - 结束的小时数，取值范围为0到23，且应大于等于startHours。
 * @param {number} params.step - 间隔的小时数，取值范围为1到23，且应能整除(endHours - startHours)。
 * @param {Date} params.date - 当前的日期对象，用于设置时间段的日期部分。
 * @returns {Array<{start: Date, end: Date}>} 返回一个包含时间段对象的数组，每个时间段对象具有以下属性：
 * @returns {Date} 返回数组中的对象的start属性 - 时间段的开始时间，是一个Date对象。
 * @returns {Date} 返回数组中的对象的end属性 - 时间段的的结束时间，是一个Date对象。
 */
function genOneDayDate({ startHours, endHours, step, date }) {
  const arr = [];
  let temp = startHours;
  /** 重新创建一个日期对象，避免把外面传入的日期对象修改了。 */
  date = new Date(date);
  /**开始时间为9点，结束时间为17点，步长为2，则会生成4个时间段。 */
  const length = (endHours - startHours) / step;
  for (let i = 0; i < length; i++) {
    const startTimestamp = date.setHours(temp, 0, 0, 0);
    const endTimestamp = date.setHours((temp += step), 0, 0, 0);
    arr.push({
      start: new Date(startTimestamp),
      end: new Date(endTimestamp),
    });
  }
  return arr;
}

/**生成未来几天的时间。传入开始的日期对象，和未来的天数。 */
function genDayDate({ date, day }) {
  const arr = [];
  for (let i = 0; i < day; i++) {
    const tempDate = new Date(date);
    tempDate.setDate(date.getDate() + i);
    tempDate.setHours(0, 0, 0, 0);
    arr.push(tempDate);
  }
  return arr;
}

function findDate({ oneDayDateArr, currentDate, minusMinutes }) {
  for (let i = 0; i < oneDayDateArr.length; i++) {
    const element = oneDayDateArr[i];
    const end = new Date(element.end);
    end.setMinutes(end.getMinutes() - minusMinutes);
    if (currentDate < end) {
      return i;
    }
  }
}

function renderDay(dayDate) {
  const yearMonthDay = [];
  for (let i = 0; i < dayDate.length; i++) {
    const dayDateItem = dayDate[i];
    const year = dayDateItem.getFullYear();
    const month = dayDateItem.getMonth() + 1;
    const day = dayDateItem.getDate();
    yearMonthDay.push(`${year}-${month}-${day}`);
  }
  return yearMonthDay;
}

function renderHours(oneDayDate) {
  const hours = [];
  for (let i = 0; i < oneDayDate.length; i++) {
    const tempItem = oneDayDate[i];
    const startHours = tempItem.start.getHours();
    const endHours = tempItem.end.getHours();
    hours.push(`${startHours}:00 - ${endHours}:00`);
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
  date.setMinutes(0, 0, 0);
  return date;
}
function setHours(date, hours) {
  date = new Date(date);
  date.setHours(hours, 0, 0, 0);
  return date;
}
function minusMinutes(date, minutes) {
  date = new Date(date);
  date.setMinutes(date.getMinutes() - minutes, 0, 0);
  return date;
}
function getCurrentDate() {
  date = today;
  date.setSeconds(0, 0);
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
