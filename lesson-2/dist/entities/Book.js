"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Product_1 = require("./Product");
var Type;
(function (Type) {
    Type[Type["NEW"] = 0] = "NEW";
    Type[Type["OLD"] = 1] = "OLD";
})(Type || (Type = {}));
;
class Book extends Product_1.Product {
    constructor(title, author, genre, price) {
        super(title, 1, Type.OLD, price);
        // this.title = title;
        this.author = author;
        this.genre = genre;
        // this.price = price;
    }
    ;
}
exports.Book = Book;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Cb29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFvQztBQUdwQyxJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCw2QkFBRyxDQUFBO0lBQ0gsNkJBQUcsQ0FBQTtBQUNQLENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBQUEsQ0FBQztBQUVGLE1BQWEsSUFBSyxTQUFRLGlCQUFhO0lBS25DLFlBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBYztRQUNuRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWpDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixzQkFBc0I7SUFDMUIsQ0FBQztJQUFBLENBQUM7Q0FNTDtBQWxCRCxvQkFrQkM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IEdlbnJlIH0gZnJvbSAnLi4vdHlwZXMvR2VucmUnO1xyXG5cclxuZW51bSBUeXBlIHtcclxuICAgIE5FVyxcclxuICAgIE9MRFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2sgZXh0ZW5kcyBQcm9kdWN0PFR5cGU+IHtcclxuICAgIC8vIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIGdlbnJlOiBHZW5yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgZ2VucmU6IEdlbnJlLCBwcmljZT86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlLCAxLCBUeXBlLk9MRCwgcHJpY2UpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICAgICAgdGhpcy5nZW5yZSA9IGdlbnJlO1xyXG4gICAgICAgIC8vIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FuQnV5KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcmljZSA9PT0gXCJudW1iZXJcIjtcclxuICAgIC8vIH07XHJcbiAgICBcclxufTsiXX0=