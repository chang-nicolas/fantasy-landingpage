$(document).ready(function () {
  try {
    $(".mint").ripples({
      resolution: 256,
      perturbance: 0.04,
    });
  } catch (e) {
    alert(e);
  }
});
