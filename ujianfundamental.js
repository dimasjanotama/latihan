//PENDEKLARASIAN VARIABEL
let arrStudent = [
    {nama:"Andrew", age:20, hobi:"Tidur" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Hanendyo", age:24, hobi:"Game" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Dion", age:25, hobi:"Futsal" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Erixon", age:24, hobi:"Tidur" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Pradipta", age:18, hobi:"Futsal" } //HARUS SAMA NAMANYA!!!!!!!!
];

let arrHobi= ["Tidur", "Game", "Futsal", "Musik"];

//INPUT DATA
let funInput = () => {
    let nama = document.getElementById("inputName").value; //HARUS SAMA NAMANYA!!!!!!!!
    let age = document.getElementById("inputAge").value; //HARUS SAMA NAMANYA!!!!!!!!
    let hobi = document.getElementById("inputHobi").value; //HARUS SAMA NAMANYA!!!!!!!!
    arrStudent.push({
        nama, ////HARUS SAMA NAMANYA!!!!!!!!
        age,  ////HARUS SAMA NAMANYA!!!!!!!!
        hobi  //HARUS SAMA NAMANYA!!!!!!!!
    });
    funShow(arrStudent);
}

//SHOW DATA
let funShow = (arraynya) => {
    let listmurid = arraynya.map((val,ind)=>{
        return `<tr><td>${val.nama}</td>
        <td>${val.age}</td>
        <td>${val.hobi}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td></tr>`
    })
    document.getElementById('ubahdisini').innerHTML=listmurid.join("")
}

funShow(arrStudent)