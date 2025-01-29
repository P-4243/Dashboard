
export function toggleDropdown(event) {
    event.preventDefault();
    const parentLi = event.target.parentNode;
    const dropdown = parentLi.querySelector(".dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
  }
  