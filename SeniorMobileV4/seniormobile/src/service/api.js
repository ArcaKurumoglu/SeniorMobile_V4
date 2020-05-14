const BASE_URL ="http://www.someapisource.com";

export const api = async (url,method,body=null,headers ={}) => {

 try {
    const endPoint = BASE_URL.concat(url);
    const reqBody= body?JSON.stringify(body):null;

    const fetchParams = {method,headers}


    if((method==="POST"&&method==="PUT")&& !reqBody){
        
        throw new Error("Request body required");
    }

    if(reqBody) {
        fetchParams.headers["Content-type"]="application/json";
        fetchParams.body=fetchParams;
    }

    const fetchPromise = fetch(endPoint,fetchParams);
    const timeOutPromise = new Promise ((resolve,reject)=>{

        setTimeout(()=> {
            reject();

        }, 10000);
        


    });

    const response = Promise.race([fetchPromise,timeOutPromise]);

    return response;

 }
 catch (e)
 {
    throw new Error(e);


 }
}

export const fetchPromise= async(url,method,body,statusCode,token=null,loader=false,promiseReturnType="json")=> {

try {
    const headers={}
    if(token){
        headers["x-auth"]=token;
    }

    const response =await api(url,method,body,headers);
    if(response.status===statusCode){
        const responseBody = await response.json();
        return responseBody;
    }

    throw response;
}catch(error) {

    throw error;
}


}

const respose=await fetchPromise("/user/create","POST",{},200,token,true);