const searchfield = document.querySelector('#search');
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 
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
               <div class="card-body">
                 <p class="card-text"><strong>Brand : </strong>${args[i].Brand}</p>
                 <p class="card-text"><strong>Price : </strong> ${args[i].price}</p>
                 <p class="card-text"><strong>Price : </strong> ${args[i].des}</p>
                <span><div><button id= "${args[i].id}" onclick="addproductstocart(this)">Add to cart</button></div></span>
               </div>
        </div>`
    }
}



searchfield.addEventListener('input',(e)=>{
    searchBar(searchfield.value);
});
 var count=0;
 var summ=0
async function addproductstocart(thz){
    console.log("id",thz.id);
    var i_d=thz.id
    count=count+1
    let countt = document.getElementById('total-items-in-cart');
    countt.innerHTML=`<div> ${count}</div>`;

    const search = await fetch('./men.json');
    const data = await search.json();
    var data_filter=data.find(element => element.id ==i_d)
    // console.log(data_filter);
    // console.log(data_filter.id,data_filter.Brand,data_filter.img,data_filter.price);
    // return data_filter.id,data_filter.img,data_filter.Brand,data_filter.price
    summ=summ+data_filter.price
    var ccard = document.getElementById('cardpp');
    var items= document.createElement("tr");
        items.innerHTML+=`
        
              <td><img src= "${data_filter.img}" alt="Girl in a jacket" width="100" height="100"></td>
              <td style="width:60%">${data_filter.Brand}</td>
              <td style="width:60%">${data_filter.price}</td>`;
            ccard.appendChild(items);
    let toatalamount = document.getElementById('subtotal');
    toatalamount.innerHTML=`
    <div>Total Amount- ${summ} $</div>`;
}



