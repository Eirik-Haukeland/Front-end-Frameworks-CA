const baseUrl = "https://api.noroff.dev/api/v1/online-shop"
//TODO type def for a product: "https://api.noroff.dev/api/v1/online-shop"

/**
 * @return Promise<Array<Object>>
 */
export const getAllProducts = async () => fetch(baseUrl).then(r => r.json()).catch(console.error)

/**
 * @param string productId
 * @return Promise<Object>
 */
export const getSingleProduct = async (productId) => fetch(`${baseUrl}/${productId}`).then(r => r.json()).catch(console.error)

/**
 * @param Array<string> productIds
 * @returns Promise<Array<object>>
 */
export const getListedProducts = async (productIds) => {
  if (typeof productIds['0'] !== 'string') {
    return []
  }

  const fetches = await Promise.all(
    productIds.map(productId => getSingleProduct(productId))
  )

  return fetches
}

/**
 * @param {object} productIds
 * @returns Promise<Array<object>>
 */
export const sendMessage = async (fullName, subject, emailAddr, message) => {

  const body = JSON.stringify({fullName, subject, emailAddr, message})

  console.log(body, 'test')

  /* 
  const response = await fetch(baseUrl, {
    method: 'POST',
    body
  })


  if (response.ok) {
    return await response.json()
  }
  */
}