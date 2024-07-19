export function showNoti(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correctL, wrongL, selectedWord) {
  let status = "win";

  //check for win
  selectedWord.split("").forEach((letter) => {
    if (!correctL.includes(letter)) {
      status = "";
    }
  });

  //check for loss
  if (wrongL.length === 6) status = "lose";

  return status;
}
