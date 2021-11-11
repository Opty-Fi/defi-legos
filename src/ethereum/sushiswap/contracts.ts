import SushiswapMasterChef from "./abi/SushiswapMasterChef.json";

const contracts = {
    SushiswapMasterChef: {
        abi: SushiswapMasterChef,
        address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
    },
    "sushi-weth-usdt": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x06da0fd433C1A5d7a4faa01111c044910A184553"],
        "pid": "0"
      },
      "sushi-usdc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x397FF1542f962076d0BFE58eA045FfA2d347ACa0"],
        "pid": "1"
      },
      "sushi-dai-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f"],
        "pid": "2"
      },
      "sushi-susd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539"],
        "pid": "3"
      },
      "sushi-comp-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x31503dcb60119A812feE820bb7042752019F2355"],
        "pid": "4"
      },
      "sushi-lend-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x5E63360E891BD60C69445970256C260b0A6A54c6"],
        "pid": "5"
      },
      "sushi-snx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470"],
        "pid": "6"
      },
      "sushi-uma-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x001b6450083E531A5a7Bf310BD2c1Af4247E23D4"],
        "pid": "7"
      },
      "sushi-link-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967"],
        "pid": "8"
      },
      "sushi-band-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA75F7c2F025f470355515482BdE9EFA8153536A8"],
        "pid": "9"
      },
      "sushi-weth-ampl": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xCb2286d9471cc185281c4f763d34A962ED212962"],
        "pid": "10"
      },
      "sushi-yfi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x088ee5007C98a9677165D78dD2109AE4a3D04d0C"],
        "pid": "11"
      },
      "sushi-sushi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x795065dCc9f64b5614C407a6EFDC400DA6221FB0"],
        "pid": "12"
      },
      "sushi-ren-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x611CDe65deA90918c0078ac0400A72B0D25B9bb1"],
        "pid": "13"
      },
      "sushi-srm-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x117d4288B3635021a3D612FE05a3Cbf5C717fEf2"],
        "pid": "15"
      },
      "sushi-yamv2-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x95b54C8Da12BB23F7A5F6E26C38D04aCC6F81820"],
        "pid": "16"
      },
      "sushi-weth-crv": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009"],
        "pid": "17"
      },
      "sushi-uni-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xDafd66636E2561b0284EDdE37e42d192F2844D40"],
        "pid": "18"
      },
      "sushi-xsushi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7"],
        "pid": "19"
      },
      "sushi-wbtc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58"],
        "pid": "21"
      },
      "sushi-cream-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xf169CeA51EB51774cF107c88309717ddA20be167"],
        "pid": "22"
      },
      "sushi-wnxm-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xFcff3b04C499A57778ae2CF05584ab24278A7FCb"],
        "pid": "24"
      },
      "sushi-yydai+yusdc+yusdt+ytusd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E"],
        "pid": "25"
      },
      "sushi-wbtc-yydai+yusdc+yusdt+ytusd": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x2024324a99231509a3715172d4F4f4E751b38d4d"],
        "pid": "26"
      },
      "sushi-hegic-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x6463Bd6026A2E7bFab5851b62969A92f7cca0eB6"],
        "pid": "31"
      },
      "sushi-core-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x68C6d02D44E16F1c20088731Ab032f849100D70f"],
        "pid": "34"
      },
      "sushi-pickle-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x269Db91Fc3c7fCC275C2E6f22e5552504512811c"],
        "pid": "35"
      },
      "sushi-weth-omg": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x742c15d71eA7444964BC39b0eD729B3729ADc361"],
        "pid": "36"
      },
      "sushi-aave-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xD75EA151a61d06868E31F8988D28DFE5E9df57B4"],
        "pid": "37"
      },
      "sushi-weth-amp": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x15e86E6f65EF7EA1dbb72A5E51a07926fB1c82E3"],
        "pid": "38"
      },
      "sushi-xsushi-usdc": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xd597924b16Cc1904d808285bC9044fd51CEEEaD7"],
        "pid": "39"
      },
      "sushi-ghst-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x5a2943B25ce0678Dc0b351928D2DB331A55D94eA"],
        "pid": "40"
      },
      "sushi-weth-rari": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x53aaBCcAE8C1713a6a150D9981D2ee867D0720e8"],
        "pid": "41"
      },
      "sushi-dpi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x34b13F8CD184F55d0Bd4Dd1fe6C07D46f245c7eD"],
        "pid": "42"
      },
      "sushi-tbtc-vbtc": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xbcEdc25CbB0EA44E03E41dC2d00D54Fe6d4646Db"],
        "pid": "43"
      },
      "sushi-yam-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0F82E57804D0B1F6FAb2370A43dcFAd3c7cB239c"],
        "pid": "44"
      },
      "sushi-farm-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x69b39B89f9274a16e8A19B78E5eB47a4d91dAc9E"],
        "pid": "46"
      },
      "sushi-dough-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x97f34c8E5992EB985c5F740e7EE8c7e48a1de76a"],
        "pid": "48"
      },
      "sushi-stake-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9Fc5b87b74B9BD239879491056752EB90188106D"],
        "pid": "49"
      },
      "sushi-rsr-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x6f58A1Aa0248A9F794d13Dc78E74Fc75140956D7"],
        "pid": "50"
      },
      "sushi-tbtc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xEe6d78755e06C31AE7A5EA2b29b35C073dfc00A9"],
        "pid": "51"
      },
      "sushi-audio-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x4F871F310AD0E8a170db0021c0ce066859d37469"],
        "pid": "52"
      },
      "sushi-akro-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x364248b2f1f57C5402d244b2D469A35B4C0e9dAB"],
        "pid": "53"
      },
      "sushi-weth-hez": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xD7c2A4aa31E1bF08dc7Ff44C9980fa8573E10C1B"],
        "pid": "54"
      },
      "sushi-yax-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x033ecD066376aFec5E6383BC9F1F15bE4C62dc89"],
        "pid": "55"
      },
      "sushi-weth-surf": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0bff31d8179Da718A7ee3669853cF9978c90a24a"],
        "pid": "57"
      },
      "sushi-kp3r-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xaf988afF99d3d0cb870812C325C588D8D8CB7De8"],
        "pid": "58"
      },
      "sushi-weth-seen": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xC5Fa164247d2F8D68804139457146eFBde8370F6"],
        "pid": "59"
      },
      "sushi-weth-axs": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x35a0d9579B1E886702375364Fe9c540f97E4517B"],
        "pid": "60"
      },
      "sushi-esd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xDFf71165a646BE71fCfbaa6206342FAa503AeD5D"],
        "pid": "63"
      },
      "sushi-ant-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x201e6a9E75df132a8598720433Af35fe8d73e94D"],
        "pid": "100"
      },
      "sushi-pnk-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xEF4F1D5007B4FF88c1A56261fec00264AF6001Fb"],
        "pid": "65"
      },
      "sushi-cvp-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x1C580CC549d03171B13b55074Dc1658F60641C73"],
        "pid": "66"
      },
      "sushi-yeti-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xf45D97F9D457661783146D63DD13DA20ce9bf847"],
        "pid": "67"
      },
      "sushi-arch-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x4441eb3076f828D5176f4Fe74d7c775542daE106"],
        "pid": "68"
      },
      "sushi-weth-inj": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xFb3cD0B8A5371fe93ef92E3988D30Df7931E2820"],
        "pid": "69"
      },
      "sushi-bor-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x44D34985826578e5ba24ec78c93bE968549BB918"],
        "pid": "70"
      },
      "sushi-sfi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x23a9292830Fc80dB7f563eDb28D2fe6fB47f8624"],
        "pid": "71"
      },
      "sushi-dfd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb12aa722a3A4566645F079B6F10c89A3205b6c2c"],
        "pid": "72"
      },
      "sushi-zlot-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9360b76f8f5F932AC33D46A3CE82ad6C52A713E5"],
        "pid": "74"
      },
      "sushi-index-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA73DF646512C82550C2b3C0324c4EEdEE53b400C"],
        "pid": "75"
      },
      "sushi-swag-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xadeAa96A81eBBa4e3A5525A008Ee107385d588C3"],
        "pid": "76"
      },
      "sushi-jrt-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xF1360C4ae1cead17B588ec1111983d2791B760d3"],
        "pid": "77"
      },
      "sushi-weth-uwl": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0040a2CEBc65894BC2cFb57565f9ACfa33Fab137"],
        "pid": "78"
      },
      "sushi-ichi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9cD028B1287803250B1e226F0180EB725428d069"],
        "pid": "79"
      },
      "sushi-$rope-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x67e475577B4036EE4f0F12fa2d538Ed18CEF48e3"],
        "pid": "80"
      },
      "sushi-obtc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x53E9fB796b2feb4B3184AFDf601C2A2797548d88"],
        "pid": "81"
      },
      "sushi-mbbased-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xE5f06db4F3473E7E35490F1F98017728496fe81E"],
        "pid": "82"
      },
      "sushi-ust-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8B00eE8606CC70c2dce68dea0CEfe632CCA0fB7b"],
        "pid": "85"
      },
      "sushi-weth-fnx": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xaa500101C73065f755Ba9b902d643705EF2523E3"],
        "pid": "86"
      },
      "sushi-weth-bcp": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xeB1B57D4f7d4557B032B66c422bc94a8E4Af859e"],
        "pid": "87"
      },
      "sushi-ypie-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x5F30aAc9A472F6c33D5284f9D340C0d57eF33697"],
        "pid": "88"
      },
      "sushi-defi+l-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x83E5e791F4aB29d1B0941Bc4D00f3D6027d1dae5"],
        "pid": "89"
      },
      "sushi-base-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xD8B8B575c943f3d63638c9563B464D204ED8B710"],
        "pid": "90"
      },
      "sushi-mph-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xB2C29e311916a346304f83AA44527092D5bd4f0F"],
        "pid": "92"
      },
      "sushi-weth-uop": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8C2e6A4af15C94cF4a86Cd3C067159F08571d780"],
        "pid": "94"
      },
      "sushi-tru-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xfCEAAf9792139BF714a694f868A215493461446D"],
        "pid": "95"
      },
      "sushi-alpha-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xf55C33D94150d93c2cfb833bcCA30bE388b14964"],
        "pid": "96"
      },
      "sushi-alpa-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xcA658217CE94dFB2156a49a8fAd0Ff752CaC39C2"],
        "pid": "97"
      },
      "sushi-weth-creth2": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x71817445D11f42506F2D7F54417c935be90Ca731"],
        "pid": "98"
      },
      "sushi-dusd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb1D38026062Ac10FEDA072CA0E9b7E35f1f5795a"],
        "pid": "99"
      },
      "sushi-cover-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x66Ae32178640813F3c32a9929520BFE4Fef5D167"],
        "pid": "101"
      },
      "sushi-nftx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x31d64f9403E82243e71C2af9D8F56C7DBe10C178"],
        "pid": "104"
      },
      "sushi-api3-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA8AEC03d5Cf2824fD984ee249493d6D4D6740E61"],
        "pid": "105"
      },
      "sushi-weth-combo": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8Cd7DADc8E11c8706763E0DE7332f5Ea91E04E35"],
        "pid": "106"
      },
      "sushi-ldo-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xC558F600B34A5f69dD2f0D06Cb8A88d829B7420a"],
        "pid": "109"
      },
      "sushi-bac-bab": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x87bF6386f7611aFa452c642C2835a305a692607d"],
        "pid": "110"
      },
      "sushi-weth-pwing": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xBE1E98685fB293144325440C16f69954Ffcb790C"],
        "pid": "111"
      },
      "sushi-tusd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x760166FA4f227dA29ecAC3BeC348f5fA853a1f3C"],
        "pid": "112"
      },
      "sushi-aleph-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x7B98e476De2c50b6fa284DBd410Dd516f9a72b30"],
        "pid": "113"
      },
      "sushi-spank-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x02C6260cE42Ea5cD055911ed0D4857eCD4583740"],
        "pid": "114"
      },
      "sushi-mta-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x663242D053057f317A773D7c262B700616d0b9A0"],
        "pid": "115"
      },
      "sushi-bao-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0Eee7f7319013df1f24F5eaF83004fCf9cF49245"],
        "pid": "116"
      },
      "sushi-weth-rgt": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x18A797C7C70c1Bf22fDee1c09062aBA709caCf04"],
        "pid": "117"
      },
      "sushi-idle-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA7f11E026a0Af768D285360a855F2BDEd3047530"],
        "pid": "118"
      },
      "sushi-usdt-aeth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x2ee59d346e41478B9DC2762527fACF2082022A29"],
        "pid": "119"
      },
      "sushi-sdt-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x22DEF8cF4E481417cb014D9dc64975BA12E3a184"],
        "pid": "120"
      },
      "sushi-gno-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x41328fdBA556c8C969418ccCcB077B7B8D932aA5"],
        "pid": "121"
      },
      "sushi-bac-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xFa8C3F98dEBF3d0a192e2EdF9182352332Def35c"],
        "pid": "122"
      },
      "sushi-weth-aeth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xfa5bc40c3BD5aFA8bC2fe6b84562fEE16FB2Df5F"],
        "pid": "123"
      },
      "sushi-armor-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x17A2194D55f52Fd0C711e0e42B41975494bb109B"],
        "pid": "127"
      },
      "sushi-weth-assy": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x46ACb1187a6d83e26c0bB46A57Ffeaf23Ad7851E"],
        "pid": "128"
      },
      "sushi-rendoge-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb46736888247C68C995B156CA86426ff32e27Cc9"],
        "pid": "130"
      },
      "sushi-nct-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0C48aE092A7D35bE0e8AD0e122A02351BA51FeDd"],
        "pid": "131"
      },
      "sushi-weth-yvecrv-dao": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x10B47177E92Ef9D5C6059055d92DdF6290848991"],
        "pid": "132"
      },
      "sushi-torn-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb270176bA6075196dF88B855c3Ec7776871Fdb33"],
        "pid": "133"
      },
      "sushi-mbtc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xf5A434FbAA1C00b33Ea141122603C43dE86cc9FE"],
        "pid": "134"
      },
      "sushi-vsp-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x132eEb05d5CB6829Bd34F552cDe0b6b708eF5014"],
        "pid": "135"
      },
      "sushi-weth-yld": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x662511a91734AEa8b06EF770D6Ed51cC539772d0"],
        "pid": "187"
      },
      "sushi-weth-steth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x1C615074c281c5d88ACc6914D408d7E71Eb894EE"],
        "pid": "137"
      },
      "sushi-dao-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x96F5b7C2bE10dC7dE02Fa8858A8f1Bd19C2fA72A"],
        "pid": "138"
      },
      "sushi-weth-grt": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x7B504a15ef05F4EED1C07208C5815c49022A0C19"],
        "pid": "139"
      },
      "sushi-ftm-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0E26A21013f2F8C0362cFae608b4e69a249D5EFc"],
        "pid": "140"
      },
      "sushi-weth-any": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xEc78bD3b23aC867FcC028f2db405A1d9A0A2f712"],
        "pid": "141"
      },
      "sushi-punk-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x092493a22375DE1B17583D924aBf9e8bf884491C"],
        "pid": "142"
      },
      "sushi-mask-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xfd38565Ef22299D491055F0c508F62DD9a669F0F"],
        "pid": "143"
      },
      "sushi-punk-basic-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0267BD35789a5ce247Fff6CB1D597597e003cc43"],
        "pid": "144"
      },
      "sushi-punk-female-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xCA2Ae9C5C491F497DC5625fEaef4572076C946C5"],
        "pid": "145"
      },
      "sushi-punk-attr-4-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x608f8af5fd49b5a5421f53f79920C45b96bdA83F"],
        "pid": "146"
      },
      "sushi-punk-attr-5-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xd54A895623552853F8D673981CC32EB8f3929dFB"],
        "pid": "147"
      },
      "sushi-weth-punk-zombie": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0E7E8Dde18e4016ccc15F12301a47eF7B87Bdafa"],
        "pid": "148"
      },
      "sushi-xft-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xF39fF863730268C9bb867b3a69d031d1C1614b31"],
        "pid": "149"
      },
      "sushi-weth-zrx": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0BC5AE46c32D99C434b7383183ACa16DD6E9BdC8"],
        "pid": "150"
      },
      "sushi-usdn-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x3cf1Cf47Bc87C23cD9410549BD8a75E82C1c73cF"],
        "pid": "151"
      },
      "sushi-premia-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x93E2F3a8277E0360081547D711446e4a1F83546D"],
        "pid": "153"
      },
      "sushi-bank2-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x938625591ADb4e865b882377e2c965F9f9b85E34"],
        "pid": "154"
      },
      "sushi-lina-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x38A0469520534fC70c9C0b9DE4B8649e36A2aE3E"],
        "pid": "155"
      },
      "sushi-perp-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8486c538DcBD6A707c5b3f730B6413286FE8c854"],
        "pid": "156"
      },
      "sushi-usdp-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xB0484fB3aC155AaF7d024b20f1a569ddD6332c32"],
        "pid": "158"
      },
      "sushi-usdp-duck": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xFe308FE2Eb938F772807AEc2E87Fc762d47c40E0"],
        "pid": "159"
      },
      "sushi-dextf-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xD3c41c080a73181e108E0526475a690F3616a859"],
        "pid": "160"
      },
      "sushi-onevbtc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x1803a3386d44f65746403060aB0137682F554484"],
        "pid": "162"
      },
      "sushi-$trdl-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x05Cc2e064e0B48e46015EAd9961F1391d74E5F83"],
        "pid": "163"
      },
      "sushi-rlc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x75382c52b6F90B3f8014BfcadAC2386513F1e3bC"],
        "pid": "164"
      },
      "sushi-bdigg-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xF9440fEDC72A0B8030861DcDac39A75b544E7A3c"],
        "pid": "165"
      },
      "sushi-bbadger-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0a54d4b378C8dBfC7bC93BE50C85DebAFdb87439"],
        "pid": "166"
      },
      "sushi-punk-basic-nftx": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x90825ADd1AD30d7DCeFEa12c6704A192be6eE94E"],
        "pid": "168"
      },
      "sushi-weth-rook": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xf13eEF1C6485348B9C9FA0d5Df2d89AccC5b0147"],
        "pid": "170"
      },
      "sushi-sx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x5e496B7D72362ADd1EEA7D4903Ee2732cD00587d"],
        "pid": "171"
      },
      "sushi-dfx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xBE71372995E8e920E4E72a29a51463677A302E8d"],
        "pid": "172"
      },
      "sushi-inv-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x328dFd0139e26cB0FEF7B0742B49b0fe4325F821"],
        "pid": "173"
      },
      "sushi-ocean-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xeE35E548C7457FcDd51aE95eD09108be660Ea374"],
        "pid": "175"
      },
      "sushi-dnt-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xa1f967F25AE32bD3435E45EA8657De16Ce5A4Ae6"],
        "pid": "178"
      },
      "sushi-aergo-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9E48FaDf799E0513d2EF4631478ea186741fA617"],
        "pid": "179"
      },
      "sushi-must-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA872D244B8948DFD6Cb7Bd19f79E7C1bfb7DB4a0"],
        "pid": "183"
      },
      "sushi-pool-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x577959C519c24eE6ADd28AD96D3531bC6878BA34"],
        "pid": "186"
      },
      "sushi-bzrx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xa30911e072A0C88D55B5D0A0984B66b0D04569d0"],
        "pid": "188"
      },
      "sushi-yvboost-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9461173740D27311b176476FA27e94C681b1Ea6b"],
        "pid": "230"
      },
      "sushi-axs-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0C365789DbBb94A29F8720dc465554c587e897dB"],
        "pid": "231"
      },
      "sushi-bdi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8d782C5806607E9AAFB2AC38c1DA3838Edf8BD03"],
        "pid": "232"
      },
      "sushi-bask-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x34D25a4749867eF8b62A0CD1e2d7B4F7aF167E01"],
        "pid": "233"
      },
      "sushi-zig-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x4Fb3CAe84a1264b8BB1911e8915F56660eC8178E"],
        "pid": "236"
      },
      "sushi-mm-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x41848373dec2867ef3924E47B2eBD0EE645a54F9"],
        "pid": "237"
      },
      "sushi-pendle-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x37922C69b08BABcCEaE735A31235c81f1d1e8E43"],
        "pid": "238"
      },
      "sushi-pmon-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x69ab811953499Eb253c5a69aE06275A42b97c9aE"],
        "pid": "239"
      },
      "sushi-mana-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x1bEC4db6c3Bc499F3DbF289F5499C30d541FEc97"],
        "pid": "240"
      },
      "sushi-wasabi-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8F9ef75CD6E610Dd8Acf8611c344573032fB9c3d"],
        "pid": "241"
      },
      "sushi-drc-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xC79FAEed130816B38E5996b79B1b3b6568cc599F"],
        "pid": "242"
      },
      "sushi-weth-$dg": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xd3dA6236aEcb6b55F571249c011B8EEC340a418E"],
        "pid": "243"
      },
      "sushi-ilv-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x6a091a3406E0073C3CD6340122143009aDac0EDa"],
        "pid": "244"
      },
      "sushi-blo-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x804Be24f625C7E23eDd9Fa68e4582590c57ad2B3"],
        "pid": "251"
      },
      "sushi-ldn-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x3bFcA4FB8054fA42DA3E77749b21450a1290beED"],
        "pid": "252"
      },
      "sushi-weth-woofy": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x9AC60b8B33092C2c0B4CA5Af0DEC2bcb84657E12"],
        "pid": "253"
      },
      "sushi-yfi-woofy": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0780B42B3c4cAF41933CFC0040d2853363De20A7"],
        "pid": "254"
      },
      "sushi-naos-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x82EbCD936C9E938704b65027850E42393F8BC4d4"],
        "pid": "255"
      },
      "sushi-umb-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x7229d526d5fD693720B88Eb7129058dB5D497BCe"],
        "pid": "256"
      },
      "sushi-move-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x87b918e76c92818DB0c76a4E174447aeE6E6D23f"],
        "pid": "257"
      },
      "sushi-lev-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xe73ad09925201F21b607ccADA9A371C12A2f49C3"],
        "pid": "258"
      },
      "sushi-weth-mln": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x2F8AC927aa94293461C75406e90Ec0cCFb2748d9"],
        "pid": "259"
      },
      "sushi-ruler-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb1EECFea192907fC4bF9c4CE99aC07186075FC51"],
        "pid": "260"
      },
      "sushi-bpt-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x57024267e8272618f9c5037D373043a8646507e5"],
        "pid": "268"
      },
      "sushi-near-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x6469B34a2a4723163C4902dbBdEa728D20693C12"],
        "pid": "269"
      },
      "sushi-bank-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x2c51eaa1BCc7b013C3f1D5985cDcB3c56DC3fbc1"],
        "pid": "270"
      },
      "sushi-alusd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0589e281D35ee1Acf6D4fd32f1fbA60EFfb5281B"],
        "pid": "271"
      },
      "sushi-bond-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x613C836DF6695c10f0f4900528B6931441Ac5d5a"],
        "pid": "273"
      },
      "sushi-weth-fold": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xA914a9b9E03b6aF84F9c6bd2e0e8d27D405695Db"],
        "pid": "275"
      },
      "sushi-ndx-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x8911fce375a8414B1b578BE66eE691A8D2D4DBf7"],
        "pid": "276"
      },
      "sushi-degen-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xe8eB0f7B866A85DA49401D04FfFcfC1aBbF24Dfd"],
        "pid": "277"
      },
      "sushi-weth-1one": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x986627dB5E4AAE987f580feB63D475992e5aC0AE"],
        "pid": "278"
      },
      "sushi-ankr-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x1241F4a348162d99379A23E73926Cf0bfCBf131e"],
        "pid": "281"
      },
      "sushi-weth-onx": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x0652687E87a4b8b5370b05bc298Ff00d205D9B5f"],
        "pid": "282"
      },
      "sushi-ibeur-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xa2D81bEdf22201A77044CDF3Ab4d9dC1FfBc391B"],
        "pid": "283"
      },
      "sushi-eden-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0x82DBc2673e9640343D263a3c55DE49021AD39aE2"],
        "pid": "284"
      },
      "sushi-tower-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xdBaa04796CB5C05D02B8A41B702d9b67c13c9fa9"],
        "pid": "285"
      },
      "sushi-vusd-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xb90047676cC13e68632c55cB5b7cBd8A4C5A0A8E"],
        "pid": "288"
      },
      "sushi-pixel-weth": {
        "pool": "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
        "lpToken": "0x0000000000000000000000000000000000000000",
        "tokens": ["0xada8B1613ce6Fe75f3549Fa4eB2A993ca1220A7c"],
        "pid": "289"
      }
};

export default contracts;