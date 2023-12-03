const searchInput = document.getElementById("search-input")
const backgroundSidebar = document.getElementById("backgroundSidebar")

// input date

const inputDate = document.getElementById("myDateInput")
// Set the current date as the default value

if (inputDate) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  inputDate.value = formattedDate;
}



// Trigger the date picker to show on page load

// end
function show() {
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleNavbar() {
  var sidebar = document.getElementById("navbar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
// add newInput
function toggleVisibility() {
  let element = document.getElementById("newInput");
  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
    element.classList.add("d-block");
  } else {
    element.classList.remove("d-block");
    element.classList.add("d-none");
  }
}
function toggleInVisibility() {
  let element = document.getElementById("newInput");
  if (element.classList.contains("d-block")) {
    element.classList.remove("d-block");
    element.classList.add("d-none");
  } else {
    element.classList.remove("d-none");
    element.classList.add("d-block");
  }
}
//   sideBa
let sidebar = document.querySelector(".sideBar");
let content = document.querySelector(".content");
// let meals = document.getElementById("meals");

function handleBtnClose() {
  sidebar.style.right = "-256px";
  console.log("test");
  hiddenBackgroundSidebar()
}

if (sidebar) {
  sidebar.style.right = "-256px";
  content.style.marginRight = "0";
  // meals.style.marginRight = "0";
}

function showBackgroundSidebar() {
  backgroundSidebar.style.display = "block"
}

function hiddenBackgroundSidebar() {
  backgroundSidebar.style.display = "none"
}



function toggleSidebar() {
  // let sidebar = document.querySelector(".sideBar");
  // let content = document.querySelector(".content");
  // let meals = document.getElementById("meals");

  // if (sidebar.style.right === "-256px") {
  //   sidebar.style.right = "0 !important";
  //   // content.style.marginRight = "256px";
  //   // meals.style.marginRight = "256px";
  // } else {
  //   sidebar.style.right = "-256px";
  //   content.style.marginRight = "0";
  //   // meals.style.marginRight = "0";
  // }

  sidebar.style.right === "-256px" ?
    sidebar.style.right = "-5px" :
    sidebar.style.right = "-256px"

  showBackgroundSidebar()
  // backgroundSidebar.style.display = "block"
}
//   counter
let counters = {};

function updateCounter(cardId) {
  document
    .getElementById(cardId)
    .getElementsByClassName("counter")[0].innerText = counters[cardId];
}

function increment(cardId) {
  if (!counters[cardId]) {
    counters[cardId] = 0;
  }
  counters[cardId]++;
  updateCounter(cardId);
}

function decrement(cardId) {
  if (counters[cardId] && counters[cardId] > 0) {
    counters[cardId]--;
    updateCounter(cardId);
  }
}

//Dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

if (dropdown) {
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}


// =-=-=-=-=-=-==-=-=-==========Dark Mood===============

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleBtn = document.getElementById("toggleBtn");
  const toggleBtnLarg = document.getElementById("toggleBtnLarg");
  const lightModeDiv = document.getElementById("light-mode-div")
  const darkModeDiv = document.getElementById("dark-mode-div")
  const lightModeIcon = document.getElementById("light-mode-icon")
  const darkModeIcon = document.getElementById("dark-mode-icon")
  console.log(lightModeIcon);


  if (localStorage.getItem("dark") === "enabled") {
    enableDarkMode();
  }

  if (toggleBtn || toggleBtnLarg) {
    toggleBtn.addEventListener("click", function () {
      if (body.classList.contains("dark")) {
        // Disable dark mode
        disableDarkMode();
      } else {
        // Enable dark mode
        enableDarkMode();
      }
    });
    toggleBtnLarg.addEventListener("click", function () {
      if (body.classList.contains("dark")) {
        // Disable dark mode
        disableDarkMode();
      } else {
        // Enable dark mode
        enableDarkMode();
      }
    });
  }



  function enableDarkMode() {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    darkModeDiv.classList.replace("not-active-mode-div", "active-mode-div");
    darkModeIcon.classList.replace("not-active-mode-icon", "active-mode-icon");

    lightModeDiv.classList.replace("active-mode-div", "not-active-mode-div");
    lightModeIcon.classList.replace("active-mode-icon", "not-active-mode-icon");
  }

  function disableDarkMode() {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", null);
    lightModeDiv.classList.replace("not-active-mode-div", "active-mode-div");
    lightModeIcon.classList.replace("not-active-mode-icon", "active-mode-icon");

    darkModeDiv.classList.replace("active-mode-div", "not-active-mode-div");
    darkModeIcon.classList.replace("active-mode-icon", "not-active-mode-icon");
  }
});
var activeButton = document.getElementById("activeButton");
var activeButtonWomen = document.getElementById("activeButtonWomen");
// search side
const searchContainer = document.getElementById("search-container");
// console.log(searchContainer);

if (searchInput) {
  function toggleInputSearch() {
    searchInput.focus();
    searchInput.style.display === "none" ?
      searchInput.style.display = "block" :
      searchInput.style.display = "none"
  }
}

if (searchContainer) {
  function hiddenIcons() {
    searchContainer.style.display === "none" ?
      searchContainer.style.display = "block" :
      searchContainer.style.display = "none"
  }
}


console.log(searchContainer);

// if (searchInput && searchContainer) {
function toggleSearchContainer() {
  hiddenIcons()
}

// }


if (activeButton) {
  activeButton.addEventListener("click", function () {
    activeButton.classList.add("activeButton");
    activeButtonWomen.classList.remove("activeButton");
  });

  activeButtonWomen.addEventListener("click", function () {
    activeButton.classList.remove("activeButton");

    activeButtonWomen.classList.add("activeButton");
  });
}





let x = document.getElementById("closeForm");


function toggleDropdown() {
  var dropdown = document.getElementById("notificationDropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

//=======================upload image=================
function previewImage(input) {
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("profile-image").src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}

// edit

const btnSidebarNew = document.getElementById("sideBar")
const sidebarNew = document.getElementById("closeSideBar")

console.log(sidebarNew);

if (btnSidebarNew && sidebarNew) {
  function toggleSidebarNew() {
    sidebarNew.style.right = "-5px"
  }
}
