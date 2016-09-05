function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');

  for (var i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild() {
  var current = document.querySelector('#grand-node');
  while (current.children.length > 0) {
    current = current.children[0];
  }

  return current;
}
