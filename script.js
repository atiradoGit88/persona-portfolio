let intro = document.querySelector(".introscreen")
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")
let music = document.querySelector("#music")
let volume = document.querySelector("#volume")
let cardLink = document.getElementById("card-link")
let reveal = document.getElementById("show-more")
let characterSelector = document.getElementById("character-selector")
let Allcharacters =[]



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
      let Allcharacters = persona.results.characters
    
      // console.log(persona)
      
      
      
      populateForm(Allcharacters)
  })
    let populateForm = Allcharacters => {
        for (const names of Allcharacters) {
            console.log(Allcharacters)
        }
    }

    for (let char = 0; char < Allcharacters.length; char++){
        let name = Allcharacters[char].name
        // let charSite = characters[char].site_detail_url
        // window.open(charSite, "_self")
        // console.log (name)
    }
    


    fetch("/persona.json")
    .then((response) => response.json())
    .then((persona) => {
        let Allcharacters = persona.results.characters
      
        // console.log(persona)
        
        
        
        
    
    let counter = 0
    for (let image = 0; image < imageList.length; image++) {
        let imageName = imageList[image].split(".")[0]
        counter += 1


        if (counter <= 10){
        if (imageName === Allcharacters[image].name) {
            let characterImage = document.createElement("img");
            // console.log(imageName,characters[image].name)

            
            
            characterImage.addEventListener("click", (event) => {
            let character = Allcharacters[image]
            character.imageUrl = imageList[image]
            let charSite = Allcharacters[image].site_detail_url
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
    }

  })