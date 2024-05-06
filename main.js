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
            document.querySelector("#dad").classList.remove("dad_walking");
            document.querySelector("#mom").classList.remove("moveOut");
            document.querySelector("#son").classList.remove("moveOut");
            document.querySelector("#daughter").classList.remove("moveOut");
            document.querySelector(".lamp").classList.remove("moveOut");
            document.querySelector(".window-wrapper").classList.remove("moveOut");
            document.querySelector(".snowflakes-wrapper").classList.remove("moveOut");
            document.querySelector(".chart").classList.remove("chartIn");
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
            } , 2000); 
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
