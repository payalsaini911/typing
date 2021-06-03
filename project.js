const setOfWords=[
    "my name is payal saini and i am a engnieer.",
    "i am a 2nd yr student of b.e. of mbm engnieering college.",
    "i want to become a software engnieer.",
    ];
const msg=document.getElementById('msg');
const typeWords=document.getElementById('mywords');
const btn=document.getElementById('btn');
let startTime,endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const wordCounter = (str) =>{
    let response=str.split(" ").length;
    console.log(response);
    return response;
}
const compareWords = (str1,str2) =>{
    let words1=str1.split(" ");
    let words2=str1.split(" ");
    let cnt=0;

    words1.forEach(function(item,index) {
        if(item == words2[index])
          cnt++;
    })

    let errotWords = (words1.length-cnt);
    return (cnt+" correct out of "+words1.length+" words and the total number of error are "+errotWords + "." );
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr= typeWords.value;
    let wordCount=wordCounter(totalStr);

    let speed=Math.round((wordCount/totalTime)*60);
    let finalmsg="you typed total at " + speed +" words per minutes";
    finalmsg+=compareWords(msg.innerText,totalStr);
    msg.innerText=finalmsg;
}
btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled  = true;
        btn.innerText = "Start";
        endPlay();
    }
});