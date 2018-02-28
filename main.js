const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback){
const query = {
    maxResults: 5,
    part: 'snippet',
    key: 'AIzaSyD2YYogfeU6poCCk0Zrd8I0oQ4iRlr9ZJw',
    type: 'video',
    q: `${searchTerm}`,
    
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

//function displayResults(data){
//    return `<p><a>https://www.youtube.com/watch?v=${data.id.videoId}</a></p>`
//}

function logData(data) {
    let results = data.items.map(item => {
     return `<a href='https://www.youtube.com/watch?v=${item.id.videoId}'>
            <li><img src='${item.snippet.thumbnails.medium.url}'>${item.snippet.title}</li></a>
             `  
    });
    $('.searchResultsContainer').html(results);
    console.log(data);
}

function getQuery() {
  $(".js-search").submit(event => {
    event.preventDefault;
    const searchForm = $(event.currentTarget).find(".js-query");
    let searchTerm = searchForm.val();
    getDataFromApi(searchTerm, logData);
  });
}


$(getQuery())