let intro = document.querySelector(".introscreen")
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")
let id = document.getElementById("character-card")
let music = document.querySelector("#music")
let volume = document.querySelector("#volume")
let cardLink = document.getElementById("card-link")
let reveal = document.getElementById("show-more")
let searchInput = document.querySelector("[data-search]")



searchInput.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
})

window.addEventListener ('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active");
            } , (idx + 1) * 400)
        })

        setTimeout(() => {
            logoSpan.forEach((span, idx) =>{


                setTimeout (() => {
                    span.classList.remove("active");
                    span.classList.add("fade")
                }, (idx + 1) ** 50)
            })
        },2000);

        setTimeout(() => {
            intro.style.top = "-100vh"
        },2300)

    })
})

fetch("/persona.json")
  .then((response) => response.json())
  .then((persona) => {
    

    // console.log(persona)

    let characters = persona.results.characters

    // console.log(characters)



    for (let char = 0; char < characters.length; char++){
        let name = characters[char].name
        // let charSite = characters[char].site_detail_url
        // window.open(charSite, "_self")
        // console.log (name)
    }

    for (let image = 0; image < imageList.length; image++) {
        let imageName = imageList[image].split(".")[0]
    
        if (imageName === characters[image].name) {
            let characterImage = document.createElement("img");
            // console.log(imageName,characters[image].name)

            console.log(imageName)


            
            characterImage.addEventListener("click", (event) => {
            let character = characters[image]
            character.imageUrl = imageList[image]
            let charSite = characters[image].site_detail_url
            window.open(charSite, "_self")
            

            localStorage.setItem('Traits' + image, JSON.stringify(character));
            // window.open("index2.html", "_self")
       
            // Get saved data from localStorage
            // localStorage.getItem('Traits') ? JSON.parse(localStorage.getItem('Traits')) : '';

            })

            
            characterImage.src = "characters/" + imageList[image]
            
            
            cardLink.append(characterImage);
        }
    }

  })