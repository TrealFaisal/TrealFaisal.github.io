const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});



var slides = document.querySelectorAll('.mySlides');
var currentSlide = 0;
setInterval(function() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 10000);

// prev slide
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}
//next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  
}





  let minPrice = 0;
  let maxPrice = 1000;
  const priceRange = document.getElementById("price-range");
  const priceRangeMax = document.getElementById("price-range-max");
  const priceRangeValue = document.getElementById("price-range-value");
  const resetButton = document.getElementById("reset-button");
  const tooltip = document.querySelector(".tooltip");



  priceRange.addEventListener("input", () => {
    if (parseInt(priceRange.value) > parseInt(priceRangeMax.value)) {
      priceRangeMax.value = priceRange.value;
    }
     minPrice = parseInt(priceRange.value);
    maxPrice = parseInt(priceRangeMax.value);
    priceRangeValue.textContent = `$${priceRange.value} - $${priceRangeMax.value}`;
    tooltip.textContent = `${minPrice}SAR - ${maxPrice}SAR`;
    
  });

  priceRangeMax.addEventListener("input", () => {
    if (parseInt(priceRangeMax.value) < parseInt(priceRange.value)) {
      priceRange.value = priceRangeMax.value;
    }
     minPrice = parseInt(priceRange.value);
    maxPrice = parseInt(priceRangeMax.value);
    priceRangeValue.textContent = `$${priceRange.value} - $${priceRangeMax.value}`;
    //change the dollar sign to SAR
    tooltip.textContent = `${minPrice}SAR - ${maxPrice}SAR`;
   
  });

  resetButton.addEventListener("click", () => {
    tooltip.textContent = "";
    priceRange.value = 0;
    priceRangeMax.value = 1000;
    priceRangeValue.textContent = `$${priceRange.value} - $${priceRangeMax.value}`;

  //make optioncontainer reset to default 
  selected.innerHTML = "Select Type of usage";
  selected2.innerHTML = "Select Resolution";
  optionsContainer.classList.remove("active");
  optionsContainer2.classList.remove("active");
  });


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});


const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const modal7 = document.getElementById("modal7");
const modal8 = document.getElementById("modal8");
const modal9 = document.getElementById("modal9");
const modal10 = document.getElementById("modal10");
const modal11 = document.getElementById("modal11");
const modal12 = document.getElementById("modal12");
const modal13 = document.getElementById("modal13");
const modal14 = document.getElementById("modal14");

const modals = [modal, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10, modal11, modal12, modal13, modal14];
function getRandomModal() {
  return modals[Math.floor(Math.random() * modals.length)];
}

