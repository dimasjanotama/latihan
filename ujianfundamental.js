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

//SHOW DATA (RENDER LIST)
let funShow = (arraynya) => {
    let listmurid = arraynya.map((val,index)=>{
        return `<tr id="baris${index}"><td>${val.nama}</td>
        <td>${val.age}</td>
        <td>${val.hobi}</td>
        <td><input type="button" value="edit" onclick="funEdit(${index})"></td>
        <td><input type="button" value="delete" onclick="funHapus(${index})"</td></tr>`
    }) //MAP MERETURN BERUPA DATA/SCRIPT (MENGUBAH ARRAY MENJADI TABEL)
    let listHobi = arrHobi.map((val)=>{
        return `<option value="${val}">${val}</option>`
    })
    document.getElementById('ubahdisini').innerHTML=listmurid.join("")
    document.getElementById('searchHobi').innerHTML=listHobi
    
}

//DELETE DATA
let funHapus = (indeks)=>{
    delete arrStudent[indeks];
    funShow(arrStudent)
}
// let funHapus = (indeks) => {
//     let afterHapus = arrStudent.filter((val,index) => {
//         return index != indeks
//     }) 
//     arrStudentBaru=afterHapus
//     funShow(arrStudentBaru)
// }

//EDIT DATA
let funEdit = (ind) => {
    let editArray = arrStudent.filter((val,index)=>{
    return index == ind})
    let hasilEditArray = editArray.map((val,index)=>{
    return `<td><input type="text" id="inputName${index}"></td>
        <td><input type="number"></td>
        <td><input type="text"></td>
        <td><input type="button" value="edit" onclick="funEdit(${index})"></td>
        <td><input type="button" value="delete" onclick="funHapus(${index})"</td>
        <td><input type="button" value="perbarui" onclick="funPerbarui(${index}"</td>`
    
    })
    document.getElementById(`baris${ind}`).innerHTML=hasilEditArray.join("")
}

let funPerbarui = (indek) => {
    let nama = document.getElementById(`inputName${indek}`).value; //HARUS SAMA NAMANYA!!!!!!!!
    let age = document.getElementById(`inputAge${indek}`).value; //HARUS SAMA NAMANYA!!!!!!!!
    let hobi = document.getElementById(`inputHobi${indek}`).value; //HARUS SAMA NAMANYA!!!!!!!!
     
}





//FILTER DATA
//FILTER Nama
let funFilterName = () => {
    let namaFilter = document.getElementById('searchName').value; 
    let hasilFilterName = arrStudent.filter((val)=>{ 
        return val.nama.toLowerCase().includes(namaFilter.toLowerCase())
    }) //FILTERING MERETURN TRUE/FALSE, ELEMEN TRUE AKAN MASUK KE DALAM ARRAY BARU
    //hasilFIlterName merupakan arrStudent yang sudah difilter
    funShow(hasilFilterName) 
}

//FILTER Umur
let funFilterAge = () => {
    let minAge = document.getElementById('searchMinAge').value;
    let maxAge = document.getElementById('searchMaxAge').value;
    let hasilFilterAge = arrStudent.filter((val)=>{
        return val.age>=minAge && val.age<=maxAge
    })
    funShow(hasilFilterAge)
}

//Filter Hobi
let funFilterHobi = () => {
    let selectHobi = document.getElementById('searchHobi').value;    
    let hasilFilterHobi = arrStudent.filter((val)=>{
        if (selectHobi == "All"){
            return val.hobi !== selectHobi
        } else {
        return val.hobi == selectHobi
        }
    })
    funShow(hasilFilterHobi)
}

funShow(arrStudent)