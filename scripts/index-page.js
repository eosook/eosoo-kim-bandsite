let comments = [
    {
        name: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "11/02/2023"
    },
    {
        name: "Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "10/28/2023"
    },
    {
        name: "Isaac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "10/20/2023"
    }
]

const commentSection = document.querySelector(".comments");

function createCommentElement(type, className, text, parent){
    let commentElement = document.createElement(type);
    commentElement.classList.add(className);
    commentElement.innerText = text;
    parent.append(commentElement);
}

function createComment(comment){
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comments__container");
    let commentContainerInfo = document.createElement("div");
    commentContainerInfo.classList.add("comments__info");
    let commentPhoto = document.createElement("div");
    commentPhoto.classList.add("comments__photo");
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comments--flex");
    createCommentElement("p", "comments__name", comment.name, commentDiv);
    createCommentElement("p", "comments__date", comment.date, commentDiv);
    commentContainerInfo.appendChild(commentDiv);
    createCommentElement("p", "comments__comment", comment.comment, commentContainerInfo);
    commentContainer.append(commentPhoto, commentContainerInfo);
    commentSection.appendChild(commentContainer);
}

comments.forEach((comment) => {
    createComment(comment);
})