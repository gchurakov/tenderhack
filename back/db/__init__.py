from .create_resources import create_db_resources


creds = {
    # Общая БД для хранения подрядчиков
    'common': {
        
            "hostname": your host,
            "port": your port,
            "username": your user,
            "password": your password,
            "dbname": "common"
        
    },
    
    
}


engines, tables, inspectors = create_db_resources(creds)