const modalsLessThan5000 = [modal,modal5,modal11];
function getModal5000() {
  return modalsLessThan5000[Math.floor(Math.random() * modalsLessThan5000.length)];
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const modalsLessThan7000 = [modal,modal5,modal6,modal7,modal11,modal12];
function getModal7000() {
  return modalsLessThan7000[Math.floor(Math.random() * modalsLessThan7000.length)];
}

const modalsLessThan7000_2 = [modal5,modal6,modal7,modal11,modal12];
function getModal7000_2() {
  return modalsLessThan7000_2[Math.floor(Math.random() * modalsLessThan7000_2.length)];
}

const modalsLessThan7000_3 = [modal5,modal6,modal7,modal12];
function getModal7000_3() {
  return modalsLessThan7000_3[Math.floor(Math.random() * modalsLessThan7000_3.length)];
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const modalsLessThan8000 = [modal,modal2,modal5,modal6,modal7,modal8,modal11,modal12,modal13];
function getModal8000() {
  return modalsLessThan8000[Math.floor(Math.random() * modalsLessThan8000.length)];
}

const modalsLessThan8000_2 = [modal2,modal5,modal6,modal7,modal8,modal11,modal12,modal13];
function getModal8000_2() {
  return modalsLessThan8000_2[Math.floor(Math.random() * modalsLessThan8000_2.length)];
}

const modalsLessThan8000_3 = [modal2,modal5,modal6,modal7,modal8,modal12,modal13];
function getModal8000_3() {
  return modalsLessThan8000_2[Math.floor(Math.random() * modalsLessThan8000_3.length)];
}

const modalsLessThan8000_4 = [modal2,modal7,modal8,modal12,modal13];
function getModal8000_4() {
  return modalsLessThan8000_4[Math.floor(Math.random() * modalsLessThan8000_4.length)];
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const modalsLessThan9000 = [modal,modal2,modal3,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13];
function getModal9000() {
  return modalsLessThan9000[Math.floor(Math.random() * modalsLessThan9000.length)];
}


const modalsLessThan9000_2 = [modal2,modal3,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13];
function getModal9000_2() {
  return modalsLessThan9000_2[Math.floor(Math.random() * modalsLessThan9000_2.length)];
}

const modalsLessThan9000_3 = [modal2,modal3,modal5,modal6,modal7,modal8,modal9,modal12,modal13];
function getModal9000_3() {
  return modalsLessThan9000_3[Math.floor(Math.random() * modalsLessThan9000_3.length)];
}

const modalsLessThan9000_4 = [modal2,modal3,modal7,modal8,modal9,modal12,modal13];
function getModal9000_4() {
  return modalsLessThan9000_4[Math.floor(Math.random() * modalsLessThan9000_4.length)];
}

const modalsLessThan9000_5 = [modal2,modal3,modal9];
function getModal9000_5() {
  return modalsLessThan9000_5[Math.floor(Math.random() * modalsLessThan9000_5.length)];
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const modalsLessThan10000 = [modal,modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13];
function getModal10000() {
  return modalsLessThan10000[Math.floor(Math.random() * modalsLessThan10000.length)];
}


const modalsLessThan10000_2 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13];
function getModal10000_2() {
  return modalsLessThan10000_2[Math.floor(Math.random() * modalsLessThan10000_2.length)];
}

const modalsLessThan10000_3 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal12,modal13];
function getModal10000_3() {
  return modalsLessThan10000_3[Math.floor(Math.random() * modalsLessThan10000_3.length)];
}

const modalsLessThan10000_4 = [modal2,modal3,modal4,modal7,modal8,modal9,modal12,modal13];
function getModal10000_4() {
  return modalsLessThan10000_4[Math.floor(Math.random() * modalsLessThan10000_4.length)];
}

const modalsLessThan10000_5 = [modal2,modal3,modal4,modal9];
function getModal10000_5() {
  return modalsLessThan10000_5[Math.floor(Math.random() * modalsLessThan10000_5.length)];
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const modalsLessThan11000 = [modal,modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal11000() {
  return modalsLessThan11000[Math.floor(Math.random() * modalsLessThan11000.length)];
}


const modalsLessThan11000_2 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal11000_2() {
  return modalsLessThan11000_2[Math.floor(Math.random() * modalsLessThan11000_2.length)];
}

const modalsLessThan11000_3 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal11000_3() {
  return modalsLessThan11000_3[Math.floor(Math.random() * modalsLessThan11000_3.length)];
}

const modalsLessThan11000_4 = [modal2,modal3,modal4,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal11000_4() {
  return modalsLessThan11000_4[Math.floor(Math.random() * modalsLessThan11000_4.length)];
}

const modalsLessThan11000_5 = [modal2,modal3,modal4,modal9,modal14];
function getModal11000_5() {
  return modalsLessThan11000_5[Math.floor(Math.random() * modalsLessThan11000_5.length)];
}

const modalsLessThan11000_6 = [modal4,modal14];
function getModal11000_6() {
  return modalsLessThan11000_6[Math.floor(Math.random() * modalsLessThan11000_6.length)];
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

const modalsLessThan12000 = [modal,modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal12000() {
  return modalsLessThan12000[Math.floor(Math.random() * modalsLessThan12000.length)];
}


const modalsLessThan12000_2 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal12000_2() {
  return modalsLessThan12000_2[Math.floor(Math.random() * modalsLessThan12000_2.length)];
}

const modalsLessThan12000_3 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal12000_3() {
  return modalsLessThan12000_3[Math.floor(Math.random() * modalsLessThan12000_3.length)];
}

const modalsLessThan12000_4 = [modal2,modal3,modal4,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal12000_4() {
  return modalsLessThan12000_4[Math.floor(Math.random() * modalsLessThan12000_4.length)];
}

const modalsLessThan12000_5 = [modal2,modal3,modal4,modal9,modal14];
function getModal12000_5() {
  return modalsLessThan12000_5[Math.floor(Math.random() * modalsLessThan12000_5.length)];
}

const modalsLessThan12000_6 = [modal4,modal14];
function getModal12000_6() {
  return modalsLessThan12000_6[Math.floor(Math.random() * modalsLessThan12000_6.length)];
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

const modalsLessThan13000 = [modal,modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal13000() {
  return modalsLessThan13000[Math.floor(Math.random() * modalsLessThan13000.length)];
}


const modalsLessThan13000_2 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal11,modal12,modal13,modal14];
function getModal13000_2() {
  return modalsLessThan13000_2[Math.floor(Math.random() * modalsLessThan13000_2.length)];
}

const modalsLessThan13000_3 = [modal2,modal3,modal4,modal5,modal6,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal13000_3() {
  return modalsLessThan13000_3[Math.floor(Math.random() * modalsLessThan13000_3.length)];
}

const modalsLessThan13000_4 = [modal2,modal3,modal4,modal7,modal8,modal9,modal12,modal13,modal14];
function getModal13000_4() {
  return modalsLessThan13000_4[Math.floor(Math.random() * modalsLessThan13000_4.length)];
}

const modalsLessThan13000_5 = [modal2,modal3,modal4,modal9,modal14];
function getModal13000_5() {
  return modalsLessThan13000_5[Math.floor(Math.random() * modalsLessThan13000_5.length)];
}

const modalsLessThan13000_6 = [modal4,modal14];
function getModal13000_6() {
  return modalsLessThan13000_6[Math.floor(Math.random() * modalsLessThan13000_6.length)];
}

const modalsLessThan13000_7 = [modal9,modal10,modal14];
function getModal13000_7() {
  return modalsLessThan13000_7[Math.floor(Math.random() * modalsLessThan13000_7.length)];
}

const modalsLessThan13000_8 = [modal9,modal10];
function getModal13000_8() {
  return modalsLessThan13000_8[Math.floor(Math.random() * modalsLessThan13000_8.length)];
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

const modals__1 = [modal,modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10,modal11, modal12, modal13, modal14];
function getModal() {
  return modals__1[Math.floor(Math.random() * modals__1.length)];
}

const modals__2 = [modal3, modal4, modal9, modal14];
function getModal__1() {
  return modals__2[Math.floor(Math.random() * modals__2.length)];
}

const modals__3 = [modal4, modal14];
function getModal__2() {
  return modals__3[Math.floor(Math.random() * modals__3.length)];
}

const modals1080P = [modal, modal5, modal11];
function getRandomModal__1() {
  const randomIndex = Math.floor(Math.random() * modals1080P.length);
  const modal = modals1080P[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}

const modals1440P = [modal2, modal7, modal12];
function getRandomModal__2() {
  const randomIndex = Math.floor(Math.random() * modals1440P.length);
  const modal = modals1440P[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}
const modals4K = [modal4, modal9, modal14];
function getRandomModal__3() {
  const randomIndex = Math.floor(Math.random() * modals4K.length);
  const modal = modals4K[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}

const modalsPro = [modal, modal2, modal4];
function getRandomModal__4() {
  const randomIndex = Math.floor(Math.random() * modalsPro.length);
  const modal = modalsPro[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}
const modalsSTR = [modal5, modal7, modal9];
function getRandomModal__5() {
  const randomIndex = Math.floor(Math.random() * modalsSTR.length);
  const modal = modalsSTR[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}
const modalsG = [modal11, modal12, modal14];
function getRandomModal__6() {
  const randomIndex = Math.floor(Math.random() * modalsG.length);
  const modal = modalsG[randomIndex];
  if (!modal) {
    throw new Error('Could not find modal');
  }
  return modal;
}


const recommend = document.getElementById('recommend'); 

  recommend.addEventListener("click", () => {

    if((selected.textContent === "ANY" && selected2.textContent === "ANY")
    && 
    (minPrice === 0 && maxPrice ===1000)){$(getRandomModal()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY")
    && 
    (minPrice >= 0 && maxPrice <=4000)) alert("No results found");
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice >= 0 && minPrice <=4000) && maxPrice === 5000 )) {$(getModal5000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice >= 0 &&minPrice<=4000) && maxPrice === 6000 )) {$(getModal5000()).show('fade',250)}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice === 5000 && maxPrice === 6000 )) {$(modal11).show('fade',250)}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice >= 0 && minPrice<=4000) && maxPrice === 7000 )) {$(getModal7000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 7000 )) {$(getModal7000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 7000 )) {$(getModal7000_3()).show('fade',250)}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===8000) {$(getModal8000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 8000 )) {$(getModal8000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 8000 )) {$(getModal8000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 8000 )) {$(getModal8000_4()).show('fade',250)}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===9000) {$(getModal9000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 9000 )) {$(getModal9000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 9000 )) {$(getModal9000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 9000 )) {$(getModal9000_4()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 8000) && maxPrice === 9000 )) {$(getModal9000_5()).show('fade',250)}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===10000) {$(getModal10000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 10000 )) {$(getModal10000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 10000 )) {$(getModal10000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 10000 )) {$(getModal10000_4()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 8000) && maxPrice === 10000 )) {$(getModal10000_5()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 9000) && maxPrice === 10000 )) {$(modal4).show('fade',250)}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===11000) {$(getModal11000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 11000 )) {$(getModal11000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 11000 )) {$(getModal11000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 11000 )) {$(getModal11000_4()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 8000) && maxPrice === 11000 )) {$(getModal11000_5()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 9000) && maxPrice === 11000 )) {$(getModal11000_6()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 10000) && maxPrice === 11000 )) {$(modal14).show('fade',250)}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===12000) {$(getModal12000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 12000 )) {$(getModal12000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 12000 )) {$(getModal12000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 12000 )) {$(getModal12000_4()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 8000) && maxPrice === 12000 )) {$(getModal12000_5()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 9000) && maxPrice === 12000 )) {$(getModal12000_6()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 10000) && maxPrice === 12000 )) {$(modal14).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 11000) && maxPrice === 12000 )) alert("No results found")

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    (minPrice >= 0 && minPrice <=4000)&& maxPrice ===13000) {$(getModal13000()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 5000) && maxPrice === 13000 )) {$(getModal13000_2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 6000) && maxPrice === 13000 )) {$(getModal13000_3()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 7000) && maxPrice === 13000 )) {$(getModal13000_4()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 8000) && maxPrice === 13000 )) {$(getModal13000_5()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 9000) && maxPrice === 13000 )) {$(getModal13000_6()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 10000) && maxPrice === 13000 )) {$(getModal13000_7()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 11000) && maxPrice === 13000 )) {$(getModal13000_8()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "ANY") 
    && 
    ((minPrice === 12000) && maxPrice === 13000 )) {$(getModal13000_8()).show('fade',250)}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


    else if((selected.textContent === "ANY" && selected2.textContent === "1080P")) {$(getRandomModal__1()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "1440P")) {$(getRandomModal__2()).show('fade',250)}

    else if((selected.textContent === "ANY" && selected2.textContent === "4K")) {$(getRandomModal__3()).show('fade',250)}

    else if((selected.textContent === "Productivity" && selected2.textContent === "ANY")) {$(getRandomModal__4()).show('fade',250)}

    else if((selected.textContent === "Video Rendering & Streaming"  && selected2.textContent === "ANY")) {$(getRandomModal__5()).show('fade',250)}

    else if((selected.textContent === "Gaming" && selected2.textContent === "ANY")) {$(getRandomModal__6()).show('fade',250)}



    


    
    
   else if((selected.textContent === "Productivity"  && selected2.textContent === "1080P") 
    && 
   ((minPrice >= 0 &&minPrice<=4000) && maxPrice >= 5000)) {$(modal).show('fade',150)}

    else if((selected.textContent === "Productivity" && selected2.textContent === "1080P")  
    && 
    (minPrice < 4000 || maxPrice < 4000)) {alert("There are no PCs in this price range!!!! please raise the Price");}

    else if((selected.textContent === "Productivity" && selected2.textContent === "1080P")  
    && 
    (minPrice >= 5000)) {alert("lower the min price or choose 1440p res");}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  else if((selected.textContent === "Productivity"  && selected2.textContent === "1440P" )
  && 
  ((minPrice>=0 && minPrice<=8000) && maxPrice >= 8000)) { $(modal2).show("fade",150);}

  else if((selected.textContent === "Productivity" && selected2.textContent === "1440P" )
  &&
  ((minPrice <= 7000) || maxPrice <= 7000)) 
  {alert("There are no PCs in this price range!!!! please raise the Price");}

  else if((selected.textContent === "Productivity" && selected2.textContent === "1440P" )
  &&
  ((minPrice >= 9000 )))
  {alert("lower the min price or choose 4k res");}
  //------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

  else if((selected.textContent === "Productivity" && selected2.textContent === "4K" )
  &&
  ((minPrice >= 0 && minPrice <=9000) && maxPrice >= 10000  )) { $(modal4).show("fade",150);}

  else if((selected.textContent === "Productivity" && selected2.textContent === "4K" )
  && 
  (minPrice <= 9000 || maxPrice <= 9000)){alert("There are no PCs in this price range!!!! please raise the Price");}

  else if((selected.textContent === "Productivity" && selected2.textContent === "4K" )
  &&
  ((minPrice >= 10000 )))
  {alert("lower the min price");}


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1080P")
&&
((minPrice >= 0 && minPrice <=6000) && maxPrice >= 5000 )){$(modal5).show('fade',150) } 


