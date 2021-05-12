import $ from "jquery";
import "./app2.css";
const $tabBar = $(".app2 .tab-bar");
console.log($tabBar);
const $tabContent = $(".app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  //事件委托
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$tabBar.children().eq(0).trigger("click");
