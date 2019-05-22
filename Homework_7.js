//1.
class Author  {
    constructor (name,email,gender){
    this._name = name;
    this._email = email;
    this._gender = gender;    }
   
 get name(){
     return this._name;
 }
set name(value){
    this._name = value;
} 
get email(){
     return this._email;
 }
set email(value){
    this._email= value;
}
get gender(){
     return this._gender;
 }
set gender(value){
    this._gender = value;
}
toString(){
    return `This Author name is - ${this.name}, email is - ${this.email}, gender is - ${this.gender}`;
}
}
class Book {
    constructor(title,autor = new Author(),price, quantity){
    this._author = author;
    this._title = title;
    this._price = price; 
    this._quantity = quantity;   
}
    get author(){
        return this.author;
        }
    set author(name){
        return this.name
    }
 get title(){
     return this._title;
 }
set title(value){
    this._title = value;
}
 get price(){
     return this._price;
 }
set price(value){
    this._price = value;
}
get quantity(){
     return this._quantity;
 }
set quantity(value){
    this._quantity = value;
}


getProfit(){
    let sum = this.price*this.quantity;
    return `Books_Profit is: ${sum}`;
}
    
toString(){
    return `This book title is ${this.title}, the autor is: ${this.autor},price is: ${this.price}, quantity is:${this.quantity}`;
}
}
let a = new author("Anun","@gmail.com","male");
let b = new Book("vernagir",autor= a,3000,11);


//2.













