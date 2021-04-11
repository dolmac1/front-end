import "./모달.css";

const open_modal = document.getElementById("open");
const close_modal = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open_modal.onclick = () => {
  modal.style.display = "flex";
};

close_modal.onclick = () => {
  modal.style.display = "none";
};
