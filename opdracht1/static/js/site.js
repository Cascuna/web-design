// function showModal(event) {
//   let imageGal = document.getElementById("image-gallery");

//   console.log((imageGal.style.opacity = 0));
// }

const slideShowItems = [
  {
    name: "Zach afron",
    title: "Firewatch/Rick and Morty Wallpaper",
    image: "./img/hero2.jpg"
  },
  {
    name: "Succ-er Burgh",
    title: "Making moneys",
    image: "./img/hero3.jpg"
  }
];

{
  function slideImages(event) {
    console.log(event);
    let currTarget = event.target;
    var slideShow = document.getElementById("slide-show");
    let slideShowNav = document.getElementById("slide-show-nav");
    let newIndex = currTarget.getAttribute("data-index");
    let oldIndex = slideShowNav.getAttribute("data-current-item");
    if (oldIndex != newIndex) {
      slideShowNav.setAttribute("data-current-item", newIndex);
      let newContent = slideShowItems[newIndex];
      let originalImage = slideShow.querySelector("img");
      console.log(document.getElementById("background-img-" + newIndex));
      if (document.getElementById("background-img-" + newIndex)) {
        console.log("???");
        var newImage = document.getElementById("background-img-" + newIndex);
        newImage.className = "";
      } else {
        var newImage = document.createElement("img");
        newImage.src = newContent.image;
      }
      console.log(newIndex > oldIndex);
      originalImage.className = "";
      newIndex > oldIndex
        ? originalImage.classList.add("right-animated-image")
        : originalImage.classList.add("left-animated-image");
      slideShow.insertBefore(newImage, originalImage);

      let titleContainer = document.getElementById("image-title");
      let artistContainer = document.getElementById("artist-name");
      artistContainer.style.opacity = 0;
      titleContainer.style.opacity = 0;

      setTimeout(() => {
        titleContainer.innerHTML = newContent.title;
        artistContainer.innerHTML = "door " + newContent.name;
      }, 300);

      setTimeout(() => {
        //   TODO: Why it wont work on title?
        titleContainer.classList.add("pop-animation");
      }, 650);

      setTimeout(() => {
        artistContainer.classList.add("pop-animation");
      }, 850);
      titleContainer.classList.remove("pop-animation");
      artistContainer.classList.remove("pop-animation");

      if (document.getElementsByClassName("active")[0]) {
        document.getElementsByClassName("active")[0].classList.remove("active");
      }
      currTarget.classList.add("active");
    }
  }

  function exit(dis) {
    let firstSection = document.getElementById("primary-content");
    firstSection.style.display = "";
    let detailContainer = document.getElementById("detail-container");
    document.body.removeChild(detailContainer);
  }

  function openPopup(event) {
    let url = event.getAttribute("data-href");
    console.log(url);
    if (window.fetch) {
      fetch("/" + url).then(htmlpage => {
        var dummyDiv = document.createElement("div");
        htmlpage.text().then(text => {
          dummyDiv.innerHTML = text;
          let actualDiv = dummyDiv.querySelector("#detail-container");
          console.log(actualDiv);

          let firstSection = document.getElementById("primary-content");
          firstSection.style.display = "none";
          document.body.insertBefore(actualDiv, firstSection);
          window.scrollTo(0, 0);
        });
      });
      event.preventDefault();

      // event.preventDefault
      //   ? event.preventDefault()
      //   : (event.returnValue = false);
    }
  }
}
