import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";
import Random_Textt from "./Random_Text";

function Add_Provider() {

it('Click on provider.', () => {
    cy.get('.submenu.active > .relative > .cursor-pointer > :nth-child(2)').click()
    expect(true).to.equal(true)

});



it('1- Click on add Provider.', () => {
    cy.get('.px-5').click()
    expect(true).to.equal(true)
    });

   it('2- Enter First Name.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("sdfhgkjl")
   });

    it('3- Enter Middle Name.', () => {
        cy.get(':nth-child(2) > .form-group > .form-controls > input').type("xyz " + Random_Textt(), {delay:150})
    });
    
    it('4- Enter Last Name.', () => {
        cy.get(':nth-child(3) > .form-group > .form-controls > input').type("abc " + Random_Textt(), {delay:150})
    });
    
    it('Enter Email.', () => {
        cy.get(':nth-child(4) > .form-group > .form-controls > input').type(Provider_data.Provider_Email)
    });
    it('5- Enter Password.', () => {
        cy.get(':nth-child(5) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
        cy.get(':nth-child(5) > .form-group > .form-controls > .ico').click()
    });
    
    it('6- Enter Confirm Password.', () => {
        cy.get(':nth-child(6) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
        cy.get(':nth-child(6) > .form-group > .form-controls > .ico').click()
    });
    
    it('7- Click on Next Button.', () => {
        cy.get('.btn').click()
    });

it('8- Verifying the Congratulation Screen.', () => {
    
});

}
export default Add_Provider