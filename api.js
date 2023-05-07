fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01')
  .then(response => response.json())
  .then(data => {
    const person = data.data[0]; // i only took whatever data i thought was important(ignored zipcode longidute etc.)
    const id = person.id;
    const firstName = person.firstname;
    const lastName = person.lastname;
    const email = person.email;
    const phoneNumber = person.phone;
    const street = person.address.street;
    const city = person.address.city;
    const country = person.address.country;
   
  
    const newArr = [id, firstName, lastName, email, phoneNumber, street, city, country];

    
    console.log(newArr);


   
    const idInsert = document.getElementById("aidy");
    const fname = document.getElementById("first");;
    const lname = document.getElementById("last");
    const mmail = document.getElementById("mail");
    const pnumber = document.getElementById("phone");
    const strt = document.getElementById("street");
    const cty = document.getElementById("city");
    const cntry = document.getElementById("country");
   
    idInsert.innerHTML = "ID: "+newArr[0];
    fname.innerHTML = "First name: "+newArr[1];
    lname.innerHTML = "Last name: "+newArr[2];
    mmail.innerHTML = "Mail: "+newArr[3];
    pnumber.innerHTML = "Phone number: "+newArr[4];
    strt.innerHTML = "Street: "+newArr[5];
    cty.innerHTML = "City: "+newArr[6];
    cntry.innerHTML = "Country: "+newArr[7];
  })

function reloadPg(){
    location.reload();
}