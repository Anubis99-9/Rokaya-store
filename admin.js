const fallback={storeName:"Rokaya Store",whatsapp:"",instagram:"",tiktok:"",products:[]};
function data(){try{return JSON.parse(localStorage.getItem("rokayaData"))||fallback}catch(e){return fallback}}
let d=data();
storeName.value=d.storeName||"";whatsapp.value=d.whatsapp||"";instagram.value=d.instagram||"";tiktok.value=d.tiktok||"";
save.onclick=()=>{d.storeName=storeName.value.trim()||"Rokaya Store";d.whatsapp=whatsapp.value.trim();d.instagram=instagram.value.trim();d.tiktok=tiktok.value.trim();localStorage.setItem("rokayaData",JSON.stringify(d));status.textContent="تم حفظ الإعدادات";};
add.onclick=()=>{const name=pname.value.trim();if(!name)return;d.products=d.products||[];d.products.push({name,price:price.value,image:image.value.trim()||"store-image.svg"});localStorage.setItem("rokayaData",JSON.stringify(d));pname.value="";price.value="";image.value="";status.textContent="تمت إضافة المنتج";};
