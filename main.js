function copyToClipboard(codeId) {
  var codeSample = document.getElementById(codeId);
  var textArea = document.createElement('textarea');
  textArea.value = codeSample.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
