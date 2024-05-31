const config = { 
    db: {
        "HHG": 'HHG',
        "vision": 'vision',
        "ribbons_balloons": {
            name: 'ribbons_balloons',
            collections: {
                "asandwhentasks" : "asandwhentasks",
                "attendances" : "attendances",
                "coownerlogs" : "coownerlogs",
                "csbs" : "csbs",
                "dailytasks" : "dailytasks",
                "demos" : "demos",
                "employees" : "employees",
                "employers" : "employers",
                "hocs" : "hocs",
                "hsos" : "hsos",
                "issues" : "issues",
                "kocs" : "kocs",
                "leaves" : "leaves",
                "marketings" : "marketings",
                "messagesessions" : "messagesessions",
                "mvrs" : "mvrs",
                "ownertransferlogs" : "ownertransferlogs", 
            }            
        },
        
    },
    uri: 'mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net'
}

module.exports = {config}