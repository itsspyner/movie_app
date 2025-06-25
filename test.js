async function lol() {
    const req = await fetch('http://www.omdbapi.com/?apikey=dc2fc370&s=Batman')
    const res = await req.json();
    res.Search.map((elem) => {
        console.log(elem)
    })
}

lol()