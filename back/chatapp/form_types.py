def proceed_doc():
    return "/some/path"


def proceed_contract_protocol(payload):
    print("hello from proceed_contract_protocol")
    # Получили словарь ключ: значение для генерации договора
    # contract_protocol = payload["contract_protocol"]
    # path = proceed_doc()


form_types = {
    "contract_protocol": proceed_contract_protocol
}
