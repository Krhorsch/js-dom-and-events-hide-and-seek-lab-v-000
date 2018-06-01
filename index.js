function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}
