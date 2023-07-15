const player = document.querySelector(".js-player");

document.addEventListener("keypress", (event) => {
  // player.style.top = 0
  let topCords = parseInt(player.style.top);
  let leftCords = parseInt(player.style.left);

  switch (event.key) {
    case "w":
      setTimeout(() => {
        let WTopCords = topCords;
        if ((WTopCords -= 59) > 60) {
          topCords -= 60;

          player.style.top = topCords + "px";
        } else {
          console.error("Out Of Bounds Movment Attempted");
        }
      }, 150);

      break;

    case "a":
      setTimeout(() => {
        let ALeftCords = leftCords;
        if ((ALeftCords -= 59) > 60) {
          leftCords -= 60;

          player.style.left = leftCords + "px";
        } else {
          console.error("Out Of Bounds Movment Attempted");
        }
      }, 150);

      break;

    case "d":
      setTimeout(() => {
        let DLeftCords = leftCords;
        if ((DLeftCords += 59) < 1380) {
          leftCords += 60;

          player.style.left = leftCords + "px";
        } else {
          console.error("Out Of Bounds Movment Attempted");
        }
      }, 150);
      break;

    case "s":
      setTimeout(() => {
        let DLeftCords = topCords;
        if ((DLeftCords += 59) < 721) {
          topCords += 60;

          player.style.top = topCords + "px";
        } else {
          console.error("Out Of Bounds Movment Attempted");
        }
      }, 150);
      break;
  }
});
