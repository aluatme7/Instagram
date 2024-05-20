let dataLikes = [123, 25, 0 , 5 , 300 , 586, 375 , 1065 , 6832 , 40392]; 
let dataTexts = ["Я супер енот!", "Ангел не всегда хороший", "Откуда ты знаешь двойника", "Портреты превосходны" , "Не бывает добра и зла" , "Человечность-сила!" ,"Фильм это искусство" , "Во всем есть смысл"] 
let dataImgs = ["https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig", "https://i.pinimg.com/736x/fe/5b/3e/fe5b3eade83efecfca8c557e2fba92e4.jpg", "https://i.pinimg.com/564x/2c/55/4f/2c554f6d6bfd54e83c34dcdb99635da3.jpg", "https://i.pinimg.com/564x/f7/1b/af/f71baf83ff7da3d906fda00d3c1380bb.jpg" , "https://i.pinimg.com/564x/6a/cd/16/6acd16a39b29f8eec0fa8c48540a9816.jpg" , "https://i.pinimg.com/564x/49/9b/2c/499b2c08a7c0cc0cd78298e85be33afb.jpg" , "https://i.pinimg.com/564x/f2/da/33/f2da3392a24071c950b6f489dc9b910f.jpg"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%7]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%10]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%8]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "like(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
} 
 
 
function like(postIndex){ 
    let post = korobkaPostov.children[postIndex + 1]; // +1,
    let numberOfLikes = post.getElementsByClassName("numberOfLikes")[0];
    let currentLikes = parseInt(numberOfLikes.innerHTML);
    currentLikes++;
    numberOfLikes.innerHTML = currentLikes;
}


function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentBox = button.parentElement.parentElement.getElementsByClassName("commentBox")[0];

    if (commentInput.value.trim() !== "") {
        let comment = document.createElement("div");
        comment.className = "comment";

        let commentAva = document.createElement("img");
        commentAva.className = "commentAva";
        commentAva.src = "https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig";

        let commentUserName = document.createElement("span");
        commentUserName.className = "commentUserName";
        commentUserName.innerText = "Alua:";

        let commentText = document.createElement("span");
        commentText.innerText = commentInput.value;

        comment.appendChild(commentAva);
        comment.appendChild(commentUserName);
        comment.appendChild(commentText);
        commentBox.appendChild(comment);

        commentInput.value = "";
    }
}