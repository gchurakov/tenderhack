import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from secrets import *


def send_mail(user_email, tender_n=0, supplier=0, supplier_inn=0, contract_n=0):
    'send email about contract'
    smtp_server = "smtp.mail.ru"
    smtp_port = 587

    msg = MIMEMultipart()
    msg['From'] = EMAIL
    msg['To'] = user_email
    msg['Subject'] = "Новое сообщение в чате!"
    # TODO add link to chat or service
    body = f'''Вам пришло новое сообщение по Тендеру №{tender_n}.\nОт : {supplier}\nИНН: {supplier_inn}\nДоговор: № {contract_n}\n\nСмотрите скорее!'''
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


# print(send_mail("gcd248@mail.ru"))
