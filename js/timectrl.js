
	$(function() {
	    // Set idle time
	    $( document ).idleTimer( 60000 );
	});

	$(function() {
	    $( document ).on( "idle.idleTimer", function(event, elem, obj){
	        // function you want to fire when the user goes idle
	        window.location.href = "NassRC/index.html";
	    });
	});
