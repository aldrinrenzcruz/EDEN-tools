// Disable buttons when their corresponding inputs are blank
function disablBtnsIfBlank() {
    if (document.getElementById("termSearch1").value === "") {
        document.getElementById('find1').disabled = true;
    } else {
        document.getElementById('find1').disabled = false;
    }
    if (document.getElementById("termReplace1").value === "") {
        document.getElementById('findAndReplace1').disabled = true;
        document.getElementById('replaceAll1').disabled = true;
    } else {
        document.getElementById('findAndReplace1').disabled = false;
        document.getElementById('replaceAll1').disabled = false;
    }

    if (document.getElementById("termSearch3").value === "") {
        document.getElementById('find3').disabled = true;
    } else {
        document.getElementById('find3').disabled = false;
    }
    if (document.getElementById("termReplace3").value === "") {
        document.getElementById('findAndReplace3').disabled = true;
        document.getElementById('replaceAll3').disabled = true;
    } else {
        document.getElementById('findAndReplace3').disabled = false;
        document.getElementById('replaceAll3').disabled = false;
    }
}

//Trigger function onpress of Enter key when clicking inside input
var statewebactsbtn = document.getElementById("statewebactsbtn");
statewebacts = document.getElementById("statewebacts");
if (statewebacts && statewebactsbtn) {
    statewebacts.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            statewebactsbtn.click();
            e.preventDefault();
        }
    });
}

var statewebactsbtn = document.getElementById("statewebactsbtn");
statewebacts2 = document.getElementById("statewebacts2");
if (statewebacts2 && statewebactsbtn) {
    statewebacts2.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            statewebactsbtn.click();
            e.preventDefault();
        }
    });
}

var statewebsectionsbtn = document.getElementById("statewebsectionsbtn");
statewebsections = document.getElementById("statewebsections");
if (statewebsections && statewebsectionsbtn) {
    statewebsections.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            statewebsectionsbtn.click();
            e.preventDefault();
        }
    });
}

var statewebsectionsbtn = document.getElementById("statewebsectionsbtn");
statewebsections2 = document.getElementById("statewebsections2");
if (statewebsections2 && statewebsectionsbtn) {
    statewebsections2.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            statewebsectionsbtn.click();
            e.preventDefault();
        }
    });
}

var posnonposbtn = document.getElementById("posnonposbtn");
posvnonposinput = document.getElementById("posvnonposinput");
if (posvnonposinput && posnonposbtn) {
    posvnonposinput.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            posnonposbtn.click();
            e.preventDefault();
        }
    });
}

var table3abtn = document.getElementById("table3abtn");
table3b1 = document.getElementById("table3b1");
if (table3b1 && table3abtn) {
    table3b1.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            table3abtn.click();
            e.preventDefault();
        }
    });
}

var table3abtn = document.getElementById("table3abtn");
table3a = document.getElementById("table3a");
if (table3a && table3abtn) {
    table3a.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            table3abtn.click();
            e.preventDefault();
        }
    });
}

var table3b1btn = document.getElementById("table3b1btn");
table3b2 = document.getElementById("table3b2");
if (table3b2 && table3b1btn) {
    table3b2.addEventListener("keypress", function (e) {
        if (event.key === 'Enter') {
            table3b1btn.click();
            e.preventDefault();
        }
    });
}

function paragraphWrap() {
    var lines = $('#textarea1').val().split('\n');
    var newLines = '';
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] !== "" && !lines[i].includes('<p>“')) {
            newLines += '<p>“' + lines[i] + '</p>';
            newLines += '\n';
        } else if (lines[i] !== "") {
            lines[i] = lines[i].replace('<p>“', '');
            lines[i] = lines[i].replace('</p>', '');
            lines[i] = lines[i].replace(/(.*[^\n])/g, '<p>“' + lines[i] + '</p>');
            newLines += lines[i];
            newLines += '\n';
        }
    }
    $('.annotation-wrap').val(newLines);
}

function annotationWrap() {
    var lines = $('#textarea1').val().split('\n');
    var newLines = '';
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] !== "" && !lines[i].includes('<annot:annotationLevel><annot:body><p>“')) {
            newLines += '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>';
            newLines += '\n';
        } else if (lines[i] !== "") {
            lines[i] = lines[i].replace('<annot:annotationLevel><annot:body><p>“', '');
            lines[i] = lines[i].replace('</p></annot:body></annot:annotationLevel>', '');
            lines[i] = lines[i].replace(/(.*[^\n])/g, '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>');
            newLines += lines[i];
            newLines += '\n';
        }
    }
    $('.annotation-wrap').val(newLines);
}

