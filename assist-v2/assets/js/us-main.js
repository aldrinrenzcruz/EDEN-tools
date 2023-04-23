const US_fetchSessionNumber = document.getElementById("fetch-us-session-number");
const US_fetchBillNumber = document.getElementById("fetch-us-bill-number");
const US_fetchActBtn = document.getElementById("fetch-us-acts-btn");

US_fetchActBtn.addEventListener("click", function () {
  window.open(
    'https://uscode.house.gov/download/bills/' +
    US_fetchSessionNumber.value +
    '/' +
    US_fetchBillNumber.value +
    '.pdf'
  );
});
US_fetchSessionNumber.addEventListener("keypress", function () {
  simulateEnterKey("fetch-us-acts-btn");
});
US_fetchBillNumber.addEventListener("keypress", function () {
  simulateEnterKey("fetch-us-acts-btn");
});

document.getElementById("fetch-us-section-btn").addEventListener("click", function () {
  let input = document.getElementById("fetch-us-section-normcite").value;
  let title = input.match(/^\d+/)[0];
  let section = input.replace(/^\d+(\s)?(USCS|\/|\s)?\s?(§)?\s?/, '');
  window.open(
    'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title' +
    title +
    '-section' +
    section +
    '&num=0&edition=prelim'
  );
});


document.getElementById("fetch-us-section-normcite").addEventListener("keypress", function () {
  simulateEnterKey("fetch-us-section-btn");
});

const US_fetchTableIIIYear = document.getElementById("fetch-table-3-year");
const US_fetchTableIIIYearBtn = document.getElementById("fetch-table-3-year-btn");
US_fetchTableIIIYearBtn.addEventListener("click", function () {
  window.open(
    'https://uscode.house.gov/table3/year' +
    US_fetchTableIIIYear.value +
    '.htm');
});
US_fetchTableIIIYear.addEventListener("keypress", function () {
  simulateEnterKey("fetch-table-3-year-btn");
});

const US_fetchTableIIISessionYear = document.getElementById("fetch-table-3-stat-year");
const US_fetchTableIIISessionNumber = document.getElementById("fetch-table-3-stat-number");
const US_fetchTableIIIStatBtn = document.getElementById("fetch-table-3-stat-btn");
US_fetchTableIIIStatBtn.addEventListener("click", function () {
  window.open('https://uscode.house.gov/table3/' +
    US_fetchTableIIISessionYear.value +
    '_' +
    US_fetchTableIIISessionNumber.value +
    '.htm');
});
US_fetchTableIIISessionYear.addEventListener("keypress", function () {
  simulateEnterKey("fetch-table-3-stat-btn");
});
US_fetchTableIIISessionNumber.addEventListener("keypress", function () {
  simulateEnterKey("fetch-table-3-stat-btn");
});

//Positive vs. Non-positive input
let US_titles = {
  1: "Positive law; (1) General Provisions",
  3: "Positive law; (3) The President",
  4: "Positive law; (4) Flag and Seal, Seat of Government",
  5: "Positive law; (5) Government Organization and Employees; Appendix",
  9: "Positive law; (9) Arbitration",
  10: "Positive law; (10) Armed Forces",
  11: "Positive law; (11) Bankruptcy",
  13: "Positive law; (13) Census",
  14: "Positive law; (14) Coast Guard",
  17: "Positive law; (17) Copyrights",
  18: "Positive law; (18) Crimes and Criminal Procedure; Appendix",
  23: "Positive law; (23) Highways",
  26: "Positive law; (26) Internal Revenue Code",
  28: "Positive law; (28) Judiciary and Judicial Procedure; Appendix",
  31: "Positive law; (31) Money and Finance",
  32: "Positive law; (32) National Guard",
  35: "Positive law; (35) Patents",
  36: "Positive law; (36) Patriotic and National Observances, Ceremonies, and Organizations",
  37: "Positive law; (37) Pay and Allowances of the Uniformed Services",
  38: "Positive law; (38) Veterans’ Benefits",
  39: "Positive law; (39) Postal Service",
  40: "Positive law; (40) Public Buildings, Property, and Works",
  41: "Positive law; (41) Public Contracts",
  44: "Positive law; (44) Public Printing and Documents",
  46: "Positive law; (46) Shipping",
  49: "Positive law; (49) Transportation",
  51: "Positive law; (51) National and Commercial Space Programs",
  54: "Positive law; (54) National Park System",
  2: "Non-Positive law; (2) The Congress",
  6: "Non-Positive law; (6) Domestic Security",
  7: "Non-Positive law; (7) Agriculture",
  8: "Non-Positive law; (8) Aliens and Nationality",
  12: "Non-Positive law; (12) Banks and Banking",
  15: "Non-Positive law; (15) Commerce and Trade",
  16: "Non-Positive law; (16) Conservation",
  19: "Non-Positive law; (19) Customs Duties",
  20: "Non-Positive law; (20) Education",
  21: "Non-Positive law; (21) Food and Drugs",
  22: "Non-Positive law; (22) Foreign Relations and Intercourse",
  24: "Non-Positive law; (24) Hospitals and Asylums",
  25: "Non-Positive law; (25) Indians",
  27: "Non-Positive law; (27) Intoxicating Liquors",
  29: "Non-Positive law; (29) Labor",
  30: "Non-Positive law; (30) Mineral Lands and Mining",
  33: "Non-Positive law; (33) Navigation and Navigable Waters",
  34: "Non-Positive law; (34) Crime Control and Enforcement",
  42: "Non-Positive law; (42) The Public Health and Welfare",
  43: "Non-Positive law; (43) Public Lands",
  45: "Non-Positive law; (45) Railroads",
  47: "Non-Positive law; (47) Telegraphs, Telephones, and Radiotelegraphs",
  48: "Non-Positive law; (48) Territories and Insular Possessions",
  50: "Non-Positive law; (50) War and National Defense",
  52: "Non-Positive law; (52) Voting and Elections",
  53: "Non-Positive law; (53) [Reserved]",
};
document.querySelector('#fetch-positive-or-non-positive-btn').addEventListener("click", function () {
  let titleNumber = document.getElementById('fetch-positive-or-non-positive').value;
  let titleName = US_titles[titleNumber] || 'Title not found';
  document.getElementById('fetch-positive-or-non-positive').value = titleName;
});
document.querySelector('#fetch-positive-or-non-positive').addEventListener("keypress", function () {
  simulateEnterKey("fetch-positive-or-non-positive-btn");
});

// Add suppInclusion Tags for Upper Text Editor
function addSuppInclusionTags() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  if (confirm("Add suppInclusion to all </lawTextComponent>?") == true) {
    textarea.select();
    textarea.value = textarea.value
      .replace(/<primlaw:supplementalProductInclusion[\s\S]*?<\/primlaw:supplementalProductInclusion>/g, "")
      .replaceAll(`</lawTextComponent>`, `${document.getElementById("supp-inclusion-input").value}</lawTextComponent>`)
      .replaceAll(`</statcode:lawTextComponent>`, `${document.getElementById("supp-inclusion-input").value}</statcode:lawTextComponent>`)
  }
}

//Bracketed Matter
function toggleSections(bType) {
  let bmbSection2 = document.querySelector('#bmb-section2');
  let bmbSection3 = document.querySelector('#bmb-section3');
  if (bType === "standard" || bType === "etseq") {
    bmbSection2.style.display = "none";
    bmbSection3.style.display = "none";
  } else {
    bmbSection2.style.display = "block";
    bmbSection3.style.display = "block";
  }
}
window.onload = function () {
  let bType = document.querySelector('#bmb-type').value;
  toggleSections(bType);
}
document.querySelector('#bmb-type').addEventListener('change', function () {
  let bType = this.value;
  toggleSections(bType);
});

document.querySelectorAll('#bmb-type, #bmb-title1, #bmb-section1, #bmb-section2, #bmb-section3').forEach(el => {
  el.addEventListener('input', function () {
    bType = document.querySelector('#bmb-type').value;
    title1 = document.querySelector('#bmb-title1').value;
    section1 = document.querySelector('#bmb-section1').value;
    section2 = document.querySelector('#bmb-section2').value;
    section3 = document.querySelector('#bmb-section3').value;
    result = document.querySelector('#bmb-result1');

    if (bType === "standard") {
      result.value = ` [${title1} USCS § ${section1}]`
    }

    else if (bType === "etseq") {
      result.value = ` [${title1} USCS §§ ${section1} et seq.]`
    }

    else if (bType === "AND") {
      if (section3 === "") {
        result.value = ` [${title1} USCS §§ ${section1} and ${section2}]`
      }
      else if (section3 !== "") {
        result.value = ` [${title1} USCS §§ ${section1}, ${section2} and ${section3}]`
      }
    }

    else if (bType === "ANDetseq") {
      if (section3 === "") {
        result.value = ` [${title1} USCS §§ ${section1} et seq. and ${section2} et seq.]`
      }
      else if (section3 !== "") {
        result.value = ` [${title1} USCS §§ ${section1} et seq., ${section2} et seq. and ${section3} et seq.]`
      }

    }

    else if (bType === "OR") {
      if (section3 === "") {
        result.value = ` [${title1} USCS § ${section1} or ${section2}]`
      }
      else if (section3 !== "") {
        result.value = ` [${title1} USCS § ${section1}, ${section2} or ${section3}]`
      }
    }

    else if (bType === "ORetseq") {
      if (section3 === "") {
        result.value = ` [${title1} USCS §§ ${section1} et seq. and ${section2} et seq.]`
      }
      else if (section3 !== "") {
        result.value = ` [${title1} USCS §§ ${section1} et seq., ${section2} et seq. or ${section3} et seq.]`
      }
    }

  });
});

