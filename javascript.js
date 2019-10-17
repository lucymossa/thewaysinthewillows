$(document).ready(function(){

$(document).click(function() {
  var x = $("#frame").position();

  console.log('Top: ' + x.top + 'px, Left: ' + x.left + 'px');
});


// SPRITE SHEET
$(".backwardsleft").anijs({
  image: "images/backwardsleft.png", 
  fps: 7, 
  frameWidth: 62,
  frameHeight: 75,
  isReady : function ($this) {}
});

$(".backwardsright").anijs({
  image: "images/backwardsright.png", 
  fps: 7, 
  frameWidth: 62,
  frameHeight: 75,
  isReady : function ($this) {}
});

$(".forwardsleft").anijs({
  image: "images/forwardsleft.png",
  fps: 7, 
  frameWidth: 62, 
  frameHeight: 75,
  isReady : function ($this) {}
});

$(".forwardsright").anijs({
  image: "images/forwardsright.png", 
  fps: 7, 
  frameWidth: 62,
  frameHeight: 75,
  isReady : function ($this) {}
});

// HIDE WALKING ON LOAD
$(".backwardsleft").addClass("hide");
$(".backwardsright").addClass("hide");
$(".forwardsleft").addClass("hide");
$(".forwardsright").addClass("hide");

// HIDE POP UP BOX ON LOAD
$("#output").hide();

// HIDE BOX
$("#map").click(function() {
  $("#output").hide();
  $("#badger").addClass("visible");
  $("#canal").addClass("visible");
  $("#mole").addClass("visible");
  $("#rat").addClass("visible");
  $("#toad").addClass("visible");
  $("#wildwood").addClass("visible");
});

// DISABLE AND ENABLE CLICKS
function enableClick() {
  $("#badger").removeClass("disableClick");
  $("#canal").removeClass("disableClick");
  $("#mole").removeClass("disableClick");
  $("#rat").removeClass("disableClick");
  $("#toad").removeClass("disableClick");
  $("#wildwood").removeClass("disableClick");
  }

// TEXT - BADGER
var indexb = 0;
var badger = [
"In the side of what had seemed to be a snow-bank stood a solid-looking little door, painted dark green. An iron bell-pull hung by the side, and below it, on a small brass plate, neatly engraved in square capital letters, they could read by the aid of moonlight: Mr Badger.",
"And then there’s Badger, of course. He lives right in the heart of it; wouldn’t live anywhere else, either, if you paid him to do it. Dear old Badger! Nobody interferes with him. They’d better not.",
"The Badger, who wore a long dressing-gown, and whose slippers were indeed very down at heel, carried a flat candlestick in his paw and had probably been on his way to bed when their summons sounded. He looked kindly down on them and patted both their heads. ‘This is not the sort of night for small animals to be out,’ he said paternally.",
"It seemed a place where heroes could fitly feast after victory, where weary harvesters could line up in scores along the table and keep their Harvest Home with mirth and song, or where two or three friends of simple tastes could sit about as they pleased and eat and smoke and talk in comfort and contentment. The ruddy brick floor smiled up at the smoky ceiling; the oaken settles, shiny with long wear, exchanged cheerful glances with each other; plates on the dresser grinned at pots on the shelf, and the merry firelight flickered and played over everything without distinction."
];

$("#badger").click(function(){
  $(this).removeClass("visible");
  $("#canal").addClass("visible");
  $("#mole").addClass("visible");
  $("#rat").addClass("visible");
  $("#toad").addClass("visible");
  $("#wildwood").addClass("visible");
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top - 180, left: pos.left -240, position: 'absolute'});

  function output(){
    var output = "";
    output += badger[indexb];
    if(indexb < 3){
      indexb++;
    } else {
      indexb = 0;
    }
    return output;
}
  $("#output").removeClass("changed");
  document.getElementById("output").innerHTML = output();

  // WALKING, DISABLE CLICKS
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#canal").addClass("disableClick");
  $("#mole").addClass("disableClick");
  $("#rat").addClass("disableClick");
  $("#toad").addClass("disableClick");
  $("#wildwood").addClass("disableClick");
  
if (walkpos.top == 355 && walkpos.left == 15) { //start Badger 855 | 505
    $(".forwardsright").removeClass("hide");
    $(".forwardsright").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".forwardsright").animate({
        top: pos.top + 47.3,
        left: pos.left + 162.55,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
        walkpos.top = pos.top + 47.3;
        walkpos.left = pos.left + 162.55;
        enableClick();
        }
      });
    });
  } else if (walkpos.top > 569 && walkpos.top < 579 && walkpos.left > 25 && walkpos.left < 35) {  //canal
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsright").removeClass("hide");
    $(".backwardsright").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsright").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".forwardsright").animate({
          top: pos.top + 47.3,
          left: pos.left + 162.55,
        }, 4000, function() {
        walkpos = pos;
        if (walkpos.top == pos.top && walkpos.left == pos.left) {
          $(".backwardsright").addClass("hide");
          $(".forwardsright").addClass("hide");
          $("#frame").removeClass("hide");
          $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
          walkpos.top = pos.top + 47.3;
          walkpos.left = pos.left + 162.55;
          enableClick();
          }
        });
      });
    });
  } else if (walkpos.top > 312 && walkpos.top < 322 && walkpos.left > 725 && walkpos.left < 735) {  //mole
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".backwardsleft").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".forwardsright").animate({
          top: pos.top + 47.3,
          left: pos.left + 162.55,
        }, 4000, function() {
        walkpos = pos;
        if (walkpos.top == pos.top && walkpos.left == pos.left) {
          $(".backwardsleft").addClass("hide");
          $(".forwardsleft").addClass("hide");
          $(".forwardsright").addClass("hide");
          $("#frame").removeClass("hide");
          $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
          walkpos.top = pos.top + 47.3;
          walkpos.left = pos.left + 162.55;
          enableClick();
          }
      });
    });
    });
    });
  } else if (walkpos.top > 462 && walkpos.top < 472 && walkpos.left > 919 && walkpos.left < 929) {  //rat
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: pos.top + 47.3,
        left: pos.left + 162.55,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".forwardsleft").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
        walkpos.top = pos.top + 47.3;
        walkpos.left = pos.left + 162.55;
        enableClick();
        }
      });
    });
  } else if (walkpos.top > 71 && walkpos.top < 81 && walkpos.left > 377 && walkpos.left < 387) {  //toad
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").removeClass("hide");
    $(".forwardsright").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".forwardsright").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsright").css({top: knot1.top, left: knot1.left});
        $(".forwardsleft").addClass("hide");
        $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".forwardsright").animate({
          top: pos.top + 47.3,
          left: pos.left + 162.55,
        }, 4000, function() {
        walkpos = pos;
        if (walkpos.top == pos.top && walkpos.left == pos.left) {
          $(".forwardsleft").addClass("hide");
          $(".forwardsright").addClass("hide");
          $("#frame").removeClass("hide");
          $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
          walkpos.top = pos.top + 47.3;
          walkpos.left = pos.left + 162.55;
          enableClick();
          }
      });
    });
    });
    });
  } else if (walkpos.top > 625 && walkpos.top < 635 && walkpos.left > 503 && walkpos.left < 513) {  //wildwood
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: pos.top + 47.3,
        left: pos.left + 162.55,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".forwardsleft").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 47.3, left: pos.left + 162.55});
        walkpos.top = pos.top + 47.3;
        walkpos.left = pos.left + 162.55;
        enableClick();
        }
      });
    });
  }

