import { KaboomCtx } from "kaboom";

export function displayDialog(text: string, onDisplayEnd: () => void) {
  const dialogUI = document.getElementById("textbox-container")!;
  const dialog = document.getElementById("dialog")!;

  dialogUI.style.display = "block";

  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialog.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 1);

  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogUI.style.display = "none";
    dialog.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn?.removeEventListener("click", onCloseBtnClick);
  }

  closeBtn?.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(k: KaboomCtx) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }
  k.camScale(k.vec2(1.5));
}
