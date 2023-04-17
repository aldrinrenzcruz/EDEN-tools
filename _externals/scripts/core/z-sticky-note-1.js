//Copy sticky note 1
function copy101() {
    let textarea = document.getElementById("sticky-note-textarea-1");
    textarea.select();
    document.execCommand("copy");
}
//Clear sticky note 1
function eraseText101() {
    document.getElementById("sticky-note-textarea-1").value = "";
}
//Save sticky note 1
function saveTextAsFile()
{
var textToWrite = document.getElementById('sticky-note-textarea-1').value;
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
var button = document.getElementById('save101');
button.addEventListener('click', saveTextAsFile);