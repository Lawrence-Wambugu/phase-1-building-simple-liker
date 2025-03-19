// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Wait for the DOM to load

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  // Ensure modal is hidden when the page loads
  if (modal) {
    modal.classList.add("hidden");
  } else {
    console.error("Modal element not found!");
  }

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === "♡") {
            heart.textContent = "♥";
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = "♡";
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          if (modal) {
            modal.classList.remove("hidden");
            document.getElementById("modal-message").textContent = error;

            setTimeout(() => {
              modal.classList.add("hidden");
            }, 3000);
          }
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
