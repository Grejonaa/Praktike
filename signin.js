const forms = document.querySelector('.forms'),
      eyeIcons = document.querySelectorAll('.eye-icon'),
      links = document.querySelectorAll('.link');


  eyeIcons.forEach(eyeIcon => {eyeIcon.addEventListener('click', () =>{ 
    
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            
            if (password.type === "password"){
                 password.type = "text";
                 eyeIcons.classList.replace("bx-hide", "bx-show");
                 return;
                }
                else{
                password.type = "password";
                eyeIcons.classList.replace("bx-show", "bx-hide");
                }
            }); 
        });
     });

  links.forEach(link =>{
    link.addEventListener('click',e=>{
        e.preventDefault(); //prevent from submit
        forms.classList.toggle("show-signin");
    })
  })
