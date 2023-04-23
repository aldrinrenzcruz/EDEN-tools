document.querySelector('#tool-version-ui').innerHTML = "Assist v2.0"

const lowerTextarea = document.getElementById("lower-textarea");
const upperTextarea = document.getElementById("upper-textarea");

window.addEventListener("load", function () {
  initTerminal();
});

// F9 Toggle Terminal
document.addEventListener('keydown', function (e) {
  if (e.code === 'F9') {
    toggle('command-line-container');
    document.querySelector('#command-input').focus();
  }
});

// Font Style/Size Changer
const changeableTextareas = document.querySelectorAll('textarea[data-font-changeable="true"]');
const fontSelect = document.getElementById('font-change-style');
const fontSizeInput = document.getElementById('font-change-size');
const fontChangeBtn = document.getElementById('font-change-btn');
fontChangeBtn.addEventListener('click', () => {
  const selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
  const fontSize = fontSizeInput.value + 'px';
  changeableTextareas.forEach(textarea => {
    textarea.style.fontFamily = selectedFont;
    textarea.style.fontSize = fontSize;
  });
  localStorage.setItem('selectedFont', selectedFont);
  localStorage.setItem('fontSize', fontSize);
  changeFontStatus();
});
const savedFont = localStorage.getItem('selectedFont');
const savedFontSize = localStorage.getItem('fontSize');
if (savedFont || savedFontSize) {
  changeableTextareas.forEach(textarea => {
    if (savedFont) {
      textarea.style.fontFamily = savedFont;
      fontSelect.value = savedFont;
    }
    if (savedFontSize) {
      textarea.style.fontSize = savedFontSize;
      fontSizeInput.value = savedFontSize.slice(0, -2);
    }
  });
}
function changeFontStatus() {
  let fontStyleUI = document.querySelector('#font-style-ui');
  let fontSizeUI = document.querySelector('#font-size-ui');

  if (localStorage.getItem('selectedFont') === null) {
    fontStyleUI.innerText = `Font: Calibri`
  } else {
    fontStyleUI.innerText = `Font: ${localStorage.getItem('selectedFont')}`
  }
  if (localStorage.getItem('fontSize') === null) {
    fontSizeUI.innerText = `Size: 17`
  } else {
    fontSizeUI.innerText = `Size: ${localStorage.getItem('fontSize').replace('px', '')}`
  }
}
changeFontStatus();

// Toggle Font Changer Container
document.addEventListener('mouseup', function (e) {
  let container = document.getElementById("font-size-changer-container");
  let fontStyleUI = document.getElementById("font-style-ui");
  let fontSizeUI = document.getElementById("font-size-ui");
  if (!container.contains(e.target) && e.target !== fontStyleUI && e.target !== fontSizeUI) {
    container.style.display = 'none';
  }
});

// Toggle selected textarea
let selectedTextareaBtn = "Lower";
function toggleTextarea() {
  let span = document.getElementById("selected-textarea-toggle-span");
  if (span.innerText === "Lower") {
    span.innerText = "Upper";
    selectedTextareaBtn = "Upper";
    // button.style.background = "#4fc3f7"
  } else {
    span.innerText = "Lower";
    selectedTextareaBtn = "Lower";
    // button.style.background = "#81c784"
  }
}

// Auto switch selected textarea
lowerTextarea.addEventListener("focus", handleTextareaFocus);
upperTextarea.addEventListener("focus", handleTextareaFocus);
function handleTextareaFocus(event) {
  let span = document.getElementById("selected-textarea-toggle-span");
  if (event.target === lowerTextarea) {
    span.innerText = "Lower";
    selectedTextareaBtn = "Lower";
    // button.style.background = "#81c784"
  } else {
    span.innerText = "Upper";
    selectedTextareaBtn = "Upper";
    // button.style.background = "#4fc3f7"
  }
  updateTextareaInsert();
}

// Drag and Resize Function
function initDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var popups = document.getElementsByClassName('popup');
  var elmnt = null;
  var currentZIndex = 1;
  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);
    popup.onmousedown = function () {
      this.style.zIndex = '' + ++currentZIndex;
    };
    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }
  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = '' + ++currentZIndex;
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    if (!elmnt) {
      return;
    }
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function getHeader(element) {
    var headerItems = element.getElementsByClassName('popup-header');

    if (headerItems.length === 1) {
      return headerItems[0];
    }
    return null;
  }
}
initDragElement();

