// You can replace these with your own embed codes (iframe, HTML, etc)
const embeds = [
  `<iframe src="https://www.example.com" width="100%" height="100%" frameborder="0"></iframe>`,
  `<iframe src="https://www.wikipedia.org" width="100%" height="100%" frameborder="0"></iframe>`,
  `<iframe src="https://www.openstreetmap.org" width="100%" height="100%" frameborder="0"></iframe>`,
  `<div style="padding:40px;">Replace this with your custom embed HTML!</div>`
];

function showEmbed(idx) {
  document.getElementById('embed-area').style.display = 'block';
  document.getElementById('embed-content').innerHTML = embeds[idx - 1];
}