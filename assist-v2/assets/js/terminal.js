const commandTerminal = document.querySelector('#assist-terminal');
const commandInput = document.querySelector('#command-input');
const commandOutput = document.querySelector('#command-output');
const user = localStorage.getItem('mUALK9nMxj29jUagswfC');

const terminal_version = `Assist v2.0.0`

/*****************************************************************************************/

function initTerminal() {
  commandOutput.innerHTML = `${terminal_version} [${new Date(Date.now()).toLocaleString()}]<br><br>${user}~<br><br>`;
}

document.addEventListener('keydown', function (e) {
  if (e.code === "Backquote" || e.code === "ControlLeft" || e.code === "Escape" || e.code === "KeyA") {
    return;
  } else {
    document.querySelector('#command-input').focus();
  }
});

/*****************************************************************************************/

commandInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && commandInput.value.length > 0) {

    if (commandInput.value == 'clear') {
      initTerminal();
    }

    else if (commandInput.value == 'print') {
      exportCommandLogs();
      commandOutput.innerHTML += `<span class="cli-success">exporting logs...</span><br>`;
    }

    else if (commandInput.value == 'storage') {
      let i;
      commandOutput.innerHTML += `[localStorage]<br>`;
      for (i = 0; i < localStorage.length; i++) {
        commandOutput.innerHTML += `${localStorage.key(i)} = [<span class="cli-success">${localStorage.getItem(localStorage.key(i))}</span>]<br>`;
      }
      commandOutput.innerHTML += `<br>[sessionStorage]<br>`;
      for (i = 0; i < sessionStorage.length; i++) {
        commandOutput.innerHTML += `${sessionStorage.key(i)} = [<span class="cli-success">${sessionStorage.getItem(sessionStorage.key(i))}</span>]<br>`
      }
    }

    else if (commandInput.value == 'space') {
      let localStorageSpace = function () {
        let data = '';

        commandOutput.innerHTML += `Current local storage:<br>`;

        for (let key in window.localStorage) {
          if (window.localStorage.hasOwnProperty(key)) {
            data += window.localStorage[key];
            commandOutput.innerHTML += `${key} = ${((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2)} KB <br>`
          }
        }
        commandOutput.innerHTML += `---------------------------------------- <br>`
        commandOutput.innerHTML += `${data ? '\n' + 'Total space used: ' + ((data.length * 16) / (8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)'} <br>`
        commandOutput.innerHTML += `${data ? 'Approx. space remaining: ' + (5120 - ((data.length * 16) / (8 * 1024)).toFixed(2)) + ' KB' : '5 MB'}`
      };
      localStorageSpace();
    }

    else if (commandInput.value.includes('!g') || commandInput.value.includes('!G')) {
      const query = commandInput.value.replace('!g ', '').replace('!G ', '').replace('!google ', '').replace('!Google ', '');
      commandOutput.innerHTML += `${commandInput.value}<br>`;
      window.open('https://www.google.com/search?q=' + query);
      commandOutput.innerHTML += `<span class="cli-success">searched Google for "${query}"</span><br>`;
    }

    else if (commandInput.value.includes('!c') || commandInput.value.includes('!C')) {
      const equation = commandInput.value;
      const answer = eval((equation).replace('!c', '').replace('!C', '')).toLocaleString();
      commandOutput.innerHTML += `${commandInput.value}<br>`;
      commandOutput.innerHTML += `<span class="cli-success">=${answer}</span><br>`;
    }

    else {
      commandOutput.innerHTML += `<br><span>${commandInput.value}</span>`;
    }

    commandInput.value = '';
    commandTerminal.scrollTop = commandTerminal.scrollHeight;
  }
});

function downloadCommandLogs(elId, mimeType) {
  const elHtml = document.getElementById(elId).innerHTML
    .replaceAll('<br>', '\n')
    .replaceAll('<span class="cli-success">', '')
    .replaceAll('<span class="cli-danger">', '')
    .replaceAll('</span>', '');
  const link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', 'logs');
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click();
}

function exportCommandLogs() {
  downloadCommandLogs('command-output', 'text');
}