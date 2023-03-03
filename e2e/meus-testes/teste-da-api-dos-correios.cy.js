describe('Busca por um CEP e valida o resultado', () => { // Descreve o que será testado
    
// Serão testados 10 cenários válidos referentes 10 diferentes Municípios do Estado do Ceará

// 1 - Fortaleza
    
it('Caso Válido 1', () => { // Especifica o tipo caso de teste (se é valido ou invalido) 
       
        cy.request({ // Faz uma requisição (um pedido ao servidor)

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/60765065' // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

       expect(response.body.address).to.equal('Avenida Miguel Aragão') // Verifica se no campo name existe o que está especificado nas aspas
       expect(response.body.number).to.equal('60765065')
       expect(response.body.city).to.equal('Fortaleza')
       expect(response.body.longitude).to.equal(-38.5920417)
       expect(response.body.state).to.equal('CE')
       expect(response.body.id).to.equal('60765065-23011')
       expect(response.body.complement).to.equal("")
       expect(response.body.latitude).to.equal(-3.8267294)
       expect(response.body.neighborhood).to.equal('Aracapé')
       expect(response.body.blockDelivery).to.equal(false)

      })
    
    })

// 2 - Fortim

    it('Caso Válido 2', () => { // Especifica o tipo caso de teste (se é valido ou invalido) 
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/62815000' // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

        expect(response.body.address).to.equal(null) // Verifica se no campo name existe o que está especificado nas aspas
        expect(response.body.number).to.equal('62815000')
        expect(response.body.city).to.equal('Fortim')
        expect(response.body.longitude).to.equal(-37.8724519)
        expect(response.body.state).to.equal('CE')
        expect(response.body.id).to.equal('62815000-23011')
        expect(response.body.complement).to.equal("")
        expect(response.body.latitude).to.equal(-4.4787776)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)

      })
    
    })

    // 3 - Guaramiranga
    
    it('Caso Válido 3', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/62766000' // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

        expect(response.body.address).to.equal(null) // Verifica se no campo name existe o que está especificado nas aspas
        expect(response.body.number).to.equal('62766000')
        expect(response.body.city).to.equal('Guaramiranga')
        expect(response.body.longitude).to.equal(-38.9330716)
        expect(response.body.state).to.equal('CE')
        expect(response.body.id).to.equal('62766000-23011')
        expect(response.body.complement).to.equal("")
        expect(response.body.latitude).to.equal(-4.2618162)
        expect(response.body.neighborhood).to.equal(null)
        expect(response.body.blockDelivery).to.equal(false)
      })
    
    })

    // 4 - Crato

    it('Caso Válido 4', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/63135899' // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

        expect(response.body.address).to.equal('Área Rural') // Verifica se no campo name existe o que está especificado nas aspas
        expect(response.body.number).to.equal('63135899')
        expect(response.body.city).to.equal('Crato')
        expect(response.body.longitude).to.equal( - 39.4122984)
        expect(response.body.state).to.equal('CE')
        expect(response.body.id).to.equal('63135899-23011')
        expect(response.body.complement).to.equal("")
        expect(response.body.latitude).to.equal(-7.229957199999999)
        expect(response.body.neighborhood).to.equal('Área Rural de Crato')
        expect(response.body.blockDelivery).to.equal(false)
      
      })
    
    })
 
  // 5 - Juazeiro do Norte

  it('Caso Válido 5', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
    cy.request({ // Faz uma requisição (um pedido ao servidor)

      method: 'GET', // Escolhe o metodo HTTP GET

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/63020035' // URL + Endpoint

    }).then((response) => { // Transforma o resultado da requisição em uma variavel

      expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

      expect(response.body.address).to.equal('Avenida Airton Sena') // Verifica se no campo name existe o que está especificado nas aspas
      expect(response.body.number).to.equal('63020035')
      expect(response.body.city).to.equal('Juazeiro do Norte')
      expect(response.body.longitude).to.equal(-39.3130824)
      expect(response.body.state).to.equal('CE')
      expect(response.body.id).to.equal('63020035-23011')
      expect(response.body.complement).to.equal("")
      expect(response.body.latitude).to.equal(-7.210789899999999)
      expect(response.body.neighborhood).to.equal('Franciscanos')
      expect(response.body.blockDelivery).to.equal(false)
    
    })
  
  })

