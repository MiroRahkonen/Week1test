if (document.readyState !== "loading") {
  console.log("Document is ready");
  initialize();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initialize();
  });
}

function initialize() {
  const printButton = document.getElementById("my-button");
  const addDataButton = document.getElementById("add-data");
  const topText = document.getElementById("top-text");
  const list = document.getElementById("list");

  printButton.addEventListener("click", function () {
    console.log("Hello world");
    topText.innerText = "My notebook";
  });

  addDataButton.addEventListener("click", function () {
    const newData = document.createElement("li");
    newData.innerText = document.getElementById("data").value;
    list.appendChild(newData);
  });
}

/*asdasdasda*/
