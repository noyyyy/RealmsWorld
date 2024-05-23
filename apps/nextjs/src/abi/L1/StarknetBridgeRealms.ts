export const StarknetBridgeRealms = [
  { inputs: [], name: "BridgeNotEnabledError", type: "error" },
  { inputs: [], name: "CairoWrapError", type: "error" },
  { inputs: [], name: "CollectionMappingAlreadySet", type: "error" },
  { inputs: [], name: "CollectionTypeMaskUnsupported", type: "error" },
  { inputs: [], name: "ErrorVerifyingAddressMapping", type: "error" },
  { inputs: [], name: "InvalidCollectionL1Address", type: "error" },
  { inputs: [], name: "InvalidCollectionL2Address", type: "error" },
  { inputs: [], name: "NotPayableError", type: "error" },
  { inputs: [], name: "NotSupportedError", type: "error" },
  { inputs: [], name: "NotSupportedYetError", type: "error" },
  { inputs: [], name: "NotWhiteListedError", type: "error" },
  { inputs: [], name: "UnsupportedTokenStandard", type: "error" },
  { inputs: [], name: "WithdrawMethodError", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "hash", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "block_timestamp",
        type: "uint256",
      },
    ],
    name: "CancelRequestCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "hash", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "block_timestamp",
        type: "uint256",
      },
    ],
    name: "CancelRequestStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "reqHash",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "block_timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "l2Address",
        type: "uint256",
      },
    ],
    name: "CollectionDeployedFromL2",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "enable", type: "bool" },
    ],
    name: "CollectionWhiteListUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "hash", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "block_timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "reqContent",
        type: "uint256[]",
      },
    ],
    name: "DepositRequestInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "colllectionL1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collectionL2",
        type: "uint256",
      },
    ],
    name: "L1L2CollectionMappingUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "MessageHashAutoWithdrawAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "enable", type: "bool" },
    ],
    name: "WhiteListUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "hash", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "block_timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "reqContent",
        type: "uint256[]",
      },
    ],
    name: "WithdrawRequestCompleted",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [{ internalType: "uint256", name: "msgHash", type: "uint256" }],
    name: "addMessageHashForAutoWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "payload", type: "uint256[]" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
    ],
    name: "cancelRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "salt", type: "uint256" },
      { internalType: "snaddress", name: "ownerL2", type: "uint256" },
      { internalType: "uint256[]", name: "ids", type: "uint256[]" },
    ],
    name: "depositTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "enable", type: "bool" }],
    name: "enableBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "enable", type: "bool" }],
    name: "enableWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhiteListedCollections",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isWhiteListEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "collection", type: "address" }],
    name: "isWhiteListed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2Info",
    outputs: [
      { internalType: "snaddress", name: "", type: "uint256" },
      { internalType: "felt252", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collectionL1", type: "address" },
      { internalType: "snaddress", name: "collectionL2", type: "uint256" },
      { internalType: "bool", name: "force", type: "bool" },
    ],
    name: "setL1L2CollectionMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "l2Address", type: "uint256" }],
    name: "setStarklaneL2Address",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "l2Selector", type: "uint256" }],
    name: "setStarklaneL2Selector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "payload", type: "uint256[]" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
    ],
    name: "startRequestCancellation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collection", type: "address" },
      { internalType: "bool", name: "enable", type: "bool" },
    ],
    name: "whiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256[]", name: "request", type: "uint256[]" }],
    name: "withdrawTokens",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
] as const;