// 6 - Quixadá

  it('Caso Válido 6', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
    cy.request({ // Faz uma requisição (um pedido ao servidor)

      method: 'GET', // Escolhe o metodo HTTP GET

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/63907180' // URL + Endpoint

    }).then((response) => { // Transforma o resultado da requisição em uma variavel

      expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

      expect(response.body.address).to.equal('Avenida Belo Horizonte') // Verifica se no campo name existe o que está especificado nas aspas
      expect(response.body.number).to.equal('63907180')
      expect(response.body.city).to.equal('Quixadá')
      expect(response.body.longitude).to.equal( -39.00559080000001)
      expect(response.body.state).to.equal('CE')
      expect(response.body.id).to.equal('63907180-23011')
      expect(response.body.complement).to.equal("")
      expect(response.body.latitude).to.equal(-4.9621403)
      expect(response.body.neighborhood).to.equal('Campo Velho')
      expect(response.body.blockDelivery).to.equal(false)
    
    })
  
  })

  // 7 - Itapipoca

    it('Caso Válido 7', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
    cy.request({ // Faz uma requisição (um pedido ao servidor)

      method: 'GET', // Escolhe o metodo HTTP GET

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/62507410' // URL + Endpoint

    }).then((response) => { // Transforma o resultado da requisição em uma variavel

      expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

      expect(response.body.address).to.equal('Avenida Francisco dos Santos Braga') // Verifica se no campo name existe o que está especificado nas aspas
      expect(response.body.number).to.equal('62507410')
      expect(response.body.city).to.equal('Itapipoca')
      expect(response.body.longitude).to.equal(-39.570121)
      expect(response.body.state).to.equal('CE')
      expect(response.body.id).to.equal('62507410-23011')
      expect(response.body.complement).to.equal("")
      expect(response.body.latitude).to.equal(-3.507931)
      expect(response.body.neighborhood).to.equal('Picos')
      expect(response.body.blockDelivery).to.equal(false)
    
    })
 
  })

// 8 - Sobral

  it('Caso Válido 8', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
    cy.request({ // Faz uma requisição (um pedido ao servidor)

      method: 'GET', // Escolhe o metodo HTTP GET

      url: 'https://cep-v2-americanas-npf.b2w.io/cep/62010381' // URL + Endpoint

    }).then((response) => { // Transforma o resultado da requisição em uma variavel

      expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

      expect(response.body.address).to.equal('Praça da Sé') // Verifica se no campo name existe o que está especificado nas aspas
      expect(response.body.number).to.equal('62010381')
      expect(response.body.city).to.equal('Sobral')
      expect(response.body.longitude).to.equal(-40.3482546)
      expect(response.body.state).to.equal('CE')
      expect(response.body.id).to.equal('62010381-23011')
      expect(response.body.complement).to.equal("")
      expect(response.body.latitude).to.equal(- 3.69105) 
      expect(response.body.neighborhood).to.equal('Centro')
      expect(response.body.blockDelivery).to.equal(false)
    
    })
 
  })

// 9 - Camocim

it('Caso Válido 9',() => { // Especifica o tipo caso de teste (se é valido ou invalido)

cy.request ({ //Faz uma requisição (um pedido ao servidor)

method: 'GET', //Escolhe o metodo HTTP GET

url: 'https://cep-v2-americanas-npf.b2w.io/cep/62400000' // URL + Endpoint

}).then((response) => { // Transforma o resultado da requisição em uma variavel

  expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

  expect(response.body.address).to.equal(null) // Verifica se no campo name existe o que está especificado nas aspas
  expect(response.body.number).to.equal('62400000')
  expect(response.body.city).to.equal('Camocim')
  expect(response.body.longitude).to.equal(-40.8388865)
  expect(response.body.state).to.equal('CE')
  expect(response.body.id).to.equal('62400000-23011')
  expect(response.body.complement).to.equal("")
  expect(response.body.latitude).to.equal(-2.9014475) 
  expect(response.body.neighborhood).to.equal(null)
  expect(response.body.blockDelivery).to.equal(false)

   })

})   

//10 - Crateús

