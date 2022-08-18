"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notepad = void 0;
const Product_1 = require("./Product");
var Type;
(function (Type) {
    Type[Type["BLACK"] = 0] = "BLACK";
    Type[Type["RED"] = 1] = "RED";
})(Type || (Type = {}));
;
class Notepad extends Product_1.Product {
    // title: string;
    constructor(title, price) {
        super(title, 1, Type.RED, price);
        // this.title = title;
        // this.price = price;
    }
    ;
}
exports.Notepad = Notepad;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Ob3RlcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFvQztBQUVwQyxJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCxpQ0FBSyxDQUFBO0lBQ0wsNkJBQUcsQ0FBQTtBQUNQLENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBQUEsQ0FBQztBQUVGLE1BQWEsT0FBUSxTQUFRLGlCQUFhO0lBQ3RDLGlCQUFpQjtJQUdqQixZQUFZLEtBQWEsRUFBRSxLQUFjO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUMxQixDQUFDO0lBQUEsQ0FBQztDQUtMO0FBZEQsMEJBY0M7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vUHJvZHVjdCc7XHJcblxyXG5lbnVtIFR5cGUge1xyXG4gICAgQkxBQ0ssXHJcbiAgICBSRURcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlcGFkIGV4dGVuZHMgUHJvZHVjdDxUeXBlPiB7XHJcbiAgICAvLyB0aXRsZTogc3RyaW5nO1xyXG4gICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBwcmljZT86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlLCAxLCBUeXBlLlJFRCwgcHJpY2UpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgLy8gdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYW5CdXkoKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByaWNlID09PSBcIm51bWJlclwiO1xyXG4gICAgLy8gfTtcclxufTsiXX0=