var posts=["2024/06/24/hello-world/","2024/06/27/今日上线内容/","2024/06/25/第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };