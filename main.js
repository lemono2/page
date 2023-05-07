const Cardone = {title:"FLIGHT BOOKING", description:"1 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const Cardtwo = {title:"HOTEL BOOKING", description:"2 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const Cardthree = {title:"TRIP PLANNER", description:"3 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const Cardfour = {title:"CRUISE TOUR", description:"4 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const Cardfive = {title:"FIRE CAMP", description:"5 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const Cardsix = {title:"CORPORATE HOLIDAYS", description:"6 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};

let imgElem
let titleElem
let descElem
let count = 0;


let firstTitle = document.getElementById("title_One").innerHTML = Cardone.title;
let firstDesc = document.getElementById("desc_One").innerHTML = Cardone.description;

let secondTitle = document.getElementById("title_Two").innerHTML = Cardtwo.title;
let secondDesc = document.getElementById("desc_Two").innerHTML = Cardtwo.description;

let thirdTitle = document.getElementById("title_Three").innerHTML = Cardthree.title;
let thirdDesc = document.getElementById("desc_Three").innerHTML = Cardthree.description;

let fourthTitle = document.getElementById("title_Four").innerHTML = Cardfour.title;
let fourthDesc = document.getElementById("desc_Four").innerHTML = Cardfour.description;

let fifthTitle = document.getElementById("title_Five").innerHTML = Cardfive.title;
let fifthDesc = document.getElementById("desc_Five").innerHTML = Cardfive.description;

let sixthTitle = document.getElementById("title_Six").innerHTML = Cardsix.title;
let sixthDesc = document.getElementById("desc_Six").innerHTML = Cardsix.description;


function reply_click(clicked_id){
    let card = document.getElementById(clicked_id);

    imgElem = card.firstElementChild;
    titleElem = card.firstElementChild.nextElementSibling;
    descElem = card.firstElementChild.nextElementSibling.nextElementSibling;

}


function closeModal(){
    let modal = document.getElementById("modalPg");
    modal.style.display = "none";
}

function openModal(){
    let modal = document.getElementById("modalPg");
    modal.style.display = "flex";
}

function reloadContent(){
    let titleSrc = titleElem.innerHTML;
    let descSrc = descElem.innerHTML;

    let modalTitle = document.getElementById("modal-title");
    let modalDesc = document.getElementById("modal-desc")

    let imgSrc = imgElem.src;
    let modalImg = document.getElementById("modal-image");

    modalImg.src = imgSrc;
    modalTitle.innerHTML = titleSrc;
    modalDesc.innerHTML = descSrc;

}



function rotate(){

    count += 1;

    console.log(count);
}

function reverseRotate(){
    count -= 1;

    console.log(count);
}

let title = document.getElementById("h-id");
let image = document.getElementById("first-image");
let firstSrc = document.getElementById("first-image").src;
let secondSrc = document.getElementById("second-image").src;



function insertBg(){
    
    if(count%2 == 0){
        image.src = firstSrc;
        title.innerHTML = "Discover World";
    }else{
        image.src = secondSrc;
        title.innerHTML = "Discover Greece";
    }
}



function selectMail(){
    let mailCheck = document.getElementById("mail").value;  
    console.log(mailCheck);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailCheck))
    {
      return true;
    }else{
       alert("You have entered an invalid email address!");
      return false; 
    }
      
}


let opened = false;
var originalImg = document.getElementById("burgerid").src;
var changeImg = document.getElementById("menu").src;

function showMenu(){
    var menu = document.getElementById("nav_div");
    var burger = document.getElementById("originalimg");

    opened = !opened;

    if(opened == false){
        menu.style.display = "none";
        burger.src = originalImg;
        console.log("no")
    }else{
        menu.style.display = "inline-block";
        burger.src = changeImg;
        console.log("yes")
    }

    window.addEventListener('resize', function(event) {
            menu.style.display = "none";
            opened = false;
            burger.src = originalImg;
    }, true);
   
}