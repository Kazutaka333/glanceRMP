/**
 * Created by one on 6/22/17.
 */

function Professor() {
  // all properties are with type String
  this.name = "";
  this.college = "";
  this.rate = "";
  this.difficulty = "";
  this.url = "";
  this.numReviews = "";
}

getProfessorInfo("hello", " sdaf", function(name) {
  console.log("calling callback");
});

function getProfessorInfo(name, sender, callback) {

  if (localStorage[name] !== undefined) {
    callback(localStorage[name]);
    return true;
  }

  var professor = new Professor();
  professor.name = name;

  var url = "http://www.ratemyprofessors.com/search.jsp?query=" + name.replace(" ", "+");
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var doc = xmlHttp.responseXML;
      // var div = doc.querySelectorAll("span[class=sub]");
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

      try {

        // var candidates = div.querySelector("div > ul > li[class='listing PROFESSOR']");
        // var candidate = candidates[0];
        // var a = candidate.querySelector("a");
        // var href = a.getAttribute("href");

        var span = doc.querySelectorAll("span[class=sub]");
        console.log(span);

        var index = undefined;
        var colleges = ["Laney College", "Berkley City College", "College of Alameda", "Merrit College"];
        for (var i = 0; i < span.length; i++) {
          var collegeName = span[i].textContent;
          for (var j = 0; j < colleges.length; j++) {
            if (collegeName.startsWith(colleges[j])) { // not case-sensitive
              index = i;
              professor.college = colleges[j];
              break;
            }
          }

        }
        if (index === undefined) callback(professor);

        var href = span[index].parentElement.parentElement.getAttribute("href");
        var url2 = "http://www.ratemyprofessors.com" + href;
        var xmlHttp2 = new XMLHttpRequest();
        xmlHttp2.onreadystatechange = function() {
          if (xmlHttp2.readyState == 4 && xmlHttp2.status == 200) {

            var doc = xmlHttp2.responseXML;
            var div = doc.querySelector("div[class=breakdown-wrapper]");
            // console.log(div.outerHTML);
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

            try {
              var grades = div.querySelectorAll("div[class=grade]");
              var rating = grades[0].textContent;
              var difficulty = grades[2].textContent;
              console.log(rating);
              professor.rate = rating;
              professor.difficulty = difficulty;

              var numReviews = doc.querySelector("div[class=rating-count]");

              /*
               <div class="table-toggle rating-count active" data-table="rating-filter">
                 530 Student Ratings
               </div>
               */

              numReviews = numReviews.replace("Student Ratings", "");
              numReviews = numReviews.replace(" ", "");
              professor.numReviews = numReviews;

              // Assign url after 'try' to make sure it's a valid url
              professor.url = url2;

              // professor object is ready now
              localStorage["name"] = JSON.stringify(professor);
              callback(professor);
            } catch(err) {
              console.log(err);
              callback(professor);
            }
          }
        };
        xmlHttp2.open("GET", url2, true); // true for asynchronous
        xmlHttp2.responseType = "document";
        xmlHttp2.send();
        return true;

      } catch(err) {
        console.log(err);
        callback(professor);
      }

    }
  };

  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.responseType = "document";
  xmlHttp.send();
  return true;

}

