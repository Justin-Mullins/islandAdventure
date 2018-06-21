$(document).ready( function() {

       // When site loaded, load the Popupbox First
       // loadPopupBox();

       $('#popupBoxClose').click( function() {
           unloadPopupBox();
       });

       $('#container').click( function() {
           unloadPopupBox();
       });

       function unloadPopupBox() {    // TO Unload the Popupbox
           $("#popup_box").fadeOut("fast");
           $(".modalOverlay").remove();
           // $("#container").css({ // this is just for style
           //    "opacity": "1"
           // });
       }

       function loadPopupBox() {    // To Load the Popupbox
           $('#popup_box').fadeIn("fast");
           $("body").append('<div class="modalOverlay">');
           // $("#container").css({ // this is just for style
           //  "opacity": "0.3"
           // });
       }
   });
