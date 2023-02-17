// function func1() {
//   $("#img1").fadeToggle(3000);
// }

// Use jQuery Snippets by typing jq before any line of code

// function for 1section describing selectors
function func1() {
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
}
