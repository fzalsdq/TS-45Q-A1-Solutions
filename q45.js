// Objects
var car = function cars(manufacturer, model, color) {
    var car_object = {
        manufacturer: manufacturer,
        model: model,
        color: color
    };
    if (color == undefined) {
        console.log("".concat(manufacturer, ",  ").concat(model));
    }
    else {
        console.log("".concat(manufacturer, ",  ").concat(model, ", ").concat(color));
    }
};
car("Honda", "BR-V");
car("Suzuki", "Swift", "Silver");
car("Honda", "Civic");
