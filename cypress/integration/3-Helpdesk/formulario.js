var roles = [

    "ADM",
    "UDA"

]


class formulario {


    elementsform() {

        //cy.get('.cursor-pointer').click();
        //cy.wait(2000);
        //cy.get('.react-autosuggest__input').type('{enter}').then(nombres => {
        //    cy.request('GET', '/')        //})
        cy.get('div.widget-heading').eq(0).contains('AGENTE DE MESA').within((rol) => {
            cy.get(rol)

        })
        cy.get('span').contains('ADM')


        if (cy.log(roles[0]) === "ADM") {
            cy.get('.form-group').within(() => {

                cy.get('path').eq(2).click({ force: true })
                cy.get('div.css-1g6gooi')
                    .eq(2)
                    .find('div.react-select__input').then(() => {
                        cy.wait(5000)
                        cy.get('input')
                            .eq(4)
                            .type('Mesa de Servicios{enter}', { force: true })
                        cy.wait(5000)
                        cy.get('input')
                            .eq(5)
                            .type('Solicitud de documentos{enter}', { force: true })
                        cy.wait(5000)
                    })
            })
        } else {

            cy.log('error')
        }
        /*cy.get('.btn-group > .btn-link').click({ force: true })

        cy.get('div.rm-pointers.dropdown-menu-lg.dropdown-menu.dropdown-menu-right.show').within(() => {
            cy.get('button')
                .click({ force: true })

        })*/




        //.type('{insert}');
        /* cy.wait(2000);
         cy.get('.form-group').eq(7).click({ force: true }).type('Solicitud de documentos{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(8).click({ force: true }).type('Requerimiento{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(9).click({ force: true }).type('Actualizacion{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(10).click({ force: true }).type('Solicitud de documentos{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(11).click({ force: true }).type('Examenes{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(12).click({ force: true }).type('Responsable servicio{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(13).click({ force: true }).type('AGENTE DE MESA{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(14).click({ force: true }).type('Media{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(15).click({ force: true }).type('Media{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(16).should('have.text', 'PrioridadMedia');
         cy.wait(2000);
         cy.get('.form-group').eq(17).click({ force: true }).type('helppeople{enter}');
         cy.wait(2000);
         cy.get('.form-group').eq(18).click({ force: true }).type('{enter}');
         cy.get('button.btn.btn-primary').eq(0).click({ force: true });
 */
    }
}

module.exports = new formulario();