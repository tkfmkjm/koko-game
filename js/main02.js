/*

Koko Main JavaScript
by Takafumi Kojima
jQuery version:

*/

/***************************
Deactivate right click and drag
****************************/
$(function () {
  $('img').attr('onmousedown', 'return false');
  $('img').attr('onselectstart', 'return false');
  $('img').attr('oncontextmenu', 'return false');
});

/***************************
User-agent
****************************/
$(function () {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // Smartphone
    console.log("Device: Mobile");
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    // Tablet
    console.log("Device: Tablet");
  } else {
    // PC: Change 'tap' to 'click'
    console.log("Device: PC");
    $("#start_button_text").text("Click to Start");
  }
})

/***************************
Load thumbnails and get image paths automatically
****************************/
$(function () {

  if (document.getElementById("toppage") != null) {
    console.log("index.html");
    $("#grid").load("/levels.html");
    $("#main_navigation").load("/main_navigation.html");
  } else {
    console.log("not index.html");
    $("#grid").load("/levels.html");
    $("#main_navigation").load("/main_navigation.html");
    var current_url = location.href;
    var img_before = current_url.replace('/play/', '/play/images/').replace('.html', '_before.jpg');
    var img_after = current_url.replace('/play/', '/play/images/').replace('.html', '_after.jpg');
    var img_answer = current_url.replace('/play/', '/play/images/').replace('.html', '_answer.png');
    // $("img#before").attr("src", img_before);
    // $("img#after").attr("src", img_after);
    // $("img#answer_area").attr("src", img_answer);
  }

});

// Fadein at load (to avoid a player seeing sudden change of images)
$("body").css({
  opacity: '0'
});
setTimeout(function () {
  $("body").stop().animate({
    opacity: '1'
  }, 1500);
}, 1500);


/***************************
Core function
****************************/
function getPixelDataOfImg(img, event) {
  let canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  return canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data[3];
}

/***************************
Run at load
****************************/
window.onload = function () {

  console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);

  // Detecting alpha
  document.querySelector('#answer_area').addEventListener('click', function (event) {

    let PixelData = getPixelDataOfImg(document.querySelector('#answer_area'), event);

    if (PixelData == 255 && startFinish == 1) {
      console.log("Right area clicked");
      $("body").css("background-color", "#48C9B0");
      $('#instruction').text("Correct! Tap the picture to retry or pick other picture!");
      $('#before').addClass('blinking');
      $('#progress').stop();
    } else if (PixelData == 0 && startFinish == 1) {
      console.log("Wrong area clicked");
      $("body").css("background-color", "#EC7063"); // Turn background red when wrong
      $("#frame").addClass('shake');
      $('#instruction').text("Wrong! Tap the picture to retry.");

    } else {
      console.log("Need Start Game");
    }

    console.log("PixelData(alpha):", PixelData);
  })

  // Hide URL bar on mobile device
  setTimeout(scrollTo, 100, 0, 1);
}

/***************************
Loading Screen transition
****************************/
$(window).on('load', function () {
  $(function () {
    //setTimeout(function(){
    $("#loading").fadeOut();
    $("#main")
      .css({
        display: "block"
      })
      .animate({
        opacity: "1"
      }, 2000);
  });
});

/***************************
Pointer
****************************/
$(function () {
  $('#frame').click(function (e) {
    if (countWrong == 0 && startFinish == 1) {
      var areaOffset = $('#frame').offset();
      var offsetTop = ((e.pageY) - (areaOffset.top));
      var offsetLeft = ((e.pageX) - (areaOffset.left));

      $('#locatedpoint').css({
        top: (offsetTop),
        left: (offsetLeft),
        display: 'block'
      }).attr('title', 'TOP : ' + (offsetTop) + 'px | LEFT : ' + (offsetLeft) + 'px');
    }
  });
});

/***************************
After Start-Button Clicked
****************************/

// Setting Changing Time
changeTime = 10000; //milli second

$(function () {
  startFinish = 0;
  $('#start_button').click(function () {
    if (startFinish == 0) {

      //Start-Button Dissapear
      $('#start_button').animate({
        opacity: '0',
      }, {
        duration: 200,
        easing: 'linear',
      }); //end of #start_button animate

      //Progress Bar
      $('#progress').animate({
        width: '0',
      }, {
        duration: changeTime,
        easing: 'linear',
      });

      //Image Changing Time
      $('#before').animate({
        opacity: '0',
      }, {
        duration: changeTime,
        easing: 'linear',
      });

      $('#start_button').css('display', 'none');
      $("#before").removeClass("darkImg");
      $("#start_button").data("playingOnOff", startFinish = 1);
      $("#frame").data("hitWrong", countWrong = 0);
      $("#frame").data("hitCorrect", countCorrect = 0);

      console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);

    } //end of if statement
    return false; //for the if statement
  }); // end of click function
});

/***************************
Activate and deactivate retry button ([!] Not used in this version)
****************************/
// $(function () {
//   setInterval(function () {
//     if ($('img#before').css('opacity') == 0) {
//       $('#retry').css('color', 'black');
//     } else {
//       $('#retry').css('color', '#D5D8DC');
//     }
//   }, 100);
// });

/***************************
Instruction Massages
****************************/
$(function () {
  setInterval(function () {
    if ($('img#before').css('opacity') == 0 && countWrong <= 0) {
      $('#instruction').text("The change is over. Tap a part of picture.");
    } else if (countWrong == 0 && countCorrect == 0 && startFinish == 0) {
      $('#instruction').text("Find a part of the picture that changes gradually.");
    }
  }, 100);
});

