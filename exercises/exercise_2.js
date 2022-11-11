const countries = [
    {
        "country": "US",
        "languages": ["en"]
    },
    {
        "country": "BE",
        "languages": ["nl", "fr", "de"]
    },
    {
        "country": "NL",
        "languages": ["nl", "fy"]
    },
    {
        "country": "DE",
        "languages": ["de"]
    },
    {
        "country": "ES",
        "languages": ["es"]
    }
];

function countContries() {
    return countries.length;
}

function findCountryWithMostOfficialLanguages(preferredLanguage = null) {

    const filteredCountries = preferredLanguage ? countries.filter(country => country.languages.some(language => language === preferredLanguage)) : [...countries];
    let foundCountry;

    filteredCountries.map(country => {
        if (!foundCountry || country.languages.length > foundCountry.languages.length) {
            foundCountry = country;
        }
    });

    return foundCountry;
}

function countAllLanguages() {
    const languages = []
    countries.map(country => languages.push(...country.languages));
    return [...new Set(languages)].length;
}

function findMostCommonLanguage()  {
    const languages = [];
    countries.map(country => languages.push(...country.languages));
    const languagesCount = languages.reduce( (acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
     },{})

     return Object.keys(languagesCount).reduce((a, b) => languagesCount[a] > languagesCount[b] ? a : b);
}
    


(() => {
    countContries(); // returns the number of countries in the world
    findCountryWithMostOfficialLanguages('de'); // finds the country with the most official languages, where they officially speak German (de)
    countAllLanguages(); // that counts all the official languages spoken in the listed countries.
    findCountryWithMostOfficialLanguages(); // to find the country with the highest number of official languages.
    findMostCommonLanguage();// to find the most common official language(s), of all countries.
})();