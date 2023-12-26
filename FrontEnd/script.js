fetch("http://localhost:5678/api/works")
    .then( Response) = Response.json()
    .then((works) => displayWorks (works))
    
     
    function displayWorks (works) {
        for (let index = 0; index < works.lenght; index++){
            const worksIndex = works [index];
            const sectionGallery =document.querySelector(".gallery");
            const worksElement = document.createElement("figure");
            const imageElement = document.createElement("img");
                imageElement.src = worksIndex.imageUrl;
                imageElement.alt = worksIndex.title;
            const titleElement = document.createElement("h3");
                titleElement.innerHTML = worksIndex.title;

            sectionGallery.appendChild(worksElement);

            worksElement.appendChild(imageElement);
            worksElement.appendChild(titleElement);
        }
    }


    
fetch("http://localhost:5678/api/categories")
    .then((response)=>response.json())
    .then((categories)=>displayCategory(categories))

    function displayCategory (categories)  {
        const sectionFiltres = document.querySelector("filtres");
        const buttonAll = document.createElement("button");
            buttonAll.textContent = "tous";
            buttonAll.classList.add("btnFilter");
            sectionFiltres.appendChild(buttonAll);
    
    
    
    }
    fetchWorks()
    fetchCategories()
