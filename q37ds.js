function make_shirt(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.size, size = _c === void 0 ? "Large" : _c, _d = _b.msg, msg = _d === void 0 ? "I love TypeScript" : _d;
    if (size == "Large" || size == "Medium") {
        console.log(size, msg);
    }
    else {
        console.log(size, "I love Javascript");
    }
}
make_shirt();
make_shirt({ size: "Large" });
make_shirt({ size: "Small" });
make_shirt({ size: "Medium" });
make_shirt({ size: "XL" });
