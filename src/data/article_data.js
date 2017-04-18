export const articles = [
    {
        title: 'Early Galaxies Surrounded by Super Halos',
        author: 'Molly Michelson',
        content: "Image credit: A. ANGELICH (NRAO/AUI/NSF) How do astronomers study distant galaxies? They use quasars. The bright light from one of these luminous galactic nuclei acts like a flashlight, highlighting objects in its path, from the source (billions of light years away) all the way to us. For decades, scientists have been using quasars to observe the characteristic way gas from a distant galaxy absorbs light from the quasar in the background. But the problem is, it doesn't provide a complete picture. The technique actually prevents astronomers from seeing the light emitted by the galaxy, which is overwhelmed by the much brighter emission from the background quasar."
    },
    {
        title: 'Destroyer of Stars',
        author: 'Mary Holt',
        content: "A recent study conducted by astronomers at the University of Sheffield has shown that stars may be getting destroyed by supermassive black holes much more frequently than we used to think. Their observations, which were published this week in Nature Astronomy, showed an extremely bright event in an ultra-luminous infrared galaxy about 1.7 billion light-years away, called F01004-2237. If that name doesn't get you excited, hopefully what they found in this galaxy will."
    },
    {
        title: 'Lucky Number Seven',
        author: 'Ryan Wyatt',
        content: "A small, astronomy-focused corner of the Internet has been going crazy the past few days, leading up to today's announcement about the discovery of (count 'em) seven Earth-ish-sized planets in orbit around a nearby star."
    },
    {
        title: 'Young Stars in the Stream',
        author: 'Eric Edelman',
        content: "600 million light years beyond our Milky Way Galaxy lies a pair of merging galaxies fondly referred to as IRAS F23128-5919. The southern galaxy of the two has a significant outflow of material falling away from the active galactic nucleus at its center, where, through the use of the MUSE and X-shooter spectroscopic instruments on the European Southern Observatory's Very Large Telescope (VLT), a group of scientists from the United Kingdom have found solid evidence for starbirth."
    },
    {
        title: 'The Martian Ring Cycle',
        author: 'Mary Holt',
        content: "We've known for a while that Mars's larger moon, Phobos, is going to come to a violent end in a few million years. In fact, we discussed the future of Phobos a couple of times back in 2015, both about how the moon will eventually be ripped apart by tidal forces and should end up as a ring around Mars. But it turns out the story doesn't stop there! NASA-funded scientists at Purdue University have published this week in Nature Geoscience that when Phobos does end up as a ring around Mars, it may not have been the first time."
    },
    {
        title: "The Little Galaxies That Couldn't",
        author: 'Ryan Wyatt',
        content: "Ultraviolet (UV) light doesn't just give you a sunburn! In space, it also illuminates and sculpts giant clouds of gas, creating the iconic star forming regionsmade famous by the Hubble Space Telescope. And in the early Universe, UV radiation may be responsible for preventing the smallest galaxies from taking shape."
    }
];

const articleList = articles.map((article, key) => article.title);

export default articleList;

export function getArticle(id){
    return new Promise(function(resolve){
        setTimeout(()=>{resolve(articles[id])}, 500);
    });
}