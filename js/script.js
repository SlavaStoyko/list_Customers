const alldoc = document.querySelector('html');
const customers_info = document.getElementsByClassName('customersinfo');
const tableinfo = document.querySelector(".table");
const notfound = document.getElementsByClassName('matches');
const dataitems = 7;
var btn = 0;
const navmenu = document.querySelectorAll('.menu li ');
const button = document.getElementsByClassName("navbtn_check");
var create_btn = document.createElement("div");
var spanbtnEl = document.getElementsByClassName("btnP");
let btnFromfather = button[0].children;
const plaseholder_infostryng = document.querySelectorAll(".navbtn");
const dom_navbtn_items = document.getElementsByClassName("navbtn_items");
const nabtnarrow = document.getElementsByClassName('btnwraper');
const arrows = document.querySelectorAll(".arrow");

const body = document.querySelector("#ecran");
const header = document.querySelector(".header");
const title_text = document.querySelector('.title_text');
const title_ver = document.querySelector('.title_ver');
const menu = document.querySelectorAll('.menu_items a');
const menuli = document.querySelectorAll('.menu_items');
const autor = document.querySelector('.autor_name');
let windowWidth = document.documentElement.clientWidth;
for (let index = 0; index < menuli.length; index++) {
    const element = menuli[index];
    
    element.onmouseover = () => {
        element.classList.add("ajd");
        element.classList.add("actionpagination");
       

    }
    element.onmouseout = () => {
        element.classList.remove("ajd");
        element.classList.remove("actionpagination");
    }
    
}
menuli.forEach(Actionbtm => {
    Actionbtm.addEventListener('click', () =>{
        let ch = document.querySelector('.ajs');
        ch.classList.remove('ajs');
        ch.style = "";
        Actionbtm.classList.add("ajs");
        Actionbtm.style.cssText='background-color: #5932EA';
        
    })
        
       
    
})
if(windowWidth <= 440){
    nabtnarrow[0].style.cssText='min-width:220px';
}
if (windowWidth >= 441){
    nabtnarrow[0].style.cssText='min-width:336px';
}
if(windowWidth <= 800){
    title_text.remove();
    title_ver.remove();
    autor.remove();
    for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];menus.remove();}

    header.onclick = () =>{
        header.classList.add("hA");
        body.classList.add("fixed");
        let titleI;
        let menuI;
        let autorI;
        for (let index = 0; index < header.children.length; index++) {titleI = header.children[0]; menuI = header.children[1]; autorI = header.children[2];}
        titleI.append(title_text); titleI.append(title_ver); autorI.append(autor);

        for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];
                for (let indexH = 0; indexH < menuI.children[0].children.length; indexH++) {
                    const listli = menuI.children[0].children[indexH];
                    if (indexH === indexM){
                        listli.append(menus);
                    }  
                }
        }  
    }
    body.onclick = ()=> {
        header.classList.remove("hA");
        body.classList.remove("fixed");
        title_text.remove();
    title_ver.remove();
    autor.remove();
    for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];menus.remove();}
    }


}else if(windowWidth >= 801){
     header.onclick = () =>{body.classList.remove("fixed");}
         body.classList.remove("fixed");
    let titleI;
        let menuI;
        let autorI;
        for (let index = 0; index < header.children.length; index++) {titleI = header.children[0]; menuI = header.children[1]; autorI = header.children[2];}
        titleI.append(title_text); titleI.append(title_ver); autorI.append(autor);

        for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];
                for (let indexH = 0; indexH < menuI.children[0].children.length; indexH++) {
                    const listli = menuI.children[0].children[indexH];
                    if (indexH === indexM){
                        listli.append(menus);
                    }  
                }
        } 
}
window.addEventListener("resize", function (){
    let wW = document.documentElement.clientWidth;
    if(wW <= 440){
        nabtnarrow[0].style.cssText='min-width:220px';
    }
    if (wW >= 441){
        nabtnarrow[0].style.cssText='min-width:336px';
    }
    if(wW <= 800){

        function switchmenu(params) {
            
            if(params == 0){
                title_text.remove();
        title_ver.remove();
        autor.remove();
        for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];menus.remove();}
            }else if(params == 1){
                header.classList.add("hA");
            body.classList.add("fixed");
            let titleI;
            let menuI;
            let autorI;
            for (let index = 0; index < header.children.length; index++) {titleI = header.children[0]; menuI = header.children[1]; autorI = header.children[2];}
            titleI.append(title_text); titleI.append(title_ver); autorI.append(autor);
    
            for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];
                    for (let indexH = 0; indexH < menuI.children[0].children.length; indexH++) {
                        const listli = menuI.children[0].children[indexH];
                        if (indexH === indexM){
                            listli.append(menus);
                        }  
                    }
            }
            }
        }
        
    
        header.onclick = () =>{
            switchmenu (1);
        }
        body.onclick = ()=> {
            header.classList.remove("hA");
            body.classList.remove("fixed");
            title_text.remove();
        title_ver.remove();
        autor.remove();
        for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];menus.remove();}
        switchmenu (0);
        }
    
        
    }else if(wW >= 801){
        header.onclick = () =>{body.classList.remove("fixed");}
         body.classList.remove("fixed");
        
        let titleI;
        let menuI;
        let autorI;
        for (let index = 0; index < header.children.length; index++) {titleI = header.children[0]; menuI = header.children[1]; autorI = header.children[2];}
        titleI.append(title_text); titleI.append(title_ver); autorI.append(autor);

        for (let indexM = 0; indexM < menu.length; indexM++) {const menus = menu[indexM];
                for (let indexH = 0; indexH < menuI.children[0].children.length; indexH++) {
                    const listli = menuI.children[0].children[indexH];
                    if (indexH === indexM){
                        listli.append(menus);
                    }  
                }
        } 
    }

})


