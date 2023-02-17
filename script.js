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
