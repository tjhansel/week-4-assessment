const complimentBtn = document.getElementById("complimentButton")
const complimentDiv = document.querySelector("#complimentCat")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneDiv = document.querySelector("#fortuneFrog")
const nameInput = document.querySelector("input")

const clearComp = ()=>{
    complimentDiv.innerHTML =`Complement Cat says:`
}
const clearFort =()=>{
    fortuneDiv.innerHTML =`Fortune Frog says:`
}

const getCompliment = () => {
    
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            // alert(data);
            const compliment = document.createElement(`h3`)
            compliment.textContent = data
            complimentDiv.appendChild(compliment)
    });clearComp()
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res =>{
            const fortuneData = res.data;
            //console.log()
            const fortune = document.createElement('h3')
            fortune.textContent = fortuneData
            fortuneDiv.appendChild(fortune)
        });clearFort()
};

const getName = (evt) =>{
    evt.preventDefault()
    axios.post("http://localhost:4000/api/compliment/")
        .then(res => {
            let data = res

        })
}


nameInput.addEventListener('submit', getName)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)