// Bracketed Matter - Date of enactment
document.querySelectorAll('#bmb-month, #bmb-day, #bmb-year').forEach(el => {
  el.addEventListener('input', function () {
    document.querySelector('#bmb-date-result').value = ' [enacted ' +
      document.querySelector('#bmb-month').value +
      ' ' +
      document.querySelector('#bmb-day').value +
      ', ' +
      document.querySelector('#bmb-year').value + ']';
  });
});

//Added HC Positive
document.querySelectorAll('#month004, #day004, #year004, #pl1004, #pl2004, #div004, #title004, #subtitle004, #part004, #chapter004, #subchapter004, #section004, #stat004, #page004').forEach(el => {
  el.addEventListener('input', function () {
    function addedhcpositivedate() {
      let m = document.getElementById('month004').value;
      let d = document.getElementById('day004').value;
      let y = document.getElementById('year004').value;
      if (m && d && y) {
        return 'Added ' + m + ' ' + d + ', ' + y;
      }
    }
    function addedhcpositivepla() {
      let p1 = document.getElementById('pl1004').value;
      let p2 = document.getElementById('pl2004').value;
      if (p1 && p2) {
        return 'P.L. ' + p1 + '-' + p2;
      }
    }
    function addedhcpositivestats() {
      let s1 = document.getElementById('stat004').value;
      let s2 = document.getElementById('page004').value;
      if (s1 && s2) {
        return s1 + ' Stat. ' + s2;
      }
    }
    function addedhcpositiveGetValue(elementId, prefix = '') {
      let value = document.getElementById(elementId).value;
      if (value) {
        return prefix + value;
      }
    }
    let addedHcPositiveResult = document.getElementById('added-hc-positive-result');
    addedHcPositiveResult.value = [
      addedhcpositivedate(),
      addedhcpositivepla(),
      addedhcpositiveGetValue('div004', 'Div '),
      addedhcpositiveGetValue('title004', 'Title '),
      addedhcpositiveGetValue('subtitle004', 'Subtitle '),
      addedhcpositiveGetValue('part004', 'Part '),
      addedhcpositiveGetValue('chapter004', 'Ch '),
      addedhcpositiveGetValue('subchapter004', 'Subch '),
      addedhcpositiveGetValue('section004', '§ '),
      addedhcpositivestats()
    ].filter(Boolean).join(', ');
  });
});

//Added HC Scenario 1
document.querySelectorAll('#month005a, #day005a, #year005a, #pl1005a, #pl2005a, #div005a, #title005a, #subtitle005a, #chapter005a, #subchapter005a, #section005a, #month005b, #day005b, #year005b, #pl1005b, #pl2005b, #div005b, #title005b, #subtitle005b, #chapter005b, #subchapter005b, #section005b, #stat005b, #page005b').forEach(el => {
  el.addEventListener('input', function () {
    function addedhcs1olddate() {
      let m = document.querySelector('#month005a').value;
      let d = document.querySelector('#day005a').value;
      let y = document.querySelector('#year005a').value;
      if (m && d && y) {
        return m + ' ' + d + ', ' + y;
      }
    }
    function addedhcs1oldpla() {
      let p1 = document.querySelector('#pl1005a').value;
      let p2 = document.querySelector('#pl2005a').value;
      if (p1 && p2) {
        return 'P.L. ' + p1 + '-' + p2;
      }
    }
    function addedhcs1newdate() {
      let m = document.querySelector('#month005b').value;
      let d = document.querySelector('#day005b').value;
      let y = document.querySelector('#year005b').value;
      if (m && d && y) {
        return 'as added ' + m + ' ' + d + ', ' + y;
      }
    }
    function addedhcs1newpla() {
      let p1 = document.querySelector('#pl1005b').value;
      let p2 = document.querySelector('#pl2005b').value;
      if (p1 && p2) {
        return 'P.L. ' + p1 + '-' + p2;
      }
    }
    function addedhcs1stats() {
      let s1 = document.querySelector('#stat005b').value;
      let s2 = document.querySelector('#page005b').value;
      if (s1 && s2) {
        return s1 + ' Stat. ' + s2;
      }
    }
    function addedhcs1GetValue(elementId, prefix = '') {
      let value = document.querySelector(elementId).value;
      if (value) {
        return prefix + value;
      }
    }
    document.querySelector('#added-hc-scenario-1-result').value = [
      addedhcs1olddate(),
      addedhcs1oldpla(),
      addedhcs1GetValue('#div005a', 'Div '),
      addedhcs1GetValue('#title005a', 'Title '),
      addedhcs1GetValue('#subtitle005a', 'Subtitle '),
      addedhcs1GetValue('#part005a', 'Part '),
      addedhcs1GetValue('#chapter005a', 'Ch '),
      addedhcs1GetValue('#subchapter005a', 'Subch '),
      addedhcs1GetValue('#section005a', '§ '),

      addedhcs1newdate(),
      addedhcs1newpla(),
      addedhcs1GetValue('#div005b', 'Div '),
      addedhcs1GetValue('#title005b', 'Title '),
      addedhcs1GetValue('#subtitle005b', 'Subtitle '),
      addedhcs1GetValue('#part005b', 'Part '),
      addedhcs1GetValue('#chapter005b', 'Ch '),
      addedhcs1GetValue('#subchapter005b', 'Subch '),
      addedhcs1GetValue('#section005b', '§ '),

      addedhcs1stats()
    ].filter(Boolean).join(', ');
  });
});

//Added HC Scenario 2
document.querySelectorAll('#month006, #day006, #year006, #pl1006, #pl2006, #div006, #title006, #subtitle006, #part006, #chapter006, #subchapter006, #section006, #stat006, #page006').forEach(el => {
  el.addEventListener('input', function () {
    function addedhcs2date() {
      let m = document.querySelector('#month006').value;
      let d = document.querySelector('#day006').value;
      let y = document.querySelector('#year006').value;
      if (m && d && y) {
        return m + ' ' + d + ', ' + y;
      }
    }
    function addedhcs2pla() {
      let p1 = document.querySelector('#pl1006').value;
      let p2 = document.querySelector('#pl2006').value;
      if (p1 && p2) {
        return 'P.L. ' + p1 + '-' + p2;
      }
    }
    function addedhcs2stats() {
      let s1 = document.querySelector('#stat006').value;
      let s2 = document.querySelector('#page006').value;
      if (s1 && s2) {
        return s1 + ' Stat. ' + s2;
      }
    }
    function addedhcs2statsGetValue(elementId, prefix = '') {
      let value = document.querySelector(elementId).value;
      if (value) {
        return prefix + value;
      }
    }
    document.querySelector('#added-hc-scenario-2-result').value = [
      addedhcs2date(),
      addedhcs2pla(),
      addedhcs2statsGetValue('#div006', 'Div '),
      addedhcs2statsGetValue('#title006', 'Title '),
      addedhcs2statsGetValue('#subtitle006', 'Subtitle '),
      addedhcs2statsGetValue('#part006', 'Part '),
      addedhcs2statsGetValue('#chapter006', 'Ch '),
      addedhcs2statsGetValue('#subchapter006', 'Subch '),
      addedhcs2statsGetValue('#section006', '§ '),
      addedhcs2stats()
    ].filter(Boolean).join(', ');
  });
});

//Noted Under Act Intro
document.querySelectorAll('#month2, #day2, #year2, #pl1a, #pl2a, #div2, #title2, #subtitle2, #chapter2, #subchapter2, #section2, #stat1a, #stat2a, #noted-under-act-intro-result-decision-amended, #noted-under-act-intro-result-decision-added, #noted-under-provision-select').forEach(el => {
  el.addEventListener('input', function () {
    function nuactintrodate() {
      let m = document.getElementById('month2').value;
      let d = document.getElementById('day2').value;
      let y = document.getElementById('year2').value;
      if (m && d && y) {
        return 'Act ' + m + ' ' + d + ', ' + y;
      }
    }
    function nuactintropla() {
      let p1 = document.getElementById('pl1a').value;
      let p2 = document.getElementById('pl2a').value;
      if (p1 && p2) {
        return 'P.L. ' + p1 + '-' + p2;
      }
    }
    function nuactintrostats() {
      let s1 = document.getElementById('stat1a').value;
      let s2 = document.getElementById('stat2a').value;
      if (s1 && s2) {
        return s1 + ' Stat. ' + s2 + ', provides:';
      }
    }
    function nuactintroGetValue(elementId, prefix = '') {
      let value = document.getElementById(elementId).value;
      if (value) {
        return prefix + value;
      }
    }
    let nuActIntroResult = document.getElementById('nu-act-intro-result');
    if (document.querySelector("#noted-under-act-intro-result-decision-added").checked) {
      nuActIntroResult.value = [
        nuactintrodate(),
        nuactintropla(),
        nuactintroGetValue('div2', 'Div '),
        nuactintroGetValue('title2', 'Title '),
        nuactintroGetValue('subtitle2', 'Subtitle '),
        nuactintroGetValue('chapter2', 'Ch '),
        nuactintroGetValue('subchapter2', 'Subch '),
        nuactintroGetValue('section2', '§ '),
        nuactintrostats()
      ].filter(Boolean).join(', ').replace("Div  division", "Div").replace("Div division", "Div").replace("subtitle", "Subtitle").replace("chapter", "Ch").replace("subchapter", "Subch").replace("Div §", "§").replace("Div Title", "Title").replace("Div Subtitle", "Subtitle").replace("Div Chapter", "Chapter").replaceAll(" ,", ",");
    } else if (document.querySelector("#noted-under-act-intro-result-decision-amended").checked) {
      nuActIntroResult.value = [
        nuactintrodate(),
        nuactintropla(),
        nuactintroGetValue('div2', 'Div '),
        nuactintroGetValue('title2', 'Title '),
        nuactintroGetValue('subtitle2', 'Subtitle '),
        nuactintroGetValue('chapter2', 'Ch '),
        nuactintroGetValue('subchapter2', 'Subch '),
        nuactintroGetValue('section2', '§ '),
        nuactintrostats()
      ].filter(Boolean).join(', ').replace("Act ", "; ").replace(", provides:", "").replace("Div  division", "Div").replace("Div division", "Div").replace("subtitle", "Subtitle").replace("chapter", "Ch").replace("subchapter", "Subch").replace("Div §", "§").replace("Div Title", "Title").replace("Div Subtitle", "Subtitle").replace("Div Chapter", "Chapter").replaceAll(" ,", ",");
    }
    let nuActProvisionSelect = document.getElementById('noted-under-provision-select');
    let nuActProvisionResult = document.getElementById('nu-act-provision-result');
    if (document.querySelector("#section2").value === "") {
      let introDate = nuactintrodate().replace("Act ", "");
      let actSectionAlt = document.querySelector("#div2").value.match(/§\s*\d+(?:\w*)/)[0];
      if (nuActProvisionSelect.value === "e1") {
        nuActProvisionResult.value = "Effective date of " + introDate + " amendments.";
      } else if (nuActProvisionSelect.value === "e2") {
        nuActProvisionResult.value = "Effective date of " + actSectionAlt + " of Act " + introDate + ".";
      } else if (nuActProvisionSelect.value === "a1") {
        nuActProvisionResult.value = "Applicability of " + introDate + " amendments.";
      } else if (nuActProvisionSelect.value === "a2") {
        nuActProvisionResult.value = "Applicability of amendments made by " + actSectionAlt + " of Act " + introDate + ".";
      } else if (nuActProvisionSelect.value === "ea") {
        nuActProvisionResult.value = "Effective date and applicability of amendments made by " + actSectionAlt + " of Act " + introDate + ".";
      }
    } else {
      let introDate = nuactintrodate().replace("Act ", "");
      let actSection = nuactintroGetValue('section2', '§ ');
      if (nuActProvisionSelect.value === "e1") {
        nuActProvisionResult.value = "Effective date of " + introDate + " amendments.";
      } else if (nuActProvisionSelect.value === "e2") {
        nuActProvisionResult.value = "Effective date of " + actSection + " of Act " + introDate + ".";
      } else if (nuActProvisionSelect.value === "a1") {
        nuActProvisionResult.value = "Applicability of " + introDate + " amendments.";
      } else if (nuActProvisionSelect.value === "a2") {
        nuActProvisionResult.value = "Applicability of amendments made by " + actSection + " of Act " + introDate + ".";
      } else if (nuActProvisionSelect.value === "ea") {
        nuActProvisionResult.value = "Effective date and applicability of amendments made by " + actSection + " of Act " + introDate + ".";
      }
    }
  });
});

