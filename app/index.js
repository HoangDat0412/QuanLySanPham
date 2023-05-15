const yargs = require("yargs");

const {readAllSanPham,readDetailSanPham,createTask,updateSanPham,deleteSanPham,nhapSanPham} = require("./model/task")

// read all sản phẩm cú pháp : node app/index.js read-all
yargs.command({
    command:"read-all",
    handler:()=>{
        let listSanPham = readAllSanPham();
        console.log("List sản phẩm: " , listSanPham);
    }
})
// read detail sản phẩm cú pháp : node app/index.js read-detail --id="1"
yargs.command({
    command:"read-detail",
    builder:{
        id:{
            type:"string"
        }
    },
    handler:(args)=>{
        let sp=readDetailSanPham(args.id)
        if(sp){
            console.log("sản phẩm: " , sp);
        }else{
            console.log("not found");
        }
       
    }
})
// create sản phẩm cú pháp : node app/index.js create --name="haha" --price=12 --amount=1 --description="sự vui vẻ"

yargs.command({
    command:"create",
    builder:{
        name:{
            type:"string"
        },
        price:{
            type:"number"
        },
        amount:{
            type:"number"
        },
        description:{
            type:"string"
        }
    },
    handler: (args)=>{
        let {name,price,amount,description} = args
        let newsp = createTask(name,price,amount,description)
        
        console.log("new Sản Phẩm : ",newsp);
    }
})

// update sản phẩm :  node app/index.js update --id="1" --name="kinh doanh" --price=400 --amount=1 --description="sự vui vẻ"
yargs.command({
    command:"update",
    builder:{
        id:{
            type:"string"
        },
        name:{
            type:"string"
        },
        price:{
            type:"number"
        },
        amount:{
            type:"number"
        },
        description:{
            type:"string"
        }
    },
    handler: (args)=>{
        let {id,name,price,amount,description} = args
        let newsp = updateSanPham(id,name,price,amount,description)
        if(newsp){
            console.log("Sản phẩm update thành công: ",newsp);
        }else{
            console.log("not found");
        }
        
    }
})

//delete sản phẩm : node app/index.js delete --id="2"
yargs.command({
    command:"delete",
    builder:{
        id:{
            type:"string"
        }
    },
    handler: (args)=>{
        let {id} = args
        let deleteSp = deleteSanPham(id)
        if(deleteSp){
            console.log("Đã xóa sản phẩm: ",deleteSp);
        }else{
            console.log("not found");
        }
        
    }
})

// chức năng nhập hàng : node app/index.js nhaphang --id="3"
yargs.command({
    command:"nhaphang",
    builder:{
        id:{
            type:"string"
        }
    },
    handler: (args)=>{
        let {id} = args
        let sp = nhapSanPham(id)
        if(sp){
            console.log("Đã update số lượng thành công: ",sp);
        }else{
            console.log("not found");
        }
        
    }
})


yargs.parse();