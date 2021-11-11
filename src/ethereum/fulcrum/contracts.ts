import Fulcrum from "./abi/Fulcrum.json";

const contracts = {
    Fulcrum: { abi: Fulcrum },
    "dai": {
        "pool": "0x6b093998D36f2C7F0cc359441FBB24CC629D5FF0",
        "lpToken": "0x6b093998D36f2C7F0cc359441FBB24CC629D5FF0",
        "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"]
      },
      "weth": {
        "pool": "0xB983E01458529665007fF7E0CDdeCDB74B967Eb6",
        "lpToken": "0xB983E01458529665007fF7E0CDdeCDB74B967Eb6",
        "tokens": ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"]
      },
      "usdc": {
        "pool": "0x32E4c68B3A4a813b710595AebA7f6B7604Ab9c15",
        "lpToken": "0x32E4c68B3A4a813b710595AebA7f6B7604Ab9c15",
        "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
      },
      "wbtc": {
        "pool": "0x2ffa85f655752fB2aCB210287c60b9ef335f5b6E",
        "lpToken": "0x2ffa85f655752fB2aCB210287c60b9ef335f5b6E",
        "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"]
      },
      "lend": {
        "pool": "0xaB45Bf58c6482b87DA85D6688C4d9640E093BE98",
        "lpToken": "0xaB45Bf58c6482b87DA85D6688C4d9640E093BE98",
        "tokens": ["0x80fB784B7eD66730e8b1DBd9820aFD29931aab03"]
      },
      "knc": {
        "pool": "0x687642347a9282Be8FD809d8309910A3f984Ac5a",
        "lpToken": "0x687642347a9282Be8FD809d8309910A3f984Ac5a",
        "tokens": ["0xdd974D5C2e2928deA5F71b9825b8b646686BD200"]
      },
      "mkr": {
        "pool": "0x9189c499727f88F8eCC7dC4EEA22c828E6AaC015",
        "lpToken": "0x9189c499727f88F8eCC7dC4EEA22c828E6AaC015",
        "tokens": ["0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"]
      },
      "bzrx": {
        "pool": "0x18240BD9C07fA6156Ce3F3f61921cC82b2619157",
        "lpToken": "0x18240BD9C07fA6156Ce3F3f61921cC82b2619157",
        "tokens": ["0x56d811088235F11C8920698a204A5010a788f4b3"]
      },
      "link": {
        "pool": "0x463538705E7d22aA7f03Ebf8ab09B067e1001B54",
        "lpToken": "0x463538705E7d22aA7f03Ebf8ab09B067e1001B54",
        "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA"]
      },
      "yfi": {
        "pool": "0x7F3Fe9D492A9a60aEBb06d82cBa23c6F32CAd10b",
        "lpToken": "0x7F3Fe9D492A9a60aEBb06d82cBa23c6F32CAd10b",
        "tokens": ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"]
      },
      "usdt": {
        "pool": "0x7e9997a38A439b2be7ed9c9C4628391d3e055D48",
        "lpToken": "0x7e9997a38A439b2be7ed9c9C4628391d3e055D48",
        "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"]
      },
      "aave": {
        "pool": "0x0cae8d91E0b1b7Bd00D906E990C3625b2c220db1",
        "lpToken": "0x0cae8d91E0b1b7Bd00D906E990C3625b2c220db1",
        "tokens": ["0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"]
      },
      "uni": {
        "pool": "0x0a625FceC657053Fe2D9FFFdeb1DBb4e412Cf8A8",
        "lpToken": "0x0a625FceC657053Fe2D9FFFdeb1DBb4e412Cf8A8",
        "tokens": ["0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"]
      },
      "comp": {
        "pool": "0x6d29903BC2c4318b59B35d97Ab98ab9eC08Ed70D",
        "lpToken": "0x6d29903BC2c4318b59B35d97Ab98ab9eC08Ed70D",
        "tokens": ["0xc00e94Cb662C3520282E6f5717214004A7f26888"]
      },
      "lrc": {
        "pool": "0x3dA0e01472Dee3746b4D324a65D7EdFaECa9Aa4f",
        "lpToken": "0x3dA0e01472Dee3746b4D324a65D7EdFaECa9Aa4f",
        "tokens": ["0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"]
      }    
};

export default contracts;