const form = document.getElementById('search');
const lible = document.querySelector('#lablelSearch');

form.addEventListener('focus',function(){
    lible.remove();
    form.style.cssText = "background: #d1dffc";
    ;
})
form.addEventListener('blur',function(e){
    form.after(lible)
    form.style.cssText = "";
    e.target.value = "";
})



  function pagloop(params, N) {
    button[0].style.cssText = 'transform:translateX(-'+N+'px); transition: transform 0.2s ease-in 0s';
    let step = N;
   
   let width = Math.ceil(params.offsetWidth);
   let need;
   if(windowWidth <= 440){
    need = (width - (38 * 3))-38;
}
if (windowWidth >= 441){
 need = (width - (38 * 6))-38; 
}
window.addEventListener("resize", function (){
    let wW = document.documentElement.clientWidth;
    if(wW <= 440){
        need = (width - (38 * 3))-38;
    }
    if (wW >= 441){
        need = (width - (38 * 6))-38;
    }
})
        for (let index = 0; index < arrows.length; index++) {
            const element = arrows[index];
            element.addEventListener("click",function(){
                //let L =  e[layerY];
                if(index == 0){
                    step = step-35;
                    if(step < 0){
                        step = need;  
                    }
                   button[0].style.cssText = 'transform:translateX(-'+step+'px); transition: transform 0.2s ease-in 0s';
                }else{
                    step = step+35;
                    if(step > need){
                        step = 0;  
                    }
                    button[0].style.cssText = 'transform:translateX(-'+step+'px); transition: transform 0.2s ease-in 0s';
                } 
            })
        }
        
} 
function infoPanel(btn, allbtn, array) {
    if(dom_navbtn_items.length > 0){
        dom_navbtn_items[0].remove();
    }
    plaseholder_infostryng[0].insertAdjacentHTML("afterbegin",  '<section class="navbtn_items"><p>Showing data '+btn+' to '+allbtn+' of '+array+' entries</p></section>');  
}
function setData(slicearray) {
     let d = document.getElementsByClassName('Rtr');
        for (let index = 0; index < d.length; index++) {
            const element = d[index];
            element.innerHTML="";
        }
    for (let index = 0; index < slicearray.length; index++) {
        const titleCustomers= slicearray[index];
        
      tableinfo.children[0].insertAdjacentHTML("afterend",'<tr class="tr Rtr tbody"><td class="td data_block">'+titleCustomers["Customer Name"]+'</td><td class="td ">'+titleCustomers["Company"]+'</td><td class="td ">'+titleCustomers["Phone Number"]+'</td><td class="td ">'+titleCustomers["Email"]+'</td><td class="td ">'+titleCustomers["Country"]+'</td><td class="td "><span class= "status">'+titleCustomers["Status"]+'</span></td></tr>');
    
       }
       const status = document.querySelectorAll(".status");
       for (let index = 0; index < status.length; index++) {
        const element = status[index];
            if (element.textContent == "Active") {
                element.classList.add("btnA");
            }else if(element.textContent == "Inactive"){
                element.classList.add("btnF");
            }
       }   
}

