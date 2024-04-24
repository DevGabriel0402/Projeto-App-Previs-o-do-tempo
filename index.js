const key = "fe4e8fa1d374bd6c75233ee7aeba2237";
const btnBuscar =
  document.getElementById("btn-busca");

//   Dados a serem inseridos na tela
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const forecast =
  document.querySelector(".forecast");
const moisture =
  document.querySelector(".moisture");
const imgForecast = document.querySelector(
  ".img-forecast"
);
const containerInfo = document.querySelector(
  ".container-info"
);

// funções

function colocarDadosNaTela(data) {
  console.log(data);
  containerInfo.classList.remove("hidden");
  city.innerHTML = "Tempo em " + data.name;
  temp.innerHTML =
    Math.floor(data.main.temp) + "°C";
  forecast.innerHTML =
    data.weather[0].description;
  moisture.innerHTML =
    "Umidade do ar:" +
    " " +
    data.main.humidity +
    "%";
  imgForecast.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  imgForecast.alt = "icone-info-do-tempo";
}

async function buscarCidade(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  colocarDadosNaTela(data);
}

btnBuscar.addEventListener("click", function () {
  const city = document.querySelector(
    ".input-city"
  ).value;

  buscarCidade(city);
});