if (walkpos.top == 855.59375 && walkpos.left == 504.984375) {
  enableClick();
  $("#frame").removeClass("hide");
}

if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
  $(this).addClass("disableClick");
  $("#frame").addClass("hide");
}

});  

// TEXT - CANAL
var indexc = 0;
var canal = [
"Never in his life had he seen a river before – this sleek, sinuous, full-bodied animal, chasing and chuckling, gripping things with a gurgle and leaving them with a laugh, to fling itself on fresh playmates that shook themselves free, and were caught and held again. All was a-shake and a-shiver – glints and gleams and sparkles, rustle and swirl, chatter and bubble.",
"He thought his happiness was complete, when, as he meandered aimlessly along, suddenly he stood by the edge of a full-fed river. By the side of the river he trotted as one trots, when very small; and when tired at last, he sat on the bank, while the river still chattered on to him, a babbling procession of the best stories in the world.",
"Absorbed in the new life he was entering upon, intoxicated with the sparkle, the ripple, the scents and the sounds and the sunlight, he trailed a paw in the water and dreamed long waking dreams.",
"Green turf sloped down to either edge, brown snaky tree roots gleamed below the surface of the quiet water, while ahead of them the silvery shoulder and foamy tumble of a weir, arm-in-arm with a restless dripping mill-wheel, that held up in its turn a grey-gabled mill-house, filled the air with a soothing murmur of a sound, dull and smothery, yet with little clear voices speaking up cheerful out of it at intervals."
];

