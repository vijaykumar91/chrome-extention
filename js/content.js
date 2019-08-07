
/*
 Instantiate
 function insertCss() {
    var css = document.createElement('link');
    css.type = 'text/css';
    css.rel = 'stylesheet';
    css.href = chrome.extension.getURL('styles/inject.css');
    css.id = "spark_ext_css";
    document.getElementsByTagName('head')[0].appendChild(css);
}

function insertFrame() {
    var elt = document.createElement('iframe');
    elt.id = 'spark_iframe';
    elt.src = chrome.extension.getURL('views/test.html');
    elt.setAttribute('scrolling', 'no');

    var parent = document.createElement('div');
    parent.id = 'spark_wrapper';

    parent.appendChild(elt);
    document.getElementsByTagName('body')[0].appendChild(parent);
}
insertCss();
insertFrame();
*/
var domlen=0;
var h=0;
function getUrl(){
	chrome.storage.local.get(['key','key2'],function(result) {
		var searchUrl=result.key;
		var type=result.key2;
});
}
 console.log('chrome.extension==>',chrome.extension);
 console.log('chrome.extension==>',chrome.extension);
chrome.extension.sendMessage({
    action: "pushFrame",
    source: pushIframe(document)
});
function pushIframe(document) {
    var existingFrame = document.getElementById('bmarkFrame');
    if (existingFrame == null) {
        var temp = document.createElement('iframe');
        temp.sandbox = 'allow-forms allow-scripts allow-same-origin';
        temp.id = 'myFrame';
        temp.class = 'myFrame';
        temp.name = 'myFrame';
        temp.setAttribute('scrolling', 'no');
        temp.setAttribute('allowtransparency', 'true');
        temp.style.background= 'transparent';
        temp.style.border= '0px';
        temp.style.boxshadow= 'none';
        temp.style.overflow= 'visible';
        temp.style.padding= '0px';
        temp.style.right= 'auto';
        temp.style.width= '100%';
        temp.style.height= '75px';
        temp.style.top= '0px';
        temp.style.left= '0px';
        temp.style.zIndex= 99999999;
        temp.style.position= 'fixed';
        temp.style.opacity= '1 !important';
        temp.style.maxheight= '75px !important';
        temp.style.display= 'block !important';
		chrome.storage.sync.get(['key','key2'], function(result) {
			if(result.key2 == 'google'){
				$.get( 'https://crm.loginworks.com/?s='+encodeURI(result.key), function(response) {
							domlen = $(response).find('div').length;
							if(domlen > 0){
									temp.src = 'https://crm.loginworks.com/?s='+encodeURI(result.key);
									document.body.appendChild(temp);
							}
				});
			}else{
				$.get('https://crm.loginworks.com/walmart_compare/comparison.php?s='+encodeURI(result.key), function(response) {
							domlen = $(response).find('div').length;
							if(domlen > 0){
									temp.src = 'https://crm.loginworks.com/walmart_compare/comparison.php?s='+encodeURI(result.key);
									document.body.appendChild(temp);
							}
				});
			}	
        });
    }
    else {
        existingFrame.style.display = 'block';
    }
}
function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
    });
}
addEventListener('message', function(ev) {
	 if(ev.data=='nor'){ 
	 }
uls=brk(ev.data);
if(uls[0] == "killme"){
    document.querySelector("iframe#myFrame").remove();
}
if(uls[0] == "pimage"){
    rdct(uls[1]);
}
if(uls[0] == "des"){
   rdct(uls[1]);
}
if(uls[0] == "rating"){
   rdct(uls[1]);
}
if(uls[0] == "home"){
   rdct(uls[1]);
}
if(uls[0] == "ctg"){
   rdct(uls[1]);
}
});
function rdct(ul){
	 window.open(ul,'_blank');
}
function brk(data){
	 lisen=data;
	 var transfer=lisen.toString();
	 return uls= transfer.split("_");
}

