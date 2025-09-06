
// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reading progress indicator
window.addEventListener('scroll', function () {
    const article = document.querySelector('.article-content');
    const progress = document.createElement('div');
    progress.className = 'reading-progress';

    if (!document.querySelector('.reading-progress')) {
        document.body.appendChild(progress);
    }

    const progressBar = document.querySelector('.reading-progress');
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const scrolled = Math.max(0, Math.min(1, (scrollTop - articleTop + windowHeight) / articleHeight));
    progressBar.style.width = (scrolled * 100) + '%';
});


// share button

const modal = document.getElementById("shareModal");
const openBtn = document.getElementById("openShareBtn");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.getElementById("copyLinkBtn");
const linkInput = document.getElementById("shareLinkInput");

const pageUrl = window.location.href;
const message = "Check out this amazing resource:";
const shareText = `${message} ${pageUrl}`;

// Set the input value to the share text
linkInput.value = shareText;

// --- Event Listeners ---

// Open the modal when the share button is clicked
openBtn.onclick = function () {
    modal.style.display = "flex";
    updateSocialLinks();
}

// Close the modal when the 'x' is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Copy the link to the clipboard when the copy button is clicked
copyBtn.onclick = function () {
    // Select the text
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices

    // Use the modern Clipboard API
    navigator.clipboard.writeText(linkInput.value).then(() => {
        // Provide feedback to the user
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
        }, 1500); // Change back after 1.5 seconds
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// --- Function to update social media links ---
function updateSocialLinks() {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent("Check out this awesome page!"); // Custom text for social media
    document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    document.getElementById('shareLinkedIn').href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedText}`;
    document.getElementById('shareWhatsapp').href = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;

}