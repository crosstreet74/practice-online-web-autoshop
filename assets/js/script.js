const car = { type: "Fiat", model: "500", color: "white" };
let flag = true;
let isDark = false;
let catalog = [{ type: 'Sports Sedan', model: 'Stinger', brand: 'Kia' },
{ type: 'Sports Utility', model: 'Cayenne', brand: 'Porsche' },
{ type: 'Coupe', model: '4-door Coupe', brand: 'Mercedes-Benz' }
];

var x;
for (x = 0; x < catalog.length; x++) {
    doc = '<li>' + catalog[x].brand + ' ' + catalog[x].type + ' ' + catalog[x].brand + '</li>';
    document.getElementById('catalog_detail').innerHTML += doc;
}

function setCar(type, model, color) {
    document.getElementById("car_type").innerHTML = type;
    document.getElementById("car_model").innerHTML = model;
    document.getElementById("car_color").innerHTML = color;
    document.getElementById("car_icon").style.color = color;
    document.getElementById("car_icon").style.transition = '0.5s';
    document.getElementById("car_preview").style.display = 'initial'
}
function myFunc() {
    if (flag == true) {
        setCar("Volvo", "EX60", "gray");
        flag = false;
    }
    else if (flag == false) {
        setCar("Fiat", "500", "black");
        flag = true;
    }
    else {

    }
}
function toggleDarkTheme() {
    if (isDark === false) {
        setDarkTheme()
        isDark = true;
    }
    else if (isDark === true) {
        setLightTheme()
        isDark = false;
    }
}

function setLightTheme() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    document.getElementsByTagName('header')[0].style.backgroundColor = 'papayawhip'
    document.getElementById('catalog').style.backgroundColor = 'thistle'
    document.getElementById('recommend').style.backgroundColor = 'powderblue'
    document.getElementsByTagName('body')[0].style.color = 'black'
    document.getElementById('darkThemeIcon').style.display = 'initial'
    document.getElementById('lightThemeIcon').style.display = 'none'
    document.getElementById('spanToggleTheme').style.color = '#eee'
    document.getElementById('btnToggleTheme').style.backgroundColor = '#222'
}

function setDarkTheme() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#123'
    document.getElementsByTagName('header')[0].style.backgroundColor = 'grey'
    document.getElementById('catalog').style.backgroundColor = '#235'
    document.getElementById('recommend').style.backgroundColor = '#357'
    document.getElementsByTagName('body')[0].style.color = '#eee'
    document.getElementById('darkThemeIcon').style.display = 'none'
    document.getElementById('lightThemeIcon').style.display = 'initial'
    document.getElementById('spanToggleTheme').style.color = '#222'
    document.getElementById('btnToggleTheme').style.backgroundColor = '#eee'
}