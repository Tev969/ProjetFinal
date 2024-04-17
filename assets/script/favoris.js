document.querySelectorAll("input:has(+div.like)").forEach((input) => {
  input.addEventListener("click", favorite);
});

async function favorite(mouseevent) {
  const input = mouseevent.target;

  const baseUrl = "http://localhost:3003";

  if (input.checked) {
    await fetch(baseUrl + "/addfavorite/" + input.id);
  } else {
    await fetch(baseUrl + "/removefavorite/" + input.id);
  }
}
