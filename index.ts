// let num = 1;
// let num2 = 3;

// function calculate(num1 : number, num2 :number) {
// 	return num1 + num2;
// }
// console.log(calculate(num, num2));

// function getTotal(numbers: Array<number>) {
// 	return numbers.reduce((acc, initialValue) => {
// 		return acc + initialValue;
// 	}, 0);
// }

// console.log(getTotal([3, 2, 1]));

// const user = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	role: "admin",
// };

// console.log(user);

// Type  alias
// custom type

// type User = {
// 	name: string;
// 	age: number;
// 	address?: string; // optional
// };

// const user: User = {
// 	name: "John",
// 	age: 12,
// };

// function login(userData: User): string | number {
// 	return userData.name + " " + userData.age;
// }
// console.log(login(user));

// type ID = number | string;

// const constomerId: ID = 1312;

// // Interfaces => Here equal to operator is not  required

// interface Transaction {
// 	payerAccountNumber: number;
// 	payeeAccountNumber: number;
// }

// interface BankAccount {
// 	accountNumber: number;
// 	accoutHolders: string;
// 	balance: number;
// 	isActive: boolean;
// 	transaction: Transaction[];
// }

// const transaction1: Transaction = {
// 	payerAccountNumber: 456,
// 	payeeAccountNumber: 123,
// };
// const transaction2: Transaction = {
// 	payerAccountNumber: 456,
// 	payeeAccountNumber: 1000,
// };

// const bankAccount: BankAccount = {
// 	accountNumber: 110,
// 	balance: 1500,
// 	accoutHolders: "Aditya Kumar",
// 	isActive: true,
// 	transaction: [transaction1, transaction2],
// };

// console.log(bankAccount);

// Extends

// interface Book {
// 	name: string;
// 	price: number;
// }

// interface EBook extends Book {
// 	// 	name: string;
// 	// 	price: number;
// 	fileSize: number;
// 	format: string;
// }

// interface AudioBook extends EBook {
// 	// 	name: string;
// 	// 	price: number;
// 	// fileSize: number;
// 	// format: string;
// 	duration: number;
// }

// const book: EBook = {
// 	price: 120,
// 	name: "2 States",
// 	fileSize: 200,
// 	format: "pdf",
// };

// Merge => if there are two interfaces with same name it will be merged

// interface Book {
// 	name: string;
// 	price: number;
// }

// interface Book {
// 	size: number;
// }

// const book: Book = {
// 	name: "2 States",
// 	price: 120,
// 	size: 12,
// };

// Error Duplicate identifier 'Book'.
// type Book = {
// 	name: string;
// 	price: number;
// };

// type Book = {
// 	size: number;
// };

// type SanitizedString = string;

// Unions

// type ID = number | string;
// // Narrowing
// function printId(id: ID) {
// 	if (typeof id === "string") {
// 		console.log(id.toUpperCase());
// 	} else {
// 		console.log(id);
// 	}
// }

// printId("aditya");

// function getFirstThree(x: string | number[]) {
// 	return x.slice(0, 3);
// }

// console.log(getFirstThree([12, 12, 14, 1, 4]));

// Generics

// function logString(args: string) {
// 	console.log(args);
// 	return args;
// }

// function logNumber(args: number) {
// 	console.log(args);
// 	return args;
// }

// function logArray(arg: any[]) {
// 	console.log(arg);
// 	return arg;
// }

// function logAnything<T>(arg: T): T {
// 	console.log(arg);
// 	return arg;
// }

// logString("logged in");
// logNumber(1);
// logArray([1, 2]);
// logAnything("Hello World!");

interface HasAge {
	age: number;
}

// function getOldest(people: HasAge[]): HasAge {
// 	return people.sort((a, b) => b.age - a.age)[0];
// }

// function getOldest<T extends HasAge>(people: T[]): T {
// 	return people.sort((a, b) => b.age - a.age)[0];
// }

// let people: HasAge[] = [{ age: 30 }, { age: 50 }, { age: 10 }];

// interface Player {
// 	name: string;
// 	age: number;
// }

// const players: Player[] = [
// 	{ name: "John", age: 30 },
// 	{ name: "Doe", age: 20 },
// 	{ name: "Aditya", age: 19 },
// 	{ name: "Avinash", age: 40 },
// ];
// // Assertion = >This is not a good practice
// // const person = getOldest(players) as Player;

// // Generics

// const person = getOldest(players);
// person.name;

// interface IPost {
// 	title: string;
// 	id: number;
// 	description: string;
// }

// // const fetchPostData = async (path: string): Promise<IPost[]> => {
// // 	const response = await fetch(`http://example.com${path}`);
// // 	return response.json();
// // };

// interface IUser {
// 	username: string;
// 	userid: number;
// 	age: number;
// }
// // const fetchUserData = async (path: string): Promise<IUser[]> => {
// // 	const response = await fetch(`http://example.com${path}`);
// // 	return response.json();
// // };

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
// 	const response = await fetch(`http://example.com`);

// 	return response.json();
// };

// (async () => {
// 	// const posts = fetchPostData("/posts");
// 	// const user = fetchUserData("/users");
// 	const user = fetchData<IUser[]>("/posts");
// 	user[0];
// 	// posts[0];
//  })();

// interface ICredentials {
// 	username: string;
// 	password: string;
// 	isAdmin?: boolean;
// }

// function login(credentials: ICredentials): boolean {
// 	console.log(credentials);
// 	return true;
// }

// const user = {
// 	username: "Aditya ",
// 	password: "1234567890",
// 	isAdmin: true,
// };

// login(user);

interface IAuth {
	username: string;
	password: string;
	login(username: string, password: string): boolean;
}

const auth: IAuth = {
	username: "Aditya",
	password: "1234",
	login(usename: string, password: string): boolean {
		return true;
	},
};

// tsc init => initialize the typescript file
// creates a tsconfig file
