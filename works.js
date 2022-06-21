const recentWorks = document.querySelector('#recent-works');

// function cardsSection (portifolio)
const portifolio = {
    featured: {
        heading: "title of Featured card",
        highlight: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        image: "assets/project-featured.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    },    
    card1: {
        heading: "title of card 1",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets/project1-web.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    },
    card2: {
        heading: "title of card 2",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets\project2.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    },
    card3: {
        heading: "title of card 3",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets\project3.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    },
    card4: {
        heading: "title of card 4",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets\project4.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    }, 
    card5: {
        heading: "title of card 5",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets\project5.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    }, 
    card6: {
        heading: "title of card 6",
        highlight: "A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard",
        image: "assets\project6.jpg",
        badge1: "css",
        badge2: "html",
        badge3: "Bootstrap",
        badge4: "Ruby",
        button: "See project",
    }
}
// create featured card
let article = document.createElement('article');
article.classList = 'featured';
recentWorks.appendChild(article);

//create img of card
let img = document.createElement('img');
img.src = (portifolio.featured.image);
article.appendChild(img);

//create card wrap
let divWrap = document.createElement('div');
divWrap.classList = 'wrap-featured';
article.appendChild(divWrap);

// create title of card
let h3 = document.createElement('h3');
h3.classList = 'card-h';
h3.innerHTML = portifolio.featured.heading;
divWrap.appendChild(h3);

// create card text
let p = document.createElement('p');
p.id = 'featured-p';
p.innerHTML = portifolio.featured.highlight;
divWrap.appendChild(p);

//create the div of badges
div = document.createElement('div');
div.classList = 'lang';
divWrap.appendChild(div);

// add ul of badges
let ul = document.createElement('ul');
div.appendChild(ul);

//create badge items
//create a for loop to create 3 of them
let li = document.createElement('li')
li.classList ='lang-icons';
ul.appendChild(li);
let button = document.createElement('button');
button.innerHTML = portifolio.featured.badge1;
li.appendChild(button);


//create the button see project
button = document.createElement('button');
button.classList = 'small-button see-project';
button.innerHTML = 'See Project';
divWrap.appendChild(button);
