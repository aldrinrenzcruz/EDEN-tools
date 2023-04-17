function openUSAmnoteBuilder() {
  openUSAmnotesDescriptors();
  openUSAmnotesDesignators();
  openUSAmnotesAnnotation();
}

// Show amnotes descriptors
function openUSAmnotesDescriptors() {
  let window = document.getElementById("anchor-amendment-note-descriptors");
  window.style.display = "block";
}
// Hide amnotes descriptors
function closeUSAmnotesDescriptors() {
  let window = document.getElementById("anchor-amendment-note-descriptors");
  window.style.display = "none";
}

// Show amnotes designators
function openUSAmnotesDesignators() {
  let window = document.getElementById("anchor-amendment-note-designators");
  window.style.display = "block";
}
// Hide amnotes designators
function closeUSAmnotesDesignators() {
  let window = document.getElementById("anchor-amendment-note-designators");
  window.style.display = "none";
}

// Show amnotes annotation builder
function openUSAmnotesAnnotation() {
  let window = document.getElementById("anchor-amendment-note-annotation");
  window.style.display = "block";
}
// Hide amnotes annotation builder
function closeUSAmnotesAnnotation() {
  let window = document.getElementById("anchor-amendment-note-annotation");
  window.style.display = "none";
}

// Show Quick Search
function openQuickSearch() {
  let window = document.getElementById("anchor-quick-search");
  window.style.display = "block";
}
// Hide Quick Search
function closeQuickSearch() {
  let window = document.getElementById("anchor-quick-search");
  window.style.display = "none";
}

// Show Bracketed Matter Builder
function openBracketedMatterBuilder() {
  let window = document.getElementById("anchor-bracketed-matter-builder");
  window.style.display = "block";
}
// Hide Bracketed Matter Builder
function closeBracketedMatterBuilder() {
  let window = document.getElementById("anchor-bracketed-matter-builder");
  window.style.display = "none";
}

// Show History Citation Builder
function openHistoryCitationBuilder() {
  let window = document.getElementById("anchor-history-citation-builder");
  window.style.display = "block";
}
// Hide History Citation Builder
function closeHistoryCitationBuilder() {
  let window = document.getElementById("anchor-history-citation-builder");
  window.style.display = "none";
}

// Show Noted Under Builder
function openNotedUnderBuilder() {
  let window = document.getElementById("anchor-noted-under-builder");
  window.style.display = "block";
}
// Hide Noted Under Builder
function closeNotedUnderBuilder() {
  let window = document.getElementById("anchor-noted-under-builder");
  window.style.display = "none";
}

// Show Schemeline Builder
function openSchemelineBuilder() {
  let window = document.getElementById("anchor-schemeline-builder");
  window.style.display = "block";
}
// Hide Schemeline Builder
function closeSchemelineBuilder() {
  let window = document.getElementById("anchor-schemeline-builder");
  window.style.display = "none";
}

// Show Section Builder
function openSectionBuilder() {
  let window = document.getElementById("anchor-section-builder");
  window.style.display = "block";
}
// Hide Section Builder
function closeSectionBuilder() {
  let window = document.getElementById("anchor-section-builder");
  window.style.display = "none";
}

// Show Lexis+ Viewer
function openLexisPlusViewer() {
  let window = document.getElementById("anchor-view-lexis-plus-text");
  window.style.display = "block";
}
// Hide Lexis+ Viewer
function closeLexisPlusViewer() {
  let window = document.getElementById("anchor-view-lexis-plus-text");
  window.style.display = "none";
}

// Show Proof Errors Counter
function openProofErrorsCounter() {
  let window = document.getElementById("anchor-proof-error-counter");
  window.style.display = "block";
}
// Hide Proof Errors Counter
function closeProofErrorsCounter() {
  let window = document.getElementById("anchor-proof-error-counter");
  window.style.display = "none";
}

// Show Stopwatch
function openStopwatch() {
  let window = document.getElementById("anchor-stopwatch-container");
  window.style.display = "block";
}
// Hide Stopwatch
function closeStopwatch() {
  let window = document.getElementById("anchor-stopwatch-container");
  window.style.display = "none";
}

// Show Sticky Note 1
function openStickyNote1() {
  let window = document.getElementById("anchor-sticky-note-1");
  window.style.display = "block";
}
// Hide Sticky Note 1
function closeStickyNote1() {
  let window = document.getElementById("anchor-sticky-note-1");
  window.style.display = "none";
}

