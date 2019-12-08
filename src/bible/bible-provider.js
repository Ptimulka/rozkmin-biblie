import BibleData from '@/bible/bible-data';

// translations for autocomplete component
export function getTranslations(selection) {
  return Object.keys(BibleData.translations).map(function (translationLongNameOrHeaderName, index) {
    var translationShortNameOrHeader = BibleData.translations[translationLongNameOrHeaderName];
    if(translationShortNameOrHeader == 'header') { return { header: translationLongNameOrHeaderName } }
    else { return { text: translationLongNameOrHeaderName, value: translationShortNameOrHeader } }
  });
}

// books for autocomplete component
export function getBooks(selectedTranslation) {
  return Object.keys(BibleData.booksNames).filter(function (bookShortNameOrHeaderName, index) {
    var bookNameOrHeader = BibleData.booksNames[bookShortNameOrHeaderName];
    return (bookNameOrHeader == 'header' || bookShortNameOrHeaderName in BibleData.allBibleData[selectedTranslation]);
  })
  .map(function (bookShortNameOrHeaderName, index) {
    var bookNameOrHeader = BibleData.booksNames[bookShortNameOrHeaderName];
    if(bookNameOrHeader == 'header') { return { header: bookShortNameOrHeaderName } }
    else { return { text: bookNameOrHeader, value: bookShortNameOrHeaderName } }
  });
}
