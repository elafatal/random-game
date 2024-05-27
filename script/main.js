window.addEventListener('load', init);
let gameStarted = false;
let level=0;
let score = 0 ;

const scoretag=document.getElementById("score"); 
const easy = document.getElementById("easy");
const average = document.getElementById("Average");
const hard= document.getElementById("hard");

function init(){
  let shapes = [];

  let s=0;
  
  let w = document.getElementById('falling-point').offsetWidth;
  let h = window.innerHeight;
     
  function randomInRange(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
  };
  function getRandomNumber() {
    const randNumber= Math.random();
    const scaledRandomNumber = Math.floor(randNumber * 3) + 1;
    return scaledRandomNumber;
  }  
  
  
  function createShape() {
    let img = document.createElement('img');
    const pic=getRandomNumber();
     img.setAttribute('class', 'shapes');
     img.style.left = randomInRange(0, w)+'px';
     img.style.top = 0+'px';
     console.log(pic);
     switch (pic) {
         case 1:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnaRRVNchPtdFQ5Jhp4Sw16X4Zc-tHECLKoLbcbhMjt0dxaZycP0xYlPyCOgWwiVCMJE&usqp=CAU';
          s=5;
          break;
         case 2:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqzieMzGpeQAZcrJ-nALnrXpu9ao_DDKkA5HqQe11IkKNjKFuNKmBajTtGOKhEG2BGFU&usqp=CAU';
          s=7;
           break;
         case 3:
          img.src = 'https://dkstatics-public.digikala.com/digikala-products/fe68b8df826884dc8fcf23a01571a175ed04cd0f_1633337107.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90';
          s=10;
          break;
       }
       img.style.borderRadius='50%'
  
     document.getElementById('main').appendChild(img);
     shapes.push(img);
   }
  
   function hideInputs() {
    easy.style.display = 'none';
    average.style.display = 'none';
    hard.style.display = 'none';
  }

  easy.addEventListener('click', function() {
    let updateInterval = setInterval(createShape, 2000); 
    gameStarted = true;
    hideInputs();
  
  });
  average.addEventListener('click', function() {
    let updateInterval = setInterval(createShape, 1500); 
    gameStarted = true;
    hideInputs();
  });
  hard.addEventListener('click', function() {
    let updateInterval = setInterval(createShape, 1000); 
    gameStarted = true;
    hideInputs();
  });



}


