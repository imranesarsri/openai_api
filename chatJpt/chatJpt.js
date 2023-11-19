document.getElementById('btnSubmit').addEventListener('click', function () {
    sendToChatGpt();
});

function sendToChatGpt() {
    let textarea = document.getElementById('textarea').value;

    if (textarea.trim() === '') {
        alert('Please enter a valid request.');
        return;
    }

    let body = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: 'user',
            content: textarea
        }],
    };

    let headers = {
        Authorization: `Bearer ${apiKey}`,
    };

    axios.post("https://api.openai.com/v1/chat/completions", body, { headers: headers })
        .then((response) => {
            console.log(response.data);
            // Handle the response or update the UI here
        })
        .catch((error) => {
            console.error("Error:", error);
            // Handle errors or update the UI accordingly
        });
}


