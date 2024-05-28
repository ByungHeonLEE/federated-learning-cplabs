async function userOpMessage(params) {
  return {
    sender: params.sender,
    nonce: params.nonce,
    initCode: params.init_code,
    callData: params.call_data,
    callGasLimit: params.call_gas_limit,
    verificationGasLimit: params.verification_gas_limit,
    preVerificationGas: params.pre_verification_gas,
    maxFeePerGas: params.max_fee_per_gas,
    maxPriorityFeePerGas: params.max_priority_fee_per_gas,
    paymasterAndData: params.paymaster_and_data,
    signature: params.signature
  };
}

// Expose the function to be executed by server
const mainFunction = userOpMessage;
