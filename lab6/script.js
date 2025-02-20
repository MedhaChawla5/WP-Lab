// magazine_app/static/js/script.js

document.getElementById("coverForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let backgroundColor = document.getElementById("background_color").value;
    let fontSize = document.getElementById("font_size").value + "px";
    let fontColor = document.getElementById("font_color").value;
    let message = document.getElementById("message").value;

    // Apply the changes to the cover preview
    let cover = document.getElementById("cover");
    let coverMessage = document.getElementById("coverMessage");

    cover.style.backgroundColor = backgroundColor;
    coverMessage.style.fontSize = fontSize;
    coverMessage.style.color = fontColor;
    coverMessage.innerText = message;

    // Optional: Upload image using FileReader to display the image preview
    let image = document.getElementById("image").files[0];
    if (image) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = new Image();
            img.src = e.target.result;
            img.style.position = "absolute";
            img.style.top = "0";
            img.style.left = "0";
            img.style.width = "100%";
            img.style.height = "100%";
            cover.innerHTML = "";
            cover.appendChild(img);
            cover.appendChild(coverMessage);
        };
        reader.readAsDataURL(image);
    }
});
