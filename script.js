const text=document.getElementById('text');
const price=document.getElementById('price');
const total=document.getElementById('total');
const listArea=document.getElementById('addhere');
const underthis=document.getElementById('underthis');
const balance=document.getElementById('balance');
const buttonblock=document.getElementById('moneyspot');
const paid=document.getElementById('paid');

const expense=document.getElementById('expense');
const butto=document.getElementById('butto');
const list=document.getElementsByTagName('li')[0];
const array=[];  

butto.disabled= true;

paid.addEventListener('input',()=>{
    if (paid.value.trim() !== '') {
        butto.disabled=false;
    } else {
        butto.disabled=true;
    }
}

);
function addList() {
      /*  let ul=document.createElement('div') */
        let makediv = listArea
        
        let list1 = document.createElement('h5');
        list1.classList.add("productused");
        const texting=list1.textContent=text.value;
/*  ul*/       underthis.appendChild(list1);
    /*      document.body.appendChild(makediv) */
        /*  ul*/

        let btn=document.createElement('button')
        btn.classList.add('buttonused');
       /* let list2 = document.createElement('b') */
        const totalNum=btn.textContent=price.value;
        underthis.appendChild(btn);
      /*   document.body.appendChild(btn)*/
        array.push(totalNum)  /*totalNum*/

            let sum = array.reduce((a,b) => a - b,'');
                console.log(sum)
       const Totality= total.innerHTML=`R${sum* -1}`;
        const paidd=paid.value;
        
        const expenso= expense.innerText=  `${sum* -1}` ;
        const withR= expense.innerText=  `R${sum* -1}` ;
        const life= balance.innerText=  `${paidd-expenso}`;
         balance.innerText=  `R${paidd-expenso}`;

        
      /*  if (paidd.trim() !== '' ) {
            butto.disabled= false;  
          paid.style.border='1px solid red';
        alert('Please Add Money Paid')  
        } 

        else {
            
            paid.style.border='none';  
        } */

        if (texting=== '' ) {
          text.style.border='1px solid red';
        alert('Add Product')  
        } 

        else {
            text.style.border='none';  
        }    

        if (totalNum=== '' ) {
          price.style.border='1px solid red';
        alert('Add Price')  
        } 

        else {
            price.style.border='none';  
        }   
        
        
        if (life < 0) {
            balance.style.backgroundColor='red';
        }

            else if(life == 0){
                balance.style.backgroundColor='Yellow';
            }
            else {
                balance.style.backgroundColor='white';
            
        };
       


        text.value='';
        price.value='';
        
}




function paidMoney() {



}


