function fader() {
					console.log('111');
					$(".home").animate({opacity: 0},{duration:2000});
					$(".home").animate({opacity: 1},{duration:500});
				    setInterval(function(){
				       $(".home").animate({opacity: 0},{duration:2000});
						$(".home").animate({opacity: 1},{duration:500});
				    }, 10000);
				}
				setTimeout(fader, 8000);