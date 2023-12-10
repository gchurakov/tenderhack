import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from constants import *


def send_email(user_email, site_addr='', comment='', *args, **kwargs):
    'send email about contract - ADD HOST ADDRESS'
    smtp_server = "smtp.mail.ru"
    smtp_port = 587

    msg = MIMEMultipart()
    # Наш почтовый сервис
    msg['From'] = EMAIL
    msg['To'] = user_email
    msg['Subject'] = "Новое сообщение в чате!"
    tender_n = 1
    body = f'''Вам пришло новое сообщение по Тендеру №{tender_n}.\nОт : _SUPPLIER_\nИНН: _INN_\nДоговор: № _CONTRACT_N_\nКомментарий: {comment}\nСмотрите скорее!\n{site_addr}'''
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(EMAIL, EMAIL_PWD)
            server.sendmail(EMAIL, user_email, msg.as_string())
        return True

    except Exception as e:
        print(f"Error: {e}")

    return False
