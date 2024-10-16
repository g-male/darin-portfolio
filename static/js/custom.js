var coll = document.getElementsByClassName("navright");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const gridContainer = document.querySelector('.icon.grid');
const gridItems = document.querySelectorAll('.grid-item.drawnicon');
const numberOfItems = gridItems.length;
const flexBasisValue = `calc(100% / ${numberOfItems})`;

gridItems.forEach(item => {
  item.style.flexBasis = flexBasisValue;
});

