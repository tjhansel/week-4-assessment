module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "All your hard work will soon pay off.",
            "Do not let your limitations overshadow your talents.",
            "Hard work pays off in the future, laziness pays off now.",
            "Land is always on the mind of a flying bird.",
            "The love of your life is stepping into your planet this summer.",
            "An unexpected gift will soon be yours."
          ];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    }
}