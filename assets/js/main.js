const jadwalPuasa = () => {
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
  const newValue = `bogor/${year}/${month}`;
  const hour = date.getHours(); // => 9
  const minute = date.getMinutes(); // =>  30
  const secound = date.getSeconds(); // => 51
  const newClock = `${hour}:${minute}:${secound}`;
  console.log(newClock);
  let content = "";

  const apiSholat = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${newValue}.json`;
  $.getJSON(apiSholat, function (data) {
    $.each(data, function (i, data) {
      const currentDate = `${year}-${month}-${day}`;
      console.log(data.tanggal);
      if (currentDate === data.tanggal) {
        content += `


        
        <div class="jadwal-puasa">
        <p class="imsyak">${data.imsyak}</p>
        <p class="shubuh">${data.shubuh}</p>
        <p class="dhuha">${data.dhuha}</p>
        <p class="dzuhur">${data.dzuhur}</p>
        <p class="ashr">${data.ashr}</p>
        <p class="magrib">${data.magrib}</p>
        <p class="isya">${data.isya}</p>
        </div>
        `;
      }
    });
    $("#list-jadwal").html(content);
  });
};