function processLawTextComponentWrap() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
    .replaceAll(" —", "—")
    .replaceAll(": (", ": \n(")
    .replaceAll("; (", "; \n(")
    .replaceAll(". (", ". \n(")
    .replaceAll(".— (", ".— \n(")
    .replaceAll("— (", "— \n(")
    .replaceAll("; and (", "; and \n(")
    .replaceAll("; or (", "; or \n(")

    .replaceAll(": “(", ": \n(")
    .replaceAll("; “(", "; \n(")
    .replaceAll(". “(", ". \n(")
    .replaceAll(".— “(", ".— \n(")
    .replaceAll("— “(", "— \n(")
    .replaceAll("; and “(", "; and \n(")
    .replaceAll("; or “(", "; or \n(")
    .replaceAll(", and “(", ", and \n(")
    .replaceAll(", or “(", ", or \n(")
    .replaceAll(", “(", ", \n(")
    .replaceAll(" “(", " \n(")
    .replaceAll("“(", "(")

    .replaceAll(".—", ". ")
    .replace(/[^\S\r\n]+$/gm, "") // Trim Trailing Spaces

  lawTextComponentWrap();

  textarea.select();

  const placeholders = ['(a)', '(b)', '(c)', '(d)', '(e)', '(f)', '(g)', '(h)', '(i)', '(j)', '(k)', '(l)', '(m)', '(n)', '(o)', '(p)', '(q)', '(r)', '(s)', '(t)', '(u)', '(v)', '(w)', '(x)', '(y)', '(z)', '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', '(10)', '(11)', '(12)', '(13)', '(14)', '(15)', '(16)', '(17)', '(18)', '(19)', '(20)', '(21)', '(22)', '(23)', '(24)', '(25)', '(26)', '(27)', '(28)', '(29)', '(30)', '(31)', '(32)', '(33)', '(34)', '(35)', '(36)', '(37)', '(38)', '(39)', '(40)', '(40)', '(41)', '(42)', '(43)', '(44)', '(45)', '(46)', '(47)', '(48)', '(49)', '(50)', '(51)', '(52)', '(53)', '(54)', '(55)', '(56)', '(57)', '(58)', '(59)', '(60)', '(61)', '(62)', '(63)', '(64)', '(65)', '(66)', '(67)', '(68)', '(69)', '(70)', '(71)', '(72)', '(73)', '(74)', '(75)', '(76)', '(77)', '(78)', '(79)', '(80)', '(81)', '(82)', '(83)', '(84)', '(85)', '(86)', '(87)', '(88)', '(89)', '(90)', '(91)', '(92)', '(93)', '(94)', '(95)', '(96)', '(97)', '(98)', '(99)', '(100)', '(A)', '(B)', '(C)', '(D)', '(E)', '(F)', '(G)', '(H)', '(I)', '(J)', '(K)', '(L)', '(M)', '(N)', '(O)', '(P)', '(Q)', '(R)', '(S)', '(T)', '(U)', '(V)', '(W)', '(X)', '(Y)', '(Z)', '(i)', '(ii)', '(iii)', '(iv)', '(v)', '(vi)', '(vii)', '(viii)', '(ix)', '(x)', '(xi)', '(xii)', '(xiii)', '(xiv)', '(xv)', '(xvi)', '(xvii)', '(xviii)', '(xix)', '(xx)', '(I)', '(II)', '(III)', '(IV)', '(V)', '(VI)', '(VII)', '(VIII)', '(IX)', '(X)', '(XI)', '(XII)', '(XIII)', '(XIV)', '(XV)', '(XVI)', '(XVII)', '(XVIII)', '(XIX)', '(XX)', '(aa)', '(bb)', '(cc)', '(dd)', '(ee)', '(ff)', '(gg)', '(hh)', '(ii)', '(jj)', '(kk)', '(ll)', '(mm)', '(nn)', '(oo)', '(pp)', '(qq)', '(rr)', '(ss)', '(tt)', '(uu)', '(vv)', '(ww)', '(xx)', '(yy)', '(zz)', '(AA)', '(BB)', '(CC)', '(DD)', '(EE)', '(FF)', '(GG)', '(HH)', '(II)', '(JJ)', '(KK)', '(LL)', '(MM)', '(NN)', '(OO)', '(PP)', '(QQ)', '(RR)', '(SS)', '(TT)', '(UU)', '(VV)', '(WW)', '(XX)', '(YY)', '(ZZ)',];

  for (const placeholder of placeholders) {
    textarea.value = textarea.value.replaceAll(`<placeholder>${placeholder}`, `<lawTextComponent><heading><designator value="${placeholder.replace("(", "").replace(")", "")}">${placeholder}</designator></heading><body><p>`);
  }

  textarea.value = textarea.value
    .replaceAll(`</placeholder>`, `</p></body></lawTextComponent>`)
    .replaceAll(`<p> `, `<p>`)
    .replaceAll(`</lawTextComponent>`, `</lawTextComponent>\n`)
    .replaceAll(`<placeholder>`, `<lawTextComponent><body><p>`)
}

function lawTextComponentWrap() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }

  let lines = textarea.value.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<lawTextComponent>')) {
      newLines += '<placeholder>' + lines[i] + '</placeholder>';
      newLines += '\n';
    }
    else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<placeholder>', '');
      lines[i] = lines[i].replace('</placeholder>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<placeholder>' + lines[i] + '</placeholder>');
      newLines += lines[i];
      newLines += '\n';
    }
  }
  textarea.value = newLines;
}

function cleanUps() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  if (!textarea.value.includes("<p>")) {
    notedUnderMergeFixit();
    annotationWrap1();
  }
}

//Merge Text from Act
function mergeTextFromAct() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
    .replaceAll(" —", "—")
    .replaceAll(": (", ": \n(")
    .replaceAll("; (", "; \n(")
    .replaceAll(". (", ". \n(")
    .replaceAll(".— (", ".— \n(")
    .replaceAll("— (", "— \n(")
    .replaceAll("; and (", "; and \n(")
    .replaceAll("; or (", "; or \n(")

    .replaceAll(": ‘(", ": \n‘(")
    .replaceAll("; ‘(", "; \n‘(")
    .replaceAll(". ‘(", ". \n‘(")
    .replaceAll(".— ‘(", ".— \n‘(")
    .replaceAll("— ‘(", "— \n‘(")
    .replaceAll("; and ‘(", "; and \n‘(")
    .replaceAll("; or ‘(", "; or \n‘(")
    .replaceAll("‘(", "‘(")

    .replaceAll(": “(", ": \n“(")
    .replaceAll("; “(", "; \n“(")
    .replaceAll(". “(", ". \n“(")
    .replaceAll(".— “(", ".— \n“(")
    .replaceAll("— “(", "— \n“(")
    .replaceAll("; and “(", "; and \n“(")
    .replaceAll("; or “(", "; or \n“(")
    .replaceAll("“(", "“(")

    .replace(/[^\S\r\n]+$/gm, "") // Trim Trailing Spaces
}

