function playMusic(){
    var music=new Audio('lifelike-126735.mp3');
    music.play();
    alert('Thanks for appreciating audio will be played!!')
    
}

function copyurl(){
  navigator.clipboard.writeText
                ("http://localhost:5500/codsoft/newport.html");
  alert('URL for the website is copied to clipboard');
}

function displaysidebar(){
  document.getElementById('siding').classList.toggle('active');
  document.getElementById('siding1').classList.toggle('active');
}

function aboutlogo(){
  alert('Hello, Martand this side. I am the developer of this webpage. All the rights are reserved. Thank-You for visiting.');
}

var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-content");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcont of tabcontent){
    tabcont.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxvBPO6gKHdKr3tdBWFn-aCxNlkE9uVcqy5JxnTD0KAyBe38u0Q1SAVbLwdWAgPuVY9/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Thank-You for Submitting !!!"
    setTimeout(function(){
      msg.innerHTML=""
    },5000)
  form.reset();
  })
      .catch(error => console.error('Error!', error.message))
  })