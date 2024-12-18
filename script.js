// console.log("Hello World");
// console.log("Wel Come");
// console.log("App Run");

// setTimeout(()=>console.log("Wait 5 Second")
// ,5000)

// setTimeout(()=>console.log("Wait 2 Second")
// ,2000)

// console.log("last Out Put");

// console.log("Oder Start");

// function getfood(callback) {
//   setTimeout(() => {
//     const food = "Biryani";
//     callback(food);
//   }, 3000);
// }

// function foodready(food) {
//   console.log(`food is ready ${food}`);
// }

// getfood(foodready);
// console.log("Waiting Boys");

// setTimeout(() => {
//   console.log("10");
//   setTimeout(() => {
//     console.log("9");
//     setTimeout(() => {
//       console.log("8");
//       setTimeout(() => {
//         console.log("7");
//         setTimeout(() => {
//           console.log("6");
//           setTimeout(() => {
//             console.log("5");
//             setTimeout(() => {
//               console.log("4");
//               setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                   console.log("2");
//                   setTimeout(() => {
//                     console.log("Let's Go");
//                     setTimeout(() => {
//                       console.log("Hi Ruban");
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

setTimeout(()=>{
   document.getElementById("count").innerHTML="10"
   setTimeout(()=>{
      document.getElementById("count").innerHTML="9"
      setTimeout(()=>{
         document.getElementById("count").innerHTML="8"
         setTimeout(()=>{
            document.getElementById("count").innerHTML="7"
            setTimeout(()=>{
               document.getElementById("count").innerHTML="6"
               setTimeout(()=>{
                  document.getElementById("count").innerHTML="5"
                  setTimeout(()=>{
                     document.getElementById("count").innerHTML="4"
                     setTimeout(()=>{
                        document.getElementById("count").innerHTML="3"
                        setTimeout(()=>{
                           document.getElementById("count").innerHTML="2"
                           setTimeout(()=>{
                              document.getElementById("count").innerHTML="Lets Go"
                        
                              setTimeout(()=>{
                                 document.getElementById("count").innerHTML="Well Come Ruban"
                           
                              },1000)
                           },1000)
                        },1000)
                     },1000)
                  },1000)
               },1000)
            },1000)
         },1000)
      },1000)
   },1000)
},1000)