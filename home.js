// async function searchbar(searchvalue){
//   if (searchvalue.length===0){
//     display();
//   }
//   const search =await fetch('./men.json');
//   const data = await search.json();
//   let matches=data.filter(matchdata =>{
//     const regx=new RegExp(`${searchvalue}`,'gi');
//     return matchdata.search.match(regx);
//   })
//   displaydData(matches);
// }
// search.addEventListener('input',()=>{
//     searchbar(search.value);
//   });
//  function display(){
//   fetchdata().then (response=>{
//     displayData(response)
//   })
//  }
//  function displayData(args){
//   let card = document.getElementById('product');
//   card.innerHTML=''    
//   for(let i=0; i<args.length; i++){        
//       card.innerHTML+=`
//       <div class="box" >
//              <div class="imgbox">
//               <img src="${item.img}" alt="Card image cap">
//              </div>
//              <div class="card-body" >
//                <p class="card-text"><strong>Brand : </strong>${item.Brand}</p>
//                <p class="card-text"><strong>price : </strong> ${item.price}</p>
//                <p class="card-text"><strong>Description : </strong> ${item.des}</p>
//                </div>
//                <span><div><button >Add to cart</button></div></span>
//                </div>
//                `;
//   }
// }