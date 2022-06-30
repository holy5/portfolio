const tl = gsap.timeline({
	defaults: {
		duration: 0.8,
	},
});
tl.from(".navbar", { y: -100, ease: "power3.out" })
	.from(".hero-text .title", {
		x: "-100%",
		opacity: 0,
		ease: "back.out(1.7)",
	})
	.from(
		".navbar-items a",
		{
			y: "100%",
			opacity: 0,
			stagger: 0.2,
		},
		"-=0.5"
	)
	.from(
		".hero-text .sub-title",
		{
			y: 100,
			opacity: 0,
			ease: "power3.out",
		},
		"-=1"
	)
	.from(
		".arrow",
		{
			opacity: 0,
			ease: "power3.out",
		},
		"-=0.5"
	);
gsap.from("#knowledge .title", {
	scrollTrigger: "#knowledge .title",
	x: "-100%",
	opacity: 0,
	duration: 0.8,
});
gsap.from("#knowledge .items img", {
	scrollTrigger: "#knowledge .items img",
	y: "-100%",
	opacity: 0,
	stagger: 0.2,
});
gsap.from("#works .title", {
	scrollTrigger: "#works .title",
	duration: 0.8,
	x: "100%",
	opacity: 0,
});
gsap.from("#works .item", {
	scrollTrigger: {
		trigger: "#works",
		start: "top 70%",
	},
	stagger: 0.2,
	opacity: 0,
});
gsap.from("#about .title", {
	scrollTrigger: "#contact .title",
	duration: 0.8,
	opacity: 0,
	delay: 0.2,
});
gsap.from("#about .content", {
	scrollTrigger: "#about .content",
	duration: 0.8,
	opacity: 0,
});
gsap.from("#contact .title", {
	scrollTrigger: "#contact .title",
	duration: 0.8,
	opacity: 0,
	x: "-100%",
});
gsap.from("#contact .contact-items a", {
	scrollTrigger: "#contact .title",
	stagger: 0.2,
	y: "-100%",
	opacity: 0,
});

const menuToggle = document.querySelector(".menu-icon");
const menuOverlay = document.querySelector("#menu .overlay");
const closeBtn = document.querySelector("#menu .close");
const menuItems = document.querySelectorAll("#menu .items a");

menuToggle.addEventListener("click", function () {
	menuOverlay.classList.remove("hidden");
	gsap.fromTo(
		"#menu .items a",
		{
			y: "-100%",
			opacity: 0,
		},
		{
			y: "0%",
			stagger: 0.2,
			opacity: 1,
			ease: "power3.inOut",
		}
	);
});
closeBtn.addEventListener("click", async function () {
	await gsap.fromTo(
		"#menu .items a",
		{
			y: "0%",
			opacity: 1,
		},
		{
			y: "-100%",
			stagger: 0.2,
			opacity: 0,
			ease: "power3.inOut",
		}
	);
	menuOverlay.classList.add("hidden");
});
menuItems.forEach((item) => {
	item.addEventListener("click", function () {
		menuOverlay.classList.add("hidden");
	});
});
