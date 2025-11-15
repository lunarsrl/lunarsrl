const message_box = document.getElementById("message-box");
const p = document.getElementById("message");

MessageScroll()

function MessageScroll() {
    let message =
        "Hello! My name is Sam!. I made this page to publish to Flathub, so I have nothing else to link here. Enjoy this text animation instead. | My email is riveroluna@protonmail.com |".split('');
    let offset = -1

    if (p != null) {
        p.style.justifyContent = "center";
        p.style.alignItems = "center";

        setInterval(function () {
            if (message_box != null) {
                var width = message_box.getBoundingClientRect().width;
                length = Math.floor(width / 11.8);
            }

            if (length + offset > message.length) {
                offset = 0
            }
            p.innerHTML = message.slice(offset, length + offset).join('');

            offset += 1;
        }, 250)
    }
}