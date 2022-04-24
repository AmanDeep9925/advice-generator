const dice = $(".dice");

// * Get advice ajax call

dice.on("click", () => {
  setTimeout(function () {
    $.ajax({
      url: "https://api.adviceslip.com/advice",
      success: function (data) {
        let result = JSON.parse(data);

        let adviceObject = result.slip;
        let id = adviceObject.id;
        let advice = adviceObject.advice;

        $(".advice__id__number").html(id);
        $(".advice__block").html(advice);
      },
      complete: dice.on("click"),
    });
  }, 2000);
});
