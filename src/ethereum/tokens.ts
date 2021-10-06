const tokens = {
    "BTC_TOKENS": {
        "TBTC": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
        "REN_BTC": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
        "WBTC": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "SBTC": "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
        "HBTC": "0x0316EB71485b0Ab14103307bf65a021042c6d380"
    },
    "PAIR_TOKENS": {
        "uni_eth_dpi": {
            "address": "0x4d5ef58aAc27d99935E5b6B4A6778ff292059991"
        },
        "sushi_eth_sushi": {
            "address": "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0"
        },
        "sushi_eth_dai": {
            "address": "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f"
        },
        "sushi_eth_usdc": {
            "address": "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0"
        },
        "sushi_eth_usdt": {
            "address": "0x06da0fd433C1A5d7a4faa01111c044910A184553"
        },
        "sushi_eth_wbtc": {
            "address": "0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58"
        },
        "uni_ust_maaple": {
            "address": "0xB022e08aDc8bA2dE6bA4fECb59C6D502f66e953B",
            "path1": ["UST"]
        },
        "uni_ust_mamzn": {
            "address": "0x0Ae8cB1f57e3b1b7f4f5048743710084AA69E796",
            "path0": ["UST"]
        },
        "uni_ust_mgoogl": {
            "address": "0x4b70ccD1Cf9905BE1FaEd025EADbD3Ab124efe9a",
            "path0": ["UST"]
        },
        "uni_ust_mtsla": {
            "address": "0x5233349957586A8207c52693A959483F9aeAA50C",
            "path0": ["UST"]
        },
        "uni_ust_mnflx": {
            "address": "0xC99A74145682C4b4A6e9fa55d559eb49A6884F75",
            "path1": ["UST"]
        },
        "uni_ust_mtwtr": {
            "address": "0x34856be886A2dBa5F7c38c4df7FD86869aB08040",
            "path1": ["UST"]
        }
    },
    "CURVE_TOKENS": {
        "hcrv": {
            "address": "0xb19059ebb43466C323583928285a49f558E572Fd",
            "pool": "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
            "swap": true,
            "old": false
        },
        "obtc+sbtcCrv": {
            "address": "0x2fE94ea3d5d4a175184081439753DE15AeF9d614",
            "pool": "0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D",
            "old": false
        },
        "tbtc+sbtcCrv": {
            "address": "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
            "pool": "0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c",
            "old": false
        },
        "crvrenwbtc": {
            "address": "0x49849C98ae39Fff122806C06791Fa73784FB3675",
            "pool": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
            "swap": true,
            "old": true
        },
        "stecrv": {
            "address": "0x06325440D014e39736583c165C2963BA99fAf14E",
            "pool": "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
            "swap": true,
            "old": false
        },
        "husd3crv": {
            "address": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
            "pool": "0x0a53FaDa2d943057C47A301D25a4D9b3B8e01e8E",
            "old": false
        },
        "ycrv": {
            "address": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
            "pool": "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3",
            "old": true
        },
        "3crv": {
            "address": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
            "pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
            "swap": true,
            "old": false
        },
        "crv_compound": {
            "address": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
            "pool": "0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06",
            "old": true
        },
        "crv_busd": {
            "address": "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
            "pool": "0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB",
            "old": true
        },
        "usdn3crv": {
            "address": "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
            "pool": "0x35796DAc54f144DFBAD1441Ec7C32313A7c29F39",
            "old": false
        },
        "crv_eurs": {
            "address": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
            "pool": "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
            "swap": true,
            "old": false
        },
        "gusd3crv": {
            "address": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
            "pool": "0x64448B78561690B70E17CBE8029a3e5c1bB7136e",
            "old": false
        },
        "ust3crv": {
            "address": "0x94e131324b6054c0D789b190b2dAC504e4361b53",
            "pool": "0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d",
            "old": false
        }
    }
}

export default tokens