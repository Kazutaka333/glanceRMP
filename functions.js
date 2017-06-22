/*
 File name: functions.js
 Description: Collection of functions to run on the backend of the extension
 */

addRates();

// Date: 2017/06/17
// Author: J.W
// Description: Add a new column "Rate" next to "Status"
// Issue: This creates two table data with the same ID for each class
function addRates() {
  var iframe = document.querySelector("iframe");
  var iframeDocument = iframe.contentWindow.document;

  var table = iframeDocument.querySelectorAll("table[id^='SSR_CLSRCH_MTG1']");
  /*
   <table cellspacing="0" class="PSLEVEL1GRIDNBONBO" id="SSR_CLSRCH_MTG1$scroll$0" dir="ltr" cols="7" width="578" cellpadding="2">
     <tbody>
       <tr>
         <th scope="col" style="border-left: 0px solid rgb(211,220,232);" abbr="Class" width="30" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt5$0" id="SSR_CLSRCH_MTG1$srt5$0" tabindex="196" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt5$0');" title="Click column heading to sort ascending">
             Class
           </a>
         </th>
         <th scope="col" abbr="Section" width="80" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt6$0" id="SSR_CLSRCH_MTG1$srt6$0" tabindex="197" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt6$0');" title="Click column heading to sort ascending">
             Section</a>
         </th>
         <th scope="col" abbr="Days &amp; Times" width="98" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt7$0" id="SSR_CLSRCH_MTG1$srt7$0" tabindex="198" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt7$0');" title="Click column heading to sort ascending">
             Days &amp; Times
           </a>
         </th>
         <th scope="col" abbr="Room" width="91" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt8$0" id="SSR_CLSRCH_MTG1$srt8$0" tabindex="199" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt8$0');" title="Click column heading to sort ascending">
             Room
           </a>
         </th>
         <th scope="col" abbr="Instructor" width="98" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt9$0" id="SSR_CLSRCH_MTG1$srt9$0" tabindex="200" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt9$0');" title="Click column heading to sort ascending">
             Instructor
           </a>
         </th>
         <th scope="col" abbr="Meeting Dates" width="98" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           <a name="SSR_CLSRCH_MTG1$srt10$0" id="SSR_CLSRCH_MTG1$srt10$0" tabindex="201" class="PSLEVEL1GRIDCOLUMNHDR" href="javascript:submitAction_win0(document.win0,'SSR_CLSRCH_MTG1$srt10$0');" title="Click column heading to sort ascending">
             Meeting Dates
           </a>
         </th>
         <th scope="col" abbr="Status" width="41" align="left" class="PSLEVEL1GRIDCOLUMNHDR">
           Status
         </th>
       </tr>
       <tr id="trSSR_CLSRCH_MTG1$0_row1" valign="center">
         <td align="left" class="PSLEVEL3GRIDROW" height="20" style="border-left: 0px solid rgb(211,220,232);">
           <div id="win0divMTG_CLASS_NBR$0">
             <span class="PSHYPERLINK" title="Class Nbr">
               <a name="MTG_CLASS_NBR$0" id="MTG_CLASS_NBR$0" ptlinktgt="pt_peoplecode" tabindex="204" href="javascript:submitAction_win0(document.win0,'MTG_CLASS_NBR$0');" class="PSHYPERLINK">
                 41723
               </a>
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divMTG_CLASSNAME$0">
             <span class="PSHYPERLINK" title="View Details">
               <a name="MTG_CLASSNAME$0" id="MTG_CLASSNAME$0" ptlinktgt="pt_peoplecode" tabindex="205" href="javascript:submitAction_win0(document.win0,'MTG_CLASSNAME$0');" class="PSHYPERLINK">
                 L1-LEC<br>Regular
               </a>
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divMTG_DAYTIME$0">
             <span class="PSLONGEDITBOX" id="MTG_DAYTIME$0">
               TuTh 8:00AM - 9:50AM
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divMTG_ROOM$0">
             <span class="PSLONGEDITBOX" id="MTG_ROOM$0">
               L-B 265
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divMTG_INSTR$0">
             <span class="PSLONGEDITBOX" id="MTG_INSTR$0">
               Brenda Harker
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divMTG_TOPIC$0">
             <span class="PSLONGEDITBOX" id="MTG_TOPIC$0">
               08/21/2017 - 12/15/2017
             </span>
           </div>
         </td>
         <td align="left" class="PSLEVEL3GRIDROW">
           <div id="win0divDERIVED_CLSRCH_SSR_STATUS_LONG$0">
             <div style="width:41px; ">
               <!-- Begin HTML Area Name Undisclosed -->
               <img src="/cs/SAPROD/cache/PS_CS_STATUS_OPEN_ICN_1.gif" width="16" height="16" alt="Open" class="SSSIMAGECENTER">
               <!-- End HTML Area -->
             </div>
           </div>
         </td>
       </tr>
     </tbody>
   </table>
   */

  asyncLoop(table.length, function(loop) {

    var thead = table[loop.iteration()].querySelector("table > tbody > tr");
    var th = thead.firstElementChild;
    th.textContent = "Rate";
    thead.appendChild(th);

    var row = table[loop.iteration()].querySelector("table > tbody > tr[id^=trSSR_CLSRCH_MTG1]");

    var instructorName = row.querySelector("span[id^=MTG_INSTR]").textContent.replace(" ", "+");
    var url = "http://www.ratemyprofessors.com/search.jsp?query=" + instructorName;
    url = "http://www.ratemyprofessors.com/search.jsp?query=Blake+Johnson";

    // console.log(url);

    chrome.runtime.sendMessage(instructorName, function (responseText) {

      console.log(responseText);

      var td = row.firstElementChild;
      td.textContent = responseText;
      row.appendChild(td);

    });

    loop.next();

  }, function () {
    console.log('cycle ended')
  });

}

// Date: 2017/06/18
// Author: J.W
// Description: this function enables loop of async function calls
function asyncLoop(iterations, func, callback) {
  var index = 0;
  var done = false;
  var loop = {
    next: function() {
      if (done) {
        return;
      }

      if (index < iterations) {
        index++;
        func(loop);

      } else {
        done = true;
        callback();
      }
    },

    iteration: function() {
      return index - 1;
    },

    break: function() {
      done = true;
      callback();
    }
  };

  loop.next();
  return loop;
}
