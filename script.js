const websites = [
  `<iframe src="https://www.nba.com" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.fifa.com" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.boxingscene.com" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.volleycountry.com" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://www.wikipedia.org" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`
];

function showEmbed(index) {
  const embedArea = document.getElementById("embed-area");
  const embedContent = document.getElementById("embed-content");

  if (websites[index - 1]) {
    embedContent.innerHTML = websites[index - 1];
    embedArea.style.display = "block";
  } else {
    embedContent.innerHTML = "<p>Website not found.</p>";
    embedArea.style.display = "block";
  }
}
