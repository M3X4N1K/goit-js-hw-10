// Підвантажує HTML з <load src="..."> в DOM
document.addEventListener("DOMContentLoaded", async () => {
  const loads = document.querySelectorAll("load[src]");
  
  for (const el of loads) {
    const src = el.getAttribute("src");
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`Failed to load ${src}`);
      const html = await res.text();
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      el.replaceWith(wrapper);
    } catch (err) {
      console.error(err);
    }
  }
});
