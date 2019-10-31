// TODO niektore nie musza byc export!

function getSelectionNodeInfo(node) {

  if(node.classList.contains("verse-text") || node.classList.contains("verse-number")) {
    var chapterNumber = parseInt(node.getAttribute("chapter"));
    var verseNumber = parseInt(node.getAttribute("verse"));
    return {
      chapter: chapterNumber,
      verse: verseNumber,
    }
  }
  else {
    return null;
  }
}

function lessThan(selectionNodeInfo1, selectionNodeInfo2) {
  if(selectionNodeInfo1.chapter < selectionNodeInfo2.chapter) {
    return true;
  }
  else if(selectionNodeInfo1.chapter > selectionNodeInfo2.chapter) {
    return false;
  }
  else {
    if(selectionNodeInfo1.verse < selectionNodeInfo2.verse) {
      return true;
    }
    else {
      return false;
    }
  }
}

function getSortedSelectionInfo(selectionNodeInfo1, selectionNodeInfo2) {
  // TODO ? jaka ksiega
  if(lessThan(selectionNodeInfo1, selectionNodeInfo2)) {
    return {
      start: selectionNodeInfo1,
      end: selectionNodeInfo2,
    }
  }
  else {
    return {
      start: selectionNodeInfo2,
      end: selectionNodeInfo1,
    }
  }
}

export function windowSelectionObjectToSelectionInfo(selection) {
  try {
    var node1 = selection.baseNode.parentNode;
    var node2 = selection.extentNode.parentNode;
    var selectionNodeInfo1 = getSelectionNodeInfo(node1);
    var selectionNodeInfo2 = getSelectionNodeInfo(node2);

    if(selectionNodeInfo1 !== null  && selectionNodeInfo2 !== null) {
      return getSortedSelectionInfo(selectionNodeInfo1, selectionNodeInfo2);
    }
    else {
      return null;
    }
  }
  catch(error) {
    return null;
  }
}

function getNodeWithChapterVerseAndClass(chapter, verse, className) {
  return document.querySelector("span." + className + "[chapter='" + chapter + "'][verse='" + verse + "']");
}

export function forceSelectCurrentSelection(currentSelection) {
  var startChapter = currentSelection.start.chapter;
  var startVerse = currentSelection.start.verse;
  var endChapter = currentSelection.end.chapter;
  var endVerse = currentSelection.end.verse;

  console.log(startChapter + "," + startVerse + " - " + endChapter + "," + endVerse);

  var selection = window.getSelection();
  selection.removeAllRanges();
  var range = document.createRange();

  var sn = getNodeWithChapterVerseAndClass(startChapter,startVerse,"verse-number")
  var en = getNodeWithChapterVerseAndClass(endChapter,endVerse,"verse-text")

  range.setStart(sn, 0);
  range.setEnd(en, 1);
  selection.addRange(range);
}