$("#canal").click(function(){
  $(this).removeClass("visible");
  $("#badger").addClass("visible");
  $("#mole").addClass("visible");
  $("#rat").addClass("visible");
  $("#toad").addClass("visible");
  $("#wildwood").addClass("visible");
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top - 150, left: pos.left + 70, position: 'absolute'});
  
  function output(){
    var output = "";
    output += canal[indexc];
    if(indexc < 3){
      indexc++;
    } else {
      indexc = 0;
    }
    return output;
}
  $("#output").removeClass("changed");
  document.getElementById("output").innerHTML = output();
  
  // WALKING
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#badger").addClass("disableClick");
  $("#mole").addClass("disableClick");
  $("#rat").addClass("disableClick");
  $("#toad").addClass("disableClick");
  $("#wildwood").addClass("disableClick");

  if (walkpos.top == 355 && walkpos.left == 15) { //start Canal 574 | 30
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: pos.top + 110.75,
      left: pos.left + 30,
    }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".forwardsleft").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
        walkpos.top = pos.top + 110.75;
        walkpos.left = pos.left + 30;
        enableClick();
        }
    });
  } else if (walkpos.top > 850 && walkpos.top < 860 && walkpos.left > 500 && walkpos.left < 510) {  //badger
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsleft").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".forwardsleft").removeClass("hide");
        $(".forwardsleft").animate({
          top: pos.top + 110.75,
          left: pos.left + 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
            walkpos.top = pos.top + 110.75;
            walkpos.left = pos.left + 30;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 312 && walkpos.top < 322 && walkpos.left > 725 && walkpos.left < 735) {  //mole
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".backwardsleft").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsleft").animate({
          top: pos.top + 110.75,
          left: pos.left + 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
            walkpos.top = pos.top + 110.75;
            walkpos.left = pos.left + 30;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 462 && walkpos.top < 472 && walkpos.left > 919 && walkpos.left < 929) {  //rat
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsleft").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".forwardsleft").removeClass("hide");
        $(".forwardsleft").animate({
          top: pos.top + 110.75,
          left: pos.left + 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
            walkpos.top = pos.top + 110.75;
            walkpos.left = pos.left + 30;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 71 && walkpos.top < 81 && walkpos.left > 377 && walkpos.left < 387) {  //toad
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").removeClass("hide");
    $(".forwardsright").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".forwardsright").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsleft").animate({
          top: pos.top + 110.75,
          left: pos.left + 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
            walkpos.top = pos.top + 110.75;
            walkpos.left = pos.left + 30;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 625 && walkpos.top < 635 && walkpos.left > 503 && walkpos.left < 513) {  //wildwood
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".forwardsleft").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".forwardsleft").removeClass("hide");
        $(".forwardsleft").animate({
          top: pos.top + 110.75,
          left: pos.left + 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 110.75, left: pos.left + 30});
            walkpos.top = pos.top + 110.75;
            walkpos.left = pos.left + 30;
            enableClick();
            }
        });
      });
    });
  }

  if (walkpos.top == 574 && walkpos.left == 30) {
    enableClick();
    $("#frame").removeClass("hide");
  }
  
  if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
    $(this).addClass("disableClick");
    $("#frame").addClass("hide");
  }

}); 

// TEXT - MOLE
var count = 0;
var indexm = 0;
var mole = [
"The Mole struck a match, and by its light the Rat saw that they were standing in an open space, neatly swept and sanded underfoot, and directly facing them was Mole’s little front door, with “Mole End” painted, in Gothic lettering, over the bell-pull at the side. On the walls hung wire baskets with ferns in them, alternating with brackets carrying plaster statuary – Garibaldi, and the infant Samuel, and Queen Victoria, and other heroes of modern Italy.",
"The Mole had been working very hard all the morning, spring-cleaning his little home. First with brooms, then with dusters; then on ladders and steps and chairs, with a brush and a pail of whitewash; till he had dust in his throat and eyes, and splashes of whitewash all over his black fur, and an aching back and weary arms. Spring was moving in the air above and in the earth below and around him, penetrating even his dark and lowly little house with its spirit of divine discontent and longing."
];

