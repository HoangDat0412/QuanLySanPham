const fs = require("fs");

// read all sản phẩm
const readAllSanPham = ()=>{
    let buffer = fs.readFileSync("SanPham.json");
    let listSanPham = JSON.parse(buffer.toString())
    return listSanPham
}

// read detail 
const readDetailSanPham = (id)=>{
    let listSanPham = readAllSanPham();
    let index = listSanPham.findIndex(sp => sp.id === id)
    return listSanPham[index]
    
}

// create task 
const createTask = (name,price,amount,description)=>{
    let listSanPham = readAllSanPham();
    let newSp = {
        id: Math.random().toString(),
        name,
        price,
        amount,
        description
    };
    listSanPham = [...listSanPham,newSp];
    fs.writeFileSync("SanPham.json",JSON.stringify(listSanPham))
    return newSp
}

//update task 
const updateSanPham = (id,name,price,amount,description)=>{
    let listSanPham = readAllSanPham();
    let index = listSanPham.findIndex(sp => sp.id === id)
    listSanPham[index] ={
        ...listSanPham[index],name,price,amount,description
    }
    fs.writeFileSync("SanPham.json",JSON.stringify(listSanPham))
    return listSanPham[index]
}

// delete sản phẩm 
const deleteSanPham = (id)=>{
    let listSanPham = readAllSanPham();
    let index = listSanPham.findIndex(sp => sp.id === id)
    let deleteSp = listSanPham[index]
    listSanPham.splice(index,1)
    fs.writeFileSync("SanPham.json",JSON.stringify(listSanPham))
    return deleteSp

}

const nhapSanPham = (id)=>{
    let listSanPham = readAllSanPham();
    let index = listSanPham.findIndex(sp => sp.id === id)
    if(listSanPham[index].amount < 50){
        listSanPham[index].amount = 50;
    }
    fs.writeFileSync("SanPham.json",JSON.stringify(listSanPham))
    return listSanPham[index]
}
module.exports = {
    readAllSanPham,
    readDetailSanPham,
    createTask,
    updateSanPham,
    deleteSanPham,
    nhapSanPham
}