let intro = document.querySelector(".introscreen");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let music = document.querySelector("#music");
let volume = document.querySelector("#volume");
let cardLink = document.getElementById("character-card");
let reveal = document.getElementById("show-more");
let characterSelector = document.getElementById("character-selector");
let Allcharacters =[];
let searchBar = document.querySelector(".search-bar");
let showMore = document.querySelector("#show-more");
let numberDisplayed = 12




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
            // console.log(Allcharacters)
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
        Allcharacters = persona.results.characters
      
        // console.log(Allcharacters)
        
        let counter = 0
        
        showMore.addEventListener("click", event => {
            numberDisplayed += 12
          for (let image = counter + 1; image < numberDisplayed; image++){
            
          let imageName = imageList[image].split(".")[0]
          counter = image 


        if (counter <= numberDisplayed){
        if (imageName === Allcharacters[image].name) {
            let characterCard = document.createElement("div");
            let characterImage = document.createElement("img");
            let characterLink = document.createElement("a");
           
            characterCard.className = "image-card";

            
            characterImage.src = "characters/" + imageList[image];
            characterLink.href = Allcharacters[image].site_detail_url;
            characterLink.textContent = "Calling Card";
            characterLink.target = "blank";
            
            localStorage.setItem('Traits' + image, JSON.stringify(Allcharacters[image]));

            
            
            characterCard.append(characterImage);
            characterCard.append(characterLink);
            cardLink.append(characterCard);
        
            }
        }
          }
        })
        
        
    
    for (let image = 0; image < numberDisplayed; image++) {
        let imageName = imageList[image].split(".")[0]
          counter = image


        if (counter <= numberDisplayed){
        if (imageName === Allcharacters[image].name) {
            let characterCard = document.createElement("div");
            let characterImage = document.createElement("img");
            let characterLink = document.createElement("a");
           
            characterCard.className = "image-card";

            
            characterImage.src = "characters/" + imageList[image];
            characterLink.href = Allcharacters[image].site_detail_url;
            characterLink.textContent = "Calling Card";
            characterLink.target = "blank";
            
            localStorage.setItem('Traits' + image, JSON.stringify(Allcharacters[image]));

            
            
            characterCard.append(characterImage);
            characterCard.append(characterLink);
            cardLink.append(characterCard);
        
            }
        }
    }

  })

  searchBar.querySelector("button").onclick = () => {
    let input = searchBar.querySelector('input').value;
    let cards = cardLink.querySelectorAll(".image-card");
    let filteredList = Allcharacters.filter((character, i) => {
        character.index = i
        return character.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        }
    )
            let characterCard = document.createElement("div");
            let characterImage = document.createElement("img");
            let characterLink = document.createElement("a");
           
            characterCard.className = "image-card";

            
            characterImage.src = "characters/" + imageList[filteredList[0].index];
            characterLink.href = Allcharacters[filteredList[0].index].site_detail_url;
            characterLink.textContent = "Calling Card";
            characterLink.target = "blank";
            
            // localStorage.setItem('Traits' + image, JSON.stringify(Allcharacters[image]));

            
            
            characterCard.append(characterImage);
            characterCard.append(characterLink);
            cardLink.append(characterCard);
    
    
    // if search input is empty show all characters
  
    //if the search bar input matches name, show those characters 

    //if the search input matches nobody, display "no characters found..."
  }