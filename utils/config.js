const config = { 
    db: {
        "HHG": 'HHG',
        "vision": 'vision',
        "attendance_prod": {
            name: 'attendance_prod',
            collections: {
                "attendances": "attendances", 
                "coownerlogs": "coownerlogs", 
                "dailytasks": "dailytasks", 
                "demos": "demos", 
                "employees": "employees", 
                "employers": "employers", 
                "issues": "issues", 
                "leaves": "leaves", 
                "marketings": "marketings", 
                "messagesessions": "messagesessions", 
                "ownertransferlogs": "ownertransferlogs", 
            }            
        }
    },
    uri: 'mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net'
}

module.exports = {config}