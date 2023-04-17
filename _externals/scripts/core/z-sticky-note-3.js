//Copy sticky note 3
function copy103() {
    let textarea = document.getElementById("sticky-note-textarea-3");
    textarea.select();
    document.execCommand("copy");
}
//Clear sticky note 3
function eraseText103() {
    document.getElementById("sticky-note-textarea-3").value = "";
}
//Save sticky note 3
function saveTextAsFile()
{
var textToWrite = document.getElementById('sticky-note-textarea-3').value;
var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
var fileNameToSaveAs = "Untitled.txt";
var downloadLink = document.createElement("a");
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
if (window.webkitURL != null)
{
downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
}
else
{
downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);
}
downloadLink.click();
}

var button = document.getElementById('save103');
button.addEventListener('click', saveTextAsFile);