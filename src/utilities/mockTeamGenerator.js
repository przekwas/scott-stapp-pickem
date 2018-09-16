const mockTeamGenerator = () => {
    const testData = [
        {
            id: 1, team_name: "Photofeed", home_city: "Lukavice", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 2, team_name: "Shuffletag", home_city: "Sidomulyo", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 3, team_name: "Browseblab", home_city: "Wuyang", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 4, team_name: "Voolith", home_city: "Al Maţarīyah", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 5, team_name: "Flashspan", home_city: "Detroit", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 6, team_name: "Dazzlesphere", home_city: "Kagal’nitskaya", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 7, team_name: "Buzzbean", home_city: "Yongchang", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 8, team_name: "Babbleblab", home_city: "Cipari Satu", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 9, team_name: "Devshare", home_city: "Gayamdesa", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 10, team_name: "Topicstorm", home_city: "Tangxia", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 11, team_name: "Photolist", home_city: "Pinghu", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 12, team_name: "Topicblab", home_city: "Alemanguan", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 13, team_name: "Vitz", home_city: "Puerto de Nutrias", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 14, team_name: "Dabfeed", home_city: "Pamiers", logo: "http://dummyimage.com/150x150.jpg/cc0000/ffffff"
        },
        {
            id: 15, team_name: "Katz", home_city: "La Quebrada", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 16, team_name: "Voolia", home_city: "Chinú", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 17, team_name: "Thoughtworks", home_city: "Siparia", logo: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff"
        },
        {
            id: 18, team_name: "Gevee", home_city: "Huanfeng", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 19, team_name: "Vidoo", home_city: "Antas", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 20, team_name: "Yoveo", home_city: "Lumphăt", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 21, team_name: "Avamm", home_city: "Gyeongsan-si", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 22, team_name: "Roombo", home_city: "Sabanalarga", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 23, team_name: "Livefish", home_city: "Si Prachan", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        },
        {
            id: 24, team_name: "Abatz", home_city: "Angatel", logo: "http://dummyimage.com/150x150.jpg/ff4444/ffffff"
        },
        {
            id: 25, team_name: "Quimba", home_city: "Kalinovo", logo: "http://dummyimage.com/150x150.jpg/dddddd/000000"
        }
    ];

    let randomTeamIndex = Math.floor((Math.random() * 25) + 1);
    return testData[randomTeamIndex];

};

export default mockTeamGenerator;