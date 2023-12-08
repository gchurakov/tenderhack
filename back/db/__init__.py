from .create_resources import create_db_resources


creds = {
    # Общая БД для хранения подрядчиков
    'common': {
        
            "hostname": "31.184.254.156",
            "port": " 5434",
            "username": "postgres",
            "password": "root",
            "dbname": "tenderhack_dev"
        
    },
    
}


engines, tables, inspectors = create_db_resources(creds)
