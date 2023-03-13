
let items = document.getElementById('items');
 myForm = document.getElementById('myForm');;

myForm.addEventListener('submit', function(event){


    event.preventDefault();
    
   
    const price = document.getElementById('price').value;
    const product = document.getElementById('product').value;
    
    const productDetails =
    {
        price: price,
        product: product,
    };

    axios.post("https://crudcrud.com/api/f4a2defbf0544ec7a93327862602e70c/appointmentData", productDetails)
    .then((res)=>{
      // console.log(res);
      showNewUserPost(res.data);
    }
    )

    var old = Number(document.getElementById("total-price").innerHTML);
    var new_price = Number(price);
    console.log(typeof(new_price));
    console.log(old);
    var total = old + new_price;


    document.getElementById("total-price").innerHTML =total;


    

})

function showNewUserPost(res){
  
  
    const itemsList = document.getElementById('items');
    
    // Create a single list item for all the user details
    const detailsItem = document.createElement('li');
    detailsItem.textContent = ` ${res.price} - ${res.product}`;
    detailsItem.id = res._id;
  ;
    const deleteItem = document.createElement('input');
    deleteItem.type = "button";
    deleteItem.value = "Delete Product";
    detailsItem.id = res._id;
    detailsItem.price = res.price;

   
  
    deleteItem.onclick =(e) => {
  // console.log(e.target)
  var old = Number(document.getElementById("total-price").innerHTML);
  var new_price = Number(detailsItem.price);
 
  var total = old - new_price;
  document.getElementById("total-price").innerHTML =total;
       let user_id=detailsItem.id;
       
          axios.delete(`https://crudcrud.com/api/f4a2defbf0544ec7a93327862602e70c/appointmentData/${user_id}`)
          .then((res)=> {
              removeUserFromList(user_id)
          })
          .catch(()=>
          console.log(err))
        e
        
    }
  
  
    detailsItem.appendChild(deleteItem);

  
    itemsList.appendChild(detailsItem);
  } 

  
  function removeUserFromList(userId){

    console.log(userId)

    const parentNode = document.getElementById("items");
    const childDelete = document.getElementById(userId);
    console.log(parentNode);
    console.log(childDelete);


    if(childDelete){
        parentNode.removeChild(childDelete);
    }
  }
  