let fact_gen = document.querySelector('.fact_gen')
let fact_gen2 = document.querySelector('.fact_gen2')

fact_gen.addEventListener("click", function() {  
    document.getElementById('beans').innerHTML = "";
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(response => { return response.json() })
    .then(data => {
        let fact = data["text"];
        let para = document.createElement("p")
        let thing = document.createTextNode(fact)
        para.appendChild(thing)

        let facts = document.querySelector(".fact")
        facts.appendChild(para)
    })
})

fact_gen2.addEventListener("click", function() {  
    document.getElementById('beans2').innerHTML = "";
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1')
    .then(response => { return response.json() })
    .then(data => {
        let fact = data["text"];
        let para = document.createElement("p")
        let thing = document.createTextNode(fact)
        para.appendChild(thing)

        let facts = document.querySelector(".fact2")
        facts.appendChild(para)
    })
})