const myImage = document.querySelector("img");

myImage.addEventListener("click",() => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/giraffe.png") {
        myImage.setAttribute("src","assets/giraffe2.png");
    } else {
        myImage.setAttribute("src","assets/giraffe.png");
    }
});

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUsername() {
    if (!myName) {
        setUsername();
    } else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");    
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUsername();
});