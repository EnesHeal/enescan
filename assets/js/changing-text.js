    const words = ['Developer', 'Editor', 'Enes💜'];
    let word = document.getElementById('days');
    let seconds = 3000;
    let i = 0;
    setInterval(() => {
        if (i == words.length) i = 0;
        word.innerHTML = words[i];
        i++;
    }, seconds);
