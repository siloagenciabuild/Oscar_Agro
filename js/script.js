
/* SLICK*/

function teste(numero){
			if(numero==1){
				 $("#img01").attr('src', 'img/01v.png');
				 $("#img02").attr('src', 'img/02.png'); 
				 $("#img03").attr('src', 'img/03.png'); 
				 $("#img04").attr('src', 'img/04.png');
				 $("#img05").attr('src', 'img/05.png'); 

			} else if (numero==2) {
				 $("#img01").attr('src', 'img/01.png');
				 $("#img02").attr('src', 'img/02v.png'); 
				 $("#img03").attr('src', 'img/03.png'); 
				 $("#img04").attr('src', 'img/04.png');
				 $("#img05").attr('src', 'img/05.png'); 

			} else if (numero==3) {
				 $("#img01").attr('src', 'img/01.png');
				 $("#img02").attr('src', 'img/02.png'); 
				 $("#img03").attr('src', 'img/03v.png'); 
				 $("#img04").attr('src', 'img/04.png');
				 $("#img05").attr('src', 'img/05.png'); 

			} else if (numero==4) {
				 $("#img01").attr('src', 'img/01.png');
				 $("#img02").attr('src', 'img/02.png'); 
				 $("#img03").attr('src', 'img/03.png'); 
				 $("#img04").attr('src', 'img/04v.png');
				 $("#img05").attr('src', 'img/05.png'); 

			} else if (numero==5) {
				 $("#img01").attr('src', 'img/01.png');
				 $("#img02").attr('src', 'img/02.png'); 
				 $("#img03").attr('src', 'img/03.png'); 
				 $("#img04").attr('src', 'img/04.png');
				 $("#img05").attr('src', 'img/05v.png'); 

			}
		}

$(document).ready(function(){
  
  $('.posters').slick({
    centerMode: true,
  	centerPadding: '60px',
 	slidesToShow: 3,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
	      arrows: false,
	      centerMode: true,
	      centerPadding: '40px',
	      slidesToShow: 1
      }
    }
  ]
  });


});