// Prompt alert upon closing of browser
function closingWindowPrompt() {
  window.onbeforeunload = function () {
    return 'Changes you made may not be saved.';
  }
}
function updateClosingPromptSetting() {
  const checkbox = document.getElementById('closing-window-prompt-checkbox');
  if (checkbox.checked) {
    closingWindowPrompt();
  } else {
    window.onbeforeunload = null;
  }
  localStorage.setItem('closing_prompt_checked', checkbox.checked ? '1' : '0');
}
function applyClosingPromptSetting() {
  let closingPromptChecked = localStorage.getItem('closing_prompt_checked');
  if (closingPromptChecked !== '0') {
    closingWindowPrompt();
  }
  if (closingPromptChecked === null) {
    closingPromptChecked = '1';
    closingWindowPrompt();
  }
  document.getElementById('closing-window-prompt-checkbox').checked = closingPromptChecked !== '0';
  localStorage.setItem('closing_prompt_checked', closingPromptChecked);
}
document.getElementById('closing-window-prompt-checkbox').addEventListener('input', updateClosingPromptSetting);
document.addEventListener('DOMContentLoaded', function () {
  applyClosingPromptSetting();
});

// Centered containers
window.addEventListener('load', function () {
  const centeredElements = document.querySelectorAll('.centered');
  centeredElements.forEach(element => {
    element.style.position = 'absolute';
    element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`;
    element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`;
  });
});

// Search filter
const searchLinksInput = document.getElementById('main-search-bar');
const list = document.getElementById('search-bar-data-container');
const noResultsDiv = document.createElement('div');
noResultsDiv.classList.add('no-results');
noResultsDiv.textContent = 'No results found';
searchLinksInput.addEventListener('input', () => {
  const filter = searchLinksInput.value.toUpperCase();
  const divs = list.querySelectorAll('.link-filterable');
  let noResults = true;
  divs.forEach(div => {
    div.hidden = filter && !div.querySelector('div').textContent.toUpperCase().includes(filter);
    if (!div.hidden) {
      noResults = false;
    }
  });
  if (noResults) {
    list.appendChild(noResultsDiv);
  } else if (list.contains(noResultsDiv)) {
    noResultsDiv.remove();
  }
});

// Search function reset
function initSearchBar() {
  document.getElementById('main-search-bar').value = '';
  searchLinksInput.dispatchEvent(new Event('input'));
}

function showSearchContainer() {
  show('search-bar-data-container');
  show('search-bar-footer');
  document.querySelector("#search-bar-main-container").style.zIndex = 1039;
  document.getElementById("search-bar-main-container").classList.add("search-bar-main-container-active");
  document.querySelector(".search-bar-icon").style = `color: #222;`
  document.querySelector("#main-search-bar").style = `
  box-shadow: none;
  outline: 0 none;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  color: #222;
`;
}
document.querySelector("#main-search-bar").addEventListener("focus", showSearchContainer);

// Onclick outside search container, hide it and reset style
function hideSearchBar() {
  document.querySelector('#search-bar-main-container').style.zIndex = 0;
  document.querySelector('#search-bar-data-container').style.display = 'none';
  document.querySelector('#search-bar-footer').style.display = 'none';
  document.getElementById("search-bar-main-container").classList.remove("search-bar-main-container-active");
  document.querySelector("#main-search-bar").blur();
  document.querySelector(".search-bar-icon").style = `color: #ccc;`
  document.querySelector("#main-search-bar").style = `
    border-top: none;
    border-left: 1px solid #929298;
    border-right: 1px solid #929298;
    border-bottom: none;
    background-color: #4e4e54;
    color: #ccc;
  `;
}
document.addEventListener('mousedown', function (e) {
  let container = document.querySelector('#search-bar-main-container');
  if (!container.contains(e.target)) {
    hideSearchBar();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideSearchBar();
    initSearchBar();
    hide('resources-container')
  }
});

// Onclick of search link, increment count
function saveClickCount(title) {
  let clickCounts = JSON.parse(localStorage.getItem('clickCounts')) || {};
  clickCounts[title] = (clickCounts[title] || 0) + 1;
  localStorage.setItem('clickCounts', JSON.stringify(clickCounts));
}

// Resources Window, close onclick outside
let resourcesContainer = document.getElementById("resources-container");
let triggerSpan = document.getElementById("resources-window-trigger-span");
document.addEventListener("click", function (event) {
  if (!resourcesContainer.contains(event.target) && !triggerSpan.contains(event.target)) {
    hide('resources-container');
  }
});
triggerSpan.addEventListener("click", function () {
  toggle('resources-container');
});
document.addEventListener('keydown', function (e) {
  if (e.code === 'F1') {
    document.querySelector("#resources-window-trigger-span").click();
  }
});

document.addEventListener("click", function (event) {
  if (!document.querySelector("#editor-mini-settngs-container").contains(event.target) && !document.querySelector("#editor-mini-settings-trigger").contains(event.target)) {
    hide('editor-mini-settngs-container');
  }
});

