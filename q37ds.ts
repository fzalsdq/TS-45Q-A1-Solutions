function make_shirt({ size = "Large", msg = "I love TypeScript" }: { size?: string; msg?: string; } = {}){
if (size=="Large" || size=="Medium"){
console.log( size, msg);
}
else {
    console.log(size,"I love Javascript");
}

}
make_shirt();
make_shirt({ size: "Large" });
make_shirt({ size: "Small" });
make_shirt({ size: "Medium" });
make_shirt({ size: "XL" });

