
var btn = document.querySelector(".btn-more-info");
var courseInfo = document.querySelector(".course-information");
var moreinfo = document.querySelector(".more-info");

btn.addEventListener("click", showInfo);
courseInfo.style.display = "none";
moreinfo.style.width = '100%';


function showInfo() {	

	if(courseInfo.style.display === "none"){
		btn.innerHTML = "Menos Informações";
		courseInfo.style.display = 'flex';
		moreinfo.style.width = 'inherit';

	}else{
		courseInfo.style.display = 'none';
		btn.innerHTML = "Mais Informações";
		moreinfo.style.width = '100%';
	}


}
