export type DappStarter = {
  "version": "0.1.0",
  "name": "dapp_starter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "deployer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reserve",
      "accounts": [
        {
          "name": "reserveState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "se",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "reserveState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserve",
            "type": "publicKey"
          },
          {
            "name": "apy",
            "type": "f32"
          },
          {
            "name": "rewardToken",
            "type": "publicKey"
          },
          {
            "name": "tokenDecimals",
            "type": "u8"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    }
  ]
};

export const IDL: DappStarter = {
  "version": "0.1.0",
  "name": "dapp_starter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "deployer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reserve",
      "accounts": [
        {
          "name": "reserveState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "se",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "reserveState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserve",
            "type": "publicKey"
          },
          {
            "name": "apy",
            "type": "f32"
          },
          {
            "name": "rewardToken",
            "type": "publicKey"
          },
          {
            "name": "tokenDecimals",
            "type": "u8"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
