class Account{
    Id: number;
    description?: string;
    balance: number;


    constructor(id:number,desp?:string){
        this.Id=id;
        this.description=desp;
        this.balance=0;
    }
    getId() : number{
        return this.Id
    }
    deposit(amount: number): void{
        this.balance+= amount;
    }

    withdraw(amount:number): void{
        this.balance-= amount;
    }

    getBalance():number{
        return this.balance;
    }

}

class Savings extends Account{
    intRate: number;

    constructor(id:number,desc?:string, intRate: number=0.01){
        super(id,desc);
        this.intRate=intRate;
    }

    calcInterest(): void{
        let interest= this.balance*this.intRate;
        this.deposit(interest);
    }
}

let acc1= new Account(1);
let sav1= new Savings(2);

console.log(sav1.getBalance());
sav1.deposit(1000);
console.log(sav1.getBalance());
sav1.withdraw(150);
console.log(sav1.getBalance());
sav1.calcInterest();
console.log(sav1.getBalance());