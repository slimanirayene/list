function createNote() {
  var title = document.getElementById("doctext").value;

  var textContent = document.getElementById("docarea").value;

  var notes = document.getElementById("notes");

  var card = document.createElement("div");

  card.setAttribute("class", "card");

  notes.appendChild(card);

  var cardHead = document.createElement("div");

  cardHead.setAttribute("class", "card-head");

  card.appendChild(cardHead);

  var titlespan = document.createElement("span");

  titlespan.innerHTML = title;

  titlespan.setAttribute("class", "title-span");

  cardHead.appendChild(titlespan);
  var titleimage = document.createElement("img");
  titleimage.setAttribute("src", "sheesh.svg");
  titleimage.setAttribute("onClick", "deleteNote(this)");
  cardHead.appendChild(titleimage);
  var content = document.createElement("div");
  content.setAttribute("class", "pitche");
  card.appendChild(content);
  var contentSpan = document.createElement("span");
  contentSpan.innerHTML = textContent;
  content.appendChild(contentSpan);
}

function deleteNote(el) {
  var toDelete = el.parentNode.parentNode;
  toDelete.remove();
}
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
}
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function minMax(arr) {
  var min = arr[0]; // min = 1
  var max = arr[0]; // max = 54

  for (var v of arr) {
    // v = 54
    if (min > v) min = v;
    else if (max < v) max = v;
  }
  return [min, max];
}
// function lessThan100(a, b) {
//   return a + b < 100 ? true : false;
// }

function swap(num) {
  var un = num % 10;
  var dix = num - un;
  var swapped = un * 10 + dix / 10;
  return swapped <= num ? true : false;
}