// Navbar dropdowns
let currentDropdown = null;
document.querySelectorAll('.editor-navbar-tabs').forEach(function (button) {
  button.addEventListener('click', function (e) {
    let dropdown = document.getElementById(e.target.dataset.dropdownId);
    if (currentDropdown === dropdown) {
      dropdown.classList.toggle("show");
      currentDropdown = null;
    } else {
      if (currentDropdown != null) {
        currentDropdown.classList.remove("show");
      }
      currentDropdown = dropdown;
      currentDropdown.classList.add("show");
    }
  });
});
window.onclick = function (e) {
  if (!e.target.matches('.editor-navbar-tabs')) {
    if (currentDropdown != null) {
      currentDropdown.classList.remove("show");
      currentDropdown = null;
    }
  }
}

// Sidebar Tabs
let sidebarTabs = document.querySelectorAll('.sidebar-tabs');
let tabContents = document.querySelectorAll('.sidebar-tab-content');
sidebarTabs.forEach(function (tabLink) {
  tabLink.addEventListener('click', function () {
    let tabId = this.dataset.tab;
    sidebarTabs.forEach(function (tabLink) {
      tabLink.classList.remove('active');
    });
    tabContents.forEach(function (tabContent) {
      tabContent.style.display = 'none';
    });
    this.classList.add('active');
    document.getElementById(tabId).style.display = 'block';
  });
});
document.getElementById("editor-tab-btn").click();

// USCS Builder Filter checkboxes
let uscsBuilderFilterCheckboxes = document.querySelectorAll(".uscs-builder-filter-checkboxes");
uscsBuilderFilterCheckboxes.forEach(function (checkbox) {
  let target = checkbox.getAttribute("data-target");
  let div = document.getElementById(target);
  checkbox.checked = localStorage.getItem(checkbox.id) !== "false";
  div.style.display = checkbox.checked ? "block" : "none";
  checkbox.addEventListener("change", function () {
    localStorage.setItem(checkbox.id, checkbox.checked);
    div.style.display = checkbox.checked ? "block" : "none";
  });
});
document.getElementById("uscs-builder-filter-select-all-checkbox").addEventListener("change", function () {
  let check = this.checked;
  let checkboxes = document.getElementsByClassName("uscs-builder-filter-checkboxes");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = check;
    let event = new Event("change");
    checkboxes[i].dispatchEvent(event);
  }
});
let selectAllCheckbox = document.getElementById("uscs-builder-filter-select-all-checkbox");
selectAllCheckbox.checked = localStorage.getItem("selectAllCheckboxState") === "true";
selectAllCheckbox.addEventListener("change", function () {
  localStorage.setItem("selectAllCheckboxState", this.checked);
});

// Resources Save checkboxes
function saveCheckboxState(checkbox) {
  // Get the ID of the checkbox
  let checkboxId = checkbox.id;
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // If it is checked, save the value "true" to local storage
    localStorage.setItem(checkboxId, "true");
  } else {
    // If it is not checked, save the value "false" to local storage
    localStorage.setItem(checkboxId, "false");
  }
}
// This function will be called when the page is loaded
function restoreCheckboxState() {
  // Get all the checkboxes on the page that have the class "local"
  let checkboxes = document.querySelectorAll("input[type='checkbox'].local");
  // Loop through each checkbox
  for (let i = 0; i < checkboxes.length; i++) {
    // Get the current checkbox
    let checkbox = checkboxes[i];
    // Get the ID of the checkbox
    let checkboxId = checkbox.id;
    // Get the value of the checkbox from local storage
    let checkboxValue = localStorage.getItem(checkboxId);
    // If the value is "true", set the checkbox to checked
    if (checkboxValue === "true") {
      checkbox.checked = true;
    }
  }
}
restoreCheckboxState();
// Add an event listener to each checkbox that has the class "local" and will save its state when it is checked
let checkboxes = document.querySelectorAll("input[type='checkbox'].local");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function () {
    saveCheckboxState(this);
  });
}

// Clear checkboxes, use arg (id of form) for onclick
function clearChecks(formId) {
  event.preventDefault();
  var checkboxes = document.querySelectorAll('#' + formId + ' input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkbox.click();
    }
  });
}

// Simulate click
function simulateClick(id) {
  document.querySelector(`#${id}`).click();
}

// Simulate enter key when on input
function simulateEnterKey(id) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.querySelector(`#${id}`).click();
  }
}

// Show hidden element
function show(id) {
  const element = document.querySelector(`#${id}`);
  element.style.zIndex = 10;
  element.style.opacity = 0;
  element.style.display = 'block';
  requestAnimationFrame(function () {
    element.style.transition = 'opacity 200ms';
    element.style.opacity = 1;
  });
}

