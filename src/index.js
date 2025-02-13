"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Aquí pegamos el JSON de pools completo en una variable (o podrías importarlo de un .json):
const mockData = {
    data: {
        poolGetPools: [
            {
                "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-24h",
                            "apr": 0.1526474606190917,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr",
                            "apr": 0.1526474606190917,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-30d",
                            "apr": 0.143455842147977,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "weETH/wETH",
                "address": "0x250a1381f79593b96b462fb0d575c75795f80332",
                "poolTokens": [
                    {
                        "address": "0x250a1381f79593b96b462fb0d575c75795f80332",
                        "symbol": "weETH/wETH",
                        "logoURI": null
                    },
                    {
                        "address": "0x346e03f8cce9fe01dcb3d0da3e9d00dc2c0e08f0",
                        "symbol": "weETH",
                        "logoURI": "https://etherscan.io/token/images/etherfiweeth_32.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44000000000000000000000141",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44000000000000000000000141-swap-apr-30d",
                            "apr": 0.9795013395958296,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-unibtc-wbtc",
                "address": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44",
                "poolTokens": [
                    {
                        "address": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44",
                        "symbol": "bpt-unibtc-wbtc",
                        "logoURI": null
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x93919784c523f39cacaa98ee0a9d96c3f32b593e",
                        "symbol": "uniBTC",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/39599/large/uniBTC_200px.png?1723064455"
                    }
                ]
            },
            {
                "id": "0x22ed403fadc58110f128246a7e13962f308841a1000200000000000000000110",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x22ed403fadc58110f128246a7e13962f308841a1000200000000000000000110-swap-apr-7d",
                            "apr": 0.3286258026519103,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50USDC-50WETH",
                "address": "0x22ed403fadc58110f128246a7e13962f308841a1",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150",
                "dynamicData": {
                    "yieldCapture24h": "38.42",
                    "aprItems": [
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-30d",
                            "apr": 0.07261423959942885,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-wstETH-yield-apr",
                            "apr": 0.00749235038106871,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-wrsETH-yield-apr",
                            "apr": 0.007229283044216421,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x028591c6e8dfeb2e315ddc2647adbfc5a62b4f77-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01652219669380392,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x028591c6e8dfeb2e315ddc2647adbfc5a62b4f77-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.024783295040705873,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-7d",
                            "apr": 0.311298305079262,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-24h",
                            "apr": 0.0009323688927832232,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr",
                            "apr": 0.0009323688927832232,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "bpt-wrseth-wsteth",
                "address": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x87eee96d50fb761ad85b1c982d28a042169d61b1",
                        "symbol": "wrsETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x87eee96d50fb761ad85b1c982d28a042169d61b1.png"
                    },
                    {
                        "address": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef",
                        "symbol": "bpt-wrseth-wsteth",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050-swap-apr-24h",
                            "apr": 0.031316013839543,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050-swap-apr",
                            "apr": 0.031316013839543,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050-swap-apr-7d",
                            "apr": 9661.90087312074,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050-swap-apr-30d",
                            "apr": 2254.421516241778,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-OATHUSD",
                "address": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2",
                "poolTokens": [
                    {
                        "address": "0x39fde572a18448f8139b7788099f0a0740f51205",
                        "symbol": "OATHv1",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x39fde572a18448f8139b7788099f0a0740f51205.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126",
                "dynamicData": {
                    "yieldCapture24h": "11.04",
                    "aprItems": [
                        {
                            "id": "0xf6b4ace2d69a0c6f966d44448692ca392f29029a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.06790859392766896,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf6b4ace2d69a0c6f966d44448692ca392f29029a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.10186289089150344,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-sFRAX-yield-apr",
                            "apr": 0.007250221600715705,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-24h",
                            "apr": 0.0006426723526430675,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr",
                            "apr": 0.0006426723526430675,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-30d",
                            "apr": 0.002531530069781931,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-7d",
                            "apr": 0.01411717088089442,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-fraxsym",
                "address": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a",
                "poolTokens": [
                    {
                        "address": "0x2dd1b4d4548accea497050619965f91f78b3b532",
                        "symbol": "sFRAX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35383/large/sfrax.png?1708445569"
                    },
                    {
                        "address": "0x2e3d870790dc77a83dd1d18184acc7439a53f475",
                        "symbol": "FRAX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/13422/large/FRAX_icon.png?1696513182"
                    }
                ]
            },
            {
                "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5",
                "dynamicData": {
                    "yieldCapture24h": "67.97",
                    "aprItems": [
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-wstETH-yield-apr",
                            "apr": 0.01172252464279227,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-24h",
                            "apr": 0.008310511368187484,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr",
                            "apr": 0.008310511368187484,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x9f9f8d58496691d541c40dbc2b1b20f8c43e8d8c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.009465787451789134,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x9f9f8d58496691d541c40dbc2b1b20f8c43e8d8c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.014198681177683706,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-7d",
                            "apr": 0.9438063697784824,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-30d",
                            "apr": 0.2170719380875952,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "ECLP-wstETH-WETH",
                "address": "0x7ca75bdea9dede97f8b13c6641b768650cb83782",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104",
                "dynamicData": {
                    "yieldCapture24h": "53.30",
                    "aprItems": [
                        {
                            "id": "0xc19055c2ff199ba6190505ef776573c8b7cc676a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01528759284543828,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xc19055c2ff199ba6190505ef776573c8b7cc676a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.02293138926815743,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-30d",
                            "apr": 0.04408044323214268,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-ankrETH-yield-apr",
                            "apr": 0.006279762598612226,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-rETH-yield-apr",
                            "apr": 0.007571940125829392,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-24h",
                            "apr": 0.00002004060118267776,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr",
                            "apr": 0.00002004060118267776,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-7d",
                            "apr": 0.195808855497568,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-ankrgalaharm",
                "address": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c",
                "poolTokens": [
                    {
                        "address": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c",
                        "symbol": "bpt-ankrgalaharm",
                        "logoURI": null
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xe05a08226c49b636acf99c40da8dc6af83ce5bb3",
                        "symbol": "ankrETH",
                        "logoURI": "https://www.ankr.com/_next/static/images/ethereum-ankreth-logo-794cb04ee270a7cb5c8559924aa5211d.png"
                    }
                ]
            },
            {
                "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106",
                "dynamicData": {
                    "yieldCapture24h": "188.24",
                    "aprItems": [
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-rETH-yield-apr",
                            "apr": 0.01049847402002475,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-24h",
                            "apr": 0.0008890028214450826,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr",
                            "apr": 0.0008890028214450826,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-sfrxETH-yield-apr",
                            "apr": 0.001407409589562475,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-wstETH-yield-apr",
                            "apr": 0.001609686838936201,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-30d",
                            "apr": 0.07757027549821754,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-7d",
                            "apr": 0.3653836267559671,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x5669fb0dcfa758bf69fb3adab14578ede14cc89a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01476288425150354,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x5669fb0dcfa758bf69fb3adab14578ede14cc89a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.0221443263772553,
                            "type": "STAKING_BOOST"
                        }
                    ]
                },
                "symbol": "bpt-ethtri",
                "address": "0x5f8893506ddc4c271837187d14a9c87964a074dc",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x484c2d6e3cdd945a8b2df735e079178c1036578c",
                        "symbol": "sfrxETH",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28285/large/sfrxETH_icon.png?1696527285"
                    },
                    {
                        "address": "0x5f8893506ddc4c271837187d14a9c87964a074dc",
                        "symbol": "bpt-ethtri",
                        "logoURI": null
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d",
                "dynamicData": {
                    "yieldCapture24h": "13.71",
                    "aprItems": [
                        {
                            "id": "0x758d3297d9d9325efb6dd424a7b2edcab47e309e-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.08068310832084646,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x758d3297d9d9325efb6dd424a7b2edcab47e309e-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.12102466248126972,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-7d",
                            "apr": 0.3381632129721499,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-30d",
                            "apr": 0.06275144445882419,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-sFRAX-yield-apr",
                            "apr": 0.01435515239494031,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-sfrxETH-yield-apr",
                            "apr": 0.00716745694064654,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-24h",
                            "apr": 0.01231127692336228,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr",
                            "apr": 0.01231127692336228,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "bpt-yieldconcerto",
                "address": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf",
                "poolTokens": [
                    {
                        "address": "0x2dd1b4d4548accea497050619965f91f78b3b532",
                        "symbol": "sFRAX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35383/large/sfrax.png?1708445569"
                    },
                    {
                        "address": "0x484c2d6e3cdd945a8b2df735e079178c1036578c",
                        "symbol": "sfrxETH",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28285/large/sfrxETH_icon.png?1696527285"
                    }
                ]
            },
            {
                "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133",
                "dynamicData": {
                    "yieldCapture24h": "19.77",
                    "aprItems": [
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-24h",
                            "apr": 0.00002042824170636489,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr",
                            "apr": 0.00002042824170636489,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-wrsETH-yield-apr",
                            "apr": 0.008928403238567617,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xa15c762974ba3ac59abc305fba097a0e564f7470-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.04342740705761606,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xa15c762974ba3ac59abc305fba097a0e564f7470-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.06514111058642405,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-7d",
                            "apr": 0.5794426978567457,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-30d",
                            "apr": 0.1290659595637131,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "wrsETH/wETH",
                "address": "0x73a7fe27fe9545d53924e529acf11f3073841b9e",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x73a7fe27fe9545d53924e529acf11f3073841b9e",
                        "symbol": "wrsETH/wETH",
                        "logoURI": null
                    },
                    {
                        "address": "0x87eee96d50fb761ad85b1c982d28a042169d61b1",
                        "symbol": "wrsETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x87eee96d50fb761ad85b1c982d28a042169d61b1.png"
                    }
                ]
            },
            {
                "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-30d",
                            "apr": 0.7086218294715918,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-24h",
                            "apr": 0.01393877681286468,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr",
                            "apr": 0.01393877681286468,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xcc2e1cb5d8dea77f08d19f875f381f34f997d96c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.02354782767444086,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xcc2e1cb5d8dea77f08d19f875f381f34f997d96c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.03532174151166127,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-7d",
                            "apr": 3.122796716448238,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-stablebeets",
                "address": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9",
                        "symbol": "bpt-stablebeets",
                        "logoURI": null
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x2c2549e410ebc7d2a709b37667f9a034f7d9af0b00010000000000000000013f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "25sUSD-25USDT-25USDC-25DAI",
                "address": "0x2c2549e410ebc7d2a709b37667f9a034f7d9af0b",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa100020000000000000000015c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa100020000000000000000015c-swap-apr-24h",
                            "apr": 0.4070047250824527,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa100020000000000000000015c-swap-apr",
                            "apr": 0.4070047250824527,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50BEETS-50multiBeets",
                "address": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa1",
                "poolTokens": [
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x947beaafe07d45a89425e7c00ab245bca02b9125000100000000000000000144",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33CRV-33SNX-33BAL",
                "address": "0x947beaafe07d45a89425e7c00ab245bca02b9125",
                "poolTokens": [
                    {
                        "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
                        "symbol": "CRV",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b",
                "dynamicData": {
                    "yieldCapture24h": "101.61",
                    "aprItems": [
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-rETH-yield-apr",
                            "apr": 0.007688729736566853,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-24h",
                            "apr": 0.0002133242973116378,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr",
                            "apr": 0.0002133242973116378,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf27d53f21d024643d50de50183932f17638229f6-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01009823302053271,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf27d53f21d024643d50de50183932f17638229f6-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.01514734953079907,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-7d",
                            "apr": 0.5463956336389206,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-30d",
                            "apr": 0.1224362531662011,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-rETH-ETH",
                "address": "0x4fd63966879300cafafbb35d157dc5229278ed23",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2000000000000000000000036",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "test-bb-rf-a-USD",
                "address": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2",
                "poolTokens": [
                    {
                        "address": "0x15873081c0aa67ad5c5dba362169d352e2a128a2",
                        "symbol": "test-bb-rf-aUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    },
                    {
                        "address": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2",
                        "symbol": "test-bb-rf-a-USD",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USD.png"
                    },
                    {
                        "address": "0xce9329f138cd6319fcfbd8704e6ae50b6bb04f31",
                        "symbol": "test-bb-rf-aDAI",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-DAI%402x.png"
                    }
                ]
            },
            {
                "id": "0x561193522f792f464018b01f43d264f5b3759930000200000000000000000157",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x561193522f792f464018b01f43d264f5b3759930000200000000000000000157-swap-apr-30d",
                            "apr": 4.817807920904642,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x561193522f792f464018b01f43d264f5b3759930000200000000000000000157-swap-apr-7d",
                            "apr": 20.65354581746208,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50OP-50USDC",
                "address": "0x561193522f792f464018b01f43d264f5b3759930",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0x34a81e8956bf20b7448b31990a2c06f96830a6e4000100000000000000000016",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-CHORD",
                "address": "0x34a81e8956bf20b7448b31990a2c06f96830a6e4",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x59a8fc1c5b424473b39339783aa4765d40aa4d5300020000000000000000012d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC",
                "address": "0x59a8fc1c5b424473b39339783aa4765d40aa4d53",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049-swap-apr-30d",
                            "apr": 11255.84450812274,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-rf-aUSD-asUSD",
                "address": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337",
                "poolTokens": [
                    {
                        "address": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337",
                        "symbol": "bb-rf-aUSD-asUSD",
                        "logoURI": null
                    },
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0xc0d7013a05860271a1edb52415cf74bc85b2ace7",
                        "symbol": "bb-rf-asUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc0d7013a05860271a1edb52415cf74bc85b2ace7.png"
                    }
                ]
            },
            {
                "id": "0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac70000000000000000000000e0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-ern-usd",
                "address": "0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac7",
                "poolTokens": [
                    {
                        "address": "0x64cee2338369aa9b36fc756ea231eb9bc242926f",
                        "symbol": "bb-rfUSD",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USD.png"
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    },
                    {
                        "address": "0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac7",
                        "symbol": "bb-ern-usd",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f-swap-apr-24h",
                            "apr": 0.003596063520565065,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f-swap-apr",
                            "apr": 0.003596063520565065,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f-swap-apr-30d",
                            "apr": 4.742391990079125,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50OP-50USDC",
                "address": "0x92163a34af0365197447133c4f53f00a0454e8db",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0x40dbe796eae37e371cf0217a6dbb946cdaf9f1b7000100000000000000000026",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x40dbe796eae37e371cf0217a6dbb946cdaf9f1b7000100000000000000000026-swap-apr-30d",
                            "apr": 924.1930999448241,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-QI",
                "address": "0x40dbe796eae37e371cf0217a6dbb946cdaf9f1b7",
                "poolTokens": [
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xd12fd67d1522b79af539cf651f3d2f6981519fe900020000000000000000010a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OATHv1-50BAL",
                "address": "0xd12fd67d1522b79af539cf651f3d2f6981519fe9",
                "poolTokens": [
                    {
                        "address": "0x39fde572a18448f8139b7788099f0a0740f51205",
                        "symbol": "OATHv1",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x39fde572a18448f8139b7788099f0a0740f51205.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x3bc061a95b0aeeda3a9eca051f478468a03d5826000200000000000000000155",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50uniBTC-50WBTC",
                "address": "0x3bc061a95b0aeeda3a9eca051f478468a03d5826",
                "poolTokens": [
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x93919784c523f39cacaa98ee0a9d96c3f32b593e",
                        "symbol": "uniBTC",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/39599/large/uniBTC_200px.png?1723064455"
                    }
                ]
            },
            {
                "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a",
                "dynamicData": {
                    "yieldCapture24h": "0.01",
                    "aprItems": [
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-24h",
                            "apr": 0.01298533825761565,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr",
                            "apr": 0.01298533825761565,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-wstETH-yield-apr",
                            "apr": 0.007045686541769957,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-30d",
                            "apr": 25.28440520323465,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-7d",
                            "apr": 108.3984115411945,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-stadue",
                "address": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x3ee6107d9c93955acbb3f39871d32b02f82b78ab",
                        "symbol": "stERN",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/31522/large/stERN.png?1696530332"
                    }
                ]
            },
            {
                "id": "0xc4cd76040a87604c78627dee2450728ac5e971e500020000000000000000010f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc4cd76040a87604c78627dee2450728ac5e971e500020000000000000000010f-swap-apr-30d",
                            "apr": 0.03170838669946541,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xc4cd76040a87604c78627dee2450728ac5e971e500020000000000000000010f-swap-apr-7d",
                            "apr": 0.1492160981177896,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50WETH-50USDC",
                "address": "0xc4cd76040a87604c78627dee2450728ac5e971e5",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x558c91142948de588edfcee6da6a8c3ace22e9f800020000000000000000014c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x558c91142948de588edfcee6da6a8c3ace22e9f800020000000000000000014c-wstETH-yield-apr",
                            "apr": 0.0154377068312503,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50wstETH-50WETH",
                "address": "0x558c91142948de588edfcee6da6a8c3ace22e9f8",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120-swap-apr-24h",
                            "apr": 0.04762040015343578,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120-swap-apr",
                            "apr": 0.04762040015343578,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50STG-50SNX",
                "address": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7",
                "poolTokens": [
                    {
                        "address": "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
                        "symbol": "STG",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    }
                ]
            },
            {
                "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108",
                "dynamicData": {
                    "yieldCapture24h": "3.86",
                    "aprItems": [
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-7d",
                            "apr": 1.390551818545316,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-rETH-yield-apr",
                            "apr": 0.002732161968233751,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-24h",
                            "apr": 0.0503590789572868,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr",
                            "apr": 0.0503590789572868,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-30d",
                            "apr": 0.2956742648024915,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-roabee",
                "address": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c",
                "poolTokens": [
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-rETH-yield-apr",
                            "apr": 0.0115420966318992,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-swap-apr-7d",
                            "apr": 11900.06131978274,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-swap-apr-30d",
                            "apr": 2776.66364946075,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-HAPPY",
                "address": "0xb0de49429fbb80c635432bbad0b3965b28560177",
                "poolTokens": [
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xa4e597c1bd01859b393b124ce18427aa4426a871",
                        "symbol": "bb-rf-grOP",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xa4e597c1bd01859b393b124ce18427aa4426a871.png"
                    }
                ]
            },
            {
                "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b-wstETH-yield-apr",
                            "apr": 0.01892855627023844,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b-swap-apr-7d",
                            "apr": 32675.50935950994,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b-swap-apr-30d",
                            "apr": 7624.283861428227,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-YELLOW",
                "address": "0x981fb05b738e981ac532a99e77170ecb4bc27aef",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0xa1a77e5d7d769bfbb790a08ec976dc738bf795b9",
                        "symbol": "bb-rf-aWBTC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-BTC.png"
                    }
                ]
            },
            {
                "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f-wstETH-yield-apr",
                            "apr": 0.01563840927497195,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f-swap-apr-30d",
                            "apr": 1369.519381177297,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-wstETH",
                "address": "0xde45f101250f2ca1c0f8adfc172576d10c12072d",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0xdd89c7cd0613c1557b2daac6ae663282900204f1",
                        "symbol": "bb-rf-aWETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    },
                    {
                        "address": "0xde45f101250f2ca1c0f8adfc172576d10c12072d",
                        "symbol": "bb-wstETH",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-7d",
                            "apr": 0.1145047903258846,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-30d",
                            "apr": 0.02297489482671044,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-24h",
                            "apr": 0.001689640660861566,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr",
                            "apr": 0.001689640660861566,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50OPP-50WETH",
                "address": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x676f784d19c7f1ac6c6beaeaac78b02a73427852",
                        "symbol": "OPP",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png"
                    }
                ]
            },
            {
                "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-30d",
                            "apr": 21.00911163203547,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-24h",
                            "apr": 0.02535779341790222,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr",
                            "apr": 0.02535779341790222,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-7d",
                            "apr": 90.09624483647522,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80OATHv2-20WETH",
                "address": "0xd13d81af624956327a24d0275cbe54b0ee0e9070",
                "poolTokens": [
                    {
                        "address": "0x00e1724885473b63bce08a9f0a52f35b0979e35a",
                        "symbol": "OATHv2",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/24075/large/OATH.png?1698051304"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x785f08fb77ec934c01736e30546f87b4daccbe50000200000000000000000041",
                "dynamicData": {
                    "yieldCapture24h": "0.04",
                    "aprItems": [
                        {
                            "id": "0x785f08fb77ec934c01736e30546f87b4daccbe50000200000000000000000041-rETH-yield-apr",
                            "apr": 0.008258543273188966,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "IBT-IBRETH",
                "address": "0x785f08fb77ec934c01736e30546f87b4daccbe50",
                "poolTokens": [
                    {
                        "address": "0x00a35fd824c717879bf370e70ac6868b95870dfb",
                        "symbol": "IB",
                        "logoURI": "https://assets.coingecko.com/coins/images/22902/large/ironbank.png?1696522198"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0x8a2872fd28f42bd9f6559907235e83fbf4167f480001000000000000000000f2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-triple",
                "address": "0x8a2872fd28f42bd9f6559907235e83fbf4167f48",
                "poolTokens": [
                    {
                        "address": "0x48ace81c09382bfc08ed102e7eadd37e3b049752",
                        "symbol": "bb-rfWSTETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    },
                    {
                        "address": "0x8025586ac5fb265a23b9492e7414beccc2059ec3",
                        "symbol": "bb-rfWBTC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-BTC.png"
                    },
                    {
                        "address": "0xf970659221bb9d01b615321b63a26e857ffc030b",
                        "symbol": "bb-rfUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x102ba5c72e4bdf8e9243340425f0e523f8983d030002000000000000000000c3",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-WGRAIN",
                "address": "0x102ba5c72e4bdf8e9243340425f0e523f8983d03",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xfd389dc9533717239856190f42475d3f263a270d",
                        "symbol": "GRAIN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29740/large/Grain.png?1696528670"
                    }
                ]
            },
            {
                "id": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a40000000000000000000000f3",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a40000000000000000000000f3-swap-apr-30d",
                            "apr": 0.0001835374725828255,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-onsteady",
                "address": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a4",
                "poolTokens": [
                    {
                        "address": "0x88d07558470484c03d3bb44c3ecc36cafcf43253",
                        "symbol": "bb-USD+",
                        "logoURI": "https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FHCzDW3p9ZkqGuC42prEh%2FUSD%2B_NEW.png?alt=media&token=5700174c-1ad1-4726-bc9f-94abe8dac1d2"
                    },
                    {
                        "address": "0xb5ad7d6d6f92a77f47f98c28c84893fbccc94809",
                        "symbol": "bb-DAI+",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/DAI%2B_2.png"
                    },
                    {
                        "address": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a4",
                        "symbol": "bpt-onsteady",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-24h",
                            "apr": 0.004795595425146766,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr",
                            "apr": 0.004795595425146766,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-30d",
                            "apr": 0.3182273367379154,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-7d",
                            "apr": 1.40770996655139,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-OPARA",
                "address": "0x0244b0025264dc5f5c113d472d579c9c994a59ce",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0xd3594e879b358f430e20f82bea61e83562d49d48",
                        "symbol": "PSP",
                        "logoURI": "https://assets.coingecko.com/coins/images/20403/large/ep7GqM19_400x400.jpg?1696519812"
                    }
                ]
            },
            {
                "id": "0x0495e8d283c08a3bf6c3163a72763797a06c56d8000100000000000000000021",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-CT-HODL",
                "address": "0x0495e8d283c08a3bf6c3163a72763797a06c56d8",
                "poolTokens": [
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x58910d5bd045a20a37de147f8acea75b2d881f610002000000000000000000d3",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "ECLP-USDT-USDC",
                "address": "0x58910d5bd045a20a37de147f8acea75b2d881f61",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    }
                ]
            },
            {
                "id": "0xb8ece82fcfb948b1af937e2819eb2d72bb3d98d200020000000000000000001a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-QI",
                "address": "0xb8ece82fcfb948b1af937e2819eb2d72bb3d98d2",
                "poolTokens": [
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x95b7da84d58869366178d6d8caf80469b49527a2000200000000000000000147",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50USDC",
                "address": "0x95b7da84d58869366178d6d8caf80469b49527a2",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xa96a0545460d2f550d58a10e14d82073c55a8b670002000000000000000000f9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
                "address": "0xa96a0545460d2f550d58a10e14d82073c55a8b67",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr-24h",
                            "apr": 0.0006021986923072838,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr",
                            "apr": 0.0006021986923072838,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr-30d",
                            "apr": 6685899.371113251,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-dolbil",
                "address": "0x62cf35db540152e94936de63efc90d880d4e241b",
                "poolTokens": [
                    {
                        "address": "0x20715545c15c76461861cb0d6ba96929766d05a5",
                        "symbol": "bb-rfUSDT",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDT.png"
                    },
                    {
                        "address": "0x62cf35db540152e94936de63efc90d880d4e241b",
                        "symbol": "bb-dolbil",
                        "logoURI": null
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    },
                    {
                        "address": "0xf970659221bb9d01b615321b63a26e857ffc030b",
                        "symbol": "bb-rfUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a-swap-apr-30d",
                            "apr": 116487.2430417622,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bbrfaUSD-MAI",
                "address": "0x1f131ec1175f023ee1534b16fa8ab237c00e2381",
                "poolTokens": [
                    {
                        "address": "0x1f131ec1175f023ee1534b16fa8ab237c00e2381",
                        "symbol": "bbrfaUSD-MAI",
                        "logoURI": null
                    },
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
                        "symbol": "MAI",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35519/large/mimatic-red.png?1709006627"
                    }
                ]
            },
            {
                "id": "0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a0000000000000000000000f0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-usd",
                "address": "0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a",
                "poolTokens": [
                    {
                        "address": "0x20715545c15c76461861cb0d6ba96929766d05a5",
                        "symbol": "bb-rfUSDT",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDT.png"
                    },
                    {
                        "address": "0xa5d4802b4ce6b745b0c9e1b4a79c093d197869c8",
                        "symbol": "bb-rfDAI",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-DAI%402x.png"
                    },
                    {
                        "address": "0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a",
                        "symbol": "bb-rf-usd",
                        "logoURI": null
                    },
                    {
                        "address": "0xf970659221bb9d01b615321b63a26e857ffc030b",
                        "symbol": "bb-rfUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066-rETH-yield-apr",
                            "apr": 0.01333308699964419,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066-swap-apr-24h",
                            "apr": 0.00009854758000294153,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066-swap-apr",
                            "apr": 0.00009854758000294153,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066-swap-apr-7d",
                            "apr": 0.3716397608392358,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-W",
                "address": "0xc931b64e181a4a29416f55e67921bfe16e4fe789",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0xf30db0ca4605e5115df91b56bd299564dca0266600020000000000000000005d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf30db0ca4605e5115df91b56bd299564dca0266600020000000000000000005d-wstETH-yield-apr",
                            "apr": 0.005677096113944406,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-BEET-WSTEH",
                "address": "0xf30db0ca4605e5115df91b56bd299564dca02666",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-7d",
                            "apr": 23.07191733253788,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-30d",
                            "apr": 5.347954644258347,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-24h",
                            "apr": 0.03198729143352263,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr",
                            "apr": 0.03198729143352263,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-LONG",
                "address": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x0a54996ce9ceaa449cde73da6aa0368bfe3df6dc000200000000000000000017",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-BICO",
                "address": "0x0a54996ce9ceaa449cde73da6aa0368bfe3df6dc",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xd6909e9e702024eb93312b989ee46794c0fb1c9d",
                        "symbol": "BICO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd6909e9e702024eb93312b989ee46794c0fb1c9d.png"
                    }
                ]
            },
            {
                "id": "0x428e1cc3099cf461b87d124957a0d48273f334b100000000000000000000007f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x428e1cc3099cf461b87d124957a0d48273f334b100000000000000000000007f-swap-apr-30d",
                            "apr": 17.9287004143915,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bbrfsoUSD",
                "address": "0x428e1cc3099cf461b87d124957a0d48273f334b1",
                "poolTokens": [
                    {
                        "address": "0x428e1cc3099cf461b87d124957a0d48273f334b1",
                        "symbol": "bb-rf-soUSD",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USD.png"
                    },
                    {
                        "address": "0x62ec8b26c08ffe504f22390a65e6e3c1e45e9877",
                        "symbol": "bb-rf-soDAI",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-DAI%402x.png"
                    },
                    {
                        "address": "0xb96c5bada4bf6a70e71795a3197ba94751dae2db",
                        "symbol": "bb-rf-soUSDT",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDT.png"
                    },
                    {
                        "address": "0xedcfaf390906a8f91fb35b7bac23f3111dbaee1c",
                        "symbol": "bb-rf-soUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f00020000000000000000008e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f00020000000000000000008e-wstETH-yield-apr",
                            "apr": 0.028068748896439,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BAL_LBP",
                "address": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-7d",
                            "apr": 86.4166093494093,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-24h",
                            "apr": 0.05537039797049698,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr",
                            "apr": 0.05537039797049698,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-30d",
                            "apr": 20.09711715214444,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-ROAD",
                "address": "0x39965c9dab5448482cf7e002f583c812ceb53046",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a-swap-apr-24h",
                            "apr": 0.000069246422555099,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a-swap-apr",
                            "apr": 0.000069246422555099,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-MAISELF-I",
                "address": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
                        "symbol": "MAI",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35519/large/mimatic-red.png?1709006627"
                    }
                ]
            },
            {
                "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-7d",
                            "apr": 2.352537722803532,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-30d",
                            "apr": 0.5031174120977105,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-24h",
                            "apr": 0.04392502352978662,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr",
                            "apr": 0.04392502352978662,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "20BEETS-40BAL-40OP",
                "address": "0x025db202cba62a0d804cf337df055ee6dabde843",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0xc97dee022137a8c5f65b5138cc690fbe87806ed500020000000000000000001b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-DAOUSDC",
                "address": "0xc97dee022137a8c5f65b5138cc690fbe87806ed5",
                "poolTokens": [
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de-wstETH-yield-apr",
                            "apr": 0.008769805291192641,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-bb-rf-aWETH-wstETH",
                "address": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c57",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0xdd89c7cd0613c1557b2daac6ae663282900204f1",
                        "symbol": "bb-rf-aWETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    }
                ]
            },
            {
                "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-24h",
                            "apr": 0.0009759878566984049,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr",
                            "apr": 0.0009759878566984049,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-7d",
                            "apr": 1.222742408909195,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-30d",
                            "apr": 0.2837593203791585,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-DED",
                "address": "0xbb65192fc43cff2e2823bae211ebe367f81f2f26",
                "poolTokens": [
                    {
                        "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
                        "symbol": "CRV",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967"
                    },
                    {
                        "address": "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
                        "symbol": "STG",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png"
                    },
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr-24h",
                            "apr": 0.0002348475225477099,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr",
                            "apr": 0.0002348475225477099,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr-7d",
                            "apr": 417.4586574710931,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-FRAX-MAI",
                "address": "0x3dc09db8e571da76dd04e9176afc7feee0b89106",
                "poolTokens": [
                    {
                        "address": "0x2e3d870790dc77a83dd1d18184acc7439a53f475",
                        "symbol": "FRAX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/13422/large/FRAX_icon.png?1696513182"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
                        "symbol": "MAI",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35519/large/mimatic-red.png?1709006627"
                    }
                ]
            },
            {
                "id": "0x4519c64266c8320a188800558d52cb6d0e1f00cf000100000000000000000115",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "20LINK-20UNI-20AAVE-20SNX-20LDO",
                "address": "0x4519c64266c8320a188800558d52cb6d0e1f00cf",
                "poolTokens": [
                    {
                        "address": "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
                        "symbol": "LINK",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009"
                    },
                    {
                        "address": "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
                        "symbol": "UNI",
                        "logoURI": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319"
                    },
                    {
                        "address": "0x76fb31fb4af56892a25e32cfc43de717950c9278",
                        "symbol": "AAVE",
                        "logoURI": "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1696512452"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0xfdb794692724153d1488ccdbe0c56c252596735f",
                        "symbol": "LDO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfdb794692724153d1488ccdbe0c56c252596735f.png"
                    }
                ]
            },
            {
                "id": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a-swap-apr-30d",
                            "apr": 86090.57219922381,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-STG-USD",
                "address": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea",
                "poolTokens": [
                    {
                        "address": "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
                        "symbol": "STG",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png"
                    },
                    {
                        "address": "0xba7834bb3cd2db888e6a06fb45e82b4225cd0c71",
                        "symbol": "bb-rf-aUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000ac",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000ac-swap-apr-30d",
                            "apr": 1260.260437774306,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bbrfsoUSD",
                "address": "0x23ca0306b21ea71552b148cf3c4db4fc85ae1929",
                "poolTokens": [
                    {
                        "address": "0x23ca0306b21ea71552b148cf3c4db4fc85ae1929",
                        "symbol": "bbrfsoUSD",
                        "logoURI": null
                    },
                    {
                        "address": "0x62ec8b26c08ffe504f22390a65e6e3c1e45e9877",
                        "symbol": "bb-rf-soDAI",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-DAI%402x.png"
                    },
                    {
                        "address": "0xb96c5bada4bf6a70e71795a3197ba94751dae2db",
                        "symbol": "bb-rf-soUSDT",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDT.png"
                    },
                    {
                        "address": "0xedcfaf390906a8f91fb35b7bac23f3111dbaee1c",
                        "symbol": "bb-rf-soUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0xefb0d9f51efd52d7589a9083a6d0ca4de416c24900020000000000000000002c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-IBETH",
                "address": "0xefb0d9f51efd52d7589a9083a6d0ca4de416c249",
                "poolTokens": [
                    {
                        "address": "0x00a35fd824c717879bf370e70ac6868b95870dfb",
                        "symbol": "IB",
                        "logoURI": "https://assets.coingecko.com/coins/images/22902/large/ironbank.png?1696522198"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-30d",
                            "apr": 290.1972921113974,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-7d",
                            "apr": 1243.717976504742,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-24h",
                            "apr": 0.00633162297813445,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr",
                            "apr": 0.00633162297813445,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-STABEET",
                "address": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0xadf86a03af1c77d81380f9fa7c4c797a3ebf2d3a000100000000000000000146",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "30OPP-35imxB (OPP-ETH)-35imxB (OPP-opxVELO)",
                "address": "0xadf86a03af1c77d81380f9fa7c4c797a3ebf2d3a",
                "poolTokens": [
                    {
                        "address": "0x1d61313ce48fa3c60df3a4b567378b954fe6f9a6",
                        "symbol": "imxB (OPP-opxVELO)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-opxVELO.png"
                    },
                    {
                        "address": "0x676f784d19c7f1ac6c6beaeaac78b02a73427852",
                        "symbol": "OPP",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png"
                    },
                    {
                        "address": "0xc70134c6858f3fe09d051f05dcdda215ace5c153",
                        "symbol": "imxB (OPP-ETH)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-ETH.png"
                    }
                ]
            },
            {
                "id": "0xfedc53c698593e4283ab0b306d43daccd8914ef8000200000000000000000127",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50WBTC",
                "address": "0xfedc53c698593e4283ab0b306d43daccd8914ef8",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    }
                ]
            },
            {
                "id": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84000100000000000000000145",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84000100000000000000000145-swap-apr-30d",
                            "apr": 21.88320869646141,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "33CRV-33SNX-33BAL",
                "address": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84",
                "poolTokens": [
                    {
                        "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
                        "symbol": "CRV",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-7d",
                            "apr": 0.6540190427608176,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-30d",
                            "apr": 0.1443418945322148,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-24h",
                            "apr": 0.005937803663026357,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr",
                            "apr": 0.005937803663026357,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-LIDOTES",
                "address": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c0",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xfdb794692724153d1488ccdbe0c56c252596735f",
                        "symbol": "LDO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfdb794692724153d1488ccdbe0c56c252596735f.png"
                    }
                ]
            },
            {
                "id": "0xdf73fd65f5f480d13a788d57b5ad42cdd6f34742000100000000000000000134",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33USDC-33OP-33WBTC",
                "address": "0xdf73fd65f5f480d13a788d57b5ad42cdd6f34742",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    }
                ]
            },
            {
                "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b",
                "dynamicData": {
                    "yieldCapture24h": "0.92",
                    "aprItems": [
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-wstETH-yield-apr",
                            "apr": 0.008916803015928019,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-24h",
                            "apr": 0.001510136637384741,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr",
                            "apr": 0.001510136637384741,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-7d",
                            "apr": 25.35016323922991,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-30d",
                            "apr": 5.91216172694503,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-WSTETH-WETH",
                "address": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-7d",
                            "apr": 0.1516023994931852,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-24h",
                            "apr": 0.001609580285890865,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr",
                            "apr": 0.001609580285890865,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-wstETH-yield-apr",
                            "apr": 0.00387985176460558,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-30d",
                            "apr": 0.02388116506724101,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "13wstETH-13sBTC-25aOptSUSD-25sEUR-6SNX-6AAVE-6BAL-6CRV",
                "address": "0xffca204a8417c259555563e7da7ddc89437a374a",
                "poolTokens": [
                    {
                        "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
                        "symbol": "CRV",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967"
                    },
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x298b9b95708152ff6968aafd889c6586e9169f1d",
                        "symbol": "sBTC",
                        "logoURI": "https://optimistic.etherscan.io/token/images/Synthetix_sBTC_32.png"
                    },
                    {
                        "address": "0x6d80113e533a2c0fe82eabd35f1875dcea89ea97",
                        "symbol": "aOptSUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/32918/large/asusd.png?1699825436"
                    },
                    {
                        "address": "0x76fb31fb4af56892a25e32cfc43de717950c9278",
                        "symbol": "AAVE",
                        "logoURI": "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1696512452"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0xfbc4198702e81ae77c06d58f81b629bdf36f0a71",
                        "symbol": "sEUR",
                        "logoURI": "https://optimistic.etherscan.io/token/images/synthetixeuro_32.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-sfrxETH-yield-apr",
                            "apr": 0.0071189459836777,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr-24h",
                            "apr": 0.005104240457684412,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr",
                            "apr": 0.005104240457684412,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr-30d",
                            "apr": 293.232388093354,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-allrdsfrx",
                "address": "0x478980c67d53cd990f2b7bab311ddc9934324e7b",
                "poolTokens": [
                    {
                        "address": "0x2e3d870790dc77a83dd1d18184acc7439a53f475",
                        "symbol": "FRAX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/13422/large/FRAX_icon.png?1696513182"
                    },
                    {
                        "address": "0x484c2d6e3cdd945a8b2df735e079178c1036578c",
                        "symbol": "sfrxETH",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28285/large/sfrxETH_icon.png?1696527285"
                    }
                ]
            },
            {
                "id": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8000000000000000000000030",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8000000000000000000000030-swap-apr-30d",
                            "apr": 0.1157849652503184,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "PTSPP",
                "address": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    },
                    {
                        "address": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8",
                        "symbol": "PTSPP",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c",
                "dynamicData": {
                    "yieldCapture24h": "0.65",
                    "aprItems": [
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-wstETH-yield-apr",
                            "apr": 0.01395479468350909,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-24h",
                            "apr": 0.2011820830515691,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr",
                            "apr": 0.2011820830515691,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-30d",
                            "apr": 0.9181242995178495,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-7d",
                            "apr": 4.664519502560372,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-LDO-WSTEH",
                "address": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0xfdb794692724153d1488ccdbe0c56c252596735f",
                        "symbol": "LDO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfdb794692724153d1488ccdbe0c56c252596735f.png"
                    }
                ]
            },
            {
                "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr-24h",
                            "apr": 0.0009879968199638255,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr",
                            "apr": 0.0009879968199638255,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr-7d",
                            "apr": 0.003347499893953762,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80USDC/20WETH",
                "address": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr-24h",
                            "apr": 0.003233884452310051,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr",
                            "apr": 0.003233884452310051,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr-30d",
                            "apr": 0.2815132258056608,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-OP",
                "address": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc-swap-apr-24h",
                            "apr": 0.01737810658007177,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc-swap-apr",
                            "apr": 0.01737810658007177,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc-swap-apr-30d",
                            "apr": 1.810748706874206,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-moo-exETHUSDC",
                "address": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d",
                "poolTokens": [
                    {
                        "address": "0x5bdd8c19b44c3e4a15305601a2c9841bde9366f0",
                        "symbol": "bb-moo-exUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    },
                    {
                        "address": "0x72d6df381cac8c2283c0b13fe5262a1f5e8e8d1b",
                        "symbol": "bb-moo-exWETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    }
                ]
            },
            {
                "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-rETH-yield-apr",
                            "apr": 0.006208759810713268,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr-24h",
                            "apr": 0.03459756635205147,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr",
                            "apr": 0.03459756635205147,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr-7d",
                            "apr": 5977.777402024388,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr-30d",
                            "apr": 1394.720291829386,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-WONDER",
                "address": "0x359ea8618c405023fc4b98dab1b01f373792a126",
                "poolTokens": [
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xd0d334b6cfd77acc94bab28c7783982387856449",
                        "symbol": "bb-rf-grBAL",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd0d334b6cfd77acc94bab28c7783982387856449.png"
                    }
                ]
            },
            {
                "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-7d",
                            "apr": 0.1862884119647493,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-24h",
                            "apr": 0.008110709371688153,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr",
                            "apr": 0.008110709371688153,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-30d",
                            "apr": 0.03632647893642149,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50USDC-50OP",
                "address": "0xf246fd9800a36907602a02c7c8bf2b11c585218a",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0x7ba1351e805bed53ecb1e6ad13113966024f7f43000200000000000000000139",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC.e-50DAI",
                "address": "0x7ba1351e805bed53ecb1e6ad13113966024f7f43",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr-24h",
                            "apr": 0.112948465706112,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr",
                            "apr": 0.112948465706112,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr-30d",
                            "apr": 0.007334385002238165,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "ECLP-WETH-USDC",
                "address": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xe9949934c882c13d928e2fcf9d99138d3d16a52a000200000000000000000116",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xe9949934c882c13d928e2fcf9d99138d3d16a52a000200000000000000000116-swap-apr-30d",
                            "apr": 0.03300089272178761,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50BOB-50BAL",
                "address": "0xe9949934c882c13d928e2fcf9d99138d3d16a52a",
                "poolTokens": [
                    {
                        "address": "0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b",
                        "symbol": "BOB",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-inETH-yield-apr",
                            "apr": 0.009371540883400099,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-wstETH-yield-apr",
                            "apr": 0.005744235504813572,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-swap-apr-30d",
                            "apr": 653.5982965701048,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-ineth-wsteth",
                "address": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0",
                "poolTokens": [
                    {
                        "address": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0",
                        "symbol": "bpt-ineth-wsteth",
                        "logoURI": null
                    },
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x5a7a183b6b44dc4ec2e3d2ef43f98c5152b1d76d",
                        "symbol": "inETH",
                        "logoURI": "https://optimistic.etherscan.io/token/images/inceptionlrtv2_32.png"
                    }
                ]
            },
            {
                "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154-swap-apr-24h",
                            "apr": 0.004529153352894431,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154-swap-apr",
                            "apr": 0.004529153352894431,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "5OP-95BEETS",
                "address": "0x7498470d6ac742b31644298413714d63496f3a22",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499000000000000000000000132",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499000000000000000000000132-swap-apr-30d",
                            "apr": 0.3136337472738371,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "rsETH/wETH",
                "address": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499",
                "poolTokens": [
                    {
                        "address": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499",
                        "symbol": "rsETH/wETH",
                        "logoURI": null
                    },
                    {
                        "address": "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
                        "symbol": "rsETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4186bfc76e2e237523cbc30fd220fe055156b41f.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xcef953fb1563c5a2bc89c3b54712d03d16689a17000200000000000000000130",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50STG-50WETH",
                "address": "0xcef953fb1563c5a2bc89c3b54712d03d16689a17",
                "poolTokens": [
                    {
                        "address": "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
                        "symbol": "STG",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xb0305b8b5cb8cb8d20e8071cdf601977b40f6ba2000200000000000000000140",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50COMP-50WETH",
                "address": "0xb0305b8b5cb8cb8d20e8071cdf601977b40f6ba2",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x7e7d4467112689329f7e06571ed0e8cbad4910ee",
                        "symbol": "COMP",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-24h",
                            "apr": 0.02907131170236125,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr",
                            "apr": 0.02907131170236125,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-7d",
                            "apr": 0.8473199003480736,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-wstETH-yield-apr",
                            "apr": 0.003529357031793531,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-30d",
                            "apr": 0.1729894939663109,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "25sUSD-25SNX-13OP-13wstETH-13WBTC-13BEETS",
                "address": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac4",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037-rETH-yield-apr",
                            "apr": 0.02011108403935027,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037-swap-apr-30d",
                            "apr": 0.03191379035074481,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "test-bb-WETH",
                "address": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6",
                "poolTokens": [
                    {
                        "address": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6",
                        "symbol": "test-bb-WETH",
                        "logoURI": null
                    },
                    {
                        "address": "0x75062a04a8cc587c588a6bb50bd0cc009da483dc",
                        "symbol": "test-bb-rf-aWETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0x00b82bc5edea6e5e6c77635e31a1a25aad99f881000200000000000000000105",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "80OVN/20wUSD+",
                "address": "0x00b82bc5edea6e5e6c77635e31a1a25aad99f881",
                "poolTokens": [
                    {
                        "address": "0x3b08fcd15280e7b5a6e404c4abb87f7c774d1b2e",
                        "symbol": "OVN",
                        "logoURI": "https://assets.coingecko.com/coins/images/31970/large/OVN.png?1696959174"
                    },
                    {
                        "address": "0xa348700745d249c3b49d2c2acac9a5ae8155f826",
                        "symbol": "wUSD+",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xa348700745d249c3b49d2c2acac9a5ae8155f826.png"
                    }
                ]
            },
            {
                "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149-AaveUSDCn-yield-apr",
                            "apr": 0.04274508150787069,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149-wUSDM-yield-apr",
                            "apr": 0.03479581836895535,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149-waUSDCn-yield-apr",
                            "apr": 0.01192066391255124,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-wUSDM-USDC-rh",
                "address": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5",
                "poolTokens": [
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    },
                    {
                        "address": "0x57f5e098cad7a3d1eed53991d4d66c45c9af7812",
                        "symbol": "wUSDM",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x57f5e098cad7a3d1eed53991d4d66c45c9af7812.png"
                    }
                ]
            },
            {
                "id": "0x4dde571dc66217a062e4b50f9b20c4d08b3245a0000200000000000000000118",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "VW8020",
                "address": "0x4dde571dc66217a062e4b50f9b20c4d08b3245a0",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x6d2e5b8841a6aa5f0f973436357f75d3eeb93312",
                        "symbol": "VMEX",
                        "logoURI": "https://assets.coingecko.com/coins/images/33934/large/VMEX_3072x3072.jpg?1703500846"
                    }
                ]
            },
            {
                "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128-AaveUSDT-yield-apr",
                            "apr": 0.01085781302660347,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128-AaveUSDCn-yield-apr",
                            "apr": 0.03200521724117981,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128-waUSDT-yield-apr",
                            "apr": 0.01182584729446962,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128-waUSDCn-yield-apr",
                            "apr": 0.03433993038904641,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-AUSDC-AUSDT",
                "address": "0x16d7e97b845145da68bd22291d6c10275c3b3f77",
                "poolTokens": [
                    {
                        "address": "0x035c93db04e5aaea54e6cd0261c492a3e0638b37",
                        "symbol": "waUSDT",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png"
                    },
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    }
                ]
            },
            {
                "id": "0xbe8dda0753ef6992a28759282585209c98c25de2000200000000000000000161",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "80XYZ/20WETH",
                "address": "0xbe8dda0753ef6992a28759282585209c98c25de2",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xe0b197133ec7e2db9cb574b1e3da21b93f6e3cbf",
                        "symbol": "XYZ",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0xdd25a7c4ba6bd7e9fea298e4b231379abccca88400020000000000000000011f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC.e",
                "address": "0xdd25a7c4ba6bd7e9fea298e4b231379abccca884",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x1cc3e990b23a09fc9715aaf7ccf21c212a9cbc160001000000000000000000bd",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-OG",
                "address": "0x1cc3e990b23a09fc9715aaf7ccf21c212a9cbc16",
                "poolTokens": [
                    {
                        "address": "0x39fde572a18448f8139b7788099f0a0740f51205",
                        "symbol": "OATHv1",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x39fde572a18448f8139b7788099f0a0740f51205.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0xfd389dc9533717239856190f42475d3f263a270d",
                        "symbol": "GRAIN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29740/large/Grain.png?1696528670"
                    }
                ]
            },
            {
                "id": "0xc4ee406970047a70aed14621d97b3b460a7dea0b00000000000000000000010b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc4ee406970047a70aed14621d97b3b460a7dea0b00000000000000000000010b-swap-apr-30d",
                            "apr": 1.199821841980165,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "SWEEP-USDC-BPT",
                "address": "0xc4ee406970047a70aed14621d97b3b460a7dea0b",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0xb88a5ac00917a02d82c7cd6cebd73e2852d43574",
                        "symbol": "SWEEP",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xb88a5ac00917a02d82c7cd6cebd73e2852d43574.png"
                    },
                    {
                        "address": "0xc4ee406970047a70aed14621d97b3b460a7dea0b",
                        "symbol": "SWEEP-USDC-BPT",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x84e27b600155a5b411e311285cac97889aea281a000100000000000000000114",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "20aOptLINK-20UNI-20SNX-20aOptAAVE-20LDO",
                "address": "0x84e27b600155a5b411e311285cac97889aea281a",
                "poolTokens": [
                    {
                        "address": "0x191c10aa4af7c30e871e70c95db0e4eb77237530",
                        "symbol": "aOptLINK",
                        "logoURI": "https://assets.coingecko.com/coins/images/32888/large/link.png?1699773900"
                    },
                    {
                        "address": "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
                        "symbol": "UNI",
                        "logoURI": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0xf329e36c7bf6e5e86ce2150875a84ce77f477375",
                        "symbol": "aOptAAVE",
                        "logoURI": "https://assets.coingecko.com/coins/images/32887/large/aave.png?1699773604"
                    },
                    {
                        "address": "0xfdb794692724153d1488ccdbe0c56c252596735f",
                        "symbol": "LDO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfdb794692724153d1488ccdbe0c56c252596735f.png"
                    }
                ]
            },
            {
                "id": "0x3dd504bd492d0d8db245eb38b1b39220c1f7272100020000000000000000012c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "1WETH-99USDT",
                "address": "0x3dd504bd492d0d8db245eb38b1b39220c1f72721",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    }
                ]
            },
            {
                "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a-rETH-yield-apr",
                            "apr": 0.00800176658114535,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a-swap-apr-30d",
                            "apr": 0.02520893086345335,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "test-bb-TRI",
                "address": "0xe0b50b0635b90f7021d2618f76ab9a31b92d0094",
                "poolTokens": [
                    {
                        "address": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2",
                        "symbol": "test-bb-rf-a-USD",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USD.png"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xd3e47cbdb2a9c1b1deb857c6415b87fce63a4bf5",
                        "symbol": "test-bb-rf-aWBTC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-BTC.png"
                    }
                ]
            },
            {
                "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-24h",
                            "apr": 0.00660533031582936,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr",
                            "apr": 0.00660533031582936,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-7d",
                            "apr": 0.6324061415750358,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-30d",
                            "apr": 0.1390153187053221,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-BREV",
                "address": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c68440",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xd3594e879b358f430e20f82bea61e83562d49d48",
                        "symbol": "PSP",
                        "logoURI": "https://assets.coingecko.com/coins/images/20403/large/ep7GqM19_400x400.jpg?1696519812"
                    }
                ]
            },
            {
                "id": "0x63c6ea3047ee8c90aa1f0d271a307b04fb87499c00020000000000000000014b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OPP-50imxB (OPP-opxVELO)",
                "address": "0x63c6ea3047ee8c90aa1f0d271a307b04fb87499c",
                "poolTokens": [
                    {
                        "address": "0x1d61313ce48fa3c60df3a4b567378b954fe6f9a6",
                        "symbol": "imxB (OPP-opxVELO)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-opxVELO.png"
                    },
                    {
                        "address": "0x676f784d19c7f1ac6c6beaeaac78b02a73427852",
                        "symbol": "OPP",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png"
                    }
                ]
            },
            {
                "id": "0x59d9af011578ae587749d65d4c4f49a63221e23600020000000000000000001f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-QIUSDC",
                "address": "0x59d9af011578ae587749d65d4c4f49a63221e236",
                "poolTokens": [
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-30d",
                            "apr": 0.22431278032447,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-24h",
                            "apr": 0.003369530182077772,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr",
                            "apr": 0.003369530182077772,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-7d",
                            "apr": 1.008796152285919,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80AURA-20WETH",
                "address": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7",
                "poolTokens": [
                    {
                        "address": "0x1509706a6c66ca549ff0cb464de88231ddbe213b",
                        "symbol": "AURA",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/aura.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be40002000000000000000000ad",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be40002000000000000000000ad-rETH-yield-apr",
                            "apr": 0.004115684944810892,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-IB-RETH",
                "address": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be4",
                "poolTokens": [
                    {
                        "address": "0x00a35fd824c717879bf370e70ac6868b95870dfb",
                        "symbol": "IB",
                        "logoURI": "https://assets.coingecko.com/coins/images/22902/large/ironbank.png?1696522198"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0x876e0a21626c33bdab879330505eccc6091aa60700020000000000000000012e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x876e0a21626c33bdab879330505eccc6091aa60700020000000000000000012e-AaveUSDCn-yield-apr",
                            "apr": 0.02222318780277236,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x876e0a21626c33bdab879330505eccc6091aa60700020000000000000000012e-waUSDCn-yield-apr",
                            "apr": 0.04590706052836891,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x876e0a21626c33bdab879330505eccc6091aa60700020000000000000000012e-sDAI-yield-apr",
                            "apr": 3.277283381143639e-8,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "GDSRH",
                "address": "0x876e0a21626c33bdab879330505eccc6091aa607",
                "poolTokens": [
                    {
                        "address": "0x2218a117083f5b482b0bb821d27056ba9c04b1d3",
                        "symbol": "sDAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x83f20f44975d03b1b09e64809b757c47f942beea.png"
                    },
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    }
                ]
            },
            {
                "id": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae-swap-apr-30d",
                            "apr": 422.4263637621676,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-overnight-II",
                "address": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a5",
                "poolTokens": [
                    {
                        "address": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a5",
                        "symbol": "BPT-overnight-II",
                        "logoURI": null
                    },
                    {
                        "address": "0x88d07558470484c03d3bb44c3ecc36cafcf43253",
                        "symbol": "bb-USD+",
                        "logoURI": "https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FHCzDW3p9ZkqGuC42prEh%2FUSD%2B_NEW.png?alt=media&token=5700174c-1ad1-4726-bc9f-94abe8dac1d2"
                    },
                    {
                        "address": "0xb5ad7d6d6f92a77f47f98c28c84893fbccc94809",
                        "symbol": "bb-DAI+",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/DAI%2B_2.png"
                    }
                ]
            },
            {
                "id": "0xc523ec066e0ef4fa2dff4e4d336d8a03b3b0c8d500020000000000000000013d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50COMP",
                "address": "0xc523ec066e0ef4fa2dff4e4d336d8a03b3b0c8d5",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x7e7d4467112689329f7e06571ed0e8cbad4910ee",
                        "symbol": "COMP",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729000200000000000000000158",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729000200000000000000000158-rETH-yield-apr",
                            "apr": 0.01327328553924718,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50OP-50rETH",
                "address": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    }
                ]
            },
            {
                "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-wstETH-yield-apr",
                            "apr": 0.005589976471484659,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-24h",
                            "apr": 0.0181606328978998,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr",
                            "apr": 0.0181606328978998,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-30d",
                            "apr": 3.822098091429359,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-7d",
                            "apr": 16.46572548398325,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "20wstETH-25LINK-25OP-20WBTC-10LDO",
                "address": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
                        "symbol": "LINK",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0xfdb794692724153d1488ccdbe0c56c252596735f",
                        "symbol": "LDO",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfdb794692724153d1488ccdbe0c56c252596735f.png"
                    }
                ]
            },
            {
                "id": "0x4055c21130112f8cf8f4fab7a04236deee9fac29000200000000000000000112",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x4055c21130112f8cf8f4fab7a04236deee9fac29000200000000000000000112-swap-apr-24h",
                            "apr": 0.01616651211188794,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x4055c21130112f8cf8f4fab7a04236deee9fac29000200000000000000000112-swap-apr",
                            "apr": 0.01616651211188794,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "80BEETS-20USDC",
                "address": "0x4055c21130112f8cf8f4fab7a04236deee9fac29",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0xacfe9b4782910a853b68abba60f3fd8049ffe6380000000000000000000000ff",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xacfe9b4782910a853b68abba60f3fd8049ffe6380000000000000000000000ff-swap-apr-30d",
                            "apr": 429.6668375458751,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xacfe9b4782910a853b68abba60f3fd8049ffe6380000000000000000000000ff-swap-apr-7d",
                            "apr": 1841.477369879002,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-dolausdc",
                "address": "0xacfe9b4782910a853b68abba60f3fd8049ffe638",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x8ae125e8653821e851f12a49f7765db9a9ce7384",
                        "symbol": "DOLA",
                        "logoURI": "https://assets.coingecko.com/coins/images/14287/large/dola.png?1696513984"
                    },
                    {
                        "address": "0xacfe9b4782910a853b68abba60f3fd8049ffe638",
                        "symbol": "bpt-dolausdc",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0xab143aa133536237922e113f1d91023b73ad6d1800020000000000000000015a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xab143aa133536237922e113f1d91023b73ad6d1800020000000000000000015a-waUSDCn-yield-apr",
                            "apr": 0.01311009202398373,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-GYD-AUSDC",
                "address": "0xab143aa133536237922e113f1d91023b73ad6d18",
                "poolTokens": [
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    },
                    {
                        "address": "0xca5d8f8a8d49439357d3cf46ca2e720702f132b8",
                        "symbol": "GYD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xca5d8f8a8d49439357d3cf46ca2e720702f132b8.png"
                    }
                ]
            },
            {
                "id": "0x0503dd6b2d3dd463c9bef67fb5156870af63393e00020000000000000000008f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BAL_LBP",
                "address": "0x0503dd6b2d3dd463c9bef67fb5156870af63393e",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x8abd32f63328de16fd4274e7c4a352b626b1ed7d00020000000000000000013a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x8abd32f63328de16fd4274e7c4a352b626b1ed7d00020000000000000000013a-wrsETH-yield-apr",
                            "apr": 0.0154124636961081,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50WETH-50wrsETH",
                "address": "0x8abd32f63328de16fd4274e7c4a352b626b1ed7d",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x87eee96d50fb761ad85b1c982d28a042169d61b1",
                        "symbol": "wrsETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x87eee96d50fb761ad85b1c982d28a042169d61b1.png"
                    }
                ]
            },
            {
                "id": "0x59aba93eb2fb1d12ae0a292d96655a13469417a00001000000000000000000af",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x59aba93eb2fb1d12ae0a292d96655a13469417a00001000000000000000000af-rETH-yield-apr",
                            "apr": 0.001909841024658534,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-TERB",
                "address": "0x59aba93eb2fb1d12ae0a292d96655a13469417a0",
                "poolTokens": [
                    {
                        "address": "0x74ccbe53f77b08632ce0cb91d3a545bf6b8e0979",
                        "symbol": "fBOMB",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/24109/large/logo-blue.png?1696523301"
                    },
                    {
                        "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
                        "symbol": "rETH",
                        "logoURI": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1696520159"
                    },
                    {
                        "address": "0xc96f4f893286137ac17e07ae7f217ffca5db3ab6",
                        "symbol": "NFTE",
                        "logoURI": "https://assets.coingecko.com/coins/images/29116/large/20230223_224134.jpg?1677224110"
                    }
                ]
            },
            {
                "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr-30d",
                            "apr": 1.868598193772719,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-waUSDT-yield-apr",
                            "apr": 0.003351830730665408,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-waUSDCn-yield-apr",
                            "apr": 0.003284010713188266,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr-24h",
                            "apr": 0.04598631528104143,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr",
                            "apr": 0.04598631528104143,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "1BEETS-1multiBeets-2OP-69SNX-13sUSD-7waUSDCn-7waUSDT",
                "address": "0x5457e7098013fb703078a5b5b69e0836eba002cd",
                "poolTokens": [
                    {
                        "address": "0x035c93db04e5aaea54e6cd0261c492a3e0638b37",
                        "symbol": "waUSDT",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x1d95129c18a8c91c464111fdf7d0eb241b37a9850002000000000000000000c1",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-RESERVE",
                "address": "0x1d95129c18a8c91c464111fdf7d0eb241b37a985",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    }
                ]
            },
            {
                "id": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e-swap-apr-30d",
                            "apr": 297.3812163218672,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-USD+",
                "address": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a024",
                "poolTokens": [
                    {
                        "address": "0x88d07558470484c03d3bb44c3ecc36cafcf43253",
                        "symbol": "bb-USD+",
                        "logoURI": "https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FHCzDW3p9ZkqGuC42prEh%2FUSD%2B_NEW.png?alt=media&token=5700174c-1ad1-4726-bc9f-94abe8dac1d2"
                    },
                    {
                        "address": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a024",
                        "symbol": "BPT-USD+",
                        "logoURI": null
                    },
                    {
                        "address": "0xb5ad7d6d6f92a77f47f98c28c84893fbccc94809",
                        "symbol": "bb-DAI+",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/DAI%2B_2.png"
                    }
                ]
            },
            {
                "id": "0x4d6461f181cf2b26a1cb4e3a070d63d0d31a51550002000000000000000000f8",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
                "address": "0x4d6461f181cf2b26a1cb4e3a070d63d0d31a5155",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-24h",
                            "apr": 0.06885240382475724,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr",
                            "apr": 0.06885240382475724,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-7d",
                            "apr": 89.01723395295907,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-30d",
                            "apr": 20.68399573236371,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-LOVE",
                "address": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x5fc073e9c763af7cb02f403130acc62f9f034dbc0002000000000000000000fc",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
                "address": "0x5fc073e9c763af7cb02f403130acc62f9f034dbc",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6000000000000000000000103",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6000000000000000000000103-swap-apr-30d",
                            "apr": 0.001618800353545582,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-steamounrhyt",
                "address": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6",
                "poolTokens": [
                    {
                        "address": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9",
                        "symbol": "bpt-stablebeets",
                        "logoURI": null
                    },
                    {
                        "address": "0xb396b31599333739a97951b74652c117be86ee1d",
                        "symbol": "DUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28775/large/dusd_logo_200x200.png?1696527754"
                    },
                    {
                        "address": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6",
                        "symbol": "bpt-steamounrhyt",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153-swap-apr-24h",
                            "apr": 0.01522416072332477,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153-swap-apr",
                            "apr": 0.01522416072332477,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50BEETS-50OP",
                "address": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x74716000811f20bb7f3a4744c074644c220d62f0000200000000000000000159",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC",
                "address": "0x74716000811f20bb7f3a4744c074644c220d62f0",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-24h",
                            "apr": 0.02903047943490525,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr",
                            "apr": 0.02903047943490525,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-30d",
                            "apr": 0.612324469612207,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-7d",
                            "apr": 2.752041174669725,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80BAL-20WETH",
                "address": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr-24h",
                            "apr": 0.02075926184386975,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr",
                            "apr": 0.02075926184386975,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr-30d",
                            "apr": 0.03570347757632655,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr-7d",
                            "apr": 0.1951887739006789,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50BEETS-50multiBeets",
                "address": "0x14d92549e0570d226736ff3524515b9d91a7d0c7",
                "poolTokens": [
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
                        "symbol": "BEETS",
                        "logoURI": "https://assets.coingecko.com/coins/images/19158/large/beets-icon-large.png?1696518608"
                    }
                ]
            },
            {
                "id": "0x7e40fe211c8053b78f31d6c4c15157a430a0334900020000000000000000014d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7e40fe211c8053b78f31d6c4c15157a430a0334900020000000000000000014d-swap-apr-30d",
                            "apr": 0.06367088647772219,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50imxB (OPP-ETH)-50WETH",
                "address": "0x7e40fe211c8053b78f31d6c4c15157a430a03349",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xc70134c6858f3fe09d051f05dcdda215ace5c153",
                        "symbol": "imxB (OPP-ETH)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-ETH.png"
                    }
                ]
            },
            {
                "id": "0xcbac17bc5fa5285df031ae20956632a3720866a90001000000000000000000c2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xcbac17bc5fa5285df031ae20956632a3720866a90001000000000000000000c2-swap-apr-30d",
                            "apr": 0.09720324871272872,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-TRIPOOL",
                "address": "0xcbac17bc5fa5285df031ae20956632a3720866a9",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    }
                ]
            },
            {
                "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-24h",
                            "apr": 0.04175403415920764,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr",
                            "apr": 0.04175403415920764,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-7d",
                            "apr": 357.324992937637,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-30d",
                            "apr": 83.24136737212703,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-8TRACK",
                "address": "0x7ef99013e446ddce2486b8e04735b7019a115e6f",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                        "symbol": "LYRA",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x50c5725949a6f0c72e6c4a641f24049a917db0cb.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
                        "symbol": "PERP",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12381/large/60d18e06844a844ad75901a9_mark_only_03.png?1696512205"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0xd0fab195ef9db5365b289fb3e38d38ef6b5d03610002000000000000000000fa",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
                "address": "0xd0fab195ef9db5365b289fb3e38d38ef6b5d0361",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0x20ac7c9329822ee3cf61d244bd4816941b50cf7a000200000000000000000111",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x20ac7c9329822ee3cf61d244bd4816941b50cf7a000200000000000000000111-swap-apr-30d",
                            "apr": 1.050593688934043,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50WETH-50USDC",
                "address": "0x20ac7c9329822ee3cf61d244bd4816941b50cf7a",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x752de5046a3f726d3165cb8cd4143f299949ce9d000200000000000000000077",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-BRINE",
                "address": "0x752de5046a3f726d3165cb8cd4143f299949ce9d",
                "poolTokens": [
                    {
                        "address": "0x0c5b4c92c948691eebf185c17eeb9c230dc019e9",
                        "symbol": "PICKLE",
                        "logoURI": "https://assets.coingecko.com/coins/images/12435/large/0M4W6Yr6_400x400.jpg?1643006080"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xeb7ee98165b305fbbf9e6bce58229815570c654e000200000000000000000107",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50AURA-50USDC.e",
                "address": "0xeb7ee98165b305fbbf9e6bce58229815570c654e",
                "poolTokens": [
                    {
                        "address": "0x1509706a6c66ca549ff0cb464de88231ddbe213b",
                        "symbol": "AURA",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/aura.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xece874b7a9051154866ce79154d653481b0b87590002000000000000000000fb",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50BEETS-50BAL",
                "address": "0xece874b7a9051154866ce79154d653481b0b8759",
                "poolTokens": [
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
                        "symbol": "BAL",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/11683/large/Balancer.png?1696511572"
                    }
                ]
            },
            {
                "id": "0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2-swap-apr-30d",
                            "apr": 3143.216464867179,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-rf-SOTRI",
                "address": "0x098f32d98d0d64dba199fc1923d3bf4192e78719",
                "poolTokens": [
                    {
                        "address": "0x6af3737f6d58ae8bcb9f2b597125d37244596e59",
                        "symbol": "bb-rf-soWBTC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-BTC.png"
                    },
                    {
                        "address": "0x7e9250cc13559eb50536859e8c076ef53e275fb3",
                        "symbol": "bb-rf-soWSTETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    },
                    {
                        "address": "0xedcfaf390906a8f91fb35b7bac23f3111dbaee1c",
                        "symbol": "bb-rf-soUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x44ab8efb8909330b4c646b509ee593815c0f0ec500010000000000000000011e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33USDC-33WBTC-33USDT",
                "address": "0x44ab8efb8909330b4c646b509ee593815c0f0ec5",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    }
                ]
            },
            {
                "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-wstETH-yield-apr",
                            "apr": 0.01408566235208996,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-24h",
                            "apr": 0.001120080654501267,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr",
                            "apr": 0.001120080654501267,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-30d",
                            "apr": 74.02095699542785,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-7d",
                            "apr": 317.2372861875901,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-WSTETH-USDC",
                "address": "0x899f737750db562b88c1e412ee1902980d3a4844",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-30d",
                            "apr": 252.6547330454481,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-24h",
                            "apr": 0.01827083567630954,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr",
                            "apr": 0.01827083567630954,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-7d",
                            "apr": 1082.878948882231,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-BOATH",
                "address": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f",
                "poolTokens": [
                    {
                        "address": "0x39fde572a18448f8139b7788099f0a0740f51205",
                        "symbol": "OATHv1",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x39fde572a18448f8139b7788099f0a0740f51205.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039-swap-apr-30d",
                            "apr": 0.04350156802047853,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "test-bb-USD-MAI",
                "address": "0xf572649606db4743d217a2fa6e8b8eb79742c24a",
                "poolTokens": [
                    {
                        "address": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2",
                        "symbol": "test-bb-rf-a-USD",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USD.png"
                    },
                    {
                        "address": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
                        "symbol": "MAI",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/35519/large/mimatic-red.png?1709006627"
                    },
                    {
                        "address": "0xf572649606db4743d217a2fa6e8b8eb79742c24a",
                        "symbol": "test-bb-USD-MAI",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x04953368a77af5b65512ee3536efe152b96aa453000200000000000000000010",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x04953368a77af5b65512ee3536efe152b96aa453000200000000000000000010-swap-apr-24h",
                            "apr": 0.005956767270189426,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x04953368a77af5b65512ee3536efe152b96aa453000200000000000000000010-swap-apr",
                            "apr": 0.005956767270189426,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x04953368a77af5b65512ee3536efe152b96aa453000200000000000000000010-swap-apr-30d",
                            "apr": 0.120398033992505,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-UY",
                "address": "0x04953368a77af5b65512ee3536efe152b96aa453",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0xd4156a7a7e85d8cb2de2932807d8d5f08d05a88900020000000000000000011c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50FRACTION",
                "address": "0xd4156a7a7e85d8cb2de2932807d8d5f08d05a889",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xbd80cfa9d93a87d1bb895f810ea348e496611cd4",
                        "symbol": "FRACTION",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xbd80cfa9d93a87d1bb895f810ea348e496611cd4.png"
                    }
                ]
            },
            {
                "id": "0xf8be10127b47b532b7af1ac919e0d0cb46bcd294000200000000000000000135",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50USDT",
                "address": "0xf8be10127b47b532b7af1ac919e0d0cb46bcd294",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    }
                ]
            },
            {
                "id": "0xd9c57025b3da04e5bd078c22b69222e92ddb62f600010000000000000000001e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-STABLE",
                "address": "0xd9c57025b3da04e5bd078c22b69222e92ddb62f6",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
                        "symbol": "LUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/14666/large/Group_3.png?1696514341"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0xfe8c531ba9d4d9ccfd64167e389c15f47eb05fbe000200000000000000000122",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50WBTC",
                "address": "0xfe8c531ba9d4d9ccfd64167e389c15f47eb05fbe",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    }
                ]
            },
            {
                "id": "0x38db9cb893bafcc4668e143e22fe08ecf910422900020000000000000000014e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x38db9cb893bafcc4668e143e22fe08ecf910422900020000000000000000014e-swap-apr-30d",
                            "apr": 0.07110482300179956,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50imxB (OPP-opxVELO)-50WETH",
                "address": "0x38db9cb893bafcc4668e143e22fe08ecf9104229",
                "poolTokens": [
                    {
                        "address": "0x1d61313ce48fa3c60df3a4b567378b954fe6f9a6",
                        "symbol": "imxB (OPP-opxVELO)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-opxVELO.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr-24h",
                            "apr": 0.004545006440994264,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr",
                            "apr": 0.004545006440994264,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr-7d",
                            "apr": 0.4684036156178076,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50WETH-50OLAS",
                "address": "0x5bb3e58887264b667f915130fd04bbb56116c278",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xfc2e6e6bcbd49ccf3a5f029c79984372dcbfe527",
                        "symbol": "OLAS",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/31099/large/OLAS-token.png?1696529930"
                    }
                ]
            },
            {
                "id": "0x7c52a0853de6e9e7c5b5940aac33ce095ebbd275000200000000000000000138",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50WETH",
                "address": "0x7c52a0853de6e9e7c5b5940aac33ce095ebbd275",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0x0604d50e1a314e0b8963a8387713ec0b539920b30001000000000000000000bf",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-O70EE15",
                "address": "0x0604d50e1a314e0b8963a8387713ec0b539920b3",
                "poolTokens": [
                    {
                        "address": "0x39fde572a18448f8139b7788099f0a0740f51205",
                        "symbol": "OATHv1",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x39fde572a18448f8139b7788099f0a0740f51205.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    }
                ]
            },
            {
                "id": "0xd74e7d1bdfa2f79ea893542d864d2ee245476b690002000000000000000000fd",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd74e7d1bdfa2f79ea893542d864d2ee245476b690002000000000000000000fd-swap-apr-30d",
                            "apr": 0.07023728365925233,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50USDC-50BEETS",
                "address": "0xd74e7d1bdfa2f79ea893542d864d2ee245476b69",
                "poolTokens": [
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    }
                ]
            },
            {
                "id": "0xb390a4e78442c1ddd5f446e2950533a4294b89d90001000000000000000000b7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-USDEAD",
                "address": "0xb390a4e78442c1ddd5f446e2950533a4294b89d9",
                "poolTokens": [
                    {
                        "address": "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
                        "symbol": "STG",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97.png"
                    },
                    {
                        "address": "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
                        "symbol": "QI (old)",
                        "logoURI": "https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
                        "symbol": "SNX",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103"
                    },
                    {
                        "address": "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
                        "symbol": "multiBeets",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x97513e975a7fa9072c72c92d8000b0db90b163c5.png"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6000100000000000000000025",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6000100000000000000000025-swap-apr-30d",
                            "apr": 337.3844366966258,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6000100000000000000000025-swap-apr-7d",
                            "apr": 1445.979196647924,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-CRV",
                "address": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6",
                "poolTokens": [
                    {
                        "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
                        "symbol": "CRV",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0x7d6bff131b359da66d92f215fd4e186003bfaa42000000000000000000000058",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7d6bff131b359da66d92f215fd4e186003bfaa42000000000000000000000058-swap-apr-30d",
                            "apr": 0.1061720276586537,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-USD+",
                "address": "0x7d6bff131b359da66d92f215fd4e186003bfaa42",
                "poolTokens": [
                    {
                        "address": "0x7d6bff131b359da66d92f215fd4e186003bfaa42",
                        "symbol": "BPT-USD+",
                        "logoURI": null
                    },
                    {
                        "address": "0x88d07558470484c03d3bb44c3ecc36cafcf43253",
                        "symbol": "bb-USD+",
                        "logoURI": "https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FHCzDW3p9ZkqGuC42prEh%2FUSD%2B_NEW.png?alt=media&token=5700174c-1ad1-4726-bc9f-94abe8dac1d2"
                    },
                    {
                        "address": "0xfbf87d2c22d1d298298ab5b0ec957583a2731d15",
                        "symbol": "bb-DAI+",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0x9ab692518817739e0cb111670e63cb7b08d6012c000200000000000000000152",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "60USDC-40OP",
                "address": "0x9ab692518817739e0cb111670e63cb7b08d6012c",
                "poolTokens": [
                    {
                        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
                        "symbol": "USDC",
                        "logoURI": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136",
                "dynamicData": {
                    "yieldCapture24h": "27.25",
                    "aprItems": [
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-wstETH-yield-apr",
                            "apr": 0.007341350731318367,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-weETH-yield-apr",
                            "apr": 0.006320527799354125,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xf3b314b1d2bd7d9afa8ec637716a9bb81dbc79e5-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01573178397049521,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf3b314b1d2bd7d9afa8ec637716a9bb81dbc79e5-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.023597675955742817,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-30d",
                            "apr": 0.1085176664988333,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-24h",
                            "apr": 0.0007197091061731068,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr",
                            "apr": 0.0007197091061731068,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-7d",
                            "apr": 0.485697712868382,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-weethwsteth",
                "address": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d",
                        "symbol": "bpt-weethwsteth",
                        "logoURI": null
                    },
                    {
                        "address": "0x5a7facb970d094b6c7ff1df0ea68d99e6e73cbff",
                        "symbol": "weETH",
                        "logoURI": "https://etherscan.io/token/images/etherfiweeth_32.png"
                    }
                ]
            },
            {
                "id": "0x362715c164d606682c4ea7e479633e419d9345eb0001000000000000000000e7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-triyie",
                "address": "0x362715c164d606682c4ea7e479633e419d9345eb",
                "poolTokens": [
                    {
                        "address": "0xb85245929dc65b5eddb56c4b4e84b20bce69db35",
                        "symbol": "bb-rfWSTETH",
                        "logoURI": null
                    },
                    {
                        "address": "0xd32f78f5ae235269c6d2cabbd26a57ff9fd62967",
                        "symbol": "bb-rfWBTC",
                        "logoURI": null
                    },
                    {
                        "address": "0xdc2007d9e9a33f50630f26069faab69c25f7758c",
                        "symbol": "bb-rfUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x8b6d3aa69c1cf47677281691b1abf3831ba1329d0001000000000000000000d0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-SOTRI",
                "address": "0x8b6d3aa69c1cf47677281691b1abf3831ba1329d",
                "poolTokens": [
                    {
                        "address": "0x055a4cfa8cd9ced1d7bc9ae5eb46c404c130e46d",
                        "symbol": "bb-rf-soWBTC",
                        "logoURI": null
                    },
                    {
                        "address": "0x7e9250cc13559eb50536859e8c076ef53e275fb3",
                        "symbol": "bb-rf-soWSTETH",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-ETH.png"
                    },
                    {
                        "address": "0xedcfaf390906a8f91fb35b7bac23f3111dbaee1c",
                        "symbol": "bb-rf-soUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b",
                "dynamicData": {
                    "yieldCapture24h": "8.78",
                    "aprItems": [
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-AaveUSDCn-yield-apr",
                            "apr": 0.02172401190169196,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr-30d",
                            "apr": 0.1202215921727789,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-AaveUSDT-yield-apr",
                            "apr": 0.02125192998118131,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-waUSDT-yield-apr",
                            "apr": 0.0204766297029481,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-waUSDCn-yield-apr",
                            "apr": 0.02358221156467293,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr-24h",
                            "apr": 0.02649733787982879,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr",
                            "apr": 0.02649733787982879,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr-7d",
                            "apr": 0.7569489254067729,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "RSB",
                "address": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c3",
                "poolTokens": [
                    {
                        "address": "0x035c93db04e5aaea54e6cd0261c492a3e0638b37",
                        "symbol": "waUSDT",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png"
                    },
                    {
                        "address": "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
                        "symbol": "waUSDCn",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png"
                    }
                ]
            },
            {
                "id": "0xdcd803c0ad8778662c0a53b4daed81ab9ef06834000200000000000000000001",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xdcd803c0ad8778662c0a53b4daed81ab9ef06834000200000000000000000001-swap-apr-30d",
                            "apr": 0.3260237696103061,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-TEST2",
                "address": "0xdcd803c0ad8778662c0a53b4daed81ab9ef06834",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
                        "symbol": "DAI",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.png"
                    }
                ]
            },
            {
                "id": "0x4136e861e0ad0642cb2f16962540a7808bbade53000000000000000000000102",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bpt-steamounrhyt",
                "address": "0x4136e861e0ad0642cb2f16962540a7808bbade53",
                "poolTokens": [
                    {
                        "address": "0x4136e861e0ad0642cb2f16962540a7808bbade53",
                        "symbol": "bpt-steamounrhyt",
                        "logoURI": null
                    },
                    {
                        "address": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9",
                        "symbol": "bpt-stablebeets",
                        "logoURI": null
                    },
                    {
                        "address": "0xb396b31599333739a97951b74652c117be86ee1d",
                        "symbol": "DUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28775/large/dusd_logo_200x200.png?1696527754"
                    }
                ]
            },
            {
                "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr-24h",
                            "apr": 0.004230450719779041,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr",
                            "apr": 0.004230450719779041,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr-30d",
                            "apr": 0.1148363139145716,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "TEST-WEIGHTED",
                "address": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
                        "symbol": "USDC.e",
                        "logoURI": "https://assets.coingecko.com/coins/images/31580/large/USDC-icon.png?1696530397"
                    }
                ]
            },
            {
                "id": "0xd501e07c1b0640a4be471ea6a0a29e2f34788b18000200000000000000000160",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "80TST/20WETH",
                "address": "0xd501e07c1b0640a4be471ea6a0a29e2f34788b18",
                "poolTokens": [
                    {
                        "address": "0x326aec8d7d99d1d6022c57c5f6194d2a7867227d",
                        "symbol": "TST",
                        "logoURI": null
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    }
                ]
            },
            {
                "id": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9000000000000000000000143",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9000000000000000000000143-wstETH-yield-apr",
                            "apr": 0.003845092097636512,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9000000000000000000000143-swap-apr-30d",
                            "apr": 56.3376659142311,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-insteth-wsteth",
                "address": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9",
                        "symbol": "bpt-insteth-wsteth",
                        "logoURI": null
                    },
                    {
                        "address": "0xd08c3f25862077056cb1b710937576af899a4959",
                        "symbol": "InstETH",
                        "logoURI": "https://optimistic.etherscan.io/token/images/insteth_32.png"
                    }
                ]
            },
            {
                "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-24h",
                            "apr": 0.01355774042286821,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr",
                            "apr": 0.01355774042286821,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-30d",
                            "apr": 30.79777637349235,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-7d",
                            "apr": 132.1939796336031,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-GTRAIN",
                "address": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0xc5b001dc33727f8f26880b184090d3e252470d45",
                        "symbol": "ERN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29744/large/ERN200x200.png?1696528676"
                    },
                    {
                        "address": "0xfd389dc9533717239856190f42475d3f263a270d",
                        "symbol": "GRAIN",
                        "logoURI": "https://assets.coingecko.com/coins/images/29740/large/Grain.png?1696528670"
                    }
                ]
            },
            {
                "id": "0x59a22a7859acb8505968344d463809211b0c9cf6000200000000000000000131",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50WETH",
                "address": "0x59a22a7859acb8505968344d463809211b0c9cf6",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000006",
                        "symbol": "WETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    }
                ]
            },
            {
                "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d",
                "dynamicData": {
                    "yieldCapture24h": "9.71",
                    "aprItems": [
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-24h",
                            "apr": 0.0008694418570610131,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr",
                            "apr": 0.0008694418570610131,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-7d",
                            "apr": 0.1939397485772151,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-30d",
                            "apr": 0.04219325658110791,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-sfrxETH-yield-apr",
                            "apr": 0.006850021296496346,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "bpt-fraxethe",
                "address": "0xa71021492a3966eec735ed1b505afa097c7cfe6f",
                "poolTokens": [
                    {
                        "address": "0x484c2d6e3cdd945a8b2df735e079178c1036578c",
                        "symbol": "sfrxETH",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28285/large/sfrxETH_icon.png?1696527285"
                    },
                    {
                        "address": "0x6806411765af15bddd26f8f544a34cc40cb9838b",
                        "symbol": "frxETH",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/28284/large/frxETH_icon.png?1696527284"
                    },
                    {
                        "address": "0xa71021492a3966eec735ed1b505afa097c7cfe6f",
                        "symbol": "bpt-fraxethe",
                        "logoURI": null
                    }
                ]
            },
            {
                "id": "0xcaca4544534f5c7c114c8fe939693e7595f370f700020000000000000000014a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OPP-50imxB (OPP-ETH)",
                "address": "0xcaca4544534f5c7c114c8fe939693e7595f370f7",
                "poolTokens": [
                    {
                        "address": "0x676f784d19c7f1ac6c6beaeaac78b02a73427852",
                        "symbol": "OPP",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png"
                    },
                    {
                        "address": "0xc70134c6858f3fe09d051f05dcdda215ace5c153",
                        "symbol": "imxB (OPP-ETH)",
                        "logoURI": "https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-ETH.png"
                    }
                ]
            },
            {
                "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125",
                "dynamicData": {
                    "yieldCapture24h": "0.01",
                    "aprItems": [
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-30d",
                            "apr": 0.1405415900344481,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-7d",
                            "apr": 0.6954846194503874,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-wstETH-yield-apr",
                            "apr": 0.007017132231015176,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-24h",
                            "apr": 0.02280934652970504,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr",
                            "apr": 0.02280934652970504,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "1",
                "address": "0xf5521ca6a3295babb4b2729931cd358be35da7e3",
                "poolTokens": [
                    {
                        "address": "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
                        "symbol": "wstETH",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb.png"
                    },
                    {
                        "address": "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
                        "symbol": "LINK",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009"
                    },
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x68f180fcce6836688e9084f035309e29bf0a2095",
                        "symbol": "WBTC",
                        "logoURI": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857"
                    },
                    {
                        "address": "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
                        "symbol": "UNI",
                        "logoURI": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    },
                    {
                        "address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
                        "symbol": "USDT",
                        "logoURI": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                    }
                ]
            },
            {
                "id": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046-swap-apr-24h",
                            "apr": 0.0002891734759850176,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046-swap-apr",
                            "apr": 0.0002891734759850176,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046-swap-apr-30d",
                            "apr": 4010.733102362703,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-rf-aUSD",
                "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                "poolTokens": [
                    {
                        "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
                        "symbol": "bb-rf-aUSD",
                        "logoURI": "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd.png"
                    },
                    {
                        "address": "0x888a6195d42a95e80d81e1c506172772a80b80bc",
                        "symbol": "bb-rf-aDAI",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-DAI%402x.png"
                    },
                    {
                        "address": "0x9253d7e1b42fa01ede2c53f3a21b3b4d13239cd4",
                        "symbol": "bb-rf-aUSDT",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDT.png"
                    },
                    {
                        "address": "0xba7834bb3cd2db888e6a06fb45e82b4225cd0c71",
                        "symbol": "bb-rf-aUSDC",
                        "logoURI": "https://beethoven-assets.s3.eu-central-1.amazonaws.com/bb-yv-USDC%402x.png"
                    }
                ]
            },
            {
                "id": "0x19b5f4f829115cba31aecececfa9ba23aced91c4000200000000000000000129",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50sUSD",
                "address": "0x19b5f4f829115cba31aecececfa9ba23aced91c4",
                "poolTokens": [
                    {
                        "address": "0x4200000000000000000000000000000000000042",
                        "symbol": "OP",
                        "logoURI": "https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1696524385"
                    },
                    {
                        "address": "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
                        "symbol": "sUSD",
                        "logoURI": "https://coin-images.coingecko.com/coins/images/37867/large/sus.png?1715815715"
                    }
                ]
            }
        ]
    }
};
const pools = mockData.data.poolGetPools;
const app = (0, express_1.default)();
const PORT = 3000;
// Ruta de ejemplo que retorna una "sugerencia de inversión"
app.get('/suggestion', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pools.length);
    const chosenPool = pools[randomIndex];
    const suggestion = {
        protocol: 'Balancer',
        liquidityPoolId: chosenPool.id,
        amount: '100',
        token: chosenPool.poolTokens[0].symbol
    };
    return res.json([suggestion]);
});
// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Mock server running on port ${PORT}`);
});
