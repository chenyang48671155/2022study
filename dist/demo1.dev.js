"use strict";

var arr = ["yangcai1ong", "chenfuzong", "yangcy"];
var newList = arr.map(function (item) {
  return "<li>\n        <b>".concat(item, "</b>\n    </li>");
});
console.log(newList);