const embeds = [
  `<iframe src="https://www.jopi.com/embed.php?game=basket-random" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.jopi.com/embed.php?game=soccer-random" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.jopi.com/embed.php?game=boxing-random" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.jopi.com/embed.php?game=volley-random" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>`,
  `<div style="padding:40px;">Replace this with your custom embed HTML!</div>`
];

function showEmbed(index) {
  const embedArea = document.getElementById("embed-area");
  const embedContent = document.getElementById("embed-content");

  if (embeds[index - 1]) {
    embedContent.innerHTML = embeds[index - 1];
    embedArea.style.display = "block";
  } else {
    embedContent.innerHTML = "<p>Embed not found.</p>";
    embedArea.style.display = "block";
  }
}