//Noted Under Fixit
function notedUnderMergeFixit() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
    .replaceAll(" —", "—")
    .replaceAll("“", "‘")
    .replaceAll("”", "’")
    .replaceAll(": (", ": \n(")
    .replaceAll("; (", "; \n(")
    .replaceAll(". (", ". \n(")
    .replaceAll(".— (", ".— \n(")
    .replaceAll("— (", "— \n(")
    .replaceAll("; and (", "; and \n(")
    .replaceAll("; or (", "; or \n(")

    .replaceAll(": ‘(", ": \n(")
    .replaceAll("; ‘(", "; \n(")
    .replaceAll(". ‘(", ". \n(")
    .replaceAll(".— ‘(", ".— \n(")
    .replaceAll("— ‘(", "— \n(")
    .replaceAll("; and ‘(", "; and \n(")
    .replaceAll("; or ‘(", "; or \n(")
    .replaceAll("‘(", "(")

    .replaceAll(".—", ". ")
    .replace(/[^\S\r\n]+$/gm, "") // Trim Trailing Spaces
}

// Noted Under Extra cleanups for a,b,c,d
function lineCursorIsOn(textarea) {
  return textarea.value.substring(0, textarea.selectionStart).split("\n").length;
}
function processNotedUnderAnnot() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  let cursorLineNumber = lineCursorIsOn(textarea);
  textarea.value = textarea.value.split("\n").map(function (line, index) {
    let currentLineNumber = index + 1;
    if (currentLineNumber == cursorLineNumber) return line.replaceAll("<annot:annotationLevel><annot:body>", "").replaceAll("</annot:body></annot:annotationLevel>", "");
    return line;
  }).join("\n");
}

function annotationWrap1() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  let lines = textarea.value.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<annot:annotationLevel><annot:body><p>“')) {
      newLines += '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>';
      newLines += '\n';
    }
    else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<annot:annotationLevel><annot:body><p>“', '');
      lines[i] = lines[i].replace('</p></annot:body></annot:annotationLevel>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>');
      newLines += lines[i];
      newLines += '\n';
    }
  }
  textarea.value = newLines;
}

