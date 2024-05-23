import {BandSiteApi} from "./band-site-api.js";

const commentSection = document.querySelector(".comments__list");
const commentForm = document.querySelector(".form");

const myApiKey = "11173e92-77d4-4ea9-bddd-e747183daf47";
let bandSiteData = new BandSiteApi(myApiKey);

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
    createCommentElement("div", "comments__photo", " " , commentContainer)
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comments--flex");
    createCommentElement("p", "comments__name", comment.name, commentDiv);
    const commentDate = new Date(comment.timestamp);
    createCommentElement("p", "comments__date", commentDate.toLocaleDateString(), commentDiv);
    commentContainerInfo.appendChild(commentDiv);
    createCommentElement("p", "comments__comment", comment.comment, commentContainerInfo);
    commentContainer.append(commentContainerInfo);
    commentSection.append(commentContainer);
}

function createCommentSection(comments){
    comments.forEach((comment) => {
        createComment(comment);
    })
}

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date();
    const newComment = {
        name: e.target.personName.value,
        comment: e.target.personComment.value,
        // date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
    postComment(newComment);
})

async function postComment(comment){
    await bandSiteData.postComment(comment);
    commentSection.innerHTML = "";
    getComments();
    commentForm.reset();
}

async function getComments(){
    const comments = await bandSiteData.getComments();
    console.log(comments)
    createCommentSection(comments);
}

getComments();