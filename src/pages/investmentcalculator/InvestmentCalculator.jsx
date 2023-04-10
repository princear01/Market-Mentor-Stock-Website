import React, { useEffect, useState } from "react";
import Layout from "/Users/alirana/senior-project/src/Layout.jsx";
import styles from "./InvestmentCalculator.module.css";

const InvestmentCalculator = (props) => {

       // const currentAge = document.getElementById("currentAge");
  const currentSalary = document.getElementById("currentSalary");
  const current401kBalance = document.getElementById("current401kBalance");
  const contributionPercent = document.getElementById("contributionPercent");
  const employerMatch = document.getElementById("employerMatch");
  const employerMatchLimit = document.getElementById("employerMatchLimit");
  const retirementAge = document.getElementById("retirementAge");
  const lifeExpectancy = document.getElementById("lifeExpectancy");
  const salaryIncrease = document.getElementById("salaryIncrease");
  const annualReturn = document.getElementById("annualReturn");
  const inflationRate = document.getElementById("inflationRate");
  const calculateButton = document.getElementById("calculateButton");
  const resultText = document.getElementById("resultText");
  
  function calculateInvestment() {
    // const currentAgeValue = parseFloat(currentAge.value);
    const currentSalaryValue = parseFloat(currentSalary.value);
    const current401kBalanceValue = parseFloat(current401kBalance.value);
    const contributionPercentValue = parseFloat(contributionPercent.value) / 100;
    const employerMatchValue = parseFloat(employerMatch.value) / 100;
    const employerMatchLimitValue = parseFloat(employerMatchLimit.value) / 100;
    const retirementAgeValue = parseFloat(retirementAge.value);
    const lifeExpectancyValue = parseFloat(lifeExpectancy.value);
    const salaryIncreaseValue = parseFloat(salaryIncrease.value) / 100;
    const annualReturnValue = parseFloat(annualReturn.value) / 100;
    const inflationRateValue = parseFloat(inflationRate.value) / 100;
  
    let salary = currentSalaryValue;
    let balance = current401kBalanceValue;
  
    // for (let age = currentAgeValue; age < retirementAgeValue; age++) {
    //   balance += (salary * contributionPercentValue) + (balance * annualReturnValue);
    //   salary += salary * salaryIncreaseValue;
  
    //   if (currentAge === null) {
    //     // handle the error here
    //   }
      
      if (balance * employerMatchValue < salary * employerMatchLimitValue) {
        balance += balance * employerMatchValue;
      } else {
        balance += salary * employerMatchLimitValue;
      }
    
  
    let annualWithdrawal = balance / ((lifeExpectancyValue - retirementAgeValue) * 12);
    let inflationMultiplier = 1 + inflationRateValue;
    for (let age = retirementAgeValue; age < lifeExpectancyValue; age++) {
      balance = (balance - annualWithdrawal) * inflationMultiplier;
      annualWithdrawal *= inflationMultiplier;
    }
  
    resultText.textContent = `You will have $${balance.toFixed(2)} at age ${lifeExpectancyValue}.`;
  };
  
  return (
    <Layout>

    <div className={styles.InvestmentCalculator}>
    <h1 className={styles.title}>
            <span className={styles.highlight}>Investment</span>Calculator{" "}
          </h1>
   
<div className={styles.calcCont}>
  <div className={styles.calculator}>
    <h2>Basic Info</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="initialInvestmentInput">Initial Investment:</label></td>
          <td><input id="initialInvestmentInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="annualContributionInput">Annual Contribution:</label></td>
          <td><input id="annualContributionInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="interestRateInput">Interest Rate (%):</label></td>
          <td><input id="interestRateInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="investmentDurationInput">Investment Duration (years):</label></td>
          <td><input id="investmentDurationInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="currentSalaryInput">Current Annual Salary:</label></td>
          <td><input id="currentSalaryInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="current401kInput">Current 401(k) Balance:</label></td>
          <td><input id="current401kInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="contributionInput">Contribution (% of Salary):</label></td>
          <td><input id="contributionInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="employerMatchInput">Employer Match:</label></td>
          <td><input id="employerMatchInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="employerMatchLimitInput">Employer Match Limit:</label></td>
          <td><input id="employerMatchLimitInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="expectedRetirementAgeInput">Expected Retirement Age:</label></td>
          <td><input id="expectedRetirementAgeInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="lifeExpectancyInput">Life Expectancy:</label></td>
          <td><input id="lifeExpectancyInput" type="number" required className={styles.input} /></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className={styles.otherCalc}>
    <h2>Other Info</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="salaryIncreaseInput">Expected Salary Increase (%):</label></td>
          <td><input id="salaryIncreaseInput" type="number" required className={styles.input} /></td>
        </tr>
        <tr>
          <td><label htmlFor="expectedReturnInput">Expected Annual Return (%):</label></td>
          <td><input id="expectedReturnInput" type="number" required className={styles.input} /></td>
          </tr>
          <tr>
          <td><label htmlFor="inflationRateInput">Expected Inflation Rate (%):</label></td>
          <td><input id="inflationRateInput" type="number" required className={styles.input} /></td>
          </tr>
         
        </tbody> 
        </table>

    <button className={styles.button} onClick={calculateInvestment}>Calculate</button>

    <div className={styles.resultCont}>
        <p className={styles.result}>Total Investment Value: <span id="totalValue"></span><br />Growth of Investment: <span id="growthValue"></span></p>

    
    </div>
  </div>
</div>

  <div className={styles.iIcont}>
  <div className={styles.investmentInfo}>
    <h2>What is a 401k?</h2>
      <p>A 401k is a type of retirement savings plan that is sponsored by an employer. It allows employees to contribute a portion of their salary to the plan on a pre-tax basis, which can reduce their taxable income. Employers may also offer matching contributions to the plan, which can further increase the employee's retirement savings.</p>

    <h2>How you can use the calculator for 401k?</h2>
      <p>The calculator can help you determine how much you need to contribute to your 401k in order to reach your retirement savings goals. You can input information such as your current age, retirement age, and expected rate of return to get an estimate of how much you should be contributing each year.</p>

    <h2>How do you open a 401k?</h2>
      <p>In order to open a 401k, you must first check if your employer offers the plan. If so, you can sign up for the plan through your employer's HR department. If your employer does not offer a 401k plan, you may be able to open an individual 401k plan through a financial institution such as a bank or brokerage firm.</p>
      <p>Some popular financial institutions that offer 401k plans include Fidelity, Vanguard, and Charles Schwab.</p>

    <h2>What is a Roth IRA?</h2>
      <p>A Roth IRA is a type of individual retirement account (IRA) that allows you to contribute after-tax dollars. The money in the account grows tax-free, and you can withdraw the funds tax-free in retirement.</p>

    <h2>How you can use the calculator for Roth IRA?</h2>
      <p>The calculator can help you determine how much you need to contribute to your Roth IRA in order to reach your retirement savings goals. You can input information such as your current age, retirement age, and expected rate of return to get an estimate of how much you should be contributing each year.</p>

    <h2>How do you open a Roth IRA?</h2>
      <p>You can open a Roth IRA through a financial institution such as a bank or brokerage firm. Some popular financial institutions that offer Roth IRAs include Fidelity, Vanguard, and Charles Schwab.</p>
    </div>
  </div>
  </div>

  </Layout>

    );
};

export default InvestmentCalculator;