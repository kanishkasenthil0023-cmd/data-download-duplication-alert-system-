let downloadedFiles = [];

function checkDownload() {
    const filename = document.getElementById("filename").value;
    const message = document.getElementById("message");

    if (downloadedFiles.includes(filename)) {
        message.textContent = "Duplicate download detected!";
        message.style.color="red";
    } else {
        downloadedFiles.push(filename);
        message.textContent = "Download successful!";
        message.style.color="green"
    }
}