// Show Sticky Note 2
function openStickyNote2() {
  let window = document.getElementById("anchor-sticky-note-2");
  window.style.display = "block";
}
// Hide Sticky Note 2
function closeStickyNote2() {
  let window = document.getElementById("anchor-sticky-note-2");
  window.style.display = "none";
}

// Show Sticky Note 3
function openStickyNote3() {
  let window = document.getElementById("anchor-sticky-note-3");
  window.style.display = "block";
}
// Hide Sticky Note 3
function closeStickyNote3() {
  let window = document.getElementById("anchor-sticky-note-3");
  window.style.display = "none";
}

//Preview script
function preview() {
  temp = document.editorial.textarea3.value;
  preWindow = open("", "preWindow", "status=no,toolbar=n,menubar=y");
  preWindow.document.open();
  preWindow.document.write(temp);
  preWindow.document.close();
}

//COPY Upper textarea
function copy2() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  document.execCommand("copy");
}

//COPY Lower textarea
function copy1() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  document.execCommand("copy");
}

//CLEAR Upper textarea
function eraseText2() {
  document.getElementById("textarea1").value = "";
}

//CLEAR Lower textarea
function eraseText1() {
  document.getElementById("textarea3").value = "";
}

//Word counter for Lower textarea
; (function () {
  var textarea3 = document.getElementById('textarea3')
  var counteroutput = document.getElementById('counteroutput')
  var counteroutputFoot = document.getElementById('counteroutput-foot')
  var words, chars

  function countemwords() {
    words = (textarea3.value == '') ? 0 : textarea3.value.split(' ').length
    chars = textarea3.value.length
    counteroutput.innerHTML = 'Words: <span class="outputval">' + words + '</span> Chars: <span class="outputval">' + chars + '</span>'
  }

  textarea3.addEventListener('input', function (e) {
    countemwords()
  }, false)

  document.addEventListener("DOMContentLoaded", function (event) {
    countemwords()
  }, false)

  window.addEventListener("load", function (event) {
    countemwords()
  }, false)

})()

// Paragraph Wrap for CA, OR, NV, HI, MT, WA
function allParagraphWrap() {
  var lines = $('#textarea3').val().split('\n');
  var newLines = '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<p>')) {
      newLines += '<p>' + lines[i] + '</p>';
      newLines += '\n';
    } else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<p>', '');
      lines[i] = lines[i].replace('</p>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<p>' + lines[i] + '</p>');
      newLines += lines[i];
      newLines += '\n';
    }
  }
  $('.annotation-wrap').val(newLines);
}

//Line counter for Lower textarea
var calculateContentHeight = function (textarea3, scanAmount) {
  var origHeight = textarea3.style.height,
    height = textarea3.offsetHeight,
    scrollHeight = textarea3.scrollHeight,
    overflow = textarea3.style.overflow;

  if (height >= scrollHeight) {

    textarea3.style.height = (height + scanAmount) + 'px';

    textarea3.style.overflow = 'hidden';

    if (scrollHeight < textarea3.scrollHeight) {

      while (textarea3.offsetHeight >= textarea3.scrollHeight) {
        textarea3.style.height = (height -= scanAmount) + 'px';
      }

      while (textarea3.offsetHeight < textarea3.scrollHeight) {
        textarea3.style.height = (height++) + 'px';
      }

      textarea3.style.height = origHeight;

      textarea3.style.overflow = overflow;
      return height;
    }
  }
  else {
    return scrollHeight;
  }
}

var calculateHeight = function () {
  var textarea3 = document.getElementById("textarea3"),
    style = (window.getComputedStyle) ?
      window.getComputedStyle(textarea3) : textarea3.currentStyle,

    textarea3LineHeight = parseInt(style.lineHeight, 10),

    textarea3Height = calculateContentHeight(textarea3, textarea3LineHeight),

    numberOfLines = Math.floor(textarea3Height / textarea3LineHeight);

  document.getElementById("lines").innerHTML = "Lines: " +
    numberOfLines;
};

calculateHeight();
if (textarea3.addEventListener) {
  textarea3.addEventListener("mouseup", calculateHeight, false);
  textarea3.addEventListener("keyup", calculateHeight, false);
} else if (textarea3.attachEvent) { // IE
  textarea3.attachEvent("onmouseup", calculateHeight);
  textarea3.attachEvent("onkeyup", calculateHeight);
}

