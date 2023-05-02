let countries = [
  { name: 'Балі - 500', value: 'bali', cost: 500 },
  { name: 'Тайланд - 700', value: 'thailand', cost: 700 },
  { name: 'Японія - 1000', value: 'japan', cost: 1000 },
];

let transports = [
  { name: 'Літак - 200', value: 'plane', cost: 200 },
  { name: 'Потяг - 100', value: 'train', cost: 100 },
  { name: 'Автобус - 50', value: 'bus',cost: 50 },
];

let hotels = [
  { name: 'Преміум - 300', value: 'premium', cost: 300 },
  { name: 'Стандарт - 200', value: 'standart', cost: 200 },
  { name: 'Економ - 100', value: 'econom', cost: 100 },
];

const customTourBtn = document.querySelector('#custom-tour-btn');
const customTourWindow = document.querySelector('.custom-tour-window');
const totalValueSpan = document.querySelector('#total-value');

customTourBtn.addEventListener('click', () => {
  customTourWindow.classList.remove('hidden');
});

let selector_country = document.querySelector("#destination");
let selector_hotel = document.querySelector("#hotel");
let selector_transport = document.querySelector("#transport");
selector_country.innerHTML = '';
selector_hotel.innerHTML = '';
selector_transport.innerHTML = '';

let selectedDestinationCost = 0;
let selectedTransportCost = 0;
let selectedHotelCost = 0;

// Створюємо списки
createSelect(selector_country, countries);
createSelect(selector_hotel, hotels);
createSelect(selector_transport, transports);

function createSelect(sel,ar)
{
    for (let i = 0; i < ar.length;i++)
    {
        const option = document.createElement("option");
        option.text = ar[i].name;
        option.dataset.cost = ar[i].cost; // Додаємо ціну до атрибуту dataset
        
        sel.add(option);
    }
}

function updateTotalValue() {
  const totalCost = selectedDestinationCost + selectedTransportCost + selectedHotelCost;
  totalValueSpan.textContent = `${totalCost} грн`;
}

selector_country.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  selectedDestinationCost = parseInt(selectedOption.dataset.cost, 10);
  updateTotalValue();
});

selector_transport.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  selectedTransportCost = parseInt(selectedOption.dataset.cost, 10);
  updateTotalValue();
});

selector_hotel.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  selectedHotelCost = parseInt(selectedOption.dataset.cost, 10);
  updateTotalValue();
});


ChatGPT
.addEventListener('change', (event) => {
const selectedOption = event.target.selectedOptions[0];
selectedHotelCost = parseInt(selectedOption.dataset.cost, 10);
updateTotalValue();
});

// Додаємо обробник на кнопку "Замовити"
const orderBtn = document.querySelector('#submit-btn');
orderBtn.addEventListener('click', () => {
const destination = selector_country.value;
const transport = selector_transport.value;
const hotel = selector_hotel.value;
const totalCost = selectedDestinationCost + selectedTransportCost + selectedHotelCost;
});

// Додаємо обробник на кнопку "Закрити" у вікні замовлення
const closeBtn = document.querySelector('#cancel-btn');
closeBtn.addEventListener('click', () => {
customTourWindow.classList.add('hidden');
});