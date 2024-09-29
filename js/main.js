let aboutLink = document.querySelector('#aboutPage');
let resumeLink = document.querySelector('#resumePage');
let portfolioLink = document.querySelector('#portfolioPage');
let blogLink = document.querySelector('#blogPage');
let contactLink = document.querySelector('#contactPage');
let closeBtn = document.querySelector('.btnclose');
let images =document.querySelectorAll('.imgCards .imgCard ');
let links = document.querySelectorAll('.portfoliolinks li')
console.log(links);


// console.log(images[0].className.includes('brand'));

let allBtn = document.querySelector('.all');
let brandBtn = document.querySelector('.brand'); 
let designBtn = document.querySelector('.design');
let photoBtn = document.querySelector('.photos')



let aboutPage;
let resumePage;
let portfolioPage;
let blogPage;
let contactPage;


aboutLink?.addEventListener('click',function() {
    aboutPage = window.open('about.html','_self')
})

resumeLink?.addEventListener('click',function() {
    resumePage = window.location.href='resume.html'
})

portfolioLink?.addEventListener('click',function() {
    portfolioPage = window.location.href='portfolio.html'
})

blogLink?.addEventListener('click',function() {
    blogPage = window.location.href='blog.html'
})

contactLink?.addEventListener('click',function() {
    contactPage = window.location.href='contact.html'
})

closeBtn.addEventListener('click', function() {
    history.back()
    })


    // filter***************
    allBtn.addEventListener('click', function() {
        for(let i=0; i<images.length;i++){
            if(images[i]) {
                images[i].style.display='';
                // allBtn.classList.remove('active')
                // brandBtn.classList.add('active')
            }
            else {
                images[i].style.display='none'
            }
        }
    })

    brandBtn.addEventListener('click', function() {
        for(let i=0; i<images.length;i++){
            if(images[i].className.includes('brand')) {
                images[i].style.display='';
                // allBtn.classList.remove('active')
                // brandBtn.classList.add('active')
            }
            else {
                images[i].style.display='none'
            }
        }
    })

    photoBtn.addEventListener('click', function() {
        
        for(let i=0; i<images.length;i++){
            if(images[i].className.includes('photos')) {
                 images[i].style.display='';
                // allBtn.classList.remove('active')
                // photoBtn.classList.add('active')
            }
            else {
                images[i].style.display='none'
            }
        }
    })

    designBtn.addEventListener('click', function() {
        for(let i=0; i<images.length;i++){
            if(images[i].className.includes('design')) {
                 images[i].style.display='';
                // allBtn.classList.remove('active')
                // designBtn.classList.add('active')
            }
            else {
                images[i].style.display='none'
            }
        }
    })

    for(let i =0; i< links.length; i++){
    links[i].onclick = function(){
        links.forEach(function(btn){
          btn.style = '';
      });
        this.style.color = '#009e66';
        this.style.borderBottom ='1px solid #009e66'
    }
}