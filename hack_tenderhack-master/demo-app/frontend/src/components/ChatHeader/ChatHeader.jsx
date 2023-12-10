import React from "react";


const ChatHeader = (props) => {

    const selectedTender = props.selectedTender;
    const formattedDate = (new Date(selectedTender.date)).toLocaleDateString('ru-RU')
    return (<div className="row m-0 p-3" style={{ backgroundColor: '#d4dbe6' }}>
        <div className=" container">
            <div className="row">
                <div className="col-6">
                    <h3 style={{ color: '#db2b21' }}>Тендер №{selectedTender.id}</h3>
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <h6>Заказчик: {selectedTender.customer}</h6>
                </div>
                <div className="col-6">
                    <h6>{selectedTender.law_number}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h6>ИНН: {selectedTender.inn}</h6>
                </div>
                <div className="col-6">
                    <h6>Дата подписания договора: {formattedDate}</h6>
                </div>
            </div>
        </div>
    </div>)
}

export default ChatHeader