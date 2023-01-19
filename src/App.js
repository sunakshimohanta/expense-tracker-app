import React, { useEffect, useState } from 'react';
//import { Jumbotron} from 'reactstrap';
import {Container} from 'reactstrap';
import Form from './components/form';
import List from './components/List';


const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = (event) => {
    console.log( 'Name: ' + event.target.value);
    setName(event.target.value);
  }

  const handleAmount = (event) => {
    console.log('Amount:' + event.target.value);
    setAmount(event.target.value);
  }

  const handleSubmitButton = event => {
    event.preventDefault();

    if(name !=='' || amount>0){
      const expense = {name,amount};
      setExpenses([...expenses,expense]);

      setName('');
      setAmount('');
    }else {
      alert("Invalid expense name or the amount!")
    }
  }
  
  const handleClearExpenses = () => {
    setExpenses([])
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <Container className="text-center">
      <div className='jumbotron fluid' >
        <h3 className='display-6'>
          Expense Tracker React App
        </h3>
        <div>
          <p>
             Total Expense: {''}
             <span className='text-success'>
               {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
               }, 0)}
             </span>
          </p>
        </div>
        <Form name={name} amount={amount} handleName={handleName} handleAmount={handleAmount} handleSubmitButton={handleSubmitButton} handleClearExpenses={handleClearExpenses}/>
        <List expenses={expenses} />
      </div>
    </Container>
  )
}

export default App;
