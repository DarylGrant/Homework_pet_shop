myFunctions = {

  getName(shop){
    return shop.name;
  },
  
getTotalCash(shop){
  return shop.admin.totalCash;
},

addOrRemoveCash(shop){
  return shop.admin.totalCash += 10;
},

addOrRemoveCash(shop){ //
  return shop.admin.totalCash -= 10;
},

getPetsSold(shop){
  return shop.admin.petsSold;
},

increasePetsSold(shop){
  return shop.admin.petsSold += 2;
},

getStockCount(shop){
  return shop.pets.length;
},



addPetToStock(shop){
  return shop.pets.length += 1;
},



getPetsByBreed(shop, breeds){
petsBreed = []
for(let pet in shop)
if petsBreed == ("British Shorthair"){
return petsBreed;

}
}

}
  



  
  





module.exports = myFunctions;
