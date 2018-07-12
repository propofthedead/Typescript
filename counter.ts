let nbr : number=0;

function display(num:number): void{
    let inpCrlt: HTMLElement= document.getElementById("nbr");
    inpCrlt.value=nbr;
}

function change(amt:number): void{
    nbr+= amt;
    display(nbr)
}

function loaded():void {
    display(nbr)
}