else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1080P")
&& 
(minPrice <= 4000 || maxPrice <= 4500)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1080P" )
  &&
  ((minPrice >= 7000 )))
  {alert("lower the min price or choose 1440P");}


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1440P")
&&
((minPrice >= 0 && minPrice <=7000) && maxPrice >= 7000 )){$(modal7).show('fade',150) } 


else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1440P")
&& 
(minPrice <= 6000 || maxPrice <= 6000)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "1440P" )
  &&
  ((minPrice >= 8000 )))
  {alert("lower the min price or choose 4K");}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "4K")
&&
((minPrice >= 0 && minPrice <=12000) && maxPrice >= 9000 )){$(modal9).show('fade',150) } 


else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "4K")
&& 
(minPrice <= 8000 || maxPrice <= 8400)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Video Rendering & Streaming" && selected2.textContent === "4K" )
  &&
  ((minPrice >= 13000 )))
  {alert("lower the min price");}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


else if((selected.textContent === "Gaming" && selected2.textContent === "1080P")
&&
((minPrice >= 0 && minPrice <=5000) && maxPrice >= 4000  )){$(modal11).show('fade',150) } 


else if((selected.textContent === "Gaming" && selected2.textContent === "1080P")
&& 
(minPrice <= 3000 || maxPrice <= 3700)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Gaming" && selected2.textContent === "1080P" )
  &&
  ((minPrice >= 6000 )))
  {alert("lower the min price or choose 1440P res");}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
