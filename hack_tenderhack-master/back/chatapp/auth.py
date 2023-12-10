import functools
from .models.core import User
from .extensions import login_manager
from flask_login import current_user
from flask_socketio import disconnect


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


def authenticated_only(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        if not current_user.is_authenticated:
            disconnect()
        else:
            return f(*args, **kwargs)

    return wrapped
