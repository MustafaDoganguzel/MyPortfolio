describe('Social linkler calisiyor mu?', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5175/');
    });

    it('Github butonuna tikla', () => {
        cy.get('[data-cy="github"]').click();
        cy.origin('https://github.com', () => {
            cy.url().should('include', 'github');
        });
    });
    // LINKEDINE GIRMEYE CALISTIGI ICIN HATA ALIYOR
    // it('LinkedIn butonuna tikla', () => {  
    //     cy.get('[data-cy="linkedin"]').click();
    //     cy.origin('https://www.linkedin.com', () => {
    //         cy.url().should('include', 'linkedin');
    //     });
    // });


});

describe('Dil secenegi calisiyor mu', () => {

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit('http://localhost:5175/');
    });

    it('Dil degistirme butonuna tikla', () => {

        cy.get('[data-cy="lang-cy"]').contains("Switch to English").click();
        cy.wait(5000);

        cy.get('[data-cy="lang-cy"]').contains("Türkçe'ye Geç").should("be.visible");
    });
});
