
 const isPay =  true;
 const mark = 40;
function enroll(){
   console.log("course processing..");
    const promise =  new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isPay)
              resolve();
            else
               reject("paymet fail");
          }, 1000);
    });

    return promise;
}

function progress(){
    const promise =  new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(mark>=80)
              resolve();
            else
               reject("could not get enough mark");
          }, 1000);
    });
   return promise;
}

function getCertificate(){
   
    const promise =  new Promise((resolve)=>{
        setTimeout(() => {
            
             resolve("congo...");
            
          }, 1000);
    });

    return promise;

}

 /* enroll()
     .then(progress)
     .then(getCertificate)
     .then((value)=>{
        console.log(value);
     })
     .catch((err)=>{
       console.log(err);
     })
*/
async function course(){
  try{
    await enroll();
    await progress();
    const msg =  await getCertificate();
    console.log(msg);
    
  }catch(err){
    console.log(err);
  }
}


course();