const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});



const openModal = document.getElementById('key_metric_dialog');
const open = document.querySelector('.open');
const close = document.querySelector('.modal__close');




open.addEventListener('click', function(){
    if(openModal){
        openModal.style.display = 'block';
    }
});

close.addEventListener('click', function(){
    if(openModal){
        openModal.style.display = 'none';
    }
});








const removeButton = document.querySelector('.td__remove');
const remove = document.getElementById('remove-button');
const choosebtn = document.getElementById('choose');
const tdimg = document.querySelector('.td__image');
const tdname = document.querySelector('.td__name');
const tdprice = document.querySelector('.td__price');
const tdTDP = document.querySelector('.td__TDP');





  choosebtn.addEventListener('click', () => {
    localStorage.setItem('add-button-state', 'true');
  });





const addButtonState = localStorage.getItem('add-button-state');

  if (addButtonState === 'true') {
    $(tdimg).show(0);
    $(tdname).show(0);
    $(tdTDP).show(0);
    $(tdprice).show(0);
    $(removeButton).show(0);
    $(choosebtn).hide(0);
  }



  $(remove).click(function () {
    $(tdimg).hide(0);
    $(tdname).hide(0);
    $(tdTDP).hide(0);
    $(tdprice).hide(0);
    $(removeButton).hide(0);
    $(choosebtn).show(0);
    localStorage.setItem('add-button-state', 'false');
  });


  ////////////
  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__2 = document.getElementById('choose__2');
  const removeButton__2 = document.querySelector('.td__remove__2');
  const remove__2 = document.getElementById('remove-button__2');
  const tdimg__2 = document.querySelector('.td__image__2');
  const tdname__2 = document.querySelector('.td__name__2');
  const tdprice__2 = document.querySelector('.td__price__2');
  const tdTDP__2 = document.querySelector('.td__TDP__2');

  choosebtn__2.addEventListener('click', () => {
    localStorage.setItem('add-button-state__2', 'true');
  });



const addButtonState__2 = localStorage.getItem('add-button-state__2');

  if (addButtonState__2 === 'true') {
    $(tdimg__2).show(0);
    $(tdname__2).show(0);
    $(tdTDP__2).show(0);
    $(tdprice__2).show(0);
    $(removeButton__2).show(0);
    $(choosebtn__2).hide(0);
  }



  $(remove__2).click(function () {
    $(tdimg__2).hide(0);
    $(tdname__2).hide(0);
    $(tdTDP__2).hide(0);
    $(tdprice__2).hide(0);
    $(removeButton__2).hide(0);
    $(choosebtn__2).show(0);
    localStorage.setItem('add-button-state__2', 'false');
  });



  ////////////
  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__3 = document.getElementById('choose__3');
  const removeButton__3 = document.querySelector('.td__remove__3');
  const remove__3 = document.getElementById('remove-button__3');
  const tdimg__3 = document.querySelector('.td__image__3');
  const tdname__3 = document.querySelector('.td__name__3');
  const tdprice__3 = document.querySelector('.td__price__3');
  const tdTDP__3 = document.querySelector('.td__TDP__3');

  choosebtn__3.addEventListener('click', () => {
    localStorage.setItem('add-button-state__3', 'true');
  });



const addButtonState__3 = localStorage.getItem('add-button-state__3');

  if (addButtonState__3 === 'true') {
    $(tdimg__3).show(0);
    $(tdname__3).show(0);
    $(tdTDP__3).show(0);
    $(tdprice__3).show(0);
    $(removeButton__3).show(0);
    $(choosebtn__3).hide(0);
  }



  $(remove__3).click(function () {
    $(tdimg__3).hide(0);
    $(tdname__3).hide(0);
    $(tdTDP__3).hide(0);
    $(tdprice__3).hide(0);
    $(removeButton__3).hide(0);
    $(choosebtn__3).show(0);
    localStorage.setItem('add-button-state__3', 'false');
  });



  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__4 = document.getElementById('choose__4');
  const removeButton__4 = document.querySelector('.td__remove__4');
  const remove__4 = document.getElementById('remove-button__4');
  const tdimg__4 = document.querySelector('.td__image__4');
  const tdname__4 = document.querySelector('.td__name__4');
  const tdTDP__4 = document.querySelector('.td__TDP__4');
  const tdprice__4 = document.querySelector('.td__price__4');

  choosebtn__4.addEventListener('click', () => {
    localStorage.setItem('add-button-state__4', 'true');
  });



const addButtonState__4 = localStorage.getItem('add-button-state__4');

  if (addButtonState__4 === 'true') {
    $(tdimg__4).show(0);
    $(tdname__4).show(0);
    $(tdprice__4).show(0);
    $(tdTDP__4).show(0);
    $(removeButton__4).show(0);
    $(choosebtn__4).hide(0);
  }



  $(remove__4).click(function () {
    $(tdimg__4).hide(0);
    $(tdname__4).hide(0);
    $(tdprice__4).hide(0);
    $(tdTDP__4).hide(0);
    $(removeButton__4).hide(0);
    $(choosebtn__4).show(0);
    localStorage.setItem('add-button-state__4', 'false');
  });



  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__5 = document.getElementById('choose__5');
  const removeButton__5 = document.querySelector('.td__remove__5');
  const remove__5 = document.getElementById('remove-button__5');
  const tdimg__5 = document.querySelector('.td__image__5');
  const tdname__5 = document.querySelector('.td__name__5');
  const tdTDP__5 = document.querySelector('.td__TDP__5');
  const tdprice__5 = document.querySelector('.td__price__5');

  choosebtn__5.addEventListener('click', () => {
    localStorage.setItem('add-button-state__5', 'true');
  });



