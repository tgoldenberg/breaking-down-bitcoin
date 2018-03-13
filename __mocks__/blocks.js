const MY_ADDRESS = "1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M";
const FRIEND_ADDRESS = "1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD";
const COIN = 100000000;

const BLOCKS = [
  // Genesis block
  {
    hash: "00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea",
    version: 1,
    previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1231006505000,
    difficulty: 22,
    nonce: 2620954,
    blocksize: 441,
    txs: [
      {
        hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
        vin: [
          { prevout: "COINBASE" }
        ],
        vout: [
          {
            value: 50 * COIN,
            scriptPubKey: MY_ADDRESS
          }
        ]
      },
    ]
  },
  // Block #2 - new Coinbase and give 20 BTC to friend
  {
    hash: "000001a20dacb2ede72eb4b35dea74b83fd4bc0b23849b789fee19c7eac2f1b9",
    version: 1,
    previousHash: "00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea",
    timestamp: 1520947111852,
    difficulty: 22,
    nonce: 210212,
    blocksize: 225,
    txs: [
      {
        hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
        vin: [
          { prevout: "COINBASE" }
        ],
        vout: [
          {
            value: 50 * COIN,
            scriptPubKey: MY_ADDRESS
          }
        ]
      },
      {
        hash: "522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc",
        vin: [
          {
            prevout: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
            n: 0,
            scriptSig: "044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba 3046022100f744154f854952dedd6d673b1f15fcf028159651816e61f1df62955802c8356a022100ec920c0128d84166a802441d174acd665c84d571f7ff908ae1acb95e43a996dc"
          }
        ],
        vout: [
          {
            value: 6 * COIN,
            scriptPubKey: FRIEND_ADDRESS,
          },
          {
            value: 44 * COIN,
            scriptPubKey: MY_ADDRESS
          }
        ]
      },
    ]
  },
  // Block #3 - new Coinbase and get 5 BTC from friend
  {
    hash: "00000369dd0974cb0a472a961247607c196e6353c3ea04746b9bde3272b7de6a",
    previousHash: "000001a20dacb2ede72eb4b35dea74b83fd4bc0b23849b789fee19c7eac2f1b9",
    version: 1,
    timestamp: 1520948119344,
    difficulty: 22,
    nonce: 6317304,
    txs: [
      {
        hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
        vin: [
          { prevout: "COINBASE" }
        ],
        vout: [
          {
            value: 50 * COIN,
            scriptPubKey: MY_ADDRESS
          }
        ]
      },
      {
        hash: "",
        vin: [
          {
            prevout: "522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc",
            n: 1,
            scriptSig: "304402201d66ed17c21543a2bed0d6f1a85b0929c6c2d5b024848471e5f72e95b9dbe95902202086c3ffa7e273f1cd4d6706f61960c8333a9700b0687dd2b1b7014bdb7c115a"
          },
        ],
        vout: [
          {
            value: 10 * COIN,
            scriptPubKey: "1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD"
          },
          {
            value: 10 * COIN,
            scriptPubKey: "1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M"
          }
        ]
      }
    ]
  }
];

export default BLOCKS;
