// fetch 
   const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(response=>{
        if (response.status == 200 ){
             return response.json()
        }else{
              throw new Error ("invalid user id");
        }
        })
    .then(data=>{console.log(data);
    let jsonData = JSON.stringify(data);
console.log(jsonData);
let outPut = document.getElementById("home");
outPut.textContent = jsonData})
.catch((err)=> {
console.log("Error:", err.message)})


// Fect with Requests and Header objects 
// Get request use querystring
// new Request (url)
// new Request (url, options)
// options - Method, headers, body, mode
// methods: GET, POST, PUT, DELETE, options

// new Headers()
// Headers.append(name, value)
// content-Type, content-length, Accept, Accept-language,
// x-Requested-with, user-Agent

// const uri = "https://jsonplaceholder.typicode.com/posts";
// let h = new Headers();
// h.append('Accept', 'application/json');

// let req = new Request(uri, {
//     method: 'POST',
//     headers: h,
//     mode: "cors"
// });

// fetch(req)
// .then((response)=>{
//     if (response.ok){
//         return response.json();
//     }else{
//         throw new Error("Bad hht stuff");
//     }
// })
// .then((data)=>{
//     console.log(data)
//     let p = document.getElementById("home");
//     p.textContent =JSON.stringify (data)
// })
// .catch((err)=>{
//     let p = document.getElementById("home").textContent = err.message
// })


// Sending Ajax from Data to the Server with Fetch.

// const url = "https://jsonplaceholder.typicode.com/posts?userId=1 ";

// let formdata = new FormData();
//  formdata.append("userId", 3);
//  formdata.append("title", 'this is the title');
//  formdata.append("body", 'this is the body');
const data = state

 let options = {
     method:'POST',
     mode:"cors",
     headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(data) // the data you are sending to the server
 }
let req = new Request (url, options);
fetch(req)
.then((response)=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error ('Bad Http')
    }
})
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err.message)
})