function fetchData(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            if(true){
                resolve("fetched data successfully");
            }else{
                rejected("not fetched");
            }
        },1000)
    })
}
fetchData()
.then((data)=>console.log(data))
.catch((e)=>console.error(e));

// using async await
// const datafetching=async()=>{
// try{
//     const response=await fetchData();
//     console.log(response);
// }catch(e){
//     console.error(e);
// }
// }
// datafetching();