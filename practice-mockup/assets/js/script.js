let flag = true;
let isDark = false;
let catalog = {
    'vehicles': [{ type: 'Sports Sedan', model: 'Stinger', brand: 'Kia', img_url: 'assets/img/catalog-kia_stinger.jpg', redirect_url: '1.html', price: '38.5 million ₩~', mileage: '9-11 km/l' },
        { type: 'Sports Utility', model: 'Cayenne', brand: 'Porsche', img_url: 'assets/img/catalog-porsche_cayenne.jpg', redirect_url: '2.html', price: '112.2 million ₩~', mileage: '6-7 km/l' },
        { type: 'Coupe', model: 'GT 4-Door Coupe', brand: 'Mercedes-Benz', img_url: 'assets/img/catalog-mercedes_benz_4door_coupe.jpg', redirect_url: '3.html', price: '100.4 million ₩~', mileage: '8-9 km/l' }
    ]
}

var x;
for (x in catalog.vehicles) {
    doc = '<div class="catalog_item" style="position: relative;">' +
        '<img class="catalog_img" src="' +
        catalog.vehicles[x].img_url + '"> <br/>' +
        catalog.vehicles[x].brand + '<br/>' +
        catalog.vehicles[x].model + '<br/>' +
        '<span class="tooltiptext">Click for Details</span>' +
        '<a href="' + catalog.vehicles[x].redirect_url + '" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;">' + '</a>' +
        '</div>';
    let el = document.getElementById('catalog_list');
    if (el != null)
        el.innerHTML += doc
}

// for (x in catalog.vehicles) {
//     document.getElementById('item-' + 'x').addEventListener();
// }

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
    } else if (flag == false) {
        setCar("Fiat", "500", "black");
        flag = true;
    } else {

    }
}

function toggleDarkTheme() {
    if (isDark === false) {
        setDarkTheme()
        isDark = true;
    } else if (isDark === true) {
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

    let len = document.getElementsByClassName('catalog_item').length
    for (let i = 0; i < len; i++) {
        document.getElementsByClassName('catalog_item')[i].style.backgroundColor = 'dimgray'
        document.getElementsByClassName('catalog_item')[i].style.color = '#eee'
    }
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

    let len = document.getElementsByClassName('catalog_item').length
    for (let i = 0; i < len; i++) {
        document.getElementsByClassName('catalog_item')[i].style.backgroundColor = '#eee'
        document.getElementsByClassName('catalog_item')[i].style.color = '#222'
    }
}


/** scripts to practice windows.location.pathname - temporary */

var myURL = window.location.pathname;
var myUrlArr = myURL.split('/')
var pageFileName = myUrlArr[myUrlArr.length - 1]
var id = pageFileName.split('.')[0]

/** scripts of the page for the catalog items specification  - temporary */

let el = document.getElementById('item_spec');
if (el != null) {
    doc = '<div class="spec_container">' +
        '<img class="spec_img" src="' + catalog.vehicles[id - 1].img_url + '"> <br/>' +
        '<div class="spec_text">' +
        'Brand: ' + catalog.vehicles[id - 1].brand + '<br/>' +
        'Model: ' + catalog.vehicles[id - 1].model + '<br/>' +
        'Price: ' + catalog.vehicles[id - 1].price + '<br/>' +
        'Mileage: ' + catalog.vehicles[id - 1].mileage + '<br/>' +
        '</div>' +
        '</div>' +
        '<a href="index.html">Return to Main Page</a>';
    el.innerHTML += doc
}