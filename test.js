const login = data => {
  const rootUsers = `https://database.deta.sh/v1/${DETA_ID}/users/`
  fetch(`${rootUsers}items/${data.username}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-API-Key': DETA_KEY
    }
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    else {
      response.json().then(r => {
        if (!Object.keys(r).includes('username')) {
          self.postMessage({
            type: 'login',
            data: { error: true }
          })
        }
      })
    }
  }).then(json => {
    if (json) {
      sha256(data.password).then(hash => {
        let answer = {
          type: 'login',
          data: { error: true }
        }
        if (json.password === hash) {
          answer.data.error = false
        }
        self.postMessage(answer)
      })
    }
  })
}
