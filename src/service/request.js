let parseJSON = response => {
  return response.json()
}

let checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    // 返回一个包含 response（一个 Response 对象）的 promise 对象
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

let request = (url, options) => {
  options = Object.assign({},
    {headers: new Headers({'Content-Type': 'application/json'})},
    options
  )
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch((err) => ({ err }))
}

export default request
