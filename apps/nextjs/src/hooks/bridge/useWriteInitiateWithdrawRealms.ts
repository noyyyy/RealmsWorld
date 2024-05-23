import type { Call } from "starknet";
import { useMemo } from "react";
import L2RealmsBridgeABI from "@/abi/L2/RealmsBridge.json";
import { SUPPORTED_L2_CHAIN_ID } from "@/constants/env";
import {
  useContract,
  useContractWrite as useL2ContractWrite,
} from "@starknet-react/core";
import { parseEther } from "viem";
import { useAccount as useL1Account } from "wagmi";

import { REALMS_BRIDGE_ADDRESS } from "@realms-world/constants";

export const useWriteInitiateWithdrawLords = ({
  amount,
}: {
  amount: string | null;
}) => {
  const { address: addressL1 } = useL1Account();

  const l2BridgeAddress = REALMS_BRIDGE_ADDRESS[SUPPORTED_L2_CHAIN_ID];
  const { contract } = useContract({
    abi: L2RealmsBridgeABI,
    address: l2BridgeAddress as `0x${string}`,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const calls: Call[] = useMemo(() => {
    if (!amount || !addressL1) return [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return [
      contract?.populateTransaction.initiate_withdrawal!(addressL1, {
        low: parseEther(amount),
        high: 0,
      }),
    ];
  }, [addressL1, amount, contract?.populateTransaction.initiate_withdrawal]);

  const { writeAsync, data: withdrawHash } = useL2ContractWrite({ calls });

  return {
    calls,
    writeAsync,
    withdrawHash,
  };
};
