/* 1. API 사용 없이 로컬에 저장된 이미지로 background 랜덤하게 변경 */

const background = document.getElementById("backgrounds");
// const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];

const images = [
    {
        url: "0.jpg",
        photographer: "Sean Oulashin",
        location: "North Shore, Waialua, United States"
    }, 
    {
        url: "1.jpg",
        photographer: "Daniela Cuevas",
        location: "Cappadocia, Turky"
    },
    {
        url: "2.jpg",
        photographer: "Vincent Camacho",
        location: "Saipan, Northern Mariana Islands"
    },
    {
        url: "3.jpg",
        photographer: "Ales Krivec",
        location: "Valparola Pass, Italy"
    },
    {
        url: "4.jpg",
        photographer: "Andreas Gücklhorn",
        location: "Lake Brienz, Switzerland"
    },
    {
        url: "5.jpg",
        photographer: "Diego Jimenez",
        location: "Atacama Desert, Antofagasta, Chile"
    },
    {
        url: "6.jpg",
        photographer: "Dino Reichmuth",
        location: "Arches National Park Entrance Station, Moab, United States"
    },
    {
        url: "7.jpg",
        photographer: "Yura Lytkin",
        location: "Wengen, Lauterbrunnen, Switzerland"
    },
    {
        url: "8.jpg",
        photographer: "Wenhao Ji",
        location: "Morant’s Curve Viewpoint, Lake Louise, Canada"
    },
    {
        url: "9.jpg",
        photographer: "Manik Rathee",
        location: "South Lake Tahoe, United States"
    },
    {
        url: "10.jpg",
        photographer: "Marek Piwnicki",
        location: "Lanzada, Prowincja Sondrio, Włochy"
    },
    {
        url: "11.jpg",
        photographer: "Sven Fischer",
        location: "Passwang Pass, Mümliswil-Ramiswil, Switzerland"
    },
    {
        url: "12.jpg",
        photographer: "T S",
        location: "Leh"
    },
    {
        url: "13.jpg",
        photographer: "Yuriy Bogdanov",
        location: "Ridgefield, United States"
    },
    {
        url: "14.jpg",
        photographer: "Zoltan Tasi",
        location: "Dungeness, United Kingdom"
    },
    {
        url: "15.jpg",
        photographer: "Yuriy MLCN",
        location: "Australia",
    },
]


const randomImages = images[ Math.floor(Math.random() * images.length) ];

// background div 생성
const bgDiv = document.createElement("div");
bgDiv.setAttribute("style",`background-image:url('img/${randomImages.url}')`);
background.appendChild(bgDiv);

// bg info
const bgLocation = document.querySelector("#bg-info span:first-child");
const bgPhotographer = document.querySelector("#bg-info span:last-child");
bgLocation.innerText = randomImages.location;
bgPhotographer.innerText = `${randomImages.photographer} / Unsplash`;


/* 2. unsplash API 사용 */
/*
const UNSPLASH_API_KEY = "k8NTJHm6TpapFyKshDn2uF9tLnsq111lrJ1LxMfW99s";

const background = document.querySelector("#backgrounds");
const backgroundUrl = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&orientation=landscape&query=landscape`
// console.log(backgroundUrl);

fetch(backgroundUrl)
    .then((response) => response.json())
    .then((data) => {
        const randomImages = data.urls.full;
        
        // background div 생성
        const bgDiv = document.createElement("div");
        bgDiv.setAttribute("style",`background-image:url('${randomImages}')`);
        background.appendChild(bgDiv);
    });
*/

    