/***************************
Social Media Share Links
****************************/
$(function () {
  var url = document.URL;
  var encodedurl = encodeURIComponent(document.URL);
  var title = document.title;
  var encodedtitle = encodeURIComponent(document.title);

  //Twitter
  var twitter = jQuery(".socialTw").attr("href");
  twitter = "https://twitter.com/intent/tweet?url=" + encodedurl + "&text=" + encodedtitle;
  jQuery("a.socialTw").attr("href", twitter);

  //Facebook
  var facebook = jQuery("a.socialFb").attr("href");
  facebook = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  jQuery("a.socialFb").attr("href", facebook);

  //LINE
  var line = jQuery("a.socialLi").attr("href");
  line = "http://line.me/R/msg/text/?" + title + url;
  jQuery("a.socialLi").attr("href", line);

  //Google+
  var googlePlus = jQuery("a.socialGp").attr("href");
  googlePlus = "https://plusone.google.com/_/+1/confirm?hl=ja&url=" + url + "&text=" + title;
  jQuery("a.socialGp").attr("href", googlePlus);
});

/***************************
Retry Button
****************************/
$(function () {
  $("#frame").on("click", function () {

    if (countWrong == 1 && startFinish == 1) {
      $('#progress').css('width', '100%');
      $('#progress').stop();
      $('#before').stop();

      //remove shake className
      $('#frame').removeClass('shake');

      // stop blinking #before
      $('#before').removeClass('blinking');

      $("#frame").animate({
        opacity: '0',
      }, {
        duration: 1000,
        easing: 'linear',
      });

      $("#before").animate({
        opacity: '1',
      }, {
        duration: 2000,
        easing: 'linear',
      });

      $("#frame").animate({
        opacity: '1',
      }, {
        duration: 1000,
        easing: 'linear',
      });

      $("#before").addClass("darkImg");

      $("#start_button").data("playingOnOff", startFinish = 0);
      console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);

      $("#frame").data("hitWrong", countWrong = 0);
      $("#frame").data("hitCorrect", countCorrect = 0);
      console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);
      $("body").css("background-color", "");

      // Hide the pointer
      $('#locatedpoint').css("display", "none");

      $('#start_button').animate({
        opacity: '1',
      }, {
        duration: 200,
        easing: 'linear',
      }); //end of #start_button animate
      $('#start_button').css('display', 'flex');

    } //if opacity is 0
  }); // retry click
}); // end of retry button

/***************************
Score
****************************/
//Wrong Area Selected
$(function () {
  countWrong = 0;
  countCorrect = 0;
  $("#frame").click(function () {
    // If wrong area is clicked after game started add 1 to countWong
    if (startFinish == 1) {
      $("#frame").data("hitWrong", countWrong = 1);
      console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);

      // // And if wrong area is clicked
      // if (countCorrect == 0 && countWrong >= 1 && startFinish == 1) {
      //   console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);
      // }
      // return false;

    } //end of if statement
    return false; //for the if statement
  }); // end of click function

  //Right Area Selected
  $(function () {
    $("#frame").click(function () {
      // If right area is clicked after game started add 1 to countWong
      if (startFinish == 1) {
        $("#frame").data("hitCorrect", countCorrect = 1);
        console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);

        // // And if right area is clicked
        // if (countCorrect == 1 && countWrong == 0 && startFinish == 1) {
        //   console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);
        // }
        // return false;

      } //end of if statement
      return false; //for the if statement
    }); // end of click function
  });




















  // window.addEventListener("load", function () {
  //   var a = document.getElementById("kotae"), // get a-element 'kotae(means answer)'
  //     img = document.getElementById("answer_area"), // get img-element
  //     url = a.href, // get a.herf
  //     alpha;

  //   try {
  //     /* Give the img-element to Alphapicker & get Alphapicker object*/
  //     alpha = AlphaPicker(img);
  //   } catch (e) {
  //     /* Error message */
  //     console.log(e.name + ":" + e.message);
  //     return;
  //   }

  //   /* deactivate a-element event*/
  //   a.className = "alphapicker";
  //   a.addEventListener("click", function (e) {
  //     e.preventDefault();
  //   }, false);

  //   /* Alphapickerオブジェクトのメソッドでマウスオーバーとリンクを設定します (Setting link) */
  //   alpha.mousemove(function (e) {
  //     /* イベントオブジェクトのalphaプロパティに、マウス座標のアルファ値が入っています. (The event object's 'alpha' propaty containcs the coodinate of alpha area.) */
  //     if (e.alpha) {
  //       this.className = "hover";
  //     } else {
  //       this.className = "";
  //     }
  //   }).mouseout(function (e) {
  //     this.className = "";
  //   }).click(function (e) {
  //     if (e.alpha) {

  //       // What to do after clicking the currect area
  //       $("#frame").data("hitCorrect", countCorrect = 1);

  //       if (countCorrect == 1 && countWrong == 0 && startFinish == 1) {
  //         console.log('C:', countCorrect, 'W:', countWrong, 'ON:', startFinish);
  //         // $("body").css("background-color", "#48C9B0");
  //         // $('#instruction').text("Correct! Tap the picture to retry or pick other picture!");
  //         // $('#before').addClass('blinking');
  //         // $('#progress').stop();
  //       } //end of if C1,W0,ON1

  //       return false;
  //       // /What to do after clicking the currect area

  //     } //end of if (e.alpha)
  //   });
  // }, false);


});