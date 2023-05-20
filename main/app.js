const jokeElement = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');


getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke()
{
    //Call the API
    const jokeAPI = await fetch('https://icanhazdadjoke.com/', 
    {
        headers: 
        {
            accept: 'application/json'
        }
    });

    const joke = await jokeAPI.json();
    console.log(joke);

    //Display the joke
    jokeElement.innerHTML = joke.joke;
}