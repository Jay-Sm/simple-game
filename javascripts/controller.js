const player = document.querySelector(".js-player");

document.addEventListener("keypress", (event) => {
  // player.style.top = 0
  let topCords = parseInt(player.style.top);
  let leftCords = parseInt(player.style.left);

  switch (event.key) {
    case "w":
      setTimeout(() => {
        topCords -= 60;

        player.style.top = topCords + "px";
      }, 150);

      break;

    case "a":
      setTimeout(() => {
        leftCords -= 60;

        player.style.left = leftCords + "px";
      }, 150);

      break;

    case "d":
      setTimeout(() => {
        leftCords += 60;

        player.style.left = leftCords + "px";
      }, 150);
      break;

    case "s":
      setTimeout(() => {
        topCords += 60;

        player.style.top = topCords + "px";
      }, 150);
      break;
  }
});
