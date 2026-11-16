// Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const cachedItem = cache.find((item) => item.hash === hash);

    if (cachedItem) {
      console.log("Из кеша: " + cachedItem.value);
      return "Из кеша: " + cachedItem.value;
    }

    const result = func(...args);

    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

// Задача № 2
function debounceDecoratorNew(func, delay) {
  let hasExecutedFirstCall = false;
  let timeoutId = null;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (!hasExecutedFirstCall) {
      hasExecutedFirstCall = true;
      wrapper.count += 1;
      func(...args);
      return;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      wrapper.count += 1;
      func(...args);
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}