(function() {
    // 保存原始的 fetch 函数
    var originalFetch = window.fetch;
  
    // 定义我们的 DarkReader 对象
    window.DarkReader = window.DarkReader || {};
  
    // 定义 setFetchMethod 函数
    window.DarkReader.setFetchMethod = function(fetch) {
      window.DarkReader.fetchMethod = fetch;
    };
  
    // 立即设置 fetchMethod
    window.DarkReader.setFetchMethod(originalFetch);
  
    // 重写 window.fetch
    window.fetch = function() {
      // 如果 DarkReader 已经设置了自己的 fetchMethod，就使用它
      if (window.DarkReader && window.DarkReader.fetchMethod) {
        return window.DarkReader.fetchMethod.apply(this, arguments);
      }
      // 否则使用原始的 fetch
      return originalFetch.apply(this, arguments);
    };
  
    console.log('DarkReader fetch method prepared');
  })();
  
