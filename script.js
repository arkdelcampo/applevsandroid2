// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style; Accesses the CSS rule for the "some-id" element.

// document.getElementById("some-id").style.border = "2px solid black";

// document.getElementById("some-id").src = "images/newpic.jpg" // Changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com" // Changes the hyperlink

// Changing an image vs adding a new image.
// To add an image where there wasn't one before, you need a container for the image in HTML.
// Containers are empty <p>, <h1>, or <div> elements.
// For E.g. In html: <div id="img-container"> </div>

// document.getElementById("img-container").innerHTML = "<img src='images/pic.jpg'>"

// Apple vs Android
document.getElementById("android").addEventListener("click", changeToAndroid);
document.getElementById("apple").addEventListener("click", changeToApple);

function changeToAndroid() {
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("the-link").innerHTML = "Android Home";
  document.getElementById("the-link").style.background = "#a4c93b";
  document.getElementById("the-link").href = "https://www.android.com";
  document.getElementById("the-html").style.background = "#a4c93b";
  document.getElementById("the-body").style.fontFamily =
    " 'Roboto', sans serif ";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
}

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("the-link").innerHTML = "Apple Home";
  document.getElementById("the-link").style.background = "#b6bcca";
  document.getElementById("the-link").href = "https://www.apple.com";
  document.getElementById("the-html").style.background = "#b6bcca";
  document.getElementById("the-body").style.fontFamily =
    " 'Brygada 1918', serif ";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}
