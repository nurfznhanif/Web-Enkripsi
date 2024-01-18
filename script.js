function encrypt() {
    var inputText = document.getElementById('encryptInput').value;
    var shift = 3; // You can change the shift value as needed

    var encryptedText = '';

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            encryptedText += inputText.charAt(i);
        }
    }

    document.getElementById('encryptedText').value = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById('decryptInput').value;
    var shift = 3; // You can change the shift value as needed

    var decryptedText = '';

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            decryptedText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            decryptedText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            decryptedText += inputText.charAt(i);
        }
    }

    document.getElementById('decryptedText').value = decryptedText;
}