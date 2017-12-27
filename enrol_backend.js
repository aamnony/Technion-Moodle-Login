var new_script = document.createElement('script');
new_script.src = chrome.extension.getURL('enrol_frontend.js');
document.body.appendChild(new_script);