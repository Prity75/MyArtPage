$("#pop").on("click", function() {
    $(this).modal();
 });

  function ShowAndHide() {
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// // Get the form element
// const form = document.getElementById('contact-form');

// // Add an event listener for when the form is submitted
// form.addEventListener('submit', (event) => {
//   // Prevent the form from submitting normally
//   event.preventDefault();
  
//   // Show the success message
//   const message = document.createElement('div');
//   message.className = 'alert alert-success';
//   message.innerHTML = 'Successfully submitted!';
//   document.body.appendChild(message);
  
//   // Reset the form
//   form.reset();
// });

// function submitForm(event) {
//     event.preventDefault(); // prevent the default form submission
  
//     // send the form data using AJAX
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'mail.php');
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         // show the success message
//         var status = document.querySelector('.status');
//         status.innerHTML = 'Your message has been sent!';
//         status.classList.add('alert', 'alert-success');
//         // clear the form
//         document.getElementById('contact-form').reset();
//       } else {
//         // show an error message
//         var status = document.querySelector('.status');
//         status.innerHTML = 'Oops! Something went wrong. Please try again later.';
//         status.classList.add('alert', 'alert-danger');
//       }
//     };
//     xhr.send(new FormData(event.target));
//   }




 
  document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Successfully submitted!");
    document.getElementById("contact-form").reset();
  });

// const submitBtn = document.getElementById('submitBtn');
// const message = Document.getElementById('mesaage');
//  submitBtn.addEventListener('click',function(event){
//   event.preventDefault();
//   message.textContent ='Thankyou for your feedback';
//  });



