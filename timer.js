class Timer {
	constructor(duration, button, clock) {
		this.time_in_minutes = duration;
		this.clock = document.getElementById(clock);
		this.current_time = Date.parse(new Date());
		this.deadline = new Date(this.current_time + this.time_in_minutes*60*1000)
		this.button =  document.getElementById("toggle");
		this.interval = '';
	}

	init(){
		this.button.addEventListener('click', () => {
		this.current_time = Date.parse(new Date());
		this.deadline = new Date(this.current_time + this.time_in_minutes*60*1000)
    	this.run_clock();
    	this.button.style.visibility ="hidden";
		});
	}

	time_remaining(){
	let t = Date.parse(this.deadline) - Date.parse(new Date());
	let seconds = Math.floor( (t/1000) % 60 );
	let minutes = Math.floor( (t/1000/60) % 60 );
	let hours = Math.floor( (t/(1000*60*60)) % 24 );
	let days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'jours':days, 'heures':hours, 'minutes':minutes, 'secondes':seconds};
	}

	run_clock(){
	this.interval = setInterval(this.update_clock.bind(this),1000);
	
	}
	update_clock(){
		let t = this.time_remaining();
		this.clock.innerHTML = t.minutes+' minutes '+t.secondes+' secondes ';
		if(t.total<=0){ 
			clearInterval(this.interval);
			this.button.style.visibility ="visible"; 
		}
	}

}

let timer = new Timer(20, 'toggle', 'clockspan' );
timer.init();