$("#mole").click(function(){
  $(this).removeClass("visible");
  $("#badger").addClass("visible");
  $("#canal").addClass("visible");
  $("#rat").addClass("visible");
  $("#toad").addClass("visible");
  $("#wildwood").addClass("visible");
  count++;
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top - 215, left: pos.left - 300, position: 'absolute'});
  
  function output(){
    var output = "";
    output += mole[indexm];
    if(indexm < 1){
      indexm++;
    } else {
      indexm = 0;
    }
    return output;
}
  $("#output").removeClass("changed");
  document.getElementById("output").innerHTML = output();

  if (count == 3) {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("quiz1").style.display = "block";
    document.getElementById("quiz2").style.display = "none";
    $("#output").hide();
    $("#badger").addClass("visible");
    $("#canal").addClass("visible");
    $("#mole").addClass("visible");
    $("#rat").addClass("visible");
    $("#toad").addClass("visible");
    $("#wildwood").addClass("visible");
  }

  // WALKING
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#badger").addClass("disableClick");
  $("#canal").addClass("disableClick");
  $("#rat").addClass("disableClick");
  $("#toad").addClass("disableClick");
  $("#wildwood").addClass("disableClick");

if (walkpos.top == 355 && walkpos.left == 15) { //start Mole 317 | 730
    $(".backwardsright").removeClass("hide");
    $(".backwardsright").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot2.top, left: knot2.left});
      $(".backwardsright").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".backwardsright").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
  } else if (walkpos.top > 850 && walkpos.top < 860 && walkpos.left > 500 && walkpos.left < 510) {  //badger
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: knot2.top,
          left: knot2.left,
        }, 4000, function() {
        $(".forwardsright").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
});
  });
  } else if (walkpos.top > 569 && walkpos.top < 579 && walkpos.left > 25 && walkpos.left < 35) {  //canal
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
      $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".backwardsright").animate({
          top: knot2.top,
          left: knot2.left,
        }, 4000, function() {
        $(".forwardsright").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".backwardsright").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
  });
  } else if (walkpos.top > 462 && walkpos.top < 472 && walkpos.left > 919 && walkpos.left < 929) {  //rat
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: knot2.top,
          left: knot2.left,
        }, 4000, function() {
        $(".forwardsright").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").addClass("hide");
        $(".forwardsleft").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
});
  });
  } else if (walkpos.top > 71 && walkpos.top < 81 && walkpos.left > 377 && walkpos.left < 387) {  //toad
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
          top: knot2.top,
          left: knot2.left,
        }, 4000, function() {
        $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
  } else if (walkpos.top > 625 && walkpos.top < 635 && walkpos.left > 503 && walkpos.left < 513) {  //wildwood
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsleft").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot1.top,
        left: knot1.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot1.top, left: knot1.left});
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: knot2.top,
          left: knot2.left,
        }, 4000, function() {
        $(".forwardsright").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".forwardsright").removeClass("hide");
        $(".forwardsright").animate({
        top: pos.top + 22,
        left: pos.left - 30,
      }, 4000, function() {
      walkpos = pos;
      if (walkpos.top == pos.top && walkpos.left == pos.left) {
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").addClass("hide");
        $(".forwardsleft").addClass("hide");
        $(".forwardsright").addClass("hide");
        $("#frame").removeClass("hide");
        $("#frame").css({top: pos.top + 22, left: pos.left - 30});
        walkpos.top = pos.top + 22;
        walkpos.left = pos.left - 30;
        enableClick();
        }
    });
  });
});
  });
  }

  if (walkpos.top == 317 && walkpos.left == 730) {
    enableClick();
    $("#frame").removeClass("hide");
  }
  
  if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
    $(this).addClass("disableClick");
    $("#frame").addClass("hide");
  }

}); 

// TEXT - RAT
var indexr = 0;
var rat = [
  "When they got home, the Rat made a bright fire in the parlour, and planted the Mole in an arm-chair in front of it, having fetched down a dressing-gown and slippers for him, and told him river stories till supper-time. With closed eyes he dared to dream a moment in full abandonment, and when he looked again the river seemed steely and chill, the green field grey and lightless.",
  "Across the river, a dark hole in the bank opposite, just above the water’s edge, caught his eye. As he gazed, something bright and small seemed to twinkle down in the heart of it, vanished, then twinkled once more like a tiny star. Then, as he looked, it winked at him, and so declared itself to be an eye; and a small face began gradually to grow up round it, like a frame round a picture.",
  "‘This has been a wonderful day!’ said he, as the Rat shoved off and took to the sculls again. ‘Do you know, I’ve never been in a boat before in all my life.’ ‘What?’ cried the Rat, open-mouthed: ‘Never been in a – you never – well, I – what have you been doing then?’",
  "‘Beyond the Wild Wood comes the Wide World,’ said the Rat. ‘And that’s something that doesn’t matter, either to you or me. I’ve never been there, and I’m never going, nor you either, if you’ve got any sense at all. Don’t ever refer to it again, please.’"
  ];

