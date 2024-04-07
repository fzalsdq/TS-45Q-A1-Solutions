// Objects
let car= function cars(manufacturer: string, model: string, color?:string ){
let car_object={
    manufacturer: manufacturer,   
    model       : model,
    color       : color
}
if (color==undefined){
console.log(`${manufacturer},  ${model}`);
}
else {
console.log(`${manufacturer},  ${model}, ${color}`);
}

}

car("Honda", "BR-V");
car("Suzuki","Swift", "Silver");
car("Honda","Civic");
