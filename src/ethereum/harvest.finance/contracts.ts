import HarvestController from "./abi/HarvestController.json";
import HarvestDeposit from "./abi/HarvestDeposit.json";
import HarvestFarm from "./abi/HarvestFarm.json";

const contracts = {
    HarvestController: {
        abi: HarvestController,
        address: "0x3cC47874dC50D98425ec79e647d83495637C55e3",
    },
    TBTC_SBTC_CRV_DEPOSIT: {
        abi: HarvestDeposit,
        address: "0x640704D106E79e105FDA424f05467F005418F1B5",
    },
    THREE_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5",
    },
    Y_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x0FE4283e0216F94f5f9750a7a11AC54D3c9C38F3",
    },
    DAI_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C",
    },
    USDC_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE",
    },
    USDT_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C",
    },
    TUSD_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x7674622c63Bee7F46E86a4A5A18976693D54441b",
    },
    REN_WBTC_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x9aA8F427A17d6B0d91B6262989EdC7D45d6aEdf8",
    },
    WBTC_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB",
    },
    RENBTC_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xC391d1b08c1403313B0c28D47202DFDA015633C4",
    },
    WETH_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xFE09e53A81Fe2808bc493ea64319109B5bAa573e",
    },
    COMPOUND_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x998cEb152A42a3EaC1f555B1E911642BeBf00faD",
    },
    USDN_3CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x683E683fBE6Cf9b635539712c999f3B3EdCB8664",
    },
    BUSD_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x4b1cBD6F6D8676AcE5E412C78B7a59b4A1bbb68a",
    },
    HCRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xCC775989e76ab386E9253df5B0c0b473E22102E2",
    },
    OBTC_SBTC_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x966A70A4d3719A6De6a94236532A0167d5246c72",
    },
    STE_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xc27bfE32E0a934a12681C1b35acf0DBA0e7460Ba",
    },
    UNI_ETH_DPI_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x2a32dcBB121D48C106F6d94cf2B4714c0b4Dfe48",
    },
    SUSHI_ETH_SUSHI_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x5aDe382F38A09A1F8759D06fFE2067992ab5c78e",
    },
    SUSHI_ETH_DAI_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x203E97aa6eB65A1A02d9E80083414058303f241E",
    },
    SUSHI_ETH_USDC_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x01bd09A1124960d9bE04b638b142Df9DF942b04a",
    },
    SUSHI_ETH_USDT_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x64035b583c8c694627A199243E863Bb33be60745",
    },
    SUSHI_ETH_WBTC_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x5C0A3F55AAC52AA320Ff5F280E77517cbAF85524",
    },
    HUSD_3CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x29780C39164Ebbd62e9DDDE50c151810070140f2",
    },
    EURS_CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x6eb941BD065b8a5bd699C5405A928c1f561e2e5a",
    },
    GUSD_3CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xB8671E33fcFC7FEA2F7a3Ea4a117F065ec4b009E",
    },
    UST_3CRV_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x84A1DfAdd698886A614fD70407936816183C0A02",
    },
    UNI_UST_MAAPLE_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x11804D69AcaC6Ae9466798325fA7DE023f63Ab53",
    },
    UNI_UST_MAMZN_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x8334A61012A779169725FcC43ADcff1F581350B7",
    },
    UNI_UST_MGOOGL_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0x07DBe6aA35EF70DaD124f4e2b748fFA6C9E1963a",
    },
    UNI_UST_MTSLA_DEPOSIT: {
      abi: HarvestDeposit,
      address: "0xC800982d906671637E23E031e907d2e3487291Bc",
    },
    TBTC_SBTC_CRV_STAKE: {
        abi: HarvestFarm,
        address: "0x017eC1772A45d2cf68c429A820eF374f0662C57c",
    },
    THREE_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x27F12d1a08454402175b9F0b53769783578Be7d9",
    },
    Y_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x6D1b6Ea108AA03c6993d8010690264BA96D349A8",
    },
    DAI_STAKE: {
      abi: HarvestFarm,
      address: "0x15d3A64B2d5ab9E152F16593Cdebc4bB165B5B4A",
    },
    USDC_STAKE: {
      abi: HarvestFarm,
      address: "0x4F7c28cCb0F1Dbd1388209C67eEc234273C878Bd",
    },
    USDT_STAKE: {
      abi: HarvestFarm,
      address: "0x6ac4a7AB91E6fD098E13B7d347c6d4d1494994a2",
    },
    TUSD_STAKE: {
      abi: HarvestFarm,
      address: "0xeC56a21CF0D7FeB93C25587C12bFfe094aa0eCdA",
    },
    REN_WBTC_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0xA3Cf8D1CEe996253FAD1F8e3d68BDCba7B3A3Db5",
    },
    WBTC_STAKE: {
      abi: HarvestFarm,
      address: "0x917d6480Ec60cBddd6CbD0C8EA317Bcc709EA77B",
    },
    RENBTC_STAKE: {
      abi: HarvestFarm,
      address: "0x7b8Ff8884590f44e10Ea8105730fe637Ce0cb4F6",
    },
    WETH_STAKE: {
      abi: HarvestFarm,
      address: "0x3DA9D911301f8144bdF5c3c67886e5373DCdff8e",
    },
    COMPOUND_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0xC0f51a979e762202e9BeF0f62b07F600d0697DE1",
    },
    USDN_3CRV_STAKE: {
      abi: HarvestFarm,
      address: "0xef4Da1CE3f487DA2Ed0BE23173F76274E0D47579",
    },
    BUSD_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x093C2ae5E6F3D2A897459aa24551289D462449AD",
    },
    HCRV_STAKE: {
      abi: HarvestFarm,
      address: "0x01f9CAaD0f9255b0C0Aa2fBD1c1aA06ad8Af7254",
    },
    OBTC_SBTC_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x91B5cD52fDE8dbAC37C95ECafEF0a70bA4c182fC",
    },
    STE_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x2E25800957742C52b4d69b65F9C67aBc5ccbffe6",
    },
    UNI_ETH_DPI_STAKE: {
      abi: HarvestFarm,
      address: "0xAd91695b4BeC2798829ac7a4797E226C78f22Abd",
    },
    SUSHI_ETH_SUSHI_STAKE: {
      abi: HarvestFarm,
      address: "0x16fBb193f99827C92A4CC22EFe8eD7390465BFa3",
    },
    SUSHI_ETH_DAI_STAKE: {
      abi: HarvestFarm,
      address: "0x76Aef359a33C02338902aCA543f37de4b01BA1FA",
    },
    SUSHI_ETH_USDC_STAKE: {
      abi: HarvestFarm,
      address: "0x6B4e1E0656Dd38F36c318b077134487B9b0cf7a6",
    },
    SUSHI_ETH_USDT_STAKE: {
      abi: HarvestFarm,
      address: "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef",
    },
    SUSHI_ETH_WBTC_STAKE: {
      abi: HarvestFarm,
      address: "0xE2D9FAe95f1e68afca7907dFb36143781f917194",
    },
    HUSD_3CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x72C50e6FD8cC5506E166c273b6E814342Aa0a3c1",
    },
    EURS_CRV_STAKE: {
      abi: HarvestFarm,
      address: "0xf4d50f60D53a230abc8268c6697972CB255Cd940",
    },
    GUSD_3CRV_STAKE: {
      abi: HarvestFarm,
      address: "0x538613A19Eb84D86a4CcfcB63548244A52Ab0B68",
    },
    UST_3CRV_STAKE: {
      abi: HarvestFarm,
      address: "0xDdb5D3CCd968Df64Ce48b577776BdC29ebD3120e",
    },
    UNI_UST_MAAPLE_STAKE: {
      abi: HarvestFarm,
      address: "0xc02d1Da469d68Adc651Dd135d1A7f6b42F4d1A57",
    },
    UNI_UST_MAMZN_STAKE: {
      abi: HarvestFarm,
      address: "0x8Dc427Cbcc75cAe58dD4f386979Eba6662f5C158",
    },
    UNI_UST_MGOOGL_STAKE: {
      abi: HarvestFarm,
      address: "0xfE83a00DF3A98dE218c08719FAF7e3741b220D0D",
    },
    UNI_UST_MTSLA_STAKE: {
      abi: HarvestFarm,
      address: "0x40C34B0E1bb6984810E17474c6B0Bcc6A6B46614",
    },
};

export default contracts;