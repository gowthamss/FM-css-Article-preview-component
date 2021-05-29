const shareIconDiv = document.querySelector('.share--icon__div')
const social = document.querySelector('.social--div')
const profile = document.querySelector('.profile')
const socialIcons = document.querySelector('.social--icons')

shareIconDiv.addEventListener('click', () => {
    profile.style.display = 'none'
    social.style.display = 'block'
})

// shareIconDiv.removeEventListener(shareIconDiv)