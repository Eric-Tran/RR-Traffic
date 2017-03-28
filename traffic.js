const colors = ['red', 'green', 'yellow'];
let index = 0;

function changeLight() {
  let nextIndex = (index + 1 >= colors.length) ? 0 : index + 1;
  $('.traffic__light--' + colors[index]).toggleClass('traffic__light--lit');
  $('.traffic__light--' + colors[nextIndex]).toggleClass('traffic__light--lit');
  index = nextIndex;
}