//Fixit for Upper textarea
function fixText000area(textarea) {
  textarea.value = textarea.value.replace(" ,", ",")
    .replaceAll(" ;", ";")
    .replaceAll(";;", ";")
    .replaceAll(";;;", ";")
    .replaceAll(",,", ",")
    .replaceAll(",,,", ",")
    .replaceAll(" .", ".")
    .replaceAll("  ", " ")
    .replaceAll("   ", " ")
    .replaceAll("“ ", "“")
    .replaceAll(" ”", "”")
    .replaceAll("““", "“‘")
    .replaceAll("””", "’”")

    .replaceAll("“", "‘")
    .replaceAll("”", "’")
    .replaceAll(".—", ". ")

    .replaceAll("<p> ", "<p>")
    .replaceAll(" </p>", "</p>")
    .replaceAll(/(^|[-\u2014\s(\["])'/g, "$1\u2018")
    .replaceAll(/'/g, "\u2019")
    .replaceAll(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c")
    .replaceAll(/"/g, "\u201d")
    .replaceAll(/^[^\S\r\n]/gm, "")
    .replaceAll(/[^\S\r\n]+$/gm, "")
    .replaceAll("Div ,", "")
    .replaceAll("Div,", "")
    .replaceAll("Title ,", "")
    .replaceAll("Title,", "")
    .replaceAll("Subtitle ,", "")
    .replaceAll("Subtitle,", "")
    .replaceAll("Part ,", "")
    .replaceAll("Part,", "")
    .replaceAll("Ch ,", "")
    .replaceAll("Ch,", "")
    .replaceAll("Subch ,", "")
    .replaceAll("Subch,", "")
    .replaceAll("&#xa7;", "§")
};
function fixtext000() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText000area(textarea);
}

//Fixit for Lower textarea
function fixTextarea(textarea) {
  textarea.value = textarea.value.replace(" ,", ",")
    .replaceAll(" ;", ";")
    .replaceAll(";;", ";")
    .replaceAll(";;;", ";")
    .replaceAll(",,", ",")
    .replaceAll(",,,", ",")
    .replaceAll(" .", ".")
    .replaceAll("  ", " ")
    .replaceAll("   ", " ")
    .replaceAll("“ ", "“")
    .replaceAll(" ”", "”")
    .replaceAll("““", "“‘")
    .replaceAll("””", "’”")
    .replaceAll("<p> ", "<p>")
    .replaceAll(" </p>", "</p>")
    .replaceAll(/(^|[-\u2014\s(\["])'/g, "$1\u2018")
    .replaceAll(/'/g, "\u2019")
    .replaceAll(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c")
    .replaceAll(/"/g, "\u201d")
    .replaceAll(/^[^\S\r\n]/gm, "")
    .replaceAll(/[^\S\r\n]+$/gm, "")
    .replaceAll("Div ,", "")
    .replaceAll("Div,", "")
    .replaceAll("Title ,", "")
    .replaceAll("Title,", "")
    .replaceAll("Subtitle ,", "")
    .replaceAll("Subtitle,", "")
    .replaceAll("Part ,", "")
    .replaceAll("Part,", "")
    .replaceAll("Ch ,", "")
    .replaceAll("Ch,", "")
    .replaceAll("Subch ,", "")
    .replaceAll("Subch,", "")
    .replaceAll("&#xa7;", "§")
};
function fixtext() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixTextarea(textarea);
}

//Merge for Upper textarea
function fixText4area(textarea) {
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
};
function fixtext4() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText4area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Merge for Lower textarea
function fixText3area(textarea) {
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
};
function fixtext3() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText3area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Load .txt file in Lower textarea
document.getElementById('loadfile')
  .addEventListener('change', function () {

    var fr = new FileReader();
    fr.onload = function () {
      document.getElementById('textarea3')
        .textContent = fr.result;
    }
    fr.readAsText(this.files[0]);
  })

//Save Lower textarea content as .txt file
function saveTextAsFile() {
  var textToWrite = document.getElementById('textarea3').value;
  var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  var fileNameToSaveAs = "Quick Notes.txt";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);

//Remove XML for Upper textarea
function fixText13area(textarea) {
  textarea.value = textarea.value.replace(/<\/?[^>]+(>|$)/g, "")
};
function fixtext13() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText13area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Remove XML for Lower textarea
function fixText10area(textarea) {
  textarea.value = textarea.value.replace(/<\/?[^>]+(>|$)/g, "")
};
function fixtext10() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText10area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Remove Empty Lines for Upper textarea
function fixText12area(textarea) {
  textarea.value = textarea.value.replace(/^\s*[\r\n]/gm, "")
};
function fixtext12() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText12area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Remove Empty Lines for Lower textarea
function fixText11area(textarea) {
  textarea.value = textarea.value.replace(/^\s*[\r\n]/gm, "")
};
function fixtext11() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText11area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim Leading Space for Upper textarea
function fixText14area(textarea) {
  textarea.value = textarea.value.replace(/^[^\S\r\n]/gm, "")
};
function fixtext14() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText14area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim Trailing Space for Upper textarea
function fixText15area(textarea) {
  textarea.value = textarea.value.replace(/[^\S\r\n]+$/gm, "")

};
function fixtext15() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText15area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim All Tabs for Upper textarea
function fixText16area(textarea) {
  textarea.value = textarea.value.replace(/\t/g, "")
};
function fixtext16() {
  let textarea = document.getElementById("textarea1");
  textarea.select();
  fixText16area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea1");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim Leading Space for Lower textarea
function fixText17area(textarea) {
  textarea.value = textarea.value.replaceAll(/^[^\S\r\n]/gm, "")
};
function fixtext17() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText17area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim Trailing Space for Lower textarea
function fixText18area(textarea) {
  textarea.value = textarea.value.replace(/[^\S\r\n]+$/gm, "")
};
function fixtext18() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText18area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Trim All Tabs for Lower textarea
function fixText19area(textarea) {
  textarea.value = textarea.value.replace(/\t/g, "")

};
function fixtext19() {
  let textarea = document.getElementById("textarea3");
  textarea.select();
  fixText19area(textarea);
}
window.addEventListener('DOMContentLoaded', function (e) {
  var area = document.getElementById("textarea3");
  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };
  var replace = function (search, replaceWith) {
    if (typeof (search) == "object") {
      area.value = area.value.replace(search, replaceWith);
      return;
    }
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };
});

//Prevent enter button on forms and inputs
$(".no-enter").keypress(function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    return false;
  }
})

//Text Case Converter
var stringbox = document.getElementById('textarea3')
function convertstring(textarea, action) {
  var selectedText = '';

  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  else if (document.selection) {
    selectedText =
      document.selection.createRange().text;
  } else return;

  if (action == 'sentencecase') {
    alteredText = sentenceCase(selectedText.toString())
    document.execCommand('insertText', false, alteredText)
  }
  else if (action == 'titlecase') {
    alteredText = toTitleCase(selectedText.toString())
    document.execCommand('insertText', false, alteredText)
  }
  else if (action == 'capitalcase') {
    alteredText = CapitalCase(selectedText.toString())
    document.execCommand('insertText', false, alteredText)
  }
  else if (action == 'lowercase') {
    alteredText = lowerCase(selectedText.toString())
    document.execCommand('insertText', false, alteredText)
  }
  else if (action == 'uppercase') {
    alteredText = upperCase(selectedText.toString())
    document.execCommand('insertText', false, alteredText)
  }
  return false
}
function sentenceCase(str) {
  var str = str.toLowerCase().replace(/\si\s/g, ' I ');
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str
}
function toTitleCase(str) {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  var str = str.toLowerCase()
  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }
    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};
function CapitalCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
function lowerCase(str) {
  return str.toLowerCase();
}
function upperCase(str) {
  return str.toUpperCase();
}

//Draggable windows
window.onload = function () {
  initDragElement();
};
function initDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var popups = document.getElementsByClassName("popup");
  var elmnt = null;
  var currentZIndex = 100;
  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);

    popup.onmousedown = function () {
      this.style.zIndex = "" + ++currentZIndex;
    };

    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }
  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = "" + ++currentZIndex;
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    if (!elmnt) {
      return;
    }
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function getHeader(element) {
    var headerItems = element.getElementsByClassName("popup-header");
    if (headerItems.length === 1) {
      return headerItems[0];
    }
    return null;
  }
}

//Boostrap sub-menu drop down
$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');
  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    $('.dropdown-submenu .show').removeClass("show");
  });
  return false;
});

//Tab key support for Lower textarea
function enableTab(id) {
  var el = document.getElementById(id);
  el.onkeydown = function (e) {
    if (e.keyCode === 9) {
      var val = this.value,
        start = this.selectionStart,
        end = this.selectionEnd;
      this.value = val.substring(0, start) + '\t' + val.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
      return false;
    }
  };
}
enableTab('textarea3');

//Side by Side with Act PDF (Not used in amnotes yet)
$('#actpart1, #actpart2').bind('keypress blur', function () {
  let url = '../Acts/JX/' + $('#actpart1').val() + '/' + $('#actpart2').val() + '.pdf';
  $('#actframe').attr('src', url);
});

//Search and Replace Upper textarea
var SAR1 = {};

SAR1.find1 = function () {
  var txt = $("#textarea1").val();
  var strSearchTerm1 = $("#termSearch1").val();
  var isCaseSensitive1 = ($("#caseSensitive1").attr('checked') == 'checked') ? true : false;
  if (isCaseSensitive1 == false) {
    txt = txt.toLowerCase();
    strSearchTerm1 = strSearchTerm1.toLowerCase();
  }
  var cursorPos = ($("#textarea1").getCursorPosEnd());
  var termPos = txt.indexOf(strSearchTerm1, cursorPos);
  if (termPos != -1) {
    $("#textarea1").selectRange(termPos, termPos + strSearchTerm1.length);
  } else {
    termPos = txt.indexOf(strSearchTerm1);
    if (termPos != -1) {
      $("#textarea1").selectRange(termPos, termPos + strSearchTerm1.length);
    } else {

    }
  }
};
SAR1.findAndReplace1 = function () {
  var origTxt = $("#textarea1").val();
  var txt = $("#textarea1").val();
  var strSearchTerm1 = $("#termSearch1").val();
  var strReplaceWith = $("#termReplace1").val();
  var isCaseSensitive1 = ($("#caseSensitive1").attr('checked') == 'checked') ? true : false;
  var termPos;
  if (isCaseSensitive1 == false) {
    txt = txt.toLowerCase();
    strSearchTerm1 = strSearchTerm1.toLowerCase();
  }
  var cursorPos = ($("#textarea1").getCursorPosEnd());
  var termPos = txt.indexOf(strSearchTerm1, cursorPos);
  var newText = '';
  if (termPos != -1) {
    newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos + strSearchTerm1.length, origTxt.length)
    $("#textarea1").val(newText);
    $("#textarea1").selectRange(termPos, termPos + strReplaceWith.length);
  } else {
    termPos = txt.indexOf(strSearchTerm1);
    if (termPos != -1) {
      newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos + strSearchTerm1.length, origTxt.length)
      $("#textarea1").val(newText);
      $("#textarea1").selectRange(termPos, termPos + strReplaceWith.length);
    } else {
    }
  }
};
SAR1.replaceAll1 = function () {
  var origTxt = $("#textarea1").val();
  var txt = $("#textarea1").val();
  var strSearchTerm1 = $("#termSearch1").val();
  var strReplaceWith = $("#termReplace1").val();
  var isCaseSensitive1 = ($("#caseSensitive1").attr('checked') == 'checked') ? true : false;
  if (isCaseSensitive1 == false) {
    txt = txt.toLowerCase();
    strSearchTerm1 = strSearchTerm1.toLowerCase();
  }
  var matches = [];
  var pos = txt.indexOf(strSearchTerm1);
  while (pos > -1) {
    matches.push(pos);
    pos = txt.indexOf(strSearchTerm1, pos + 1);
  }
  for (var match in matches) {
    SAR1.findAndReplace1();
  }
};
$.fn.selectRange = function (start, end) {
  return this.each(function () {
    if (this.setSelectionRange) {
      this.focus();
      this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  });
};
$.fn.getCursorPosEnd = function () {
  var pos = 0;
  var input = this.get(0);
  if (document.selection) {
    input.focus();
    var sel = document.selection.createRange();
    pos = sel.text.length;
  }
  else if (input.selectionStart || input.selectionStart == '0')
    pos = input.selectionEnd;
  return pos;
};

//Search and Replace Lower textarea
var SAR3 = {};
SAR3.find3 = function () {
  var txt = $("#textarea3").val();
  var strSearchTerm3 = $("#termSearch3").val();
  var isCaseSensitive3 = ($("#caseSensitive3").attr('checked') == 'checked') ? true : false;
  if (isCaseSensitive3 == false) {
    txt = txt.toLowerCase();
    strSearchTerm3 = strSearchTerm3.toLowerCase();
  }
  var cursorPos = ($("#textarea3").getCursorPosEnd());
  var termPos = txt.indexOf(strSearchTerm3, cursorPos);
  if (termPos != -1) {
    $("#textarea3").selectRange(termPos, termPos + strSearchTerm3.length);
  } else {
    termPos = txt.indexOf(strSearchTerm3);
    if (termPos != -1) {
      $("#textarea3").selectRange(termPos, termPos + strSearchTerm3.length);
    } else {
    }
  }
};
SAR3.findAndReplace3 = function () {
  var origTxt = $("#textarea3").val();
  var txt = $("#textarea3").val();
  var strSearchTerm3 = $("#termSearch3").val();
  var strReplaceWith = $("#termReplace3").val();
  var isCaseSensitive3 = ($("#caseSensitive3").attr('checked') == 'checked') ? true : false;
  var termPos;
  if (isCaseSensitive3 == false) {
    txt = txt.toLowerCase();
    strSearchTerm3 = strSearchTerm3.toLowerCase();
  }
  var cursorPos = ($("#textarea3").getCursorPosEnd());
  var termPos = txt.indexOf(strSearchTerm3, cursorPos);
  var newText = '';
  if (termPos != -1) {
    newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos + strSearchTerm3.length, origTxt.length)
    $("#textarea3").val(newText);
    $("#textarea3").selectRange(termPos, termPos + strReplaceWith.length);
  } else {
    termPos = txt.indexOf(strSearchTerm3);
    if (termPos != -1) {
      newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos + strSearchTerm3.length, origTxt.length)
      $("#textarea3").val(newText);
      $("#textarea3").selectRange(termPos, termPos + strReplaceWith.length);
    } else {
    }
  }
};
SAR3.replaceAll3 = function () {
  var origTxt = $("#textarea3").val();
  var txt = $("#textarea3").val();
  var strSearchTerm3 = $("#termSearch3").val();
  var strReplaceWith = $("#termReplace3").val();
  var isCaseSensitive3 = ($("#caseSensitive3").attr('checked') == 'checked') ? true : false;
  if (isCaseSensitive3 == false) {
    txt = txt.toLowerCase();
    strSearchTerm3 = strSearchTerm3.toLowerCase();
  }
  var matches = [];
  var pos = txt.indexOf(strSearchTerm3);
  while (pos > -1) {
    matches.push(pos);
    pos = txt.indexOf(strSearchTerm3, pos + 1);
  }
  for (var match in matches) {
    SAR3.findAndReplace3();
  }
};
$.fn.selectRange = function (start, end) {
  return this.each(function () {
    if (this.setSelectionRange) {
      this.focus();
      this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  });
};
$.fn.getCursorPosEnd = function () {
  var pos = 0;
  var input = this.get(0);
  if (document.selection) {
    input.focus();
    var sel = document.selection.createRange();
    pos = sel.text.length;
  }
  else if (input.selectionStart || input.selectionStart == '0')
    pos = input.selectionEnd;
  return pos;
};

//Stopwatch
var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.background = "#111";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "#e0e0e0";
    startTimerButton.classList.add('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
  }
}

function pauseTimer() {
  if (!difference) {
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "#111";
    timerDisplay.style.color = "#e0e0e0";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  } else {
    startTimer();
  }
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Start!';
  timerDisplay.style.background = "#111";
  timerDisplay.style.color = "#e0e0e0";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove('lighter');
  pauseTimerButton.classList.remove('lighter');
  startTimerButton.style.cursor = "pointer";
  pauseTimerButton.style.cursor = "auto";
}

function getShowTime() {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference = updatedTime - startTime;
  }

  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

//Clear checkboxes
function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}
$('#clear').on('click', uncheckAll)

//Clear checkboxes 2
function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}
$('#clear2').on('click', uncheckAll)

//Clear checkboxes 3
function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}
$('#clear3').on('click', uncheckAll)

//Clear checkboxes 4
function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}
$('#clear4').on('click', uncheckAll)

$('#anchor-view-lexis-plus-text').attr("spellcheck", false)