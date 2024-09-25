function manageInventory(currentInventory, newDeliveries){
    let updateInventory  = [...currentInventory];

    newDeliveries.forEach(delivery => {
        let existingItem = updateInventory.find(item => item.item == delivery.item)
        if(existingItem){
           existingItem.quantity += delivery.quantity

        }else{
            updateInventory.push(delivery)
        }
    });

    console.log(updateInventory[0]);
    console.log(updateInventory[1]);
    console.log(updateInventory[2]);
    console.log(updateInventory[3]);
          
}
manageInventory( [
    { item: 'ябълки', quantity: 10 },
    { item: 'банани', quantity: 5 },
    { item: 'портокали', quantity: 8 }
  ], [
    { item: 'ябълки', quantity: 5 },
    { item: 'киви', quantity: 7 },
    { item: 'банани', quantity: 3 }
  ]);
//   {item: 'ябълки', quantity: 15}
// manageInventory.js:14
// {item: 'банани', quantity: 8}
// manageInventory.js:15
// {item: 'портокали', quantity: 8}
// manageInventory.js:16
// {item: 'киви', quantity: 7}