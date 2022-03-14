//tipe data dari balikan / return sebuah fungsi

function getName():string {
    return "Aira Faza Syabira"
}

console.log(getName())

function getAge(): number {
    return 44
}

console.log(getAge())

function printName(): void {
    console.log("Anggra Aditra")
}

//arguments type
function multiply(x:number, y:number): number {
    return x*y
}

let result = multiply(10,10)
console.log(result)

//Function as Type
//Membuat variable 'Add' sebagai type data Function
type Add = (x:number,y:number) => number

//membuat fungsi baru dengan menggunakan type data function 'Add'
const doAdd: Add = (nilai1: number, nilai2: number):number => {
    return nilai1+nilai2
}