/* ==================================
   PAGE NAVIGATION
   ================================== */

function goToPage(page) {

    window.location.href = page;

}


/* ==================================
   TYPEWRITER FUNCTION
   ================================== */

function typeWriter(elementId, text, speed = 50) {

    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    let index = 0;

    element.innerHTML = "";

    function type() {

        if (index < text.length) {

            const character = text.charAt(index);

            if (character === "\n") {

                element.innerHTML += "<br>";

            } else {

                element.innerHTML += character;

            }

            index++;

            setTimeout(type, speed);

        }

    }

    type();

}


/* ==================================
   HOME PAGE
   ================================== */

if (document.getElementById("homeTyping")) {

    const homeText =
        "Hello and welcome to my personal webpage. " +
        "My name is Aviwe. This website provides a glimpse " +
        "into who I am, my interests, my skills, and some of " +
        "the things that make me unique.";

    typeWriter(
        "homeTyping",
        homeText,
        45
    );

}


/* ==================================
   ABOUT ME PAGE
   ================================== */

if (document.getElementById("aboutTyping")) {

    const aboutText =
        "I am Aviwe, a person who is passionate about learning, " +
        "growing and discovering new opportunities. I believe " +
        "that every experience provides an opportunity to learn " +
        "something new. I enjoy developing myself, meeting new " +
        "people and working towards my personal goals.";

    typeWriter(
        "aboutTyping",
        aboutText,
        45
    );

}


/* ==================================
   LIKES, DISLIKES AND SKILLS PAGE
   ================================== */

if (document.getElementById("likesTyping")) {

    const likesText =
        "LIKES: I enjoy learning new things, technology, music, " +
        "spending time with people I care about and exploring " +
        "new ideas.\n\n" +

        "DISLIKES: I dislike negativity, giving up easily and " +
        "situations where people do not respect one another.\n\n" +

        "MY SKILLS: I am developing skills in HTML, CSS and " +
        "JavaScript. I am also interested in problem solving, " +
        "creativity, communication and continuous learning.";

    typeWriter(
        "likesTyping",
        likesText,
        35
    );

}


/* ==================================
   CONCLUSION PAGE
   ================================== */

if (document.getElementById("conclusionTyping")) {

    const conclusionText =
        "In conclusion, I am Aviwe, an individual who believes " +
        "in personal growth, learning and becoming better every " +
        "day.\n\n" +

        "My personal webpage is a small representation of " +
        "who I am, the things I enjoy and the skills I am working " +
        "to develop. I enjoy learning new things, improving " +
        "myself and exploring new opportunities.\n\n" +

        "As I continue developing my skills in HTML, CSS and " +
        "JavaScript, I hope to use my knowledge and creativity " +
        "to create meaningful and useful projects.\n\n" +

        "Thank you for taking the time to visit my personal " +
        "webpage and learn more about me. This is only the " +
        "beginning of my journey, and I look forward to what " +
        "the future holds.";

    typeWriter(
        "conclusionTyping",
        conclusionText,
        40
    );

}