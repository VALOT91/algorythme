// intro
// ----------------------
// définitio  de l'algorythmie : résoudre un probléme de manière systématique.


//--------------------------------------------------------------
// I. les variables servent à stocker des valeurs.
// Pour les utiliser nous devons d'abord l'initialiser. En donnant un nom et une valeur d'initialisation.
// obsolete: 

// var prenom =  "gilles"
// console.log(prenom)

// var age=24
// console.log(age)

// la bonne façon :

// depuis 2015 EcmaScript6 (ES6)

// a.  La const
// ------------
// const prenom = "julien"
// console.log(prenom)

// let age = 35
// console.log(age)

// la convension Kamel case
// pour définir une variable d'un nom composé : le deuxième mot commence par une majuscule.

// II. Les différents types de valeur.
//------------------------------------

// Les types de valeur sont :
// Liste : 
// nombres (number), 
// Chaines (string),
// Tableaux (array)
// Objets (object)
// Boolean 

//Les nombres 
// const num1=50
// const num2 = 30
// const calcul = num1+ num2
// console.log(calcul)

// let num1=50
// const num2 = 30
// num1 = num1 + num2
// console.log(num1)

// 4. Chaines de caractéres 

// const prenom = 'gilles'
// let nom = 'valot ' + prenom
// console.log(nom)

// La concaténation
// Ajouter du texte 
// const phrase = "bonjour, mon nom est "
// const prenom ="gilles"
// const nom ="valot"
// console.log(phrase + prenom + " " +nom)

// les templates string depuis ES6
//----------------------------------------
// Utilisation des backquotes altgr + `` (touche7)
// permettant de mettre du javascript dans une string
// const prenom="gilles"
// const res = `bonjour je m'appelle ${prenom}`
// console.log(res)

// II. les array (tableaux)  stock tout type
//declarer un array : []

// const ville = "itteville"
// const tab = ["gilles","valot",59,ville]
// let tab2 = ["gilles","mohamed","lionel"]


// tab2.push("pierre") // ajouter à la fin
// console.log(tab2[3])  //mohamed
// tab2.pop()  // supprime le dernier
// tab2.shift()  // supprimer le premier

// console.log(tab2[0]) 
// tab2.unshift("gv")   // ajoute au début du tableau
// console.log(tab2[0]) 
 
 //exo

//  const nom ="valot"
//  const prenom ="gilles"
//  const res = `${nom[0]}.${prenom[0]}`

//  const arr = [nom,prenom,res]
//  console.log(arr)

 // Les objets
 // Schéma qui servent à contenir plusieurs propriétés
 // Les objets sont modifiables à volonté.
 // 
 
//  const client1 = { 

//     prenom:"gilles",
//     nom:"valot",
//     age:40,
//     genre:"Mr",
//     email:"gv@free.fr",
//     tel:"0845632488",
//     basket:[
//         {
//             articles:'jeans',
//             price:50
//         },
//         {
//             articles:'shoes',
//             price:30
//         }
        
//     ]

//  }

//  console.log(client1.basket[1].price)


// const christmas = [
//         {
//             article: 'Play V',
//             price: 499
//         },
//         {
//             article: 'iPhone XIII',
//             price: 999
//         }
//     ]
    
//  const res = christmas[0].price + christmas[1].price

// console.log(res)

  // les booleans 
  // permet de définir si iune valeur est true ou false.

//   const a =14
 
// if(a>=18)
// {
//     console.log("tu as le droit de boire")

// }else if (a<15) {
//     console.log("va boire ton lait")

// }else if (a<18) {
//     console.log("rentres chez toi")
// }
//condition ternaire s'ecrit sur une seule ligne.


// const a=10
// const b=8
// const res = `${a===b ?"c'est vrai":"c'est faux"}`

// Fonctions

// depuis es6

// const calcul = (num1,num2)=> {
//     const res = num1+num2
//     console.log(res)
// }






const calcul = (arr)=> {
    const res =  (arr[0]+arr[1])/2
    console.log(`moyenne:${res}`)
}

const arr=[12,24]
calcul(arr)

const arr2=[1,26]
calcul(arr2)