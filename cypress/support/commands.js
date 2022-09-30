Cypress.Commands.add('verifyDataLayer',(eve)=>{

    cy.window().then((win)=>{
        return win.dataLayer.find(x => x.event == eve);
    })
      
})
 
Cypress.Commands.add('verifyDataLayerByAction',(action)=>{

    cy.window().then((win)=>{
        return win.dataLayer.find(x => x.action == action);
    })
      
})

