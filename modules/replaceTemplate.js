module.exports = (temp, product) => {
  //there might be multiple instances of this placeholder, so wrap it in
  //regulat exp and use the g-flag on it, which means global, so this will make it
  //so that all of these placeholders will get replaced and not just the 1st one that
  //occurs.
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
  //its not a good practice to directly manipulate the arguments that we pass into a fn,
  //so we created a new variable and fron now onwards we can manipulate that var.
  output = output.replace(/{%IMAGE%}/g, product.image)
  output = output.replace(/{%PRICE%}/g, product.price)
  output = output.replace(/{%FROM%}/g, product.from)
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
  output = output.replace(/{%QUANTITY%}/g, product.quantity)
  output = output.replace(/{%DESCRIPTION%}/g, product.description)
  output = output.replace(/{%ID%}/g, product.id)
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

  return output
}
