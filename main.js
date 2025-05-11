
let container = document.getElementById("container");

const characters = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        const names = data.results.map(result => result.name)
        const photos = data.results.map(result => result.image)
        // names.map(name => {
        //    
        //     card.innerText = name;
        //     container.appendChild(card)
        // })
        // photos.map(photo => {
        //     let img = document.createElement("img");
        //     img.src = photo;
        //     console.log(img)
        // })

        data.results.map(result => {
            let card = document.createElement("div");   
            card.classList.add("card");
            card.innerText = result.name

            let img = document.createElement("img");
             img.src = result.image;
             card.appendChild(img)

            container.appendChild(card)
        });




    } catch (err) {
        console.log(err)
    }
}


characters();