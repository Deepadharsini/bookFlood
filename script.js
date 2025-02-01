var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton  =document.getElementById("add-popup-button")
function popup(){
    popupoverlay.style.display ="block"
    popupbox.style.display="block"
}
// function closepopup(){       not necessary
//     popupoverlay.style.display ="none"
//     popupbox.style.display="none"
// }
var cancelpopup = document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
 event.preventDefault()
 popupoverlay.style.display ="none"
 popupbox.style.display="none"
})
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var description = document.getElementById("description-input")
var author = document.getElementById("author-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =  document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
                      <h5>${author.value}</h5>
                       <p>${description.value}</p>
                       <button onclick ="deletebox(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display ="none"
    popupbox.style.display="none"
})
function deletebox(event){
    event.target.parentElement.remove()
}

