let price1 = document.querySelector('.price1');
let price2 = document.querySelector('.price2');
let price3 = document.querySelector('.price3');
let price4 = document.querySelector('.price4');
let price5 = document.querySelector('.price5');
let price6 = document.querySelector('.price6');
let price7 = document.querySelector('.price7');

let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let bar4 = document.querySelector('.bar4');
let bar5 = document.querySelector('.bar5');
let bar6 = document.querySelector('.bar6');
let bar7 = document.querySelector('.bar7');


fetch("/data.json").then(res => res.json()).then(data => {
    console.log(data);
    let amount1 = JSON.stringify(data[0].amount);
    let amount2 = JSON.stringify(data[1].amount);
    let amount3 = JSON.stringify(data[2].amount);
    let amount4 = JSON.stringify(data[3].amount);
    let amount5 = JSON.stringify(data[4].amount);
    let amount6 = JSON.stringify(data[5].amount);
    let amount7 = JSON.stringify(data[6].amount);
    
    let cost1 = document.createElement("p")
    cost1.className = "cost1";
    cost1.innerHTML = "$"+amount1;
    price1.appendChild(cost1);


    let cost2 = document.createElement("p")
    cost2.className = "cost1";
    cost2.innerHTML = "$"+amount2;
    price2.appendChild(cost2);

    let cost3 = document.createElement("p")
    cost3.className = "cost1";
    cost3.innerHTML = "$"+amount3;
    price3.appendChild(cost3);

    let cost4 = document.createElement("p")
    cost4.className = "cost1";
    cost4.innerHTML = "$"+amount4;
    price4.appendChild(cost4);

    let cost5 = document.createElement("p")
    cost5.className = "cost1";
    cost5.innerHTML = "$"+amount5;
    price5.appendChild(cost5);

    let cost6 = document.createElement("p")
    cost6.className = "cost1";
    cost6.innerHTML = "$"+amount6;
    price6.appendChild(cost6);

    let cost7 = document.createElement("p")
    cost7.className = "cost1";
    cost7.innerHTML = "$"+amount7;
    price7.appendChild(cost7);

    


} );

bar1.addEventListener("mouseover",()=>{
    price1.style.visibility="visible"
})
bar1.addEventListener("mouseout",()=>{
    price1.style.visibility="hidden"
})
bar2.addEventListener("mouseover",()=>{
    price2.style.visibility="visible"
} ) 
bar2.addEventListener("mouseout",()=>{
    price2.style.visibility="hidden"
} )
bar3.addEventListener("mouseover",()=>{     
    price3.style.visibility="visible"
})
bar3.addEventListener("mouseout",()=>{
    price3.style.visibility="hidden"
} )
bar4.addEventListener("mouseover",()=>{
    price4.style.visibility="visible"
} )
bar4.addEventListener("mouseout",()=>{
    price4.style.visibility="hidden"
} ) 
bar5.addEventListener("mouseover",()=>{
    price5.style.visibility="visible"
} ) 
bar5.addEventListener("mouseout",()=>{
    price5.style.visibility="hidden"
} )
bar6.addEventListener("mouseover",()=>{
    price6.style.visibility="visible"
} )
bar6.addEventListener("mouseout",()=>{
    price6.style.visibility="hidden"
} ) 
bar7.addEventListener("mouseover",()=>{
    price7.style.visibility="visible"
} )
bar7.addEventListener("mouseout",()=>{
    price7.style.visibility="hidden"
} )


