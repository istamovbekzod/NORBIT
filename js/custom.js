const toggleLinks = document.querySelectorAll(".toggle-links");

toggleLinks.forEach(button => {
	button.addEventListener("click", () => {
		const linksList = button.parentElement.querySelector(".links");
		if (linksList.style.display === "none" || linksList.style.display === "") {
			linksList.style.display = "block";
		} else {
			linksList.style.display = "none";
		}
	});
});

//----------------------------------------------------------
/*
const fileInput = document.getElementById("file-input");
const fileLabel = document.querySelector(".file-label");

fileLabel.addEventListener("click", function () {
	fileInput.click();
});

fileInput.addEventListener("change", function () {
	const files = fileInput.files;
	if (files.length > 0) {
		const fileName = files[0].name;
		fileLabel.querySelector(".text").textContent = fileName;
	} else {
		fileLabel.querySelector(".text").textContent = "Прикрепи резюме";
	}
});

fileUpload.addEventListener("dragover", function (e) {
	e.preventDefault();
	fileUpload.classList.add("dragover");
});

fileUpload.addEventListener("dragleave", function () {
	fileUpload.classList.remove("dragover");
});

fileUpload.addEventListener("drop", function (e) {
	e.preventDefault();
	fileUpload.classList.remove("dragover");
	const file = e.dataTransfer.files[0];
	if (file) {
		fileInput.files = e.dataTransfer.files;
		const fileName = file.name;
		fileLabel.querySelector(".text").textContent = fileName;
	}
});
*/
//----------------------------------------------------------
const toggleButtons = document.querySelectorAll(".toggle-button");
const textBlocks = document.querySelectorAll(".text-block");

toggleButtons.forEach((button, index) => {
	button.addEventListener("click", function (event) {
		event.preventDefault();
		const textBlock = textBlocks[index];
		if (textBlock.classList.contains("visible")) {
			textBlock.classList.remove("visible");
			setTimeout(() => {
				textBlock.style.display = "none";
			}, 400);
		} else {
			textBlock.style.display = "block";
			setTimeout(() => {
				textBlock.classList.add("visible");
			}, 0);
		}
	});
});


//-----------------------------------------------------------

if (window.innerWidth > 991) {
	let currentIndex = 0;
	const slider = document.querySelector('.slider');
	const slides = document.querySelectorAll('.slide');
	const slideHeight = slides[0].offsetHeight;

	function scrollSlider(event) {
		event.preventDefault(); // Блокируем скролл всей страницы

		if (event.deltaY > 0) {
			// Скролл вниз, переключите на следующий слайд
			currentIndex = (currentIndex + 1) % slides.length;
		} else {
			// Скролл вверх, переключите на предыдущий слайд
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		}

		// Измените положение слайдера
		const translateY = -currentIndex * slideHeight;
		slider.style.transform = `translateY(${translateY}px)`;
	}


}