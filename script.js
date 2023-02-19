// function func1() {
//   $("#img1").fadeToggle(3000);
// }
// Use jQuery Snippets by typing jq before any line of code

// function for 1section describing selectors
/* function func1() {
  // element selectors
  $("div").css("backgroundColor", "orange");

  // id selectors
  $("#p1").css("fontStyle", "italic");

  // class selectors
  $(".para").css("textDecoration", "underline");

  // using multiple id selectors
  $("#div1, #div3").css("backgroundColor", "green");

  // using multiple kinds of selectors in the same line
  $("#div1,p:first-child, li:first-child").css("backgroundColor", "blue");

  // using a nested p tag within a div tag
  // $("div>p").fadeToggle(3000);
  $("div p").fadeToggle(3000);

  // access first p tag
  $("p:first").css("backgroundColor", "purple");

  // access odd list items
  $("li:odd").fadeToggle(2000);
} */

// events in jQuery

// click events

// $("button").click(func2);
// function func2() {
//   $("#img1").css("width", "400px");
// }

/* $(document).ready(function () {
  $("button").dblclick(function (e) {
    e.preventDefault();
    $("#img1").css("width", "450px");
  });

  $("#img1").mouseenter(function () {
    $(this).css("width", "200px");
  });

  $("#img1").mouseleave(function () {
    $(this).css("width", "300px");
  });

  $("#button").hover(
    function () {
      // over
      $(this).css("background-color", "yellow");
    },
    function () {
      // out
      $(this).css("background-color", "white");
    }
  );

  $("#img1").mousedown(function () {
    $(this).css("border", "5px dashed green");
  });

  $("#img1").mouseup(function () {
    $(this).css("border", "none");
  });

  // focus on input field
  $("input").focus(function (e) {
    e.preventDefault();
    $(this).css("backgroundColor", "yellow");
  });

  // when focus lost from input field
  $("input").blur(function (e) {
    e.preventDefault();
    $(this).css("backgroundColor", "gray");
  });

  // using on event we can append multiple events to selectors
  $("#btn2").on({
    mouseenter: function () {
      $(this).css("backgroundColor", "purple");
    },
    mouseleave: function () {
      $(this).css("backgroundColor", "lightblue");
    },
    click: function () {
      $(this).css("backgroundColor", "yellow");
    },
  });
}); */

/*
// jQuery Effects
$(document).ready(function () {
  // hide
  $("#hide").click(function (e) {
    e.preventDefault();
    $("p").hide(1000);
  });

  // show
  $("#show").click(function (e) {
    e.preventDefault();
    $("p").show(1000);
  });

  // toggle
  $("#toggle").click(function (e) {
    e.preventDefault();
    $("#p1").toggle("fast");
  });

  // fadeIn
  $("#fadeIn").click(function (e) {
    e.preventDefault();
    $("#div1").fadeIn("fast");
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(1000);
  });

  // fadeOut
  $("#fadeOut").click(function (e) {
    e.preventDefault();
    $("#div3").fadeOut("fast");
    $("#div2").fadeOut("slow");
    $("#div1").fadeOut(1000);
  });

  // fadeToggle
  $("#fadeToggle").click(function (e) {
    e.preventDefault();
    $("#div1").fadeToggle("fast");
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(1000);
  });

  // fadeTo
  $("#fadeTo").click(function (e) {
    e.preventDefault();
    $("#div1").fadeTo("slow", 0.2);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.6);
  });

  // slideUp, slideDown and slideToggle

  // $("#flip").click(function (e) {
  //   e.preventDefault();
  //   $("#panel").slideUp();
  // });
  // $("#flip").click(function (e) {
  //   e.preventDefault();
  //   $("#panel").slideDown();
  // });

  $("#flip").click(function (e) {
    e.preventDefault();
    $("#panel").slideToggle();
  });
});
*/

/*
// jQuery Animations
$(document).ready(function () {
  // move right
  $("#btn1").click(function (e) {
    e.preventDefault();
    $("#green-square").animate({ left: "400px" });
  });

  // manipulate multiple properties
  $("#btn2").click(function (e) {
    e.preventDefault();
    $("#red-square").animate({
      left: "300px",
      opacity: "0.1",
      height: "200px",
      width: "200px",
    });
  });

  // using relative values
  $("#btn3").click(function (e) {
    e.preventDefault();
    $("#blue-square").animate({
      left: "300px",
      height: "+=150px",
      width: "+=150px",
      top: "+=150px",
    });
  });

  // using predefined show, hide and toggle
  $("#btn4").click(function (e) {
    e.preventDefault();
    $("#orange-square").animate(
      {
        height: "toggle",
      },
      "slow"
    );
  });

  // Using queue functionality
  // runs the animate calls ONE by ONE.
  $("#btn5").click(function (e) {
    e.preventDefault();
    var div1 = $("#pink-square");
    div1.animate({ height: "300px", opacity: "0.4" }, "slow");
    div1.animate({ width: "300px", opacity: "0.8" }, "slow");
    div1.animate({ height: "100px", opacity: "0.4" }, "slow");
    div1.animate({ width: "100px", opacity: "0.8" }, "slow");
  });

  // stop animations
  $("#btnStop").click(function (e) {
    e.preventDefault();
    $("#pink-square").stop();
  });

  // Using callback functions as parameters in animations to execute the function after an effect is finished
  // $("#togglePara").click(function (e) {
  //   e.preventDefault();
  //   $("p").toggle("slow", function () {
  //     alert("Hello World");
  //   });
  // });

  // method chaining
  $("#togglePara").click(function (e) {
    e.preventDefault();
    $("p").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
*/

// jQuery DOM Manipulation

// get html elements
$(document).ready(function () {
  // get text within html tags
  $("#btn1").click(function (e) {
    e.preventDefault();
    alert("Text: " + $("#test").text());
  });

  // get html content with nested html tags
  $("#btn2").click(function (e) {
    e.preventDefault();
    alert("Text: " + $("#test").html());
  });

  // get input value from input field
  $("#btn3").click(function (e) {
    e.preventDefault();
    alert("Value: " + $("#input-test").val());
  });

  // get attribute of html element
  $("#btn4").click(function (e) {
    e.preventDefault();
    alert($("#w3s").attr("href"));
  });

  // set text within an html element
  $("#btn5").click(function (e) {
    e.preventDefault();
    $("#test1").text("Hello World!");
  });

  // set html
  $("#btn6").click(function (e) {
    e.preventDefault();
    $("#test2").html("<b>Hello World</b>");
  });

  // set input value
  $("#btn7").click(function (e) {
    e.preventDefault();
    $("#test3").val("John Doe");
  });
});
