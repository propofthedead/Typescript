class Employee {
    id: number;
    name: string;
    isManager: boolean;

    constructor(id:number,name:string,manager:boolean){
        this.id=id;
        this.name=name;
        this.isManager=manager;
    }

    print(): void{
        console.log(this.name);
    }
}

let arr: Employee[] = [
    new Employee(1,'greg',false),
    new Employee(2,`Lisa`,true)
];
for(let empl of arr){
    empl.print();
}
