// You can replace these with your own embed codes (iframe, HTML, etc)
const embeds = [
  
<iframe src="https://www.jopi.com/embed.php?game=basket-random" frameborder="0" scrolling="no" width="800" height="600" ></iframe>
" width="100%" height="100%" frameborder="0"></iframe>`,
  
<iframe src="https://www.jopi.com/embed.php?game=soccer-random" frameborder="0" scrolling="no" width="800" height="600" ></iframe>`

  
<iframe src="https://www.jopi.com/embed.php?game=boxing-random" frameborder="0" scrolling="no" width="800" height="600" ></iframe>
" width="100%" height="100%" frameborder="0"></iframe>`,


<iframe src="https://www.jopi.com/embed.php?game=volley-random" frameborder="0" scrolling="no" width="800" height="600" ></iframe>

  `<div style="padding:40px;">Replace this with your custom embed HTML!</div>`
];

function showEmbed(idx) {
  document.getElementById('embed-area').style.display = 'block';
  document.getElementById('embed-content').innerHTML = embeds[idx - 1];
}
