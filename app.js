document.querySelector("#count").addEventListener("click", () => {
  const text = document.querySelector("#text").value;
  const count = Array.from(text).length;
  document.querySelector("#result").textContent = `字符数：${count}`;
});
