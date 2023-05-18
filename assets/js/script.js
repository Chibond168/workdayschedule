// Use Day.js to format the following variables:
var today = dayjs();
var button7 = $('#savebutton7');
var button8 = $('#savebutton8');
var button9 = $('#savebutton9');
var button10 = $('#savebutton10');
var button11 = $('#savebutton11');
var button12 = $('#savebutton12');
var button13 = $('#savebutton13');
var button14 = $('#savebutton14');
var button15 = $('#savebutton15');
var button16 = $('#savebutton16');
var button17 = $('#savebutton17');
var button18 = $('#savebutton18');

// This function is being called below and will run when the page loads.
function init() {
    $('#event-message').hide();
    $('#todate').text(today.format('dddd MMM D, YYYY'));
  
    // This is a helper function that will render todos to the DOM
    rendorGrid();
  }

function rendorGrid()
{
    var itm2 = $('.item2');
    var buttonitm = $('.item3');
    var myhour = dayjs().hour();

    var schedulelist = JSON.parse(localStorage.getItem("workschedule"));
    if (schedulelist == null)
    {
        var workschedulecontent = ["#schedule07| ", "#schedule08| ", "#schedule09| ", "#schedule10| ", "#schedule11| ", "#schedule12| ", "#schedule13| ", "#schedule14| ", "#schedule15| ", "#schedule16| ", "#schedule17| ", "#schedule18| "];
        localStorage.setItem("workschedule", JSON.stringify(workschedulecontent));
    }
    else
    {
        var workschedulecontent = [];
        workschedulecontent = schedulelist;
    }

    for (var i = 0; i < workschedulecontent.length; i++) {
        var todo = workschedulecontent[i];
        var dolist = todo.split("|");


        if (dolist[1].trim() == "")
        {
            $(dolist[0]).val("");
        }
        else
        {
            $(dolist[0]).val(dolist[1]);
        }
    }

    for (var i = 0; i < itm2.length; i++) {
      // Using $() to re-wrap the element.
      var itmname = $(itm2[i]).attr('id');
      var fieldnum = itmname.substr(8);
      var butitmname = $(buttonitm[i]).attr('id');

      if (myhour == fieldnum)
      {
          var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#e45252', color: '#020202' });
      }
       else if (myhour > fieldnum)
      {
          var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#60abce', color: '#fff' });
 
          $(fieldlabel).prop('disabled', true)
          var butfiledlabel = "#" + butitmname;
          $(butfiledlabel).prop('disabled', true)
      }
      else{
        var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#446d4e', color: '#793f3f' });
      }
   }  
   $('#event-message').hide(3000);
}

function populateEvent(parseitem, parsevalue)
{
    var workschedulecontent = JSON.parse(localStorage.getItem("workschedule"));
    for (var i = 0; i < workschedulecontent.length; i++) {
       var todo = workschedulecontent[i];
       var dolist = todo.split("|");
       if (dolist[0] == parseitem)
       {
            if ((parsevalue == null) || (parsevalue == ""))
            {
                workschedulecontent[i] = parseitem + "| ";
            }
            else
            {
                workschedulecontent[i] = parseitem + "|" + parsevalue;
            }
            
            localStorage.setItem("workschedule", JSON.stringify(workschedulecontent));
       }
       $('#event-message').show();
    }
}

button7.on('click', function () {
    var txt = $("#schedule07").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule07",null); 
    }
    else
    {
        populateEvent("#schedule07",txt);
    }
    rendorGrid();
});

button8.on('click', function () {
    var txt = $("#schedule08").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule08",null); 
    }
    else
    {
        populateEvent("#schedule08",txt);
    }
    rendorGrid();
});

button9.on('click', function () {
    var txt = $("#schedule09").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule09",null); 
    }
    else
    {
        populateEvent("#schedule09",txt);
    }
    rendorGrid();
});

button10.on('click', function () {
    var txt = $("#schedule10").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule10",null); 
    }
    else
    {
        populateEvent("#schedule10",txt);
    }
    rendorGrid();
});

button11.on('click', function () {
    var txt = $("#schedule11").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule11",null); 
    }
    else
    {
        populateEvent("#schedule11",txt);
    }
    rendorGrid();
});

button12.on('click', function () {
    var txt = $("#schedule12").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule12",null); 
    }
    else
    {
        populateEvent("#schedule12",txt);
    }
    rendorGrid();
});

button13.on('click', function () {
    var txt = $("#schedule13").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule13",null); 
    }
    else
    {
        populateEvent("#schedule13",txt);
    }
    rendorGrid();
});

button14.on('click', function () {
    var txt = $("#schedule14").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule14",null); 
    }
    else
    {
        populateEvent("#schedule14",txt);
    }
    rendorGrid();
});

button15.on('click', function () {
    var txt = $("#schedule15").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule15",null); 
    }
    else
    {
        populateEvent("#schedule15",txt);
    }
    rendorGrid();
});

button16.on('click', function () {
    var txt = $("#schedule16").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule16",null); 
    }
    else
    {
        populateEvent("#schedule16",txt);
    }
    rendorGrid();
});

button17.on('click', function () {
    var txt = $("#schedule17").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule17",null); 
    }
    else
    {
        populateEvent("#schedule17",txt);
    }
    rendorGrid();
});

button18.on('click', function () {
    var txt = $("#schedule18").val();
    if (txt.trim() === "")
    {
        populateEvent("#schedule18",null); 
    }
    else
    {
        populateEvent("#schedule18",txt);
    }
    rendorGrid();
});

init();
