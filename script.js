const websites = [
  `<iframe src="https://html5.gamedistribution.com/bf1268dccb5d43e7970bb3edaa54afc8/?utm_source=jopi.com&utm_medium=basket-random&utm_campaign=block-and-redirect" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://html5.gamedistribution.com/308d826f20034d7b972f25258c8d0a44/?utm_source=jopi.com&utm_medium=soccer-random&utm_campaign=block-and-redirect" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://html5.gamedistribution.com/e8c02771085e4c8b9de3deda5e087e0e/?utm_source=jopi.com&utm_medium=boxing-random&utm_campaign=block-and-redirect" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="https://html5.gamedistribution.com/b6f03bdc505e4d78a17379a5a83e206b/?utm_source=jopi.com&utm_medium=volley-random&utm_campaign=block-and-redirect" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`,
  `<iframe src="tengolyper.github.io/logineer" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe>`
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
