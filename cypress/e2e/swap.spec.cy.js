import data from '../fixtures/eventDetails.json';
import txData from '../fixtures/txDetails.json';

describe('Verify Data Layer - Swap screen', () => {

  beforeEach(('Navigate To Url', ()=>{
    cy.visit(`https://swap.onramper.dev/`);

  }))

  it.only('Verify swap event', () => {
    
    cy.contains('Connect Wallet').click();
    
    cy.verifyDataLayer(data.experiment.event)
    .then((event)=>{
      assert.exists(event, "staticRoutingExperiment is loaded");
      assert.isNotArray(event, "only 1 expermiment event is triggered");
      assert.equal(event.action, data.swap.action);
      assert.equal(event.label, data.swap.label);
      assert.equal(event.screen, data.swap.screen);
      assert.equal(event.trigger, data.swap.trigger);
    })   
   
  });

  


})

