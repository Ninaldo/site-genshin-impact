(async function () {
  const nations = await getRessource("nations");
  listeHTML("nations", nations);

const apiCharacters = await getRessource("characters");
async function getRessource(ressource) {
  const rawData = await fetch(
    `https://genshin.jmp.blue/${ressource}/all?lang=fr`
  );

  return await rawData.json();
}
const persos = [
  ...apiCharacters,
  ...extraCharacters.filter(
    extra =>
      !apiCharacters.some(char => char.id === extra.id)
  )
];

  populateCharacters(persos);

  document
    .getElementById("characterSelect")
    .addEventListener("change", onCharacterChange);
})();

async function getCharacter(slug) {
  try {
    const response = await fetch(
      `https://genshin.jmp.blue/characters/${slug}?lang=fr`
    );

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }

  return extraCharacters.find(
    character => character.id === slug
  );
}
const extraCharacters = [
{
  id: "kamisato-ayato",
  name: "Kamisato Ayato",
  vision: "Hydro",
  weapon: "Sword",
  nation: "Inazuma",
  rarity: 5,
  description: "Chef du clan Kamisato et commissaire de la Commission culturelle d'Inazuma."
},
{
  id: "yelan",
  name: "Yelan",
  vision: "Hydro",
  weapon: "Bow",
  nation: "Liyue",
  rarity: 5,
  description: "Une mystérieuse agente liée au Bureau des affaires civiles de Liyue."
},
{
  id: "kuki-shinobu",
  name: "Kuki Shinobu",
  vision: "Electro",
  weapon: "Sword",
  nation: "Inazuma",
  rarity: 4,
  description: "L'adjointe compétente du gang d'Arataki."
},
{
  id: "shikanoin-heizou",
  name: "Shikanoin Heizou",
  vision: "Anemo",
  weapon: "Catalyst",
  nation: "Inazuma",
  rarity: 4,
  description: "Détective brillant de la Commission Tenryou."
},
{
  id: "collei",
  name: "Collei",
  vision: "Dendro",
  weapon: "Bow",
  nation: "Sumeru",
  rarity: 4,
  description: "Garde forestière apprentie d'Avidya."
},
{
  id: "tighnari",
  name: "Tighnari",
  vision: "Dendro",
  weapon: "Bow",
  nation: "Sumeru",
  rarity: 5,
  description: "Le garde forestier en chef de la forêt d'Avidya."
},
{
  id: "dori",
  name: "Dori",
  vision: "Electro",
  weapon: "Claymore",
  nation: "Sumeru",
  rarity: 4,
  description: "Une marchande célèbre capable d'obtenir presque tout."
},
{
  id: "candace",
  name: "Candace",
  vision: "Hydro",
  weapon: "Polearm",
  nation: "Sumeru",
  rarity: 4,
  description: "La gardienne du village d'Aaru."
},
{
  id: "cyno",
  name: "Cyno",
  vision: "Electro",
  weapon: "Polearm",
  nation: "Sumeru",
  rarity: 5,
  description: "Le grand général des Mahamatras."
},
{
  id: "nilou",
  name: "Nilou",
  vision: "Hydro",
  weapon: "Sword",
  nation: "Sumeru",
  rarity: 5,
  description: "Une danseuse renommée du Grand Bazar."
},
{
  id: "nahida",
  name: "Nahida",
  vision: "Dendro",
  weapon: "Catalyst",
  nation: "Sumeru",
  rarity: 5,
  description: "L'Archonte Dendro de Sumeru, aussi appelée Petite Seigneur Kusanali."
},
{
  id: "layla",
  name: "Layla",
  vision: "Cryo",
  weapon: "Sword",
  nation: "Sumeru",
  rarity: 4,
  description: "Étudiante de l'Académie souffrant d'un manque chronique de sommeil."
},
{
  id: "faruzan",
  name: "Faruzan",
  vision: "Anemo",
  weapon: "Bow",
  nation: "Sumeru",
  rarity: 4,
  description: "Une érudite spécialiste des mécanismes antiques."
},
{
  id: "wanderer",
  name: "Wanderer",
  vision: "Anemo",
  weapon: "Catalyst",
  nation: "Sumeru",
  rarity: 5,
  description: "Anciennement connu sous le nom de Scaramouche."
},
{
  id: "alhaitham",
  name: "Alhaitham",
  vision: "Dendro",
  weapon: "Sword",
  nation: "Sumeru",
  rarity: 5,
  description: "Le scribe de l'Académie de Sumeru."
},
{
  id: "yaoyao",
  name: "Yaoyao",
  vision: "Dendro",
  weapon: "Polearm",
  nation: "Liyue",
  rarity: 4,
  description: "La jeune disciple de Madame Ping."
},
{
  id: "dehya",
  name: "Dehya",
  vision: "Pyro",
  weapon: "Claymore",
  nation: "Sumeru",
  rarity: 5,
  description: "Mercenaire des Érémites surnommée la Crinière flamboyante."
},
{
  id: "mika",
  name: "Mika",
  vision: "Cryo",
  weapon: "Polearm",
  nation: "Mondstadt",
  rarity: 4,
  description: "Cartographe des Chevaliers de Favonius et membre de l'équipe d'Eula."
},
{
  id: "kaveh",
  name: "Kaveh",
  vision: "Dendro",
  weapon: "Claymore",
  nation: "Sumeru",
  rarity: 4,
  description: "Architecte de renom et ancien camarade d'Alhaitham."
},
{
  id: "kirara",
  name: "Kirara",
  vision: "Dendro",
  weapon: "Sword",
  nation: "Inazuma",
  rarity: 4,
  description: "Employée de Komaniya Express possédant une véritable passion pour les livraisons."
},
{
  id: "lynette",
  name: "Lynette",
  vision: "Anemo",
  weapon: "Sword",
  nation: "Fontaine",
  rarity: 4,
  description: "Assistante silencieuse et sœur jumelle de Lyney."
},
{
  id: "lyney",
  name: "Lyney",
  vision: "Pyro",
  weapon: "Bow",
  nation: "Fontaine",
  rarity: 5,
  description: "Prestidigitateur célèbre de Fontaine et frère de Lynette."
},
{
  id: "freminet",
  name: "Freminet",
  vision: "Cryo",
  weapon: "Claymore",
  nation: "Fontaine",
  rarity: 4,
  description: "Plongeur talentueux préférant la compagnie des profondeurs."
},
{
  id: "neuvillette",
  name: "Neuvillette",
  vision: "Hydro",
  weapon: "Catalyst",
  nation: "Fontaine",
  rarity: 5,
  description: "Juge suprême de Fontaine à l'autorité incontestée."
},
{
  id: "wriothesley",
  name: "Wriothesley",
  vision: "Cryo",
  weapon: "Catalyst",
  nation: "Fontaine",
  rarity: 5,
  description: "Administrateur de la Forteresse de Méropide."
},
{
  id: "furina",
  name: "Furina",
  vision: "Hydro",
  weapon: "Sword",
  nation: "Fontaine",
  rarity: 5,
  description: "Ancienne Archonte Hydro de Fontaine, connue pour sa personnalité théâtrale."
},
{
  id: "charlotte",
  name: "Charlotte",
  vision: "Cryo",
  weapon: "Catalyst",
  nation: "Fontaine",
  rarity: 4,
  description: "Journaliste énergique du journal Le Steambird."
},
{
  id: "chevreuse",
  name: "Chevreuse",
  vision: "Pyro",
  weapon: "Polearm",
  nation: "Fontaine",
  rarity: 4,
  description: "Capitaine de l'Unité spéciale de sécurité et de surveillance."
},
{
  id: "navia",
  name: "Navia",
  vision: "Geo",
  weapon: "Claymore",
  nation: "Fontaine",
  rarity: 5,
  description: "Présidente de la Spina di Rosula."
},
{
  id: "gaming",
  name: "Gaming",
  vision: "Pyro",
  weapon: "Claymore",
  nation: "Liyue",
  rarity: 4,
  description: "Garde de transport passionné par la danse du Wushou."
},
{
  id: "xianyun",
  name: "Xianyun",
  vision: "Anemo",
  weapon: "Catalyst",
  nation: "Liyue",
  rarity: 5,
  description: "L'Adepte connue autrefois sous le nom de Retenue des Nuages."
},
{
  id: "chiori",
  name: "Chiori",
  vision: "Geo",
  weapon: "Sword",
  nation: "Inazuma",
  rarity: 5,
  description: "Créatrice de mode renommée installée à Fontaine."
},
{
  id: "arlecchino",
  name: "Arlecchino",
  vision: "Pyro",
  weapon: "Polearm",
  nation: "Snezhnaya",
  rarity: 5,
  description: "La Quatrième des Exécuteurs des Fatui, surnommée « Le Knave »."
},
{
  id: "sethos",
  name: "Sethos",
  vision: "Electro",
  weapon: "Bow",
  nation: "Sumeru",
  rarity: 4,
  description: "Jeune homme énigmatique lié aux traditions du désert."
},
{
  id: "sigewinne",
  name: "Sigewinne",
  vision: "Hydro",
  weapon: "Bow",
  nation: "Fontaine",
  rarity: 5,
  description: "Infirmière en chef de la Forteresse de Méropide."
},
{
  id: "clorinde",
  name: "Clorinde",
  vision: "Electro",
  weapon: "Sword",
  nation: "Fontaine",
  rarity: 5,
  description: "Duelliste championne de Fontaine."
},
{
  id: "emilie",
  name: "Emilie",
  vision: "Dendro",
  weapon: "Polearm",
  nation: "Fontaine",
  rarity: 5,
  description: "Parfumeuse réputée dont le talent dépasse largement le domaine des fragrances."
},
{
  id: "kachina",
  name: "Kachina",
  vision: "Geo",
  weapon: "Polearm",
  nation: "Natlan",
  rarity: 4,
  description: "Une jeune guerrière enthousiaste originaire de Natlan."
},
{
  id: "kinich",
  name: "Kinich",
  vision: "Dendro",
  weapon: "Claymore",
  nation: "Natlan",
  rarity: 5,
  description: "Un chasseur expérimenté accompagné du dragon Ajaw."
},
{
  id: "mualani",
  name: "Mualani",
  vision: "Hydro",
  weapon: "Catalyst",
  nation: "Natlan",
  rarity: 5,
  description: "Guide touristique pleine d'énergie et grande amatrice des vagues."
},
{
  id: "xilonen",
  name: "Xilonen",
  vision: "Geo",
  weapon: "Sword",
  nation: "Natlan",
  rarity: 5,
  description: "Une artisane talentueuse réputée pour son savoir-faire exceptionnel."
},
{
  id: "chasca",
  name: "Chasca",
  vision: "Anemo",
  weapon: "Bow",
  nation: "Natlan",
  rarity: 5,
  description: "Une tireuse d'élite indépendante parcourant les terres de Natlan."
},
{
  id: "ororon",
  name: "Ororon",
  vision: "Electro",
  weapon: "Bow",
  nation: "Natlan",
  rarity: 4,
  description: "Un jeune combattant discret dont le potentiel reste encore méconnu."
},
{
  id: "citlali",
  name: "Citlali",
  vision: "Cryo",
  weapon: "Catalyst",
  nation: "Natlan",
  rarity: 5,
  description: "Une prêtresse respectée dotée d'une grande sagesse."
},
{
  id: "mavuika",
  name: "Mavuika",
  vision: "Pyro",
  weapon: "Claymore",
  nation: "Natlan",
  rarity: 5,
  description: "L'Archonte Pyro de Natlan, symbole de courage et de détermination."
},
{
  id: "lan-yan",
  name: "Lan Yan",
  vision: "Anemo",
  weapon: "Catalyst",
  nation: "Liyue",
  rarity: 4,
  description: "Une jeune adepte des arts mystiques de Liyue."
},
{
  id: "escoffier",
  name: "Escoffier",
  vision: "Cryo",
  weapon: "Polearm",
  nation: "Fontaine",
  rarity: 5,
  description: "Une cheffe renommée de Fontaine, célèbre pour son raffinement culinaire."
},
{
  id: "ifa",
  name: "Ifa",
  vision: "Anemo",
  weapon: "Catalyst",
  nation: "Natlan", 
  rarity: 4,
  description: "Un personnage originaire de Natlan dont les talents intriguent déjà Teyvat."
},
{
  id: "skirk",
  name: "Skirk",
  vision: "Cryo",
  weapon: "Sword",
  nation: "Abyss",
  rarity: 5,
  description: "La mystérieuse maîtresse de Tartaglia, disciple de Surtalogi venue des profondeurs de l'Abîme."
},
]

