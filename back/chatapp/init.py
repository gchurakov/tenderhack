from db import init_db, db_session
from flask import Flask
from config import Config
from flask_cors import CORS
from extensions import login_manager
from flask_socketio import SocketIO

socketio = SocketIO()

def create_app(config_class=Config):
    # Create and configure the App
    app = Flask(__name__)
    CORS(app)
    # CORS(app, resources={r"/*": {"origins": "*"}})
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

    import tender
    app.register_blueprint(tender.bp)

    import http_routing
    app.register_blueprint(http_routing.bp)

    from chatapp import msg
    app.register_blueprint(msg.bp)

    # socketio.init_app(app)
    # socketio.init_app(app, cors_allowed_origins="*")
    socketio.init_app(app, logger=True, engineio_logger=True)

    login_manager.init_app(app)

    return app
