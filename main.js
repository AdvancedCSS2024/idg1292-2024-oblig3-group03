setTimeout(() => {
    document.querySelector("#frame2").classList.add("frame2__transition");
    }
, 1000);


// elements to watch for intersection with viewport
const frame1 = document.querySelector("#startFrame1");
const frame2 = document.querySelector("#startFrame2");
const frame3 = document.querySelector("#startFrame3");
    
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
            setTimeout(() => {
                document.querySelector("#dad").classList.remove("dad_walking");
            } , 10000);
            // maybe switch out this setTimeout with CSS keyframe animation duration (@keyframes walking).
		}
	})
}, options);

observer1.observe(frame1);
observer2.observe(frame2);
observer3.observe(frame3);