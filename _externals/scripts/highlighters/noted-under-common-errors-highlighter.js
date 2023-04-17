$('.lined').highlightWithinTextarea({
highlight: [
{
highlight: /\b(federal|congress|senate|president|states|united states|united state|united States|united State|United states|United state|government|secretary|senator|congressman|director|of the in the|in the of the|in intro|in introductory|a the|inthe|ofthe|the in|in the in the|the of|of in|in of|of the of the)\b/g,
className: 'yellow'
},

{
highlight: /\b(\w+)\s+\1\b/g,
className: 'yellow'
},

{
highlight: 'formers',
className: 'yellow'
},

{
highlight: 'former in',
className: 'yellow'
},
{
highlight: 'in and',
className: 'yellow'
},
{
highlight: 'of and',
className: 'yellow'
},
{
highlight: 'of through',
className: 'yellow'
},
{
highlight: 'of designation',
className: 'yellow'
},
{
highlight: 'added and',
className: 'yellow'
},
{
highlight: 'deleted and',
className: 'yellow'
},

{
highlight: '(*)',
className: 'yellow'
},

{
highlight: '(*',
className: 'yellow'
},

{
highlight: '*)',
className: 'yellow'
},
{
highlight: 'provides:"',
className: 'yellow'
},
{
highlight: 'provides:“',
className: 'yellow'
},
{
highlight: ') (',
className: 'yellow'
},

{
highlight: '" (',
className: 'yellow'
},

{
highlight: '“ (',
className: 'yellow'
},

{
highlight: '“‘ (',
className: 'yellow'
},

{
highlight: `"' (`,
className: 'yellow'
},

{
highlight: '  ',
className: 'yellow'
},

{
highlight: '   ',
className: 'yellow'
},

{
highlight: '‘',
className: 'yellow'
},

{
highlight: '’',
className: 'yellow'
},

{
highlight: ';a',
className: 'yellow'
},

{
highlight: ';b',
className: 'yellow'
},

{
highlight: ';c',
className: 'yellow'
},

{
highlight: ';d',
className: 'yellow'
},

{
highlight: ';e',
className: 'yellow'
},

{
highlight: ';f',
className: 'yellow'
},

{
highlight: ';g',
className: 'yellow'
},

{
highlight: ';h',
className: 'yellow'
},

{
highlight: ';i',
className: 'yellow'
},

{
highlight: ';j',
className: 'yellow'
},

{
highlight: ';k',
className: 'yellow'
},

{
highlight: ';l',
className: 'yellow'
},

{
highlight: ';m',
className: 'yellow'
},

{
highlight: ';n',
className: 'yellow'
},

{
highlight: ';o',
className: 'yellow'
},

{
highlight: ';p',
className: 'yellow'
},

{
highlight: ';q',
className: 'yellow'
},

{
highlight: ';r',
className: 'yellow'
},

{
highlight: ';s',
className: 'yellow'
},

{
highlight: ';t',
className: 'yellow'
},

{
highlight: ';u',
className: 'yellow'
},

{
highlight: ';v',
className: 'yellow'
},

{
highlight: ';w',
className: 'yellow'
},

{
highlight: ';x',
className: 'yellow'
},

{
highlight: ';y',
className: 'yellow'
},

{
highlight: ';z',
className: 'yellow'
},

{
highlight: ';(',
className: 'yellow'
},

{
highlight: ';)',
className: 'yellow'
},

{
highlight: ';*',
className: 'yellow'
},

{
highlight: ';&',
className: 'yellow'
},

{
highlight: ';$',
className: 'yellow'
},

{
highlight: ';#',
className: 'yellow'
},

{
highlight: ';@',
className: 'yellow'
},

{
highlight: ';!',
className: 'yellow'
},

{
highlight: ';%',
className: 'yellow'
},
{
highlight: ',a',
className: 'yellow'
},
{
highlight: ',b',
className: 'yellow'
},
{
highlight: ',c',
className: 'yellow'
},
{
highlight: ',d',
className: 'yellow'
},
{
highlight: ',e',
className: 'yellow'
},
{
highlight: ',f',
className: 'yellow'
},
{
highlight: ',g',
className: 'yellow'
},
{
highlight: ',h',
className: 'yellow'
},
{
highlight: ',i',
className: 'yellow'
},
{
highlight: ',j',
className: 'yellow'
},
{
highlight: ',k',
className: 'yellow'
},
{
highlight: ',l',
className: 'yellow'
},
{
highlight: ',m',
className: 'yellow'
},
{
highlight: ',n',
className: 'yellow'
},
{
highlight: ',o',
className: 'yellow'
},
{
highlight: ',p',
className: 'yellow'
},
{
highlight: ',q',
className: 'yellow'
},
{
highlight: ',r',
className: 'yellow'
},
{
highlight: ',s',
className: 'yellow'
},
{
highlight: ',t',
className: 'yellow'
},
{
highlight: ',u',
className: 'yellow'
},
{
highlight: ',v',
className: 'yellow'
},
{
highlight: ',w',
className: 'yellow'
},
{
highlight: ',x',
className: 'yellow'
},
{
highlight: ',y',
className: 'yellow'
},
{
highlight: ',z',
className: 'yellow'
},

{
highlight: ',!',
className: 'yellow'
},
{
highlight: ',@',
className: 'yellow'
},
{
highlight: ',#',
className: 'yellow'
},
{
highlight: ',$',
className: 'yellow'
},
{
highlight: ',%',
className: 'yellow'
},
{
highlight: ',^',
className: 'yellow'
},
{
highlight: ',&',
className: 'yellow'
},
{
highlight: ',*',
className: 'yellow'
},
{
highlight: ',(',
className: 'yellow'
},
{
highlight: ',)',
className: 'yellow'
},
{
highlight: ',-',
className: 'yellow'
},
{
highlight: ',.',
className: 'yellow'
},
{
highlight: ',?',
className: 'yellow'
},
{
highlight: ',;',
className: 'yellow'
},
{
highlight: ',:',
className: 'yellow'
},


{
highlight: ';1',
className: 'yellow'
},

{
highlight: ';2',
className: 'yellow'
},

{
highlight: ';3',
className: 'yellow'
},

{
highlight: ';4',
className: 'yellow'
},

{
highlight: ';5',
className: 'yellow'
},

{
highlight: ';6',
className: 'yellow'
},

{
highlight: ';7',
className: 'yellow'
},

{
highlight: ';8',
className: 'yellow'
},

{
highlight: ';9',
className: 'yellow'
},

{
highlight: ';0',
className: 'yellow'
},

{
highlight: 'a“',
className: 'yellow'
},

{
highlight: 'b“',
className: 'yellow'
},

{
highlight: 'c“',
className: 'yellow'
},

{
highlight: '',
className: 'yellow'
},

{
highlight: 'd“',
className: 'yellow'
},

{
highlight: 'e“',
className: 'yellow'
},

{
highlight: 'f“',
className: 'yellow'
},

{
highlight: 'g“',
className: 'yellow'
},

{
highlight: 'h“',
className: 'yellow'
},

{
highlight: 'i“',
className: 'yellow'
},

{
highlight: 'j“',
className: 'yellow'
},

{
highlight: 'k“',
className: 'yellow'
},

{
highlight: 'l“',
className: 'yellow'
},

{
highlight: 'm“',
className: 'yellow'
},

{
highlight: 'n“',
className: 'yellow'
},

{
highlight: 'o“',
className: 'yellow'
},

{
highlight: 'p“',
className: 'yellow'
},

{
highlight: 'q“',
className: 'yellow'
},

{
highlight: 'r“',
className: 'yellow'
},

{
highlight: 's“',
className: 'yellow'
},

{
highlight: 't“',
className: 'yellow'
},

{
highlight: 'u“',
className: 'yellow'
},

{
highlight: 'v“',
className: 'yellow'
},

{
highlight: 'w“',
className: 'yellow'
},

{
highlight: 'x“',
className: 'yellow'
},

{
highlight: 'y“',
className: 'yellow'
},

{
highlight: 'z“',
className: 'yellow'
},

{
highlight: '“ -',
className: 'yellow'
},

{
highlight: '-“',
className: 'yellow'
},

{
highlight: '1“',
className: 'yellow'
},

{
highlight: '2“',
className: 'yellow'
},

{
highlight: '3“',
className: 'yellow'
},

{
highlight: '4“',
className: 'yellow'
},

{
highlight: '5“',
className: 'yellow'
},

{
highlight: '6“',
className: 'yellow'
},

{
highlight: '7“',
className: 'yellow'
},

{
highlight: '8“',
className: 'yellow'
},

{
highlight: '9“',
className: 'yellow'
},

{
highlight: '0“',
className: 'yellow'
},

{
highlight: ')“',
className: 'yellow'
},

{
highlight: '(“',
className: 'yellow'
},

{
highlight: '*“',
className: 'yellow'
},

{
highlight: '&“',
className: 'yellow'
},

{
highlight: '^“',
className: 'yellow'
},

{
highlight: '%“',
className: 'yellow'
},

{
highlight: '$“',
className: 'yellow'
},

{
highlight: '#“',
className: 'yellow'
},

{
highlight: '@“',
className: 'yellow'
},

{
highlight: '”a',
className: 'yellow'
},

{
highlight: '”b',
className: 'yellow'
},

{
highlight: '”c',
className: 'yellow'
},

{
highlight: '”d',
className: 'yellow'
},

{
highlight: '”e',
className: 'yellow'
},

{
highlight: '”f',
className: 'yellow'
},

{
highlight: '”g',
className: 'yellow'
},

{
highlight: '”h',
className: 'yellow'
},

{
highlight: '”i',
className: 'yellow'
},

{
highlight: '”j',
className: 'yellow'
},

{
highlight: '”k',
className: 'yellow'
},

{
highlight: '”l',
className: 'yellow'
},

{
highlight: '”m',
className: 'yellow'
},

{
highlight: '”n',
className: 'yellow'
},

{
highlight: '”o',
className: 'yellow'
},

{
highlight: '”p',
className: 'yellow'
},

{
highlight: '”q',
className: 'yellow'
},

{
highlight: '”r',
className: 'yellow'
},

{
highlight: '”s',
className: 'yellow'
},

{
highlight: '”t',
className: 'yellow'
},

{
highlight: '”u',
className: 'yellow'
},

{
highlight: '”v',
className: 'yellow'
},

{
highlight: '”w',
className: 'yellow'
},

{
highlight: '”x',
className: 'yellow'
},

{
highlight: '”y',
className: 'yellow'
},

{
highlight: '”z',
className: 'yellow'
},

{
highlight: '”1',
className: 'yellow'
},

{
highlight: '”2',
className: 'yellow'
},

{
highlight: '”3',
className: 'yellow'
},

{
highlight: '”4',
className: 'yellow'
},

{
highlight: '”5',
className: 'yellow'
},

{
highlight: '”6',
className: 'yellow'
},

{
highlight: '”7',
className: 'yellow'
},

{
highlight: '”8',
className: 'yellow'
},

{
highlight: '”9',
className: 'yellow'
},

{
highlight: '”0',
className: 'yellow'
},

{
highlight: '”!',
className: 'yellow'
},

{
highlight: '”@',
className: 'yellow'
},

{
highlight: '”#',
className: 'yellow'
},

{
highlight: '”$',
className: 'yellow'
},

{
highlight: '”%',
className: 'yellow'
},

{
highlight: '”&',
className: 'yellow'
},

{
highlight: '”*',
className: 'yellow'
},

{
highlight: '”(',
className: 'yellow'
},
{
highlight: '”-',
className: 'yellow'
},

{
highlight: '- ”',
className: 'yellow'
},

{
highlight: '”+',
className: 'yellow'
},

{
highlight: '“”',
className: 'yellow'
},

{
highlight: '“‘',
className: 'yellow'
},

{
highlight: '’”',
className: 'yellow'
},

{
highlight: '<p> a',
className: 'yellow'
},

{
highlight: '<p> b',
className: 'yellow'
},

{
highlight: '<p> c',
className: 'yellow'
},

{
highlight: '<p> d',
className: 'yellow'
},

{
highlight: '<p> e',
className: 'yellow'
},

{
highlight: '<p> f',
className: 'yellow'
},

{
highlight: '<p> g',
className: 'yellow'
},

{
highlight: '<p> h',
className: 'yellow'
},

{
highlight: '<p> i',
className: 'yellow'
},

{
highlight: '<p> j',
className: 'yellow'
},

{
highlight: '<p> k',
className: 'yellow'
},

{
highlight: '<p> l',
className: 'yellow'
},

{
highlight: '<p> m',
className: 'yellow'
},

{
highlight: '<p> n',
className: 'yellow'
},

{
highlight: '<p> o',
className: 'yellow'
},

{
highlight: '<p> p',
className: 'yellow'
},

{
highlight: '<p> q',
className: 'yellow'
},

{
highlight: '<p> r',
className: 'yellow'
},

{
highlight: '<p> s',
className: 'yellow'
},

{
highlight: '<p> t',
className: 'yellow'
},

{
highlight: '<p> u',
className: 'yellow'
},

{
highlight: '<p> v',
className: 'yellow'
},

{
highlight: '<p> w',
className: 'yellow'
},

{
highlight: '<p> x',
className: 'yellow'
},

{
highlight: '<p> y',
className: 'yellow'
},

{
highlight: '<p> z',
className: 'yellow'
},

{
highlight: '<p> 1',
className: 'yellow'
},

{
highlight: '<p> 2',
className: 'yellow'
},

{
highlight: '<p> 3',
className: 'yellow'
},

{
highlight: '<p> 4',
className: 'yellow'
},

{
highlight: '<p> 5',
className: 'yellow'
},

{
highlight: '<p> 6',
className: 'yellow'
},

{
highlight: '<p> 7',
className: 'yellow'
},

{
highlight: '<p> 8',
className: 'yellow'
},

{
highlight: '<p> 9',
className: 'yellow'
},

{
highlight: '<p> 0',
className: 'yellow'
},

{
highlight: 'a </p>',
className: 'yellow'
},

{
highlight: 'b </p>',
className: 'yellow'
},

{
highlight: 'c </p>',
className: 'yellow'
},

{
highlight: 'd </p>',
className: 'yellow'
},

{
highlight: 'e </p>',
className: 'yellow'
},

{
highlight: 'f </p>',
className: 'yellow'
},

{
highlight: 'g </p>',
className: 'yellow'
},

{
highlight: 'h </p>',
className: 'yellow'
},

{
highlight: 'i </p>',
className: 'yellow'
},

{
highlight: 'j </p>',
className: 'yellow'
},

{
highlight: 'k </p>',
className: 'yellow'
},

{
highlight: 'l </p>',
className: 'yellow'
},

{
highlight: 'm </p>',
className: 'yellow'
},

{
highlight: 'n </p>',
className: 'yellow'
},

{
highlight: 'o </p>',
className: 'yellow'
},

{
highlight: 'p </p>',
className: 'yellow'
},

{
highlight: 'q </p>',
className: 'yellow'
},

{
highlight: 'r </p>',
className: 'yellow'
},

{
highlight: 's </p>',
className: 'yellow'
},

{
highlight: 't </p>',
className: 'yellow'
},

{
highlight: 'u </p>',
className: 'yellow'
},

{
highlight: 'v </p>',
className: 'yellow'
},

{
highlight: 'w </p>',
className: 'yellow'
},

{
highlight: 'x </p>',
className: 'yellow'
},

{
highlight: 'y </p>',
className: 'yellow'
},

{
highlight: 'z </p>',
className: 'yellow'
},

{
highlight: '1 </p>',
className: 'yellow'
},

{
highlight: '2 </p>',
className: 'yellow'
},

{
highlight: '3 </p>',
className: 'yellow'
},

{
highlight: '4 </p>',
className: 'yellow'
},

{
highlight: '5 </p>',
className: 'yellow'
},

{
highlight: '6 </p>',
className: 'yellow'
},

{
highlight: '7 </p>',
className: 'yellow'
},

{
highlight: '8 </p>',
className: 'yellow'
},

{
highlight: '9 </p>',
className: 'yellow'
},

{
highlight: '0 </p>',
className: 'yellow'
},

{
highlight: 'in(',
className: 'yellow'
},

{
highlight: 'of(',
className: 'yellow'
},

{
highlight: 'the(',
className: 'yellow'
},

{
highlight: ')in',
className: 'yellow'
},

{
highlight: ')of',
className: 'yellow'
},

{
highlight: ')the',
className: 'yellow'
},

{
highlight: 'a(',
className: 'yellow'
},

{
highlight: 'b(',
className: 'yellow'
},

{
highlight: 'c(',
className: 'yellow'
},

{
highlight: 'd(',
className: 'yellow'
},

{
highlight: 'e(',
className: 'yellow'
},

{
highlight: 'f(',
className: 'yellow'
},

{
highlight: 'g(',
className: 'yellow'
},

{
highlight: 'h(',
className: 'yellow'
},

{
highlight: 'i(',
className: 'yellow'
},

{
highlight: 'j(',
className: 'yellow'
},

{
highlight: 'k(',
className: 'yellow'
},

{
highlight: 'l(',
className: 'yellow'
},

{
highlight: 'm(',
className: 'yellow'
},

{
highlight: 'n(',
className: 'yellow'
},

{
highlight: 'o(',
className: 'yellow'
},

{
highlight: 'p(',
className: 'yellow'
},

{
highlight: 'q(',
className: 'yellow'
},

{
highlight: 'r(',
className: 'yellow'
},

{
highlight: 's(',
className: 'yellow'
},

{
highlight: 't(',
className: 'yellow'
},

{
highlight: 'u(',
className: 'yellow'
},

{
highlight: 'v(',
className: 'yellow'
},

{
highlight: 'w(',
className: 'yellow'
},

{
highlight: 'x(',
className: 'yellow'
},

{
highlight: 'y(',
className: 'yellow'
},

{
highlight: 'z(',
className: 'yellow'
},



{
highlight: ')a',
className: 'yellow'
},

{
highlight: ')b',
className: 'yellow'
},

{
highlight: ')c',
className: 'yellow'
},

{
highlight: ')d',
className: 'yellow'
},

{
highlight: ')e',
className: 'yellow'
},

{
highlight: ')f',
className: 'yellow'
},

{
highlight: ')g',
className: 'yellow'
},

{
highlight: ')h',
className: 'yellow'
},

{
highlight: ')i',
className: 'yellow'
},

{
highlight: ')j',
className: 'yellow'
},

{
highlight: ')k',
className: 'yellow'
},

{
highlight: ')l',
className: 'yellow'
},

{
highlight: ')m',
className: 'yellow'
},

{
highlight: ')n',
className: 'yellow'
},

{
highlight: ')o',
className: 'yellow'
},

{
highlight: ')p',
className: 'yellow'
},

{
highlight: ')q',
className: 'yellow'
},

{
highlight: ')r',
className: 'yellow'
},

{
highlight: ')s',
className: 'yellow'
},

{
highlight: ')t',
className: 'yellow'
},

{
highlight: ')u',
className: 'yellow'
},

{
highlight: ')v',
className: 'yellow'
},

{
highlight: ')w',
className: 'yellow'
},

{
highlight: ')x',
className: 'yellow'
},

{
highlight: ')y',
className: 'yellow'
},

{
highlight: ')z',
className: 'yellow'
},

{
highlight: ')1',
className: 'yellow'
},

{
highlight: ')2',
className: 'yellow'
},

{
highlight: ')3',
className: 'yellow'
},

{
highlight: ')4',
className: 'yellow'
},

{
highlight: ')5',
className: 'yellow'
},

{
highlight: ')6',
className: 'yellow'
},

{
highlight: ')7',
className: 'yellow'
},

{
highlight: ')8',
className: 'yellow'
},

{
highlight: ')9',
className: 'yellow'
},

{
highlight: ')0',
className: 'yellow'
},

{
highlight: ',,',
className: 'yellow'
},

{
highlight: '..',
className: 'yellow'
},

{
highlight: ';;',
className: 'yellow'
},

{
highlight: '::',
className: 'yellow'
},

{
highlight: '‘‘',
className: 'yellow'
},

{
highlight: '’’',
className: 'yellow'
},

{
highlight: '““',
className: 'yellow'
},

{
highlight: '””',
className: 'yellow'
},

{
highlight: ' ’',
className: 'yellow'
},

{
highlight: '‘ ',
className: 'yellow'
},

{
highlight: '—',
className: 'yellow'
},

{
highlight: '–',
className: 'yellow'
},

{
highlight: `''''`,
className: 'yellow'
},

{
highlight: '‘’‘’',
className: 'yellow'
},

{
highlight: '‘’ ‘’',
className: 'yellow'
},

{
highlight: `'' ''`,
className: 'yellow'
},

{
highlight: `'`,
className: 'yellow'
},

{
highlight: '""""',
className: 'yellow'
},

{
highlight: '"',
className: 'yellow'
},

{
highlight: '"" ""',
className: 'yellow'
},

{
highlight: '“”””',
className: 'yellow'
},

{
highlight: '“” ””',
className: 'yellow'
},

{
highlight: '( a )',
className: 'yellow'
},

{
highlight: '( b )',
className: 'yellow'
},

{
highlight: '( c )',
className: 'yellow'
},

{
highlight: '( d )',
className: 'yellow'
},

{
highlight: '( e )',
className: 'yellow'
},

{
highlight: '( f )',
className: 'yellow'
},

{
highlight: '( g )',
className: 'yellow'
},

{
highlight: '( h )',
className: 'yellow'
},

{
highlight: '( i )',
className: 'yellow'
},

{
highlight: '( j )',
className: 'yellow'
},

{
highlight: '( k )',
className: 'yellow'
},

{
highlight: '( l )',
className: 'yellow'
},

{
highlight: '( m )',
className: 'yellow'
},

{
highlight: '( n )',
className: 'yellow'
},

{
highlight: '( o )',
className: 'yellow'
},

{
highlight: '( p )',
className: 'yellow'
},

{
highlight: '( q )',
className: 'yellow'
},

{
highlight: '( r )',
className: 'yellow'
},

{
highlight: '( s )',
className: 'yellow'
},

{
highlight: '( t )',
className: 'yellow'
},

{
highlight: '( u )',
className: 'yellow'
},

{
highlight: '( v )',
className: 'yellow'
},

{
highlight: '( w )',
className: 'yellow'
},

{
highlight: '( x )',
className: 'yellow'
},

{
highlight: '( y )',
className: 'yellow'
},

{
highlight: '( z )',
className: 'yellow'
},

{
highlight: '( 1 )',
className: 'yellow'
},

{
highlight: '( 2 )',
className: 'yellow'
},

{
highlight: '( 3 )',
className: 'yellow'
},

{
highlight: '( 4 )',
className: 'yellow'
},

{
highlight: '( 5 )',
className: 'yellow'
},

{
highlight: '( 6 )',
className: 'yellow'
},

{
highlight: '( 7 )',
className: 'yellow'
},

{
highlight: '( 8 )',
className: 'yellow'
},

{
highlight: '( 9 )',
className: 'yellow'
},

{
highlight: '( 10 )',
className: 'yellow'
},

{
highlight: '( a',
className: 'yellow'
},

{
highlight: '( b',
className: 'yellow'
},

{
highlight: '( c',
className: 'yellow'
},

{
highlight: '( d',
className: 'yellow'
},

{
highlight: '( e',
className: 'yellow'
},

{
highlight: '( f',
className: 'yellow'
},

{
highlight: '( g',
className: 'yellow'
},

{
highlight: '( h',
className: 'yellow'
},

{
highlight: '( i',
className: 'yellow'
},

{
highlight: '( j',
className: 'yellow'
},

{
highlight: '( k',
className: 'yellow'
},

{
highlight: '( l',
className: 'yellow'
},

{
highlight: '( m',
className: 'yellow'
},

{
highlight: '( n',
className: 'yellow'
},

{
highlight: '( o',
className: 'yellow'
},

{
highlight: '( p',
className: 'yellow'
},

{
highlight: '( q',
className: 'yellow'
},

{
highlight: '( r',
className: 'yellow'
},

{
highlight: '( s',
className: 'yellow'
},

{
highlight: '( t',
className: 'yellow'
},

{
highlight: '( u',
className: 'yellow'
},

{
highlight: '( v',
className: 'yellow'
},

{
highlight: '( w',
className: 'yellow'
},

{
highlight: '( x',
className: 'yellow'
},

{
highlight: '( y',
className: 'yellow'
},

{
highlight: '( z',
className: 'yellow'
},

{
highlight: '( 1',
className: 'yellow'
},

{
highlight: '( 2',
className: 'yellow'
},

{
highlight: '( 3',
className: 'yellow'
},

{
highlight: '( 4',
className: 'yellow'
},

{
highlight: '( 5',
className: 'yellow'
},

{
highlight: '( 6',
className: 'yellow'
},

{
highlight: '( 7',
className: 'yellow'
},

{
highlight: '( 8',
className: 'yellow'
},

{
highlight: '( 9',
className: 'yellow'
},

{
highlight: '( 10',
className: 'yellow'
},

{
highlight: 'a )',
className: 'yellow'
},

{
highlight: 'b )',
className: 'yellow'
},

{
highlight: 'c )',
className: 'yellow'
},

{
highlight: 'd )',
className: 'yellow'
},

{
highlight: 'e )',
className: 'yellow'
},

{
highlight: 'f )',
className: 'yellow'
},

{
highlight: 'g )',
className: 'yellow'
},

{
highlight: 'h )',
className: 'yellow'
},

{
highlight: 'i )',
className: 'yellow'
},

{
highlight: 'j )',
className: 'yellow'
},

{
highlight: 'k )',
className: 'yellow'
},

{
highlight: 'l )',
className: 'yellow'
},

{
highlight: 'm )',
className: 'yellow'
},

{
highlight: 'n )',
className: 'yellow'
},

{
highlight: 'o )',
className: 'yellow'
},

{
highlight: 'p )',
className: 'yellow'
},

{
highlight: 'q )',
className: 'yellow'
},

{
highlight: 'r )',
className: 'yellow'
},

{
highlight: 's )',
className: 'yellow'
},

{
highlight: 't )',
className: 'yellow'
},

{
highlight: 'u )',
className: 'yellow'
},

{
highlight: 'v )',
className: 'yellow'
},

{
highlight: 'w )',
className: 'yellow'
},

{
highlight: 'x )',
className: 'yellow'
},

{
highlight: 'y )',
className: 'yellow'
},

{
highlight: 'z )',
className: 'yellow'
},

{
highlight: '1 )',
className: 'yellow'
},

{
highlight: '2 )',
className: 'yellow'
},

{
highlight: '3 )',
className: 'yellow'
},

{
highlight: '4 )',
className: 'yellow'
},

{
highlight: '5 )',
className: 'yellow'
},

{
highlight: '6 )',
className: 'yellow'
},

{
highlight: '( 7 )',
className: 'yellow'
},

{
highlight: '8 )',
className: 'yellow'
},

{
highlight: '9 )',
className: 'yellow'
},

{
highlight: '10 )',
className: 'yellow'
},

{
highlight: '<p> (',
className: 'yellow'
},

{
highlight: '<p> “',
className: 'yellow'
},

{
highlight: '<p> ‘',
className: 'yellow'
},

{
highlight: 'Div ,',
className: 'yellow'
},
{
highlight: 'Title ,',
className: 'yellow'
},
{
highlight: 'Subtitle ,',
className: 'yellow'
},
{
highlight: 'Ch ,',
className: 'yellow'
},
{
highlight: 'Subch ,',
className: 'yellow'
},
{
highlight: '§ ,',
className: 'yellow'
},
{
highlight: 'which formerly read a',
className: 'yellow'
},
{
highlight: 'which formerly read b',
className: 'yellow'
},
{
highlight: 'which formerly read c',
className: 'yellow'
},
{
highlight: 'which formerly read d',
className: 'yellow'
},
{
highlight: 'which formerly read e',
className: 'yellow'
},
{
highlight: 'which formerly read f',
className: 'yellow'
},
{
highlight: 'which formerly read g',
className: 'yellow'
},
{
highlight: 'which formerly read h',
className: 'yellow'
},
{
highlight: 'which formerly read i',
className: 'yellow'
},
{
highlight: 'which formerly read j',
className: 'yellow'
},
{
highlight: 'which formerly read k',
className: 'yellow'
},
{
highlight: 'which formerly read l',
className: 'yellow'
},
{
highlight: 'which formerly read m',
className: 'yellow'
},
{
highlight: 'which formerly read n',
className: 'yellow'
},
{
highlight: 'which formerly read o',
className: 'yellow'
},
{
highlight: 'which formerly read p',
className: 'yellow'
},
{
highlight: 'which formerly read q',
className: 'yellow'
},
{
highlight: 'which formerly read r',
className: 'yellow'
},
{
highlight: 'which formerly read s',
className: 'yellow'
},
{
highlight: 'which formerly read t',
className: 'yellow'
},
{
highlight: 'which formerly read u',
className: 'yellow'
},
{
highlight: 'which formerly read v',
className: 'yellow'
},
{
highlight: 'which formerly read w',
className: 'yellow'
},
{
highlight: 'which formerly read x',
className: 'yellow'
},
{
highlight: 'which formerly read y',
className: 'yellow'
},
{
highlight: 'which formerly read z',
className: 'yellow'
},
{
highlight: 'which formerly read 1',
className: 'yellow'
},
{
highlight: 'which formerly read 2',
className: 'yellow'
},
{
highlight: 'which formerly read 3',
className: 'yellow'
},
{
highlight: 'which formerly read 4',
className: 'yellow'
},
{
highlight: 'which formerly read 5',
className: 'yellow'
},
{
highlight: 'which formerly read 6',
className: 'yellow'
},
{
highlight: 'which formerly read 7',
className: 'yellow'
},
{
highlight: 'which formerly read 8',
className: 'yellow'
},
{
highlight: 'which formerly read 9',
className: 'yellow'
},
{
highlight: 'which formerly read 0',
className: 'yellow'
},
{
highlight: 'which read a',
className: 'yellow'
},
{
highlight: 'which read b',
className: 'yellow'
},
{
highlight: 'which read c',
className: 'yellow'
},
{
highlight: 'which read d',
className: 'yellow'
},
{
highlight: 'which read e',
className: 'yellow'
},
{
highlight: 'which read f',
className: 'yellow'
},
{
highlight: 'which read g',
className: 'yellow'
},
{
highlight: 'which read h',
className: 'yellow'
},
{
highlight: 'which read i',
className: 'yellow'
},
{
highlight: 'which read j',
className: 'yellow'
},
{
highlight: 'which read k',
className: 'yellow'
},
{
highlight: 'which read l',
className: 'yellow'
},
{
highlight: 'which read m',
className: 'yellow'
},
{
highlight: 'which read n',
className: 'yellow'
},
{
highlight: 'which read o',
className: 'yellow'
},
{
highlight: 'which read p',
className: 'yellow'
},
{
highlight: 'which read q',
className: 'yellow'
},
{
highlight: 'which read r',
className: 'yellow'
},
{
highlight: 'which read s',
className: 'yellow'
},
{
highlight: 'which read t',
className: 'yellow'
},
{
highlight: 'which read u',
className: 'yellow'
},
{
highlight: 'which read v',
className: 'yellow'
},
{
highlight: 'which read w',
className: 'yellow'
},
{
highlight: 'which read x',
className: 'yellow'
},
{
highlight: 'which read y',
className: 'yellow'
},
{
highlight: 'which read z',
className: 'yellow'
},
{
highlight: 'which read 1',
className: 'yellow'
},
{
highlight: 'which read 2',
className: 'yellow'
},
{
highlight: 'which read 3',
className: 'yellow'
},
{
highlight: 'which read 4',
className: 'yellow'
},
{
highlight: 'which read 5',
className: 'yellow'
},
{
highlight: 'which read 6',
className: 'yellow'
},
{
highlight: 'which read 7',
className: 'yellow'
},
{
highlight: 'which read 8',
className: 'yellow'
},
{
highlight: 'which read 9',
className: 'yellow'
},
{
highlight: 'which read 0',
className: 'yellow'
},
{
highlight: '(a)(a)',
className: 'yellow'
},
{
highlight: '(b)(b)',
className: 'yellow'
},
{
highlight: '(c)(c)',
className: 'yellow'
},
{
highlight: '(d)(d)',
className: 'yellow'
},
{
highlight: '(e)(e)',
className: 'yellow'
},
{
highlight: '(f)(f)',
className: 'yellow'
},
{
highlight: '(g)(g)',
className: 'yellow'
},
{
highlight: '(h)(h)',
className: 'yellow'
},
{
highlight: '(i)(i)',
className: 'yellow'
},
{
highlight: '(j)(j)',
className: 'yellow'
},
{
highlight: '(k)(k)',
className: 'yellow'
},
{
highlight: '(l)(l)',
className: 'yellow'
},
{
highlight: '(m)(m)',
className: 'yellow'
},
{
highlight: '(n)(n)',
className: 'yellow'
},
{
highlight: '(o)(o)',
className: 'yellow'
},
{
highlight: '(p)(p)',
className: 'yellow'
},
{
highlight: '(q)(q)',
className: 'yellow'
},
{
highlight: '(r)(r)',
className: 'yellow'
},
{
highlight: '(s)(s)',
className: 'yellow'
},
{
highlight: '(t)(t)',
className: 'yellow'
},
{
highlight: '(u)(u)',
className: 'yellow'
},
{
highlight: '(v)(v)',
className: 'yellow'
},
{
highlight: '(w)(w)',
className: 'yellow'
},
{
highlight: '(x)(x)',
className: 'yellow'
},
{
highlight: '(y)(y)',
className: 'yellow'
},
{
highlight: '(z)(z)',
className: 'yellow'
},
{
highlight: '(1)(1)',
className: 'yellow'
},
{
highlight: '(2)(2)',
className: 'yellow'
},
{
highlight: '(3)(3)',
className: 'yellow'
},
{
highlight: '(4)(4)',
className: 'yellow'
},
{
highlight: '(5)(5)',
className: 'yellow'
},
{
highlight: '(6)(6)',
className: 'yellow'
},
{
highlight: '(7)(7)',
className: 'yellow'
},
{
highlight: '(8)(8)',
className: 'yellow'
},
{
highlight: '(9)(9)',
className: 'yellow'
},
{
highlight: '(0)(0)',
className: 'yellow'
},
{
highlight: '()()',
className: 'yellow'
},
{
highlight: 'USCS1',
className: 'yellow'
},
{
highlight: 'USCS2',
className: 'yellow'
},
{
highlight: 'USCS3',
className: 'yellow'
},
{
highlight: 'USCS4',
className: 'yellow'
},
{
highlight: 'USCS5',
className: 'yellow'
},
{
highlight: 'USCS6',
className: 'yellow'
},
{
highlight: 'USCS7',
className: 'yellow'
},
{
highlight: 'USCS8',
className: 'yellow'
},
{
highlight: 'USCS9',
className: 'yellow'
},
{
highlight: 'USCS0',
className: 'yellow'
},
{
highlight: 'USCS 1',
className: 'yellow'
},
{
highlight: 'USCS 2',
className: 'yellow'
},
{
highlight: 'USCS 3',
className: 'yellow'
},
{
highlight: 'USCS 4',
className: 'yellow'
},
{
highlight: 'USCS 5',
className: 'yellow'
},
{
highlight: 'USCS 6',
className: 'yellow'
},
{
highlight: 'USCS 7',
className: 'yellow'
},
{
highlight: 'USCS 8',
className: 'yellow'
},
{
highlight: 'USCS 9',
className: 'yellow'
},
{
highlight: 'USCS 0',
className: 'yellow'
}

]
});