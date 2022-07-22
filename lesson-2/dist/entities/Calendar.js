"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const Product_1 = require("./Product");
var Type;
(function (Type) {
    Type[Type["ANIMALS"] = 0] = "ANIMALS";
    Type[Type["MACHINES"] = 1] = "MACHINES";
})(Type || (Type = {}));
;
class Calendar extends Product_1.Product {
    constructor(title, author, price) {
        super(title, 4, Type.ANIMALS, price);
        this.title = title;
        this.author = author;
    }
    ;
}
exports.Calendar = Calendar;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXRpZXMvQ2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9DO0FBRXBDLElBQUssSUFHSjtBQUhELFdBQUssSUFBSTtJQUNMLHFDQUFPLENBQUE7SUFDUCx1Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUhJLElBQUksS0FBSixJQUFJLFFBR1I7QUFBQSxDQUFDO0FBRUYsTUFBYSxRQUFTLFNBQVEsaUJBQWE7SUFJdkMsWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQWM7UUFDckQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztDQUNMO0FBVEQsNEJBU0M7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vUHJvZHVjdCc7XHJcblxyXG5lbnVtIFR5cGUge1xyXG4gICAgQU5JTUFMUyxcclxuICAgIE1BQ0hJTkVTXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBQcm9kdWN0PFR5cGU+IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgcHJpY2U/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih0aXRsZSwgNCwgVHlwZS5BTklNQUxTLCBwcmljZSk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgfTsgICAgXHJcbn07Il19