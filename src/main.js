// main.js
document.addEventListener("DOMContentLoaded", async () => {
  const loads = document.querySelectorAll("load[src]");
  
  for (const el of loads) {
    const src = el.getAttribute("src");
    const res = await fetch(src);
    const html = await res.text();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    el.replaceWith(wrapper);

    // Підключаємо скрипти з підвантаженого HTML
    wrapper.querySelectorAll("script[type='module']").forEach(s => {
      const newScript = document.createElement("script");
      newScript.type = "module";
      newScript.src = s.src;
      document.body.appendChild(newScript);
    });
  }
});
