import bt from '@/bible/content/core/bt';
import bp from '@/bible/content/core/bp';
import bw from '@/bible/content/core/bw';
import br from '@/bible/content/core/br';
import bg from '@/bible/content/core/bg';
import ng from '@/bible/content/core/ng';
import ug from '@/bible/content/core/ug';
import esp from '@/bible/content/core/esp';
import ns from '@/bible/content/core/ns';
import jw from '@/bible/content/core/jw';
import sz from '@/bible/content/core/sz';
import eib from '@/bible/content/core/eib';
import av from '@/bible/content/core/av';
import web from '@/bible/content/core/web';
import ylt from '@/bible/content/core/ylt';

import headings from '@/bible/content/addons/headings'

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
    'bt': bt,
    'bp': bp,
    'bw': bw,
    'br': br,
    'bg': bg,
    'ng': ng,
    'ug': ug,
    'esp': esp,
    'ns': ns,
    'jw': jw,
    'sz': sz,
    'eib': eib,
    'av': av,
    'web': web,
    'ylt': ylt
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