function showInline(id) {
  const element = document.querySelector(`#${id}`);
  element.style.opacity = 0;
  element.style.display = 'inline-block';
  requestAnimationFrame(function () {
    element.style.transition = 'opacity 200ms';
    element.style.opacity = 1;
  });
}

function hide(id) {
  const element = document.querySelector(`#${id}`);
  element.style.opacity = 0;
  requestAnimationFrame(function () {
    element.style.transition = 'opacity 200ms';
    element.style.display = 'none';
  });
}

function toggle(id) {
  const element = document.querySelector(`#${id}`);
  if (window.getComputedStyle(element).display === 'none') {
    show(id);
  } else {
    hide(id);
  }
}

function toggleInline(id) {
  const element = document.querySelector(`#${id}`);
  if (window.getComputedStyle(element).display === 'none') {
    showInline(id);
  } else {
    hide(id);
  }
}

function copy(id) {
  let copyText = document.querySelector(`#${id}`);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

function clear(id) {
  document.querySelector(`#${id}`).value = '';
}

function cleartext(id) {
  document.querySelector(`#${id}`).value = "";
}

function clearMults(ids) {
  let inputs = document.querySelectorAll(ids);
  for (let input of inputs) {
    input.value = '';
  }
}

// Clear textarea
function cleartextarea() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.value = "";
}

// Copy textarea
function copytext() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// Focus on input/textarea
function setFocus(id) {
  document.querySelector(`#${id}`).focus();
}

//Word counter for Lower textarea
function wordCount() {
  let textarea = document.getElementById('lower-textarea')
  let counteroutput = document.getElementById('word-count-ui')
  let words, chars
  words = (textarea.value == '') ? 0 : textarea.value.split(' ').length
  chars = textarea.value.length
  counteroutput.innerHTML = `Words: <span>${words}, Chars: ${chars}</span>`
}

document.getElementById('lower-textarea').addEventListener('input', function (e) {
  wordCount();
}, false)

document.addEventListener("DOMContentLoaded", function (event) {
  wordCount();
}, false)

window.addEventListener("load", function (event) {
  wordCount();
}, false)

// Find and Replace
document.querySelector("#find-and-replace-btn").addEventListener("click", function () {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  addToTextareaHistory();
  textarea.value = textarea.value.replaceAll(document.querySelector('#snr-find').value, document.querySelector('#snr-replace').value);
});

// Toggle Find and Replace
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.code === "KeyH") {
    event.preventDefault();
    toggle('find-and-replace-container');
    setFocus('snr-find');
  }
});

// Paragraph Wrap
function selectedTextParagraphWrap() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    return;
  }
  let lines = selectedText.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<p>')) {
      newLines += '<p>' + lines[i] + '</p>\n';
    } else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<p>', '');
      lines[i] = lines[i].replace('</p>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<p>' + lines[i] + '</p>\n');
      newLines += lines[i];
    }
  }
  document.execCommand('insertText', false, newLines);
}

// Annotation Wrap
function selectedTextAnnotationWrap() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    return;
  }
  let lines = selectedText.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<annot:annotationLevel><annot:body><p>“')) {
      newLines += '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>\n';
    } else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<annot:annotationLevel><annot:body><p>“', '');
      lines[i] = lines[i].replace('</p></annot:body></annot:annotationLevel>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<annot:annotationLevel><annot:body><p>“' + lines[i] + '</p></annot:body></annot:annotationLevel>\n');
      lines[i] = lines[i].replace('<p><p>“', '<p>“');
      lines[i] = lines[i].replace('<p><p>', '<p>“');
      lines[i] = lines[i].replace('<p>“<p>', '<p>“');
      lines[i] = lines[i].replace('</p></p>', '</p>');
      newLines += lines[i];
    }
  }
  document.execCommand('insertText', false, newLines
    .replaceAll('“', '‘')
    .replaceAll('”', '’')
    .replaceAll('<p><p>“', '<p>“')
    .replaceAll('<p><p>', '<p>“')
    .replaceAll('<p>“<p>', '<p>“')
    .replaceAll('</p></p>', '</p>')
    .replaceAll('<p>‘', '<p>“'))
    ;
}

// Wrap text in emphasis italics
function selectedTextEmphasisItalicWrap() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    return;
  }
  let lines = selectedText.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<emphasis style="italic">')) {
      newLines += '<emphasis style="italic">' + lines[i] + '</emphasis>';
    } else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<emphasis style="italic">', '');
      lines[i] = lines[i].replace('</emphasis>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<emphasis style="italic">' + lines[i] + '</emphasis>');
      newLines += lines[i];
    }
  }
  document.execCommand('insertText', false, newLines);
}
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "i") {
    selectedTextEmphasisItalicWrap();
  }
});

