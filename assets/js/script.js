let flag = true;
let isDark = false;
let catalog = {
    'vehicles': [{ type: 'Sports Sedan', model: 'Stinger', brand: 'Kia', img_url: 'assets/img/catalog-kia_stinger.jpg', redirect_url: '01.html' },
        { type: 'Sports Utility', model: 'Cayenne', brand: 'Porsche', img_url: 'assets/img/catalog-porsche_cayenne.jpg', redirect_url: '02.html' },
        { type: 'Coupe', model: 'GT 4-Door Coupe', brand: 'Mercedes-Benz', img_url: 'assets/img/catalog-mercedes_benz_4door_coupe.jpg', redirect_url: '01.html' }
    ]
}

var x;
for (x in catalog.vehicles) {
    doc = '<div class="catalog_item">' +
        '<img class="catalog_img" src="' +
        catalog.vehicles[x].img_url + '"> <br/>' +
        catalog.vehicles[x].brand + '<br/>' +
        catalog.vehicles[x].model + '<br/>' +
        // '<button id="item-' + x + '" >' + 'Detailed Spec</button>' +
        '<a href="' + catalog.vehicles[x].redirect_url + '" >' + 'Detailed Spec</button>' +
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

/** scripts of the page for the catalog items specification  - temporary */

doc = '<div class="item_spec">' +
    '<img class="spec_img" src="' +
    catalog.vehicles[0].img_url + '"> <br/>' +
    catalog.vehicles[0].brand + '<br/>' +
    catalog.vehicles[0].model + '<br/>' +
    '<a href="index.html">' + 'Return to Catalog</a>'
'</div>';
let el = document.getElementById('detailed_spec');
if (el != null)
    el.innerHTML += doc