const contactForm = document.querySelector('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
   e.preventDefault();

   let formData = {
      name: name.value,
      email: email.value,
      number: number.value,
      subject: subject.value,
      message: message.value
   }

   let xhr = new XMLHttpRequest();
   xhr.open('POST', "/");
   xhr.setRequestHeader('content-type', 'application/json');
   xhr.onload = function() {
      console.log(xhr.responseText);
      if (xhr.responseText == 'success') {
         alert('Email sent');
         name.value = '';
         email.value = '';
         number.value = '';
         subject.value = '';
         message.value = '';
      } else {
         alert('Something went wrong');
      }
   }

   xhr.send(JSON.stringify(formData));
});