// Wrap text in emphasis bold
function selectedTextEmphasisBoldWrap() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    return;
  }
  let lines = selectedText.split('\n');
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "" && !lines[i].includes('<emphasis style="bold">')) {
      newLines += '<emphasis style="bold">' + lines[i] + '</emphasis>';
    } else if (lines[i] !== "") {
      lines[i] = lines[i].replace('<emphasis style="bold">', '');
      lines[i] = lines[i].replace('</emphasis>', '');
      lines[i] = lines[i].replace(/(.*[^\n])/g, '<emphasis style="bold">' + lines[i] + '</emphasis>');
      newLines += lines[i];
    }
  }
  document.execCommand('insertText', false, newLines);
}
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "b") {
    selectedTextEmphasisBoldWrap();
  }
});

// Fixit Selected Text
function fixitSelectedText() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    return;
  }
  for (let i = 0; i < 8; i++) {
    selectedText = selectedText
      .replaceAll('&#x2014;', '—')
      .replaceAll('&#8211;', '–')
      .replaceAll('&amp;', '&')
      .replaceAll('&#x2018;', '‘')
      .replaceAll('&#x2019;', '’')
      .replaceAll('&#x201c;', '“')
      .replaceAll('&#x201d;', '”')
      .replaceAll('&#xa7;', '§')
      .replaceAll(",", ",")
      .replaceAll("  ", " ")
      .replaceAll("   ", " ")
      .replaceAll(";;;", ";")
      .replaceAll(";;", ";")
      .replaceAll(" ;", ";")
      .replaceAll(",,,", ",")
      .replaceAll(",,", ",")
      .replaceAll(" .", ".")
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
      .replaceAll('<p><p>', '<p>')
      .replaceAll('</p></p>', '</p>')
      .replaceAll('...', ' ...')
      .replaceAll('> <', '><')

  }
  document.execCommand('insertText', false, selectedText);
}

//Fixit
function fixLowerTextarea() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  for (let i = 1; i < 8; i++) {
    textarea.value = textarea.value
      .replaceAll('&#x2014;', '—')
      .replaceAll('&#8211;', '–')
      .replaceAll('&amp;', '&')
      .replaceAll('&#x2018;', '‘')
      .replaceAll('&#x2019;', '’')
      .replaceAll('&#x201c;', '“')
      .replaceAll('&#x201d;', '”')
      .replaceAll('&#xa7;', '§')
      .replaceAll(" ,", ",")
      .replaceAll("  ", " ")
      .replaceAll("   ", " ")
      .replaceAll(";;;", ";")
      .replaceAll(";;", ";")
      .replaceAll(" ;", ";")
      .replaceAll(",,,", ",")
      .replaceAll(",,", ",")
      .replaceAll(" .", ".")
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
      .replaceAll('<p><p>', '<p>')
      .replaceAll('</p></p>', '</p>')
      .replaceAll('...', ' ...')
      .replaceAll('> <', '><')
  };
}

// Merge
function mergeLowerTextarea() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/(\n)/gm, " ")
}

// Remove Blank Lines
function removeBlankLines() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  for (let i = 1; i < 8; i++) {
    textarea.value = textarea.value
      .replace(/^\s*[\r\n]/gm, "");
  };
}

//Remove XML Tags
function removeXMLTags() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value.replace(/<\/?[^>]+(>|$)/g, "")
}

// Remove ref:page tags
function removeRefPageTags() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/<ref:page num="\d+"\/>/g, "");
}

// Delete all Bracketed Matter
function deleteAllBracketedMatter() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replace(/\s*\[[^\]]*\]/g, '');
}

document.getElementById("upper-textarea").addEventListener("input", function () {
  toggleErrorContainer(this.value);
});
document.getElementById("lower-textarea").addEventListener("input", function () {
  toggleErrorContainer(this.value);
});
function toggleErrorContainer(value) {
  if (/<ref:page num/g.test(value)) {
    document.getElementById("error-notification-container").style.display = "block";
  } else {
    document.getElementById("error-notification-container").style.display = "none";
  }
}

//Replace XML Entities
function replaceXMLEntities() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value
    .replaceAll('&#x2014;', '—')
    .replaceAll('&#8211;', '–')
    .replaceAll('&amp;', '&')
    .replaceAll('&#x2018;', '‘')
    .replaceAll('&#x2019;', '’')
    .replaceAll('&#x201c;', '“')
    .replaceAll('&#x201d;', '”')
    .replaceAll('&#xa7;', '§')
}

