document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.querySelector(".comments");
  
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = commentForm.querySelector("#name").value;
      const comment = commentForm.querySelector("#comment").value;
  
      if (name && comment) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;
        commentsContainer.appendChild(commentElement);
  
        commentForm.reset();
      }
    });
  });