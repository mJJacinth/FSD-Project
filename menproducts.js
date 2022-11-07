const searchfield = document.querySelector('#search');
 
//feteches data from the json file.... and returns a promise using .then to read the promise
async function fetchdata(){
    const search = await fetch('./men.json');
    const data = await search.json();
    console.log("dd",data)
    return data;
}

//displaying the contents to the dispaly
function display(){
    fetchdata().then(response=>{
   displayData(response)
         })
    }


async function filtering(searchvalue){
    //when the searchfeild is empty we render all the cards from json file
    if(searchvalue.length === 0){
        display();
    }
};




async function searchBar(searchvalue){
    //when the searchfeild is empty we render all the cards from json file
    if(searchvalue.length === 0){
       display();
   }
   const search = await fetch('./men.json');
   const data = await search.json();
  let matches = data.filter(matchdata=>{
       const regx= new RegExp(`${searchvalue}`,'gi');
       console.log(matchdata.Tag.match(regx),"xxxxxxxxx")
       return  matchdata.Tag.match(regx);
   })
   displayData(matches);
}


   
function displayData(args){
    console.log("xxx",args)
    let card = document.getElementById('product');
    card.innerHTML=''    
    for(let i=0; i<args.length; i++){  
        card.innerHTML+=`
        <div class="box" >
               <div class="imgbox">
                <img src="${args[i].img}" alt="Card image cap">
               </div>
               <div class="card-body" >
                 <p class="card-text"><strong>Brand : </strong>${args[i].Brand}</p>
                 <p class="card-text"><strong>Price : </strong> ${args[i].price}</p>
                 <p class="card-text"><strong>Description : </strong> ${args[i].des}</p>
                 <div class="add to cart" onclick="addToCart(${product.id})"><button  style="text-align:center;" onclick="coursecontent('${args[i].des}')">Add cart</button> </div>      
                            
               </div>
        </div>`
    }
}
function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
      changeNumberOfUnits("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
  
      cart.push({
        ...item,
        numberOfUnits: 1,
      });
    }
  
    updateCart();
  }
  
  // update cart
  


searchfield.addEventListener('input',(e)=>{
    searchBar(searchfield.value);
});


