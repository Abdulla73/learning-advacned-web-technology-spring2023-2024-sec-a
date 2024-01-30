function fetchdata(callback){
    setTimeout(() =>{
        const data= "hello world";
        callback(data);

    } ,2000)
}

function process(data){
    console.log("Data recived",data);
}

console.log("start");
fetchdata(process);
console.log("end");

function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success =true;

            if(success){
                const data ="Hello world";
                resolve(data);
            }else{
                const error= "failed to fetch";
                reject(error);
            }
        },2000)
    });
}

console.log("start");

fetchData()
.then(data=>{
    console.log("Data recived ",data);
})
.catch(error=>{
    console.log("Error",error);
})
.finally(()=>{
    console.log("opertation complete");
});

console.log("end")




function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success =true;

            if(success){
                const data ="Hello world";
                resolve(data);
            }else{
                const error= "failed to fetch";
                reject(error);
            }
        },2000)
    });
}

async function fetchDataProcess(){
    try{
        console.log("start");
        const data2=fetchData();
        console.log("Data recived ",data2);

        console.log("end");
    }
    catch(error) {
        console.log("Error",error);
    }
    finally{
        console.log("opertation complete");
    }
}