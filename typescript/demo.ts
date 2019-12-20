let a: number;
let b:number;

let ar: number[]=[1,2,3,4];
let ar1: Array<number>=[5,6,7,8];
console.log(ar1);
interface person {
    name:string;
    age: number;
    run(): string;
}
const son:person ={
    name : "Son",
    age : 25,
    run(): string {
        return 15+ " Km2"
    }
};

class thMan implements person{
     name:string;
     age:number;
    constructor(name:string,age:number){
        this.name= name;
        this.age= age;
    }
    run(): string {
        return 20 +"km2";
    }
    toString():string{
        return "name: "+ this.name + " age: "+ this.age+ " speed: " + this.run();
    }

}
let myname= new thMan("tung",27);

console.log(myname.toString());
console.log(son.name + son.age+  son.run());
