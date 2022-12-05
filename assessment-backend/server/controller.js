module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) =>{
        const fortune = ["A hunch is creativity trying to tell you something.","All the troubles you have will pass away very quickly.","Change is happening in your life, so go with the flow!","Feeding a cow with roses does not get extra appreciation.","Go for the gold today! You'll be the champion of whatever.","Now is the time to try something new."];
        let randomizer = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomizer];

        res.status(200).send(randomFortune);
    },
    // addName: (req, res)=>{
    //     let{name}= req.body
    //     let yourName = 
    // },
}