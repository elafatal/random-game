window.addEventListener('load', init);
let gameStarted = false;
let level=0;
let score = 0 ;
let startTime;
let initialAnimationDuration = '5s'; // Initial animation duration in CSS variable format
const scoretag=document.getElementById("score"); 
const easy = document.getElementById("easy");
const average = document.getElementById("Average");
const hard= document.getElementById("hard");
const again= document.getElementById("again");
const info= document.getElementById("info");

function init(){
  let shapes = [];
  let w = document.getElementById('falling-point').offsetWidth;
  let h = window.innerHeight;
     
  function randomInRange(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
  };
  function getRandomNumber() {
    const randNumber= Math.random();
    const scaledRandomNumber = Math.floor(randNumber * 6) + 1;
    return scaledRandomNumber;
  }  

  function createShape() {
    let imgCount = document.getElementsByTagName('img').length;
    console.log(imgCount);
    if (gameStarted == true && imgCount<=7) {
      let img = document.createElement('img');
    const pic=getRandomNumber();
     img.setAttribute('class', 'shapes');
     img.style.left = randomInRange(0, w-40)+'px';
     img.style.top = 0+'px';
     switch (pic) {
         case 1:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnaRRVNchPtdFQ5Jhp4Sw16X4Zc-tHECLKoLbcbhMjt0dxaZycP0xYlPyCOgWwiVCMJE&usqp=CAU';
          img.setAttribute('id','5');
          break;
         case 2:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqzieMzGpeQAZcrJ-nALnrXpu9ao_DDKkA5HqQe11IkKNjKFuNKmBajTtGOKhEG2BGFU&usqp=CAU';
          img.setAttribute('id','7');
           break;
         case 3:
          img.src = 'https://saednews.com/storage/files/post/526dd27b-be8d-47be-850b-0f3d2f570711-jlxZeVvk3FQ02yXh/image.png';
          img.setAttribute('id','10');
          break;
          case 4:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnaRRVNchPtdFQ5Jhp4Sw16X4Zc-tHECLKoLbcbhMjt0dxaZycP0xYlPyCOgWwiVCMJE&usqp=CAU';
          img.setAttribute('id','5');
          break;
         case 5:
          img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqzieMzGpeQAZcrJ-nALnrXpu9ao_DDKkA5HqQe11IkKNjKFuNKmBajTtGOKhEG2BGFU&usqp=CAU';
          img.setAttribute('id','7');
           break;
         case 6:
          img.src = 'https://saednews.com/storage/files/post/526dd27b-be8d-47be-850b-0f3d2f570711-jlxZeVvk3FQ02yXh/image.png';
          img.setAttribute('id','10');
          break;
       }
       img.style.borderRadius='50%'
  
     document.getElementById('main').appendChild(img);
     shapes.push(img);

     img.addEventListener('click', function(event) {
      if(img.id=='5'){
        score=score+5;
      }else if(img.id=='7'){
        score=score+7;
      }else if(img.id=='10'){
        score=0;
      }
      scoretag.innerText=`Score : ${score}`;
      this.remove();
      imgCount--;
    });

    again.addEventListener('click', function() {
      for (let index = 0; index < imgCount; index++) {
        img.remove();
        
      }
      img.style.display='none';
      score=0;
      scoretag.innerText=`Score : ${score}`;
      gameStarted=false;
      // imgCount=1;
      easy.style.display = 'flex';
      average.style.display = 'flex';
      hard.style.display = 'flex';
     });
    }
   
   }

 
   function hideInputs() {
    easy.style.display = 'none';
    average.style.display = 'none';
    hard.style.display = 'none';
    info.style.display = 'none';
  }
  function time(){
console.log(Date.now);
    if (gameStarted==true) {
      let updateInterval2 = setInterval(() => {
        createShape();
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;
        let adjustedDuration = 25 + (elapsedTime / 60000); 
        document.documentElement.style.setProperty('--animation-duration', `${adjustedDuration}s`);
      }, 1000);
    }
    
  }
  easy.addEventListener('click', function() {
    startTime=Date.now;
    gameStarted = true;
    level = 3000 ;
    hideInputs();
    time();
  
  });
  average.addEventListener('click', function() {
    startTime=Date.now;
   level=2000;
    gameStarted = true;
    hideInputs();
    time()
  });
  hard.addEventListener('click', function() {
    startTime=Date.now;
    level=1500;
    gameStarted = true;
    hideInputs();
    time();
  });

  if (gameStarted == true) {
    let updateInterval = setInterval(createShape, level); 
  }
}


