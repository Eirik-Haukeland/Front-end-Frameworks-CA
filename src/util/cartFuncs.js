const cartName = "cart"

/**
 * @param {string} itemId - id for the product
 * @throws {InvalidArgumentException} argument not a string
 * @throws missing argument
 */
export const addItemsToCart = (itemId) => {
  if (itemId === undefined) {
    throw new Error('Missing item id')
  }
  if (typeof itemId !== 'string') {
    throw new Error('Parameter is not a string!')
  }

  const itemsInCart = localStorage.getItem(cartName);
  
  if (itemsInCart === null) {
    localStorage.setItem(cartName, JSON.stringify([itemId]))
    return
  }
  
  const itemsSet = new Set(JSON.parse(itemsInCart));

  itemsSet.add(itemId)

  localStorage.setItem(cartName, JSON.stringify([...itemsSet]))
}

/**
 * @returns {Array<string>} - array of product identifyers 
 */
export const getAllItemsFromCart = () => {
  const itemsInCart = localStorage.getItem(cartName)

  if (itemsInCart === null) {
    return [];
  }

  return JSON.parse(itemsInCart)
}

/**
 * @returns {number} - number of items in cart
 */
export const numOfItemsInCart = () => {
  const itemsInCart = localStorage.getItem(cartName);

  if (itemsInCart === null) {
    return 0;
  }

  const numOfItems = JSON.parse(isItemInCart).length

  return numOfItems;
}

/**
 * @param {string} itemId  - id for the product
 * @throws {InvalidArgumentException} argument not a string
 * @throws missing argument
 * @returns {boolean}
 */
export const isItemInCart = (itemId) => {
  if (itemId === undefined) {
    throw new Error('Missing item id')
  }
  if (typeof itemId !== 'string') {
    throw new Error('Parameter is not a string!')
  }

  const itemsInCart = localStorage.getItem(cartName);
  
  if (itemsInCart === null) {
    return false;
  }

 return new Set (JSON.parse(itemsInCart)).has(itemId);
}

/**
 * @param {string} itemId - id for the product
 * @throws {InvalidArgumentException} argument not a string
 * @throws missing argument
 */
export const removeItemFromCart = (itemId) => {
  if (itemId === undefined) {
    throw new Error('Missing item id')
  }
  if (typeof itemId !== 'string') {
    throw new Error('Parameter is not a string!')
  }

  const itemsInCart = JSON.parse(localStorage.getItem(cartName));
  const newItemsList = new Set (itemsInCart)
  newItemsList.delete(itemId);

  localStorage.setItem(cartName, JSON.stringify([...newItemsList]));
}

export const removeAllItemsFromCart = () => {
  localStorage.setItem(cartName, JSON.stringify([]));
}