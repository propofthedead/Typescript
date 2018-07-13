class Friends{
    static nxtId: number=1;
    Id: number;
    name:string;
    yearsKnown: number;
    cityState: string;

    constructor(name:string,years:number,cityState: string){
        this.Id=Friends.nxtId++;
        this.name=name;
        this.yearsKnown=years;
        this.cityState=cityState;
    }
    print():void{
        console.log(`My Friend ${this.name} lives in ${this.cityState} and I have know this person for about ${this.yearsKnown} years.(Friend id ${this.Id}`);
    }

}




let friendlist: Friends[]=[
    new Friends('Tyler',5,'melborne,FL'),
    new Friends('Alex',4,'Mason,OH'),
    new Friends('Michelle',4,'Mason,OH'),
    new Friends('Cindy',3,'Mason,OH'),
    new Friends('Tommy',1,'Monroe,OH'),
];


for(let friend of friendlist){
    friend.print();
}
