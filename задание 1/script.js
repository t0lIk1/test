function toggleText() {
  const textBlock = document.getElementById("textBlock");
  const button = document.querySelector("button");

  if (textBlock.style.display === "none") {
      textBlock.style.display = "block";
      button.textContent = "Скрыть текст";
  } else {
      textBlock.style.display = "none";
      button.textContent = "Показать текст";
  }
}