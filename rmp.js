/*
 File name: rmp.js
 Description: this file contains functions that find data from RMP and return
              formatted data.
 */


// RMPQuery class
// date: 2017/06/18
// description: Query class that holds info used for searching
//              Query Object is passed to RMPSearch
function RMPQuery (college, profName) {
    this.college = college;
    this.profName = profName;
}

// RMPProf class
// data: 2017/06/18
// description: this class includes detailed rate of one professor.
function RMPProf (profName) {
    this.profName = profName;
    this.overallQuality = overallQuality;
    this.url = "";
    this.college;
    this.rate = ""; // we could make Rate class, which include more detailed rate
}

// RMPSearch function
// date: 2017/06/18
// description: Search with query and return RMProf object
function RMPSearch (query) {
    // search with query and set above member variables
}
