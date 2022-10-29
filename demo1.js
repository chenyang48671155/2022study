let arr = ["yangcai1ong", "chenfuzong", "yangcy"];

let newList = arr.map(function (item) {
  return `<li>
        <b>${item}</b>
    </li>`;
});

console.log(newList);
