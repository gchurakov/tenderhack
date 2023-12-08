from smtplib import SMTP_SSL, SMTP_SSL_PORT
from secrets import *

def notify_by_email(user_email:str='gcd248@mail.ru', **kwargs)->tuple:
    "send emails from  loot500chat@mail.ru to clients"
    SMTP_HOST = 'smtp.mail.ru'
    SMTP_SSL_PORT = 465
    body = \
'''Вам пришло новое сообщение по Тендеру №{tender_n}
От : {supplier}
ИНН: {supplier_inn}
Договор: № {cintract_n}

Смотрите скорее !
'''

    # Craft the email by hand
    from_email = f'LOOT500TEAM <{EMAIL}>'
    headers = f"From: {from_email}\r\n"
    headers += f"To: {user_email}\r\n"
    headers += f"Subject: Новое сообщение в чате!\r\n"
    email_message = headers + "\r\n" + body

    # Connect, authenticate, and send mail
    smtp_server = SMTP_SSL(SMTP_HOST, port=SMTP_SSL_PORT)
    # smtp_server.set_debuglevel(1)  # Show SMTP server interactions
    smtp_server.login(EMAIL, EMAIL_PWD)
    resp = smtp_server.sendmail(from_email, user_email, email_message)

    # Disconnect
    smtp_server.quit()

    return resp[user_email]

print(notify_by_email())