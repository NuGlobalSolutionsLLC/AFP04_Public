const crypto = require("crypto");
const fetch = require("node-fetch");

const DETA_ID = "b0o1rcfqugv";
const DETA_KEY = "b0o1rcfqugv_HawkharCViewAfkSjwW7aDoDLPJpB3Zo";
const accounts = [
  {
    name: "AFP4 Public",
    user: {
      name: "guest",
      password: "Lkx1nk0",
    },
    DETA_NAME: "afp4_public_users",
  },
  {
    name: "AFP4 Private",
    user: {
      name: "guest",
      password: "sX?9D#k",
    },
    DETA_NAME: "afp4_private_users",
  },
  {
    name: "AFP4 Storymap",
    user: {
      name: "guest",
      password: "WsN0Ye",
    },
    DETA_NAME: "afp4_storymap_users",
  },
];

const sha256 = (message) => {
  const hash = crypto.createHash("sha256");
  hash.update(message);
  return hash.digest("hex");
};

accounts.forEach(async (account) => {
  let password = sha256(account.user.password);

  const url = `https://database.deta.sh/v1/${DETA_ID}/${account.DETA_NAME}/items`;
  fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": DETA_KEY,
    },
    body: JSON.stringify({
      items: [
        {
          key: account.user.name,
          username: account.user.name,
          password: password,
        },
      ],
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      else if (response.status === 404) {
        errors.value = errorMessage;
        loginDisabled.value = false;
      } else {
        console.error(response);
      }
    })
    .then((json) => {
      console.log(account.name);
      console.log(`Successfully created ${json.processed.items[0].key}`);
    });
});
