

async function fetchDogStuff() {
    const url = 'https://dogapi.dog/api/v2/facts?limit=1';

    const options = {
        method: 'GET'
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const fact = result.data[0].attributes.body;

        const element = document.getElementById("dog");
        element.innerHTML = `
            <h4>Fun Dog Fact from dogapi.com:</h4>
            <p><strong>${fact}</strong></p>
        `;
        element.style.textAlign = 'center';
    } catch (error) {
        console.error(error);
    }
}

fetchDogStuff();