//CleanUp Tasklist Data
function deleteLines() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  var lines = textarea.value.split('\n');
  var newLines = [];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("Noted Under Review") != -1 && lines[i].indexOf("117-263") != -1) {
      newLines.push(lines[i]);
    }
  }
  textarea.value = newLines.join('\n');
}
function cleanupTasklistActSection() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value

    .replaceAll('_', ' ')
    .replaceAll('+', ',')
    .replaceAll('lParen', '(')
    .replaceAll('rParen', ')')
}
function extractText() {
  let textarea;
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  const inputText = textarea.value;
  const lines = inputText.split('\n');
  let outputText = '';
  for (let i = 0; i < lines.length; i++) {
    const textArr = lines[i].split('|').filter(text => text.trim() !== '');
    const extractedText = textArr.slice(4, 6).join(' | ');
    outputText += extractedText + '\n';
  }
  textarea.value = outputText;
}

function tabularizeTasklist() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  const lines = textarea.value.split('\n');
  let outputText = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\|/g, '\t');
    outputText += line + '\n';
  }
  textarea.value = outputText;
}

//Remove Empty Lines
function removeEmptyLinesLowerTextarea() {
  if (selectedTextareaBtn == "Upper") {
    textarea = document.getElementById("upper-textarea");
  } else {
    textarea = document.getElementById("lower-textarea");
  }
  textarea.select();
  textarea.value = textarea.value.replace(/^\s*[\r\n]/gm, "");
}

//Text Case Converter
let stringbox = document.getElementById('lower-textarea')
function convertstring(textarea, action) {
  let selectedText = '';
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
  let smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
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

function addToTextareaHistory() {
  let upperTextarea = document.querySelector("#upper-textarea");
  let lowerTextarea = document.querySelector("#lower-textarea");
  let upperHistory = document.querySelector("#history-tab-upper-textarea");
  let lowerHistory = document.querySelector("#history-tab-lower-textarea");
  upperHistory.value = upperHistory.value + `\n------------------------------------------${new Date().toLocaleTimeString()}------------------------------------------\n` + upperTextarea.value;
  lowerHistory.value = lowerHistory.value + `\n------------------------------------------${new Date().toLocaleTimeString()}------------------------------------------\n` + lowerTextarea.value;
}

document.addEventListener("keydown", function (event) {
  if ((event.target.id === "upper-textarea" || event.target.id === "lower-textarea") && event.ctrlKey && event.key === "x") {
    addToTextareaHistory();
  }
});

// Toggle Two Views
function toggleTwoViews(firstId, secondId) {
  let firstDiv = document.getElementById(firstId);
  let secondDiv = document.getElementById(secondId);
  if (firstDiv.style.display === "none") {
    firstDiv.style.display = "block";
    secondDiv.style.display = "none";
  } else {
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";
  }
}

function showPreviewNotification() {
  if (document.querySelector("#preview-content").style.display === "block") {
    document.querySelector("#read-only-preview-notif-span").style.display = "block";
  } else {
    document.querySelector("#read-only-preview-notif-span").style.display = "none";
  }
}

// Page Viewer Spellcheck attribute
document.querySelector('#page-viewer-contenteditable').setAttribute("spellcheck", "false");

// Page Viewer Iframe Source on User Input
document.getElementById('page-viewer-input').addEventListener('input', reloadPDFViewer);
function reloadPDFViewer(event) {
  const iframe = document.getElementById('page-viewer-iframe');
  const input = event.target;
  const newUrl = input.value;
  iframe.src = newUrl;
}

// Insert function, set target textarea
window.addEventListener('load', function () {
  updateTextareaInsert();
});

// Iframe Loader Function
window.addEventListener('load', function () {
  document.querySelectorAll('.loader-btn').forEach(function (frame) {
    frame.addEventListener('click', function (e) {
      if (!frame.dataset.clicked) {
        const iframe = document.querySelector(frame.dataset.ifrSrc);
        iframe.src = iframe.dataset.src;
        show('window-spinner');
        iframe.addEventListener('load', function () {
          document.querySelector('#window-spinner').style.display = 'none';
        });
      }
      frame.dataset.clicked = true;
    });
  });
});

// Iframe Refresher Function
window.addEventListener('load', function () {
  document.querySelectorAll('.refresh-iframe-btn').forEach(function (frame) {
    frame.addEventListener('click', function (e) {
      const iframe = document.querySelector(frame.dataset.ifrSrc);
      iframe.src = iframe.dataset.src;
    });
  });
});

// Iframes buttons display
if (localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] === "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") {
  document.querySelector("#google-docs-ivma-loader-btn").style.display = "block"
  document.querySelector("#google-sheets-ivma-loader-btn").style.display = "block"
  document.querySelector("#google-docs-chat-loader-btn").style.display = "block"
}
if (localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] === "LcfB8tE5uqJwAvhXrNv76G22MRAny8aD") {
  document.querySelector("#google-docs-eury-loader-btn").style.display = "block"
  document.querySelector("#google-docs-chat-loader-btn").style.display = "block"
}

