//PENDEKLARASIAN VARIABEL
let arrStudent = [
    {nama:"Andrew", age:20, hobi:"Tidur" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Hanendyo", age:24, hobi:"Game" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Dion", age:25, hobi:"Futsal" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Erixon", age:24, hobi:"Tidur" }, //HARUS SAMA NAMANYA!!!!!!!!
    {nama:"Pradipta", age:18, hobi:"Futsal" } //HARUS SAMA NAMANYA!!!!!!!!
];

let arrHobi= ["All","Tidur", "Game", "Futsal", "Musik"];

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
    let hobiExist = arrHobi.includes(hobi);
    if (!hobiExist){
        arrHobi.push(hobi)
    }
    funShow(arrStudent);
}

//SHOW DATA
let funShow = (arraynya) => {
    let listmurid = arraynya.map((val,ind)=>{
        return `<tr><td>${val.nama}</td>
        <td>${val.age}</td>
        <td>${val.hobi}</td>
        <td><input type="button" value="edit"></td>
        <td><input type="button" value="delete"</td></tr>`
    })
    let listHobi = arrHobi.map((val,ind)=>{
        return `<option value="${val}">${val}</option>`
    })
    document.getElementById('ubahdisini').innerHTML=listmurid.join("")
    document.getElementById('searchJob').innerHTML=listHobi
}

funShow(arrStudent)