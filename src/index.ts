import express, { Request, Response } from 'express';
import { askAgent } from './agent';
import { liquidityPoolService } from './liquidityPoolService';

require('dotenv').config();

const mockData = {
    data: {
        poolGetPools: [
            {
                "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f",
                "address": "0x250a1381f79593b96b462fb0d575c75795f80332",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-24h",
                            "apr": 0.1526506295496169,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr",
                            "apr": 0.1526506295496169,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x250a1381f79593b96b462fb0d575c75795f8033200000000000000000000012f-swap-apr-30d",
                            "apr": 0.1630639839322475,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "weETH/wETH",
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
                "address": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x408e11ec9b1751c3d00589b61cae484e07fb9e44000000000000000000000141-swap-apr-30d",
                            "apr": 0.9726096062551621,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-unibtc-wbtc",
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
                "address": "0x22ed403fadc58110f128246a7e13962f308841a1",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x22ed403fadc58110f128246a7e13962f308841a1000200000000000000000110-swap-apr-7d",
                            "apr": 0.3208179770975393,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x22ed403fadc58110f128246a7e13962f308841a1000200000000000000000110-swap-apr-30d",
                            "apr": 0.0720090010436783,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50USDC-50WETH",
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
                "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126",
                "address": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a",
                "dynamicData": {
                    "yieldCapture24h": "10.99",
                    "aprItems": [
                        {
                            "id": "0xf6b4ace2d69a0c6f966d44448692ca392f29029a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.06775966611696559,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf6b4ace2d69a0c6f966d44448692ca392f29029a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.10163949917544841,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-sFRAX-yield-apr",
                            "apr": 0.007292173120769863,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-24h",
                            "apr": 0.0005274337741841737,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr",
                            "apr": 0.0005274337741841737,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-30d",
                            "apr": 0.002543724008209273,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xe906d4c4fc4c3fe96560de86b4bf7ed89af9a69a000200000000000000000126-swap-apr-7d",
                            "apr": 0.01390123031858214,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-fraxsym",
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
                "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050",
                "address": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2",
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
                            "id": "0x7ed087afab0b2653c8137744916ed1aba97e2fa2000200000000000000000050-swap-apr-30d",
                            "apr": 2126.939924823588,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-OATHUSD",
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
                "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133",
                "address": "0x73a7fe27fe9545d53924e529acf11f3073841b9e",
                "dynamicData": {
                    "yieldCapture24h": "19.80",
                    "aprItems": [
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-24h",
                            "apr": 0.00002002039344248468,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr",
                            "apr": 0.00002002039344248468,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-wrsETH-yield-apr",
                            "apr": 0.008933893874654921,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xa15c762974ba3ac59abc305fba097a0e564f7470-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.0434220903171282,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xa15c762974ba3ac59abc305fba097a0e564f7470-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.0651331354756923,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-7d",
                            "apr": 0.5362978344569185,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x73a7fe27fe9545d53924e529acf11f3073841b9e000000000000000000000133-swap-apr-30d",
                            "apr": 0.1196459469077358,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "wrsETH/wETH",
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
                "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b",
                "address": "0x4fd63966879300cafafbb35d157dc5229278ed23",
                "dynamicData": {
                    "yieldCapture24h": "101.73",
                    "aprItems": [
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-rETH-yield-apr",
                            "apr": 0.007691037055546569,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-24h",
                            "apr": 0.0002034064382590722,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr",
                            "apr": 0.0002034064382590722,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf27d53f21d024643d50de50183932f17638229f6-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01010139198964989,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf27d53f21d024643d50de50183932f17638229f6-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.015152087984474821,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-7d",
                            "apr": 0.5255519655272042,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x4fd63966879300cafafbb35d157dc5229278ed2300020000000000000000002b-swap-apr-30d",
                            "apr": 0.1193928053158173,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-rETH-ETH",
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
                "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d",
                "address": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf",
                "dynamicData": {
                    "yieldCapture24h": "14.33",
                    "aprItems": [
                        {
                            "id": "0x758d3297d9d9325efb6dd424a7b2edcab47e309e-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.0773585895556414,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x758d3297d9d9325efb6dd424a7b2edcab47e309e-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.1160378843334621,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-7d",
                            "apr": 0.3005837844407675,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-30d",
                            "apr": 0.05798937393622858,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-sFRAX-yield-apr",
                            "apr": 0.01441728388818374,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-sfrxETH-yield-apr",
                            "apr": 0.00713733730312226,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr-24h",
                            "apr": 0.01141906505899474,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2feb76966459d7841fa8a7ed0aa4bf574d6111bf00020000000000000000011d-swap-apr",
                            "apr": 0.01141906505899474,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "bpt-yieldconcerto",
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
                "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a",
                "address": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f",
                "dynamicData": {
                    "yieldCapture24h": "0.01",
                    "aprItems": [
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-24h",
                            "apr": 0.01297031640190879,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr",
                            "apr": 0.01297031640190879,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-wstETH-yield-apr",
                            "apr": 0.007060788802327717,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-30d",
                            "apr": 24.88246360506184,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2a5139cd86c041aa3467e649f5ee0880a5de2f2f00020000000000000000011a-swap-apr-7d",
                            "apr": 106.6664515323828,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-stadue",
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
                "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5",
                "address": "0x7ca75bdea9dede97f8b13c6641b768650cb83782",
                "dynamicData": {
                    "yieldCapture24h": "68.43",
                    "aprItems": [
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-wstETH-yield-apr",
                            "apr": 0.01176621134933289,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-24h",
                            "apr": 0.00815192413763089,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr",
                            "apr": 0.00815192413763089,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x9f9f8d58496691d541c40dbc2b1b20f8c43e8d8c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.009441038902441865,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x9f9f8d58496691d541c40dbc2b1b20f8c43e8d8c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.014161558353662796,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-7d",
                            "apr": 0.9013540837263938,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7ca75bdea9dede97f8b13c6641b768650cb837820002000000000000000000d5-swap-apr-30d",
                            "apr": 0.2109735527003252,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "ECLP-wstETH-WETH",
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
                "id": "0x2c2549e410ebc7d2a709b37667f9a034f7d9af0b00010000000000000000013f",
                "address": "0x2c2549e410ebc7d2a709b37667f9a034f7d9af0b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "25sUSD-25USDT-25USDC-25DAI",
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
                "address": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa1",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa100020000000000000000015c-swap-apr-24h",
                            "apr": 0.4087109463873412,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x9a339cab07c16c0b0df874d7c546f6b7a69c8fa100020000000000000000015c-swap-apr",
                            "apr": 0.4087109463873412,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50BEETS-50multiBeets",
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
                "id": "0x561193522f792f464018b01f43d264f5b3759930000200000000000000000157",
                "address": "0x561193522f792f464018b01f43d264f5b3759930",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC",
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
                "id": "0x947beaafe07d45a89425e7c00ab245bca02b9125000100000000000000000144",
                "address": "0x947beaafe07d45a89425e7c00ab245bca02b9125",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33CRV-33SNX-33BAL",
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
                "id": "0x34a81e8956bf20b7448b31990a2c06f96830a6e4000100000000000000000016",
                "address": "0x34a81e8956bf20b7448b31990a2c06f96830a6e4",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-CHORD",
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
                "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148",
                "address": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-7d",
                            "apr": 0.1067939035365486,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-30d",
                            "apr": 0.02273409603639248,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr-24h",
                            "apr": 0.001690271585406262,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xab3bcd6365c7b3e80f9633c2c54ebf09d66c616d000200000000000000000148-swap-apr",
                            "apr": 0.001690271585406262,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50OPP-50WETH",
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
                "address": "0xd13d81af624956327a24d0275cbe54b0ee0e9070",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-30d",
                            "apr": 20.36327756462751,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-24h",
                            "apr": 0.02549166068440139,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr",
                            "apr": 0.02549166068440139,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109-swap-apr-7d",
                            "apr": 87.21971619250247,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80OATHv2-20WETH",
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
                "address": "0x785f08fb77ec934c01736e30546f87b4daccbe50",
                "dynamicData": {
                    "yieldCapture24h": "0.04",
                    "aprItems": [
                        {
                            "id": "0x785f08fb77ec934c01736e30546f87b4daccbe50000200000000000000000041-rETH-yield-apr",
                            "apr": 0.008258487668687142,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "IBT-IBRETH",
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
                "id": "0x102ba5c72e4bdf8e9243340425f0e523f8983d030002000000000000000000c3",
                "address": "0x102ba5c72e4bdf8e9243340425f0e523f8983d03",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-WGRAIN",
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
                "id": "0x58910d5bd045a20a37de147f8acea75b2d881f610002000000000000000000d3",
                "address": "0x58910d5bd045a20a37de147f8acea75b2d881f61",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "ECLP-USDT-USDC",
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
                "id": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049",
                "address": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049-swap-apr-30d",
                            "apr": 11255.90038906268,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-rf-aUSD-asUSD",
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
                "id": "0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a0000000000000000000000f0",
                "address": "0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-usd",
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
                "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104",
                "address": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c",
                "dynamicData": {
                    "yieldCapture24h": "53.38",
                    "aprItems": [
                        {
                            "id": "0xc19055c2ff199ba6190505ef776573c8b7cc676a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.0152751025233499,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xc19055c2ff199ba6190505ef776573c8b7cc676a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.022912653785024852,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-30d",
                            "apr": 0.04270179508865167,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-ankrETH-yield-apr",
                            "apr": 0.006286597017079515,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-rETH-yield-apr",
                            "apr": 0.00756567985699412,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-24h",
                            "apr": 0.00002002422754124531,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr",
                            "apr": 0.00002002422754124531,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c000000000000000000000104-swap-apr-7d",
                            "apr": 0.1863986644340193,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-ankrgalaharm",
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
                "id": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f00020000000000000000008e",
                "address": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f00020000000000000000008e-wstETH-yield-apr",
                            "apr": 0.02806931875512494,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BAL_LBP",
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
                "id": "0xd12fd67d1522b79af539cf651f3d2f6981519fe900020000000000000000010a",
                "address": "0xd12fd67d1522b79af539cf651f3d2f6981519fe9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OATHv1-50BAL",
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
                "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb",
                "address": "0xbb65192fc43cff2e2823bae211ebe367f81f2f26",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-24h",
                            "apr": 0.0009774353982891662,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr",
                            "apr": 0.0009774353982891662,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-7d",
                            "apr": 1.205420140081652,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xbb65192fc43cff2e2823bae211ebe367f81f2f260001000000000000000000bb-swap-apr-30d",
                            "apr": 0.2799993703704997,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-DED",
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
                "id": "0xb8ece82fcfb948b1af937e2819eb2d72bb3d98d200020000000000000000001a",
                "address": "0xb8ece82fcfb948b1af937e2819eb2d72bb3d98d2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-QI",
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
                "id": "0xc4cd76040a87604c78627dee2450728ac5e971e500020000000000000000010f",
                "address": "0xc4cd76040a87604c78627dee2450728ac5e971e5",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50USDC",
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
                "address": "0xa96a0545460d2f550d58a10e14d82073c55a8b67",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
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
                "id": "0x428e1cc3099cf461b87d124957a0d48273f334b100000000000000000000007f",
                "address": "0x428e1cc3099cf461b87d124957a0d48273f334b1",
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
                "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003",
                "address": "0x39965c9dab5448482cf7e002f583c812ceb53046",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-7d",
                            "apr": 83.83592745060736,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-24h",
                            "apr": 0.05535591040191978,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr",
                            "apr": 0.05535591040191978,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x39965c9dab5448482cf7e002f583c812ceb53046000100000000000000000003-swap-apr-30d",
                            "apr": 19.51468014782639,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-ROAD",
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
                "id": "0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a",
                "address": "0x1f131ec1175f023ee1534b16fa8ab237c00e2381",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a-swap-apr-30d",
                            "apr": 116423.0242302067,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bbrfaUSD-MAI",
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
                "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150",
                "address": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef",
                "dynamicData": {
                    "yieldCapture24h": "38.51",
                    "aprItems": [
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-30d",
                            "apr": 0.0650175353066148,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-wstETH-yield-apr",
                            "apr": 0.007501358795322491,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-wrsETH-yield-apr",
                            "apr": 0.007219458997109109,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x028591c6e8dfeb2e315ddc2647adbfc5a62b4f77-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.0164875849958664,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x028591c6e8dfeb2e315ddc2647adbfc5a62b4f77-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.024731377493799594,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-7d",
                            "apr": 0.2787307183412671,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr-24h",
                            "apr": 0.0009304157099782117,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xcb7d357c84b101e3d559ff4845cef63d7d0753ef000000000000000000000150-swap-apr",
                            "apr": 0.0009304157099782117,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "bpt-wrseth-wsteth",
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
                "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151",
                "address": "0xf246fd9800a36907602a02c7c8bf2b11c585218a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-7d",
                            "apr": 0.1753358697503769,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-24h",
                            "apr": 0.00862855157889941,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr",
                            "apr": 0.00862855157889941,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf246fd9800a36907602a02c7c8bf2b11c585218a000200000000000000000151-swap-apr-30d",
                            "apr": 0.03563206263952425,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50USDC-50OP",
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
                "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a",
                "address": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a-swap-apr-24h",
                            "apr": 0.00006922681428529423,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x3f16f0301b62015b926c3b559b645a5a0e19d8aa00000000000000000000008a-swap-apr",
                            "apr": 0.00006922681428529423,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-MAISELF-I",
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
                "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120",
                "address": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120-swap-apr-24h",
                            "apr": 0.04779717851968559,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xb5285238628f80f1399b286cd6a1ce280c61e2f7000200000000000000000120-swap-apr",
                            "apr": 0.04779717851968559,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50STG-50SNX",
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
                "address": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c",
                "dynamicData": {
                    "yieldCapture24h": "3.91",
                    "aprItems": [
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-7d",
                            "apr": 1.304780871296401,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-rETH-yield-apr",
                            "apr": 0.002749065175992765,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-24h",
                            "apr": 0.0483410453608524,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr",
                            "apr": 0.0483410453608524,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc1f46ce83439886f0ea9c21512b36e7e67239d2c000200000000000000000108-swap-apr-30d",
                            "apr": 0.289605021410741,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-roabee",
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
                "id": "0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac70000000000000000000000e0",
                "address": "0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-ern-usd",
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
                "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121",
                "address": "0x025db202cba62a0d804cf337df055ee6dabde843",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-7d",
                            "apr": 2.139204617904792,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-30d",
                            "apr": 0.4872383318076349,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr-24h",
                            "apr": 0.04383510297096424,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x025db202cba62a0d804cf337df055ee6dabde843000100000000000000000121-swap-apr",
                            "apr": 0.04383510297096424,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "20BEETS-40BAL-40OP",
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
                "id": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2000000000000000000000036",
                "address": "0x9964b1bd3cc530e5c58ba564e45d45290f677be2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "test-bb-rf-a-USD",
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
                "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f",
                "address": "0xde45f101250f2ca1c0f8adfc172576d10c12072d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f-wstETH-yield-apr",
                            "apr": 0.01566142746272655,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f-swap-apr-30d",
                            "apr": 1347.089858388627,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-wstETH",
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
                "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106",
                "address": "0x5f8893506ddc4c271837187d14a9c87964a074dc",
                "dynamicData": {
                    "yieldCapture24h": "188.55",
                    "aprItems": [
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-rETH-yield-apr",
                            "apr": 0.01049169058960508,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-24h",
                            "apr": 0.0008665513996108454,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr",
                            "apr": 0.0008665513996108454,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-sfrxETH-yield-apr",
                            "apr": 0.001414613037127458,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-wstETH-yield-apr",
                            "apr": 0.001609956715677013,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-30d",
                            "apr": 0.07385207473570679,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106-swap-apr-7d",
                            "apr": 0.34652233374358,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x5669fb0dcfa758bf69fb3adab14578ede14cc89a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01475337097167817,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0x5669fb0dcfa758bf69fb3adab14578ede14cc89a-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.02213005645751725,
                            "type": "STAKING_BOOST"
                        }
                    ]
                },
                "symbol": "bpt-ethtri",
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
                "id": "0x7ba1351e805bed53ecb1e6ad13113966024f7f43000200000000000000000139",
                "address": "0x7ba1351e805bed53ecb1e6ad13113966024f7f43",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC.e-50DAI",
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
                "id": "0x59a8fc1c5b424473b39339783aa4765d40aa4d5300020000000000000000012d",
                "address": "0x59a8fc1c5b424473b39339783aa4765d40aa4d53",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC",
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
                "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f",
                "address": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr-7d",
                            "apr": 0.9356810901571209,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr-24h",
                            "apr": 0.1130193418117671,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr",
                            "apr": 0.1130193418117671,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc52bfbbc6f4f056443b14fdd21e37caa6801631f00020000000000000000015f-swap-apr-30d",
                            "apr": 0.01174450957964266,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "ECLP-WETH-USDC",
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
                "address": "0xe9949934c882c13d928e2fcf9d99138d3d16a52a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50BOB-50BAL",
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
                "address": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-inETH-yield-apr",
                            "apr": 0.009346420402776475,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-wstETH-yield-apr",
                            "apr": 0.005766690629187303,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0000000000000000000000142-swap-apr-30d",
                            "apr": 600.2533721248531,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-ineth-wsteth",
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
                "id": "0xc97dee022137a8c5f65b5138cc690fbe87806ed500020000000000000000001b",
                "address": "0xc97dee022137a8c5f65b5138cc690fbe87806ed5",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-DAOUSDC",
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
                "id": "0x8a2872fd28f42bd9f6559907235e83fbf4167f480001000000000000000000f2",
                "address": "0x8a2872fd28f42bd9f6559907235e83fbf4167f48",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-triple",
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
                "id": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de",
                "address": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c57",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de-wstETH-yield-apr",
                            "apr": 0.008789763758247677,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-bb-rf-aWETH-wstETH",
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
                "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef",
                "address": "0x62cf35db540152e94936de63efc90d880d4e241b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr-24h",
                            "apr": 0.0002987302422342039,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr",
                            "apr": 0.0002987302422342039,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr-30d",
                            "apr": 6683834.13003251,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef-swap-apr-7d",
                            "apr": 28645003.41486252,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bb-dolbil",
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
                "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f",
                "address": "0x92163a34af0365197447133c4f53f00a0454e8db",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f-swap-apr-24h",
                            "apr": 0.003579884515332896,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x92163a34af0365197447133c4f53f00a0454e8db00020000000000000000014f-swap-apr",
                            "apr": 0.003579884515332896,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50OP-50USDC",
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
                "address": "0x40dbe796eae37e371cf0217a6dbb946cdaf9f1b7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x40dbe796eae37e371cf0217a6dbb946cdaf9f1b7000100000000000000000026-swap-apr-30d",
                            "apr": 915.6467672908848,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-QI",
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
                "id": "0x3bc061a95b0aeeda3a9eca051f478468a03d5826000200000000000000000155",
                "address": "0x3bc061a95b0aeeda3a9eca051f478468a03d5826",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50uniBTC-50WBTC",
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
                "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b",
                "address": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-7d",
                            "apr": 0.6014984446101026,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-30d",
                            "apr": 0.1340846703647819,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr-24h",
                            "apr": 0.005872428547473005,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbad8de88febc2d9364254e108fe5a547a7b6b4c000020000000000000000005b-swap-apr",
                            "apr": 0.005872428547473005,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-LIDOTES",
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
                "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b",
                "address": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2",
                "dynamicData": {
                    "yieldCapture24h": "0.92",
                    "aprItems": [
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-wstETH-yield-apr",
                            "apr": 0.008927380458349794,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-24h",
                            "apr": 0.001477344355161415,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr",
                            "apr": 0.001477344355161415,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-7d",
                            "apr": 24.61453788236122,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb200020000000000000000008b-swap-apr-30d",
                            "apr": 5.742082029405865,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-WSTETH-WETH",
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
                "id": "0x558c91142948de588edfcee6da6a8c3ace22e9f800020000000000000000014c",
                "address": "0x558c91142948de588edfcee6da6a8c3ace22e9f8",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x558c91142948de588edfcee6da6a8c3ace22e9f800020000000000000000014c-wstETH-yield-apr",
                            "apr": 0.01546587416814938,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50wstETH-50WETH",
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
                "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e",
                "address": "0xb0de49429fbb80c635432bbad0b3965b28560177",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-rETH-yield-apr",
                            "apr": 0.01154203279510556,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-swap-apr-7d",
                            "apr": 11748.68894445157,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e-swap-apr-30d",
                            "apr": 2741.344716194377,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-HAPPY",
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
                "address": "0x981fb05b738e981ac532a99e77170ecb4bc27aef",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b-wstETH-yield-apr",
                            "apr": 0.0189491367574175,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b-swap-apr-30d",
                            "apr": 7473.304763317703,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-YELLOW",
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
                "id": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a40000000000000000000000f3",
                "address": "0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a4",
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
                "id": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a",
                "address": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a-swap-apr-30d",
                            "apr": 85411.75489082444,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-STG-USD",
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
                "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9",
                "address": "0x0244b0025264dc5f5c113d472d579c9c994a59ce",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-24h",
                            "apr": 0.004780297585977941,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr",
                            "apr": 0.004780297585977941,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-30d",
                            "apr": 0.3099021069056666,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x0244b0025264dc5f5c113d472d579c9c994a59ce0002000000000000000000c9-swap-apr-7d",
                            "apr": 1.351000846651326,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-OPARA",
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
                "address": "0x0495e8d283c08a3bf6c3163a72763797a06c56d8",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-CT-HODL",
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
                "id": "0x00b82bc5edea6e5e6c77635e31a1a25aad99f881000200000000000000000105",
                "address": "0x00b82bc5edea6e5e6c77635e31a1a25aad99f881",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x00b82bc5edea6e5e6c77635e31a1a25aad99f881000200000000000000000105-swap-apr-7d",
                            "apr": 1593.134150997658,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80OVN/20wUSD+",
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
                "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c",
                "address": "0x478980c67d53cd990f2b7bab311ddc9934324e7b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-sfrxETH-yield-apr",
                            "apr": 0.007130100426986342,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr-24h",
                            "apr": 0.005097506133854715,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr",
                            "apr": 0.005097506133854715,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x478980c67d53cd990f2b7bab311ddc9934324e7b00020000000000000000010c-swap-apr-30d",
                            "apr": 289.4721552690282,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-allrdsfrx",
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
                "address": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb0f2c34b9cd5c377c5efbba3b31e67114810cbc8000000000000000000000030-swap-apr-30d",
                            "apr": 0.1154199378078231,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "PTSPP",
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
                "id": "0x95b7da84d58869366178d6d8caf80469b49527a2000200000000000000000147",
                "address": "0x95b7da84d58869366178d6d8caf80469b49527a2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x95b7da84d58869366178d6d8caf80469b49527a2000200000000000000000147-swap-apr-7d",
                            "apr": 0.07168454773521558,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50WETH-50USDC",
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
                "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149",
                "address": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5",
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
                            "apr": 0.03479984481342616,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xac9f52e656cee6097bd7b8a251b33529b5e30bd5000200000000000000000149-waUSDCn-yield-apr",
                            "apr": 0.011911416964162,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-wUSDM-USDC-rh",
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
                "address": "0x4dde571dc66217a062e4b50f9b20c4d08b3245a0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "VW8020",
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
                "id": "0xbe8dda0753ef6992a28759282585209c98c25de2000200000000000000000161",
                "address": "0xbe8dda0753ef6992a28759282585209c98c25de2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "80XYZ/20WETH",
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
                "address": "0xdd25a7c4ba6bd7e9fea298e4b231379abccca884",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xdd25a7c4ba6bd7e9fea298e4b231379abccca88400020000000000000000011f-swap-apr-7d",
                            "apr": 0.17338853185959,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50OP-50USDC.e",
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
                "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019",
                "address": "0x3dc09db8e571da76dd04e9176afc7feee0b89106",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr-24h",
                            "apr": 0.0002348156640286195,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr",
                            "apr": 0.0002348156640286195,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr-30d",
                            "apr": 97.33834375048967,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x3dc09db8e571da76dd04e9176afc7feee0b89106000000000000000000000019-swap-apr-7d",
                            "apr": 417.1655808210547,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-FRAX-MAI",
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
                "id": "0x1cc3e990b23a09fc9715aaf7ccf21c212a9cbc160001000000000000000000bd",
                "address": "0x1cc3e990b23a09fc9715aaf7ccf21c212a9cbc16",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-OG",
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
                "id": "0x84e27b600155a5b411e311285cac97889aea281a000100000000000000000114",
                "address": "0x84e27b600155a5b411e311285cac97889aea281a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "20aOptLINK-20UNI-20SNX-20aOptAAVE-20LDO",
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
                "address": "0x3dd504bd492d0d8db245eb38b1b39220c1f72721",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "1WETH-99USDT",
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
                "address": "0xe0b50b0635b90f7021d2618f76ab9a31b92d0094",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a-rETH-yield-apr",
                            "apr": 0.00800171195325067,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a-swap-apr-30d",
                            "apr": 0.0249908066104018,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a-swap-apr-7d",
                            "apr": 0.1133478879570288,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "test-bb-TRI",
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
                "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066",
                "address": "0xc931b64e181a4a29416f55e67921bfe16e4fe789",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc931b64e181a4a29416f55e67921bfe16e4fe789000200000000000000000066-rETH-yield-apr",
                            "apr": 0.01333786096108773,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-W",
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
                "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4",
                "address": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c68440",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-24h",
                            "apr": 0.006596391718671717,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr",
                            "apr": 0.006596391718671717,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-7d",
                            "apr": 0.6037175138165722,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x11f0b5cca01b0f0a9fe6265ad6e8ee3419c684400002000000000000000000d4-swap-apr-30d",
                            "apr": 0.1357624021910793,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-BREV",
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
                "id": "0x59d9af011578ae587749d65d4c4f49a63221e23600020000000000000000001f",
                "address": "0x59d9af011578ae587749d65d4c4f49a63221e236",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-QIUSDC",
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
                "address": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-30d",
                            "apr": 0.216382370548544,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-24h",
                            "apr": 0.00336980774867581,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr",
                            "apr": 0.00336980774867581,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2f6b6973f38381fe453ea819b7e0f0897adeaae7000200000000000000000113-swap-apr-7d",
                            "apr": 0.9433807841397589,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80AURA-20WETH",
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
                "id": "0xefb0d9f51efd52d7589a9083a6d0ca4de416c24900020000000000000000002c",
                "address": "0xefb0d9f51efd52d7589a9083a6d0ca4de416c249",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xefb0d9f51efd52d7589a9083a6d0ca4de416c24900020000000000000000002c-swap-apr-30d",
                            "apr": 3.398807627813599,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-IBETH",
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
                "id": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be40002000000000000000000ad",
                "address": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be4",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xdc125d09891c5b6b66061e3170e9a1e1c5cf9be40002000000000000000000ad-rETH-yield-apr",
                            "apr": 0.004115657193092543,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-IB-RETH",
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
                "address": "0x876e0a21626c33bdab879330505eccc6091aa607",
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
                            "apr": 0.0458870699655002,
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
                "address": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a5",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae-swap-apr-7d",
                            "apr": 1810.398936052449,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae-swap-apr-30d",
                            "apr": 422.4263637621676,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-overnight-II",
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
                "id": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729000200000000000000000158",
                "address": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x679c316bb2bfa7eca6b69d599d24e7646ea89729000200000000000000000158-rETH-yield-apr",
                            "apr": 0.01321452569517344,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50OP-50rETH",
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
                "address": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-wstETH-yield-apr",
                            "apr": 0.005658664342615028,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-24h",
                            "apr": 0.02010981216511541,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr",
                            "apr": 0.02010981216511541,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-30d",
                            "apr": 3.675816598594121,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xbc80540bb282e7724be7f1e0b92b4ea51340ddbf00010000000000000000010e-swap-apr-7d",
                            "apr": 15.58081285481806,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "20wstETH-25LINK-25OP-20WBTC-10LDO",
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
                "address": "0x4055c21130112f8cf8f4fab7a04236deee9fac29",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x4055c21130112f8cf8f4fab7a04236deee9fac29000200000000000000000112-swap-apr-24h",
                            "apr": 0.0162668305912488,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x4055c21130112f8cf8f4fab7a04236deee9fac29000200000000000000000112-swap-apr",
                            "apr": 0.0162668305912488,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "80BEETS-20USDC",
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
                "address": "0xacfe9b4782910a853b68abba60f3fd8049ffe638",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xacfe9b4782910a853b68abba60f3fd8049ffe6380000000000000000000000ff-swap-apr-30d",
                            "apr": 428.794106897285,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xacfe9b4782910a853b68abba60f3fd8049ffe6380000000000000000000000ff-swap-apr-7d",
                            "apr": 1837.742486934887,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-dolausdc",
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
                "id": "0xf30db0ca4605e5115df91b56bd299564dca0266600020000000000000000005d",
                "address": "0xf30db0ca4605e5115df91b56bd299564dca02666",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf30db0ca4605e5115df91b56bd299564dca0266600020000000000000000005d-wstETH-yield-apr",
                            "apr": 0.00569207351446173,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "BPT-BEET-WSTEH",
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
                "address": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-7d",
                            "apr": 22.77046669127238,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-30d",
                            "apr": 5.281603821536836,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr-24h",
                            "apr": 0.03184712357004033,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5028497af0c9a54ea8c6d42a054c0341b9fc6168000100000000000000000004-swap-apr",
                            "apr": 0.03184712357004033,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-LONG",
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
                "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c",
                "address": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c",
                "dynamicData": {
                    "yieldCapture24h": "0.66",
                    "aprItems": [
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-wstETH-yield-apr",
                            "apr": 0.01413653821162666,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-24h",
                            "apr": 0.2421341285366683,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr",
                            "apr": 0.2421341285366683,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-30d",
                            "apr": 0.8534907967720197,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c00020000000000000000005c-swap-apr-7d",
                            "apr": 4.176986534766187,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-LDO-WSTEH",
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
                "id": "0xab143aa133536237922e113f1d91023b73ad6d1800020000000000000000015a",
                "address": "0xab143aa133536237922e113f1d91023b73ad6d18",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xab143aa133536237922e113f1d91023b73ad6d1800020000000000000000015a-waUSDCn-yield-apr",
                            "apr": 0.01310074849321745,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-GYD-AUSDC",
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
                "address": "0x0503dd6b2d3dd463c9bef67fb5156870af63393e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BAL_LBP",
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
                "address": "0x8abd32f63328de16fd4274e7c4a352b626b1ed7d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x8abd32f63328de16fd4274e7c4a352b626b1ed7d00020000000000000000013a-wrsETH-yield-apr",
                            "apr": 0.0154237330499885,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "50WETH-50wrsETH",
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
                "address": "0x59aba93eb2fb1d12ae0a292d96655a13469417a0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x59aba93eb2fb1d12ae0a292d96655a13469417a00001000000000000000000af-rETH-yield-apr",
                            "apr": 0.001913451960810261,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x59aba93eb2fb1d12ae0a292d96655a13469417a00001000000000000000000af-swap-apr-7d",
                            "apr": 10126.84610657881,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-TERB",
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
                "address": "0x5457e7098013fb703078a5b5b69e0836eba002cd",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-waUSDT-yield-apr",
                            "apr": 0.003376854031165716,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-waUSDCn-yield-apr",
                            "apr": 0.003298426682373042,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr-24h",
                            "apr": 0.04620830521474098,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr",
                            "apr": 0.04620830521474098,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x5457e7098013fb703078a5b5b69e0836eba002cd00010000000000000000015b-swap-apr-7d",
                            "apr": 7.99662880789263,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "1BEETS-1multiBeets-2OP-69SNX-13sUSD-7waUSDCn-7waUSDT",
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
                "address": "0x1d95129c18a8c91c464111fdf7d0eb241b37a985",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-RESERVE",
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
                "address": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a024",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e-swap-apr-30d",
                            "apr": 297.3812163218672,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e-swap-apr-7d",
                            "apr": 1274.490988704767,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-USD+",
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
                "address": "0x4d6461f181cf2b26a1cb4e3a070d63d0d31a5155",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
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
                "address": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-24h",
                            "apr": 0.06804876938647056,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr",
                            "apr": 0.06804876938647056,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-7d",
                            "apr": 87.06798385565435,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xd6e5824b54f64ce6f1161210bc17eebffc77e031000100000000000000000006-swap-apr-30d",
                            "apr": 20.28770008908319,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-LOVE",
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
                "id": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6000000000000000000000103",
                "address": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc05ab1b0ad472ce802e2c8db6f23e4a2865fdca6000000000000000000000103-swap-apr-30d",
                            "apr": 0.001635379119915728,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-steamounrhyt",
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
                "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c",
                "address": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-30d",
                            "apr": 289.3270427456286,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-7d",
                            "apr": 1239.98755920042,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr-24h",
                            "apr": 0.006328208765596335,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x373643b17cd80e37675c8c98ef774efe6ca0b4de00000000000000000000001c-swap-apr",
                            "apr": 0.006328208765596335,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "BPT-STABEET",
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
                "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153",
                "address": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153-swap-apr-24h",
                            "apr": 0.01521526432353442,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153-swap-apr",
                            "apr": 0.01521526432353442,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x50bd3d0414fda3acb1559d8e2efbbdce974584e1000200000000000000000153-swap-apr-7d",
                            "apr": 0.1949439872016522,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50BEETS-50OP",
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
                "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162",
                "address": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr-24h",
                            "apr": 0.0009882174462377497,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr",
                            "apr": 0.0009882174462377497,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x085edd09c21b33f6b35dfa6ac2c5cd0dbe275799000200000000000000000162-swap-apr-7d",
                            "apr": 0.003455849941109484,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80USDC/20WETH",
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
                "id": "0x74716000811f20bb7f3a4744c074644c220d62f0000200000000000000000159",
                "address": "0x74716000811f20bb7f3a4744c074644c220d62f0",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50USDC",
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
                "id": "0xadf86a03af1c77d81380f9fa7c4c797a3ebf2d3a000100000000000000000146",
                "address": "0xadf86a03af1c77d81380f9fa7c4c797a3ebf2d3a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "30OPP-35imxB (OPP-ETH)-35imxB (OPP-opxVELO)",
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
                "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119",
                "address": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-24h",
                            "apr": 0.02893259715892386,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr",
                            "apr": 0.02893259715892386,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-30d",
                            "apr": 0.5971608981270771,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xc38c2fc871188935b9c615e73b17f2e7e463c8b1000200000000000000000119-swap-apr-7d",
                            "apr": 2.614158843111841,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "80BAL-20WETH",
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
                "address": "0x14d92549e0570d226736ff3524515b9d91a7d0c7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr-24h",
                            "apr": 0.02084030212102745,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x14d92549e0570d226736ff3524515b9d91a7d0c7000200000000000000000156-swap-apr",
                            "apr": 0.02084030212102745,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "50BEETS-50multiBeets",
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
                "address": "0x7e40fe211c8053b78f31d6c4c15157a430a03349",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7e40fe211c8053b78f31d6c4c15157a430a0334900020000000000000000014d-swap-apr-30d",
                            "apr": 0.0637858213104813,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50imxB (OPP-ETH)-50WETH",
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
                "id": "0xfedc53c698593e4283ab0b306d43daccd8914ef8000200000000000000000127",
                "address": "0xfedc53c698593e4283ab0b306d43daccd8914ef8",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50WBTC",
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
                "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005",
                "address": "0x7ef99013e446ddce2486b8e04735b7019a115e6f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-24h",
                            "apr": 0.0417519953043413,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr",
                            "apr": 0.0417519953043413,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-7d",
                            "apr": 350.1263377008668,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x7ef99013e446ddce2486b8e04735b7019a115e6f000100000000000000000005-swap-apr-30d",
                            "apr": 81.59353533153651,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-8TRACK",
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
                "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008",
                "address": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr-24h",
                            "apr": 0.003219251435398135,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr",
                            "apr": 0.003219251435398135,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr-30d",
                            "apr": 0.2752099640100719,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x32f0dc9e2d890bac95106a65eb82db70bc58badb000200000000000000000008-swap-apr-7d",
                            "apr": 1.192241101129052,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-OP",
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
                "id": "0xd0fab195ef9db5365b289fb3e38d38ef6b5d03610002000000000000000000fa",
                "address": "0xd0fab195ef9db5365b289fb3e38d38ef6b5d0361",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
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
                "id": "0x0a54996ce9ceaa449cde73da6aa0368bfe3df6dc000200000000000000000017",
                "address": "0x0a54996ce9ceaa449cde73da6aa0368bfe3df6dc",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-BICO",
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
                "id": "0x20ac7c9329822ee3cf61d244bd4816941b50cf7a000200000000000000000111",
                "address": "0x20ac7c9329822ee3cf61d244bd4816941b50cf7a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50USDC",
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
                "id": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84000100000000000000000145",
                "address": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xfef82dad4428471b8473c8c4c6f6ce2ac6b51c84000100000000000000000145-swap-apr-7d",
                            "apr": 85.54437005146836,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "33CRV-33SNX-33BAL",
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
                "id": "0xeb7ee98165b305fbbf9e6bce58229815570c654e000200000000000000000107",
                "address": "0xeb7ee98165b305fbbf9e6bce58229815570c654e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50AURA-50USDC.e",
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
                "address": "0xece874b7a9051154866ce79154d653481b0b8759",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50BEETS-50BAL",
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
                "id": "0x44ab8efb8909330b4c646b509ee593815c0f0ec500010000000000000000011e",
                "address": "0x44ab8efb8909330b4c646b509ee593815c0f0ec5",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33USDC-33WBTC-33USDT",
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
                "id": "0xdf73fd65f5f480d13a788d57b5ad42cdd6f34742000100000000000000000134",
                "address": "0xdf73fd65f5f480d13a788d57b5ad42cdd6f34742",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "33USDC-33OP-33WBTC",
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
                "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e",
                "address": "0xffca204a8417c259555563e7da7ddc89437a374a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-7d",
                            "apr": 0.1460468719699187,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-24h",
                            "apr": 0.001609455522119678,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr",
                            "apr": 0.001609455522119678,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-wstETH-yield-apr",
                            "apr": 0.003892369567504498,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xffca204a8417c259555563e7da7ddc89437a374a00010000000000000000015e-swap-apr-30d",
                            "apr": 0.0239744717137222,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "13wstETH-13sBTC-25aOptSUSD-25sEUR-6SNX-6AAVE-6BAL-6CRV",
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
                "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081",
                "address": "0x899f737750db562b88c1e412ee1902980d3a4844",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-wstETH-yield-apr",
                            "apr": 0.0141089533428664,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-24h",
                            "apr": 0.001118237931519885,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr",
                            "apr": 0.001118237931519885,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-30d",
                            "apr": 72.87164872641017,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x899f737750db562b88c1e412ee1902980d3a4844000200000000000000000081-swap-apr-7d",
                            "apr": 312.3112687448997,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-WSTETH-USDC",
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
                "address": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-30d",
                            "apr": 237.1295113219273,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-24h",
                            "apr": 0.0182734970099828,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr",
                            "apr": 0.0182734970099828,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xd20f6f1d8a675cdca155cb07b5dc9042c467153f0002000000000000000000bc-swap-apr-7d",
                            "apr": 1016.281807608011,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-BOATH",
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
                "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc",
                "address": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d",
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
                            "apr": 1.811497682328942,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc-swap-apr-7d",
                            "apr": 7.771367940075848,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bb-moo-exETHUSDC",
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
                "address": "0x359ea8618c405023fc4b98dab1b01f373792a126",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-rETH-yield-apr",
                            "apr": 0.006208713347827357,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr-24h",
                            "apr": 0.03459764499877891,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr",
                            "apr": 0.03459764499877891,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f-swap-apr-30d",
                            "apr": 1384.794206823794,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bb-WONDER",
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
                "id": "0xcef953fb1563c5a2bc89c3b54712d03d16689a17000200000000000000000130",
                "address": "0xcef953fb1563c5a2bc89c3b54712d03d16689a17",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50STG-50WETH",
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
                "id": "0x63c6ea3047ee8c90aa1f0d271a307b04fb87499c00020000000000000000014b",
                "address": "0x63c6ea3047ee8c90aa1f0d271a307b04fb87499c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OPP-50imxB (OPP-opxVELO)",
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
                "id": "0x5fc073e9c763af7cb02f403130acc62f9f034dbc0002000000000000000000fc",
                "address": "0x5fc073e9c763af7cb02f403130acc62f9f034dbc",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50BEETS",
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
                "id": "0xcbac17bc5fa5285df031ae20956632a3720866a90001000000000000000000c2",
                "address": "0xcbac17bc5fa5285df031ae20956632a3720866a9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-TRIPOOL",
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
                "id": "0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2",
                "address": "0x098f32d98d0d64dba199fc1923d3bf4192e78719",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2-swap-apr-7d",
                            "apr": 13470.9311878254,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bb-rf-SOTRI",
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
                "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154",
                "address": "0x7498470d6ac742b31644298413714d63496f3a22",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154-swap-apr-24h",
                            "apr": 0.004560547061313419,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7498470d6ac742b31644298413714d63496f3a22000200000000000000000154-swap-apr",
                            "apr": 0.004560547061313419,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "5OP-95BEETS",
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
                "address": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499000000000000000000000132-swap-apr-30d",
                            "apr": 0.2989553724982333,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x10d89732c7e3c5b548e766805b40bc0ecdca4499000000000000000000000132-swap-apr-7d",
                            "apr": 1.301733668815054,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "rsETH/wETH",
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
                "id": "0xb0305b8b5cb8cb8d20e8071cdf601977b40f6ba2000200000000000000000140",
                "address": "0xb0305b8b5cb8cb8d20e8071cdf601977b40f6ba2",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50COMP-50WETH",
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
                "address": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac4",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-24h",
                            "apr": 0.02994731503657417,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr",
                            "apr": 0.02994731503657417,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-7d",
                            "apr": 0.8084929010746126,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-wstETH-yield-apr",
                            "apr": 0.003546385524731238,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x390c2a1ffe5576ce97c07850f027cb5c0628fac400010000000000000000013e-swap-apr-30d",
                            "apr": 0.1696239342097234,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "25sUSD-25SNX-13OP-13wstETH-13WBTC-13BEETS",
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
                "id": "0x4519c64266c8320a188800558d52cb6d0e1f00cf000100000000000000000115",
                "address": "0x4519c64266c8320a188800558d52cb6d0e1f00cf",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "20LINK-20UNI-20AAVE-20SNX-20LDO",
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
                "id": "0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039",
                "address": "0xf572649606db4743d217a2fa6e8b8eb79742c24a",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039-swap-apr-30d",
                            "apr": 0.04347858811097732,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "test-bb-USD-MAI",
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
                "address": "0x04953368a77af5b65512ee3536efe152b96aa453",
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
                            "apr": 0.1204643808364434,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x04953368a77af5b65512ee3536efe152b96aa453000200000000000000000010-swap-apr-7d",
                            "apr": 0.5409462450963846,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-UY",
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
                "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037",
                "address": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037-swap-apr-7d",
                            "apr": 0.1344181561422252,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037-rETH-yield-apr",
                            "apr": 0.0201110359043889,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037-swap-apr-30d",
                            "apr": 0.03119593330728997,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "test-bb-WETH",
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
                "id": "0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000ac",
                "address": "0x23ca0306b21ea71552b148cf3c4db4fc85ae1929",
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
                "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128",
                "address": "0x16d7e97b845145da68bd22291d6c10275c3b3f77",
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
                            "apr": 0.01185080556989611,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x16d7e97b845145da68bd22291d6c10275c3b3f77000200000000000000000128-waUSDCn-yield-apr",
                            "apr": 0.03430734238304786,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "ECLP-AUSDC-AUSDT",
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
                "id": "0xc4ee406970047a70aed14621d97b3b460a7dea0b00000000000000000000010b",
                "address": "0xc4ee406970047a70aed14621d97b3b460a7dea0b",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc4ee406970047a70aed14621d97b3b460a7dea0b00000000000000000000010b-swap-apr-30d",
                            "apr": 1.199841929355187,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "SWEEP-USDC-BPT",
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
                "id": "0xc523ec066e0ef4fa2dff4e4d336d8a03b3b0c8d500020000000000000000013d",
                "address": "0xc523ec066e0ef4fa2dff4e4d336d8a03b3b0c8d5",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50COMP",
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
                "id": "0x752de5046a3f726d3165cb8cd4143f299949ce9d000200000000000000000077",
                "address": "0x752de5046a3f726d3165cb8cd4143f299949ce9d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-BRINE",
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
                "id": "0xd4156a7a7e85d8cb2de2932807d8d5f08d05a88900020000000000000000011c",
                "address": "0xd4156a7a7e85d8cb2de2932807d8d5f08d05a889",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50WETH-50FRACTION",
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
                "id": "0xd9c57025b3da04e5bd078c22b69222e92ddb62f600010000000000000000001e",
                "address": "0xd9c57025b3da04e5bd078c22b69222e92ddb62f6",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-STABLE",
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
                "id": "0xf8be10127b47b532b7af1ac919e0d0cb46bcd294000200000000000000000135",
                "address": "0xf8be10127b47b532b7af1ac919e0d0cb46bcd294",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50USDT",
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
                "id": "0xfe8c531ba9d4d9ccfd64167e389c15f47eb05fbe000200000000000000000122",
                "address": "0xfe8c531ba9d4d9ccfd64167e389c15f47eb05fbe",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50WBTC",
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
                "address": "0x38db9cb893bafcc4668e143e22fe08ecf9104229",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x38db9cb893bafcc4668e143e22fe08ecf910422900020000000000000000014e-swap-apr-30d",
                            "apr": 0.07111004595099871,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50imxB (OPP-opxVELO)-50WETH",
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
                "address": "0x5bb3e58887264b667f915130fd04bbb56116c278",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr-24h",
                            "apr": 0.004548251244430965,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr",
                            "apr": 0.004548251244430965,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr-7d",
                            "apr": 0.4289060468756495,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0x5bb3e58887264b667f915130fd04bbb56116c27800020000000000000000012a-swap-apr-30d",
                            "apr": 0.09450775255287827,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "50WETH-50OLAS",
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
                "address": "0x7c52a0853de6e9e7c5b5940aac33ce095ebbd275",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50USDC-50WETH",
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
                "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100",
                "address": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-30d",
                            "apr": 0.7022457076922696,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-24h",
                            "apr": 0.01434747880359516,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr",
                            "apr": 0.01434747880359516,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xcc2e1cb5d8dea77f08d19f875f381f34f997d96c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.02353865075844702,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xcc2e1cb5d8dea77f08d19f875f381f34f997d96c-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.035307976137670526,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x9da11ff60bfc5af527f58fd61679c3ac98d040d9000000000000000000000100-swap-apr-7d",
                            "apr": 3.097754249550301,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-stablebeets",
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
                "id": "0x0604d50e1a314e0b8963a8387713ec0b539920b30001000000000000000000bf",
                "address": "0x0604d50e1a314e0b8963a8387713ec0b539920b3",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-O70EE15",
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
                "address": "0xd74e7d1bdfa2f79ea893542d864d2ee245476b69",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xd74e7d1bdfa2f79ea893542d864d2ee245476b690002000000000000000000fd-swap-apr-7d",
                            "apr": 0.3098415921101592,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "50USDC-50BEETS",
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
                "address": "0xb390a4e78442c1ddd5f446e2950533a4294b89d9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-USDEAD",
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
                "address": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x75c6b245515657fd69f1645c051a2ba13a8d70c6000100000000000000000025-swap-apr-30d",
                            "apr": 323.7703974740307,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "BPT-CRV",
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
                "address": "0x7d6bff131b359da66d92f215fd4e186003bfaa42",
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
                "address": "0x9ab692518817739e0cb111670e63cb7b08d6012c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "60USDC-40OP",
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
                "address": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d",
                "dynamicData": {
                    "yieldCapture24h": "27.31",
                    "aprItems": [
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-wstETH-yield-apr",
                            "apr": 0.00735297709347899,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-weETH-yield-apr",
                            "apr": 0.006309689465787089,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xf3b314b1d2bd7d9afa8ec637716a9bb81dbc79e5-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr",
                            "apr": 0.01570480737491815,
                            "type": "VEBAL_EMISSIONS"
                        },
                        {
                            "id": "0xf3b314b1d2bd7d9afa8ec637716a9bb81dbc79e5-0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921-balgauge-BAL-apr-boost",
                            "apr": 0.023557211062377213,
                            "type": "STAKING_BOOST"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-30d",
                            "apr": 0.101359443154229,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-24h",
                            "apr": 0.0007184749612390818,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr",
                            "apr": 0.0007184749612390818,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x2bb4712247d5f451063b5e4f6948abdfb925d93d000000000000000000000136-swap-apr-7d",
                            "apr": 0.4528736153916972,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bpt-weethwsteth",
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
                "address": "0x362715c164d606682c4ea7e479633e419d9345eb",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bb-rf-triyie",
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
                "address": "0x8b6d3aa69c1cf47677281691b1abf3831ba1329d",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x8b6d3aa69c1cf47677281691b1abf3831ba1329d0001000000000000000000d0-swap-apr-7d",
                            "apr": 0.1149700683964148,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bb-rf-SOTRI",
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
                "address": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c3",
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
                            "apr": 0.1201326194795199,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-AaveUSDT-yield-apr",
                            "apr": 0.02125192998118131,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-waUSDT-yield-apr",
                            "apr": 0.01843484315407954,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-waUSDCn-yield-apr",
                            "apr": 0.02557919754357288,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr-24h",
                            "apr": 0.02811988608194226,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr",
                            "apr": 0.02811988608194226,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x8bb826afc0ff7d2c034a2883f4c461ffd238e1c300020000000000000000012b-swap-apr-7d",
                            "apr": 0.7591045817261908,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "RSB",
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
                "address": "0xdcd803c0ad8778662c0a53b4daed81ab9ef06834",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "BPT-TEST2",
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
                "address": "0x4136e861e0ad0642cb2f16962540a7808bbade53",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "bpt-steamounrhyt",
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
                "address": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr-24h",
                            "apr": 0.004236963589935953,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr",
                            "apr": 0.004236963589935953,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0x7ad4f5536d903aea6f973f36e18f5b4610a7583e000100000000000000000000-swap-apr-30d",
                            "apr": 0.1134420882891131,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "TEST-WEIGHTED",
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
                "address": "0xd501e07c1b0640a4be471ea6a0a29e2f34788b18",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "80TST/20WETH",
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
                "address": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9000000000000000000000143-wstETH-yield-apr",
                            "apr": 0.003854329142833786,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xc9eb4b8ce914ee451360b315ffd1d1af8df96be9000000000000000000000143-swap-apr-30d",
                            "apr": 59.20520695176722,
                            "type": "SWAP_FEE_30D"
                        }
                    ]
                },
                "symbol": "bpt-insteth-wsteth",
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
                "address": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": [
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-24h",
                            "apr": 0.00882538439203573,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr",
                            "apr": 0.00882538439203573,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-30d",
                            "apr": 29.89185343689844,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xf3420d479d8daa6ced1d48097aad67ef38a1fe1c0001000000000000000000c0-swap-apr-7d",
                            "apr": 128.2504259215254,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "BPT-GTRAIN",
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
                "address": "0x59a22a7859acb8505968344d463809211b0c9cf6",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50WETH",
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
                "address": "0xa71021492a3966eec735ed1b505afa097c7cfe6f",
                "dynamicData": {
                    "yieldCapture24h": "9.72",
                    "aprItems": [
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-24h",
                            "apr": 0.0008673381691827682,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr",
                            "apr": 0.0008673381691827682,
                            "type": "SWAP_FEE"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-7d",
                            "apr": 0.187710381999056,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-swap-apr-30d",
                            "apr": 0.04090549612659935,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xa71021492a3966eec735ed1b505afa097c7cfe6f00000000000000000000010d-sfrxETH-yield-apr",
                            "apr": 0.006853196020361387,
                            "type": "IB_YIELD"
                        }
                    ]
                },
                "symbol": "bpt-fraxethe",
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
                "address": "0xcaca4544534f5c7c114c8fe939693e7595f370f7",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OPP-50imxB (OPP-ETH)",
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
                "address": "0xf5521ca6a3295babb4b2729931cd358be35da7e3",
                "dynamicData": {
                    "yieldCapture24h": "0.01",
                    "aprItems": [
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-30d",
                            "apr": 0.1385431959018623,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-7d",
                            "apr": 0.6673197697582544,
                            "type": "SWAP_FEE_7D"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-wstETH-yield-apr",
                            "apr": 0.007049858885776455,
                            "type": "IB_YIELD"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr-24h",
                            "apr": 0.02351803953740643,
                            "type": "SWAP_FEE_24H"
                        },
                        {
                            "id": "0xf5521ca6a3295babb4b2729931cd358be35da7e3000100000000000000000125-swap-apr",
                            "apr": 0.02351803953740643,
                            "type": "SWAP_FEE"
                        }
                    ]
                },
                "symbol": "1",
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
                "address": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd",
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
                            "apr": 3947.182558545031,
                            "type": "SWAP_FEE_30D"
                        },
                        {
                            "id": "0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046-swap-apr-7d",
                            "apr": 16916.49680980979,
                            "type": "SWAP_FEE_7D"
                        }
                    ]
                },
                "symbol": "bb-rf-aUSD",
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
                "address": "0x19b5f4f829115cba31aecececfa9ba23aced91c4",
                "dynamicData": {
                    "yieldCapture24h": "0.00",
                    "aprItems": []
                },
                "symbol": "50OP-50sUSD",
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

const app = express();
const PORT = 3000;

app.get('/suggestion', async (req: Request, res: Response) => {


    if (req.query.apiKey && req.query.apiKey == 'MyTestApiKEY') {
        const agentInput = await liquidityPoolService()
        const jsonReponse = (await askAgent(JSON.stringify(agentInput)))?.replace('```json', '').replace('```', '')
        res.set('Content-Type', 'application/json')
        return res.send(jsonReponse)
    }



    const randomIndex = Math.floor(Math.random() * pools.length);
    const chosenPool = pools[randomIndex];

    const suggestion = {
        protocol: 'Balancer',
        liquidityPoolAddress: chosenPool.address,
        amount: '100',
        token: chosenPool.poolTokens[0].symbol
    };


    return res.json([suggestion]);
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Mock server running on port ${PORT}`);
});
