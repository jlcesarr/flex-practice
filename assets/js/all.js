const [likeButton, dislikeButton] = document.querySelectorAll(['.action-item--like', '.action-item--dislike'])
const [likeIcon, dislikeIcon] = document.querySelectorAll(['.action-item--like i', '.action-item--dislike i'])

likeButton.addEventListener('click', () => {

    if (!likeIcon.classList.contains('fas')) {
        likeIcon.classList.add('fas');
        dislikeIcon.classList.remove('fas');
        return;
    }

    likeIcon.classList.remove('fas');
});

dislikeButton.addEventListener('click', () => {

    if (!dislikeIcon.classList.contains('fas')) {
        dislikeIcon.classList.add('fas');
        likeIcon.classList.remove('fas');
        return;
    }

    dislikeIcon.classList.remove('fas');
});