const jadwalPuasa = () => {
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const day =
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate();
  const newValue = `${year}/${month}`;
  const hour = date.getHours(); // => 9
  const minute = date.getMinutes(); // =>  30
  const secound = date.getSeconds(); // => 51
  const newClock = `${hour}:${minute}:${secound}`;
  let contentBogor = "";
  let contentJakarta = "";

  const jadwalBogor = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/bogor/${newValue}.json`;
  $.getJSON(jadwalBogor, function (data) {
    $.each(data, function (i, data) {
      const currentDate = `${year}-${month}-${day}`;
      if (currentDate === data.tanggal) {
        contentBogor += `
     
        <p class="imsyak">${data.imsyak}</p>
        <p class="shubuh">${data.shubuh}</p>
        <p class="dhuha">${data.dhuha}</p>
        <p class="dzuhur">${data.dzuhur}</p>
        <p class="ashr">${data.ashr}</p>
        <p class="magrib">${data.magrib}</p>
        <p class="isya">${data.isya}</p>
      
        `;
      }
    });
    $(".jadwal-bogor").html(contentBogor);
  });
  const jadwalJakarta = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/jakartautara/${newValue}.json`;
  $.getJSON(jadwalJakarta, function (data) {
    $.each(data, function (i, data) {
      const currentDate = `${year}-${month}-${day}`;
      if (currentDate === data.tanggal) {
        contentJakarta += `
  
        <p class="imsyak">${data.imsyak}</p>
        <p class="shubuh">${data.shubuh}</p>
        <p class="dhuha">${data.dhuha}</p>
        <p class="dzuhur">${data.dzuhur}</p>
        <p class="ashr">${data.ashr}</p>
        <p class="magrib">${data.magrib}</p>
        <p class="isya">${data.isya}</p>
        `;
      }
    });
    $(".jadwal-jakarta").html(contentJakarta);
  });
};

const dateTime = () => {
  var span = document.getElementById("span");
  var tanggal = document.getElementById("tanggal-islam");

  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent =
      ("0" + h).substr(-2) +
      ":" +
      ("0" + m).substr(-2) +
      ":" +
      ("0" + s).substr(-2);
  }

  setInterval(time, 1000);
};

const islamDate = () => {
  var tanggal = document.getElementById("tanggal-islam");

  var dayArabic = new Intl.DateTimeFormat("en-u-ca-islamic-nu-latn", {
    day: "numeric",
  }).format(Date.now());
  var monthArabic = new Intl.DateTimeFormat("en-u-ca-islamic-nu-latn", {
    month: "long",
  }).format(Date.now());
  tanggal.textContent = dayArabic + " " + monthArabic + " 1444 H";
};

const countDown = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("apr 21, 2023").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("count-days").innerHTML = days;
    document.getElementById("count-hours").innerHTML = hours;
    document.getElementById("count-minutes").innerHTML = minutes;
    document.getElementById("count-seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("count-down").innerHTML = "Selamat Lebaran";
    }
  }, 1000);
};
