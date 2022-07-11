"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    ;
    canBuy() {
        return typeof this.price === "number";
    }
    ;
}
exports.Book = Book;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9Cb29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsSUFBSTtJQUtiLFlBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFjO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTTtRQUNGLE9BQU8sT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBZEQsb0JBY0M7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJvb2sge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGF1dGhvcjogc3RyaW5nO1xyXG4gICAgcHJpY2U/OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHByaWNlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIH07XHJcblxyXG4gICAgY2FuQnV5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcmljZSA9PT0gXCJudW1iZXJcIjtcclxuICAgIH07XHJcbn07Il19