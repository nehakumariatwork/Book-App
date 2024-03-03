const button = document.querySelector(".button")
const form = document.querySelector(".form")
const newdiv = document.querySelector(".Container")
button.addEventListener("click", function () {
    form.style.display = "block"
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.printBookDetails = function () {
        console.log(`${title} ${author} ${pages} `)
    }

}

let listBook = []
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const bookAdd = new Book(form.title.value, form.author.value, form.pages.value)
    listBook.push(bookAdd)
    form.style.display = "none"
    displayBook(listBook.length - 1);
    form.title.value = ""
    form.author.value = ""
    form.pages.value = ""
})

function displayBook(index) {
    let div = document.createElement("div")
    div.style.margin = "10px"
    div.style.width = "auto"
    div.setAttribute("class", "carDiv")

    let para = document.createElement("p")
    div.appendChild(para)
    newdiv.appendChild(div)
    para.textContent = listBook[index].title

    let para1 = document.createElement("p")
    div.appendChild(para1)
    newdiv.appendChild(div)
    para1.textContent = listBook[index].author

    let para2 = document.createElement("p")
    div.appendChild(para2)
    newdiv.appendChild(div)
    para2.textContent = listBook[index].pages

    let readButton = document.createElement("Button")
    readButton.setAttribute("class", "cardButton")
    readButton.textContent = "READ"
    div.appendChild(readButton)
    readButton.style.backgroundColor = "chartreuse"
    readButton.style.margin = "10px"

    let click = false;

    readButton.addEventListener("click", function () {
        if (click === true) {
            readButton.style.backgroundColor = "chartreuse"
            readButton.textContent = "READ"
            click = false
        }
        else {
            readButton.style.backgroundColor = "red"
            readButton.textContent = "Not Read"
            click = true

        }
    })

    let removeButton = document.createElement("Button")
    removeButton.setAttribute("class", "cardButton1")
    removeButton.textContent = "REMOVE"
    div.appendChild(removeButton)
    removeButton.style.backgroundColor = "darkgray"

    removeButton.addEventListener("click", () => {
        div.style.display = "none"
    })






}