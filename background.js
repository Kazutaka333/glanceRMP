// Date: 2017/06/17
// Author: J.W
// Description: Run functions.js when extension is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, {file: "functions.js"});

});

// Date: 2017/06/17
// Author: J.W
// Description: HTTP Request preparation
chrome.runtime.onMessage.addListener(function(url, sender, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var doc = xmlHttp.responseXML;
      var div = doc.querySelector("div[class=listings-wrap]");
      // console.log(div.outerHTML);
      /*
       <div class="listings-wrap">
         <div class="listings-header">
           <div class="listing-cat">Category</div>
           <div class="listing-name">Name</div>
         </div>
         <ul class="listings">

           <!-- Starts One professor Listing -->

           <li class="listing PROFESSOR">
             <a href="/ShowRatings.jsp?tid=1795818">
               <span class="listing-cat">
                 <span class="icon icon-professor"></span>
                 PROFESSOR
               </span>
               <span class="listing-name">
                 <span class="main">Johnson, Blake S</span>
                 <span class="sub">Laney College, History</span>
               </span>
             </a>
           </li>
         </ul>
       </div>
       */

      var candidate = div.querySelector("div > ul > li[class='listing PROFESSOR']");
      var a = candidate.querySelector("a");
      var href = a.getAttribute("href");




      var xmlHttp2 = new XMLHttpRequest();
      xmlHttp2.onreadystatechange = function() {
        if (xmlHttp2.readyState == 4 && xmlHttp2.status == 200) {

          var doc = xmlHttp2.responseXML;
          var div = doc.querySelector("div[class=breakdown-wrapper]");
          console.log(div.outerHTML);
          /*
           <div class="breakdown-wrapper">
             <div class="breakdown-header">
               <div class="breakdown-container quality">
                 <div>
                    Overall Quality
                    <div class="grade" title="">4.9</div>
                 </div>
               </div>
             </div>
             <div class="breakdown-header">
               <div class="breakdown-section takeAgain 100">
                 Would Take Again
                 <div class="grade" title="">
                   100%
                 </div>
               </div>
               <div class="breakdown-section difficulty">
                 Level of Difficulty
                 <div class="grade" title="">
                   2.9
                 </div>
               </div>
               <div class="breakdown-section">
                 Hotness
                 <div class="grade">
                   <figure>
                     <img src="/assets/chilis/new-hot-chili.png" width="70">
                   </figure>
                 </div>
               </div>
             </div>
           </div>
           */
          var grades = div.querySelectorAll("div[class=grade]");
          var rating = grades[0].textContent
          console.log(rating);
          callback(rating);

        }
      };
      xmlHttp2.open("GET", "http://www.ratemyprofessors.com" + href, true); // true for asynchronous
      xmlHttp2.responseType = "document";
      xmlHttp2.send();
      return true;

    }
  };
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.responseType = "document";
  xmlHttp.send();
  return true;
});
