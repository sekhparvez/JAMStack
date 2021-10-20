
//134fbc29-3576-4a88-b89e-59c14d73d452

var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=u0FChVoOZbxqvfeuzZc40qEP2V3icoG0";

function getStories() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

// function showData(stories) {
//   console.log(stories);
//   var looped = ""
//   for(let story of stories){
//     looped += `
//     <div class='item'>
//     <h3>${story.title}</h3>
//     <p>${story.abstract}</p>
//     </div>
//     `;
//   }
//   document.querySelector('.stories').innerHTML = looped;
// }

function showData(stories) {
  console.log('sample ', stories[0]);
  var looped = stories.map(story => `
  <div class='item'>
  <img src="${story.multimedia ? story.multimedia[2].url : "no pic available"}" alt="" />
  <h3><a href ="${story.url}">${story.title}</a></h3>
  <p>${story.abstract}</p>
  </div>
  `).join('');

  document.querySelector('.stories').innerHTML = looped;
}

getStories();