//Copy input 1
function copyinput() {
    var copyText = document.getElementById("input1");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 2
function copyinput2() {
    var copyText = document.getElementById("input2");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 3
function copyinput3() {
    var copyText = document.getElementById("input3");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 4
function copyinput4() {
    var copyText = document.getElementById("input4");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 5
function copyinput5() {
    var copyText = document.getElementById("input5");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 6
function copyinput6() {
    var copyText = document.getElementById("input6");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 7
function copyinput7() {
    var copyText = document.getElementById("input7");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 8
function copyinput8() {
    var copyText = document.getElementById("input8");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 9
function copyinput9() {
    var copyText = document.getElementById("input9");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 10
function copyinput10() {
    var copyText = document.getElementById("input10");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 11
function copyinput11() {
    var copyText = document.getElementById("input11");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 12
function copyinput12() {
    var copyText = document.getElementById("am-act-intro-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 13
function copyinput13() {
    var copyText = document.getElementById("nu-act-intro-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 14 - Deleted placeholder
function copyinput14() {
    var copyText = document.getElementById("input14");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 15 - Repealed placeholder
function copyinput15() {
    var copyText = document.getElementById("input15");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 16 - Redesignated placeholder
function copyinput16() {
    var copyText = document.getElementById("input16");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Copy input 17 - unclassified bracketed
function copyinput17() {
    var copyText = document.getElementById("input17");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Bracketed Input 1 - Standard
$('#title1, #section1').bind('keypress blur', function () {
    $('#input1').val(' [' + $('#title1').val() + ' USCS § ' +
        $('#section1').val() + ']');
});

//Bracketed Input 2 - Standard with et seq.
$('#title2gg, #section2gg').bind('keypress blur', function () {
    $('#input2').val(' [' + $('#title2gg').val() + ' USCS §§ ' +
        $('#section2gg').val() + ' et seq.]');
});

//Bracketed Input 3 - date of enactment
$('#month3, #day3, #year3').bind('keypress blur', function () {
    $('#input3').val(' [enacted ' + $('#month3').val() + ' ' +
        $('#day3').val() + ', ' +
        $('#year3').val() + ']');
});

//Bracketed Input 4 - OR - 2 sections
$('#title4, #section4, #section4a').bind('keypress blur', function () {
    $('#input4').val(' [' + $('#title4').val() + ' USCS § ' +
        $('#section4').val() + ' or ' +
        $('#section4a').val() + ']');
});

//Bracketed Input 5 - OR - 3 sections
$('#title5, #section5, #section5a, #section5b').bind('keypress blur', function () {
    $('#input5').val(' [' + $('#title5').val() + ' USCS § ' +
        $('#section5').val() + ', ' +
        $('#section5a').val() + ' or ' +
        $('#section5b').val() + ']');
});

//Bracketed Input 6 - OR - et seq
$('#title6, #section6, #section6a').bind('keypress blur', function () {
    $('#input6').val(' [' + $('#title6').val() + ' USCS §§ ' +
        $('#section6').val() + ' et seq. or ' +
        $('#section6a').val() + ' et seq.]');
});

//Bracketed Input 7 - AND - 2 sections
$('#title7, #section7, #section7a').bind('keypress blur', function () {
    $('#input7').val(' [' + $('#title7').val() + ' USCS §§ ' +
        $('#section7').val() + ' and ' +
        $('#section7a').val() + ']');
});

//Bracketed Input 8 - AND - 3 sections
$('#title8, #section8, #section8a, #section8b').bind('keypress blur', function () {
    $('#input8').val(' [' + $('#title8').val() + ' USCS §§ ' +
        $('#section8').val() + ', ' +
        $('#section8a').val() + ' and ' +
        $('#section8b').val() + ']');
});

//Bracketed Input 9 - AND - et seq
$('#title9, #section9, #section9a').bind('keypress blur', function () {
    $('#input9').val(' [' + $('#title9').val() + ' USCS §§ ' +
        $('#section9').val() + ' et seq. and ' +
        $('#section9a').val() + ' et seq.]');
});

//Bracketed Input 10 - Standard - 2 sections
$('#title10, #section10, #section10a').bind('keypress blur', function () {
    $('#input10').val(' [' + $('#title10').val() + ' USCS §§ ' +
        $('#section10').val() + ' and ' +
        $('#section10a').val() + ']');
});

//Bracketed Input 11 - Standard - 3 sections
$('#title11, #section11, #section11a, #section11b').bind('keypress blur', function () {
    $('#input11').val(' [' + $('#title11').val() + ' USCS §§ ' +
        $('#section11').val() + ', ' +
        $('#section11a').val() + ', and ' +
        $('#section11b').val() + ']');
});

//Amnote Annotation Level Builder
$('#month, #day, #year, #pl1, #pl2, #div, #title, #subtitle, #chapter, #subchapter, #section, #stat1, #stat2').bind('keypress blur', function () {

    function amactintrodate() {
        var m = $('#month').val();
        var d = $('#day').val();
        var y = $('#year').val();
        if (m && d && y) {
            return 'Act ' + m + ' ' + d + ', ' + y;
        }
    }
    function amactintropla() {
        var p1 = $('#pl1').val();
        var p2 = $('#pl2').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function amactintrostats() {
        var s1 = $('#stat1').val();
        var s2 = $('#stat2').val();
        if (s1 && s2) {
            return s1 + ' Stat. ' + s2 + ', provides:';
        }
    }
    function amactintroGetValue(element, prefix = '') {
        var value = $(element).val();
        if (value) {
            return prefix + value;
        }
    }
    $('#am-act-intro-result').val([
        amactintrodate(),
        amactintropla(),
        amactintroGetValue('#div', 'Div '),
        amactintroGetValue('#title', 'Title '),
        amactintroGetValue('#subtitle', 'Subtitle '),
        amactintroGetValue('#chapter', 'Ch '),
        amactintroGetValue('#subchapter', 'Subch '),
        amactintroGetValue('#section', '§ '),
        amactintrostats()
    ].filter(Boolean).join(', '));
});

//Noted Under Act Intro
$('#month2, #day2, #year2, #pl1a, #pl2a, #div2, #title2, #subtitle2, #chapter2, #subchapter2, #section2, #stat1a, #stat2a').bind('keypress blur', function () {

    function nuactintrodate() {
        var m = $('#month2').val();
        var d = $('#day2').val();
        var y = $('#year2').val();
        if (m && d && y) {
            return 'Act ' + m + ' ' + d + ', ' + y;
        }
    }
    function nuactintropla() {
        var p1 = $('#pl1a').val();
        var p2 = $('#pl2a').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function nuactintrostats() {
        var s1 = $('#stat1a').val();
        var s2 = $('#stat2a').val();
        if (s1 && s2) {
            return s1 + ' Stat. ' + s2 + ', provides:';
        }
    }
    function nuactintroGetValue(element, prefix = '') {
        var value = $(element).val();
        if (value) {
            return prefix + value;
        }
    }
    $('#nu-act-intro-result').val([
        nuactintrodate(),
        nuactintropla(),
        nuactintroGetValue('#div2', 'Div '),
        nuactintroGetValue('#title2', 'Title '),
        nuactintroGetValue('#subtitle2', 'Subtitle '),
        nuactintroGetValue('#chapter2', 'Ch '),
        nuactintroGetValue('#subchapter2', 'Subch '),
        nuactintroGetValue('#section2', '§ '),
        nuactintrostats()
    ].filter(Boolean).join(', '));
});

//Added HC Positive
$('#month004, #day004, #year004, #pl1004, #pl2004, #div004, #title004, #subtitle004, #part004, #chapter004, #subchapter004, #section004, #stat004, #page004').bind('keypress blur', function () {

    function addedhcpositivedate() {
        var m = $('#month004').val();
        var d = $('#day004').val();
        var y = $('#year004').val();
        if (m && d && y) {
            return 'Added ' + m + ' ' + d + ', ' + y;
        }
    }
    function addedhcpositivepla() {
        var p1 = $('#pl1004').val();
        var p2 = $('#pl2004').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function addedhcpositivestats() {
        var s1 = $('#stat004').val();
        var s2 = $('#page004').val();
        if (s1 && s2) {
            return s1 + ' Stat. ' + s2;
        }
    }
    function addedhcpositiveGetValue(element, prefix = '') {
        var value = $(element).val();
        if (value) {
            return prefix + value;
        }
    }
    $('#added-hc-positive-result').val([
        addedhcpositivedate(),
        addedhcpositivepla(),
        addedhcpositiveGetValue('#div004', 'Div '),
        addedhcpositiveGetValue('#title004', 'Title '),
        addedhcpositiveGetValue('#subtitle004', 'Subtitle '),
        addedhcpositiveGetValue('#part004', 'Part '),
        addedhcpositiveGetValue('#chapter004', 'Ch '),
        addedhcpositiveGetValue('#subchapter004', 'Subch '),
        addedhcpositiveGetValue('#section004', '§ '),
        addedhcpositivestats()
    ].filter(Boolean).join(', '));
});

//Copy input 004 - Added HC Positive
function copyinput004() {
    var copyText = document.getElementById("added-hc-positive-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Added HC Positive - Clear
function ClearFields004() {

    document.getElementById("added-hc-positive-result").value = "";
    document.getElementById("month004").value = "";
    document.getElementById("day004").value = "";
    document.getElementById("year004").value = "";
    document.getElementById("pl1004").value = "";
    document.getElementById("pl2004").value = "";
    document.getElementById("div004").value = "";
    document.getElementById("title004").value = "";
    document.getElementById("subtitle004").value = "";
    document.getElementById("part004").value = "";
    document.getElementById("chapter004").value = "";
    document.getElementById("subchapter004").value = "";
    document.getElementById("section004").value = "";
    document.getElementById("stat004").value = "";
    document.getElementById("page004").value = "";
}

//Added HC Scenario 1
$('#month005a, #day005a, #year005a, #pl1005a, #pl2005a, #div005a, #title005a, #subtitle005a, #chapter005a, #subchapter005a, #section005a, #month005b, #day005b, #year005b, #pl1005b, #pl2005b, #div005b, #title005b, #subtitle005b, #chapter005b, #subchapter005b, #section005b, #stat005b, #page005b').bind('keypress blur', function () {

    function addedhcs1olddate() {
        var m = $('#month005a').val();
        var d = $('#day005a').val();
        var y = $('#year005a').val();
        if (m && d && y) {
            return m + ' ' + d + ', ' + y;
        }
    }
    function addedhcs1oldpla() {
        var p1 = $('#pl1005a').val();
        var p2 = $('#pl2005a').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function addedhcs1newdate() {
        var m = $('#month005b').val();
        var d = $('#day005b').val();
        var y = $('#year005b').val();
        if (m && d && y) {
            return 'as added ' + m + ' ' + d + ', ' + y;
        }
    }
    function addedhcs1newpla() {
        var p1 = $('#pl1005b').val();
        var p2 = $('#pl2005b').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function addedhcs1stats() {
        var s1 = $('#stat005b').val();
        var s2 = $('#page005b').val();
        if (s1 && s2) {
            return s1 + ' Stat. ' + s2;
        }
    }
    function addedhcs1GetValue(element, prefix = '') {
        var value = $(element).val();
        if (value) {
            return prefix + value;
        }
    }
    $('#added-hc-scenario-1-result').val([
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
    ].filter(Boolean).join(', '));
});

//Copy input 005a - Added HC Scenario 1
function copyinput005a() {
    var copyText = document.getElementById("added-hc-scenario-1-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Added HC Scenario 1 - Clear
function ClearFields005a() {
    document.getElementById("added-hc-scenario-1-result").value = "";
    document.getElementById("month005a").value = "";
    document.getElementById("day005a").value = "";
    document.getElementById("year005a").value = "";
    document.getElementById("pl1005a").value = "";
    document.getElementById("pl2005a").value = "";
    document.getElementById("div005a").value = "";
    document.getElementById("title005a").value = "";
    document.getElementById("subtitle005a").value = "";
    document.getElementById("part005a").value = "";
    document.getElementById("chapter005a").value = "";
    document.getElementById("subchapter005a").value = "";
    document.getElementById("section005a").value = "";
    document.getElementById("month005b").value = "";
    document.getElementById("day005b").value = "";
    document.getElementById("year005b").value = "";
    document.getElementById("pl1005b").value = "";
    document.getElementById("pl2005b").value = "";
    document.getElementById("div005b").value = "";
    document.getElementById("title005b").value = "";
    document.getElementById("subtitle005b").value = "";
    document.getElementById("part005b").value = "";
    document.getElementById("chapter005b").value = "";
    document.getElementById("subchapter005b").value = "";
    document.getElementById("section005b").value = "";
    document.getElementById("stat005b").value = "";
    document.getElementById("page005b").value = "";
}

//Added HC Scenario 2
$('#month006, #day006, #year006, #pl1006, #pl2006, #div006, #title006, #subtitle006, #part006, #chapter006, #subchapter006, #section006, #stat006, #page006').bind('keypress blur', function () {

    function addedhcs2date() {
        var m = $('#month006').val();
        var d = $('#day006').val();
        var y = $('#year006').val();
        if (m && d && y) {
            return m + ' ' + d + ', ' + y;
        }
    }
    function addedhcs2pla() {
        var p1 = $('#pl1006').val();
        var p2 = $('#pl2006').val();
        if (p1 && p2) {
            return 'P.L. ' + p1 + '-' + p2;
        }
    }
    function addedhcs2stats() {
        var s1 = $('#stat006').val();
        var s2 = $('#page006').val();
        if (s1 && s2) {
            return s1 + ' Stat. ' + s2;
        }
    }
    function addedhcs2statsGetValue(element, prefix = '') {
        var value = $(element).val();
        if (value) {
            return prefix + value;
        }
    }
    $('#added-hc-scenario-2-result').val([
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
    ].filter(Boolean).join(', '));
});

//Copy input 006 - Added HC Scenario 2
function copyinput006() {
    var copyText = document.getElementById("added-hc-scenario-2-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//Added HC Scenario 2 - Clear
function ClearFields006() {

    document.getElementById("added-hc-scenario-2-result").value = "";
    document.getElementById("month006").value = "";
    document.getElementById("day006").value = "";
    document.getElementById("year006").value = "";
    document.getElementById("pl1006").value = "";
    document.getElementById("pl2006").value = "";
    document.getElementById("div006").value = "";
    document.getElementById("title006").value = "";
    document.getElementById("subtitle006").value = "";
    document.getElementById("part006").value = "";
    document.getElementById("chapter006").value = "";
    document.getElementById("subchapter006").value = "";
    document.getElementById("section006").value = "";
    document.getElementById("stat006").value = "";
    document.getElementById("page006").value = "";
}

//Standard - Clear
function ClearFields1() {

    document.getElementById("title1").value = "";
    document.getElementById("section1").value = "";
    document.getElementById("input1").value = "";
}

//Standard with et seq. - Clear
function ClearFields2() {

    document.getElementById("title2gg").value = "";
    document.getElementById("section2gg").value = "";
    document.getElementById("input2").value = "";
}

//Date of enactment - Clear
function ClearFields3() {

    document.getElementById("month3").value = "";
    document.getElementById("day3").value = "";
    document.getElementById("year3").value = "";
    document.getElementById("input3").value = "";
}

//OR - 2 sections - Clear
function ClearFields4() {

    document.getElementById("title4").value = "";
    document.getElementById("section4").value = "";
    document.getElementById("section4a").value = "";
    document.getElementById("input4").value = "";
}

//OR - 3 sections - Clear
function ClearFields5() {

    document.getElementById("title5").value = "";
    document.getElementById("section5").value = "";
    document.getElementById("section5a").value = "";
    document.getElementById("section5b").value = "";
    document.getElementById("input5").value = "";
}

//OR - et seq - Clear
function ClearFields6() {

    document.getElementById("title6").value = "";
    document.getElementById("section6").value = "";
    document.getElementById("section6a").value = "";
    document.getElementById("input6").value = "";
}

//AND - 2 sections - Clear
function ClearFields7() {

    document.getElementById("title7").value = "";
    document.getElementById("section7").value = "";
    document.getElementById("section7a").value = "";
    document.getElementById("input7").value = "";
}

//AND - 3 sections - Clear
function ClearFields8() {

    document.getElementById("title8").value = "";
    document.getElementById("section8").value = "";
    document.getElementById("section8a").value = "";
    document.getElementById("section8b").value = "";
    document.getElementById("input8").value = "";
}

//AND - et seq - Clear
function ClearFields9() {

    document.getElementById("title9").value = "";
    document.getElementById("section9").value = "";
    document.getElementById("section9a").value = "";
    document.getElementById("input9").value = "";
}

//Standard - 2 sections - Clear
function ClearFields10() {

    document.getElementById("title10").value = "";
    document.getElementById("section10").value = "";
    document.getElementById("section10a").value = "";
    document.getElementById("input10").value = "";
}

//Standard - 3 sections - Clear
function ClearFields11() {

    document.getElementById("title11").value = "";
    document.getElementById("section11").value = "";
    document.getElementById("section11a").value = "";
    document.getElementById("section11b").value = "";
    document.getElementById("input11").value = "";
}

//Amnote Annotation Level Builder - Clear
function ClearFields12() {

    document.getElementById("month").value = "";
    document.getElementById("day").value = "";
    document.getElementById("year").value = "";
    document.getElementById("pl1").value = "";
    document.getElementById("pl2").value = "";
    document.getElementById("div").value = "";
    document.getElementById("title").value = "";
    document.getElementById("subtitle").value = "";
    document.getElementById("chapter").value = "";
    document.getElementById("subchapter").value = "";
    document.getElementById("section").value = "";
    document.getElementById("stat1").value = "";
    document.getElementById("stat2").value = "";
    document.getElementById("section2z").value = "";
    document.getElementById("am-act-intro-result").value = "";

}

//Noted Under Act Intro- Clear
function ClearFields13() {
    document.getElementById("month2").value = "";
    document.getElementById("day2").value = "";
    document.getElementById("year2").value = "";
    document.getElementById("pl1a").value = "";
    document.getElementById("pl2a").value = "";
    document.getElementById("div2").value = "";
    document.getElementById("title2").value = "";
    document.getElementById("subtitle2").value = "";
    document.getElementById("chapter2").value = "";
    document.getElementById("subchapter2").value = "";
    document.getElementById("section2").value = "";
    document.getElementById("stat1a").value = "";
    document.getElementById("stat2a").value = "";
    document.getElementById("nu-act-intro-result").value = "";
}

//Positive vs. Non-positive input
const posvsnonposmapper = new Map();
posvsnonposmapper.set("1", "Positive law; (1) General Provisions");
posvsnonposmapper.set("3", "Positive law; (3) The President");
posvsnonposmapper.set("4", "Positive law; (4) Flag and Seal, Seat of Government");
posvsnonposmapper.set("5", "Positive law; (5) Government Organization and Employees; Appendix");
posvsnonposmapper.set("9", "Positive law; (9) Arbitration");
posvsnonposmapper.set("10", "Positive law; (10) Armed Forces");
posvsnonposmapper.set("11", "Positive law; (11) Bankruptcy");
posvsnonposmapper.set("13", "Positive law; (13) Census");
posvsnonposmapper.set("14", "Positive law; (14) Coast Guard");
posvsnonposmapper.set("17", "Positive law; (17) Copyrights");
posvsnonposmapper.set("18", "Positive law; (18) Crimes and Criminal Procedure; Appendix");
posvsnonposmapper.set("23", "Positive law; (23) Highways");
posvsnonposmapper.set("26", "Positive law; (26) Internal Revenue Code");
posvsnonposmapper.set("28", "Positive law; (28) Judiciary and Judicial Procedure; Appendix");
posvsnonposmapper.set("31", "Positive law; (31) Money and Finance");
posvsnonposmapper.set("32", "Positive law; (32) National Guard");
posvsnonposmapper.set("35", "Positive law; (35) Patents");
posvsnonposmapper.set("36", "Positive law; (36) Patriotic and National Observances, Ceremonies, and Organizations");
posvsnonposmapper.set("37", "Positive law; (37) Pay and Allowances of the Uniformed Services");
posvsnonposmapper.set("38", "Positive law; (38) Veterans’ Benefits");
posvsnonposmapper.set("39", "Positive law; (39) Postal Service");
posvsnonposmapper.set("40", "Positive law; (40) Public Buildings, Property, and Works");
posvsnonposmapper.set("41", "Positive law; (41) Public Contracts");
posvsnonposmapper.set("44", "Positive law; (44) Public Printing and Documents");
posvsnonposmapper.set("46", "Positive law; (46) Shipping");
posvsnonposmapper.set("49", "Positive law; (49) Transportation");
posvsnonposmapper.set("51", "Positive law; (51) National and Commercial Space Programs");
posvsnonposmapper.set("54", "Positive law; (54) National Park System");
posvsnonposmapper.set("2", "Non-Positive law; (2) The Congress");
posvsnonposmapper.set("6", "Non-Positive law; (6) Domestic Security");
posvsnonposmapper.set("7", "Non-Positive law; (7) Agriculture");
posvsnonposmapper.set("8", "Non-Positive law; (8) Aliens and Nationality");
posvsnonposmapper.set("12", "Non-Positive law; (12) Banks and Banking");
posvsnonposmapper.set("15", "Non-Positive law; (15) Commerce and Trade");
posvsnonposmapper.set("16", "Non-Positive law; (16) Conservation");
posvsnonposmapper.set("19", "Non-Positive law; (19) Customs Duties");
posvsnonposmapper.set("20", "Non-Positive law; (20) Education");
posvsnonposmapper.set("21", "Non-Positive law; (21) Food and Drugs");
posvsnonposmapper.set("22", "Non-Positive law; (22) Foreign Relations and Intercourse");
posvsnonposmapper.set("24", "Non-Positive law; (24) Hospitals and Asylums");
posvsnonposmapper.set("25", "Non-Positive law; (25) Indians");
posvsnonposmapper.set("27", "Non-Positive law; (27) Intoxicating Liquors");
posvsnonposmapper.set("29", "Non-Positive law; (29) Labor");
posvsnonposmapper.set("30", "Non-Positive law; (30) Mineral Lands and Mining");
posvsnonposmapper.set("33", "Non-Positive law; (33) Navigation and Navigable Waters");
posvsnonposmapper.set("34", "Non-Positive law; (34) Crime Control and Enforcement");
posvsnonposmapper.set("42", "Non-Positive law; (42) The Public Health and Welfare");
posvsnonposmapper.set("43", "Non-Positive law; (43) Public Lands");
posvsnonposmapper.set("45", "Non-Positive law; (45) Railroads");
posvsnonposmapper.set("47", "Non-Positive law; (47) Telegraphs, Telephones, and Radiotelegraphs");
posvsnonposmapper.set("48", "Non-Positive law; (48) Territories and Insular Possessions");
posvsnonposmapper.set("50", "Non-Positive law; (50) War and National Defense");
posvsnonposmapper.set("52", "Non-Positive law; (52) Voting and Elections");
posvsnonposmapper.set("53", "Non-Positive law; (53) [Reserved]");

function positiveNonpositive() {
    const elm = document.getElementById("posvnonposinput");
    if (elm) {
        elm.value = elm.value
            .replaceAll(
                /\b\d+(?:([A-Z])\1?|d|th|st|nd)?(-[A-Z\d]+)?\b/g,
                m => posvsnonposmapper.has(m) ? posvsnonposmapper.get(m) : m
            );
    }
}

function processLawTextComponentWrap() {
    let textarea = document.getElementById("textarea1");
    textarea.select();
    textarea.value = textarea.value
        .replace(/(\n)/gm, " ")
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
    textarea.value = textarea.value
        .replaceAll(`<placeholder>(a)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="a">(a)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(b)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="b">(b)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(c)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="c">(c)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(d)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="d">(d)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(e)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="e">(e)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(f)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="f">(f)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(g)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="g">(g)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(h)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="h">(h)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(i)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="i">(i)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(j)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="j">(j)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(k)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="k">(k)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(l)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="l">(l)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(m)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="m">(m)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(n)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="n">(n)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(o)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="o">(o)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(p)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="p">(p)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(q)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="q">(q)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(r)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="r">(r)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(s)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="s">(s)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(t)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="t">(t)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(u)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="u">(u)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(v)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="v">(v)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(w)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="w">(w)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(x)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="x">(x)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(y)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="y">(y)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(z)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="z">(z)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(1)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="1">(1)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(2)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="2">(2)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(3)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="3">(3)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(4)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="4">(4)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(5)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="5">(5)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(6)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="6">(6)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(7)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="7">(7)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(8)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="8">(8)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(9)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="9">(9)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(10)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="10">(10)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(11)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="11">(11)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(12)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="12">(12)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(13)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="13">(13)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(14)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="14">(14)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(15)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="15">(15)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(16)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="16">(16)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(17)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="17">(17)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(18)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="18">(18)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(19)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="19">(19)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(20)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="20">(20)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(21)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="21">(21)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(22)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="22">(22)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(23)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="23">(23)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(24)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="24">(24)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(25)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="25">(25)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(26)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="26">(26)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(27)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="27">(27)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(28)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="28">(28)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(29)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="29">(29)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(30)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="30">(30)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(31)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="31">(31)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(32)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="32">(32)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(33)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="33">(33)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(34)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="34">(34)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(35)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="35">(35)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(36)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="36">(36)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(37)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="37">(37)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(38)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="38">(38)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(39)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="39">(39)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(40)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="40">(40)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(41)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="41">(41)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(42)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="42">(42)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(43)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="43">(43)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(44)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="44">(44)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(45)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="45">(45)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(46)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="46">(46)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(47)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="47">(47)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(48)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="48">(48)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(49)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="49">(49)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(50)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="50">(50)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(51)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="51">(51)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(52)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="52">(52)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(53)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="53">(53)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(54)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="54">(54)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(55)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="55">(55)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(56)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="56">(56)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(57)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="57">(57)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(58)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="58">(58)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(59)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="59">(59)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(60)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="60">(60)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(61)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="61">(61)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(62)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="62">(62)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(63)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="63">(63)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(64)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="64">(64)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(65)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="65">(65)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(66)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="66">(66)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(67)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="67">(67)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(68)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="68">(68)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(69)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="69">(69)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(70)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="70">(70)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(71)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="71">(71)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(72)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="72">(72)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(73)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="73">(73)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(74)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="74">(74)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(75)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="75">(75)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(76)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="76">(76)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(77)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="77">(77)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(78)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="78">(78)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(79)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="79">(79)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(80)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="80">(80)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(81)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="81">(81)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(82)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="82">(82)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(83)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="83">(83)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(84)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="84">(84)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(85)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="85">(85)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(86)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="86">(86)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(87)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="87">(87)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(88)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="88">(88)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(89)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="89">(89)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(90)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="90">(90)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(91)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="91">(91)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(92)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="92">(92)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(93)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="93">(93)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(94)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="94">(94)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(95)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="95">(95)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(96)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="96">(96)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(97)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="97">(97)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(98)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="98">(98)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(99)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="99">(99)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(100)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="100">(100)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(A)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="A">(A)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(B)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="B">(B)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(C)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="C">(C)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(D)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="D">(D)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(E)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="E">(E)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(F)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="F">(F)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(G)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="G">(G)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(H)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="H">(H)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(I)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="I">(I)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(J)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="J">(J)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(K)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="K">(K)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(L)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="L">(L)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(M)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="M">(M)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(N)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="N">(N)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(O)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="O">(O)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(P)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="P">(P)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(Q)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="Q">(Q)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(R)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="R">(R)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(S)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="S">(S)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(T)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="T">(T)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(U)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="U">(U)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(V)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="V">(V)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(W)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="W">(W)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(X)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="X">(X)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(Y)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="Y">(Y)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(Z)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="Z">(Z)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(i)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="i">(i)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ii">(ii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(iii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="iii">(iii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(iv)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="iv">(iv)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(v)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="v">(v)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(vi)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="vi">(vi)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(vii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="vii">(vii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(viii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="viii">(viii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ix)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ix">(ix)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(x)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="x">(x)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xi)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xi">(xi)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xii">(xii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xiii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xiii">(xiii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xiv)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xiv">(xiv)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xv)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xv">(xv)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xvi)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xvi">(xvi)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xvii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xvii">(xvii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xviii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xviii">(xviii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xix)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xix">(xix)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xx)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xx">(xx)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(I)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="I">(I)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(II)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="II">(II)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(III)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="III">(III)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(IV)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="IV">(IV)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(V)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="V">(V)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(VI)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="VI">(VI)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(VII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="VII">(VII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(VIII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="VIII">(VIII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(IX)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="IX">(IX)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(X)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="X">(X)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XI)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XI">(XI)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XII">(XII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XIII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XIII">(XIII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XIV)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XIV">(XIV)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XV)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XV">(XV)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XVI)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XVI">(XVI)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XVII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XVII">(XVII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XVIII)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XVIII">(XVIII)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XIX)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XIX">(XIX)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XX)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XX">(XX)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(aa)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="aa">(aa)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(bb)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="bb">(bb)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(cc)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="cc">(cc)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(dd)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="dd">(dd)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ee)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ee">(ee)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ff)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ff">(ff)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(gg)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="gg">(gg)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(hh)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="hh">(hh)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ii)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ii">(ii)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(jj)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="jj">(jj)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(kk)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="kk">(kk)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ll)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ll">(ll)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(mm)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="mm">(mm)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(nn)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="nn">(nn)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(oo)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="oo">(oo)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(pp)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="pp">(pp)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(qq)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="qq">(qq)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(rr)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="rr">(rr)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ss)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ss">(ss)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(tt)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="tt">(tt)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(uu)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="uu">(uu)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(vv)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="vv">(vv)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ww)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ww">(ww)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(xx)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="xx">(xx)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(yy)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="yy">(yy)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(zz)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="zz">(zz)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(AA)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="AA">(AA)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(BB)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="BB">(BB)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(CC)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="CC">(CC)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(DD)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="DD">(DD)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(EE)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="EE">(EE)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(FF)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="FF">(FF)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(GG)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="GG">(GG)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(HH)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="HH">(HH)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(II)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="II">(II)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(JJ)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="JJ">(JJ)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(KK)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="KK">(KK)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(LL)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="LL">(LL)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(MM)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="MM">(MM)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(NN)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="NN">(NN)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(OO)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="OO">(OO)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(PP)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="PP">(PP)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(QQ)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="QQ">(QQ)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(RR)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="RR">(RR)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(SS)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="SS">(SS)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(TT)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="TT">(TT)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(UU)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="UU">(UU)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(VV)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="VV">(VV)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(WW)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="WW">(WW)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(XX)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="XX">(XX)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(YY)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="YY">(YY)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`<placeholder>(ZZ)`, `<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1"><heading xmlns="urn:x-lexisnexis:content:default:mastering:1"><designator value="ZZ">(ZZ)</designator></heading><body><p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)

        .replaceAll(`</placeholder>`, `</p></body></lawTextComponent>`)
        .replaceAll(`<p xmlns="urn:x-lexisnexis:content:default:mastering:1"> `, `<p xmlns="urn:x-lexisnexis:content:default:mastering:1">`)
        .replaceAll(`</lawTextComponent>`, `</lawTextComponent>\n`)
}

function lawTextComponentWrap() {
    let lines = document.querySelector('#textarea1').value.split('\n');
    let newLines = '';
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== "" && !lines[i].includes('<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1">')) {
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
    document.querySelector('.annotation-wrap').value = newLines;
}

function cleanUps() {
    let textarea = document.getElementById('textarea1').value;
    if (!textarea.includes("<p>")) {
        notedUnderMergeFixit();
        annotationWrap1();
    }
}

//Noted Under Fixit
function notedUnderMergeFixit() {
    let textarea = document.getElementById("textarea1");
    textarea.select();
    textarea.value = textarea.value
        .replace(/(\n)/gm, " ")
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

        .replaceAll(".—", ".")
        .replace(/[^\S\r\n]+$/gm, "") // Trim Trailing Spaces
}

// Noted Under Extra cleanups for a,b,c,d
function lineCursorIsOn(textarea) {
    return textarea.value.substring(0, textarea.selectionStart).split("\n").length;
}
function processNotedUnderAnnot() {
    let textarea = document.getElementById("textarea1");
    var cursorLineNumber = lineCursorIsOn(textarea);
    textarea.value = textarea.value.split("\n").map(function (line, index) {
        var currentLineNumber = index + 1;
        if (currentLineNumber == cursorLineNumber) return line.replaceAll("<annot:annotationLevel><annot:body>", "").replaceAll("</annot:body></annot:annotationLevel>", "");
        return line;
    }).join("\n");
}

function annotationWrap1() {
    let lines = document.querySelector('#textarea1').value.split('\n');
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
    document.querySelector('.annotation-wrap').value = newLines;
}

function preview2() {
    let lower = document.querySelector('#textarea1');

    let temp = lower.value;

    const commonErrors = ['president\'s council on fitness, sports and nutrition', 'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming', 'air force reserve command', 'defense finance and accounting service debt and claims management center', 'english language acquisition office', 'european command', 'federal accounting standards advisory board', 'federal aviation administration', 'federal bureau of investigation', 'federal consulting group', 'federal emergency management agency', 'federal energy regulatory commission', 'federal executive boards', 'federal highway administration', 'federal housing administration', 'federal law enforcement training center', 'federal motor carrier safety administration', 'federal protective service', 'federal railroad administration', 'federal student aid information center', 'federal transit administration', 'federal voting assistance program', 'government national mortgage association', 'ginnie mae', 'guinea-bissau', 'indian health service', 'secretary of agriculture', 'secretary of commerce', 'secretary of defense', 'secretary of education', 'secretary of energy', 'secretary of health and human services', 'secretary of homeland security', 'secretary of housing and urban development', 'secretary of labor', 'secretary of state', 'secretary of the interior', 'secretary of the treasury', 'secretary of transportation', 'secretary of veterans affairs', 'abilityone commission', 'access board', 'administration for children and families', 'administration for community living', 'administration for native americans', 'administrator of the environmental protection agency', 'administrator of the small business administration', 'afghan', 'afghanistan', 'africa command', 'african', 'agency for healthcare research and quality', 'agency for toxic substances and disease registry', 'agricultural marketing service', 'agricultural research service', 'air force', 'albania', 'albanian', 'albany', 'albuquerque', 'alcohol and tobacco tax and trade bureau', 'algeria', 'algerian', 'america', 'american', 'anchorage', 'andorra', 'andorran', 'angeles', 'angola', 'angolian', 'animal and plant health inspection service', 'annapolis', 'antigua', 'antiguan', 'antitrust division', 'arab', 'arabian', 'argentina', 'argentinian', 'armed forces retirement home', 'armenia', 'armenian', 'arms control and international security', 'army corps of engineers', 'asian', 'atlanta', 'attorney general', 'augusta', 'austin', 'australia', 'australian', 'austria', 'austrian', 'azerbaijan', 'azerbaijanis', 'bahamas', 'bahrain', 'baltimore', 'bangladesh', 'barbados', 'barbuda', 'baton rouge', 'belarus', 'belgian', 'belgium', 'belize', 'benin', 'bhutan', 'billings', 'bismarck', 'boise', 'bolivia', 'bonneville power administration', 'bosnia', 'boston', 'botswana', 'brazil', 'bridgeport', 'brunei', 'bulgaria', 'bureau of alcohol, tobacco, firearms and explosives', 'bureau of consular affairs', 'bureau of economic analysis', 'bureau of engraving and printing', 'bureau of indian affairs', 'bureau of industry and security', 'bureau of international labor affairs', 'bureau of justice statistics', 'bureau of labor statistics', 'bureau of land management', 'bureau of ocean energy management', 'bureau of prisons', 'bureau of reclamation', 'bureau of safety and environmental enforcement', 'bureau of the fiscal service', 'bureau of transportation statistics', 'burkina faso', 'burlington', 'burma', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'canadian', 'census bureau', 'center for food safety and applied nutrition', 'center for nutrition policy and promotion', 'centers for disease control and prevention', 'centers for medicare and medicaid services', 'central african republic', 'central command', 'chad', 'charleston', 'charlotte', 'cheyenne', 'chicago', 'chile', 'china', 'chinese', 'citizenship and immigration services', 'civil rights division, department of justice', 'coast guard', 'college of information and cyberspace', 'colombia', 'columbia', 'columbus', 'commission on international religious freedom', 'community oriented policing services', 'comoros', 'computer emergency readiness team', 'concord', 'congo', 'congress', 'congressman', 'costa rica', 'cote d\'ivoire', 'côte d\'ivoire', 'council of economic advisers', 'council on environmental quality', 'court services and offender supervision agency for the district of columbia', 'croatia', 'cuba', 'customs and border protection', 'cyber command', 'cybersecurity and infrastructure security agency', 'cyprus', 'czech republic', 'czechia', 'defense acquisition university', 'defense advanced research projects agency', 'defense commissary agency', 'defense contract audit agency', 'defense contract management agency', 'defense counterintelligence and security agency', 'defense finance and accounting service', 'defense health agency', 'defense information systems agency', 'defense intelligence agency', 'defense logistics agency', 'defense security cooperation agency', 'defense technical information center', 'defense threat reduction agency', 'democratic republic of the congo', 'denmark', 'denver', 'department of agriculture', 'department of commerce', 'department of defense', 'department of education', 'department of energy', 'department of health and human services', 'department of homeland security', 'department of housing and urban development', 'department of justice', 'department of labor', 'department of state', 'department of the interior', 'department of the treasury', 'department of transportation', 'department of veterans affairs', 'des moines', 'detroit', 'director of national intelligence', 'director of the office of management and budget', 'director of the office of science and technology policy', 'director', 'djibouti', 'dominica', 'dominican republic', 'dover', 'drug enforcement administration', 'dutch', 'dwight d. eisenhower school for national security and resource strategy', 'economic development administration', 'economic growth, energy, and the environment', 'economic research service', 'ecuador', 'egypt', 'egyptian', 'el salvador', 'elder justice initiative', 'election assistance commission', 'employee benefits security administration', 'employment and training administration', 'energy information administration', 'energy star program', 'english', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'ethiopian', 'european', 'executive office for immigration review', 'fargo', 'farm credit system insurance corporation', 'farm service agency', 'federal', 'federal housing administration', 'fiji', 'filipino', 'finland', 'fire administration', 'fish and wildlife service', 'fleet forces command', 'food and drug administration', 'food and nutrition service', 'food safety and inspection service', 'foreign agricultural service', 'foreign claims settlement commission', 'forest service', 'france', 'frankfort', 'french', 'gabon', 'gambia', 'geological survey', 'georgia', 'georgian', 'german', 'germany', 'ghana', 'greece', 'greek', 'grenada', 'grenadines', 'guatemala', 'guinea', 'guyana', 'haiti', 'harrisburg', 'hartford', 'health resources and services administration', 'helena', 'herzegovina', 'holocaust memorial museum', 'holy see', 'honduras', 'honolulu', 'houston', 'hungarian', 'hungary', 'huntsville', 'iceland', 'icelanders', 'immigration and customs enforcement', 'india', 'indian', 'indianapolis', 'indo-pacific command', 'indonesia', 'indonesian', 'institute of education sciences', 'internal revenue service', 'international trade administration', 'iran', 'iraq', 'ireland', 'irish', 'israel', 'israeli', 'italian', 'italy', 'jackson', 'jacksonville', 'jamaica', 'jamaican', 'japan', 'japanese', 'jefferson city', 'joint board for the enrollment of actuaries', 'joint chiefs of staff', 'joint fire science program', 'joint forces staff college', 'joint program executive office for chemical and biological defense', 'jordan', 'jordanese', 'juneau', 'kazakhstan', 'kenya', 'kenyan', 'kiribati', 'korean', 'kuwait', 'kyrgyzstan', 'lansing', 'laos', 'las vegas', 'latvia', 'latvian', 'lebanese', 'lebanon', 'lesotho', 'liberia', 'libya', 'libyan', 'liechtenstein', 'lincoln', 'lithuania', 'lithuanian', 'little rock', 'los angeles', 'louisville', 'luxembourg', 'macedonian', 'madagascar', 'madison', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'manchester', 'marine corps', 'maritime administration', 'marshall islands', 'marshals service', 'mauritania', 'mauritius', 'mexican', 'mexico', 'micronesia', 'micronesian', 'middle east broadcasting networks', 'military academy, west point', 'military postal service agency', 'milwaukee', 'mine safety and health administration', 'minneapolis', 'minority business development agency', 'missile defense agency', 'mission to the united nations', 'moldova', 'monaco', 'mongolia', 'mongolian', 'montenegro', 'montgomery', 'montpelier', 'moroccan', 'morocco', 'mozambique', 'multifamily housing office', 'myanmar', 'namibia', 'nashville', 'national agricultural library', 'national agricultural statistics service', 'national cancer institute', 'national cemetery administration', 'national central bureau - interpol', 'national defense university', 'national flood insurance program', 'national geospatial-intelligence agency', 'national guard', 'national health information center', 'national heart, lung, and blood institute', 'national highway traffic safety administration', 'national indian gaming commission', 'national institute of arthritis, musculoskeletal and skin diseases', 'national institute of corrections', 'national institute of food and agriculture', 'national institute of justice', 'national institute of mental health', 'national institute of occupational safety and health', 'national institute of standards and technology', 'national institutes of health', 'national intelligence university', 'national interagency fire center', 'national laboratories', 'national nuclear security administration', 'national ocean service', 'national oceanic and atmospheric administration', 'national park service', 'national passport information center', 'national pesticide information center', 'national prevention information network', 'national reconnaissance office', 'national security agency', 'national security council', 'national technical information service', 'national telecommunications and information administration', 'national war college', 'national weather service', 'natural resources conservation service', 'nauru', 'nepal', 'nepalese', 'netherlands', 'nevis', 'new orleans', 'new zealand', 'newark', 'nicaragua', 'niger', 'nigeria', 'nigerian', 'noaa fisheries', 'north america', 'north korea', 'north macedonia', 'northern command', 'norway', 'norwegian', 'oak ridge national laboratory', 'occupational safety and health administration', 'office for civil rights, department of education', 'office for civil rights, department of health and human services', 'office of career, technical, and adult education', 'office of child support enforcement', 'office of community planning and development', 'office of cuba broadcasting', 'office of disability employment policy', 'office of economic adjustment', 'office of elementary and secondary education', 'office of environmental management', 'office of fair housing and equal opportunity', 'office of fossil energy', 'office of housing', 'office of immigrant and employee rights', 'office of investor education and advocacy', 'office of justice programs', 'office of juvenile justice and delinquency prevention', 'office of lead hazard control and healthy homes', 'office of management and budget', 'office of manufactured housing programs', 'office of minority health', 'office of national drug control policy', 'office of natural resources revenue', 'office of nuclear energy', 'office of policy development and research', 'office of postsecondary education', 'office of refugee resettlement', 'office of science and technology policy', 'office of scientific and technical information', 'office of servicemember affairs', 'office of special education and rehabilitative services', 'office of surface mining, reclamation and enforcement', 'office of the assistant secretary for research and technology', 'office of the comptroller of the currency', 'office of the federal register', 'office of the pardon attorney', 'office of the president', 'office of the united states trade representative', 'office of the vice president', 'office of violence against women', 'olympia', 'omaha', 'oman', 'pakistan', 'pakistani', 'palau', 'palestine state', 'panama', 'papua new guinea', 'paraguay', 'parole commission', 'patent and trademark office', 'pentagon force protection agency', 'peru', 'philadelphia', 'philippines', 'phoenix', 'pierre', 'pipeline and hazardous materials safety administration', 'poland', 'polish', 'political affairs', 'portland', 'portugal', 'portuguese', 'postal inspection service', 'power administrations', 'president', 'pretrial services agency for the district of columbia', 'principe', 'providence', 'public and indian housing', 'public diplomacy and public affairs', 'qatar', 'radio free asia', 'radio free europe and radio liberty', 'raleigh', 'rehabilitation services administration', 'richmond', 'risk management agency', 'romania', 'romanian', 'rural business and cooperative programs', 'rural development', 'rural housing service', 'rural utilities service', 'russia', 'russian', 'rwanda', 'sacramento', 'saint kitts', 'saint lawrence seaway development corporation', 'saint lucia', 'saint vincent and the grenadines', 'salem', 'samoa', 'samoan', 'san marino', 'santa fe', 'sao tome and principe', 'saudi arabia', 'science office', 'seafood inspection program', 'seattle', 'secret service', 'secretary', 'senate', 'senator', 'senegal', 'serbia', 'serbian', 'seychelles', 'sierra leone', 'singapore', 'sioux falls', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'somalian', 'south africa', 'south america', 'south korea', 'south sudan', 'southeastern power administration', 'southern command', 'southwestern power administration', 'space command', 'spain', 'spanish', 'special operations command', 'springfield', 'sri lanka', 'st. paul', 'strategic command', 'substance abuse and mental health services administration', 'sudan', 'sudanese', 'suriname', 'swaziland', 'sweden', 'swiss', 'switzerland', 'syria', 'syrian', 'tajikistan', 'tallahassee', 'tanzania', 'taxpayer advocacy panel', 'thailand', 'timor-leste', 'tobago', 'togo', 'tonga', 'topeka', 'trade representative', 'transportation command', 'transportation security administration', 'trenton', 'trinidad', 'trinidad and tobago', 'trustee program', 'tunisia', 'tunisian', 'turk', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ugandan', 'ukraine', 'ukranian', 'unified combatant commands', 'uniformed services university of the health sciences', 'united arab emirates', 'united kingdom', 'united state', 'united State', 'United state', 'united states', 'united States', 'United states', 'uruguay', 'uzbekistan', 'vanuatu', 'vegas', 'venezuela', 'venezuelan', 'veterans benefits administration', 'veterans health administration', 'veterans\' employment and training service', 'vietnam', 'vietnamese', 'virginia beach', 'voice of america', 'wage and hour division', 'washington headquarters services', 'weights and measures division', 'western area power administration', 'wichita', 'wilmington', 'women\'s bureau', 'yemen', 'zambia', 'zambian', 'zimbabwe', 'the commissioner', 'commissioner'];

    commonErrors.sort(function (a, b) {
        return b.split(" ").length - a.split(" ").length;
    });

    for (const error of commonErrors) {
        temp = temp.replace(new RegExp(`\\b${error}\\b`, "g"), `<mark style="background-color: #ccddff;">${error}</mark>`);
    }

    temp = temp

        .replaceAll('<annot:annotationLevel>', '<ul style="list-style-type:none;">')
        .replaceAll('</annot:annotationLevel>', '</ul>')
        .replaceAll('<annot:body><p>', '<li>')
        .replaceAll('</p></annot:body>', '</li>')

        .replaceAll('<lawTextComponent xmlns="urn:x-lexisnexis:content:statutorycode:mastering:1">', '<lawTextComponent>')
        .replaceAll('<lawTextComponent>', '<ul style="list-style-type:none;"><li>')
        .replaceAll('</lawTextComponent>', '</li></ul>')
        .replaceAll('<heading xmlns="urn:x-lexisnexis:content:default:mastering:1">', '<span><strong>')
        .replaceAll('<designator', '<span')
        .replaceAll('<body', '<span')
        .replaceAll('<p xmlns="urn:x-lexisnexis:content:default:mastering:1">', '<span> ')
        .replaceAll('</heading>', '</strong></span>')
        .replaceAll('</designator>', '</span>')
        .replaceAll('</body>', '</span>')
        .replaceAll('</p>', '</span>')
        .replaceAll('<title>', '<span> ')
        .replaceAll('</title>', '</span>')

        .replaceAll('&#x2014;', '—')
        .replaceAll('&#x2018;', '‘')
        .replaceAll('&#x2019;', '’')
        .replaceAll('&#xa7;', '§')

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

        .replace(/\[(.*?)\]/g, '<mark style="background-color: #c8e6c9;">[$1]</mark>')

        .replaceAll(`  `, `<mark style="background-color: #ef5350;">&nbsp;&nbsp;</mark>`)
        .replaceAll(`   `, `<mark style="background-color: #ef5350;">&nbsp;&nbsp;&nbsp;</mark>`)

        .replaceAll(`'`, `<mark style="background-color: #ef5350;">'</mark>`)
        .replaceAll(`‘`, `<mark style="background-color: #ef5350;">‘</mark>`)
        .replaceAll(`’`, `<mark style="background-color: #ef5350;">’</mark>`)
        .replaceAll(`”.`, `<mark style="background-color: #ef5350;">”.</mark>`)
        .replaceAll(`—`, `<mark style="background-color: #ef5350;">—</mark>`)
        .replaceAll(`–`, `<mark style="background-color: #ef5350;">–</mark>`)
        .replaceAll(`..`, `<mark style="background-color: #ef5350;">..</mark>`)

    preWindow = open("", "preWindow", "menubar,width=800,height=500,top=150,left=350");
    preWindow.document.write(`<title>Assist Preview</title><body style="background-color: #fbfbfb; font-family: Calibri;font-size:17px;">${temp}</body>`);
    preWindow.document.close();
}

// Add suppInclusion Tags for Upper Text Editor
function addSuppInclusionTags() {
    let textarea = document.getElementById("textarea1");
    let suppinput = document.getElementById("supp-inclusion-input-upper");
    if (confirm("Add suppInclusion to all </lawTextComponent>?") == true) {
        textarea.select();
        textarea.value = textarea.value
            .replaceAll(`</lawTextComponent>`, `${suppinput.value}</lawTextComponent>`)
    }
}