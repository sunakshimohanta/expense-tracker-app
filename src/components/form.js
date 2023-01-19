import React from "react";
import {Form as BTForm,
    FormGroup,
    Input,
    Label,
    Col,
    Button} from 'reactstrap';


 const Form = ({name, amount, handleName, handleAmount, handleSubmitButton,handleClearExpenses}) => (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitButton}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        $ Amount
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>{" "}
    <Button type="submit" onClick={handleClearExpenses} color="primary">
      Delete
    </Button>
  </BTForm>
 )

 export default Form;