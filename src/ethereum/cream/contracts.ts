import CrTokenAbi from "./abi/CrToken.json";
import CreamAbi from "./abi/Cream.json";

const contracts = {
    crToken: { abi: CrTokenAbi },
    Cream: {abi: CreamAbi},
    pools: {
        "usdc": {
            "pool": "0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322",
            "lpToken": "0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322",
            "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
        },
        "usdt": {
            "pool": "0x797AAB1ce7c01eB727ab980762bA88e7133d2157",
            "lpToken": "0x797AAB1ce7c01eB727ab980762bA88e7133d2157",
            "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
        },
        "bal": {
            "pool": "0xcE4Fe9b4b8Ff61949DCfeB7e03bc9FAca59D2Eb3",
            "lpToken": "0xcE4Fe9b4b8Ff61949DCfeB7e03bc9FAca59D2Eb3",
            "tokens": ["0xba100000625a3754423978a60c9317c58a424e3d"]
        },
        "link": {
            "pool": "0x697256CAA3cCaFD62BB6d3Aa1C7C5671786A5fD9",
            "lpToken": "0x697256CAA3cCaFD62BB6d3Aa1C7C5671786A5fD9",
            "tokens": ["0x514910771AF9Ca656af840dff83E8264EcF986CA"]
        },
        "busd": {
            "pool": "0x1FF8CDB51219a8838b52E9cAc09b71e591BC998e",
            "lpToken": "0x1FF8CDB51219a8838b52E9cAc09b71e591BC998e",
            "tokens": ["0x4Fabb145d64652a948d72533023f6E7A623C7C53"]
        },
        "renbtc": {
            "pool": "0x17107f40d70f4470d20CB3f138a052cAE8EbD4bE",
            "lpToken": "0x17107f40d70f4470d20CB3f138a052cAE8EbD4bE",
            "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"]
        },
        "uni": {
            "pool": "0xe89a6D0509faF730BD707bf868d9A2A744a363C7",
            "lpToken": "0xe89a6D0509faF730BD707bf868d9A2A744a363C7",
            "tokens": ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"]
        },
        "comp": {
            "pool": "0x19D1666f543D42ef17F66E376944A22aEa1a8E46",
            "lpToken": "0x19D1666f543D42ef17F66E376944A22aEa1a8E46",
            "tokens": ["0xc00e94cb662c3520282e6f5717214004a7f26888"]
        },
        "yfi": {
            "pool": "0xCbaE0A83f4f9926997c8339545fb8eE32eDc6b76",
            "lpToken": "0xCbaE0A83f4f9926997c8339545fb8eE32eDc6b76",
            "tokens": ["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"]
        },
        "ycrv": {
            "pool": "0x9baF8a5236d44AC410c0186Fe39178d5AAD0Bb87",
            "lpToken": "0x9baF8a5236d44AC410c0186Fe39178d5AAD0Bb87",
            "tokens": ["0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8"]
        },
        "cream": {
            "pool": "0x892B14321a4FCba80669aE30Bd0cd99a7ECF6aC0",
            "lpToken": "0x892B14321a4FCba80669aE30Bd0cd99a7ECF6aC0",
            "tokens": ["0x2ba592f78db6436527729929aaf6c908497cb200"]
        },
        "lend": {
            "pool": "0x8B86e0598616a8d4F1fdAE8b59E55FB5Bc33D0d6",
            "lpToken": "0x8B86e0598616a8d4F1fdAE8b59E55FB5Bc33D0d6",
            "tokens": ["0x80fb784b7ed66730e8b1dbd9820afd29931aab03"]
        },
        "aave": {
            "pool": "0x3225E3C669B39C7c8B3e204a8614bB218c5e31BC",
            "lpToken": "0x3225E3C669B39C7c8B3e204a8614bB218c5e31BC",
            "tokens": ["0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"]
        },
        "hbtc": {
            "pool": "0x054B7ed3F45714d3091e82aAd64A1588dC4096Ed",
            "lpToken": "0x054B7ed3F45714d3091e82aAd64A1588dC4096Ed",
            "tokens": ["0x0316EB71485b0Ab14103307bf65a021042c6d380"]
        },
        "crv": {
            "pool": "0xc7Fd8Dcee4697ceef5a2fd4608a7BD6A94C77480",
            "lpToken": "0xc7Fd8Dcee4697ceef5a2fd4608a7BD6A94C77480",
            "tokens": ["0xd533a949740bb3306d119cc777fa900ba034cd52"]
        },
        "mta": {
            "pool": "0x3623387773010d9214B10C551d6e7fc375D31F58",
            "lpToken": "0x3623387773010d9214B10C551d6e7fc375D31F58",
            "tokens": ["0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2"]
        },
        "yycrv": {
            "pool": "0x4EE15f44c6F0d8d1136c83EfD2e8E4AC768954c6",
            "lpToken": "0x4EE15f44c6F0d8d1136c83EfD2e8E4AC768954c6",
            "tokens": ["0x5dbcf33d8c2e976c6b560249878e6f1491bca25c"]
        },
        "sushi": {
            "pool": "0x338286C0BC081891A4Bda39C7667ae150bf5D206",
            "lpToken": "0x338286C0BC081891A4Bda39C7667ae150bf5D206",
            "tokens": ["0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"]
        },
        "ftt": {
            "pool": "0x10FDBD1e48eE2fD9336a482D746138AE19e649Db",
            "lpToken": "0x10FDBD1e48eE2fD9336a482D746138AE19e649Db",
            "tokens": ["0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9"]
        },
        "srm": {
            "pool": "0xef58b2d5A1b8D3cDE67b8aB054dC5C831E9Bc025",
            "lpToken": "0xef58b2d5A1b8D3cDE67b8aB054dC5C831E9Bc025",
            "tokens": ["0x476c5e26a75bd202a9683ffd34359c0cc15be0ff"]
        },
        "wnxm": {
            "pool": "0xeFF039C3c1D668f408d09dD7B63008622a77532C",
            "lpToken": "0xeFF039C3c1D668f408d09dD7B63008622a77532C",
            "tokens": ["0x0d438f3b5175bebc262bf23753c1e53d03432bde"]
        },
        "swag": {
            "pool": "0x22B243B96495C547598D9042B6f94B01C22B2e9E",
            "lpToken": "0x22B243B96495C547598D9042B6f94B01C22B2e9E",
            "tokens": ["0x87edffde3e14c7a66c9b9724747a1c5696b742e6"]
        },
        "cel": {
            "pool": "0x8b3FF1ed4F36C2c2be675AFb13CC3AA5d73685a5",
            "lpToken": "0x8b3FF1ed4F36C2c2be675AFb13CC3AA5d73685a5",
            "tokens": ["0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d"]
        },
        "dpi": {
            "pool": "0x2A537Fa9FFaea8C1A41D3C2B68a9cb791529366D",
            "lpToken": "0x2A537Fa9FFaea8C1A41D3C2B68a9cb791529366D",
            "tokens": ["0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b"]
        },
        "bbtc": {
            "pool": "0x7ea9C63E216D5565c3940A2B3d150e59C2907Db3",
            "lpToken": "0x7ea9C63E216D5565c3940A2B3d150e59C2907Db3",
            "tokens": ["0x9be89d2a4cd102d8fecc6bf9da793be995c22541"]
        },
        "bond": {
            "pool": "0xf55BbE0255f7f4E70f63837Ff72A577fbDDbE924",
            "lpToken": "0xf55BbE0255f7f4E70f63837Ff72A577fbDDbE924",
            "tokens": ["0x0391d2021f89dc339f60fff84546ea23e337750f"]
        },
        "kp3r": {
            "pool": "0x903560b1CcE601794C584F58898dA8a8b789Fc5d",
            "lpToken": "0x903560b1CcE601794C584F58898dA8a8b789Fc5d",
            "tokens": ["0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44"]
        },
        "husd": {
            "pool": "0xD692ac3245bb82319A31068D6B8412796eE85d2c",
            "lpToken": "0xD692ac3245bb82319A31068D6B8412796eE85d2c",
            "tokens": ["0xdf574c24545e5ffecb9a659c229253d4111d87e1"]
        },
        "hegic": {
            "pool": "0x10a3da2BB0Fae4D591476fd97D6636fd172923a8",
            "lpToken": "0x10a3da2BB0Fae4D591476fd97D6636fd172923a8",
            "tokens": ["0x584bc13c7d411c00c01a62e8019472de68768430"]
        },
        "yweth": {
            "pool": "0x01da76DEa59703578040012357b81ffE62015C2d",
            "lpToken": "0x01da76DEa59703578040012357b81ffE62015C2d",
            "tokens": ["0xe1237aa7f535b0cc33fd973d66cbf830354d16c7"]
        },
        "dai": {
            "pool": "0x92B767185fB3B04F881e3aC8e5B0662a027A1D9f",
            "lpToken": "0x92B767185fB3B04F881e3aC8e5B0662a027A1D9f",
            "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
        },
        "esd": {
            "pool": "0x3C6C553A95910F9FC81c98784736bd628636D296",
            "lpToken": "0x3C6C553A95910F9FC81c98784736bd628636D296",
            "tokens": ["0x36f3fd68e7325a35eb768f1aedaae9ea0689d723"]
        },
        "cover": {
            "pool": "0x21011BC93d9E515B9511A817A1eD1D6d468f49Fc",
            "lpToken": "0x21011BC93d9E515B9511A817A1eD1D6d468f49Fc",
            "tokens": ["0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713"]
        },
        "1inch": {
            "pool": "0x85759961b116f1D36fD697855c57A6ae40793D9B",
            "lpToken": "0x85759961b116f1D36fD697855c57A6ae40793D9B",
            "tokens": ["0x111111111117dc0aa78b770fa6a738034120c302"]
        },
        "omg": {
            "pool": "0x7Aaa323D7e398be4128c7042d197a2545f0f1fea",
            "lpToken": "0x7Aaa323D7e398be4128c7042d197a2545f0f1fea",
            "tokens": ["0xd26114cd6ee289accf82350c8d8487fedb8a0c07"]
        },
        "uni_v2_wbtc_eth": {
            "pool": "0x011a014d5e8Eb4771E575bB1000318D509230Afa",
            "lpToken": "0x011a014d5e8Eb4771E575bB1000318D509230Afa",
            "tokens": ["0xBb2b8038a1640196FbE3e38816F3e67Cba72D940"]
        },
        "wbtc": {
            "pool": "0x197070723CE0D3810a0E47F06E935c30a480D4Fc",
            "lpToken": "0x197070723CE0D3810a0E47F06E935c30a480D4Fc",
            "tokens": ["0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"]
        },
        "snx": {
            "pool": "0xC25EAE724f189Ba9030B2556a1533E7c8A732E14",
            "lpToken": "0xC25EAE724f189Ba9030B2556a1533E7c8A732E14",
            "tokens": ["0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"]
        },
        "susd": {
            "pool": "0x25555933a8246Ab67cbf907CE3d1949884E82B55",
            "lpToken": "0x25555933a8246Ab67cbf907CE3d1949884E82B55",
            "tokens": ["0x57ab1ec28d129707052df4df418d58a2d46d5f51"]
        },
        "pickle": {
            "pool": "0xc68251421eDDa00a10815E273fA4b1191fAC651b",
            "lpToken": "0xc68251421eDDa00a10815E273fA4b1191fAC651b",
            "tokens": ["0x429881672b9ae42b8eba0e26cd9c73711b891ca5"]
        },
        "akro": {
            "pool": "0x65883978aDA0e707c3b2BE2A6825b1C4BDF76A90",
            "lpToken": "0x65883978aDA0e707c3b2BE2A6825b1C4BDF76A90",
            "tokens": ["0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7"]
        },
        "ogn": {
            "pool": "0x59089279987DD76fC65Bf94Cb40E186b96e03cB3",
            "lpToken": "0x59089279987DD76fC65Bf94Cb40E186b96e03cB3",
            "tokens": ["0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26"]
        },
        "amp": {
            "pool": "0x2Db6c82CE72C8d7D770ba1b5F5Ed0b6E075066d6",
            "lpToken": "0x2Db6c82CE72C8d7D770ba1b5F5Ed0b6E075066d6",
            "tokens": ["0xfF20817765cB7f73d4bde2e66e067E58D11095C2"]
        },
        "frax": {
            "pool": "0xb092b4601850E23903A42EaCBc9D8A0EeC26A4d5",
            "lpToken": "0xb092b4601850E23903A42EaCBc9D8A0EeC26A4d5",
            "tokens": ["0x853d955aCEf822Db058eb8505911ED77F175b99e"]
        },
        "alpha": {
            "pool": "0x1d0986Fb43985c88Ffa9aD959CC24e6a087C7e35",
            "lpToken": "0x1d0986Fb43985c88Ffa9aD959CC24e6a087C7e35",
            "tokens": ["0xa1faa113cbe53436df28ff0aee54275c13b40975"]
        },
        "ust": {
            "pool": "0x51F48b638F82e8765F7a26373A2Cb4CcB10C07af",
            "lpToken": "0x51F48b638F82e8765F7a26373A2Cb4CcB10C07af",
            "tokens": ["0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"]
        },
        "ftm": {
            "pool": "0xc36080892c64821fa8e396bc1bD8678fA3b82b17",
            "lpToken": "0xc36080892c64821fa8e396bc1bD8678fA3b82b17",
            "tokens": ["0x4E15361FD6b4BB609Fa63C81A2be19d873717870"]
        },
        "rune": {
            "pool": "0x8379BAA817c5c5aB929b03ee8E3c48e45018Ae41",
            "lpToken": "0x8379BAA817c5c5aB929b03ee8E3c48e45018Ae41",
            "tokens": ["0x3155BA85D5F96b2d030a4966AF206230e46849cb"]
        },
        "perp": {
            "pool": "0x299e254A8a165bBeB76D9D69305013329Eea3a3B",
            "lpToken": "0x299e254A8a165bBeB76D9D69305013329Eea3a3B",
            "tokens": ["0xbc396689893d065f41bc2c6ecbee5e0085233447"]
        },
        "rai": {
            "pool": "0xf8445C529D363cE114148662387eba5E62016e20",
            "lpToken": "0xf8445C529D363cE114148662387eba5E62016e20",
            "tokens": ["0x03ab458634910aad20ef5f1c8ee96f1d6ac54919"]
        },
        "ocean": {
            "pool": "0x7C3297cFB4c4bbd5f44b450c0872E0ADA5203112",
            "lpToken": "0x7C3297cFB4c4bbd5f44b450c0872E0ADA5203112",
            "tokens": ["0x967da4048cD07aB37855c090aAF366e4ce1b9F48"]
        },
        "rari": {
            "pool": "0x081FE64df6dc6fc70043aedF3713a3ce6F190a21",
            "lpToken": "0x081FE64df6dc6fc70043aedF3713a3ce6F190a21",
            "tokens": ["0xfca59cd816ab1ead66534d82bc21e7515ce441cf"]
        },
        "sfi": {
            "pool": "0x28526Bb33d7230E65E735dB64296413731C5402e",
            "lpToken": "0x28526Bb33d7230E65E735dB64296413731C5402e",
            "tokens": ["0xb753428af26E81097e7fD17f40c88aaA3E04902c"]
        },
        "yvcurve_ib": {
            "pool": "0x45406ba53bB84Cd32A58e7098a2D4D1b11B107F6",
            "lpToken": "0x45406ba53bB84Cd32A58e7098a2D4D1b11B107F6",
            "tokens": ["0x27b7b1ad7288079a66d12350c828d3c00a6f07d7"]
        },
        "yvcurve_seth": {
            "pool": "0x6d1B9e01aF17Dd08d6DEc08E210dfD5984FF1C20",
            "lpToken": "0x6d1B9e01aF17Dd08d6DEc08E210dfD5984FF1C20",
            "tokens": ["0x986b4AFF588a109c09B50A03f42E4110E29D353F"]
        },
        "yvcurve_steth": {
            "pool": "0x1F9b4756B008106C806c7E64322d7eD3B72cB284",
            "lpToken": "0x1F9b4756B008106C806c7E64322d7eD3B72cB284",
            "tokens": ["0xdCD90C7f6324cfa40d7169ef80b12031770B4325"]
        },
        "armor": {
            "pool": "0xab10586C918612BA440482db77549d26B7ABF8f7",
            "lpToken": "0xab10586C918612BA440482db77549d26B7ABF8f7",
            "tokens": ["0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a"]
        },
        "arnxm": {
            "pool": "0xdFFf11DFe6436e42a17B86e7F419Ac8292990393",
            "lpToken": "0xdFFf11DFe6436e42a17B86e7F419Ac8292990393",
            "tokens": ["0x1337DEF18C680aF1f9f45cBcab6309562975b1dD"]
        },
        "mln": {
            "pool": "0xDbb5e3081dEf4b6cdD8864aC2aeDA4cBf778feCf",
            "lpToken": "0xDbb5e3081dEf4b6cdD8864aC2aeDA4cBf778feCf",
            "tokens": ["0xec67005c4E498Ec7f55E092bd1d35cbC47C91892"]
        },
        "vsp": {
            "pool": "0x71cEFCd324B732d4E058AfAcBA040d908c441847",
            "lpToken": "0x71cEFCd324B732d4E058AfAcBA040d908c441847",
            "tokens": ["0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421"]
        },
        "vvsp": {
            "pool": "0x1A122348B73B58eA39F822A89e6ec67950c2bBD0",
            "lpToken": "0x1A122348B73B58eA39F822A89e6ec67950c2bBD0",
            "tokens": ["0xbA4cFE5741b357FA371b506e5db0774aBFeCf8Fc"]
        },
        "gno": {
            "pool": "0x523EFFC8bFEfC2948211A05A905F761CBA5E8e9E",
            "lpToken": "0x523EFFC8bFEfC2948211A05A905F761CBA5E8e9E",
            "tokens": ["0x6810e776880C02933D47DB1b9fc05908e5386b96"]
        },
        "yvweth": {
            "pool": "0x4202D97E00B9189936EdF37f8D01cfF88BDd81d4",
            "lpToken": "0x4202D97E00B9189936EdF37f8D01cfF88BDd81d4",
            "tokens": ["0xa9fE4601811213c340e850ea305481afF02f5b28"]
        },
        "yusd": {
            "pool": "0x4BAa77013ccD6705ab0522853cB0E9d453579Dd4",
            "lpToken": "0x4BAa77013ccD6705ab0522853cB0E9d453579Dd4",
            "tokens": ["0x4B5BfD52124784745c1071dcB244C6688d2533d3"]
        },
        "swap": {
            "pool": "0x98E329eB5aae2125af273102f3440DE19094b77c",
            "lpToken": "0x98E329eB5aae2125af273102f3440DE19094b77c",
            "tokens": ["0xCC4304A31d09258b0029eA7FE63d032f52e44EFe"]
        },
        "fei": {
            "pool": "0x8C3B7a4320ba70f8239F83770c4015B5bc4e6F91",
            "lpToken": "0x8C3B7a4320ba70f8239F83770c4015B5bc4e6F91",
            "tokens": ["0x956F47F50A910163D8BF957Cf5846D573E7f87CA"]
        },
        "woo": {
            "pool": "0xE585c76573D7593ABF21537B607091F76c996E73",
            "lpToken": "0xE585c76573D7593ABF21537B607091F76c996E73",
            "tokens": ["0x4691937a7508860F876c9c0a2a617E7d9E945D4B"]
        },
        "bnt": {
            "pool": "0x81E346729723C4D15d0FB1c5679b9f2926Ff13C6",
            "lpToken": "0x81E346729723C4D15d0FB1c5679b9f2926Ff13C6",
            "tokens": ["0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"]
        },
        "pax": {
            "pool": "0xD7394428536F63d5659cc869EF69d10f9E66314B",
            "lpToken": "0xD7394428536F63d5659cc869EF69d10f9E66314B",
            "tokens": ["0x8E870D67F660D95d5be530380D0eC0bd388289E1"]
        },
        "paxg": {
            "pool": "0x1241B10E7EA55b22f5b2d007e8fECDF73DCff999",
            "lpToken": "0x1241B10E7EA55b22f5b2d007e8fECDF73DCff999",
            "tokens": ["0x45804880De22913dAFE09f4980848ECE6EcbAf78"]
        },
        "ibbtc": {
            "pool": "0x2A867fd776B83e1bd4e13C6611AFd2F6af07EA6D",
            "lpToken": "0x2A867fd776B83e1bd4e13C6611AFd2F6af07EA6D",
            "tokens": ["0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F"]
        },
        "lon": {
            "pool": "0x250Fb308199FE8C5220509C1bf83D21d60b7f74A",
            "lpToken": "0x250Fb308199FE8C5220509C1bf83D21d60b7f74A",
            "tokens": ["0x0000000000095413afC295d19EDeb1Ad7B71c952"]
        },
        "creth2": {
            "pool": "0xfd609a03B393F1A1cFcAcEdaBf068CAD09a924E2",
            "lpToken": "0xfd609a03B393F1A1cFcAcEdaBf068CAD09a924E2",
            "tokens": ["0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd"]
        },
        "uni_v2_eth_usdt": {
            "pool": "0xE6C3120F38F56deb38B69b65cC7dcAF916373963",
            "lpToken": "0xE6C3120F38F56deb38B69b65cC7dcAF916373963",
            "tokens": ["0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852"]
        },
        "uni_v2_usdc_eth": {
            "pool": "0x4Fe11BC316B6d7A345493127fBE298b95AdaAd85",
            "lpToken": "0x4Fe11BC316B6d7A345493127fBE298b95AdaAd85",
            "tokens": ["0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"]
        },
        "uni_v2_dai_eth": {
            "pool": "0xcD22C4110c12AC41aCEfA0091c432ef44efaAFA0",
            "lpToken": "0xcD22C4110c12AC41aCEfA0091c432ef44efaAFA0",
            "tokens": ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"]
        },
        "xsushi": {
            "pool": "0x228619CCa194Fbe3Ebeb2f835eC1eA5080DaFbb2",
            "lpToken": "0x228619CCa194Fbe3Ebeb2f835eC1eA5080DaFbb2",
            "tokens": ["0x8798249c2e607446efb7ad49ec89dd1865ff4272"]
        },
        "bbadger": {
            "pool": "0x8B950f43fCAc4931D408F1fcdA55C6CB6cbF3096",
            "lpToken": "0x8B950f43fCAc4931D408F1fcdA55C6CB6cbF3096",
            "tokens": ["0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28"]
        },
        "hfil": {
            "pool": "0xd5103AfcD0B3fA865997Ef2984C66742c51b2a8b",
            "lpToken": "0xd5103AfcD0B3fA865997Ef2984C66742c51b2a8b",
            "tokens": ["0x9afb950948c2370975fb91a441f36fdc02737cd4"]
        }
    }
};

export default contracts;
