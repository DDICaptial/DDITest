import Link from 'gatsby-link';
import React from 'react';
import Layout from '../components/layout';

class Section179 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taxBrack: 0.35,
            purchaseAmount: 50000,
            deducation: 0,
            bonus: '  -',
            firstYearDeduction: 0,
            CashSavings: 0,
            LoweredCost: 0,
            date: new Date()
        };
        this.calculator = this.calculator.bind(this);
        this.checkAmount = this.checkAmount.bind(this);
        this.preventEnter = this.preventEnter.bind(this);
        this.errorAdd = this.errorAdd.bind(this);
        this.arrowCounter = this.arrowCounter.bind(this);
    }

    componentDidMount() {
        const purchaseAmount = document.getElementById('purchaseAmount');
        const taxBrack = document.getElementById('taxBrack');
        purchaseAmount.value = this.state.purchaseAmount;
        taxBrack.value = this.state.taxBrack;
        this.calculator(null, true);
    }
    arrowCounter(event) {
        if (event.keyCode == 38 || event.keyCode == 40) {
            let noCom = parseInt(event.target.value.replace(/\,/g, ''), 10);
            if (isNaN(noCom)) {
                noCom = 0;
            }
            let changed = 0;
            if (event.keyCode == 38) {
                changed = noCom + 1;
            } else {
                changed = noCom - 1;
            }
            changed = changed.toString();
            const number1 = changed.replace(/,/gi, '');
            const number2 = number1.split(/(?=(?:\d{3})+$)/).join(',');
            event.target.value = number2;
            this.calculator(event);
        }
    }
    preventEnter(event) {
        console.log(event.which);
        const coolKeys = event.which != 13 && (event.which >= 48 && event.which <= 57);
        if (!coolKeys) {
            event.preventDefault();
        }
    }
    checkAmount(value) {
        if (value > 2590000) {
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
            if (input.classList.contains('error')) {
                input.classList.remove('error');
            }
            warningText.style.display = 'none';
        }
    }
    calculator(event, initial = false) {
        if (!initial) {
            event.preventDefault();
        }
        this.errorAdd(false);
        let purchaseAmount = document.getElementById('purchaseAmount').value;
        const taxBrack = document.getElementById('taxBrack').value;
        let goodValue = true;
        // turn to commas
        const noCommas = parseInt(purchaseAmount.replace(/\,/g, ''), 10);
        const num = purchaseAmount.replace(/,/gi, '');
        const num2 = num.split(/(?=(?:\d{3})+$)/).join(',');
        purchaseAmount = noCommas;
        if (event != null && event.target.name == 'amount') {
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
        if (initial) {
            document.getElementById('purchaseAmount').value = num2;
        }
        if (goodValue) {
            const taxBrack = document.getElementById('taxBrack').value;
            const deduction = purchaseAmount >= 1160000 ? 1160000 : purchaseAmount;
            const bonus = deduction >= 1160000 ? purchaseAmount - 1160000 : '-';
            const firstYearDeduction = deduction;
            const CashSavings = purchaseAmount * taxBrack;
            const LoweredCost = purchaseAmount - CashSavings;
            this.setState({
                taxBrack,
                purchaseAmount,
                deducation: isNaN(deduction)
                    ? 0
                    : deduction.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                bonus: isNaN(bonus)
                    ? 0
                    : bonus.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                firstYearDeduction: isNaN(firstYearDeduction)
                    ? 0
                    : firstYearDeduction.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                CashSavings: isNaN(CashSavings)
                    ? 0
                    : CashSavings.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                LoweredCost: isNaN(LoweredCost)
                    ? 0
                    : LoweredCost.toLocaleString(undefined, { maximumFractionDigits: 2 })
            });
            this.forceUpdate();
        } else {
            this.errorAdd(true);
        }
    }
    render() {
        return (
            <Layout><div className="pageGrid">
                <div className="copy">
                    <h2>
                        Use the Below Calculator to Check Your Tax Write Off for&nbsp; 
                        {this.state.date.getFullYear()}
                    </h2>
                    <p>
                        The Section 179 Tax Deduction is meant to encourage businesses to stay
                        competitive by purchasing needed equipment, and writing off the full amount
                        on their taxes for the current year. This free Section 179 calculator is
                        fully updated for {this.state.date.getFullYear()} – go ahead, run some
                        numbers and see how much you can actually save in real dollars this year.
                    </p>
                </div>
                <div className="calculatorGrid">
                    <h2>Section179 Calculator</h2>
                    <form
                        className="inputGrid"
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <div className="inputColumn">
                            <div>Tax Bracket:</div>
                            <div>
                                <select name="tax" id="taxBrack" onChange={this.calculator}>
                                    <option value={0.1}>10%</option>
                                    <option value={0.12}>12%</option>
                                    <option value={0.21}>21%</option>
                                    <option value={0.22}>22%</option>
                                    <option value={0.24}>24%</option>
                                    <option value={0.32}>32%</option>
                                    <option value={0.35} selected>
                                        35%
                                    </option>
                                    <option value={0.37}>37%</option>
                                </select>
                            </div>
                            <div>Equipment Purchase Amount:</div>
                            <span>
                                $
                                <input
                                    id="purchaseAmount"
                                    name="amount"
                                    style={{
                                        display: 'inline-block',
                                        outline: 'none',
                                        border: 'none'
                                    }}
                                    className="numberInput"
                                    onChange={this.calculator}
                                    onKeyPress={this.preventEnter}
                                    onKeyDown={this.arrowCounter}
                                />
                                <div className="warningText" id="warningText">
                                    for amounts higher than 2.59 million, please contact DDI directly
                                </div>
                            </span>
                            <div>Section 179 Deduction:</div>
                            <div>${this.state.deducation}</div>
                            <div>
                                <p>Bonus Depreciation:</p>
                                <p>(100% in {this.state.date.getFullYear()})</p>
                            </div>
                            <div>${this.state.bonus}</div>
                            <div>Normal First Year Depreciation:</div>
                            <div>$0</div>
                            <div>Total First Year Deduction:</div>
                            <div>${this.state.firstYearDeduction}</div>
                            <div style={{ fontSize: '1.25em' }}>
                                <p>Lowered Cost of Equipment:</p>
                                <p>(After Tax Savings)</p>
                            </div>
                            <div style={{ fontSize: '1.25em' }}>${this.state.LoweredCost}</div>
                            <div>Cash Savings on your Purchase:</div>
                            <div>${this.state.CashSavings}</div>
                        </div>
                    </form>
                    <p style={{ fontSize: '.75em' }}>
                        *Information provided is for illustrative purpose only and accuracy is not
                        guaranteed.
                    </p>
                </div>
                <div className="copy">
                    <p style={{ fontSize: '.8em' }}>
                        To take advantage of these high Section 179 limits for{' '}
                        {this.state.date.getFullYear()}, the equipment must be purchased and put
                        into service by midnight 12/31/{this.state.date.getFullYear()}. Use Form
                        4562 to claim your deduction.
                    </p>
                </div>

                <div
                    style={{ display: 'flex', flexDirection: 'row', borderTop: '2px solid white' }}
                >
                    <div className="Offerings" style={{ padding: '3vh 0 3vh' }}>
                        <h1>Offerings Include:</h1>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Master Lease Agreements
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Installment Payment Agreements
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Capital and Operating Leases
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Software Only Financing
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Lease Lines
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Purchase Leaseback Structures
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Asset Management
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Network Integration and Consulting
                            </li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-check-circle" />
                                </span>
                                Project Management
                            </li>
                        </ul>
                    </div>
                    <div className="InterestedSlideCalculator" style={{ fontSize: '.8em' }}>
                        <div className="Interested" style={{ width: '100%', margin: 'auto' }}>
                            <h1>
                                Interested in DDI?
                                <br /> Let's Talk
                            </h1>
                            <div>
                                <Link to="/Vendors">
                                    <button>Vendor Opportunities</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/Customers">
                                    <button> Customer Information</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div></Layout>
        );
    }
}

export default Section179;