else if((selected.textContent === "Gaming" && selected2.textContent === "1440P")
&&
((minPrice >= 0 && minPrice <=7000) && maxPrice >= 7000 )){$(modal12).show('fade',150) } 


else if((selected.textContent === "Gaming" && selected2.textContent === "1440P")
&& 
(minPrice <= 6000 || maxPrice <= 6000)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Gaming" && selected2.textContent === "1440P" )
  &&
  ((minPrice >= 8000 )))
  {alert("lower the min price or choose 4k res");}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

else if((selected.textContent === "Gaming" && selected2.textContent === "4K")
&&
((minPrice >= 0 && minPrice <=10000) && maxPrice >= 11000 )){$(modal14).show('fade',150) } 


else if((selected.textContent === "Gaming" && selected2.textContent === "4K")
&& 
(minPrice <= 10000 || maxPrice <= 10000)){alert("There are no PCs in this price range!!!! please raise the Price");}

else if((selected.textContent === "Gaming" && selected2.textContent === "4K" )
  &&
  ((minPrice >= 11000 )))
  {alert("lower the min price");}

    });
    
const close = document.querySelectorAll(".close__btn");
close.forEach((close) => {
  close.addEventListener("click", () => {
    const modal = close.closest(".modal");
    $(modal).hide('fade',200);
  });
});


$(document).on('click',function(e){
  if(!(($(e.target).closest(".modal").length > 0 ) || ($(e.target).closest("#recommend").length > 0))){
  $(".modal").hide('fade',250);
 }
});



// Get all the details elements
const detailsElements = document.querySelectorAll('details');

// Add event listeners to toggle the visibility of the answer
detailsElements.forEach((details) => {
  details.addEventListener('click', () => {
    details.open = !details.open;
  });
});


