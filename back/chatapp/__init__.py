from .db import init_db, db_session
from flask import Flask
from config import Config
from flask_cors import CORS
from chatapp.models import *
from .extensions import socketio, login_manager


def create_app(config_class=Config):
    # Create and configure the App
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_class)

    # Register function for handling db connections
    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db_session.remove()

    # Set up db for app
    try:
        init_db(populate_with_test_data=True)
    except Exception as ex:
        app.logger.critical(f"Не удалось подключиться к базе данных: {ex}")

    from . import tender
    app.register_blueprint(tender.bp)
    from . import http_routing
    app.register_blueprint(http_routing.bp)

    socketio.init_app(app)
    login_manager.init_app(app)

    return app