// Tracker Logs Copy Function
let defaultTrackerLogsOrder = 0;
let switchButton = document.getElementById("tracker-logs-switch-btn");
document.querySelector('#tracker-logs-switch-btn').addEventListener('click', () => {
  if (defaultTrackerLogsOrder === 0) {
    defaultTrackerLogsOrder = 1;
  } else if (defaultTrackerLogsOrder === 1) {
    defaultTrackerLogsOrder = 0;
  }
  switchButton.textContent = "Order Switched";
  switchButton.disabled = true;
  setTimeout(function () {
    switchButton.textContent = "Switch Order";
    switchButton.disabled = false;
  }, 1000);
});
document.querySelector('#copy-logs-button').addEventListener('click', () => {
  let initials = document.querySelector('#tracker-logs-initials').value;
  let date = document.querySelector('#tracker-logs-date').value;
  let log;
  if (defaultTrackerLogsOrder === 0) {
    log = `${date}\t${initials}`;
  } else {
    log = `${initials}\t${date}`;
  }
  navigator.clipboard.writeText(log);
});
window.addEventListener('load', function () {
  let nyTime = new Date();
  let nyTimezoneOffset = -4;
  nyTime.setTime(nyTime.getTime() + (nyTimezoneOffset * 60 * 60 * 1000));
  document.getElementById('tracker-logs-date').valueAsDate = nyTime;
});


// Local storage space UI
window.addEventListener('load', function () {
  let data = '';
  for (let key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      data += window.localStorage[key];
      document.getElementById("storage-info").innerHTML = `Local Storage: ${((data.length * 16) / (8 * 1024)).toFixed(2) + ' KB'} / ${(5120 - ((data.length * 16) / (8 * 1024))).toFixed(2) + ' KB'}`
    }
  }
});

// Get references to the button, container, and template
const createButton = document.getElementById('add-new-note-button');
const stickyNoteContainer = document.getElementById('sticky-note-container');
const stickyNoteTemplate = document.getElementById('sticky-note-template');
// Load the saved sticky notes from local storage
const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
for (const savedNote of savedNotes) {
  addStickyNote(savedNote);
}
// Add a new sticky note when the button is clicked
createButton.addEventListener('click', event => {
  addStickyNote('');
});
// Add a sticky note to the page
function addStickyNote(noteText) {
  // Clone the sticky note template
  const stickyNote = stickyNoteTemplate.content.cloneNode(true);
  // Set the note text
  stickyNote.querySelector('.note-text').value = noteText;
  // Add the delete button event listener
  stickyNote.querySelector('.delete-note-button').addEventListener('click', event => {
    // Display the confirm prompt
    if (confirm('Are you sure you want to delete this sticky note?')) {
      // If the user confirms the delete action, delete the sticky note
      stickyNoteContainer.removeChild(event.target.parentElement.parentElement);
      saveNotes();
    }
  });
  // Add the change event listener to the textarea
  stickyNote.querySelector('.note-text').addEventListener('input', event => {
    saveNotes();
  });
  // Add the sticky note to the page
  stickyNoteContainer.appendChild(stickyNote);
  // Save the sticky notes to local storage
  saveNotes();
  initDragElement();
}
// Save the sticky notes to local storage
function saveNotes() {
  const notes = [];
  for (const stickyNote of stickyNoteContainer.children) {
    notes.push(stickyNote.querySelector('.note-text').value);
  }
  localStorage.setItem('savedNotes', JSON.stringify(notes));
}

// Clipboard JS
const clipboard = new ClipboardJS('.copybtn');

// F8 Toggle
document.addEventListener("keydown", function (event) {
  if (event.code === "F8" && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] === "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") {
    let ivmaElements = document.getElementsByClassName("ivma");
    let adminElements = document.getElementsByClassName("admin");
    for (let i = 0; i < ivmaElements.length; i++) {
      let element = ivmaElements[i];
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
    for (let i = 0; i < adminElements.length; i++) {
      let element = adminElements[i];
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  }
});

//Prevent links from being dragged
document.addEventListener('mousedown', function (event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }
});
document.addEventListener("dragstart", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
  }
});

// Prevent right clicking images
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', event => event.preventDefault());
  });
});

