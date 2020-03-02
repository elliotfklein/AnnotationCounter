var KEY = "annotation-counter-ids";
var count = 0;

var ids = window.localStorage.getItem(KEY);
if (ids == null) { window.localStorage.setItem(KEY, ""); }

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        var url = changeInfo.url;
        if (url.startsWith("http://macula.eecs.umich.edu/?id=")) {
            if (count == 0) { alert("Beginning counting IDs"); }
            ++count;
            var query = url.substr(33, url.length); //Magic number for the URL
            var id = query.substr(0, query.indexOf("&"));
            
            var ids = window.localStorage.getItem(KEY);
            if (!ids.includes(" " + id + ", ")) { ids += (" " + id + ","); } //Prevent duplicates, use space and comma for instances
            window.localStorage.setItem(KEY, ids);                      //where the string contains itself (e.g. "447" and "47")
            
        } else if (url.includes("clear-annotation-counter-ids")) {
            if (window.localStorage.getItem(KEY) == "") {
                alert("No IDs to clear");
            } else if (confirm("Do you want to clear the following IDs? IDs annotated =" + window.localStorage.getItem(KEY))) {
                window.localStorage.setItem(KEY, "");
                alert("IDs cleared");
            }
        }  else if (url.includes("annotation-counter-ids")) {
            alert("IDs annotated =" + window.localStorage.getItem(KEY));
        }
    }
  }
);
