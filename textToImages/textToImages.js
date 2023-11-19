document.getElementById('btnSubmit').addEventListener('click', function () {
    generationImages();
});


const generationImages = async () => {
    // Retrieve the current value of the textarea when the function is called
    const textarea = document.getElementById('textarea').value;

    // Check if the textarea is empty
    if (textarea.trim() === '') {
        alert('Please enter a valid prompt.'); // Optionally, display an alert or handle the error
        return;
    }

    // Make a request to OpenAI API
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            "model": "dall-e-3",
            "prompt": "generate image to cat red",
            "n": 1,
            "size": "1024x1024",
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", methods);
        // Parse the response as JSON
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
        // Handle errors here
    }
};
