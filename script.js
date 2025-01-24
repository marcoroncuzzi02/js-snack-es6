// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciclette = [
    {
        nome : 'biciDaCorsa',
        peso : 15
    },
    {
        nome : 'biciDaCitta',
        peso : 25
    },
    {
        nome : 'biciDaMountainBike',
        peso : 20
    },
    {
        nome : 'biciDaBambino',
        peso : 12
    }
]

let biciLeggera = biciclette[0]

for (let i=0; i < biciclette.length; i++){
    let element = biciclette[i]
   
    if ( biciLeggera.peso > element.peso ){
        biciLeggera = element
    }
}

console.log(biciLeggera)



// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).

const squadre = [
    {
      nome: "Juventus",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Inter",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Milan",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Roma",
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: "Napoli",
      puntiFatti: 0,
      falliSubiti: 0
    }
  ]

  function random (min,max){
    return Math.floor((Math.random() * max) + min);
  }

  let nuovoArray = []

  for (let i=0; i < squadre.length; i++){
    let element = squadre[i]
    element.puntiFatti = random(5,90)
    element.falliSubiti = random(1,20)

    nuovoArray.push(element.nome, element.falliSubiti)
  }
  console.log(squadre, nuovoArray)


