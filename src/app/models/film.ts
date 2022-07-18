export interface Films {
    items:        Film[]; // items è un array con oggetti di tipologia FILM
    errorMessage: string;
}

export interface Film {
    id:              string;
    rank:            string;
    rankUpDown:      string;
    title:           string;
    fullTitle:       string;
    year:            string;
    image:           string;
    crew:            string;
    imDbRating:      string;
    imDbRatingCount: string;
}


export interface Scheda {
    id:               string;
    title:            string;
    originalTitle:    string;
    fullTitle:        string;
    type:             string;
    year:             string;
    image:            string;
    releaseDate:      string;
    runtimeMins:      string;
    runtimeStr:       string;
    plot:             string;
    plotLocal:        string;
    plotLocalIsRtl:   boolean;
    awards:           string;
    directors:        string;
    directorList:     CompanyListElement[];
    writers:          string;
    writerList:       CompanyListElement[];
    stars:            string;
    starList:         CompanyListElement[];
    actorList:        ActorList[];
    fullCast:         null;
    genres:           string;
    genreList:        CountryListElement[];
    companies:        string;
    companyList:      CompanyListElement[];
    countries:        string;
    countryList:      CountryListElement[];
    languages:        string;
    languageList:     CountryListElement[];
    contentRating:    string;
    imDbRating:       string;
    imDbRatingVotes:  string;
    metacriticRating: string;
    ratings:          null;
    wikipedia:        null;
    posters:          null;
    images:           null;
    trailer:          null;
    boxOffice:        BoxOffice;
    tagline:          string;
    keywords:         string;
    keywordList:      string[];
    similars:         Similar[];
    tvSeriesInfo:     null;
    tvEpisodeInfo:    null;
    errorMessage:     null;
}

export interface ActorList {
    id:          string;
    image:       string;
    name:        string;
    asCharacter: string;
}

export interface BoxOffice {
    budget:                   string;
    openingWeekendUSA:        string;
    grossUSA:                 string;
    cumulativeWorldwideGross: string;
}

export interface CompanyListElement {
    id:   string;
    name: string;
}

export interface CountryListElement {
    key:   string;
    value: string;
}

export interface Similar {
    id:         string;
    title:      string;
    image:      string;
    imDbRating: string;
}


export interface Trailer {
    imDbId:       string;
    title:        string;
    fullTitle:    string;
    type:         string;
    year:         string;
    videoId:      string;
    videoUrl:     string;
    errorMessage: string;
}


