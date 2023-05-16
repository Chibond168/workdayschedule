// Use Day.js to format the following variables:
var today = dayjs();
var button5 = $('#savebutton5');
var button6 = $('#savebutton6');
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
    $('#todate').text(today.format('MMM D, YYYY'));
  
    // This is a helper function that will render todos to the DOM
    rendorGrid();
  }

function rendorGrid()
{
    var itm2= $('.item2');
    var myhour = dayjs().hour();

    for (var i = 0; i < itm2.length; i++) {
      // Using $() to re-wrap the element.
      var itmname = $(itm2[i]).attr('id');
      var fieldnum = itmname.substr(8);
      if (myhour == fieldnum)
      {
          var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#e45252', color: '#aeaeae' });
      }
       else if (myhour > fieldnum)
      {
          var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#60abce', color: '#aeaeae' });
  
          //$(fieldlabel).prop('disabled', true)
      }
      else{
        var fieldlabel = "#" + itmname;
          $(fieldlabel).css({ 'background-color': '#446d4e', color: '#aeaeae' });
      }
   }  
}

function populateEvent(parseitem, parsevalue)
{





}

button5.on('click', function () {
    var txt = $("#schedule05").val();
    if (txt.trim() === "")
    {
        populateEvent("",null); 
    }
    else
    {
        populateEvent("",txt);
    }
    //rendorGrid();
   
});

button6.on('click', function () {
    var txt = $("#schedule06").val();
    alert(txt);
   //rendorGrid();
});

button7.on('click', function () {
    var txt = $("#schedule07").val();
    alert(txt);
   //rendorGrid();
});

button8.on('click', function () {
    var txt = $("#schedule08").val();
    alert(txt);
   //rendorGrid();
});

button9.on('click', function () {
    var txt = $("#schedule09").val();
    alert(txt);
   //rendorGrid();
});

button10.on('click', function () {
    var txt = $("#schedule10").val();
    alert(txt);
   //rendorGrid();
});

button11.on('click', function () {
    var txt = $("#schedule11").val();
    alert(txt);
   //rendorGrid();
});

button12.on('click', function () {
    var txt = $("#schedule12").val();
    alert(txt);
   //rendorGrid();
});

button13.on('click', function () {
    var txt = $("#schedule13").val();
    alert(txt);
   //rendorGrid();
});

button14.on('click', function () {
    var txt = $("#schedule14").val();
    alert(txt);
   //rendorGrid();
});

button15.on('click', function () {
    var txt = $("#schedule15").val();
    alert(txt);
   //rendorGrid();
});

button16.on('click', function () {
    var txt = $("#schedule16").val();
    alert(txt);
   //rendorGrid();
});

button17.on('click', function () {
    var txt = $("#schedule17").val();
    alert(txt);
   //rendorGrid();
});

button18.on('click', function () {
    var txt = $("#schedule18").val();
    alert(txt);
   //rendorGrid();
});

init();