function listeHTML(listeId, data) {
  const liste = document.getElementById(listeId);

  data.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = item.name;
    liste.appendChild(itemElement);
  });
}

function populateCharacters(characters) {
  const select = document.getElementById("characterSelect");

  characters
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((character) => {
      const option = document.createElement("option");

      option.value = character.id; // slug API
      option.textContent = character.name;

      select.appendChild(option);
    });
}

async function onCharacterChange(event) {
  const slug = event.target.value;

  if (!slug) return;

  const character = await getCharacter(slug);

  // Normalise le slug pour les noms de fichiers (minuscules + tirets)
  const fileSlug = slug.toLowerCase().replaceAll(" ", "-");

  // URL fandom
  const fandomName = character.name.replaceAll(" ", "_").replaceAll("'", "%27");

  document.getElementById("characterDetails").innerHTML = `
   <div class="character-image">
      <img
        src="./images/characters/${fileSlug}-splash.jpg"
        alt="${character.name}"
        onerror="this.onerror=null; this.src='./images/characters/${fileSlug}-card.jpg';"
      >
      <img
        src="./images/characters/${fileSlug}-card.jpg"
        alt="${character.name}"
        onerror="this.onerror=null; this.src='./images/characters/${fileSlug}-splash.jpg';"
      >
    </div>
    <div class="character-info">
      <h2>${character.name}</h2>
      <p><b>Vision :</b> ${character.vision}</p>
      <p><b>Arme :</b> ${character.weapon}</p>  
      <p><b>Nation :</b> ${character.nation}</p>
      <p><b>Rareté :</b> ${character.rarity}★</p>
      <p>${character.description}</p>
      
        <a
        href="https://genshin-impact.fandom.com/wiki/${fandomName}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir la fiche complète sur Fandom
      <br>
        <a href="https://genshin.hoyoverse.com/" target="_blank"
            >Genshin Impact official</a
      </a>
    </div> `;
}
