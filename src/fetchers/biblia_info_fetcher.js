var baseUrl = "https://www.biblia.info.pl/cgi-bin/biblia.cgi?"

function getChapterVerses(http, translation, book, chapter, isTheOnlyChapter, previousRequests, chapterLoadedCallback) {

  var url = baseUrl + book + chapter + "." + "1-999/t" + translation + "/o";
  if(isTheOnlyChapter) {
    url = baseUrl + book + "1-999/t" + translation + "/o";
  }
  http.get(url, {
    before(request) {
      previousRequests.push(request);
    }
  }).then(function(data){
    var htmlString = data.bodyText;
    var indexOfBody = htmlString.indexOf("<body");
    var htmlStringWithoutHead = htmlString.substring(indexOfBody);
    var indexOfEndHtml = htmlStringWithoutHead.indexOf("</html>");
    var htmlStringToParse = htmlStringWithoutHead.substring(0, indexOfEndHtml);
    var doc = new DOMParser().parseFromString(htmlStringToParse, "text/html");

    var verses = doc.getElementById("werset");
    var versesArray = [];
    for (var i = 0; i < verses.children.length; i++) {
        var child = verses.children[i];
        if(child.id != "nrWersetu") break;
        versesArray.push(child.nextSibling.textContent.trim());
    }
    return versesArray;
  }).then(function(versesArray){
    chapterLoadedCallback(versesArray, chapter-1);
  })

}

export function getBookVerses(http, translation, book, bookChaptersN, previousRequests, chapterLoadedCallback) {
  if(bookChaptersN == 1) {
    getChapterVerses(http, book, 1, true, previousRequests, chapterLoadedCallback);
  }
  else {
    for(var i = 0; i<bookChaptersN; i++) {
      getChapterVerses(http, translation, book, i+1, false, previousRequests, chapterLoadedCallback);
    }
  }
}