function howbtnneed(arrayObj, No) {
        let bbttnn;
            btn=No;
            const arraylangth = arrayObj.length;
        const buttonsOnpages = Math.ceil(arraylangth/dataitems);
        while (btn <= buttonsOnpages) {
            button[0].append(create_btn.cloneNode());
          bbttnn = ++btn;  
        }
        
        if(arraylangth>dataitems){
        for (let index = 1; index < btnFromfather.length; index++) {
            const countbtn = btn - 1;
            const btnPEl = btnFromfather[index];
            btnPEl.classList.add("btnP");
            btnFromfather[1].classList.add("actionpagination");
            const Nbtn = btnPEl.innerHTML = index;
            
            btnPEl.addEventListener("click",function(){
                let ch = document.querySelector('.actionpagination');
                ch.classList.remove('actionpagination');
                ch.style = "";
                btnPEl.classList.add("actionpagination");
                btnPEl.style.cssText='background-color: #5932EA;';
        
                const Npagbtn = (Nbtn -1) * dataitems;
                const dataFromjson = Npagbtn + dataitems;
                infoPanel (index, countbtn, arraylangth);
                setData(arrayObj.slice(Npagbtn,dataFromjson));//<= функція для вставки данних на сторінку
                
                
            })
        }
    }
     if((bbttnn - 1)<=dataitems){ 
        arrows[0].remove();
        arrows[1].remove();
    }else{nabtnarrow[0].prepend(arrows[0]);
        nabtnarrow[0].append(arrows[1]);
    }
        
    pagloop(button[0], 0);
       return bbttnn;   
}

fetch('https://slavastoyko.github.io/list_Customers/JSONdata/list_Customers.json')
.then((response) =>{return response.json()}).then((data) => {JSONfile(data);});
function JSONfile(data) {
    for(let key in data){
         var arraysearch =[]; // масив в який вносяться данні пошку
        const arrayCustomers = data[key]; // <= маств  з клієнтами
        const arrayCustomerslong = arrayCustomers.length;
           let countbtn = howbtnneed(arrayCustomers, 0);
            
        form.addEventListener("keyup", function (e){// подія пошуку
            if(e.keyCode === 13){
                
               
               button[0].innerHTML="";
               if(arraysearch.length >0){
               arraysearch = [];
               }

                
            var input = e.target.value;
            
                for (let index = 0; index < arrayCustomers.length; index++) {
                    const titleCustomers= arrayCustomers[index];
                    if(input == titleCustomers["Customer Name"] && index > 0  || input == titleCustomers["Company"] || input == titleCustomers["Phone Number"] || input == titleCustomers["Email"] || input == titleCustomers["Country"] || input == titleCustomers["Status"] ){
                        
                        arraysearch.push(titleCustomers);
                        
                    }
                }
                let countbtn = howbtnneed(arraysearch, 0);
                if(arraysearch.length > dataitems){
                    customers_info[0].children[0].remove(notfound);
                    customers_info[0].append(tableinfo);
                    
                    setData(arraysearch.slice(0,dataitems));
                    infoPanel (1, countbtn-1,arraysearch.length);
                }
                if(arraysearch.length < dataitems){
                    customers_info[0].children[0].remove(notfound);
                    customers_info[0].append(tableinfo);
                    setData(arraysearch);
                    if(dom_navbtn_items.length > 0){
                        dom_navbtn_items[0].outerHTML = "";
                    }
                    infoPanel (1, countbtn-1,arraysearch.length);
                }
                if(arraysearch.length == 0){
                    customers_info[0].children[0].remove(tableinfo);
                    customers_info[0].insertAdjacentHTML('afterbegin', '<div class="matches">NO MATCHES FOUNDS</div>');
                    dom_navbtn_items[0].outerHTML = "";
                    
                }
            }
        })
        setData(arrayCustomers.slice(0,dataitems)); //<= функція для вставки данних на сторінку
        infoPanel (1, countbtn-1, arrayCustomerslong);
        for (let index = 0; index < navmenu.length; index++) {
            const element = navmenu[index];
                element.addEventListener('click',function(){
                    
                    let valuef = element.lastElementChild.innerHTML;
                    element.lastElementChild.setAttribute('href', "#"+valuef);
                    button[0].innerHTML="";

                    if(valuef==valuef&&index==2){
                        
                        customers_info[0].children[0].remove(notfound);
                        customers_info[0].append(tableinfo);
                        
                        setData(arrayCustomers.slice(0,dataitems)); //<= функція для вставки данних на сторінку
                        let countbtn = howbtnneed(arrayCustomers, 0);
                        infoPanel (1, countbtn-1, arrayCustomerslong); 
                    }else{
                        
                        customers_info[0].children[0].remove(tableinfo);
                        customers_info[0].insertAdjacentHTML('afterbegin', '<div class="matches">NO DATA FOUND</div>');
                        arrows[0].remove();
                        arrows[1].remove();
                        dom_navbtn_items[0].outerHTML = "";
                    }
                }) 
        }  
    }
}
