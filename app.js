const defaultData={storeName:"Rokaya Store",whatsapp:"",instagram:"",tiktok:"",products:[
{name:"عباية أنيقة",price:0,image:"store-image.svg"},
{name:"عباية كلاسيكية",price:0,image:"store-image.svg"}]};
function getData(){try{return JSON.parse(localStorage.getItem("rokayaData"))||defaultData}catch(e){return defaultData}}
function render(){const d=getData();document.title=d.storeName;document.querySelector(".brand").textContent=d.storeName;const box=document.getElementById("products");box.innerHTML=d.products.map((p,i)=>`<article class="card"><img src="${p.image||"store-image.svg"}" alt=""><h3>${p.name}</h3><p>${p.price?Number(p.price).toLocaleString()+"":"اطلب السعر"} ${p.price?"$":""}</p>${d.whatsapp?`<a class="order" href="https://wa.me/${d.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent("أريد طلب: "+p.name)}" target="_blank">اطلب عبر واتساب</a>`:""}</article>`).join("")}
render();
