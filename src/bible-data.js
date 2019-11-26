import bt from '@/bible/bt';
import bp from '@/bible/bp';
import bw from '@/bible/bw';
import br from '@/bible/br';
import bg from '@/bible/bg';
import ng from '@/bible/ng';
import ug from '@/bible/ug';
import esp from '@/bible/esp';
import ns from '@/bible/ns';

var BibleData = {
  translations: {
    'Polskie tłumaczenia' : 'header',
    'Biblia Tysiąclecia'            : 'bt',
    'Biblia Poznańska'              : 'bp',
    'Biblia Warszawska'             : 'bw',
    'Biblia Warszawsko-Praska'      : 'br',
    'Biblia Gdańska'                : 'bg',
    'Nowa Biblia Gdańska'           : 'ng',
    'Uwspółcześniona Biblia Gdańska': 'ug',
    'Edycja Świętego Pawła'         : 'esp',
    'Biblia Nowego Świata'          : 'ns',
    'Biblia Jakuba Wujka'           : 'jw',
    'Słowo Życia (NT)'              : 'sz',
    'Przekład Dosłowny EIB (NT)'    : 'eib',
    'Angielskie tłumaczenia' : 'header',
    'King James Version'            : 'av',
    'Webster Bible'                 : 'web',
    'Young\'s Literal Translation'  : 'ylt',
    'Biblia Grecka' : 'header',
    'Septuaginta'                   : 'gr',
    'Biblia po łacinie' : 'header',
    'Łacińska Vulgata'              : 'vul',
  },
  allBibleData: {
    // 'translation': dictionary of chapters and arrays of arrays of verses, for example
    //  {
    //     'Mt': [
    //       [ 'First verse of first chapter of Mt', 'Second verse of first chapter of Mt', ... ],
    //       [ 'First verse of second chapter of Mt', 'Second verse of second chapter of Mt', ... ]
    //       ...
    //     ],
    //     'Lk': [
    //        [ ... ],
    //        ...
    //     ]
    //  }
    'bt': bt,
    'bp': bp,
    'bw': bw,
    'br': br,
    'bg': bg,
    'ng': ng,
    'ug': ug,
    'esp': esp,
    'ns': ns
  },
  booksNames: {
    'Stary Testament' : 'header',
    'Rdz'   : 'Księga Rodzaju',
    'Wj'    : 'Księga Wyjścia',
    'Kpl'   : 'Księga Kapłańska',
    'Lb'    : 'Księga Liczb',
    'Pwt'   : 'Księga Powtórzonego Prawa',
    'Joz'   : 'Księga Jozuego',
    'Sdz'   : 'Księga Sędziów',
    'Rt'    : 'Księga Rut',
    '1Sm'   : '1 Księga Samuela',
    '2Sm'   : '2 Księga Samuela',
    '1Krl'  : '1 Księga Królewska',
    '2Krl'  : '2 Księga Królewska',
    '1Kr'   : '1 Księga Kronik',
    '2Kr'   : '2 Księga Kronik',
    'Ezd'   : 'Księga Ezdrasza',
    'Ne'    : 'Księga Nehemiasza',
    'Tb'    : 'Księga Tobiasza',
    'Jdt'   : 'Księga Judyty',
    'Est'   : 'Księga Estery',
    '1Mch'  : '1 Księga Machabejska',
    '2Mch'  : '2 Księga Machabejska',
    'Job'   : 'Księga Hioba',
    'Ps'    : 'Księga Psalmów',
    'Prz'   : 'Księga Przysłów',
    'Koh'   : 'Księga Koheleta',
    'PNP'   : 'Pieśń nad pieśniami',
    'Mdr'   : 'Księga Mądrości',
    'Syr'   : 'Mądrość Syracha',
    'Iz'    : 'Księga Izajasza',
    'Jr'    : 'Księga Jeremiasza',
    'Lm'    : 'Lamentacje Jeremiasza',
    'Ba'    : 'Księga Barucha',
    'Ez'    : 'Księga Ezechiela',
    'Dn'    : 'Księga Daniela',
    'Oz'    : 'Księga Ozeasza',
    'Jl'    : 'Księga Joela',
    'Am'    : 'Księga Amosa',
    'Ab'    : 'Księga Abdiasza',
    'Jon'   : 'Księga Jonasza',
    'Mi'    : 'Księga Micheasza',
    'Na'    : 'Księga Nahuma',
    'Ha'    : 'Księga Habakuka',
    'So'    : 'Księga Sofoniasza',
    'Ag'    : 'Księga Aggeusza',
    'Za'    : 'Księga Zachariasza',
    'Ml'    : 'Księga Malachiasza',
    'Nowy Testament' : 'header',
    'Mt'    : 'Ewangelia Mateusza',
    'Mk'    : 'Ewangelia Marka',
    'Lk'    : 'Ewangelia Łukasza',
    'Jan'   : 'Ewangelia Jana',
    'Dz'    : 'Dzieje Apostolskie',
    'Rz'    : 'List do Rzymian',
    '1Kor'  : '1 list do Koryntian',
    '2Kor'  : '2 list do Koryntian',
    'Ga'    : 'List do Galatów',
    'Ef'    : 'List do Efezjan',
    'Flp'   : 'List do Filipian',
    'Kol'   : 'List do Kolosan',
    '1Tes'  : '1 List do Tesaloniczan',
    '2Tes'  : '2 List do Tesaloniczan',
    '1Tm'   : '1 List do Tymoteusza',
    '2Tm'   : '2 List do Tymoteusza',
    'Tt'    : 'List do Tytusa',
    'Flm'   : 'List do Filemona',
    'Hbr'   : 'List do Hebrajczyków',
    'Jk'    : 'List Jakuba',
    '1P'    : '1 List Piotra',
    '2P'    : '2 List Piotra',
    '1J'    : '1 List Jana',
    '2J'    : '2 List Jana',
    '3J'    : '3 List Jana',
    'Jud'   : 'List Judy',
    'Ap'    : 'Apokalipsa'
  },
  // books2: {
  //   'Stary Testament' : 'header',
  //   'Rdz'   : { name: 'Księga Rodzaju', chapters: 50 },
  //   'Wj'    : { name: 'Księga Wyjścia', chapters: 40 },
  //   'Kpl'   : { name: 'Księga Kapłańska', chapters: 27 },
  //   'Lb'    : { name: 'Księga Liczb', chapters: 36 },
  //   'Pwt'   : { name: 'Księga Powtórzonego Prawa', chapters: 34 },
  //   'Joz'   : { name: 'Księga Jozuego', chapters: 24 },
  //   'Sdz'   : { name: 'Księga Sędziów', chapters: 21 },
  //   'Rt'    : { name: 'Księga Rut', chapters: 4 },
  //   '1Sm'   : { name: '1 Księga Samuela', chapters: 31 },
  //   '2Sm'   : { name: '2 Księga Samuela', chapters: 24 },
  //   '1Krl'  : { name: '1 Księga Królewska', chapters: 22 },
  //   '2Krl'  : { name: '2 Księga Królewska', chapters: 25 },
  //   '1Krn'  : { name: '1 Księga Kronik', chapters: 29 },
  //   '2Krn'  : { name: '2 Księga Kronik', chapters: 36 },
  //   'Ezd'   : { name: 'Księga Ezdrasza', chapters: 10 },
  //   'Ne'    : { name: 'Księga Nehemiasza', chapters: 13 },
  //   'Tb'    : { name: 'Księga Tobiasza', chapters: 14 },
  //   'Jdt'   : { name: 'Księga Judyty', chapters: 16 },
  //   'Est'   : { name: 'Księga Estery', chapters: 11 },
  //   '1Mch ' : { name: '1 Księga Machabejska', chapters: 16 },
  //   '2Mch'  : { name: '2 Księga Machabejska', chapters: 15 },
  //   'Job'   : { name: 'Księga Hioba', chapters: 42 },
  //   'Ps'    : { name: 'Księga Psalmów', chapters: 150 },
  //   'Prz'   : { name: 'Księga Przysłów', chapters: 31 },
  //   'Koh'   : { name: 'Księga Koheleta', chapters: 12 },
  //   'PNP'   : { name: 'Pieśń nad pieśniami', chapters: 8 },
  //   'Mdr'   : { name: 'Księga Mądrości', chapters: 19 },
  //   'Syr'   : { name: 'Mądrość Syracha', chapters: 51 },
  //   'Iz'    : { name: 'Księga Izajasza', chapters: 66 },
  //   'Jr'    : { name: 'Księga Jeremiasza', chapters: 52 },
  //   'Lm'    : { name: 'Lamentacje Jeremiasza', chapters: 5 },
  //   'Ba'    : { name: 'Księga Barucha', chapters: 6 },
  //   'Ez'    : { name: 'Księga Ezechiela', chapters: 48 },
  //   'Dn'    : { name: 'Księga Daniela', chapters: 14 },
  //   'Oz'    : { name: 'Księga Ozeasza', chapters: 14 },
  //   'Jl'    : { name: 'Księga Joela', chapters: 4 },
  //   'Am'    : { name: 'Księga Amosa', chapters: 9 },
  //   'Ab'    : { name: 'Księga Abdiasza', chapters: 1 },
  //   'Jon'   : { name: 'Księga Jonasza', chapters: 4 },
  //   'Mi'    : { name: 'Księga Micheasza', chapters: 7 },
  //   'Na'    : { name: 'Księga Nahuma', chapters: 3 },
  //   'Ha'    : { name: 'Księga Habakuka', chapters: 3 },
  //   'So'    : { name: 'Księga Sofoniasza', chapters: 3 },
  //   'Ag'    : { name: 'Księga Aggeusza', chapters: 2 },
  //   'Za'    : { name: 'Księga Zachariasza', chapters: 14 },
  //   'Ml'    : { name: 'Księga Malachiasza', chapters: 3 },
  //   'Nowy Testament' : 'header',
  //   'Mt'    : { name: 'Ewangelia Mateusza', chapters: 28 },
  //   'Mk'    : { name: 'Ewangelia Marka', chapters: 16 },
  //   'Lk'    : { name: 'Ewangelia Łukasza', chapters: 24 },
  //   'Jan'   : { name: 'Ewangelia Jana', chapters: 21 },
  //   'Dz'    : { name: 'Dzieje Apostolskie', chapters: 28 },
  //   'Rz'    : { name: 'List do Rzymian', chapters: 16 },
  //   '1Kor'  : { name: '1 list do Koryntian', chapters: 16 },
  //   '2Kor'  : { name: '2 list do Koryntian', chapters: 13 },
  //   'Ga'    : { name: 'List do Galatów', chapters: 6 },
  //   'Ef'    : { name: 'List do Efezjan', chapters: 6 },
  //   'Flp'   : { name: 'List do Filipian', chapters: 4 },
  //   'Kol'   : { name: 'List do Kolosan', chapters: 4 },
  //   '1Tes'  : { name: '1 List do Tesaloniczan', chapters: 5 },
  //   '2Tes'  : { name: '2 List do Tesaloniczan', chapters: 3 },
  //   '1Tm'   : { name: '1 List do Tymoteusza', chapters: 6 },
  //   '2Tm'   : { name: '2 List do Tymoteusza', chapters: 4 },
  //   'Tt'    : { name: 'List do Tytusa', chapters: 3 },
  //   'Flm'   : { name: 'List do Filemona', chapters: 1 },
  //   'Hbr'   : { name: 'List do Hebrajczyków', chapters: 13 },
  //   'Jk'    : { name: 'List Jakuba', chapters: 5 },
  //   '1P'    : { name: '1 List Piotra', chapters: 5 },
  //   '2P'    : { name: '2 List Piotra', chapters: 3 },
  //   '1J'    : { name: '1 List Jana', chapters: 5 },
  //   '2J'    : { name: '2 List Jana', chapters: 1 },
  //   '3J'    : { name: '3 List Jana', chapters: 1 },
  //   'Jud'   : { name: 'List Judy', chapters: 1 },
  //   'Ap'    : { name: 'Apokalipsa', chapters: 22 },
  // }




// https://www.biblia.info.pl/api/displayVerse.html
// https://www.biblia.info.pl/biblia2000_pomoc.html
}

export default BibleData;
