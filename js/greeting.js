const login = document.querySelector("#login");
const loginForm = login.querySelector(".login-form");
const loginInput = login.querySelector("input[type='text']");

const greeting = document.querySelector("#greeting");
const greetingForm = greeting.querySelector(".greeting-form");
const greetingComment = greeting.querySelector(".greeting-comments");
const greetingName = greeting.querySelector(".greeting-name");
const editBtn = greeting.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	login.classList.add(HIDDEN_CLASSNAME);

	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);

	paintGreetings(username);
}

function paintGreetings(username) {
	const time = new Date();
	const getHours = time.getHours();

	let greetingComments = ""; 

	if (getHours >= 5 && getHours < 12 ) {
		greetingComments = "Morning";
	} else if (getHours >= 12 && getHours < 18) {
		greetingComments = "Afternoon";
	} else if (getHours >= 18 && getHours < 22) {
		greetingComments = "evening";
	} else if (getHours >= 22 || getHours < 5) {
		greetingComments = "night";
	}

	greetingComment.innerText = `Good ${greetingComments},`;
	greetingName.innerText = username;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function editUserName(e)  {
	e.preventDefault();

	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "edit your name");
	input.setAttribute("maxlength", 15)
	input.classList.add("edit-name");
	greetingName.appendChild(input);

	const editName = document.querySelector(".edit-name");
	editName.focus();
	editBtn.style.pointerEvents = "none";

	const editUserNameSubmit = () => {
		if (editName.value) {
			username = editName.value;
			localStorage.setItem(USERNAME_KEY, username);
			greetingName.innerText = username;
		} else {
			username = localStorage.getItem(USERNAME_KEY);
			greetingName.innerText = username;
		}
		editBtn.style.pointerEvents = "auto";
	}

	greetingForm.addEventListener("submit", (e) => {
		e.preventDefault();
		editUserNameSubmit();
	});

	document.querySelector("#backgrounds").addEventListener("click", () => {
		editUserNameSubmit();
	});	
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	login.classList.remove(HIDDEN_CLASSNAME);   
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
	editBtn.addEventListener("click", editUserName);
}

