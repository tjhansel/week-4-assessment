const complimentBtn = document.getElementById("complimentButton")
const complimentDiv = document.querySelector("#complimentCat")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneDiv = document.querySelector("#fortuneFrog")
const inputName = document.getElementById("nameInput")
const inputForm = document.querySelector("form") // I couldn't figure out how to add the name here. The value kept coming back as null. I was trying to add a place holder but nothing worked. It seems so easy to just have someone add their name, but it was not.
console.log(inputName)

const clearComp = ()=>{
    complimentDiv.innerHTML =`Complement Cat says:`
}
const clearFort =()=>{
    fortuneDiv.innerHTML =`Fortune Frog says:`
}
function getName() {
    var name = document.getElementById("#nameInput").value;
    document.getElementById("#nameInput").innerHTML = name;
  } // at this point I am not even sure this code goes here. Maybe it belongs in the controller file? Who knows?


const getCompliment = () => {
    clearComp()
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            // alert(data);
            const compliment = document.createElement(`h3`)
            compliment.textContent = data
            complimentDiv.appendChild(compliment)
    });
};

const getFortune = () => {
    clearFort()
    axios.get("http://localhost:4000/api/fortune/")
        .then(res =>{
            const fortuneData = res.data;
            //console.log()
            const fortune = document.createElement('h3')
            fortune.textContent = fortuneData
            fortuneDiv.appendChild(fortune)
        });
};

const addName = (evt) =>{
    evt.preventDefault()
    let inputObj = {
        nameInput:inputName.value
    }  
    axios.post("http://localhost:4000/api/name", inputObj)
        .then(res => {
            let name = res.data
            alert(name)
        })
}
// I would have also added a axios.post here to allow the user to add a compliment to the listed compliments.

inputForm.addEventListener('submit', addName)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)