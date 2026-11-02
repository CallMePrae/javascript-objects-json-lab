(function(){
    console.info("Hello JS");
})();


const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
hrHand.style.backgroundColor = "#0f0";

const myNode = document.createElement("div");
digitalClock.appendChild(myNode);

const updateTime = () => {
    console.info("Updating time");
    const myDate = new Date();
    
    myNode.innerHTML = myDate.toLocaleTimeString ("en-GB", {timeStyle: "medium"});  

    //analoge clock
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;


};
setInterval(updateTime, 1000);
updateTime();
