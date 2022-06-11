
                //ENTRANDO NO SITE ´'https://buger-eats.vercel.app', DEPOIS CLICANDO EM CADASTRO
describe('cadastro', () => {
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


                    //CRIANDO MASSSA DE DADOS
        var entregador = {
            nome: 'Diego Sousa',
            cpf: '08111290390',
            email: 'diego992916913@gmail.com',
            whatsapp: '88993106463',
            endereco:{
                cep: '62322240',
                rua: 'Rua Zeferino Ferreira',
                numero: '1044',
                complemento: 'Ao lado do tok som',
                bairro: 'Régis Diniz',
                cidade_uf: 'Tianguá/CE'
            },
            cnh: 'cnh-digital.jpg'
        }

                //INSERINDO AS INFORMAÇÕES NOS CAMPOS

                //INFORMAÇAÇÃO PESSOAL
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

            // INSERINDO O ENDEREÇO
        cy.get('input[name="postalcode"]').type('62322240')
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

                //CLICANDO NA OPÇÃO MOTO
        cy.get('img[alt="Moto"]').click()

            //VEREIFIÇANDO A BUSCA DO CEP
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
        
    //A função "attachFile" é uma função exportada do arquivo "cypress-file-upload": "^5.0.8"
    //Na parte do codigo " '/images/' + " foi feita uma concatenação com a pasta'images' da pasta 'fixtures'
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

            //CLICANDO NO ULTIMO BUTTON DA PAGINA
        cy.get('button[type]').click()
    })
})