function lowerTextareaPreview() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }

  let temp = textarea.value;

  const commonErrors = ['president\'s council on fitness, sports and nutrition', 'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming', 'air force reserve command', 'defense finance and accounting service debt and claims management center', 'english language acquisition office', 'european command', 'federal accounting standards advisory board', 'federal aviation administration', 'federal bureau of investigation', 'federal consulting group', 'federal emergency management agency', 'federal energy regulatory commission', 'federal executive boards', 'federal highway administration', 'federal housing administration', 'federal law enforcement training center', 'federal motor carrier safety administration', 'federal protective service', 'federal railroad administration', 'federal student aid information center', 'federal transit administration', 'federal voting assistance program', 'government national mortgage association', 'ginnie mae', 'guinea-bissau', 'indian health service', 'secretary of agriculture', 'secretary of commerce', 'secretary of defense', 'secretary of education', 'secretary of energy', 'secretary of health and human services', 'secretary of homeland security', 'secretary of housing and urban development', 'secretary of labor', 'secretary of state', 'secretary of the interior', 'secretary of the treasury', 'secretary of transportation', 'secretary of veterans affairs', 'abilityone commission', 'access board', 'administration for children and families', 'administration for community living', 'administration for native americans', 'administrator of the environmental protection agency', 'administrator of the small business administration', 'afghan', 'afghanistan', 'africa command', 'african', 'agency for healthcare research and quality', 'agency for toxic substances and disease registry', 'agricultural marketing service', 'agricultural research service', 'air force', 'albania', 'albanian', 'albany', 'albuquerque', 'alcohol and tobacco tax and trade bureau', 'algeria', 'algerian', 'america', 'american', 'anchorage', 'andorra', 'andorran', 'angeles', 'angola', 'angolian', 'animal and plant health inspection service', 'annapolis', 'antigua', 'antiguan', 'antitrust division', 'arab', 'arabian', 'argentina', 'argentinian', 'armed forces retirement home', 'armenia', 'armenian', 'arms control and international security', 'army corps of engineers', 'asian', 'atlanta', 'attorney general', 'augusta', 'austin', 'australia', 'australian', 'austria', 'austrian', 'azerbaijan', 'azerbaijanis', 'bahamas', 'bahrain', 'baltimore', 'bangladesh', 'barbados', 'barbuda', 'baton rouge', 'belarus', 'belgian', 'belgium', 'belize', 'benin', 'bhutan', 'billings', 'bismarck', 'boise', 'bolivia', 'bonneville power administration', 'bosnia', 'boston', 'botswana', 'brazil', 'bridgeport', 'brunei', 'bulgaria', 'bureau of alcohol, tobacco, firearms and explosives', 'bureau of consular affairs', 'bureau of economic analysis', 'bureau of engraving and printing', 'bureau of indian affairs', 'bureau of industry and security', 'bureau of international labor affairs', 'bureau of justice statistics', 'bureau of labor statistics', 'bureau of land management', 'bureau of ocean energy management', 'bureau of prisons', 'bureau of reclamation', 'bureau of safety and environmental enforcement', 'bureau of the fiscal service', 'bureau of transportation statistics', 'burkina faso', 'burlington', 'burma', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'canadian', 'census bureau', 'center for food safety and applied nutrition', 'center for nutrition policy and promotion', 'centers for disease control and prevention', 'centers for medicare and medicaid services', 'central african republic', 'central command', 'chad', 'charleston', 'charlotte', 'cheyenne', 'chicago', 'chile', 'china', 'chinese', 'citizenship and immigration services', 'civil rights division, department of justice', 'coast guard', 'college of information and cyberspace', 'colombia', 'columbia', 'columbus', 'commission on international religious freedom', 'community oriented policing services', 'comoros', 'computer emergency readiness team', 'concord', 'congo', 'congress', 'congressman', 'costa rica', 'cote d\'ivoire', 'côte d\'ivoire', 'council of economic advisers', 'council on environmental quality', 'court services and offender supervision agency for the district of columbia', 'croatia', 'cuba', 'customs and border protection', 'cyber command', 'cybersecurity and infrastructure security agency', 'cyprus', 'czech republic', 'czechia', 'defense acquisition university', 'defense advanced research projects agency', 'defense commissary agency', 'defense contract audit agency', 'defense contract management agency', 'defense counterintelligence and security agency', 'defense finance and accounting service', 'defense health agency', 'defense information systems agency', 'defense intelligence agency', 'defense logistics agency', 'defense security cooperation agency', 'defense technical information center', 'defense threat reduction agency', 'democratic republic of the congo', 'denmark', 'denver', 'department of agriculture', 'department of commerce', 'department of defense', 'department of education', 'department of energy', 'department of health and human services', 'department of homeland security', 'department of housing and urban development', 'department of justice', 'department of labor', 'department of state', 'department of the interior', 'department of the treasury', 'department of transportation', 'department of veterans affairs', 'des moines', 'detroit', 'director of national intelligence', 'director of the office of management and budget', 'director of the office of science and technology policy', 'director', 'djibouti', 'dominica', 'dominican republic', 'dover', 'drug enforcement administration', 'dutch', 'dwight d. eisenhower school for national security and resource strategy', 'economic development administration', 'economic growth, energy, and the environment', 'economic research service', 'ecuador', 'egypt', 'egyptian', 'el salvador', 'elder justice initiative', 'election assistance commission', 'employee benefits security administration', 'employment and training administration', 'energy information administration', 'energy star program', 'english', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'ethiopian', 'european', 'executive office for immigration review', 'fargo', 'farm credit system insurance corporation', 'farm service agency', 'federal', 'federal housing administration', 'fiji', 'filipino', 'finland', 'fire administration', 'fish and wildlife service', 'fleet forces command', 'food and drug administration', 'food and nutrition service', 'food safety and inspection service', 'foreign agricultural service', 'foreign claims settlement commission', 'forest service', 'france', 'frankfort', 'french', 'gabon', 'gambia', 'geological survey', 'georgia', 'georgian', 'german', 'germany', 'ghana', 'greece', 'greek', 'grenada', 'grenadines', 'guatemala', 'guinea', 'guyana', 'haiti', 'harrisburg', 'hartford', 'health resources and services administration', 'helena', 'herzegovina', 'holocaust memorial museum', 'holy see', 'honduras', 'honolulu', 'houston', 'hungarian', 'hungary', 'huntsville', 'iceland', 'icelanders', 'immigration and customs enforcement', 'india', 'indian', 'indianapolis', 'indo-pacific command', 'indonesia', 'indonesian', 'institute of education sciences', 'internal revenue service', 'international trade administration', 'iran', 'iraq', 'ireland', 'irish', 'israel', 'israeli', 'italian', 'italy', 'jackson', 'jacksonville', 'jamaica', 'jamaican', 'japan', 'japanese', 'jefferson city', 'joint board for the enrollment of actuaries', 'joint chiefs of staff', 'joint fire science program', 'joint forces staff college', 'joint program executive office for chemical and biological defense', 'jordan', 'jordanese', 'juneau', 'kazakhstan', 'kenya', 'kenyan', 'kiribati', 'korean', 'kuwait', 'kyrgyzstan', 'lansing', 'laos', 'las vegas', 'latvia', 'latvian', 'lebanese', 'lebanon', 'lesotho', 'liberia', 'libya', 'libyan', 'liechtenstein', 'lincoln', 'lithuania', 'lithuanian', 'little rock', 'los angeles', 'louisville', 'luxembourg', 'macedonian', 'madagascar', 'madison', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'manchester', 'marine corps', 'maritime administration', 'marshall islands', 'marshals service', 'mauritania', 'mauritius', 'mexican', 'mexico', 'micronesia', 'micronesian', 'middle east broadcasting networks', 'military academy, west point', 'military postal service agency', 'milwaukee', 'mine safety and health administration', 'minneapolis', 'minority business development agency', 'missile defense agency', 'mission to the united nations', 'moldova', 'monaco', 'mongolia', 'mongolian', 'montenegro', 'montgomery', 'montpelier', 'moroccan', 'morocco', 'mozambique', 'multifamily housing office', 'myanmar', 'namibia', 'nashville', 'national agricultural library', 'national agricultural statistics service', 'national cancer institute', 'national cemetery administration', 'national central bureau - interpol', 'national defense university', 'national flood insurance program', 'national geospatial-intelligence agency', 'national guard', 'national health information center', 'national heart, lung, and blood institute', 'national highway traffic safety administration', 'national indian gaming commission', 'national institute of arthritis, musculoskeletal and skin diseases', 'national institute of corrections', 'national institute of food and agriculture', 'national institute of justice', 'national institute of mental health', 'national institute of occupational safety and health', 'national institute of standards and technology', 'national institutes of health', 'national intelligence university', 'national interagency fire center', 'national laboratories', 'national nuclear security administration', 'national ocean service', 'national oceanic and atmospheric administration', 'national park service', 'national passport information center', 'national pesticide information center', 'national prevention information network', 'national reconnaissance office', 'national security agency', 'national security council', 'national technical information service', 'national telecommunications and information administration', 'national war college', 'national weather service', 'natural resources conservation service', 'nauru', 'nepal', 'nepalese', 'netherlands', 'nevis', 'new orleans', 'new zealand', 'newark', 'nicaragua', 'niger', 'nigeria', 'nigerian', 'noaa fisheries', 'north america', 'north korea', 'north macedonia', 'northern command', 'norway', 'norwegian', 'oak ridge national laboratory', 'occupational safety and health administration', 'office for civil rights, department of education', 'office for civil rights, department of health and human services', 'office of career, technical, and adult education', 'office of child support enforcement', 'office of community planning and development', 'office of cuba broadcasting', 'office of disability employment policy', 'office of economic adjustment', 'office of elementary and secondary education', 'office of environmental management', 'office of fair housing and equal opportunity', 'office of fossil energy', 'office of housing', 'office of immigrant and employee rights', 'office of investor education and advocacy', 'office of justice programs', 'office of juvenile justice and delinquency prevention', 'office of lead hazard control and healthy homes', 'office of management and budget', 'office of manufactured housing programs', 'office of minority health', 'office of national drug control policy', 'office of natural resources revenue', 'office of nuclear energy', 'office of policy development and research', 'office of postsecondary education', 'office of refugee resettlement', 'office of science and technology policy', 'office of scientific and technical information', 'office of servicemember affairs', 'office of special education and rehabilitative services', 'office of surface mining, reclamation and enforcement', 'office of the assistant secretary for research and technology', 'office of the comptroller of the currency', 'office of the federal register', 'office of the pardon attorney', 'office of the president', 'office of the united states trade representative', 'office of the vice president', 'office of violence against women', 'olympia', 'omaha', 'oman', 'pakistan', 'pakistani', 'palau', 'palestine state', 'panama', 'papua new guinea', 'paraguay', 'parole commission', 'patent and trademark office', 'pentagon force protection agency', 'peru', 'philadelphia', 'philippines', 'phoenix', 'pierre', 'pipeline and hazardous materials safety administration', 'poland', 'polish', 'political affairs', 'portland', 'portugal', 'portuguese', 'postal inspection service', 'power administrations', 'president', 'pretrial services agency for the district of columbia', 'principe', 'providence', 'public and indian housing', 'public diplomacy and public affairs', 'qatar', 'radio free asia', 'radio free europe and radio liberty', 'raleigh', 'rehabilitation services administration', 'richmond', 'risk management agency', 'romania', 'romanian', 'rural business and cooperative programs', 'rural development', 'rural housing service', 'rural utilities service', 'russia', 'russian', 'rwanda', 'sacramento', 'saint kitts', 'saint lawrence seaway development corporation', 'saint lucia', 'saint vincent and the grenadines', 'salem', 'samoa', 'samoan', 'san marino', 'santa fe', 'sao tome and principe', 'saudi arabia', 'science office', 'seafood inspection program', 'seattle', 'secret service', 'secretary', 'senate', 'senator', 'senegal', 'serbia', 'serbian', 'seychelles', 'sierra leone', 'singapore', 'sioux falls', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'somalian', 'south africa', 'south america', 'south korea', 'south sudan', 'southeastern power administration', 'southern command', 'southwestern power administration', 'space command', 'spain', 'spanish', 'springfield', 'sri lanka', 'st. paul', 'strategic command', 'substance abuse and mental health services administration', 'sudan', 'sudanese', 'suriname', 'swaziland', 'sweden', 'swiss', 'switzerland', 'syria', 'syrian', 'tajikistan', 'tallahassee', 'tanzania', 'taxpayer advocacy panel', 'thailand', 'timor-leste', 'tobago', 'togo', 'tonga', 'topeka', 'trade representative', 'transportation command', 'transportation security administration', 'trenton', 'trinidad', 'trinidad and tobago', 'trustee program', 'tunisia', 'tunisian', 'turk', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ugandan', 'ukraine', 'ukranian', 'unified combatant commands', 'uniformed services university of the health sciences', 'united arab emirates', 'united kingdom', 'united state', 'united State', 'United state', 'united states', 'united States', 'United states', 'uruguay', 'uzbekistan', 'vanuatu', 'vegas', 'venezuela', 'venezuelan', 'veterans benefits administration', 'veterans health administration', 'veterans\' employment and training service', 'vietnam', 'vietnamese', 'virginia beach', 'voice of america', 'wage and hour division', 'washington headquarters services', 'weights and measures division', 'western area power administration', 'wichita', 'wilmington', 'women\'s bureau', 'yemen', 'zambia', 'zambian', 'zimbabwe', 'the commissioner', 'commissioner', 'comptroller general', 'Comptroller general'];

  commonErrors.sort(function (a, b) {
    return b.split(" ").length - a.split(" ").length;
  });

  for (const error of commonErrors) {
    temp = temp.replace(new RegExp(`\\b${error}\\b`, "g"), `<mark style="background-color: #ef5350;">${error}</mark>`);
  }

  const amnotesCommonErrorsWithWordBoundary = ['of the in the', 'in the of the', 'in intro', 'in introductory', 'a the', 'inthe', 'ofthe', 'the in', 'in the in the', 'the of', 'of in', 'in of', 'of the of the', 'former in', 'of through', 'of designation', 'added and', 'deleted and'];

  amnotesCommonErrorsWithWordBoundary.sort(function (a, b) {
    return b.split(" ").length - a.split(" ").length;
  });

  for (const error of amnotesCommonErrorsWithWordBoundary) {
    temp = temp.replace(new RegExp(`\\b${error}\\b`, "g"), `<mark style="background-color: #ef5350;">${error}</mark>`);
  }

  const amnotesCommonErrorsNoWordBoundary = ['introductory language in', 'concluding language in', 'rewrote, which formerly read', 'redesignated through', 'deleted former first', 'deleted former second', 'deleted former third', 'deleted former fourth', 'deleted former fifth', 'deleted former sixth', 'formers', 'USCS0', 'USCS1', 'USCS2', 'USCS3', 'USCS4', 'USCS5', 'USCS6', 'USCS7', 'USCS8', 'USCS9', 'USCS 0', 'USCS 1', 'USCS 2', 'USCS 3', 'USCS 4', 'USCS 5', 'USCS 6', 'USCS 7', 'USCS 8', 'USCS 9', 'which formerly read a', 'which formerly read b', 'which formerly read c', 'which formerly read d', 'which formerly read e', 'which formerly read f', 'which formerly read g', 'which formerly read h', 'which formerly read i', 'which formerly read j', 'which formerly read k', 'which formerly read l', 'which formerly read m', 'which formerly read n', 'which formerly read o', 'which formerly read p', 'which formerly read q', 'which formerly read r', 'which formerly read s', 'which formerly read t', 'which formerly read u', 'which formerly read v', 'which formerly read w', 'which formerly read x', 'which formerly read y', 'which formerly read z', 'which formerly read 0', 'which formerly read 1', 'which formerly read 2', 'which formerly read 3', 'which formerly read 4', 'which formerly read 5', 'which formerly read 6', 'which formerly read 7', 'which formerly read 8', 'which formerly read 9', 'which read a', 'which read b', 'which read c', 'which read d', 'which read e', 'which read f', 'which read g', 'which read h', 'which read i', 'which read j', 'which read k', 'which read l', 'which read m', 'which read n', 'which read o', 'which read p', 'which read q', 'which read r', 'which read s', 'which read t', 'which read u', 'which read v', 'which read w', 'which read x', 'which read y', 'which read z', 'which read 0', 'which read 1', 'which read 2', 'which read 3', 'which read 4', 'which read 5', 'which read 6', 'which read 7', 'which read 8', 'which read 9', 'in section heading', 'and; and'];

  amnotesCommonErrorsNoWordBoundary.sort(function (a, b) {
    return b.split(" ").length - a.split(" ").length;
  });

  for (const error of amnotesCommonErrorsNoWordBoundary) {
    temp = temp.replace(new RegExp(`${error}`, "g"), `<mark style="background-color: #ef5350;">${error}</mark>`);
  }


  temp = temp

    .replaceAll('< ', '<')
    .replaceAll(' >', '>')
    .replaceAll('>  <', '><')
    .replaceAll('> <', '><')

    .replaceAll('<annot:annotationLevel>', '<ul style="list-style-type:none;">')
    .replaceAll('</annot:annotationLevel>', '</ul>')
    .replaceAll('<annot:body><p>', '<li>')
    .replaceAll('</p></annot:body>', '</li>')

    .replaceAll('<lawTextComponent>', '<lawTextComponent>')
    .replaceAll('<lawTextComponent>', '<ul style="list-style-type:none;"><li>')
    .replaceAll('</lawTextComponent>', '</li></ul>')
    .replaceAll('<heading>', '<span><strong>')
    .replaceAll('<designator', '<span')
    .replaceAll('<body', '<span')
    .replaceAll('<p>', '<span> ')
    .replaceAll('</heading>', '</strong></span>')
    .replaceAll('</designator>', '</span>')
    .replaceAll('</body>', '</span>')
    .replaceAll('</p>', '</span>')
    .replaceAll('<title>', '<span> ')
    .replaceAll('</title>', '</span>')

    .replace(/\band part AA\b/g, '<mark style="background-color: #ccddff;">and part AA</mark>')
    .replace(/\band part BB\b/g, '<mark style="background-color: #ccddff;">and part BB</mark>')
    .replace(/\band part CC\b/g, '<mark style="background-color: #ccddff;">and part CC</mark>')
    .replace(/\band part DD\b/g, '<mark style="background-color: #ccddff;">and part DD</mark>')
    .replace(/\band part EE\b/g, '<mark style="background-color: #ccddff;">and part EE</mark>')
    .replace(/\band part FF\b/g, '<mark style="background-color: #ccddff;">and part FF</mark>')
    .replace(/\band part GG\b/g, '<mark style="background-color: #ccddff;">and part GG</mark>')
    .replace(/\band part HH\b/g, '<mark style="background-color: #ccddff;">and part HH</mark>')
    .replace(/\band part II\b/g, '<mark style="background-color: #ccddff;">and part II</mark>')
    .replace(/\band part JJ\b/g, '<mark style="background-color: #ccddff;">and part JJ</mark>')
    .replace(/\band part KK\b/g, '<mark style="background-color: #ccddff;">and part KK</mark>')
    .replace(/\band part LL\b/g, '<mark style="background-color: #ccddff;">and part LL</mark>')
    .replace(/\band part MM\b/g, '<mark style="background-color: #ccddff;">and part MM</mark>')
    .replace(/\band part NN\b/g, '<mark style="background-color: #ccddff;">and part NN</mark>')
    .replace(/\band part OO\b/g, '<mark style="background-color: #ccddff;">and part OO</mark>')
    .replace(/\band part PP\b/g, '<mark style="background-color: #ccddff;">and part PP</mark>')
    .replace(/\band part QQ\b/g, '<mark style="background-color: #ccddff;">and part QQ</mark>')
    .replace(/\band part RR\b/g, '<mark style="background-color: #ccddff;">and part RR</mark>')
    .replace(/\band part SS\b/g, '<mark style="background-color: #ccddff;">and part SS</mark>')
    .replace(/\band part TT\b/g, '<mark style="background-color: #ccddff;">and part TT</mark>')
    .replace(/\band part UU\b/g, '<mark style="background-color: #ccddff;">and part UU</mark>')
    .replace(/\band part VV\b/g, '<mark style="background-color: #ccddff;">and part VV</mark>')
    .replace(/\band part WW\b/g, '<mark style="background-color: #ccddff;">and part WW</mark>')
    .replace(/\band part XX\b/g, '<mark style="background-color: #ccddff;">and part XX</mark>')
    .replace(/\band part YY\b/g, '<mark style="background-color: #ccddff;">and part YY</mark>')
    .replace(/\band part ZZ\b/g, '<mark style="background-color: #ccddff;">and part ZZ</mark>')
    .replace(/\bor part AA\b/g, '<mark style="background-color: #ccddff;">or part AA</mark>')
    .replace(/\bor part BB\b/g, '<mark style="background-color: #ccddff;">or part BB</mark>')
    .replace(/\bor part CC\b/g, '<mark style="background-color: #ccddff;">or part CC</mark>')
    .replace(/\bor part DD\b/g, '<mark style="background-color: #ccddff;">or part DD</mark>')
    .replace(/\bor part EE\b/g, '<mark style="background-color: #ccddff;">or part EE</mark>')
    .replace(/\bor part FF\b/g, '<mark style="background-color: #ccddff;">or part FF</mark>')
    .replace(/\bor part GG\b/g, '<mark style="background-color: #ccddff;">or part GG</mark>')
    .replace(/\bor part HH\b/g, '<mark style="background-color: #ccddff;">or part HH</mark>')
    .replace(/\bor part II\b/g, '<mark style="background-color: #ccddff;">or part II</mark>')
    .replace(/\bor part JJ\b/g, '<mark style="background-color: #ccddff;">or part JJ</mark>')
    .replace(/\bor part KK\b/g, '<mark style="background-color: #ccddff;">or part KK</mark>')
    .replace(/\bor part LL\b/g, '<mark style="background-color: #ccddff;">or part LL</mark>')
    .replace(/\bor part MM\b/g, '<mark style="background-color: #ccddff;">or part MM</mark>')
    .replace(/\bor part NN\b/g, '<mark style="background-color: #ccddff;">or part NN</mark>')
    .replace(/\bor part OO\b/g, '<mark style="background-color: #ccddff;">or part OO</mark>')
    .replace(/\bor part PP\b/g, '<mark style="background-color: #ccddff;">or part PP</mark>')
    .replace(/\bor part QQ\b/g, '<mark style="background-color: #ccddff;">or part QQ</mark>')
    .replace(/\bor part RR\b/g, '<mark style="background-color: #ccddff;">or part RR</mark>')
    .replace(/\bor part SS\b/g, '<mark style="background-color: #ccddff;">or part SS</mark>')
    .replace(/\bor part TT\b/g, '<mark style="background-color: #ccddff;">or part TT</mark>')
    .replace(/\bor part UU\b/g, '<mark style="background-color: #ccddff;">or part UU</mark>')
    .replace(/\bor part VV\b/g, '<mark style="background-color: #ccddff;">or part VV</mark>')
    .replace(/\bor part WW\b/g, '<mark style="background-color: #ccddff;">or part WW</mark>')
    .replace(/\bor part XX\b/g, '<mark style="background-color: #ccddff;">or part XX</mark>')
    .replace(/\bor part YY\b/g, '<mark style="background-color: #ccddff;">or part YY</mark>')
    .replace(/\bor part ZZ\b/g, '<mark style="background-color: #ccddff;">or part ZZ</mark>')
    .replace(/\bpart AA\b/g, '<mark style="background-color: #ccddff;">part AA</mark>')
    .replace(/\bpart BB\b/g, '<mark style="background-color: #ccddff;">part BB</mark>')
    .replace(/\bpart CC\b/g, '<mark style="background-color: #ccddff;">part CC</mark>')
    .replace(/\bpart DD\b/g, '<mark style="background-color: #ccddff;">part DD</mark>')
    .replace(/\bpart EE\b/g, '<mark style="background-color: #ccddff;">part EE</mark>')
    .replace(/\bpart FF\b/g, '<mark style="background-color: #ccddff;">part FF</mark>')
    .replace(/\bpart GG\b/g, '<mark style="background-color: #ccddff;">part GG</mark>')
    .replace(/\bpart HH\b/g, '<mark style="background-color: #ccddff;">part HH</mark>')
    .replace(/\bpart II\b/g, '<mark style="background-color: #ccddff;">part II</mark>')
    .replace(/\bpart JJ\b/g, '<mark style="background-color: #ccddff;">part JJ</mark>')
    .replace(/\bpart KK\b/g, '<mark style="background-color: #ccddff;">part KK</mark>')
    .replace(/\bpart LL\b/g, '<mark style="background-color: #ccddff;">part LL</mark>')
    .replace(/\bpart MM\b/g, '<mark style="background-color: #ccddff;">part MM</mark>')
    .replace(/\bpart NN\b/g, '<mark style="background-color: #ccddff;">part NN</mark>')
    .replace(/\bpart OO\b/g, '<mark style="background-color: #ccddff;">part OO</mark>')
    .replace(/\bpart PP\b/g, '<mark style="background-color: #ccddff;">part PP</mark>')
    .replace(/\bpart QQ\b/g, '<mark style="background-color: #ccddff;">part QQ</mark>')
    .replace(/\bpart RR\b/g, '<mark style="background-color: #ccddff;">part RR</mark>')
    .replace(/\bpart SS\b/g, '<mark style="background-color: #ccddff;">part SS</mark>')
    .replace(/\bpart TT\b/g, '<mark style="background-color: #ccddff;">part TT</mark>')
    .replace(/\bpart UU\b/g, '<mark style="background-color: #ccddff;">part UU</mark>')
    .replace(/\bpart VV\b/g, '<mark style="background-color: #ccddff;">part VV</mark>')
    .replace(/\bpart WW\b/g, '<mark style="background-color: #ccddff;">part WW</mark>')
    .replace(/\bpart XX\b/g, '<mark style="background-color: #ccddff;">part XX</mark>')
    .replace(/\bpart YY\b/g, '<mark style="background-color: #ccddff;">part YY</mark>')
    .replace(/\bpart ZZ\b/g, '<mark style="background-color: #ccddff;">part ZZ</mark>')
    .replace(/\band part A\b/g, '<mark style="background-color: #ccddff;">and part A</mark>')
    .replace(/\band part B\b/g, '<mark style="background-color: #ccddff;">and part B</mark>')
    .replace(/\band part C\b/g, '<mark style="background-color: #ccddff;">and part C</mark>')
    .replace(/\band part D\b/g, '<mark style="background-color: #ccddff;">and part D</mark>')
    .replace(/\band part E\b/g, '<mark style="background-color: #ccddff;">and part E</mark>')
    .replace(/\band part F\b/g, '<mark style="background-color: #ccddff;">and part F</mark>')
    .replace(/\band part G\b/g, '<mark style="background-color: #ccddff;">and part G</mark>')
    .replace(/\band part H\b/g, '<mark style="background-color: #ccddff;">and part H</mark>')
    .replace(/\band part I\b/g, '<mark style="background-color: #ccddff;">and part I</mark>')
    .replace(/\band part J\b/g, '<mark style="background-color: #ccddff;">and part J</mark>')
    .replace(/\band part K\b/g, '<mark style="background-color: #ccddff;">and part K</mark>')
    .replace(/\band part L\b/g, '<mark style="background-color: #ccddff;">and part L</mark>')
    .replace(/\band part M\b/g, '<mark style="background-color: #ccddff;">and part M</mark>')
    .replace(/\band part N\b/g, '<mark style="background-color: #ccddff;">and part N</mark>')
    .replace(/\band part O\b/g, '<mark style="background-color: #ccddff;">and part O</mark>')
    .replace(/\band part P\b/g, '<mark style="background-color: #ccddff;">and part P</mark>')
    .replace(/\band part Q\b/g, '<mark style="background-color: #ccddff;">and part Q</mark>')
    .replace(/\band part R\b/g, '<mark style="background-color: #ccddff;">and part R</mark>')
    .replace(/\band part S\b/g, '<mark style="background-color: #ccddff;">and part S</mark>')
    .replace(/\band part T\b/g, '<mark style="background-color: #ccddff;">and part T</mark>')
    .replace(/\band part U\b/g, '<mark style="background-color: #ccddff;">and part U</mark>')
    .replace(/\band part V\b/g, '<mark style="background-color: #ccddff;">and part V</mark>')
    .replace(/\band part W\b/g, '<mark style="background-color: #ccddff;">and part W</mark>')
    .replace(/\band part X\b/g, '<mark style="background-color: #ccddff;">and part X</mark>')
    .replace(/\band part Y\b/g, '<mark style="background-color: #ccddff;">and part Y</mark>')
    .replace(/\band part Z\b/g, '<mark style="background-color: #ccddff;">and part Z</mark>')
    .replace(/\bor part A\b/g, '<mark style="background-color: #ccddff;">or part A</mark>')
    .replace(/\bor part B\b/g, '<mark style="background-color: #ccddff;">or part B</mark>')
    .replace(/\bor part C\b/g, '<mark style="background-color: #ccddff;">or part C</mark>')
    .replace(/\bor part D\b/g, '<mark style="background-color: #ccddff;">or part D</mark>')
    .replace(/\bor part E\b/g, '<mark style="background-color: #ccddff;">or part E</mark>')
    .replace(/\bor part F\b/g, '<mark style="background-color: #ccddff;">or part F</mark>')
    .replace(/\bor part G\b/g, '<mark style="background-color: #ccddff;">or part G</mark>')
    .replace(/\bor part H\b/g, '<mark style="background-color: #ccddff;">or part H</mark>')
    .replace(/\bor part I\b/g, '<mark style="background-color: #ccddff;">or part I</mark>')
    .replace(/\bor part J\b/g, '<mark style="background-color: #ccddff;">or part J</mark>')
    .replace(/\bor part K\b/g, '<mark style="background-color: #ccddff;">or part K</mark>')
    .replace(/\bor part L\b/g, '<mark style="background-color: #ccddff;">or part L</mark>')
    .replace(/\bor part M\b/g, '<mark style="background-color: #ccddff;">or part M</mark>')
    .replace(/\bor part N\b/g, '<mark style="background-color: #ccddff;">or part N</mark>')
    .replace(/\bor part O\b/g, '<mark style="background-color: #ccddff;">or part O</mark>')
    .replace(/\bor part P\b/g, '<mark style="background-color: #ccddff;">or part P</mark>')
    .replace(/\bor part Q\b/g, '<mark style="background-color: #ccddff;">or part Q</mark>')
    .replace(/\bor part R\b/g, '<mark style="background-color: #ccddff;">or part R</mark>')
    .replace(/\bor part S\b/g, '<mark style="background-color: #ccddff;">or part S</mark>')
    .replace(/\bor part T\b/g, '<mark style="background-color: #ccddff;">or part T</mark>')
    .replace(/\bor part U\b/g, '<mark style="background-color: #ccddff;">or part U</mark>')
    .replace(/\bor part V\b/g, '<mark style="background-color: #ccddff;">or part V</mark>')
    .replace(/\bor part W\b/g, '<mark style="background-color: #ccddff;">or part W</mark>')
    .replace(/\bor part X\b/g, '<mark style="background-color: #ccddff;">or part X</mark>')
    .replace(/\bor part Y\b/g, '<mark style="background-color: #ccddff;">or part Y</mark>')
    .replace(/\bor part Z\b/g, '<mark style="background-color: #ccddff;">or part Z</mark>')
    .replace(/\bpart A\b/g, '<mark style="background-color: #ccddff;">part A</mark>')
    .replace(/\bpart B\b/g, '<mark style="background-color: #ccddff;">part B</mark>')
    .replace(/\bpart C\b/g, '<mark style="background-color: #ccddff;">part C</mark>')
    .replace(/\bpart D\b/g, '<mark style="background-color: #ccddff;">part D</mark>')
    .replace(/\bpart E\b/g, '<mark style="background-color: #ccddff;">part E</mark>')
    .replace(/\bpart F\b/g, '<mark style="background-color: #ccddff;">part F</mark>')
    .replace(/\bpart G\b/g, '<mark style="background-color: #ccddff;">part G</mark>')
    .replace(/\bpart H\b/g, '<mark style="background-color: #ccddff;">part H</mark>')
    .replace(/\bpart I\b/g, '<mark style="background-color: #ccddff;">part I</mark>')
    .replace(/\bpart J\b/g, '<mark style="background-color: #ccddff;">part J</mark>')
    .replace(/\bpart K\b/g, '<mark style="background-color: #ccddff;">part K</mark>')
    .replace(/\bpart L\b/g, '<mark style="background-color: #ccddff;">part L</mark>')
    .replace(/\bpart M\b/g, '<mark style="background-color: #ccddff;">part M</mark>')
    .replace(/\bpart N\b/g, '<mark style="background-color: #ccddff;">part N</mark>')
    .replace(/\bpart O\b/g, '<mark style="background-color: #ccddff;">part O</mark>')
    .replace(/\bpart P\b/g, '<mark style="background-color: #ccddff;">part P</mark>')
    .replace(/\bpart Q\b/g, '<mark style="background-color: #ccddff;">part Q</mark>')
    .replace(/\bpart R\b/g, '<mark style="background-color: #ccddff;">part R</mark>')
    .replace(/\bpart S\b/g, '<mark style="background-color: #ccddff;">part S</mark>')
    .replace(/\bpart T\b/g, '<mark style="background-color: #ccddff;">part T</mark>')
    .replace(/\bpart U\b/g, '<mark style="background-color: #ccddff;">part U</mark>')
    .replace(/\bpart V\b/g, '<mark style="background-color: #ccddff;">part V</mark>')
    .replace(/\bpart W\b/g, '<mark style="background-color: #ccddff;">part W</mark>')
    .replace(/\bpart X\b/g, '<mark style="background-color: #ccddff;">part X</mark>')
    .replace(/\bpart Y\b/g, '<mark style="background-color: #ccddff;">part Y</mark>')
    .replace(/\bpart Z\b/g, '<mark style="background-color: #ccddff;">part Z</mark>')
    .replace(/\bamendments made by\b/g, '<mark style="background-color: #ccddff;">amendments made by</mark>')
    .replace(/\bamendment made by\b/g, '<mark style="background-color: #ccddff;">amendment made by</mark>')
    .replace(/\bdate of enactment of the\b/g, '<mark style="background-color: #ccddff;">date of enactment of the</mark>')
    .replace(/\bdate of enactment of this Act\b/g, '<mark style="background-color: #ccddff;">date of enactment of this Act</mark>')
    .replace(/\bdate of enactment of this title\b/g, '<mark style="background-color: #ccddff;">date of enactment of this title</mark>')
    .replace(/\bdate of enactment of this section\b/g, '<mark style="background-color: #ccddff;">date of enactment of this section</mark>')
    .replace(/\bdate of enactment of this subsection\b/g, '<mark style="background-color: #ccddff;">date of enactment of this subsection</mark>')
    .replace(/\bdate of enactment of this paragraph\b/g, '<mark style="background-color: #ccddff;">date of enactment of this paragraph</mark>')
    .replace(/\bdate of enactment of this sentence\b/g, '<mark style="background-color: #ccddff;">date of enactment of this sentence</mark>')
    .replace(/\bdate of enactment of this chapter\b/g, '<mark style="background-color: #ccddff;">date of enactment of this chapter</mark>')
    .replace(/\bdate of enactment of this subchapter\b/g, '<mark style="background-color: #ccddff;">date of enactment of this subchapter</mark>')
    .replace(/\bdate of enactment of this\b/g, '<mark style="background-color: #ccddff;">date of enactment of this</mark>')
    .replace(/\bdate of enactment of\b/g, '<mark style="background-color: #ccddff;">date of enactment of</mark>')
    .replace(/\bdate of enactment of\b/g, '<mark style="background-color: #ccddff;">date of enactment of</mark>')
    .replace(/\bdate of the enactment of this Act\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this Act</mark>')
    .replace(/\bdate of the enactment of this title\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this title</mark>')
    .replace(/\bdate of the enactment of this section\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this section</mark>')
    .replace(/\bdate of the enactment of this subsection\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this subsection</mark>')
    .replace(/\bdate of the enactment of this paragraph\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this paragraph</mark>')
    .replace(/\bdate of the enactment of this subparagraph\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this subparagraph</mark>')
    .replace(/\bdate of the enactment of this\b/g, '<mark style="background-color: #ccddff;">date of the enactment of this</mark>')
    .replace(/\bdate of the enactment of the\b/g, '<mark style="background-color: #ccddff;">date of the enactment of the</mark>')
    .replace(/\bdate of the enactment of\b/g, '<mark style="background-color: #ccddff;">date of the enactment of</mark>')
    .replace(/\bdate of the enactment\b/g, '<mark style="background-color: #ccddff;">date of the enactment</mark>')
    .replace(/\bdate of enactment\b/g, '<mark style="background-color: #ccddff;">date of enactment</mark>')
    .replace(/\benactment of this section\b/g, '<mark style="background-color: #ccddff;">enactment of this section</mark>')
    .replace(/\benactment of this title\b/g, '<mark style="background-color: #ccddff;">enactment of this title</mark>')
    .replace(/\benactment of this Act\b/g, '<mark style="background-color: #ccddff;">enactment of this Act</mark>')
    .replace(/\benactment\b/g, '<mark style="background-color: #ccddff;">enactment</mark>')
    .replace(/\bunder this title\b/g, '<mark style="background-color: #ccddff;">under this title</mark>')
    .replace(/\bthis title\b/g, '<mark style="background-color: #ccddff;">this title</mark>')
    .replace(/\bof this title\b/g, '<mark style="background-color: #ccddff;">of this title</mark>')
    .replace(/\btitles\b/g, '<mark style="background-color: #ccddff;">titles</mark>')
    .replace(/\btitle\b/g, '<mark style="background-color: #ccddff;">title</mark>')
    .replace(/\bunder this subtitle\b/g, '<mark style="background-color: #ccddff;">under this subtitle</mark>')
    .replace(/\bof this subtitle\b/g, '<mark style="background-color: #ccddff;">of this subtitle</mark>')
    .replace(/\bthis substitle\b/g, '<mark style="background-color: #ccddff;">this substitle</mark>')
    .replace(/\bunder sections\b/g, '<mark style="background-color: #ccddff;">under sections</mark>')
    .replace(/\bunder section\b/g, '<mark style="background-color: #ccddff;">under section</mark>')
    .replace(/\bDivision\b/g, '<mark style="background-color: #ccddff;">Division</mark>')
    .replace(/\bunder this Act\b/g, '<mark style="background-color: #ccddff;">under this Act</mark>')
    .replace(/\bunder this chapter\b/g, '<mark style="background-color: #ccddff;">under this chapter</mark>')
    .replace(/\bthis chapter\b/g, '<mark style="background-color: #ccddff;">this chapter</mark>')
    .replace(/\bof this chapter\b/g, '<mark style="background-color: #ccddff;">of this chapter</mark>')
    .replace(/\bchapter\b/g, '<mark style="background-color: #ccddff;">chapter</mark>')
    .replace(/\bsubchapter\b/g, '<mark style="background-color: #ccddff;">subchapter</mark>')
    .replace(/\bunder subchapters\b/g, '<mark style="background-color: #ccddff;">under subchapters</mark>')
    .replace(/\bunder subchapter\b/g, '<mark style="background-color: #ccddff;">under subchapter</mark>')
    .replace(/\bparts\b/g, '<mark style="background-color: #ccddff;">parts</mark>')
    .replace(/\bpart\b/g, '<mark style="background-color: #ccddff;">part</mark>')
    .replace(/\bsubtitles\b/g, '<mark style="background-color: #ccddff;">subtitles</mark>')
    .replace(/\bsubtitle\b/g, '<mark style="background-color: #ccddff;">subtitle</mark>')
    .replace(/\bsections\b/g, '<mark style="background-color: #ccddff;">sections</mark>')
    .replace(/\bsection\b/g, '<mark style="background-color: #ccddff;">section</mark>')
    .replace(/\bchapters\b/g, '<mark style="background-color: #ccddff;">chapters</mark>')
    .replace(/\bthis part\b/g, '<mark style="background-color: #ccddff;">this part</mark>')
    .replace(/\bunder this part\b/g, '<mark style="background-color: #ccddff;">under this part</mark>')
    .replace(/\bsubpart\b/g, '<mark style="background-color: #ccddff;">subpart</mark>')
    .replace(/\bsubparts\b/g, '<mark style="background-color: #ccddff;">subparts</mark>')
    .replace(/\bthis subpart\b/g, '<mark style="background-color: #ccddff;">this subpart</mark>')
    .replace(/\bthis part\b/g, '<mark style="background-color: #ccddff;">this part</mark>')
    .replace(/\bof this subpart\b/g, '<mark style="background-color: #ccddff;">of this subpart</mark>')
    .replace(/\bof subparts\b/g, '<mark style="background-color: #ccddff;">of subparts</mark>')
    .replace(/\bunder subparts\b/g, '<mark style="background-color: #ccddff;">under subparts</mark>')
    .replace(/\bunder subpart\b/g, '<mark style="background-color: #ccddff;">under subpart</mark>')
    .replace(/\bor parts\b/g, '<mark style="background-color: #ccddff;">or parts</mark>')
    .replace(/\bor part\b/g, '<mark style="background-color: #ccddff;">or part</mark>')
    .replace(/\band parts\b/g, '<mark style="background-color: #ccddff;">and parts</mark>')
    .replace(/\band part\b/g, '<mark style="background-color: #ccddff;">and part</mark>')
    .replace(/\bof this Act\b/g, '<mark style="background-color: #ccddff;">of this Act</mark>')
    .replace(/\bthis Act\b/g, '<mark style="background-color: #ccddff;">this Act</mark>')
    .replace(/\bAct\b/g, '<mark style="background-color: #ccddff;">Act</mark>')
    .replace(/\bExecutive Order\b/g, '<mark style="background-color: #ccddff;">Executive Order</mark>')

    .replaceAll('under this <mark style="background-color: #ccddff;">section</mark>', '<mark style="background-color: #ccc;">under this section</mark>')
    .replaceAll('this <mark style="background-color: #ccddff;">section</mark>', '<mark style="background-color: #ccc;">this section</mark>')
    .replaceAll('This <mark style="background-color: #ccddff;">section</mark>', '<mark style="background-color: #ccc;">This section</mark>')
    .replaceAll('code of Federal Regulations', '<mark style="background-color: #ccc;">code of Federal Regulations</mark>')

    // All existing bracketed matter in []
    .replace(/\[(.*?)\]/g, '<mark style="background-color: #c8e6c9;">[$1]</mark>')
    .replaceAll(', United States Code', ', <mark style="background-color: #c8e6c9;">United States Code</mark>')
    .replaceAll(', Code of Federal Regulations', ', <mark style="background-color: #c8e6c9;">Code of Federal Regulations</mark>')
    // All (U.S.C.)
    .replace(/((\([^()]*U\.S\.C[^()]*\))(?![^<]*>))/g, '<mark style="background-color: #c8e6c9;">$1</mark>')

    .replaceAll(`  `, `<mark style="background-color: #ef5350;">&nbsp;&nbsp;</mark>`)
    .replaceAll(`   `, `<mark style="background-color: #ef5350;">&nbsp;&nbsp;&nbsp;</mark>`)

    .replaceAll(`deleted the (`, `<mark style="background-color: #ef5350;">deleted the [former] (</mark>`)
    .replaceAll(`'`, `<mark style="background-color: #ef5350;">'</mark>`)
    .replaceAll(`‘`, `<mark style="background-color: #ef5350;">‘</mark>`)
    .replaceAll(`’`, `<mark style="background-color: #ef5350;">’</mark>`)
    .replaceAll(`”.`, `<mark style="background-color: #ef5350;">”.</mark>`)
    .replaceAll(` —`, `<mark style="background-color: #ef5350;">·—</mark>`)
    .replaceAll(`—`, `<mark style="background-color: #ef5350;">—</mark>`)
    .replaceAll(`–`, `<mark style="background-color: #ef5350;">–</mark>`)
    .replaceAll(`..`, `<mark style="background-color: #ef5350;">..</mark>`)
    .replaceAll(`) (`, `)<mark style="background-color: #ef5350;"> </mark>(`)
    .replaceAll(`- `, `<mark style="background-color: #ef5350;">- </mark>`)
    .replaceAll(`.;`, `<mark style="background-color: #ef5350;">.;</mark>`)
    .replaceAll(`;.`, `<mark style="background-color: #ef5350;">;.</mark>`)
    .replaceAll(`(*)`, `<mark style="background-color: #ef5350;">(*)</mark>`)
    .replaceAll(`(*`, `<mark style="background-color: #ef5350;">(*</mark>`)
    .replaceAll(`*)`, `<mark style="background-color: #ef5350;">*)</mark>`)
    .replaceAll(`*`, `<mark style="background-color: #ef5350;">*</mark>`)
    .replaceAll(`Provided further,`, `<mark style="background-color: #ef5350;">Provided further</mark>,`)
    .replaceAll(`Provided,`, `<mark style="background-color: #ef5350;">Provided</mark>,`)

    .replaceAll('<emphasis style="italic">Provided further</emphasis>', '<em>Provided further</em>')
    .replaceAll('<emphasis style="italic">Provided</emphasis>', '<em>Provided</em>')

    // Repeated words
    .replaceAll(/\b(\w+)\s+\1\b/g, '<mark style="background-color: #ef5350;">$&</mark>')

    .replaceAll(`in(`, `<mark style="background-color: #ef5350;">in(</mark>`)
    .replaceAll(`of(`, `<mark style="background-color: #ef5350;">of(</mark>`)
    .replaceAll(`the(`, `<mark style="background-color: #ef5350;">the(</mark>`)
    .replaceAll(`)in`, `<mark style="background-color: #ef5350;">)in</mark>`)
    .replaceAll(`)of`, `<mark style="background-color: #ef5350;">)of</mark>`)
    .replaceAll(`)the`, `<mark style="background-color: #ef5350;">)the</mark>`)

  let pTagLines = temp.split('\n');
  for (let i = 0; i < pTagLines.length; i++) {
    let line = pTagLines[i];
    if (!/<p|<\/p>|<span|<\/span>|<ul|<\/ul>|<li|<\/li>|<mark|<\/mark>|<title|<\/title>/.test(line)) {
      line = '<p>' + line + '</p>';
    }
    pTagLines[i] = line;
  }
  temp = pTagLines.join('\n');

  document.querySelector('#preview-content').innerHTML = temp;
}