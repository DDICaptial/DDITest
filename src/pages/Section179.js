import React from 'react';
import styled from 'styled-components';
import { colorsAndFont } from '../style/style';

const PageGrid = styled.div`
    display:grid;
    height:88vh;
    grid-template-columns:auto;
    grid-template-rows: 5rem auto;
    background-color:${colorsAndFont.blue};
    color:white;
    h1{
        margin-top:3vh;
        text-align:center;
        font-weight:bolder;
    }
    @media screen and (max-width: 1000){
        font-size:1.25em;
    }
`;

const CalculatorGrid = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:auto auto;
    justify-self:center;
    align-self:baseline;
        margin-top:2vh;
    grid-row-gap:3rem;
    grid-template-areas: 'labels input' 'final final';
`;
const Labels = styled.div`
    grid-area:labels;
    display:grid;
    grid-template-columns:auto;
    grid-row-gap:2em;
`;
const InputGrid = styled.form`
    grid-area:input;
    display:grid;
    grid-template-columns:auto;
    grid-row-gap:2em;
    input, select{
        border: 1px black solid;
        width:min-content;
    }
    input#purchaseAmount.error{
      border: 3px red solid;
    }
`;
const WarningText = styled.div`
    display:none;
    color:red;
    font-size:.6em;
    margin-top:5px;
`;

class Section179 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxBrack: 0.35,
      purchaseAmount: 0,
      deducation: 0,
      bonus: '  -',
      firstYearDeduction: 0,
      CashSavings: 0,
      LoweredCost: 0,
    };
    this.calculator = this.calculator.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
    this.preventEnter = this.preventEnter.bind(this);
    this.errorAdd = this.errorAdd.bind(this);
    this.arrowCounter = this.arrowCounter.bind(this);
  }
  arrowCounter(event){
    if(event.keyCode == 38 || event.keyCode == 40){
      let noCom = parseInt(event.target.value.replace(/\,/g, ''), 10);
      if(isNaN(noCom)){
        noCom = 0;
      }
      let changed = 0
      if(event.keyCode == 38){
        changed = noCom + 1;
      }
      else{
        changed = noCom -1;
      }
      changed = changed.toString();
      let number1 = changed.replace(/,/gi, '');
      let number2 = number1.split(/(?=(?:\d{3})+$)/).join(',');
      event.target.value = number2;
      this.calculator(event);
    }
  }
  preventEnter(event) {
    console.log(event.which);
    const coolKeys = (event.which != 13 && (event.which >= 48 && event.which <= 57));
    if (!coolKeys) {
      event.preventDefault();
    }
  }
  checkAmount(value) {
    if (value > 2500000) {
      value = -1;
    } else if (value < 0 || value == NaN) {
      value = 0;
    }
    return value;
  }
  errorAdd(flag) {
    const input = document.getElementById('purchaseAmount');
    const warningText = document.getElementById('warningText');
    if (flag) {
      input.classList.add('error');
      warningText.style.display = 'block';
    } else {
      if (input.classList.contains('error')) { input.classList.remove('error'); }
      warningText.style.display = 'none';
    }
  }
  calculator(event) {
    event.preventDefault();
    this.errorAdd(false);
    let purchaseAmount = document.getElementById('purchaseAmount').value
    let taxBrack = document.getElementById('taxBrack').value
    let goodValue = true;
    // turn to commas
    const noCommas = parseInt(purchaseAmount.replace(/\,/g, ''), 10);
    const num = purchaseAmount.replace(/,/gi, '');
    const num2 = num.split(/(?=(?:\d{3})+$)/).join(',');
    purchaseAmount = noCommas;
    if (event.target.name == 'amount') {
      event.target.value = num2;
      const value = this.checkAmount(purchaseAmount);
      if (value === -1) {
        goodValue = false;
      } else {
        if (value == 0) {
          event.target.value = value;
        }
        goodValue = true;
      }
    }
    if (goodValue) {
      const taxBrack = document.getElementById('taxBrack').value;
      const deduction = (purchaseAmount >= 1000000 ? (1000000) : (purchaseAmount));
      const bonus = (deduction >= 1000000 ? (purchaseAmount - 1000000) : ('-'));
      const firstYearDeduction = deduction;
      const CashSavings = purchaseAmount * taxBrack;
      const LoweredCost = purchaseAmount - CashSavings;
      this.setState({
        taxBrack,
        purchaseAmount,
        deducation: (isNaN(deduction)) ? (0) : (deduction.toLocaleString(undefined, { maximumFractionDigits: 2 })),
        bonus: (isNaN(bonus)) ? (0) : (bonus.toLocaleString(undefined, { maximumFractionDigits: 2 })),
        firstYearDeduction: (isNaN(firstYearDeduction)) ? (0) : (firstYearDeduction.toLocaleString(undefined, { maximumFractionDigits: 2 })),
        CashSavings: (isNaN(CashSavings)) ? (0) : (CashSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })),
        LoweredCost: (isNaN(LoweredCost)) ? (0) : (LoweredCost.toLocaleString(undefined, { maximumFractionDigits: 2 })),
      });
      this.forceUpdate();
    } else {
      this.errorAdd(true);
    }
  }
  render() {
    return (
      <PageGrid>
        <h1>Section179 Calculator</h1>
        <p></PageGrid>Use the Below Calculator to Check Your Tax Write Off for 2018
          The Section 179 Tax Deduction is meant to encourage businesses to stay competitive by purchasing needed equipment, and writing off the full amount on their taxes for the current year. This free Section 179 calculator is fully updated for 2018 – go ahead, run some numbers and see how much you can actually save in real dollars this year.</p>
        <CalculatorGrid>
          <Labels>
            <div>Tax Bracket:</div>
            <div>Equipment Purchase Amount:</div>
            <div>Section 179 Deduction:</div>
            <div><p>Bonus Depreciation:</p><p>(100% in 2018)</p></div>
            <div>Normal First Year Depreciation:</div>
            <div>Total First Year Deduction:</div>
            <div>Cash Savings on your Purchase:</div>
            <div style={{ fontSize: '1.5em' }}>
              <p>Lowered Cost of Equipment:</p>
              <p>(After Tax Savings)</p>
            </div>
          </Labels>
          <InputGrid onSubmit={(e) => { e.preventDefault(); }}>
            <select name="tax" id="taxBrack" onChange={this.calculator}>
              <option value=".1">10%</option>
              <option value=".12">12%</option>
              <option value=".21">21%</option>
              <option value=".22">22%</option>
              <option value=".24">24%</option>
              <option value=".32">32%</option>
              <option value=".35" selected>35%</option>
              <option value=".37">37%</option>
            </select>
            <span>$<input id="purchaseAmount" name="amount" style={{ display: 'inline-block', marginLeft: '5px' }} onChange={this.calculator} onKeyPress={this.preventEnter} onKeyDown={this.arrowCounter} />
              <WarningText id="warningText">for amounts higher than 2.5 million, please contact DDI directly</WarningText>
            </span>
            <div>${this.state.deducation}</div>
            <div>${this.state.bonus}</div>
            <div>$0</div>
            <div>${this.state.firstYearDeduction}</div>
            <div>${this.state.CashSavings}</div>
            <div style={{ fontSize: '1.5em' }}>
                ${this.state.LoweredCost}
            </div>
          </InputGrid>
          <p style={{ fontSize: '.75em' }}>*Information provided is for illustrative purpose only and accuracy is not guaranteed.</p>
        </CalculatorGrid>
      </PageGrid>);
  }
}

export default Section179;

