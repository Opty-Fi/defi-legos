import HarvestController from "./abi/HarvestController.json";
import HarvestDeposit from "./abi/HarvestDeposit.json";
import HarvestFarm from "./abi/HarvestFarm.json";

const contracts = {
    HarvestController: {
        abi: HarvestController,
        address: "0x3cC47874dC50D98425ec79e647d83495637C55e3",
    },
    HarvestDeposit: {
        abi: HarvestDeposit,
    },
    HarvestFarm: {
        abi: HarvestFarm,
    },
    "weth": {
        "pool": "0xFE09e53A81Fe2808bc493ea64319109B5bAa573e",
        "lpToken": "0xFE09e53A81Fe2808bc493ea64319109B5bAa573e",
        "tokens": ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
        "stakingVault": "0x3DA9D911301f8144bdF5c3c67886e5373DCdff8e"
      },
      "usdc": {
        "pool": "0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE",
        "lpToken": "0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE",
        "tokens": ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
        "stakingVault": "0x4F7c28cCb0F1Dbd1388209C67eEc234273C878Bd"
      },
      "dai": {
        "pool": "0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C",
        "lpToken": "0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C",
        "tokens": ["0x6B175474E89094C44Da98b954EedeAC495271d0F"],
        "stakingVault": "0x15d3A64B2d5ab9E152F16593Cdebc4bB165B5B4A"
      },
      "usdt": {
        "pool": "0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C",
        "lpToken": "0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C",
        "tokens": ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
        "stakingVault": "0x6ac4a7AB91E6fD098E13B7d347c6d4d1494994a2"
      },
      "hcrv": {
        "pool": "0xCC775989e76ab386E9253df5B0c0b473E22102E2",
        "lpToken": "0xCC775989e76ab386E9253df5B0c0b473E22102E2",
        "tokens": ["0xb19059ebb43466C323583928285a49f558E572Fd"],
        "stakingVault": "0x01f9CAaD0f9255b0C0Aa2fBD1c1aA06ad8Af7254"
      },
      "obtc+sbtcCrv": {
        "pool": "0x966A70A4d3719A6De6a94236532A0167d5246c72",
        "lpToken": "0x966A70A4d3719A6De6a94236532A0167d5246c72",
        "tokens": ["0x2fE94ea3d5d4a175184081439753DE15AeF9d614"],
        "stakingVault": "0x91B5cD52fDE8dbAC37C95ECafEF0a70bA4c182fC"
      },
      "tbtc+sbtcCrv": {
        "pool": "0x640704D106E79e105FDA424f05467F005418F1B5",
        "lpToken": "0x640704D106E79e105FDA424f05467F005418F1B5",
        "tokens": ["0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd"],
        "stakingVault": "0x017eC1772A45d2cf68c429A820eF374f0662C57c"
      },
      "crvrenwbtc": {
        "pool": "0x9aA8F427A17d6B0d91B6262989EdC7D45d6aEdf8",
        "lpToken": "0x9aA8F427A17d6B0d91B6262989EdC7D45d6aEdf8",
        "tokens": ["0x49849C98ae39Fff122806C06791Fa73784FB3675"],
        "stakingVault": "0xA3Cf8D1CEe996253FAD1F8e3d68BDCba7B3A3Db5"
      },
      "wbtc": {
        "pool": "0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB",
        "lpToken": "0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB",
        "tokens": ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
        "deprecated": true
      },
      "stecrv": {
        "pool": "0xc27bfE32E0a934a12681C1b35acf0DBA0e7460Ba",
        "lpToken": "0xc27bfE32E0a934a12681C1b35acf0DBA0e7460Ba",
        "tokens": ["0x06325440D014e39736583c165C2963BA99fAf14E"],
        "stakingVault": "0x2E25800957742C52b4d69b65F9C67aBc5ccbffe6"
      },
      "uni_eth_dpi": {
        "pool": "0x2a32dcBB121D48C106F6d94cf2B4714c0b4Dfe48",
        "lpToken": "0x2a32dcBB121D48C106F6d94cf2B4714c0b4Dfe48",
        "tokens": ["0x4d5ef58aAc27d99935E5b6B4A6778ff292059991"],
        "deprecated": true
      },
      "sushi_eth_sushi": {
        "pool": "0x5aDe382F38A09A1F8759D06fFE2067992ab5c78e",
        "lpToken": "0x5aDe382F38A09A1F8759D06fFE2067992ab5c78e",
        "tokens": ["0x795065dCc9f64b5614C407a6EFDC400DA6221FB0"],
        "deprecated": true
      },
      "sushi_eth_dai": {
        "pool": "0x203E97aa6eB65A1A02d9E80083414058303f241E",
        "lpToken": "0x203E97aa6eB65A1A02d9E80083414058303f241E",
        "tokens": ["0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f"],
        "stakingVault": "0x76Aef359a33C02338902aCA543f37de4b01BA1FA"
      },
      "sushi_eth_usdc": {
        "pool": "0x01bd09A1124960d9bE04b638b142Df9DF942b04a",
        "lpToken": "0x01bd09A1124960d9bE04b638b142Df9DF942b04a",
        "tokens": ["0x397FF1542f962076d0BFE58eA045FfA2d347ACa0"],
        "stakingVault": "0x6B4e1E0656Dd38F36c318b077134487B9b0cf7a6"
      },
      "sushi_eth_usdt": {
        "pool": "0x64035b583c8c694627A199243E863Bb33be60745",
        "lpToken": "0x64035b583c8c694627A199243E863Bb33be60745",
        "tokens": ["0x06da0fd433C1A5d7a4faa01111c044910A184553"],
        "stakingVault": "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef"
      },
      "sushi_eth_wbtc": {
        "pool": "0x5C0A3F55AAC52AA320Ff5F280E77517cbAF85524",
        "lpToken": "0x5C0A3F55AAC52AA320Ff5F280E77517cbAF85524",
        "tokens": ["0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58"],
        "stakingVault": "0xE2D9FAe95f1e68afca7907dFb36143781f917194"
      },
      "husd3crv": {
        "pool": "0x29780C39164Ebbd62e9DDDE50c151810070140f2",
        "lpToken": "0x29780C39164Ebbd62e9DDDE50c151810070140f2",
        "tokens": ["0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858"],
        "stakingVault": "0x72C50e6FD8cC5506E166c273b6E814342Aa0a3c1"
      },
      "ycrv": {
        "pool": "0x0FE4283e0216F94f5f9750a7a11AC54D3c9C38F3",
        "lpToken": "0x0FE4283e0216F94f5f9750a7a11AC54D3c9C38F3",
        "tokens": ["0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8"],
        "deprecated": true
      },
      "three_crv": {
        "pool": "0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5",
        "lpToken": "0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5",
        "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
        "stakingVault": "0x27F12d1a08454402175b9F0b53769783578Be7d9"
      },
      "crv_compound": {
        "pool": "0x998cEb152A42a3EaC1f555B1E911642BeBf00faD",
        "lpToken": "0x998cEb152A42a3EaC1f555B1E911642BeBf00faD",
        "tokens": ["0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2"],
        "stakingVault": "0xC0f51a979e762202e9BeF0f62b07F600d0697DE1"
      },
      "crv_busd": {
        "pool": "0x4b1cBD6F6D8676AcE5E412C78B7a59b4A1bbb68a",
        "lpToken": "0x4b1cBD6F6D8676AcE5E412C78B7a59b4A1bbb68a",
        "tokens": ["0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B"],
        "stakingVault": "0x093C2ae5E6F3D2A897459aa24551289D462449AD"
      },
      "usdn3crv": {
        "pool": "0x683E683fBE6Cf9b635539712c999f3B3EdCB8664",
        "lpToken": "0x683E683fBE6Cf9b635539712c999f3B3EdCB8664",
        "tokens": ["0x4f3E8F405CF5aFC05D68142F3783bDfE13811522"],
        "stakingVault": "0xef4Da1CE3f487DA2Ed0BE23173F76274E0D47579"
      },
      "crv_eurs": {
        "pool": "0x6eb941BD065b8a5bd699C5405A928c1f561e2e5a",
        "lpToken": "0x6eb941BD065b8a5bd699C5405A928c1f561e2e5a",
        "tokens": ["0x194eBd173F6cDacE046C53eACcE9B953F28411d1"],
        "stakingVault": "0xf4d50f60D53a230abc8268c6697972CB255Cd940"
      },
      "gusd3crv": {
        "pool": "0xB8671E33fcFC7FEA2F7a3Ea4a117F065ec4b009E",
        "lpToken": "0xB8671E33fcFC7FEA2F7a3Ea4a117F065ec4b009E",
        "tokens": ["0xD2967f45c4f384DEEa880F807Be904762a3DeA07"],
        "deprecated": true
      },
      "ust3crv": {
        "pool": "0x84A1DfAdd698886A614fD70407936816183C0A02",
        "lpToken": "0x84A1DfAdd698886A614fD70407936816183C0A02",
        "tokens": ["0x94e131324b6054c0D789b190b2dAC504e4361b53"],
        "deprecated": true
      },
      "uni_ust_maaple": {
        "pool": "0x11804D69AcaC6Ae9466798325fA7DE023f63Ab53",
        "lpToken": "0x11804D69AcaC6Ae9466798325fA7DE023f63Ab53",
        "tokens": ["0xB022e08aDc8bA2dE6bA4fECb59C6D502f66e953B"],
        "deprecated": true
      },
      "uni_ust_mamzn": {
        "pool": "0x8334A61012A779169725FcC43ADcff1F581350B7",
        "lpToken": "0x8334A61012A779169725FcC43ADcff1F581350B7",
        "tokens": ["0x0Ae8cB1f57e3b1b7f4f5048743710084AA69E796"],
        "deprecated": true
      },
      "uni_ust_mgoogl": {
        "pool": "0x07DBe6aA35EF70DaD124f4e2b748fFA6C9E1963a",
        "lpToken": "0x07DBe6aA35EF70DaD124f4e2b748fFA6C9E1963a",
        "tokens": ["0x4b70ccD1Cf9905BE1FaEd025EADbD3Ab124efe9a"],
        "deprecated": true
      },
      "uni_ust_mtsla": {
        "pool": "0xC800982d906671637E23E031e907d2e3487291Bc",
        "lpToken": "0xC800982d906671637E23E031e907d2e3487291Bc",
        "tokens": ["0x5233349957586A8207c52693A959483F9aeAA50C"],
        "deprecated": true
      },
      "uni_ust_mnflx": {
        "pool": "0x99C2564C9D4767C13E13F38aB073D4758af396Ae",
        "lpToken": "0x99C2564C9D4767C13E13F38aB073D4758af396Ae",
        "tokens": ["0xC99A74145682C4b4A6e9fa55d559eb49A6884F75"],
        "deprecated": true
      },
      "uni_ust_mtwtr": {
        "pool": "0xb37c79f954E3e1A4ACCC14A5CCa3E46F226038b7",
        "lpToken": "0xb37c79f954E3e1A4ACCC14A5CCa3E46F226038b7",
        "tokens": ["0x34856be886A2dBa5F7c38c4df7FD86869aB08040"],
        "deprecated": true
      },
      "tusd": {
        "pool": "0x7674622c63Bee7F46E86a4A5A18976693D54441b",
        "lpToken": "0x7674622c63Bee7F46E86a4A5A18976693D54441b",
        "tokens": ["0x0000000000085d4780B73119b644AE5ecd22b376"],
        "deprecated": true
      },
      "renbtc": {
        "pool": "0xC391d1b08c1403313B0c28D47202DFDA015633C4",
        "lpToken": "0xC391d1b08c1403313B0c28D47202DFDA015633C4",
        "tokens": ["0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"],
        "deprecated": true
      }
};

export default contracts;