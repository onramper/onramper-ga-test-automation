import data from '../fixtures/eventDetails.json';
import txData from '../fixtures/txDetails.json';

describe('Verify Data Layer - Tx screen', () => {

  beforeEach(('Navigate To Url', ()=>{
    cy.visit(`/?country=${txData.country}`);

  }))

  it('Verify Static Routing Experiment', () => {   
    
    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.verifyDataLayer(data.experiment.event)
    .then((event)=>{
      assert.exists(event, "staticRoutingExperiment is loaded");
      assert.isNotArray(event, "only 1 expermiment event is triggered");      
      //assert.equal(event.category, data.experiment.controlCategory || data.experiment.variatACategory);
      assert.equal(event.label, data.experiment.staticRoutingLabel);
    })   
   
  });

  it('Verify Fiat to crypto Buy transaction', () => {    

    cy.get('[data-testid="buy-button"]').click();

    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      assert.exists(event, "transactionForm buy button click is loaded");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.buttonCategory);
      assert.equal(event.label, data.elementClick.buyLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
    
  });

  it('Verify menu click', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.epH9g').click();

    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      assert.exists(event, "Menu is loaded");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.buttonCategory);
      assert.equal(event.label, data.elementClick.menuLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
    
  })

  it('Verify menu close', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.epH9g').click();
    cy.get('.vTKWb > img').click();

    cy.verifyDataLayerByAction(data.elementClick.menuCloseAction)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Menu close is loaded");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.linkCategory);
      assert.equal(event.label, data.elementClick.menuCloseLabel);
      assert.equal(event.event, data.elementClick.event);
    })
  
  });

  it('Verify fiat currency dropdown click', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.mIOFA > :nth-child(1)').click();
    
    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Fiat currency drop-down clicked");
      assert.isNotArray(event, "only 1 event is triggered");
      //assert.equal(event.category, data.elementClick.dropDownCategory);
      assert.equal(event.label, data.elementClick.inCurrecncyLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
  
  });

  it('Verify fiat currency search', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.mZ-b8  ').first().click();
    cy.get('.yfPFp').type(txData.fiatCurrency);
    cy.get('._9mdHL > li').click();
    
    cy.verifyDataLayerByAction(data.elementClick.inCurrencyAction)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Fiat currency search");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.dropDownValCategory);
      assert.equal(event.label, txData.fiatCurrency);
      assert.equal(event.event, data.elementClick.event);
    })
  
  });

  it('Verify crypto currency dropdown click', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.mIOFA > :nth-child(3)').click();
    
    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      cy.log(event)
      assert.exists(event, "Crypto currency drop-down clicked");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.dropDownCategory);
      assert.equal(event.label, data.elementClick.outCurrecncyLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
  
  });

  it('Verify crypto currency search', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.mIOFA > :nth-child(3)').click();
    cy.get('.yfPFp').type(txData.cryptoCurrecy);
    cy.get('.TnY4n').click();
    
    cy.verifyDataLayerByAction(data.elementClick.outCurrencyAction)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Crypto currency search");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.dropDownValCategory);
      assert.equal(event.label, txData.cryptoCurrecy);
      assert.equal(event.event, data.elementClick.event);
    })
  
  });

  it('Verify amount change', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('[data-testid="currency-input"]')
    .clear()
    .type(txData.amount);
    
    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "amount change event is loaded");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.fieldCategory);
      assert.equal(event.label, data.elementClick.amountLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
  
  });

  it('Verify payment method change', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.pNR-O').click();
    
    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Payment method change is triggered");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.optionCategory);
      assert.equal(event.label, txData.paymentMetod);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
  
  });

  it('Verify other payment methods click', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.NFXPo > :nth-child(3)').click();
    
    cy.verifyDataLayer(data.elementClick.event)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Payment method change is triggered");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.optionCategory);
      assert.equal(event.label, data.elementClick.otherLabel);
      assert.equal(event.action, data.elementClick.txFormAction);
    })
  
  });
  
  it('Verify click option from other payment methods', () => {    

    // cy.intercept('GET',`https://staging.onramper.tech/rate/${txData.fiatCurrency}/${txData.cryptoCurrecy}/${txData.paymentMetod}/${txData.amount}?country=${txData.country}&includeIcons=true&minAmountEur=0`).as('tx');
    // cy.wait('@tx').its('response.statusCode').should('eq', 200)

    cy.get('.NFXPo > :nth-child(3)').click();
    
    cy.get('.TnY4n').click();

    cy.verifyDataLayerByAction(data.elementClick.paymentMethodSelectionAction)
    .then((event)=>{
      cy.log(event);
      assert.exists(event, "Payment method option selection is triggered");
      assert.isNotArray(event, "only 1 event is triggered");
      assert.equal(event.category, data.elementClick.dropDownValCategory);
      assert.equal(event.label, txData.paymentMetod);
      assert.equal(event.event, data.elementClick.event);
    })
  
  });


  


})

