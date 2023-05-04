import React, { useState } from 'react';
import List from './components/List';
import Payment from './components/Payment';
import API from './api';

const operators = ['Теле 2', 'МТС', 'Мегафон', 'Билайн'];

function Pay() {
  const [operator, setOperator] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const OperatorSelect = operator => {
    setOperator(operator);
    setPaymentSuccess(false);
  };

  const PaymentSubmit = async response => {
    setPaymentSuccess(response.success);
    setOperator(null);
  };

  const OperatorsClick = () => {
    setOperator(null);
    setPaymentSuccess(false);
  };

  return (
    <div>
      {!operator && (
        <List operators={operators} onOperatorSelect={OperatorSelect} />
      )}
      {operator && (
        <Payment operator={operator} onPaymentSubmit={PaymentSubmit} />
      )}
      {paymentSuccess && (
        <div>
          Оплата успешна!{' '}
          <button className='return' onClick={OperatorsClick}>Вернуться</button>
        </div>
      )}
    </div>
  );
}


export default Pay;