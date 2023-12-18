function fetchMarks(){


fetch(`http://localhost:5678/api/works`).then((res) => {
        res.json().then((data) => {
            data.forEach(element => {
                console.log(element)

                const figure = document.createElement(`figure`)
                const image = document.createElement(`img`)
                const figureCaption = document.createElement(`figcaption`)

                figure.appendChild(image)
                figure.appendChild(figureCaption)

                figureCaption.innerHTML = elem.title
                image.src = elem.imageUrl

                document.querySelector(`.gallery`).appendChild(figure)
            }); 
        })
})

}