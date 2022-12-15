const api = {
    key: "228cfefac5b85af9fc76719bc59ef9cd",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt-br",
    units: "metric"
}

const city = document.querySelector('.city');
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('.weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');
const message = document.querySelector('#message')


search_button.addEventListener('click', () =>{
    if(search_input.value == ''){

        message.classList.add('color-red');
        message.classList.remove('color-green');
        message.textContent = 'Insira o nome de uma cidade';

        setTimeout(() =>{
            message.textContent = '';
        },5000)

    }
    else{
        searchResults(search_input.value)
    }
})


search_button.addEventListener('keypress', enter)
enter = (event) => {
    key = event.keyCode
    if (key == 13) {
        if(search_input.value == ''){

            message.classList.add('color-red');
            message.classList.remove('color-green');
            message.textContent = 'Insira o nome de uma cidade';

            setTimeout(() =>{
                message.textContent = '';
            },5000)
        }
        else{
            searchResults(search_input.value)
        }
        
    }
}

searchResults = (city) =>{
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            console.log(response)
            if (!response.ok){
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message);
        })
        .then(response => {
            displayResults(response)
        })
}