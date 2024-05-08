setTimeout(() => {
    document.querySelector("#frame2").classList.add("frame2__transition");
    }
, 1000);


// elements to watch for intersection with viewport
const frame1 = document.querySelector("#startFrame1");
const frame2 = document.querySelector("#startFrame2");
const frame3 = document.querySelector("#startFrame3");
const frame4 = document.querySelector("#startFrame4");
const frame5 = document.querySelector("#startFrame5");
const frame6 = document.querySelector("#startFrame6");
const frame7 = document.querySelector("#startFrame7");
const frame8 = document.querySelector("#startFrame8");
const frame9 = document.querySelector("#startFrame9");

const dad = document.querySelector("#dad");
const mom = document.querySelector("#mom");
const son = document.querySelector("#son");
const daughter = document.querySelector("#daughter");
const lamp = document.querySelector(".lamp");
const snowflakes = document.querySelector(".snowflakes-wrapper");
const chart = document.querySelector(".chart");
const floor = document.querySelector(".floor");
    
const options = {
	rootMargin: "-20px",
	threshold: [0, .25, 0.5, .75, 1]
};

const observer1 = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		// if intersecting, start frame 1
		if(entry.intersectionRatio > 0.50){
            document.querySelector("#frame2").classList.add("frame2__closed");
            document.querySelector(".title").classList.remove("title__closed");
		}
	})
}, options);

const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
			document.querySelector("#frame2").classList.remove("frame2__closed");
            document.querySelector(".title").classList.add("title__closed");
            dad.classList.remove("dad_walking");
            mom.classList.remove("moveOut");
            son.classList.remove("moveOut");
            daughter.classList.remove("moveOut");
            lamp.classList.remove("moveOut");
            document.querySelector(".window-wrapper").classList.remove("moveOut");
            snowflakes.classList.remove("moveOut");
            chart.classList.remove("chartIn");
		}
	})
}, options);

const observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
			document.querySelector("#dad").classList.add("dad_walking");
            document.querySelector("#mom").classList.add("moveOut");
            document.querySelector("#son").classList.add("moveOut");
            document.querySelector("#daughter").classList.add("moveOut");
            document.querySelector(".lamp").classList.add("moveOut");
            document.querySelector(".window-wrapper").classList.add("moveOut");
            document.querySelector(".snowflakes-wrapper").classList.add("moveOut");
            document.querySelector(".chart").classList.add("chartIn");
            document.querySelector(".floor").style.transform = "translateX(0)"
            setTimeout(() => {
                document.querySelector("#dad").classList.remove("dad_walking");
				document.querySelector("#dad-smile").classList.add("hide-smile");
				document.querySelector("#gasping").classList.add("gasping-mouth");
				document.querySelector("#d-right-arm").classList.add("dad-right-arm");
				document.querySelector("#d-left-arm").classList.add("dad-left-arm");
			} , 7000);			
            // maybe switch out this setTimeout with CSS keyframe animation duration (@keyframes walking).
		}
	})
}, options);

const observer4 = new IntersectionObserver(entries => { 
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
			document.querySelector("#gasping").classList.remove("gasping-mouth");
			document.querySelector("#dad-smile").classList.remove("hide-smile");
			document.querySelector("#dad-smile").classList.add("change-smile");
			document.querySelector("#d-right-arm").classList.remove("dad-right-arm");
			document.querySelector("#d-left-arm").classList.remove("dad-left-arm");
            document.querySelector("#dad").classList.add("dad_walking-backwards");
            
            document.querySelector(".lamp").classList.remove("moveOut");
            document.querySelector(".window-wrapper").classList.remove("moveOut");
            document.querySelector(".snowflakes-wrapper").classList.remove("moveOut");
            document.querySelector(".chart").classList.remove("chartIn");
            document.querySelector(".floor").style.transform = "translateX(-100vw)";

            setTimeout(() => {
                document.querySelector("#dad").classList.remove("dad_walking-backwards");
                
			} , 10000);
            setTimeout(() => {
                document.querySelector("#dad").classList.add("dadTurnOffLamp")
            } , 7000);    

		}
	})
}, options);

const observer5 = new IntersectionObserver(entries => { 
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
			document.querySelector("#d-right-arm").classList.add("dad-right-arm");
            setTimeout(() => {
                document.querySelector(".lamp").classList.add("lamp-off");
            } , 1000);  
            setTimeout(() => {
                document.querySelector(".darkOverlay").style.display = "block";
                document.querySelector("#frame2").style.filter = "brightness(0.5)";
            } , 1300);  
            setTimeout(() => {
                document.querySelector("#d-right-arm").classList.remove("dad-right-arm");
                document.querySelector("#frame2").style.filter = "brightness(0)";
                document.querySelector("#frame2").style.transition = "filter 1s";
            } , 2000); 
		}
	})
}, options);

const observer6 = new IntersectionObserver(entries => { 
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
            document.querySelector(".darkOverlay").style.background = "radial-gradient(#534a004d -10%, black)";
            document.querySelector("#frame2").style.transition = "filter 2s";
            document.querySelector("#frame2").style.filter = "brightness(1)";
            document.querySelector(".table-with-candles").style.opacity = "1";
            document.querySelector(".table-with-candles").style.filter = "drop-shadow(0px 5px 5px black) brightness(1)";

            dad.classList.remove("dadTurnOffLamp");
            dad.style.bottom = "22vh";
            dad.style.left = "36vw";
            mom.classList.remove("moveOut");
            mom.style.bottom = "22vh";
            mom.style.right = "37vw";
            son.classList.remove("moveOut");
            son.style.left = "43vw";
            daughter.classList.remove("moveOut");
            daughter.style.right = "45vw";
            mom.style.transition = "none";
            dad.style.transition = "none";
            son.style.transition = "none";
            daughter.style.transition = "none";

			document.querySelector("#mom-smile").classList.add("change-smile");
			document.querySelector("#son-smile").classList.add("change-smileChildren");
			document.querySelector("#daughter-smile").classList.add("change-smileChildren");
		}
	})
}, options);


const observer7 = new IntersectionObserver(entries => { 
	entries.forEach(entry=>{
		if(entry.intersectionRatio > 0.50){
			document.querySelector("#d-right-arm").classList.add("father-right-arm");
			document.querySelector("#d-left-arm").classList.add("father-left-arm");
			document.querySelector("#m-right-arm").classList.add("mom-right-arm");
			document.querySelector("#m-left-arm").classList.add("mom-left-arm");
			document.querySelector("#girl-right-arm").classList.add("daughter-right-arm");
			document.querySelector("#girl-left-arm").classList.add("daughter-left-arm");
			document.querySelector("#s-right-arm").classList.add("son-right-arm");
			document.querySelector("#s-left-arm").classList.add("son-left-arm");
	}
})
}, options);

const observer8 = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		// if intersecting, start frame 1
		if(entry.intersectionRatio > 0.50){
            document.querySelector("#frame2").classList.add("frame2__closed");
			document.querySelector("#frame2").style.transition = "";
			document.querySelector("#frame2").classList.add("frame2__transition");
			document.querySelector(".table-with-candles").remove(".table-with-candles");
			document.querySelector(".darkOverlay").remove(".darkOverlay");
			
		}
	})
}, options);


observer1.observe(frame1);
observer2.observe(frame2);
observer3.observe(frame3);
observer4.observe(frame4);
observer5.observe(frame5);
observer6.observe(frame6);
observer7.observe(frame7);
observer8.observe(frame8);
observer9.observe(frame9);
