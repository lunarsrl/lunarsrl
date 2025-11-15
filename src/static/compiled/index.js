var message_box = document.getElementById("message-box");
var p = document.getElementById("message");
MessageScroll();

function MessageScroll() {
    var message = "Hello! My name is Sam!. I made this page to publish to Flathub, so I have nothing else to link here. Enjoy this text animation instead. | My email is riveroluna@protonmail.com |, bye!".split('');
    var offset = -1;
    if (p != null) {
        p.style.justifyContent = "center";
        p.style.alignItems = "center";
        let outofchars = 0
        setInterval(function () {
            if (message_box != null) {
                var width = message_box.getBoundingClientRect().width;
                length = Math.floor(width / 11.8);
            }
            offset += 1;

            if (offset + length > message.length) {
                outofchars += 1;
            }
            p.innerHTML = message.slice(offset, length + offset - outofchars).join('');
        }, 150);
    }
}
