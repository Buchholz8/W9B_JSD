let item_names=[`phone`,`watch`,`headphones`,];
let item_prices=[`1200`,`200`,`100`,];
let instock=[`true`,`false`,`false`,]

//adding vlues to the first tiems/prices
let first_item_name = item_names[0];
let first_item_prices = item_names[0];

//pushing new items/names/stock to the original arrays
item_names.push(`camera`)
item_prices.push(`300`)
instock.push(`true`)

//assigning values to the last items in the array
let last_item_name = item_names[3]
let last_item_prices = item_prices[3]
let last_instock = instock[3]

//running pop on all 3 arrays
item_names.pop()
item_prices.pop()
instock.pop()
