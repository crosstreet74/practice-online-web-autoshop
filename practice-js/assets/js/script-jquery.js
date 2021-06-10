let catalog = {
    'vehicles': [{ type: 'Sports Sedan', model: 'Stinger', brand: 'Kia', img_url: 'assets/img/catalog-kia_stinger.jpg', price: '38.5 million ₩~', mileage: '9-11 km/l' },
    { type: 'Sports Utility', model: 'Cayenne', brand: 'Porsche', img_url: 'assets/img/catalog-porsche_cayenne.jpg', price: '112.2 million ₩~', mileage: '6-7 km/l' },
    { type: 'Coupe', model: 'GT 4-Door Coupe', brand: 'Mercedes-Benz', img_url: 'assets/img/catalog-mercedes_benz_4door_coupe.jpg', price: '100.4 million ₩~', mileage: '8-9 km/l' },
    { type: 'Crossover SUV', model: 'Renegade Longitude', brand: 'Jeep', img_url: 'assets/img/catalog-jeep-renegade.jpg', price: '36.1 million ₩~', mileage: '9-10 km/l' },
    { type: 'Luxury SUV', model: 'Range Rover', brand: 'Land Rover', img_url: 'assets/img/catalog-land_rover-range_rover.jpg', price: '189 million ₩~', mileage: '9-10 km/l' }
    ]
}

/*
 *  JQuery 사용
 */

let $el = $('#catalog-container');

var x;
for (x in catalog.vehicles) {
    if ($el != null) {
        let item = catalog.vehicles[x];
        doc = '<div class="card-container col-xs-12 col-sm-6 col-lg-4 col-xl-3 p-0 my-3">' +
            '<div class="card" style="height: 100%;">' +
            '<img src="' + item.img_url + '" ' + 'class="card-img-top" alt="..." style="width:100%; height:220px; object-fit:cover;">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + item.model + '</h5>' +
            '<p>' + item.brand + '</p>' +
            '<a href="#" class="btn btn-primary" id="item-' + x + '"' +
            'onClick="setModalContent(this)"' +
            'class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#catalog-modal">See More Details</a>'
        '</div>' +
            '</div>' +
            '</div>'
        $el.append(doc)
    }
}

// 클릭된 버튼에 따라 모달 내용 바꾸는 함수 
function setModalContent(e) {
    // 클릭된 <a> 요소의 객체를 매개변수로 전달받음

    // <a> 요소의 id를 추출함
    let itemID = e.id.split('-')[1]

    //  json 배열에서 id와 같은 index에 위치한 데이터를 가져옴
    let item = catalog.vehicles[itemID]

    // 가져온 데이터를 모달에 추가함    
    $('#catalog-modal-label').html(
        item.brand + ' ' + item.model)
    $('#catalog-modal-body').html(
        '<img src="' + item.img_url + '" style="width:100% ">')

}
