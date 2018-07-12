class Student{
    Id:number;
    Firstname:string;
    Lastname:string;
    SAT: number;
    Active: boolean;

    constructor(id:number,first:string,last:string,sat:number,active: boolean ){
        this.Id=id;
        this.Firstname=first;
        this.Lastname=last;
        this.SAT=sat;
        this.Active=active;
    }

    log(): void{
        let msg: string =`${this.Id}, ${this.Firstname} ${this.Lastname}, ${this.Active}, ${this.SAT}`;
        console.log(msg);
    }
}
let students: Student[]=[];
let s1: Student=new Student(1,"John","doe",1200,true);
let s2: Student=new Student(2,"Foster","Stulen",1000,false);
students.push(s1);
students.push(s2);
for(let student of students){
    student.log();
}
