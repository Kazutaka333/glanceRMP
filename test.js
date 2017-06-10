function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    console.log(xmlHttp.response.getByElements());
}

function makeQuery(name, college)
{
    var query = "query=";
    name = name.replace(" ", "+");
    college = college.replace(" ", "+");
    query += name + "+" + college;
    return query;
}

// http://www.ratemyprofessors.com/search.jsp?query=Derrick+Smith+Laney 
var baseURL = "http://www.ratemyprofessors.com/search.jsp?";
var name = "Derrick Smith";

httpGetAsync(baseURL + makeQuery(name, "Laney"), function(){});
/*
var client = new HttpClient();
client.get(baseURL + makeQuery(name, "Laney"), function(response) {
    console.log(response);        
});
*/