$("#rat").click(function(){
  $(this).removeClass("visible");
  $("#badger").addClass("visible");
  $("#canal").addClass("visible");
  $("#mole").addClass("visible");
  $("#toad").addClass("visible");
  $("#wildwood").addClass("visible");
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top - 150, left: pos.left - 300, position: 'absolute'});
  
  function output(){
    var output = "";
    output += rat[indexr];
    if(indexr < 3){
      indexr++;
    } else {
      indexr = 0;
    }
    return output;
}
  $("#output").removeClass("changed");
  document.getElementById("output").innerHTML = output();

  // WALKING
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#badger").addClass("disableClick");
  $("#canal").addClass("disableClick");
  $("#mole").addClass("disableClick");
  $("#toad").addClass("disableClick");
  $("#wildwood").addClass("disableClick");

  if (walkpos.top == 355 && walkpos.left == 15) { //start Rat 467 | 924
    $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 850 && walkpos.top < 860 && walkpos.left > 500 && walkpos.left < 510) {  //badger
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 569 && walkpos.top < 579 && walkpos.left > 25 && walkpos.left < 35) {  //canal
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsright").removeClass("hide");
    $(".backwardsright").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsright").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 312 && walkpos.top < 322 && walkpos.left > 725 && walkpos.left < 735) {  //mole
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
    $(".forwardsleft").css({top: knot2.top, left: knot2.left});
    $(".backwardsleft").addClass("hide");
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
    });
  });
  } else if (walkpos.top > 71 && walkpos.top < 81 && walkpos.left > 377 && walkpos.left < 387) {  //toad
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").removeClass("hide");
    $(".forwardsright").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
    $(".forwardsleft").css({top: knot2.top, left: knot2.left});
    $(".forwardsright").addClass("hide");
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
    });
  });
  } else if (walkpos.top > 625 && walkpos.top < 635 && walkpos.left > 503 && walkpos.left < 513) {  //wildwood
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 37,
          left: pos.left - 30,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 37, left: pos.left - 30});
            walkpos.top = pos.top + 37;
            walkpos.left = pos.left - 30;
            enableClick();
            }
        });
      });
  }

  if (walkpos.top == 467 && walkpos.left == 924) {
    enableClick();
    $("#frame").removeClass("hide");
  }
  
  if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
    $(this).addClass("disableClick");
    $("#frame").addClass("hide");
  }

}); 

// TEXT - TOAD
var indext = 0;
var toad = [
  "Rounding a bend in the river, they came in sight of a handsome, dignified old house of mellowed red brick, with well-kept lawns reaching down to the water’s edge. “Finest house on the whole river,” cried Toad boisterously. “Or anywhere else, for that matter,” he could not help adding.",
  "They reached the carriage-drive of Toad Hall to find, as the Badger had anticipated, a shiny new motor-car, of great size, painted a bright red (Toad’s favourite colour), standing in front of the house. As they neared the door it was flung open, and Mr. Toad, arrayed in goggles, cap, gaiters, and enormous overcoat, came swaggering down the steps, drawing on his gauntleted gloves. ‘Hullo! come on, you fellows!’ he cried cheerfully on catching sight of them.",
  "Toad, pitching into the toast with avidity, his spirits quite restored to their usual level, told her about the boathouse, and the fish-pond, and the old walled kitchen-garden; and about the pig-styes, and the stables, and the pigeon-house, and the hen-house; and about the dairy, and the wash-house, and the china-cupboards, and the linen-presses (she liked that bit especially); and about the banqueting-hall, and the fun they had there when the other animals were gathered round the table and Toad was at his best, singing songs, telling stories, carrying on generally.",
  "‘The hour is come! Follow me!’ The four Heroes strode wrathfully into the room! The mighty Badger, his whiskers bristling, his great cudgel whistling through the air; Mole, black and grim, brandishing his stick and shouting his awful war-cry, ‘A Mole! A Mole!’ Rat; desperate and determined, his belt bulging with weapons of every age and every variety; Toad, frenzied with excitement and injured pride, swollen to twice his ordinary size, leaping into the air and emitting Toad-whoops that chilled them to the marrow! ‘Toad he went a-pleasuring!’ he yelled. ‘I’LL pleasure ‘em!’"
  ];

