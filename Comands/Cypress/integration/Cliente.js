//<reference types="Cypress"/>

describe('Creacion fallida de los clientes',function()
{
   it('Test1_Creación fallida de nuevo cliente  por sharedkey invalido',function(){
    cy.createClient('2365%&','John Smith','prueba@correo.com');
    //Assertion
    cy.get('#mat-error-2').contains("Please verify all fields, special characteres are not allowed")

  } )
   it('Test2_Creación fallida de nuevo cliente  por email invalido',function(){
    cy.createClient('2903','John Smith','/apegate/*@correo');
    //Assertion
    cy.get('#mat-error-2').contains("Invalid email adress.Verify structure, characters and that legth")

  })

   it('Test3_Creación fallida por BusinessId vacio',function(){
    cy.createClient('2903','{del}','prueba@correo.com');
    //Assertion
    cy.get('#mat-error-1').contains("Required field")
  })
})
