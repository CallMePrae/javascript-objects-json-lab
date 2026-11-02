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
    const minutes = myDate.getMinutes() + seconds / 60;
  const rotMinutes = minutes * 6 - 90;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;
     const hours = myDate.getHours() % 12 + minutes / 60;
  const rotHours = hours * 30 - 90; // 360° / 12 = 30° per hour 
    hrHand.style.transform = `rotate(${rotHours}deg)`;


};
setInterval(updateTime, 1000);
updateTime();

