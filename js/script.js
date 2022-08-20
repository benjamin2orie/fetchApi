// // comments//


//     function fetchData() {
//         console.log('Login');
//         let url = 'https://jsonplaceholder.typicode.com/comments';

//         const request = new XMLHttpRequest();

//         request.onload = function() {
//         if(this.readyState === 4 && this.status === 200) {
//             console.log(request.responseText);
//             const responseObject = JSON.parse(request.responseText);
//             console.log(responseObject);

//         }
//         }

//         request.open('Get', url, true);
//         request.setRequestHeader('content-Type', 'application/json');
//         request.send();
//     }

//     fetchData();


// post//

function  onButtonClick(e){
   e.preventDefault();
   console.log('button fired!');
   const name = document.getElementById('Name').value;
   const email = document.getElementById('Email').value;
   const phone = document.getElementById('Fame').value;
     console.log(name, email, phone, 'https://jsonplaceholder.typicode.com/comments');
     postFormDate(name, email, phone, 'https://jsonplaceholder.typicode.com/comments');
}

function postFormDate(name, email, phone, url){
const data = {
   name: name,
   email: email,
   phone: phone
}

const request = new XMLHttpRequest();


request.onload = function() {

  if(this.readyState === 4 && this.status === 201){
   console.log(request.responseText);
   const responseObject = JSON.parse(request.responseText);
   console.log(responseObject);
   const info = document.getElementById('info');
   const form = document.getElementById('form');


const name = document.getElementById('NameLabel');
const email = document.getElementById('EmailLabel');
const phone = document.getElementById('PhoneLabel');

name.innerHTML = responseObject.name;
email.innerHTML = responseObject.email;
phone.innerHTML = responseObject.phone;


console.log(name, email, phone);

info.classList.remove('hidden');
form.classList.add('hidden');
  }
}


request.open('POST', url, true);
request.setRequestHeader('content-Type', 'application/json');
const jsonData = JSON.stringify(data);
console.log(jsonData);
request.send(jsonData);

}

function initialize(){
   const btn =  document.getElementById('submit');
   btn.onclick = onButtonClick
}


initialize();