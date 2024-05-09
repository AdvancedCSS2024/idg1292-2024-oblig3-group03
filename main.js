setTimeout(() => {
    document.querySelector("#frame2").classList.add("frame2__transition");
    document.querySelector(".window__horizontal").classList.add("W_Transition");
    document.querySelector(".window__vertical").classList.add("W_Transition");
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

// variables for quiz
let currentQuestion;
let correctAnswers;
    
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

            document.querySelector(".window__horizontal").classList.add("W_Transparent");
            document.querySelector(".window__vertical").classList.add("W_Transparent");
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

            document.querySelector(".window__horizontal").classList.remove("W_Transparent");
            document.querySelector(".window__vertical").classList.remove("W_Transparent");
            
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
            document.querySelector(".darkness").classList.remove("night_filter");
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
                document.querySelectorAll(".darkness").forEach((item) => {
                    item.classList.add("night_filter");
                })

                document.querySelectorAll(".light_garage").forEach((item) => {
                    item.classList.add("lights-off");
                })

                document.querySelectorAll(".light_top").forEach((item) => {
                    item.classList.add("lights-off");
                })

                document.querySelectorAll(".light_bottom").forEach((item) => {
                    item.classList.add("lights-off");
                })
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
		if(entry.intersectionRatio > 0.50){
            document.querySelector("#frame2").classList.add("frame2__closed");
			document.querySelector("#frame2").style.transition = "";
			document.querySelector("#frame2").classList.add("frame2__transition");
			document.querySelector(".table-with-candles").remove(".table-with-candles");
			document.querySelector(".darkOverlay").remove(".darkOverlay");
			
            document.querySelector(".window__horizontal").classList.add("W_Transparent");
            document.querySelector(".window__vertical").classList.add("W_Transparent");
            document.querySelector("#frame2").style.transform = "scale(9.5) translate(0, -9%)";
            
            setTimeout(() => {
                document.querySelector(".quiz").style.display = "flex";
            } , 1000);
            setTimeout(() => {
                document.querySelector(".quiz").style.opacity = "1";
            } , 1010);

            currentQuestion = 1;
            correctAnswers = 0;
		}
	})
}, options);

// When user clicks on a quiz answer, it will run this every time with different answerNumber depending on which button was clicked.
function answer(answerNumber) {
    const q1ans = 2;
    const q2ans = 1;
    const q3ans = 3;
    const question = document.querySelector(".quiz__title");
    const ans1 = document.querySelector("#ans1");
    const ans2 = document.querySelector("#ans2");
    const ans3 = document.querySelector("#ans3");

    // if current question is 1, check if answer is correct and update question and answers
    if (currentQuestion === 1) {
        if (answerNumber === q1ans) {
            document.querySelectorAll(".light_bottom").forEach((item) => {
                item.classList.remove("lights-off");
            });
            // adds to correct answers to be checked at the end
            correctAnswers++;
        }

        question.textContent = "Energy is the dominant contributor to climate change. How many per cent of global greenhouse emissions are they accountable for?";
        ans1.textContent = "60%";
        ans2.textContent = "50%";
        ans3.textContent = "70%";
        currentQuestion++;

    } else if (currentQuestion === 2) {
        if (answerNumber === q2ans) {
            document.querySelectorAll(".light_top").forEach((item) => {
                item.classList.remove("lights-off");
            });
            correctAnswers++;
        }

        question.textContent = "How many deaths did indoor air pollution from using combustible fuels for household energy cause in 2012?";
        ans1.textContent = "2.3 million";
        ans2.textContent = "3.6 million";
        ans3.textContent = "4.5 million";
        currentQuestion++;

    } else if (currentQuestion === 3) {
        if (answerNumber === q3ans) {
            document.querySelectorAll(".light_garage").forEach((item) => {
                item.classList.remove("lights-off");
            });
            correctAnswers++;
        }

        document.querySelector(".quiz__answers").style.display = "none";

        // checks how many correct answers there are and updates the title accordingly
        if (correctAnswers === 3) {
            document.querySelector(".quiz__title").textContent = "Congratulations! You turned all the lights on!";
        } else if (correctAnswers === 2) {
            document.querySelector(".quiz__title").textContent = "Good effort! You almost turned all the power back on!";
        } else if (correctAnswers === 1) {
            document.querySelector(".quiz__title").textContent = "You got one of the lights on. Thats more than zero!";
        } else {
            document.querySelector(".quiz__title").textContent = "Your knowledge has no power. You couldn't power a single light.";
        }

    } else {
        // if question is other than 1-3, log error
        console.log("error");
    }
}


observer1.observe(frame1);
observer2.observe(frame2);
observer3.observe(frame3);
observer4.observe(frame4);
observer5.observe(frame5);
observer6.observe(frame6);
observer7.observe(frame7);
observer8.observe(frame8);
observer9.observe(frame9);
