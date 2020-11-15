function toObj(id, name) {
  return {
    id,
    name,
    avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  };
}
export { toObj };

// Math对象随机方法  随机得到两个数之间的正数  并且包含这两个数：
function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 随机打乱数组
export function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let j = getRandom(0, i);
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  return array;
}

export function find_index(list, item) {
  return list.findIndex(song => song.id === item.id);
}

// 搜索节流
export function throttle(fun, delay) {
  let timer;
  return function(...args) {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

//
export function insertArr(arr, key) {
  const MAX_LENGTH = 10;
  let fdIndex = arr.findIndex(item => item.id === key.id);
  if (fdIndex === 0) {
    return arr;
  }
  if (fdIndex > 0) {
    arr.splice(fdIndex, 1);
  }
  arr.unshift(key);
  if (arr.length > MAX_LENGTH) {
    arr.pop();
  }
  return arr;
}
