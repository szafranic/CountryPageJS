class Country {
    constructor(name, lang, greeting, colors, img) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.img = img;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],
 "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],
 "https://m.media-amazon.com/images/I/31gP-qNARiL._AC_SY580_.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم", ["blue", "yellow", "red"],
"https://cdn.britannica.com/34/3034-004-1A765B57/Flag-Algeria.jpg");
let brazil = new Country("Brazil", "Portuguese", "Olá Mundo", ["green", "yellow"],
"https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg");
let poland = new Country("Poland", "Polish", "Witaj świecie", ["red", "white"],
"https://cdn11.bigcommerce.com/s-lvtmj4gso4/images/stencil/400x400/products/771/1435/poland_flag-Poland-Variation__78249.1658438963.jpg");
let sweden = new Country("Sweden", "Svenska", "Hej världen", ["blue", "yellow"],
"https://www.countryflags.com/wp-content/uploads/sweden-flag-png-xl.png");
let barbados  = new Country("Barbados", "Bajan", "Hello World", ["#00267F", "000000","#FFC726"],
"https://www.flagcolorcodes.com/data/national-Flag-of-Barbados.png");
let italy = new Country("Italy", "Italian", "Ciao mondo", ["green", "white", "red"],
"https://www.flagcolorcodes.com/images/jpg/italy.jpg");


let countries = [usa, mexico, algeria];

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Brazil") {
        country = brazil;
    }
    else if (input === "Poland") {
        country = poland;
    }
    else if (input === "Sweden") {
        country = sweden;
    }
    else if (input === "Barbados") {
        country = barbados;
    }
    else if (input === "Italy"){
        country = italy;
    }
    document.getElementById("CountryName").innerText = `In ${country.name} `;
    document.getElementById("OfficialLanguage").innerText = `they speak ${country.lang} `;
    document.getElementById("HelloWorld").innerText = `and that would go something like ${country.greeting}`;
    // colors
    if(country.colors.length == 3){
        console.log("3 colors")
        document.getElementById("Color1").style = `background-color: ${country.colors[0]}`
        document.getElementById("Color2").style = `background-color: ${country.colors[1]}`
        document.getElementById("Color3").style = `background-color: ${country.colors[2]}`
    }else {
        console.log("two colors")
        document.getElementById("Color1").style = `background-color: ${country.colors[0]}`
        document.getElementById("Color2").style = `background-color: ${country.colors[1]}`
        document.getElementById("Color3").style = `background-color: ${country.colors[1]}`
    }

    //img
    document.getElementById("FlagPic").src = country.img;
}

