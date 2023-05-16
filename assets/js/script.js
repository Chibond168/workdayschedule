// Use Day.js to format the following variables:
var today = dayjs();


/*if (myhour > 20)
[
    $('#schedule05').css({ 'background-color': '#60abce', color: '#aeaeae' })

] */

//$(document).ready(function(){
   // $("#container").children("textarea.item2").css({'background-color': '#60abce',});
    /* console.log($('#container').children("textarea.item2").prop('textContent')); */
   // console.log($('#container').children("textarea.item2").attr('id'));


    /* $("#container").children("textarea.item2").prop('disabled', true); */
 // });
  
  

 /* $('textarea').each(function(index) {
    console.log(index + ':' + $(this).text());
  }); */

/*console.log($('#schedule05').attr('id'));
console.log($('#container').children(0).attr('textContent'));
console.log($('#container').children(1).attr('textContent'));
console.log($('#container').children(2).attr('textContent'));
console.log($('#container').children().length); */
/*console.log($('#container').children(4).prop('textContent')); */
/*console.log($('#container').children("div.item1").prop('textContent'));*/
/*console.log($('#container').find("#hour")); */

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
  
          $(fieldlabel).prop('disabled', true)
      }
   }  
}

init();
