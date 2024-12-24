let btn = document.querySelector(".btn")
 btn.addEventListener("click", (event)=>{
     event.preventDefault();
    console.log(event)


    
// $(document).ready(function () {
  // $('#accountForm').on('submit', function (e) {
      // e.preventDefault();
      // let isValid = true;

      // Validate Name
      const name = $('#name').val().trim();
      if (name.length < 3 || name.length > 50) {
          $('#nameError').text('Name must be between 3 and 50 characters.');
          isValid = false;
      } else {
          $('#nameError').text('');
      }

      // Validate Email
      const email = document.querySelector("#email").value.trim();
const regex = /^(([^<>()[\\]\\.,;:\\s@\"]+(\\.[^<>()[\\]\\.,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\]\\.,;:\\s@\"]+\\.)+[^<>()[\\]\\.,;:\\s@\"]{2,})$/i;

if (!regex.test(email)) {
    $('#emailError').text('Email is not valid');
    isValid = false;
} else {
    $('#emailError').text('');
}


      // Validate Phone
      const phone = $('#phone').val().trim();
      if (phone.length < 10 || phone.length > 14) {
          $('#phoneError').text('Phone must be between 10 and 14 characters.');
          isValid = false;
      } else {
          $('#phoneError').text('');
      }

      // Validate Age
      const age = parseInt($('#age').val().trim(), 10);
      if (isNaN(age) || age < 18 || age > 120) {
          $('#ageError').text('Age must be between 18 and 120.');
          isValid = false;
      } else {
          $('#ageError').text('');
      }

      // Validate Gender
      const gender = $('#gender').val().trim();
      if (gender.length < 4 || gender.length > 15) {
          $('#genderError').text('Gender must be between 4 and 15 characters.');
          isValid = false;
      } else {
          $('#genderError').text('');
      }

      // Validate Address
      const address = $('#address').val().trim();
      if (address.length > 50) {
          $('#addressError').text('Address must not exceed 50 characters.');
          isValid = false;
      } else {
          $('#addressError').text('');
      }

      if (isValid) {
          alert('Form submitted successfully!');
      }
  });

