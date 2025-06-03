const works = [
    {
        id : 1,
        image : "./assetes/imges/portfolio-1.webp" ,
        category : "web design",
        description : "Maecenas faucibus mollis interdum sed posuere consectetur lobortis." ,
        title : "Modern Dashboard Interface",
    },
    {
        id : 2,
        image : "./assetes/imges/portfolio-10.webp" ,
        category : "Graphics",
        description : "Vestibulum id ligula porta felis euismod semper at vulputate." ,
        title : "Creative Brand Identity",
    },
    {
        id : 3,
        image : "./assetes/imges/portfolio-4.webp" ,
        category : "branding",
        description : "Aenean lacinia bibendum nulla sed consectetur elit." ,
        title : "Luxury Brand Package",
    },
    {
        id : 4,
        image : "./assetes/imges/portfolio-7.webp" ,
        category : "Motion",
        description : "Donec ullamcorper nulla non metus auctor fringilla dapibus." ,
        title : " Product Animation Reel",
    },
    {
        id : 5,
        image : "./assetes/imges/portfolio-11.webp" ,
        category : "Graphics",
        description : "Cras mattis consectetur purus sit amet fermentum." ,
        title : "Digital Art Collection",
    },
    {
        id : 6,
        image : "./assetes/imges/portfolio-2.webp" ,
        category : "web design",
        description : "Nullam id dolor id nibh ultricies vehicula ut id elit." ,
        title : "E-commerce Platform",
    }
]
let category = "all work"
const worksContainer = document.querySelector(" .portfolio-links");
const worksCard = document.querySelector(" .portofolio-cards");
// get category
function filterAllWork() {
    if (category == "all work") {
        return displayAllWork(works);
    } else{
        const worksFilter = works.filter((works) => works.category == category);
        return displayAllWork(worksFilter)
    }
}

function handelCategory() {
    let categories = []
    works.map(works => categories.push (works.category))
    // to form unique array 
    const filterCategories = ["all work", ...new Set(categories)] 
    console.log(filterCategories);
    // to make obj. for each category
    const results = filterCategories.map((item) => ({
        value: item,
        label: item.toUpperCase()
    }))
    // to put category on html
    let html = ``
    results.map((item) => 
    (html += `<ul> <li class="${item.value == category ? "active" : ""}" data-value = "${item.value}"><a>${item.label}</a></li> </ul>`) )
    worksContainer.innerHTML = html
    // to take data value from each category
    const items = document.querySelectorAll(".portfolio-links li");
    items.forEach((item) => item.onclick = () => {
        category = item.dataset.value;
        items.forEach(item => item.classList.remove("active")) ; 
        item.classList.add("active");
        filterAllWork();
}) 
}
handelCategory();
// put data on
function displayAllWork(data) {
    let html = ``
    data.forEach((works) => {
        html += `<div class="card" data-aos="zoom-out-up" data-aos-duration="400">
            <div class="card-img">
                <img src="${works.image}" alt="${works.category}">
                <div class="hidden">
                    <div class="eye"> <i class="fas fa-eye"></i></div>
                    <div class="arrow"> <i class="fas fa-arrow-right"></i></div>
                </div>
            </div>
            <div class="card-txt">
                <span>${works.category}</span>
                <h3>${works.title}</h3>
                <p>${works.description}</p>
            </div>
        </div> 
        </div>`
    })
    worksCard.innerHTML = html;
}
filterAllWork()