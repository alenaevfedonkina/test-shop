let checkbox = document.getElementById('toggle');
let scrolling = document.querySelector('.upward');
let btnOpenForm = document.querySelectorAll('.btn-buy');
let displayForm = document.getElementById('buying');
let btnByu = document.querySelector('.byu');
let btnCloseForm = document.querySelector('.cansel');
let overlay = document.querySelector('.overlay');
let quantityInput = document.querySelector('.quantity-input');
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let dayCollection = document.querySelectorAll('.data');


checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.style.setProperty('--main-bg-color', '#5e5d5d');
        document.documentElement.style.setProperty('--main-text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--main-bg-color', '#efe6e6');
        document.documentElement.style.setProperty('--main-text-color', '#000000');
    }
});


window.addEventListener('scroll', function(){
    scrolling.classList.toggle('active', this.window.scrollY>500 )
});
function scrollingTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
};
function clearModal(){
    quantityInput.value = ""
};
btnPlus.addEventListener('click', function(e){
    quantityInput.value++;
    e.preventDefault();
});
btnMinus.addEventListener('click', function(e){
    quantityInput.value--;
    e.preventDefault();
});
btnOpenForm.forEach(function(button){
    button.addEventListener("click", function() {
        displayForm.style.display = 'block';
        overlay.style.display = 'block';
    });
});
btnByu.addEventListener('click', function(){
    alert('Покупка совершена');
    displayForm.style.display = 'none';
    overlay.style.display = 'none';
    clearModal()
});
btnCloseForm.addEventListener('click', function(e){
    displayForm.style.display = 'none';
    overlay.style.display = 'none';
    e.preventDefault();
    clearModal()
});



function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let startOfYear = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    let weekNo = Math.ceil((((d - startOfYear) / 86400000) + 1)/7);
    return weekNo;
}

function getMonthName(month) {
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return months[month];
}

function getDayName(day) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[day];
}

function getDayInfo(dateStr) {
    let parts = dateStr.split(".");
    let date = new Date(parts[2], parts[1] - 1, parts[0]);

    let dayName = getDayName(date.getDay());
    let weekNo = getWeekNumber(date);
    let monthName = getMonthName(date.getMonth());
    let year = date.getFullYear();

    return `${dayName}, ${weekNo} неделя ${monthName} ${year} года`;
}
dayCollection.forEach(function(day){
    day.innerHTML = `Дата публикации:`+ " " + getDayInfo("26.05.2023")
  
})



