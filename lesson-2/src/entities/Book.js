var Book = /** @class */ (function () {
    function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    ;
    Book.prototype.canBuy = function () {
        return typeof this.price === "number";
    };
    ;
    return Book;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFLSSxjQUFZLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBYztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQUEsQ0FBQztJQUVGLHFCQUFNLEdBQU47UUFDSSxPQUFPLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUFBLENBQUM7SUFDTixXQUFDO0FBQUQsQ0FBQyxBQWRELElBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb29rIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIHByaWNlPzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBwcmljZT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbkJ1eSgpOiBCb29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJpY2UgPT09IFwibnVtYmVyXCI7XHJcbiAgICB9O1xyXG59Il19