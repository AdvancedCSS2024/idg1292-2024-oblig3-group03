setTimeout(() => {
    document.querySelector("#frame2").classList.add("frame2__transition");
    }
, 1000);


// elements to watch for intersection with viewport
const frame1 = document.querySelector("#startFrame1");
const frame2 = document.querySelector("#startFrame2");
    
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
		}
	})
}, options);

observer1.observe(frame1);
observer2.observe(frame2);