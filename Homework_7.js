class Author  {
    constructor (name,email,gender)
    this._name = name;
    this._email = email;
    this._gender = gender;    
   };
 get name(){
     return this._name;
 };
set name(value){
    this._name = value;
} ;
get email(){
     return this._email;
 };
set email(value){
    this._email= value;
};
get gender(){
     return this._gender;
 };
set gender(value){
    this._gender = value;
};
toString(){
    return This Author name is - ${this.name}, email is - ${this.email}, gender is - ${this.gender}.
};

class Book extends Author{
    constructer(title,name,email,gender, price, quantity)
            super(name,email,gender);
    this._title = title;
    this._author = author;
    this._price = price; 
};
 get title(){
     return this._title;
 };
set title(value){
    this._title = value;
};
 get price(){
     return this._price;
 };
set price(value){
    this._price = value;
};
get quantity(){
     return this._quantity;
 };
set quantity(value){
    this._quantity = value;
};
get autor(){
return this._author;
    
}
set autor(value){
    this._autor = value;
};

getProfit(){
    return BooksProfit is: ${this.price}{this.quantity}
};

toString(){
    This book title is ${this.title}, the autor is: ${this.autor},price is: ${this.price}, quantity is:${this.quantity}
}
















































