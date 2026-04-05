function checkAnswers() {
  const aS = {
    cat: 0,
    dog: 0,
    fox: 0,
    dolphin: 0,
    deer: 0,
    bear: 0
  };
  const tQ= 12;
  for (let i= 1;i<= tQ;i++){
    const sel=document.querySelector(`input[name="q${i}"]:checked`);
    if(!sel) {
      document.getElementById("result").textContent =
        `Please answer question ${i} before submitting.`;
      return;
    }
    const a= sel.value.split(",");
    a.forEach(an =>{
      aS[an.trim()]++;
    });}
  const tS = Math.max(...Object.values(aS));
  const ws= Object.keys(aS).filter(an => aS[an] === tS);
  const anDescriptions =
  {
    cat: "You sure have an odd lifestyle, but whatever works for you mr. MeowMeow",
    dog: "Your energy scares me",
    fox: "Be proud! Fictional foxes are loved by masses. Maybe a bit too much.",
    dolphin: "Blup blup blup or whatever",
    deer: "You might be kidnapped in December",
    bear: "Panda bear? Grizzly bear? Polar bear? That's up to you"
  };
  let rText= "";
  if (ws.length=== 1) {
    const w=ws[0];
    rText=`Your animal is: ${w.toUpperCase()}\n\n${anDescriptions[w]}`;
  } 
  else 
    {
    rText = `You are a mix of: ${ws.map(w => w.toUpperCase()).join(", ")}\n\n`;
    rText += "I'm not sure what you are...";
  }

  document.getElementById("result").textContent = rText;
}
document.getElementById("seeResultBtn").addEventListener("click", checkAnswers);
document.getElementById("resetBtn").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("result").textContent =
      "Your match will appear here after you answer all questions.";
  }, 0);
});
