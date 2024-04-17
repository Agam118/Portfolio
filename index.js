
const tabLinks = document.getElementsByClassName('tab-links') ; 

const tabContents = document.getElementsByClassName('tab-contents') ; 



window.addEventListener('scroll', function() {
    var scrollElement = document.getElementById('photo');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    var opacity = 0.7 - (scrollTop / 500); 
  
    opacity = Math.max(0, opacity);
  
    scrollElement.style.opacity = opacity;

  });


function openTab(newTab)
{
    
    for(tablink of tabLinks)
    {
        tablink.classList.remove('active-link') ; 
    }

    for(tabcontent of tabContents)
    {
        tabcontent.classList.remove('active-tab') ;
    }

    event.currentTarget.classList.add('active-link') ; 
    document.getElementById(newTab).classList.add('active-tab')

}

// typing animation 

let typed = new Typed(".name",{

     strings : ["Front End Developer","Backend Developer","Problem Solver"],

     typeSpeed : 100, 
     backSpeed : 60,
     loop : true , 
});

function showMe()
{
    const hidden = document.getElementsByClassName("hidden") ; 

    for( hided of hidden )
    {
        hided.style.display = "block" ; 
    }

   document.getElementById("hideme").style.display = "none" ; 

}

function noshow()
{
    const hidden = document.getElementsByClassName("hidden") ; 

    for( hided of hidden )
    {
        hided.style.display = "none" ; 
    }

    document.getElementById("hideme").style.display = "block" ; 
 
}