$("#toad").click(function(){
  $(this).removeClass("visible");
  $("#badger").addClass("visible");
  $("#canal").addClass("visible");
  $("#mole").addClass("visible");
  $("#rat").addClass("visible");
  $("#wildwood").addClass("visible");
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top + 175, left: pos.left + 75, position: 'absolute'});
  
  function output(){
    var output = "";
    output += toad[indext];
    if(indext < 3){
      indext++;
    } else {
      indext = 0;
    }
    return output;
}
  $("#output").addClass("changed");
  document.getElementById("output").innerHTML = output();

  // WALKING
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#badger").addClass("disableClick");
  $("#canal").addClass("disableClick");
  $("#mole").addClass("disableClick");
  $("#rat").addClass("disableClick");
  $("#wildwood").addClass("disableClick");

  if (walkpos.top == 355 && walkpos.left == 15) { //start Toad 76.5 | 382
    $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".backwardsleft").removeClass("hide");
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 850 && walkpos.top < 860 && walkpos.left > 500 && walkpos.left < 510) {  //badger
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
    $(".backwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".backwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsleft").addClass("hide");
      $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".backwardsleft").removeClass("hide");
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
    });
  });
  } else if (walkpos.top > 569 && walkpos.top < 579 && walkpos.left > 25 && walkpos.left < 35) {  //canal
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsright").removeClass("hide");
    $(".backwardsright").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".backwardsright").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".backwardsleft").removeClass("hide");
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 312 && walkpos.top < 322 && walkpos.left > 725 && walkpos.left < 735) {  //mole
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
      $(".backwardsleft").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 462 && walkpos.top < 472 && walkpos.left > 919 && walkpos.left < 929) {  //rat
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
    $(".backwardsleft").css({top: knot3.top, left: knot3.left});
    $(".forwardsleft").addClass("hide");
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".backwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsleft").addClass("hide");
      $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".backwardsleft").removeClass("hide");
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
    });
  });
  } else if (walkpos.top > 625 && walkpos.top < 635 && walkpos.left > 503 && walkpos.left < 513) {  //wildwood
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
    $(".backwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".backwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsleft").addClass("hide");
      $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: knot2.top,
        left: knot2.left,
      }, 4000, function() {
        $(".backwardsleft").css({top: knot2.top, left: knot2.left});
        $(".backwardsright").addClass("hide");
        $(".backwardsleft").removeClass("hide");
        $(".backwardsleft").animate({
          top: pos.top + 51.5,
          left: pos.left + 180.55,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 51.5, left: pos.left + 180.55});
            walkpos.top = pos.top + 51.5;
            walkpos.left = pos.left + 180.55;
            enableClick();
            }
        });
      });
    });
  });
  }

  if (walkpos.top == 76.5 && walkpos.left == 381.984375) {
    enableClick();
    $("#frame").removeClass("hide");
  }
  
  if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
    $(this).addClass("disableClick");
    $("#frame").addClass("hide");
  }

}); 

// TEXT - WILD WOOD
var indexw = 0;
var wildwood = [
"With great cheerfulness of spirit he pushed on towards the Wild Wood, which lay before him low and threatening, like a black reef in some still southern sea. Twigs crackled under his feet, logs tripped him, funguses on stumps resembled caricatures, and startled him for the moment by their likeness to something familiar and far away; but that was all fun, and exciting.",
"Holes, hollows, pools, pitfalls, and other black menaces to the wayfarer were vanishing fast, and a gleaming carpet of faery was springing up everywhere, that looked too delicate to be trodden upon by rough feet. A fine powder filled the air and caressed the cheek with a tingle in its touch, and the black boles of the trees showed up in a light that seemed to come from below.",
"Snow-castles and snow-caverns had sprung up out of nowhere in the night – and snow bridges, terraces, ramparts – I could have stayed and played with them for hours.",
"Rocks and brambles and tree-roots behind them, confusedly heaped and tangled; in front, a great space of quiet fields, hemmed by lines of hedges black on the snow, and, far ahead, a glint of the familiar old river, while the wintry sun hung red and low on the horizon. Pausing there a moment and looking back, they saw the whole mass of the Wild Wood, dense, menacing, compact, grimly set in vast white surroundings."
];

