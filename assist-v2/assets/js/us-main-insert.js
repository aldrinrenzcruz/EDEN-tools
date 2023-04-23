const mapObj = {

  '(*)': '(*)', '‘': '‘', '’': '’', '“': '“', '”': '”', '“”': ' “”', '‘’': '‘’', '.': '.', ',': ',', ':': ':', ';': ';', '–': '–', '—': '—', '§': '§', '§§': '§§', '_': ' ', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '-': '-', '+': '+', '=': '=', '`': '`', '/': '/', '[': '[', ']': ']', '{': '{', '}': '}', '>': '>', '<': '<', '?': '?', '...': '...', '[]': '[]', '{}': '{}', '()': '()', '(.)': '(.)', '[{}]': '[{}]',

  'emphasisbold': '<emphasis style="bold"></emphasis>',
  'emphasisbolditalic': '<emphasis style="boldItalic"></emphasis>',
  'emphasisitalic': '<emphasis style="italic"></emphasis>',
  'emphasisunderline': '<emphasis style="underline"></emphasis>',

  'usintro': 'The 2022 amendment by P.L. YYY-YYY',

  'ptag': '<p></p>',
  'annotationtag': 'placehoder',

  'throughout': ' throughout',
  'throughoutthesection': ' throughout the section',
  'twice': ' twice',
  'threetimes': ' three times',
  'fourtimes': ' four times',
  'intheintroductorylanguage': ' introductory language',
  'intheconcludinglanguage': ' concluding matter',

  'sentence': ' sentence',
  'newsentences': ' sentences',
  'paragraph': ' paragraph',
  'newparagraphs': ' paragraphs',
  '“”**': ' “”',

  'newfirst': ' first',
  'newsecond': ' second',
  'newthird': ' third',
  'newfourth': ' fourth',
  'newlast': ' last',

  'atthebeginning': ' at the beginning',
  'attheend': ' at the end',
  'addedthe(*)designation': ' added the (*) designation',
  'designation': ' designation',
  'added“”': ' added “”',

  'through': ' through',
  'former': ' former',
  'substituted“”for“”': ' substituted “” for “”',
  '“”for“”': ' “” for “”',
  'deleted“”following“”': ' deleted “” following “”',
  '“”following“”': ' “” following “”',
  'deleted“”preceding“”': ' deleted “” preceding “”',
  '“”preceding“”': ' “” preceding “”',
  'deletedformer(*)': ' deleted former (*)',
  'deletedformer(*),whichread:“”': ' deleted former (*), which read: “”',
  'whichformerlyread:“”': ', which formerly read: “”',
  'whichread:“”': ', which read: “”',
  'redesignatedformer(*)as(*)': ' redesignated former (*) as (*)',
  'redesignatedformer(*)and(*)as(*)and(*)': ' redesignated former (*) and (*) as (*) and (*)',
  'redesignatedformer(*)through(*)as(*)through(*)': ' redesignated former (*) through (*) as (*) through (*)',
  'redesignatedandrewroteformer(*)as(*)': ' redesignated and rewrote former (*) as (*)',
  'rewrote': ' rewrote',
  'rewrote(*)': ' rewrote (*)',
  'rewrotethesection': ' rewrote the section',
  'rewrote(*),whichformerlyread:“”': ' rewrote (*), which formerly read: “”',
  'andmadearelatedchange.': ' and made a related change.',
  'andmaderelatedchanges.': ' and made related changes.',
  'andmadeastylisticchange.': ' and made a stylistic change.',
  'andmadestylisticchanges.': ' and made stylistic changes.',
  'andmaderelatedandstylisticchanges.': ' and made related and stylistic changes.',

  'added': ' added', 'deleted': ' deleted', 'of': ' of', 'the': ' the', 'and': ' and', 'in': ' in', 'at': ' at',

  'applicability': ' (applicable __________,',
  'effectivity': ' (effective __________,',
  'effectivityandapplicability': ' (effective and applicable',
  'providedbyPL': ' as provided by § __ of P.L. ___-___',
  'providedbysuchAct': ' as provided by § __ of such Act',
  'tothissection': ', which appears as a note to this section),',
  'uscssectionnote': ', which appears as __ USCS § __ note),',

  'concludingcomma': ' comma',
  'concludingsemicolon': ' concluding semicolon',
  'concludingperiod': ' concluding period',
  'sectionheading': ' section heading',
  'subsectionheading': ' subsection heading',
  'subparagraphheading': ' subparagraph heading',

  'articlea': ' a',
  ';and': '; and',

  '(*)': '(*)', '‘': '‘', '’': '’', '“': '“', '”': '”', '“”': ' “”', '“”*': ' “”', '“”**': ' “”', '‘’': ' ‘’', '.': '.', ',': ',', ':': ':', ';': ';', '–': '–', '—': '—', '§': '§', '_': ' ', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '-': '-', '+': '+', '=': '=', '`': '`', '/': '/', '[': '[', ']': ']', '{': '{', '}': '}', '>': '>', '<': '<', '?': '?', '...': '...', '[]': '[]', '{}': '{}', '()': '()',

  'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z', 'a.': 'a.', 'b.': 'b.', 'c.': 'c.', 'd.': 'd.', 'e.': 'e.', 'f.': 'f.', 'g.': 'g.', 'h.': 'h.', 'i.': 'i.', 'j.': 'j.', 'k.': 'k.', 'l.': 'l.', 'm.': 'm.', 'n.': 'n.', 'o.': 'o.', 'p.': 'p.', 'q.': 'q.', 'r.': 'r.', 's.': 's.', 't.': 't.', 'u.': 'u.', 'v.': 'v.', 'w.': 'w.', 'x.': 'x.', 'y.': 'y.', 'z.': 'z.',

  '(a)': ' (a)', '(b)': ' (b)', '(c)': ' (c)', '(d)': ' (d)', '(e)': ' (e)', '(f)': ' (f)', '(g)': ' (g)', '(h)': ' (h)', '*(i)': ' (i)', '(j)': ' (j)', '(k)': ' (k)', '(l)': ' (l)', '(m)': ' (m)', '(n)': ' (n)', '(o)': ' (o)', '(p)': ' (p)', '(q)': ' (q)', '(r)': ' (r)', '(s)': ' (s)', '(t)': ' (t)', '(u)': ' (u)', '(v)': ' (v)', '(w)': ' (w)', '(x)': ' (x)', '(y)': ' (y)', '(z)': ' (z)',

  'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z',

  'A.': 'A.', 'B.': 'B.', 'C.': 'C.', 'D.': 'D.', 'E.': 'E.', 'F.': 'F.', 'G.': 'G.', 'H.': 'H.', 'I.': 'I.', 'J.': 'J.', 'K.': 'K.', 'L.': 'L.', 'M.': 'M.', 'N.': 'N.', 'O.': 'O.', 'P.': 'P.', 'Q.': 'Q.', 'R.': 'R.', 'S.': 'S.', 'T.': 'T.', 'U.': 'U.', 'V.': 'V.', 'W.': 'W.', 'X.': 'X.', 'Y.': 'Y.', 'Z.': 'Z.',

  '(A)': '(A)', '(B)': '(B)', '(C)': '(C)', '(D)': '(D)', '(E)': '(E)', '(F)': '(F)', '(G)': '(G)', '(H)': '(H)', '(I)': '(I)', '(I)**': '(I)', '(J)': '(J)', '(K)': '(K)', '(L)': '(L)', '(M)': '(M)', '(N)': '(N)', '(O)': '(O)', '(P)': '(P)', '(Q)': '(Q)', '(R)': '(R)', '(S)': '(S)', '(T)': '(T)', '(U)': '(U)', '(V)': '(V)', '(W)': '(W)', '(X)': '(X)', '(Y)': '(Y)', '(Z)': '(Z)',

  '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', '11': '11', '12': '12', '13': '13', '14': '14', '15': '15', '16': '16', '17': '17', '18': '18', '19': '19', '20': '20', '21': '21', '22': '22', '23': '23', '24': '24', '25': '25', '26': '26', '27': '27', '28': '28', '29': '29', '30': '30',

  '1.': '1.', '2.': '2.', '3.': '3.', '4.': '4.', '5.': '5.', '6.': '6.', '7.': '7.', '8.': '8.', '9.': '9.', '10.': '10.', '11.': '11.', '12.': '12.', '13.': '13.', '14.': '14.', '15.': '15.', '16.': '16.', '17.': '17.', '18.': '18.', '19.': '19.', '20.': '20.', '21.': '21.', '22.': '22.', '23.': '23.', '24.': '24.', '25.': '25.', '26.': '26.', '27.': '27.', '28.': '28.', '29.': '29.', '30.': '30.',

  '(1)': '(1)', '(2)': '(2)', '(3)': '(3)', '(4)': '(4)', '(5)': '(5)', '(6)': '(6)', '(7)': '(7)', '(8)': '(8)', '(9)': '(9)', '(10)': '(10)', '(11)': '(11)', '(12)': '(12)', '(13)': '(13)', '(14)': '(14)', '(15)': '(15)', '(16)': '(16)', '(17)': '(17)', '(18)': '(18)', '(19)': '(19)', '(20)': '(20)', '(21)': '(21)', '(22)': '(22)', '(23)': '(23)', '(24)': '(24)', '(25)': '(25)', '(26)': '(26)', '(27)': '(27)', '(28)': '(28)', '(29)': '(29)', '(30)': '(30)', '(31)': '(31)',

  'i': 'i', 'ii': 'ii', 'iii': 'iii', 'iv': 'iv', 'v': 'v', 'vi': 'vi', 'vii': 'vii', 'viii': 'viii', 'ix': 'ix', 'x': 'x', 'xi': 'xi', 'xii': 'xii', 'xii': 'xii', 'xiv': 'xiv', 'xv': 'xv',

  'i.': 'i.', 'ii.': 'ii.', 'iii.': 'iii.', 'iv.': 'iv.', 'v.': 'v.', 'vi.': 'vi.', 'vii.': 'vii.', 'viii.': 'viii.', 'ix.': 'ix.', 'x.': 'x.', 'xi.': 'xi.', 'xii.': 'xii.', 'xii.': 'xii.', 'xiv.': 'xiv.', 'xv.': 'xv.',

  '(i)': '(i)', '(ii)': '(ii)', '(iii)': '(iii)', '(iv)': '(iv)', '(v)': '(v)', '(vi)': '(vi)', '(vii)': '(vii)', '(viii)': '(viii)', '(ix)': '(ix)', '(x)': '(x)', '(xi)': '(xi)', '(xii)': '(xii)', '(xiii)': '(xiii)', '(xiv)': '(xiv)', '(xv)': '(xv)',

  'I': 'I', 'II': 'II', 'III': 'III', 'IV': 'IV', 'V': 'V', 'VI': 'VI', 'VII': 'VII', 'VIII': 'VIII', 'IX': 'IX', 'X': 'X', 'XI': 'XI', 'XII': 'XII', 'XII': 'XII', 'XIV': 'XIV', 'XV': 'XV',

  'I.': 'I.', 'II.': 'II.', 'III.': 'III.', 'IV.': 'IV.', 'V.': 'V.', 'VI.': 'VI.', 'VII.': 'VII.', 'VIII.': 'VIII.', 'IX.': 'IX.', 'X.': 'X.', 'XI.': 'XI.', 'XII.': 'XII.', 'XII.': 'XII.', 'XIV.': 'XIV.', 'XV.': 'XV.',

  '(I)': '(I)', '(II)': '(II)', '(III)': '(III)', '(IV)': '(IV)', '(V)': '(V)', '(VI)': '(VI)', '(VII)': '(VII)', '(VIII)': '(VIII)', '(IX)': '(IX)', '(X)': '(X)', '(XI)': '(XI)', '(XII)': '(XII)', '(XIII)': '(XIII)', '(XIV)': '(XIV)', '(XV)': '(XV)',

  'i': 'i', 'ii': 'ii', 'iii': 'iii', 'iv': 'iv', 'v': 'v', 'vi': 'vi', 'vii': 'vii', 'viii': 'viii', 'ix': 'ix', 'x': 'x', 'xi': 'xi', 'xii': 'xii', 'xiii': 'xiii', 'xix': 'xix', 'xv': 'xv',

  'I': 'I', 'II': 'II', 'III': 'III', 'IV': 'IV', 'V': 'V', 'VI': 'VI', 'VII': 'VII', 'VIII': 'VIII', 'IX': 'IX', 'X': 'X', 'XI': 'XI', 'XII': 'XII', 'XIII': 'XIII', 'XIX': 'XIX', 'XV': 'XV',

  '(xvi)': '(xvi)', '(xvii)': '(xvii)', '(xviii)': '(xviii)', '(xviii)': '(xviii)', '(xix)': '(xix)', '(xx)': '(xx)', '(xxi)': '(xxi)', '(xxii)': '(xxii)', '(xxiii)': '(xxiii)', '(xxiv)': '(xxiv)', '(xxv)': '(xxv)',

  '(XVI)': '(XVI)', '(XVII)': '(XVII)', '(XVIII)': '(XVIII)', '(XVIII)': '(XVIII)', '(XIX)': '(XIX)', '(XX)': '(XX)', '(XXI)': '(XXI)', '(XXII)': '(XXII)', '(XXIII)': '(XXIII)', '(XXIV)': '(XXIV)', '(XXV)': '(XXV)',

  '”.': '”.',
  '’.”.': '’.”.',
  'p(*)': '<p>“(*) </p>',
  'popening': '<p>',
  'pclosing': '</p>',
  'pbothtags': '<p></p>',
  'pbothtagsspace': '<p>“ </p>',
  'annotbasictags': 'placeholder',
  'adding': 'adding',
  'amending': 'amending',
  'deleting': 'deleting',

};

function updateTextareaInsert() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
}

document.querySelectorAll('.insert-btn, .amendment-note-descriptors-btn, .amendment-note-designators-btn').forEach(element => {
  element.addEventListener('click', event => {
    const mappedText = mapObj[event.target.id];
    textarea.focus();
    document.execCommand('insertText', false, mappedText);
  });
});