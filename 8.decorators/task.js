//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...arg) {
    const hash = md5(arg.join(","));

    let objectInCache = cache.find((item) => item.hash == hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...arg);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let count = 0;
  let allCount = 0;

  const result = (...arg) => {
    allCount++;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        (...arg) => {
          timeoutId = null;
          func(...arg);
        },
        delay,
        ...arg
      );
    } else {
      func(...arg);
      count++;
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    }

    result.allCount = allCount;
    result.count = count;
  };

  result.count = count;
  result.allCount = allCount;
  return result;
}