$("#wildwood").click(function(){
  $(this).removeClass("visible");
  $("#badger").addClass("visible");
  $("#canal").addClass("visible");
  $("#mole").addClass("visible");
  $("#rat").addClass("visible");
  $("#toad").addClass("visible");
  $("#output").show();
  var pos = $(this).position();
  $("#output").css({top: pos.top - 130, left: pos.left -25, position: 'absolute'});
  
  function output(){
    var output = "";
    output += wildwood[indexw];
    if(indexw < 3){
      indexw++;
    } else {
      indexw = 0;
    }
    return output;
}
  $("#output").removeClass("changed");
  document.getElementById("output").innerHTML = output();

  // WALKING
  var knot1 = $("#knot1").position();
  var knot2 = $("#knot2").position();
  var knot3 = $("#knot3").position();
  var walkpos = $("#frame").position();

  $("#badger").addClass("disableClick");
  $("#canal").addClass("disableClick");
  $("#mole").addClass("disableClick");
  $("#rat").addClass("disableClick");
  $("#toad").addClass("disableClick");
  
  if (walkpos.top == 355 && walkpos.left == 15) { //start WildWood 630 | 508
    $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 7.75,
          left: pos.left + 300.1,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsright").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
            walkpos.top = pos.top + 7.75;
            walkpos.left = pos.left + 300.1;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 850 && walkpos.top < 860 && walkpos.left > 500 && walkpos.left < 510) {  //badger
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".backwardsleft").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 7.75,
          left: pos.left + 300.1,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
            walkpos.top = pos.top + 7.75;
            walkpos.left = pos.left + 300.1;
            enableClick();
            }
        });
      });
  } else if (walkpos.top > 569 && walkpos.top < 579 && walkpos.left > 25 && walkpos.left < 35) {  //canal
    $(".backwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsright").removeClass("hide");
    $(".backwardsright").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".backwardsright").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 7.75,
          left: pos.left + 300.1,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsright").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
            walkpos.top = pos.top + 7.75;
            walkpos.left = pos.left + 300.1;
            enableClick();
            }
        });
      });
    });
  } else if (walkpos.top > 312 && walkpos.top < 322 && walkpos.left > 725 && walkpos.left < 735) {  //mole
    $(".backwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".backwardsleft").removeClass("hide");
    $(".backwardsleft").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".backwardsleft").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 7.75,
          left: pos.left + 300.1,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
            walkpos.top = pos.top + 7.75;
            walkpos.left = pos.left + 300.1;
            enableClick();
            }
        });
      });
    });
  });
  } else if (walkpos.top > 462 && walkpos.top < 472 && walkpos.left > 919 && walkpos.left < 929) {  //rat
    $(".forwardsleft").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsleft").removeClass("hide");
    $(".forwardsleft").animate({
      top: knot3.top,
      left: knot3.left,
    }, 4000, function() {
      $(".backwardsright").css({top: knot3.top, left: knot3.left});
      $(".forwardsleft").addClass("hide");
      $(".backwardsright").removeClass("hide");
      $(".backwardsright").animate({
        top: pos.top + 7.75,
        left: pos.left + 300.1,
      }, 4000, function() {
        walkpos = pos;
        if (walkpos.top == pos.top && walkpos.left == pos.left) {
          $(".backwardsright").addClass("hide");
          $(".forwardsleft").addClass("hide");
          $("#frame").removeClass("hide");
          $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
          walkpos.top = pos.top + 7.75;
          walkpos.left = pos.left + 300.1;
          enableClick();
          }
      });
    });
  } else if (walkpos.top > 71 && walkpos.top < 81 && walkpos.left > 377 && walkpos.left < 387) {  //toad
    $(".forwardsright").css({top: walkpos.top, left: walkpos.left});
    $(".forwardsright").removeClass("hide");
    $(".forwardsright").animate({
      top: knot2.top,
      left: knot2.left,
    }, 4000, function() {
      $(".forwardsleft").css({top: knot2.top, left: knot2.left});
      $(".forwardsright").addClass("hide");
      $(".forwardsleft").removeClass("hide");
      $(".forwardsleft").animate({
      top: knot1.top,
      left: knot1.left,
    }, 4000, function() {
      $(".forwardsright").css({top: knot1.top, left: knot1.left});
      $(".forwardsleft").addClass("hide");
      $(".forwardsright").removeClass("hide");
      $(".forwardsright").animate({
        top: knot3.top,
        left: knot3.left,
      }, 4000, function() {
        $(".backwardsright").css({top: knot3.top, left: knot3.left});
        $(".forwardsright").addClass("hide");
        $(".backwardsright").removeClass("hide");
        $(".backwardsright").animate({
          top: pos.top + 7.75,
          left: pos.left + 300.1,
        }, 4000, function() {
          walkpos = pos;
          if (walkpos.top == pos.top && walkpos.left == pos.left) {
            $(".backwardsleft").addClass("hide");
            $(".backwardsright").addClass("hide");
            $(".forwardsleft").addClass("hide");
            $(".forwardsright").addClass("hide");
            $("#frame").removeClass("hide");
            $("#frame").css({top: pos.top + 7.75, left: pos.left + 300.1});
            walkpos.top = pos.top + 7.75;
            walkpos.left = pos.left + 300.1;
            enableClick();
            }
        });
      });
    });
  });
  }

  if (walkpos.top == 630 && walkpos.left == 507.984375) {
    enableClick();
    $("#frame").removeClass("hide");
  }
    
  if ($(".backwardsright").is(':animated') || $(".backwardsleft").is(':animated') || $(".forwardsright").is(':animated') || $(".forwardsleft").is(':animated')) {
    $(this).addClass("disableClick");
    $("#frame").addClass("hide");
  }

});

