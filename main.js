let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');



// total

function getTotal(){

    if(price.value != ''){
        let result = +price.value + +taxes.value + +ads.value - discount.value;
        total.innerHTML=result


        if(taxes.value != ''){


            if(ads.value != ''){
                total.style.backgroundColor = 'green'
            }
            else{
                total.style.background = '#a00d02'
            }
        }
    }
    else{
        total.innerHTML = ''
    }
    
        
    }
    


// create product

let dataPro ;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro = [];
}

submit.onclick = function(){

    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    dataPro.push(newpro)
// save localstorage 
    localStorage.setItem('product',JSON.stringify(dataPro))
    clearinputs()

}












// clear inputs
function clearinputs(){
    title.value = '';
    price.value='';
    taxes.value ='';
    ads.value ='';
    discount.value ='';
    count.value='';
    category.value='';
    total.innerHTML =''


}











// read
// count
// delete
// update
// search
// clean data



