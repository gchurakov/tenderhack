import React from 'react';
import { Typography } from '@mui/material';
import css from './ChatWindow.module.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import DocumentForm from '../forms/DocumentForm/DocumentForm';
import DocumentChoiceForm from '../forms/DocumentChoiceForm/DocumentChoiceForm';
import ActionChoiceForm from '../forms/ActionChoiceForm/ActionChoiceForm';
import ArbitraryItemEdit from '../forms/ArbitraryItemEdit/ArbitraryItemEdit';
import ArbitraryItemMessage from '../messages/ArbitraryItemMessage/ArbitraryItemMessage';
import ErrorMessage from '../messages/ErrorMessage/ErrorMessage';
import InfoMessage from '../messages/InfoMessage/InfoMessage';
import SuccessMessage from '../messages/SuccessMessage/SuccessMessage';
import EditDynamicFieldForm from '../forms/EditDynamicFieldForm/EditDynamicFieldForm';
import CustomerMadeChanges from '../forms/CustomerMadeChanges/CustomerMadeChanges';
import CustomerEditedRedaction from '../forms/CustomerEditedRedaction/CustomerEditedRedaction';
import EditDynamicFieldFixedItemForm from '../forms/EditDynamicFieldFixedItemForm/EditDynamicFieldFixedItemForm';
import ArbitraryItemForm from '../forms/ArbitraryItemForm/ArbitraryItemForm';
import EditWholeDocumentForm from '../forms/EditWholeDocumentForm/EditWholeDocumentForm';
import EditWholeDocumentMessage from '../messages/EditWholeDocumentMessage/EditWholeDocumentMessage';
import RedactionChangedWholeMessage from '../messages/RedactionChangedMessage/RedactionChangedWholeMessage';
import MsgPos from '../chat/MessagePosition';
import StartButtons from '../forms/StartButtons/StartButtons';
import FinalButton from '../forms/FinalButton/FinalButton';
import AcceptWholeDocumentChange from '../forms/AcceptWholeDocumentChange/AcceptWholeDocumentChange';

function Pre (props) {
    return <React.Fragment>{props.children}</React.Fragment>
}


function ChatWindow({ selectedTender }) {
    return (
        <div className={css.container}>
            {selectedTender == null ? (
                <div>Empty</div>
            ) : (
                <div style={{overflowY: 'auto', height: '100%'}}>
                    <ChatHeader selectedTender={selectedTender} />
                    {`<ChatHeader selectedTender={selectedTender} />`}
                    <br/><br/>
                    <MsgPos pos='0'><DocumentForm /></MsgPos>
                    {`<MsgPos pos='0'><DocumentForm /></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='1'><DocumentChoiceForm/></MsgPos>
                    {`<MsgPos pos='1'><DocumentChoiceForm/></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='1'><ActionChoiceForm /></MsgPos>
                    {`<MsgPos pos='1'><ActionChoiceForm /></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='1'><ArbitraryItemEdit /></MsgPos>
                    {`<MsgPos pos='1'><ArbitraryItemEdit /></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><ArbitraryItemMessage /></MsgPos>
                    {`<MsgPos pos='0'><ArbitraryItemMessage /></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage></MsgPos>
                    {`<MsgPos pos='0'><InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage></MsgPos>
                    {`<MsgPos pos='0'><SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage></MsgPos>
                    {`<MsgPos pos='0'><ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='1'><CustomerEditedRedaction /></MsgPos>
                    {`<MsgPos pos='1'><CustomerEditedRedaction /></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='1'><EditDynamicFieldForm data={{field:'количесво стульев'}}/></MsgPos>
                    {`<MsgPos pos='1'><EditDynamicFieldForm data={{field:'количесво стульев'}}/></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage></MsgPos>
                    {`<MsgPos pos='0'><InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage></MsgPos>
                    {`<MsgPos pos='0'><SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage></MsgPos>`}
                    <br/><br/>
                    <MsgPos pos='0'><ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage></MsgPos>
                    {`<MsgPos pos='0'><ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage></MsgPos>`}
                    <br/><br/>
                    <CustomerMadeChanges/>
                    {`<CustomerMadeChanges/>`}
                    <br/><br/>
                    <EditDynamicFieldFixedItemForm data={{itemId: 10}} />
                    {`<EditDynamicFieldFixedItemForm data={{itemId: 10}} />`}
                    <br/><br/>
                    <ArbitraryItemForm />
                    {`<ArbitraryItemForm />`}
                    <br/><br/>
                    <EditWholeDocumentForm />
                    {`<EditWholeDocumentForm />`}
                    <br/><br/>
                    <EditWholeDocumentMessage />
                    {`<EditWholeDocumentMessage />`}
                    <br/><br/>
                    <InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage>
                    {`<InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage>`}
                    <br/><br/>
                    <SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage>
                    {`<SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage>`}
                    <br/><br/>
                    <ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage>
                    {`<ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage>`}
                    <br/><br/>
                    <RedactionChangedWholeMessage />
                    {`<RedactionChangedWholeMessage />`}
                    <br/><br/>
                    <StartButtons />
                    {`<StartButtons />`}
                    <br/><br/>
                    <FinalButton />
                    {`<FinalButton />`}
                    <br/><br/>
                    <AcceptWholeDocumentChange />
                    {`<AcceptWholeDocumentChange />`}

                </div>
            )}
        </div>
    );
}

export default ChatWindow;
