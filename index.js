let nome = "Oriosvaldo"
let quantidadeXp = 10001

if (quantidadeXp <= 1000){
    console.log("O herói " +nome+ " está no nível Ferro")
} else if (quantidadeXp > 1000 && quantidadeXp <= 2000 ){
    console.log("O herói " +nome+ " está no nível Bronze")
} else if (quantidadeXp > 2000 && quantidadeXp <= 5000 ){
    console.log("O herói " +nome+ " está no nível Prata")
} else if (quantidadeXp > 5000 && quantidadeXp <= 7000 ){
    console.log("O herói " +nome+ " está no nível ouro")
} else if (quantidadeXp > 7000 && quantidadeXp <= 8000 ){
    console.log("O herói " +nome+ " está no nível platina")
} else if (quantidadeXp > 8000 && quantidadeXp <= 9000 ){
    console.log("O herói " +nome+ " está no nível Ascendente")
} else if (quantidadeXp > 9000 && quantidadeXp <= 10000 ){
    console.log("O herói " +nome+ " está no nível Imortal")
} else{
    console.log("O herói " +nome+ " está no nível Radiante")
}