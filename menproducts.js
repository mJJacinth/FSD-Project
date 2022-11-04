let http=new XMLHttpRequest();
http.open('get', 'men.json',true);
http.send();
http.onload=function(){
    if (this.readyState==4 && this.status==200){
        let men =JSON. parse(this.responseText);
        var output="";
        for(let item of men){
            output+=`
            
             <div class="box" >
             <div class="imgbox">
              <img src="${item.img}" alt="Card image cap">
             </div>
             <div class="card-body" >
               <p class="card-text"><strong>Brand : </strong>${item.Brand}</p>
               <p class="card-text"><strong>price : </strong> ${item.price}</p>
               <p class="card-text"><strong>Description : </strong> ${item.des}</p>
               </div>
               <span><div><button >Add to cart</button></div></span>
               </div>
                                 
      

            `;
        }
        document.querySelector(".productcards").innerHTML=output;

    }
}