// TRIVIA QUIZ
var correct = 0;
var quizindex = 1;
var quizanswerIndex = 0;
var quizarray = [
  ["Mole’s fur is coloured dark brown.", "false"],
  ["Mole is fascinated by the river.", "true"],
  ["Mole has been boating his whole life.", "false"],
  ["Rat greatly enjoys travelling and wants to journey the whole wide world.", "false"],
  ["Toad is lacking sufficient money to afford a luxurious lifestyle.", "false"],
  ["Mole and the Rat visit Wild Wood in winter.", "true"],
  ["Badger lives within the Wild Wood.", "true"],
  ["Mole is a great fan of the heroes of modern Italy.", "true"],
  ];

function checkAnswer(){
  if(quizanswerIndex < 8){
    var answer = quizarray[quizanswerIndex][1];
    var userinput = $("input[name=answer]:checked").val();
    if (answer == userinput) {
      var number = quizanswerIndex + 1;
      var happy = "happy" + number;
      document.getElementById(happy).style.display = "block";
      correct++;
    } else {
      var number = quizanswerIndex + 1;
      var sad = "sad" + number;
      document.getElementById(sad).style.display = "block";
    }
    quizanswerIndex++;
  } 
  if (correct == 8) {
    document.getElementById("reward").style.display = " block";
    document.getElementById("questionspace").style.display = "none";
    for(var i = 1; i <= 8; i++){
      var happy = "happy" + i;
      document.getElementById(happy).style.display = "none";
      var sad = "sad" + i;
      document.getElementById(sad).style.display = "none";
    }
    correct = 0;
    quizindex = 1;
    quizanswerIndex = 0;
    count = 0;
  } else if(correct != 8 && quizanswerIndex == 8){
    document.getElementById("options").style.display = "block";
    document.getElementById("proceed").style.display = "none";
    document.getElementById("questionspace").style.display = "none";
    document.getElementById("radiobuttons").style.display = "none";
    for(var i = 1; i <= 8; i++){
      var happy = "happy" + i;
      document.getElementById(happy).style.display = "none";
      var sad = "sad" + i;
      document.getElementById(sad).style.display = "none";
    }
    correct = 0;
    quizindex = 1;
    quizanswerIndex = 0;
    count = 0;
  }
}

// GET STARTED & SHOW FIRST QUESTION
$("#continue").click(function(){
  document.getElementById("quiz1").style.display = "none";
  document.getElementById("quiz2").style.display = "block";
  document.getElementById("proceed").style.display = "block";
  document.getElementById("options").style.display = "none";
  document.getElementById("questionspace").style.display = "block";
  document.getElementById("radiobuttons").style.display = "block";
  function display(){
    var x = "";
    x += "<br>" + quizarray[0][0];
    return x;
}
  document.getElementById("questionspace").innerHTML = display();
});

// SHOW REMAINING QUESTIONS
$("#nextquestion").click(function(){
  function display(){
    var x = "";
    x += "<br>"+quizarray[quizindex][0];
    if(quizindex <7 ) {
      quizindex++;
    }
    checkAnswer();
    return x;
}

  document.getElementById("questionspace").innerHTML = display();
});

// ARRAY BUTTONS
  $("#finish").click(function(){
    document.getElementById("quiz").style.display = "none";
    count = 0;
  });

  $("#again").click(function(){
    document.getElementById("quiz1").style.display = "block";
    document.getElementById("proceed").style.display = "block";
    document.getElementById("options").style.display = "none";
    document.getElementById("quiz2").style.display = "none";
  });

  $("#reward").click(function(){
    document.getElementById("quiz").style.display = "none";
    document.getElementById("reward").style.display = "none";
  });

});