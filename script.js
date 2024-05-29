const container = document.getElementById("track-list")

axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {


        // No era "res.date", era "res.data"
        res.data.songs.map((song) => {

            const div = document.createElement("img")
            div.classList.add("song")
            div.setAttribute('src', song.path.front)

            div.addEventListener("click", () => {


                document.getElementById
                    ("current-song-title").innerHTML = song.title

                document.getElementById
                    ("current-song-author").innerHTML = song.author

                document.getElementById
                    ("current-song-img").setAttribute("src", song.path.front)

                document.getElementById
                    ("current-song-audio").setAttribute("src", song.path.audio)

            })

            container.appendChild(div)
        })

        document.getElementById("play").addEventListener
        ("click", () =>{

            const audio = document.getElementsById
            ("current-song-audio")

            if (audio.paused){
                audio.play()
            }else{ 
                audio.pause()
            }

        })

    })