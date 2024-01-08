const rocket = document.querySelector('.rocket');
const planets = document.querySelectorAll('.planet');


function showRocket() {
    rocket.classList.add('show');
}

setTimeout(showRocket, 18000);


planets.forEach(planet => {
    planet.addEventListener('click', () => {
        removeActiveClasses()
        planet.classList.add('modal', 'para')
    })
})

function removeActiveClasses() {
    planets.forEach(planet => {
        planet.classList.remove('modal', 'para')
    })
} 

/*
const paras = document.querySelectorAll('.para');

function addParas() {
    planets.forEach(planet => {
        planet.append('para')
    })
} */
/*
const planetList = ["mercury", "venus", "earth", "mars", "jupitor", "saturn", "uranus", "neptune" ]

for (let _planet of planetList) {
    let newPara = document.createElement('p');
     newPara.textContent = ["Mercury is the first planet from the Sun and the smallest in the Solar System. It is a terrestrial planet with a heavily cratered surface due to overlapping impact events. These features are well preserved since the planet has no geological activity and an extremely tenuous atmosphere called an exosphere. Despite being the smallest planet in the Solar System with a mean diameter of 4,880 km (3,030 mi), 38% of that of Earth, Mercury is dense enough to have roughly the same surface gravity as Mars. Mercury has a dynamic magnetic field with a strength about 1% of that of Earth's and has no natural satellites.",
                        "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth. Orbiting inferiorly (inside of Earth's orbit), it appears in Earth's sky always close to the Sun, as either a morning star or an evening star. While this is also true for Mercury, Venus appears much more prominently, since it is the third brightest object in Earth's sky after the Moon and the Sun,[20][21] appearing brighter than any other star-like classical planet or any fixed star. With such prominence in Earth's sky, Venus has historically been a common and important object for humans, in both their cultures and astronomy.",
                        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within one hemisphere, Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation."
                           ]
                          } */


function showParas() {
    paras.forEach(para => {
        para.classList.add('active')
    })
} 

showParas();
