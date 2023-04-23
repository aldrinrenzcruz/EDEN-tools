let isDarkMode = false;
let darkModeBtn = document.querySelector('#dark-mode-btn');
function setDarkModePreference(value) {
  localStorage.setItem('dark-mode', value);
}
function loadDarkModePreference() {
  let darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'true') {
    isDarkMode = true;
  } else {
    isDarkMode = false;
  }
}
loadDarkModePreference();
toggleDarkMode();
darkModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  setDarkModePreference(isDarkMode);
  toggleDarkMode();
});
function toggleDarkMode() {
  if (isDarkMode) {
    darkModeBtn.innerHTML = `<i class="bi bi-moon"></i>`;
    darkModeBtn.setAttribute('title', 'Light Mode');

    document.querySelector('#editor-tab').classList.add('dark-mode');
    // document.querySelector('.editor-card').classList.add('dark-mode');
    // document.querySelector('#upper-textarea').classList.add('dark-mode');
    // document.querySelector('#lower-textarea').classList.add('dark-mode');
    // document.querySelector('.uscs-builder').classList.add('dark-mode');
    // document.querySelector('.uscs-builder-content').classList.add('dark-mode');

    // addDarkModeClass(document.querySelectorAll('.textarea-header'));
    // addDarkModeClass(document.querySelectorAll('.uscs-builder-card'));
    // addDarkModeClass(document.querySelectorAll('.editor-navbar-tabs'));
    // addDarkModeClass(document.querySelectorAll('.editor-navbar-dropdown'));

    // let sidebarTabContents = document.querySelectorAll('.sidebar-tab-content');
    // addDarkModeClass(sidebarTabContents);
  }
  else {
    darkModeBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`
    darkModeBtn.setAttribute('title', 'Dark Mode');
    let elementsWithDarkModeClass = document.querySelectorAll('.dark-mode');
    for (let i = 0; i < elementsWithDarkModeClass.length; i++) {
      elementsWithDarkModeClass[i].classList.remove('dark-mode');
    }
  }
}

function addDarkModeClass(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('dark-mode');
  }
}

// document.addEventListener("keydown", function (event) {
//   if (event.code === "F2") {
//     darkModeBtn.click();
//   }
// });