it('Caso Válido 10',() => { // Especifica o tipo caso de teste (se é valido ou invalido)

  cy.request ({ //Faz uma requisição (um pedido ao servidor)
  
  method: 'GET', //Escolhe o metodo HTTP GET
  
  url: 'https://cep-v2-americanas-npf.b2w.io/cep/63700117' // URL + Endpoint
  
  }).then((response) => { // Transforma o resultado da requisição em uma variavel
  
    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200
  
    expect(response.body.address).to.equal('Mercado Público de Crateus') // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('63700117')
    expect(response.body.city).to.equal('Crateús')
    expect(response.body.longitude).to.equal(-40.6706604)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('63700117-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-5.1788342) 
    expect(response.body.neighborhood).to.equal('Centro')
    expect(response.body.blockDelivery).to.equal(false)
  
     })
  
  })      

// Serão testados 13 cenários inválidos
// 1 - Cep composto apenas por zeros

it('Caso Inválido 1', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/00000000' // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(404); // Verifica se no resultado da response o status code é 200

      })
    
    })

   // 2 - Campo do Cep não preenchido.

    it('Caso Inválido 2', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/ '  // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(400); // Verifica se no resultado da response o status code é 200
        

      })
    })

// 3 - Cep não existente na relação dos correios.
    
it('Caso Inválido 3', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

        failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/63900230'  // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

        expect(response.status).to.equal(404); // Verifica se no resultado da response o status code é 200
        

      })
    })

// 4 - Campo da response referente ao "address" está incorreto.
    
    it('Caso Inválido 4', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
      cy.request({ // Faz uma requisição (um pedido ao servidor)

      failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

        method: 'GET', // Escolhe o metodo HTTP GET

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

      }).then((response) => { // Transforma o resultado da requisição em uma variavel

       expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

       expect(response.body.address).to.equal('Praça')
       expect(response.body.number).to.equal('60170010')
       expect(response.body.city).to.equal('Fortaleza')
       expect(response.body.longitude).to.equal(-38.4971913)
       expect(response.body.state).to.equal('CE')
       expect(response.body.id).to.equal('60170010-23011')
       expect(response.body.complement).to.equal("")
       expect(response.body.latitude).to.equal(-3.732905) 
       expect(response.body.neighborhood).to.equal('Aldeota')
       expect(response.body.blockDelivery).to.equal(false)
  
      })
   
    })

// 5 - Campo da response referente ao "number" incorreto.
    
it('Caso Inválido 5', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('601700')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)
  
     })

})

// 6 - Campo da response referente à "city" está incorreto.
    
it('Caso Inválido 6', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Maracanaú')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 7 - Campo da response referente à "longitude" está incorreto.
    
it('Caso Inválido 7', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 8 - Campo da response referente ao "state" está incorreto.
    
it('Caso Inválido 8', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('RN')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 9 - Campo da response referente ao "id" está incorreto.
    
it('Caso Inválido 9', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 10 - Campo da response referente ao "complement" está incorreto.
    
it('Caso Inválido 10', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("V")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 11 - Campo da response referente à "latitude" está incorreto.
    
it('Caso Inválido 11', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 12 - Campo da response referente à "neighborhood" incorreto.
    
it('Caso Inválido 12', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Centro')
    expect(response.body.blockDelivery).to.equal(false)

  })

})

// 13 - Campo da response referente ao "blockDelivery" está incorreto.
    
it('Caso Inválido 13', () => { // Especifica o tipo caso de teste (se é valido ou invalido)
      
  cy.request({ // Faz uma requisição (um pedido ao servidor)

  failOnStatusCode: false, // Faz o teste ser executado mesmo falhando o status code 

    method: 'GET', // Escolhe o metodo HTTP GET

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/60170010'  // URL + Endpoint

  }).then((response) => { // Transforma o resultado da requisição em uma variavel

    expect(response.status).to.equal(200); // Verifica se no resultado da response o status code é 200

    expect(response.body.address).to.equal('Praça Portugal')  // Verifica se no campo name existe o que está especificado nas aspas
    expect(response.body.number).to.equal('60170010')
    expect(response.body.city).to.equal('Fortaleza')
    expect(response.body.longitude).to.equal(-38.4971913)
    expect(response.body.state).to.equal('CE')
    expect(response.body.id).to.equal('60170010-23011')
    expect(response.body.complement).to.equal("")
    expect(response.body.latitude).to.equal(-3.732905) 
    expect(response.body.neighborhood).to.equal('Aldeota')
    expect(response.body.blockDelivery).to.equal(true)

  })

})



   
  })
