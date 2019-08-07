/*
    Instantiate Scripts
*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	chrome.extension.getBackgroundPage().console.log('foo tabs==>',tabs);
    url=tabs[0].url;	
	var url = new URL(url);
	var c = url.searchParams.get("q");
	if(c =="" || c==null){
		var c= url.searchParams.get("as_epq");
	}
	
	if(c =="" || c==null){
		var c = url.searchParams.get("as_oq");
	}
	if(c =="" || c==null){
		var c = url.searchParams.get("as_eq");
	}
	
	if(c){
		chrome.storage.sync.set({key: c,key2:'google'}, function() {
		});
	chrome.tabs.executeScript({
		file: 'js/content.js'
	}); 
	chrome.tabs.executeScript({
		file: 'libs/jquery-3.2.1.min.js'
	}); 	
	}else{
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
			url2=tabs[0].url;	
		    var splitUrl =url2.split('/');
			 chrome.storage.sync.set({key: splitUrl,key2:'website'}, function() {
			 });
		 });
    chrome.tabs.executeScript({
		file: 'js/content.js'
	}); 
	chrome.tabs.executeScript({
		file: 'libs/jquery-3.2.1.min.js'
	}); 
	}
});
	  /* executeScripts(null, [
        { file: "libs/jquery-3.2.1.min.js" },
        { file: "js/content.js" }
    ])
	*/
	
  }
})
   /*
    Instantiate Scripts
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete') {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          url = tabs[0].url;
          //alert(url);
          var url = new URL(url);
          var c = url.searchParams.get("q");
          if (c == "") {
            var c = url.searchParams.get("as_epq");
          }
          if (c == "") {
            var c = url.searchParams.get("as_oq");
          }
          if (c == "") {
            var c = url.searchParams.get("as_eq");
          }
          console.log("query", c);
          var array = [
            { file: "libs/jquery-3.2.1.min.js" },
            { file: "js/content.js" }
          ];
          array.forEach(function (file) {
            chrome.tabs.executeScript(null, file, function () {
              console.log("file: ", file , " loaded.")
            });
          });
        });
      }
    })
	
function executeScripts(tabId, injectDetailsArray)
{
    function createCallback(tabId, injectDetails, innerCallback) {
        return function () {
            chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
        };
    }
   var callback = null;

    for (var i = injectDetailsArray.length - 1; i >= 0; --i)
        callback = createCallback(tabId, injectDetailsArray[i], callback);

    if (callback !== null)
        callback();   // execute outermost function
	
}*/
chrome.browserAction.onClicked.addListener(function (tab) {
    executeScripts(null, [
        { file: "libs/jquery-3.2.1.min.js" },
        { file: "js/content.js" }
    ])
});