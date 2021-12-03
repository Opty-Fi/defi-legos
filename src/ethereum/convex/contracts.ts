import ConvexDepositAbi from "./abi/ConvexDeposit.json";
import ConvexStakeAbi from "./abi/ConvexStake.json";
import ERC20DetailedAbi from "./abi/ERC20Detailed.json";
import CurveStableSwapAbi from "./abi/CurveStableSwap.json";
import CurveStableSwapAbi2 from "./abi/CurveStableSwap2.json";
import CurveStableSwapAbi3 from "./abi/CurveStableSwap3.json";
import CurveStableSwapAbi4 from "./abi/CurveStableSwap4.json";
import CurvePoolInfoAbi from "./abi/CurvePoolInfo.json";


const contracts = {
    ConvexDeposit: { abi: ConvexDepositAbi },
    ConvexStake: { abi: ConvexStakeAbi },
    ERC20Detailed: { abi: ERC20DetailedAbi },
    CurveStableSwap: { abi: CurveStableSwapAbi },
    CurveStableSwap2: { abi: CurveStableSwapAbi2 },
    CurveStableSwap3: { abi: CurveStableSwapAbi3 },
    CurveStableSwap4: { abi: CurveStableSwapAbi4 },
    CurvePoolInfo: { abi: CurvePoolInfoAbi },
    pools: {
        "compound": {
            "pool": "0x32512Bee3848bfcBb7bEAf647aa697a100f3b706",
            "stakingPool": "0xf34DFF761145FF0B05e917811d488B441F33a968",
            "lpToken": "0x32512Bee3848bfcBb7bEAf647aa697a100f3b706",
            "tokens": ["0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2"],
            "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
            "whale": "0xad46823600a0e7c7bc2ad7bb04cc20533ca29053"
        },
        "usdt": {
          "pool": "0xA1c3492b71938E144ad8bE4c2fB6810b01A43dD8",
          "stakingPool": "0x8B55351ea358e5Eda371575B031ee24F462d503e",
          "lpToken": "0xA1c3492b71938E144ad8bE4c2fB6810b01A43dD8",
          "tokens": ["0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xa6cb47ebd1e8f9b60af7033c5b075527409c7771"
        },
        "ypool": {
          "pool": "0x0928F6753880A03628eB0be07b77992c8af37874",
          "stakingPool": "0xd802a8351A76ED5eCd89A7502Ca615F2225A585d",
          "lpToken": "0x0928F6753880A03628eB0be07b77992c8af37874",
          "tokens": ["0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x77d3c47876e45123c2837ba68720378af00a2c0a"
        },
        "busd": {
          "pool": "0x59bB786F222d3f0f00B0dA31B799Fff80D552940",
          "stakingPool": "0x602c4cD53a715D8a7cf648540FAb0d3a2d546560",
          "lpToken": "0x59bB786F222d3f0f00B0dA31B799Fff80D552940",
          "tokens": ["0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xbab89cbe597876364b3bc270b1793c0e2e2aa995"
        },
        "susd": {
          "pool": "0x11D200ef1409cecA8D6d23e6496550f707772F11",
          "stakingPool": "0x22eE18aca7F3Ee920D01F25dA85840D12d98E8Ca",
          "lpToken": "0x11D200ef1409cecA8D6d23e6496550f707772F11",
          "tokens": ["0xC25a3A3b969415c80451098fa907EC722572917F"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xdfc968aa66a31c25fc999e57e4ffc39104db94e3"
        },
        "pax": {
          "pool": "0x2eA94b0d3349A284488ACF2934E494b2f58ef647",
          "stakingPool": "0xe3DaafC8C14147d5B4A7a56F0BfdED240158e51e",
          "lpToken": "0x2eA94b0d3349A284488ACF2934E494b2f58ef647",
          "tokens": ["0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd56a91e60241fc39deebd8bfaefa398cc672d906"
        },
        "ren": {
          "pool": "0x74b79021Ea6De3f0D1731fb8BdfF6eE7DF10b8Ae",
          "stakingPool": "0x8E299C62EeD737a5d5a53539dF37b5356a27b07D",
          "lpToken": "0x74b79021Ea6De3f0D1731fb8BdfF6eE7DF10b8Ae",
          "tokens": ["0x49849C98ae39Fff122806C06791Fa73784FB3675"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x647481c033a4a2e816175ce115a0804adf793891"
        },
        "sbtc": {
          "pool": "0xbA723E335eC2939D52a2efcA2a8199cb4CB93cC3",
          "stakingPool": "0xd727A5A6D1C7b31Ff9Db4Db4d24045B7dF0CFF93",
          "lpToken": "0xbA723E335eC2939D52a2efcA2a8199cb4CB93cC3",
          "tokens": ["0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x600b8a34ec1cfd8b8af78cfc49708419a16ea2e8"
        },
        "hbtc": {
          "pool": "0x33c00bF8CFDf42929E0884d230A55F963221f8f3",
          "stakingPool": "0x618BD6cBA676a46958c63700C04318c84a7b7c0A",
          "lpToken": "0x33c00bF8CFDf42929E0884d230A55F963221f8f3",
          "tokens": ["0xb19059ebb43466C323583928285a49f558E572Fd"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x7a7a599d2384ed203cfea49721628aa851e0da16"
        },
        "3pool": {
          "pool": "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
          "stakingPool": "0x689440f2Ff927E1f24c72F1087E1FAF471eCe1c8",
          "lpToken": "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
          "tokens": ["0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x89ac06752a7f21b6443e0e0debbcd1e73d71e60e"
        },
        "gusd": {
          "pool": "0x15c2471ef46Fa721990730cfa526BcFb45574576",
          "stakingPool": "0x7A7bBf95C44b144979360C3300B54A7D34b44985",
          "lpToken": "0x15c2471ef46Fa721990730cfa526BcFb45574576",
          "tokens": ["0xD2967f45c4f384DEEa880F807Be904762a3DeA07"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xb41742195962ca2d9886690ac2854abf7b826090"
        },
        "husd": {
          "pool": "0xe4de776C0eA0974bfA39B8cbB9491091C8cDc1ff",
          "stakingPool": "0x353e489311b21355461353fEC2d02B73EF0eDe7f",
          "lpToken": "0xe4de776C0eA0974bfA39B8cbB9491091C8cDc1ff",
          "tokens": ["0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xdf9beb91f16dc49599e60b82c3a3ee509fd840c7"
        },
        "usdk": {
          "pool": "0x47941F99F4371CC26637CaEdBbd8Ba5F4bfE5149",
          "stakingPool": "0xa50e9071aCaD20b31cd2bbe4dAa816882De82BBe",
          "lpToken": "0x47941F99F4371CC26637CaEdBbd8Ba5F4bfE5149",
          "tokens": ["0x97E2768e8E73511cA874545DC5Ff8067eB19B787"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xbf7d65d769e82e7b862df338223263ba33f72623"
        },
        "usdn": {
          "pool": "0x3689f325E88c2363274E5F3d44b6DaB8f9e1f524",
          "stakingPool": "0x4a2631d090e8b40bBDe245e687BF09e5e534A239",
          "lpToken": "0x3689f325E88c2363274E5F3d44b6DaB8f9e1f524",
          "tokens": ["0x4f3E8F405CF5aFC05D68142F3783bDfE13811522"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd1b12b00b88915cb68a7faad1b2142814ff8564b"
        },
        "musd": {
          "pool": "0xd34d466233c5195193dF712936049729140DBBd7",
          "stakingPool": "0xDBFa6187C79f4fE4Cda20609E75760C5AaE88e52",
          "lpToken": "0xd34d466233c5195193dF712936049729140DBBd7",
          "tokens": ["0x1AEf73d49Dedc4b1778d0706583995958Dc862e6"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xefe13d7844b20ad225eea97413132d67b80c1691"
        },
        "rsv": {
          "pool": "0x8b876C2C02B1f2Ac6Ec207B7f2f06034A4316A87",
          "stakingPool": "0xedfCCF611D7c40F43e77a1340cE2C29EEEC27205",
          "lpToken": "0x8b876C2C02B1f2Ac6Ec207B7f2f06034A4316A87",
          "tokens": ["0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x4791fc70538540fa4cafb807f3618856dc8472f0"
        },
        "tbtc": {
          "pool": "0x36CED690A1516861f26755b978EE62c1157CFFF9",
          "stakingPool": "0x081A6672f07B615B402e7558a867C97FA080Ce35",
          "lpToken": "0x36CED690A1516861f26755b978EE62c1157CFFF9",
          "tokens": ["0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x3d24d77bec08549d7ea86c4e9937204c11e153f1"
        },
        "dusd": {
          "pool": "0x06f4fFa5C3636AaA5C30B3DB97bfd1cd9Ac24A19",
          "stakingPool": "0x1992b82A8cCFC8f89785129D6403b13925d6226E",
          "lpToken": "0x06f4fFa5C3636AaA5C30B3DB97bfd1cd9Ac24A19",
          "tokens": ["0x3a664Ab939FD8482048609f652f9a0B0677337B9"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x1dfff4e47e921cb17c5d663e506aa80390791e4b"
        },
        "pbtc": {
          "pool": "0x21Cce64289407081744F087950b9DB32906470fC",
          "stakingPool": "0x2d3C90AEB11D1393CA839Afc9587515B1325D77A",
          "lpToken": "0x21Cce64289407081744F087950b9DB32906470fC",
          "tokens": ["0xDE5331AC4B3630f94853Ff322B66407e0D6331E8"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x5a87e9a0a765fe5a69fa6492d3c7838dc1511805"
        },
        "bbtc": {
          "pool": "0x2E1f902b9067b5fDd7AF29ef05D4fF6212588388",
          "stakingPool": "0x61D741045cCAA5a215cF4E5e55f20E1199B4B843",
          "lpToken": "0x2E1f902b9067b5fDd7AF29ef05D4fF6212588388",
          "tokens": ["0x410e3E86ef427e30B9235497143881f717d93c2A"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x4cf2c3ce9ca9a01e78b85fa12ac0352be874aacb"
        },
        "obtc": {
          "pool": "0xc1C030139eEc070Ed8FD092CC8C273C638A18bBe",
          "stakingPool": "0xeeeCE77e0bc5e59c77fc408789A9A172A504bD2f",
          "lpToken": "0xc1C030139eEc070Ed8FD092CC8C273C638A18bBe",
          "tokens": ["0x2fE94ea3d5d4a175184081439753DE15AeF9d614"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd41f7006bcb2b3d0f9c5873272ebed67b37f80dc"
        },
        "ust": {
          "pool": "0x67c4f788FEB82FAb27E3007daa3d7b90959D5b89",
          "stakingPool": "0xd4Be1911F8a0df178d6e7fF5cE39919c273E2B7B",
          "lpToken": "0x67c4f788FEB82FAb27E3007daa3d7b90959D5b89",
          "tokens": ["0x94e131324b6054c0D789b190b2dAC504e4361b53"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x018565899a88f75e6edfea0639183adf8c205641"
        },
        "eurs": {
          "pool": "0xd7E2b9494c529b42Dea53EF6a237C16502E6A927",
          "stakingPool": "0xcB8F69E0064d8cdD29cbEb45A14cf771D904BcD3",
          "lpToken": "0xd7E2b9494c529b42Dea53EF6a237C16502E6A927",
          "tokens": ["0x194eBd173F6cDacE046C53eACcE9B953F28411d1"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xaffe4271096c9ecbbde1bb309c60136506989acb"
        },
        "seth": {
          "pool": "0xAF1d4C576bF55f6aE493AEebAcC3a227675e5B98",
          "stakingPool": "0x192469CadE297D6B21F418cFA8c366b63FFC9f9b",
          "lpToken": "0xAF1d4C576bF55f6aE493AEebAcC3a227675e5B98",
          "tokens": ["0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x9ea83407e0046ee452bc6535c0aa5609d7f6f680"
        },
        "aave": {
          "pool": "0x23F224C37C3A69A058d86a54D3f561295A93d542",
          "stakingPool": "0xE82c1eB4BC6F92f85BF7EB6421ab3b882C3F5a7B",
          "lpToken": "0x23F224C37C3A69A058d86a54D3f561295A93d542",
          "tokens": ["0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x33d7dcfd18c9220b41f592bd2b77e70cad699577"
        },
        "steth": {
          "pool": "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
          "stakingPool": "0x0A760466E1B4621579a82a39CB56Dda2F4E70f03",
          "lpToken": "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
          "tokens": ["0x06325440D014e39736583c165C2963BA99fAf14E"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x8835a35023c2fcf105e1f232e600385ed6db9bc6"
        },
        "saave": {
          "pool": "0x09CCD0892b696AB21436e51588a7a7f8b649733d",
          "stakingPool": "0xF86AE6790654b70727dbE58BF1a863B270317fD0",
          "lpToken": "0x09CCD0892b696AB21436e51588a7a7f8b649733d",
          "tokens": ["0x02d341CcB60fAaf662bC0554d13778015d1b285C"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xe594173aaa1493665ec6a19a0d170c76eea1124a"
        },
        "ankreth": {
          "pool": "0x7E96955b66c89B931BBDAf187740Cc0fF2602F21",
          "stakingPool": "0x8798b81b0261934aa850C8de8622472bfdc143F4",
          "lpToken": "0x7E96955b66c89B931BBDAf187740Cc0fF2602F21",
          "tokens": ["0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x569d327288d8354f16813afb01bba0e60c1301f9"
        },
        "usdp": {
          "pool": "0x7a5dC1FA2e1B10194bD2e2e9F1A224971A681444",
          "stakingPool": "0x24DfFd1949F888F91A0c8341Fc98a3F280a782a8",
          "lpToken": "0x7a5dC1FA2e1B10194bD2e2e9F1A224971A681444",
          "tokens": ["0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x0fc60765aa07969027740f2560045cbf4205e776"
        },
        "ironbank": {
          "pool": "0x912EC00eaEbf3820a9B0AC7a5E15F381A1C91f22",
          "stakingPool": "0x3E03fFF82F77073cc590b656D42FceB12E4910A8",
          "lpToken": "0x912EC00eaEbf3820a9B0AC7a5E15F381A1C91f22",
          "tokens": ["0x5282a4eF67D9C33135340fB3289cc1711c13638C"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xc037f78075b256af8405f37658ed1ebc162d0231"
        },
        "link": {
          "pool": "0xD37969740d78C94C648d74671B8BE31eF43c30aB",
          "stakingPool": "0x9700152175dc22E7d1f3245fE3c1D2cfa3602548",
          "lpToken": "0xD37969740d78C94C648d74671B8BE31eF43c30aB",
          "tokens": ["0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x786fd4b869a817d345143fe6eb2963ef27b9dc82"
        },
        "tusd": {
          "pool": "0x0A2eA49EB5F9e23058deffD509D13DDd553c2A19",
          "stakingPool": "0x308b48F037AAa75406426dACFACA864ebd88eDbA",
          "lpToken": "0x0A2eA49EB5F9e23058deffD509D13DDd553c2A19",
          "tokens": ["0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd34f3e85bb7c8020c7959b80a4b87a369d639dc0"
        },
        "frax": {
          "pool": "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
          "stakingPool": "0xB900EF131301B307dB5eFcbed9DBb50A3e209B2e",
          "lpToken": "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
          "tokens": ["0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xf18256e17b47f1b2d5862fe5379a77bba109298d"
        },
        "lusd": {
          "pool": "0xFB9B2f06FDb404Fd3E2278E9A9edc8f252F273d0",
          "stakingPool": "0x2ad92A7aE036a038ff02B96c88de868ddf3f8190",
          "lpToken": "0xFB9B2f06FDb404Fd3E2278E9A9edc8f252F273d0",
          "tokens": ["0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x3631401a11ba7004d1311e24d177b05ece39b4b3"
        },
        "busdv2": {
          "pool": "0x02D784f98A312aF3e2771297Feff1Da8273e4F29",
          "stakingPool": "0xbD223812d360C9587921292D0644D18aDb6a2ad0",
          "lpToken": "0x02D784f98A312aF3e2771297Feff1Da8273e4F29",
          "tokens": ["0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xdf8752de9b615e991378c89d1424fc94f4ffa2d0"
        },
        "reth": {
          "pool": "0x7ADd8D0E923CB692DF6bC65d96d510f0E2fC37af",
          "stakingPool": "0x61dB6c2321f784c8fAb8d5eF80f58F27C831dCc8",
          "lpToken": "0x7ADd8D0E923CB692DF6bC65d96d510f0E2fC37af",
          "tokens": ["0x53a901d48795C58f485cBB38df08FA96a24669D5"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x748bde1b23b36e0b4750c8709221d2f10bf2f629"
        },
        "alusd": {
          "pool": "0xCA3D9F45FfA69ED454E66539298709cb2dB8cA61",
          "stakingPool": "0x02E2151D4F351881017ABdF2DD2b51150841d5B3",
          "lpToken": "0xCA3D9F45FfA69ED454E66539298709cb2dB8cA61",
          "tokens": ["0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd44a4999df99fb92db7cdfe7dea352a28bcedb63"
        },
        "tricrypto": {
          "pool": "0x18684099414dcEF486F4FA5b4e44e6eA53C8c554",
          "stakingPool": "0x5Edced358e6C0B435D53CC30fbE6f5f0833F404F",
          "lpToken": "0x18684099414dcEF486F4FA5b4e44e6eA53C8c554",
          "tokens": ["0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x96f5b642ab3eb8804128d861591c0e0122d72efc"
        },
        "tricrypto2": {
          "pool": "0x903C9974aAA431A765e60bC07aF45f0A1B3b61fb",
          "stakingPool": "0x9D5C5E364D81DaB193b72db9E9BE9D8ee669B652",
          "lpToken": "0x903C9974aAA431A765e60bC07aF45f0A1B3b61fb",
          "tokens": ["0xc4AD29ba4B3c580e6D59105FFf484999997675Ff"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0x4569c1ab9c4fc9b29cfbaddad569e89d5a202f3d"
        },
        "eurt": {
          "pool": "0x2b2175AC371Ec2900AC39fb87452340F65CC9895",
          "stakingPool": "0xD814BFC091111E1417a669672144aFFAA081c3CE",
          "lpToken": "0x2b2175AC371Ec2900AC39fb87452340F65CC9895",
          "tokens": ["0xFD5dB7463a3aB53fD211b4af195c5BCCC1A03890"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xa350122a590fc6c8bee981a06039436fff79c02a"
        },
        "mim": {
          "pool": "0xabB54222c2b77158CC975a2b715a3d703c256F05",
          "stakingPool": "0xFd5AbF66b003881b88567EB9Ed9c651F14Dc4771",
          "lpToken": "0xabB54222c2b77158CC975a2b715a3d703c256F05",
          "tokens": ["0x5a6A4D54456819380173272A5E8E9B9904BdF41B"],
          "rewardTokens": ["0xD533a949740bb3306d119CC777fa900bA034cd52"],
          "whale": "0xd3474bd2f558b12e83810ec7d8af14f2d1d08137"
        }
    }  
}   
export default contracts;