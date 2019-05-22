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

                             /*****************************************************************/

//2.
class Account{
	constructor(id, name, balance){
		this._id = id;
		this._name = name;
		this._balance = balance;
    }
    get name(){
		return this._name;
	}
	get balance(){
		return this._balance;
	}
	set name(n){
		this._name = n;
	}
	set balance(value){
		this._balance = value;
	}
	credit(amount){
		this.balance += amount; 
		 return `Balance: ${this.balance}`;
	}
	debit(amount){
		if(amount < this.balance){
			 this.balance -= amount;
     return `Balance: ${this.balance}`;
		}
        return `Amount exceeded balance`;
		
	}
	transferTo(anoterAccount = new Account() , amount){
		if(amount > this.balance){
			return "Amount exceeded balance."
		}
        else
        {
			return `anoterAcaunt balance is: ${anoterAccount.balance += amount} , myAccount balance is: ${this.balance -= amount}`;
			
			return this.balance;
		}
	}
	static identifAccounts(accountFirst, accountSecond){
		if(accountFirst.balance === accountSecond.balance && accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name ){
		return "There are same";
		}
        else
        {
		return "There are not same";
		}	
	}
	
	toString(){
		return `Acconut name is: ${this.name}, ID is ${this.id}, balance is: ${this.balance} `;
	}

}
//transferTo
/*let a = new Account('32431','name1',215000)
let g = new Account ('1515','Artur',15000)
g.transferTo(anoterAccount = a,1000)*/

                         /*****************************************************************/

//3. 
  class Person{
	constructor(firstName, lastName, gender, age){
		this._firstName = firstName;
		this._lastName = lastName;
		this._gender = gender;
		this._age = age;
	}
    get firstName(){
        return `${this._firstName}`;
    }
	get lastName(){
		return `${this._lastName}`;
	}
	get gender(){
		return `${this._gender}`;
	}
	get age(){
		return `${this._age}`;
	}
	set firstName(name){
		this._firstName = name;
	}
	set lastName(lastName){
		this._lastName = lastName;
	}
	set gender(gender){
		this._gender = gender;
	}
	set age(age){
		this._age = age;
	}
	toString(){
	return `This person name is: ${this.fistName},last name is: ${this.lastName},gender is:${this.gender},age: ${this.age}`;
	}
	
}
class Student extends Person{
	constructor(firstName,lastName, gender, age,programs, year, fee){
	super(firstName, lastName, gender, age);
		this.programs = programs;
		this. year =  year;
		this.fee = fee;
	}
    get programs(){
        return this._programs;
    }
	get year(){
		return this._year;
	}
	get quantity(){
		return `${this._quantity}`;
	}
	get fee(){
		return this._fee;
	}
	set programs(strArr){
		this._programs = strArr;
	}
	set year(value){
		this._year = value;
	}
	set fee(value){
	this._fee = value;
	}
	
	passExam(program,grade){
if(this.programs.indexOf(program)=== -1){
		return 'Error: Invalid program';
	}
		for(let i = 0; i < this.programs.length; i++){
			if(this.programs[i]==program)
				if(grade >= 50){
				this.programs[i]=[this.programs[i],'pass'];	
				break;			
				}
		}
		let res =this.programs.filter(a => a[1]==='pass' )
		if(res.length === this.programs.length){
		this.year++;
	}
	}
	toString(){
	return `This student name is: ${this.name},lastname is:${this.lastname},age: ${this.age}`;
	}
	
}
class Teacher extends Person{
	constructor( firstName, lastName, gender, age, program, pay){
		super(firstName, lastName, gender, age);
		this._program = program
		this._pay = pay;
	}
	get program(){
		return `${this._program}`;
	}
	get pay(){
		return this._pay;
	}
	set program(programeName){
		this._program = programeName;
	}
	set pay(value){
		this._pay = value;
	}
	toString(){
		return `${this.name} is ${this.program}'s teacher`;
	}
}