//Prevent enter button on forms and inputs
const inputNoEnterElements = document.querySelectorAll('.no-enter');
inputNoEnterElements.forEach(function (element) {
  element.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

// Prevent F1, Ctrl + S, Alt + F, Alt + D, Alt + E
document.addEventListener("keydown", function (event) {
  if (event.code === "F1" || event.ctrlKey && event.code === "KeyS" || event.altKey && event.code === "KeyF" || event.altKey && event.code === "KeyD" || event.altKey && event.code === "KeyF" || event.altKey && event.code === "KeyE") {
    event.preventDefault();
  }
});

// Turn off autocomplete on all input
document.querySelectorAll('input').forEach(input => {
  input.setAttribute('autocomplete', 'off');
});

// Stopwatch
let startBtn = document.querySelector('.stopwatch-start');
let pauseBtn = document.querySelector('.stopwatch-pause');
let resetBtn = document.querySelector('.stopwatch-reset');
let timer = document.querySelector('.stopwatch-timer');
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;
function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    startBtn.classList.add('active');
    pauseBtn.classList.remove('active');
    timer.style.cursor = "default";
  }
}
function pauseTimer() {
  if (!difference) {
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    startBtn.classList.remove('active');
    pauseBtn.classList.add('active');
    timer.style.cursor = "pointer";
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
  timer.innerHTML = 'Start';
  startBtn.classList.remove('active');
  pauseBtn.classList.remove('active');
  timer.style.cursor = "pointer";
}
function getShowTime() {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  timer.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds > 9 ? seconds : "0" + seconds);
}

document.addEventListener("keydown", function (event) {
  if (event.altKey) {
    event.preventDefault();
  }
});

let currentTextarea = null;
upperTextarea.addEventListener("focus", function () {
  currentTextarea = upperTextarea;
});
lowerTextarea.addEventListener("focus", function () {
  currentTextarea = lowerTextarea;
});

// Move Line Up or Down and via keyboard arrows
function moveSelectedLineUp() {
  addToTextareaHistory();
  const currentPosition = currentTextarea.selectionStart;
  const currentLine = currentTextarea.value.substr(0, currentPosition).split("\n").length - 1;
  if (currentLine > 0) {
    const lines = currentTextarea.value.split("\n");
    const temp = lines[currentLine];
    lines[currentLine] = lines[currentLine - 1];
    lines[currentLine - 1] = temp;
    currentTextarea.value = lines.join("\n");
    const newCursorPosition = currentPosition - lines[currentLine - 1].length - 1;
    currentTextarea.setSelectionRange(newCursorPosition, newCursorPosition);
  }
}

function moveSelectedLineDown() {
  addToTextareaHistory();
  const currentPosition = currentTextarea.selectionStart;
  const currentLine = currentTextarea.value.substr(0, currentPosition).split("\n").length - 1;
  const lines = currentTextarea.value.split("\n");
  if (currentLine < lines.length - 1) {
    const temp = lines[currentLine];
    lines[currentLine] = lines[currentLine + 1];
    lines[currentLine + 1] = temp;
    currentTextarea.value = lines.join("\n");
    const newCursorPosition = currentPosition + lines[currentLine + 1].length + 1;
    currentTextarea.setSelectionRange(newCursorPosition, newCursorPosition);
  }
}
document.addEventListener("keydown", function (event) {
  if (currentTextarea && !event.shiftKey && event.altKey && event.key === "ArrowUp") {
    moveSelectedLineUp();
    event.preventDefault();
  } else if (currentTextarea && !event.shiftKey && event.altKey && event.key === "ArrowDown") {
    moveSelectedLineDown();
    event.preventDefault();
  }
});

function copySelectedLineUp() {
  addToTextareaHistory();
  const currentPosition = currentTextarea.selectionStart;
  const currentLine = currentTextarea.value.substr(0, currentPosition).split("\n").length - 1;
  const lines = currentTextarea.value.split("\n");
  const copiedLine = lines[currentLine];
  lines.splice(currentLine, 0, copiedLine);
  currentTextarea.value = lines.join("\n");
  const newCursorPosition = currentPosition + copiedLine.length - 1;
  currentTextarea.setSelectionRange(newCursorPosition, newCursorPosition);
}
function copySelectedLineDown() {
  addToTextareaHistory();
  const currentPosition = currentTextarea.selectionStart;
  const currentLine = currentTextarea.value.substr(0, currentPosition).split("\n").length - 1;
  const lines = currentTextarea.value.split("\n");
  const copiedLine = lines[currentLine];
  lines.splice(currentLine + 1, 0, copiedLine);
  currentTextarea.value = lines.join("\n");
  const newCursorPosition = currentPosition + copiedLine.length + 1;
  currentTextarea.setSelectionRange(newCursorPosition, newCursorPosition);
}
document.addEventListener("keydown", function (event) {
  if (currentTextarea && event.shiftKey && event.altKey && event.key === "ArrowUp") {
    copySelectedLineUp();
    event.preventDefault();
  } else if (currentTextarea && event.shiftKey && event.altKey && event.key === "ArrowDown") {
    copySelectedLineDown();
    event.preventDefault();
  }
});