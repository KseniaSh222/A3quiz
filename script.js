function checkAnswers() {
  const animalScores = {
    cat: 0,
    dog: 0,
    fox: 0,
    dolphin: 0,
    deer: 0,
    bear: 0
  };

  const totalQuestions = 12;

  for (let i = 1; i <= totalQuestions; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (!selected) {
      document.getElementById("result").textContent =
        `Please answer question ${i} before submitting.`;
      return;
    }

    const animals = selected.value.split(",");

    animals.forEach(animal => {
      animalScores[animal.trim()]++;
    });
  }

  let topScore = Math.max(...Object.values(animalScores));

  const winners = Object.keys(animalScores).filter(
    animal => animalScores[animal] === topScore
  );

  const animalDescriptions = {
    cat: "Cat — independent, selective, and protective of your comfort and space.",
    dog: "Dog — social, open, and energized by connection and healthy competition.",
    fox: "Fox — clever, strategic, independent, and quick to adapt.",
    dolphin: "Dolphin — social, flexible, and comfortable sharing life with familiar people.",
    deer: "Deer — cautious, observant, gentle, and comfortable with steady effort.",
    bear: "Bear — private, strong on boundaries, steady, and drawn to comfort and low-conflict environments."
  };

  let resultText = "";

  if (winners.length === 1) {
    const winner = winners[0];
    resultText =
      `Your animal is: ${winner.toUpperCase()}\n\n${animalDescriptions[winner]}`;
  } else {
    resultText =
      `You are a mix of: ${winners.map(w => w.toUpperCase()).join(", ")}\n\n`;
    winners.forEach(winner => {
      resultText += `${animalDescriptions[winner]}\n`;
    });
  }

  resultText += `\nScores:\n`;
  resultText += `Cat: ${animalScores.cat}\n`;
  resultText += `Dog: ${animalScores.dog}\n`;
  resultText += `Fox: ${animalScores.fox}\n`;
  resultText += `Dolphin: ${animalScores.dolphin}\n`;
  resultText += `Deer: ${animalScores.deer}\n`;
  resultText += `Bear: ${animalScores.bear}`;

  document.getElementById("result").textContent = resultText;
}