const addButtonState__5 = localStorage.getItem('add-button-state__5');

  if (addButtonState__5 === 'true') {
    $(tdimg__5).show(0);
    $(tdname__5).show(0);
    $(tdprice__5).show(0);
    $(tdTDP__5).show(0);
    $(removeButton__5).show(0);
    $(choosebtn__5).hide(0);
  }




  $(remove__5).click(function () {
    $(tdimg__5).hide(0);
    $(tdname__5).hide(0);
    $(tdprice__5).hide(0);
    $(tdTDP__5).hide(0);
    $(removeButton__5).hide(0);
    $(choosebtn__5).show(0);
    localStorage.setItem('add-button-state__5', 'false');
  });




  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__6 = document.getElementById('choose__6');
  const removeButton__6 = document.querySelector('.td__remove__6');
  const remove__6 = document.getElementById('remove-button__6');
  const tdimg__6 = document.querySelector('.td__image__6');
  const tdname__6 = document.querySelector('.td__name__6');
  const tdTDP__6 = document.querySelector('.td__TDP__6');
  const tdprice__6 = document.querySelector('.td__price__6');


  choosebtn__6.addEventListener('click', () => {
    localStorage.setItem('add-button-state__6', 'true');
  });

  

const addButtonState__6 = localStorage.getItem('add-button-state__6');

  if (addButtonState__6 === 'true') {
    $(tdimg__6).show(0);
    $(tdname__6).show(0);
    $(tdprice__6).show(0);
    $(tdTDP__6).show(0);
    $(removeButton__6).show(0);
    $(choosebtn__6).hide(0);
  }



  $(remove__6).click(function () {
    $(tdimg__6).hide(0);
    $(tdname__6).hide(0);
    $(tdprice__6).hide(0);
    $(tdTDP__6).hide(0);
    $(removeButton__6).hide(0);
    $(choosebtn__6).show(0);
    localStorage.setItem('add-button-state__6', 'false');
  });




  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__7 = document.getElementById('choose__7');
  const removeButton__7 = document.querySelector('.td__remove__7');
  const remove__7 = document.getElementById('remove-button__7');
  const tdimg__7 = document.querySelector('.td__image__7');
  const tdname__7 = document.querySelector('.td__name__7');
  const tdTDP__7 = document.querySelector('.td__TDP__7');
  const tdprice__7 = document.querySelector('.td__price__7');

  choosebtn__7.addEventListener('click', () => {
    localStorage.setItem('add-button-state__7', 'true');
  });



const addButtonState__7 = localStorage.getItem('add-button-state__7');


  if (addButtonState__7 === 'true') {
    $(tdimg__7).show(0);
    $(tdname__7).show(0);
    $(tdprice__7).show(0);
    $(tdTDP__7).show(0);
    $(removeButton__7).show(0);
    $(choosebtn__7).hide(0);
  }



  $(remove__7).click(function () {
    $(tdimg__7).hide(0);
    $(tdname__7).hide(0);
    $(tdprice__7).hide(0);
    $(tdTDP__7).hide(0);
    $(removeButton__7).hide(0);
    $(choosebtn__7).show(0);
    localStorage.setItem('add-button-state__7', 'false');
  });




  ////////////
  ////////////
  ////////////
  ////////////


  const choosebtn__8 = document.getElementById('choose__8');
  const removeButton__8 = document.querySelector('.td__remove__8');
  const remove__8 = document.getElementById('remove-button__8');
  const tdimg__8 = document.querySelector('.td__image__8');
  const tdname__8 = document.querySelector('.td__name__8');
  const tdTDP__8 = document.querySelector('.td__TDP__8');
  const tdprice__8 = document.querySelector('.td__price__8');
  

  choosebtn__8.addEventListener('click', () => {
    localStorage.setItem('add-button-state__8', 'true');
  });



const addButtonState__8 = localStorage.getItem('add-button-state__8');

  if (addButtonState__8 === 'true') {
    $(tdimg__8).show(0);
    $(tdname__8).show(0);
    $(tdprice__8).show(0);
    $(tdTDP__8).show(0);
    $(removeButton__8).show(0);
    $(choosebtn__8).hide(0);
  }



  $(remove__8).click(function () {
    $(tdimg__8).hide(0);
    $(tdname__8).hide(0);
    $(tdprice__8).hide(0);
    $(tdTDP__8).hide(0);
    $(removeButton__8).hide(0);
    $(choosebtn__8).show(0);
    localStorage.setItem('add-button-state__8', 'false');
  });





















































  
  
























    














