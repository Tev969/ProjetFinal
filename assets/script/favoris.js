let inputs = document.querySelectorAll("input:has(+div.like)");

inputs.forEach((input) => {
  console.log("cookie");
  input.addEventListener("click", () => {

    if (input.checked) {
      console.log(input.id);

    } else {
      console.log(input.id);
    }
  });
});



async function favorite()
 {
  const reponse = await fetch("http://localhost:3003/favorite.js");
  const favoris = await reponse.json();
  console.log(favoris);
}