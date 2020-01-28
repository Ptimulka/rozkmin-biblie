const bt = () => import('@/assets/bible/translations/bt.json');
const bp = () => import('@/assets/bible/translations/bp.json');
const bw = () => import('@/assets/bible/translations/bw.json');
const br = () => import('@/assets/bible/translations/br.json');
const bg = () => import('@/assets/bible/translations/bg.json');
const ng = () => import('@/assets/bible/translations/ng.json');
const ug = () => import('@/assets/bible/translations/ug.json');
const esp = () => import('@/assets/bible/translations/esp.json');
const ns = () => import('@/assets/bible/translations/ns.json');
const jw = () => import('@/assets/bible/translations/jw.json');
const sz = () => import('@/assets/bible/translations/sz.json');
const eib = () => import('@/assets/bible/translations/eib.json');
const av = () => import('@/assets/bible/translations/av.json');
const web = () => import('@/assets/bible/translations/web.json');
const ylt = () => import('@/assets/bible/translations/ylt.json');

import headings from '@/bible/content/addons/headings'

var BibleData = {
  init: function() {
    bt().then(x => this.allBibleData['bt'] = x);
    bp().then(x => this.allBibleData['bp'] = x);
    bw().then(x => this.allBibleData['bw'] = x);
    br().then(x => this.allBibleData['br'] = x);
    bg().then(x => this.allBibleData['bg'] = x);
    ng().then(x => this.allBibleData['ng'] = x);
    ug().then(x => this.allBibleData['ug'] = x);
    esp().then(x => this.allBibleData['esp'] = x);
    ns().then(x => this.allBibleData['ns'] = x);
    jw().then(x => this.allBibleData['jw'] = x);
    sz().then(x => this.allBibleData['sz'] = x);
    eib().then(x => this.allBibleData['eib'] = x);
    av().then(x => this.allBibleData['av'] = x);
    web().then(x => this.allBibleData['web'] = x);
    ylt().then(x => this.allBibleData['ylt'] = x);
  },
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
    // 'Biblia Grecka' : 'header',
    // 'Septuaginta'                   : 'gr',
    // 'Biblia po łacinie' : 'header',
    // 'Łacińska Vulgata'              : 'vul',
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
    'bt': null,
    'bp': null,
    'bw': null,
    'br': null,
    'bg': null,
    'ng': null,
    'ug': null,
    'esp': null,
    'ns': null,
    'jw': null,
    'sz': null,
    'eib': null,
    'av': null,
    'web': null,
    'ylt': null
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
  headings: headings,
}

export default BibleData;
