// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";





window.onload = function () {
   document.addEventListener('click',documentAction);

   function documentAction (e){

   }

   const headerElement = document.querySelector ('.header');
   
   const callback = function (entries, observer){
      if(entries[0].isIntersecting){
         headerElement.classList.remove('_scroll');
      }
      else {
         headerElement.classList.add('_scroll');
      }
   };
   
   const headerObserver = new IntersectionObserver (callback);
   headerObserver.observe(headerElement);
}
















// ====================

// let names = document.querySelector("#userName");
// let passwords = document.querySelector("#userPassword");
// let submits = document.querySelector("#submit");


// let users = {};

// function User(name, password){
//    this.name = names;
//    this.password = passwords;
// };

// function createId(users){
//    return Object.keys(users).length
// }

// submits.document.addEventListener("click", () => {
//    const nameUser = names.value;
//    const passwordUser = passwords.value;
   
//    const user = new User(nameUser, passwordUser);
   
//    const userId = "User" + createId(users);
//    users[userId] = user;
   
//    console.log(users);
//    alert(`${nameUser}, Приветствуем вас! В церкви Siloam.`)
     
// });


// по типу сполера 
// ====================

// document.addEventListener("click", documentAction);

// function documentAction(e) {
//    const targetElement = e.target; 
//    if (targetElement.closest(`[data-parent]`)){
//       const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
//       const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
//       // const catalogMenu = document.querySelector('.catalog-header')
//       if(subMenu){
//          const activeLink = document.querySelector('._sud-menu-active');
//          const activeBlock = document.querySelector('._sub-menu-open');
//          if(activeLink && activeLink !== targetElement){
//             activeLink.classList.remove('._sud-menu-active');
//             activeBlock.classList.remove('._sub-menu-open');
//          }

//          targetElement.classList.toggle('_sub-menu-active');
//          subMenu.classList.toggle("_sub-menu-open");
//          // catalogMenu.classList.toggle('_sub-menu-show');
//       } else{
//          console.log();
//       }

//       e.preventDefault();
//    }
//    if (targetElement.closest(`[data-parent]`)){
//    // const cotologLink = 
//       document.documentElement.classList.add('catalog-open');
//       e.preventDefault();
//    }
// }
