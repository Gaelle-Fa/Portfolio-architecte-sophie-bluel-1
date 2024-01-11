fetch ("http://localhost:5678/api/works")
    .then (response => response.json())
    .then((works) => displayWorks(works))
    
     
    function displayWorks(works) {
        console.log(works);
        for (let index = 0; index < works.length; index++){
            const worksIndex = works[index];
            const sectionGallery = document.querySelector(".gallery");
            const worksElement = document.createElement("figure");
            const imageElement = document.createElement("img");
                imageElement.src = worksIndex.imageUrl;
                imageElement.alt = worksIndex.title;
            const titleElement = document.createElement("figcaption");
                titleElement.innerHTML = worksIndex.title;

            sectionGallery.appendChild(worksElement);

            worksElement.appendChild(imageElement);
            worksElement.appendChild(titleElement);
        }
    }


    
fetch ("http://localhost:5678/api/categories")
    .then((response) =>response.json())
    .then((categories) => displayCategory(categories))

    function displayCategory (categories)  {
        const sectionFiltres = document.querySelector(".filtres");
        const buttonAll = document.createElement("button");
            buttonAll.textContent = "tous";
            buttonAll.classList.add("btnFilter");
            sectionFiltres.appendChild(buttonAll);
    
        let firstButtonsSelected = document.querySelector(".btnFilter");
            firstButtonsSelected.classList.add("active");

            buttonAll.addEventListener("click", (event) => {
                event.preventDefault();
                const sectionGallery = document.querySelector(".gallery");
                  sectionGallery.innerHTML = "";
                fetch("http://localhost:5678/api/works")
                .then((response) => response.json())
                .then((works) => displayWorks(works))
                setActiveButton(buttonAll);
              });
        for (let index = 0; index < categories.length; index++) {
        const categoryIndex = categories[index];   
        
        const categoryElement = document.createElement("button");
    categoryElement.classList.add("btnFilter");
    categoryElement.innerHTML = categoryIndex.name;
    sectionFiltres.appendChild(categoryElement);   
    
    categoryElement.addEventListener("click", (event) => {
        event.preventDefault();
        selectCategory(categoryIndex.id);
        setActiveButton(categoryElement);
      });
    }
  }
  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btnFilter");
    buttons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  } 
  function selectCategory(categoryId) {
    fetch("http://localhost:5678/api/works")
      .then((response) => response.json())
      .then((works) => {
          const selectWorks = works.filter(
          (works) => works.categoryId === categoryId
        );
        const sectionGallery = document.querySelector(".gallery");
        sectionGallery.innerHTML = "";
        displayWorks(selectWorks);      
      })
      .catch((error) => {
        alert(`Erreur :` + error);
      });  
  }

  
