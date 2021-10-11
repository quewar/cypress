import login from "./login";
import enlace from "./url";
import solicitud from "./solicitud";

describe('Primer Modulo de Pruebas', () => {
    before(() => Cypress.Cookies.preserveOnce('$_SESSION'));
    it.skip('Pruebas URL', () => {

        cy.pause();

        enlace.elementsUrl();


    });

    it.skip('Pruebas Login', () => {

        login.elementssesion();



    });

    it('Pruebas Solicitud', () => {
        cy.visit('/');
       cy.login('agente','Cloud2021*')
        solicitud.elementssol();

    });

});

