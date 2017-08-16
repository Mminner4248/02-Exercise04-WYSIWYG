console.log("wysiwyg.js")
let personCard = document.getElementById("person");
var counter = 0;

let personList = [
    {
       title: "Onna Bugeisha",
       name: "Tomoe Gozen",
       bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
       image: "/imgs/Tomoe.jpg",
       lifespan: "birth: 1747, death: 1797"   
    },
    {
       title: "Daimyo",
       name: "Oda Nobunaga",
       bio: "Oda Nobunaga was a powerful Daimyō of Japan in the late 16th century who attempted to unify Japan during the late Sengoku period.",
       image: "/imgs/Odanobunaga.jpg",
       lifespan: "birth: 1534, death: 1582"   
    },
    {
       title: "Uniter of Japan",
       name: "Toyotomi Hideyoshi",
       bio: "Toyotomi Hideyoshi was a preeminent daimyō, warrior, general, samurai, and politician of the Sengoku period who is regarded as Japan's second great unifier.",
       image: "/imgs/Toyotomi.jpg",
       lifespan: "birth: 1537, death: 1598"  

    },
    {
       title: "Shogun",
       name: "Tokugawa Ieyasu",
       bio: "Tokugawa Ieyasu was the founder and first shogun of the Tokugawa shogunate of Japan, which effectively ruled Japan from the Battle of Sekigahara in 1600 until the Meiji Restoration in 1868.",
       image: "/imgs/Tokugawa.jpg",
       lifespan: "birth: 1543, death: 1616"
    }  
];

for (let i = 0; i < personList.length; i++){
    let personTitle = personList[i].title;
    let personName = personList[i].name;
    let personBio = personList[i].bio;
    let personImage = personList[i].image;
    let personLife = personList[i].lifespan;

    let PersonCard = `<person class="card">
                    <header class="card-header">${personTitle} : ${personName}</header><br><br>
                    <section class="card-section"><img src="${personImage}" class="card-images"><br><br>
                    </section>
                    <personText>
                            ${personBio}
                    </personText>
                    <footer class="card-footer">${personLife}</footer>
                    </person>`;

    var personHolder = document.getElementById("cardBox");
    personHolder.innerHTML += PersonCard;
};

//create an eventListener that targets the card the use clicked on, and adds a dotted border and allows you to edit the bio from the text box above.
var containerEl = document.getElementsByClassName("card");

console.log("container", containerEl);
console.log(typeof containerEl);

var selected = null;

Array.prototype.forEach.call(containerEl, (card)=>{
    card.addEventListener("click", (event)=>{
        if(selected){
            selected.className = selected.className.split(" ").filter(w => w !== "selected" ).join(" ");
        }
        selected = event.currentTarget;
        selected.className += " selected";  
    })
})

var input = document.getElementsByClassName("textBox")[0];

input.addEventListener("keyup", (e)=> {
    if(selected){
        var text = document.createTextNode(e.currentTarget.value)
        selected.replaceChild(text, selected.childNodes[7])
    } 
     if(13 === e.which){
         e.preventDefault();
        console.log("keys");
        e.currentTarget.value = "";
    }
})






