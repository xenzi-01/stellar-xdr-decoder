import {
  TransactionBuilder,
  Networks,
  Transaction,
  FeeBumpTransaction,
} from "@stellar/stellar-sdk";

function summarize(tx: Transaction): void {
  console.log("Source:  ", tx.source);
  console.log("Fee:     ", tx.fee, "stroops");
  console.log("Sequence:", tx.sequence);
  console.log("Memo:    ", tx.memo.type, tx.memo.value ?? "");
  console.log("Operations:", tx.operations.length);
  tx.operations.forEach((op, i) => console.log(`  ${i + 1}. ${op.type}`));
}

const xdrString = process.argv[2];
if (!xdrString) {
  console.error("Usage: npm start -- <base64-xdr>");
  process.exit(1);
}

try {
  const tx = TransactionBuilder.fromXDR(xdrString, Networks.TESTNET);
  if (tx instanceof FeeBumpTransaction) {
    console.log("Type: fee bump");
    console.log("Fee source:", tx.feeSource);
    summarize(tx.innerTransaction);
  } else {
    console.log("Type: standard transaction");
    summarize(tx);
  }
} catch (err) {
  console.error("Could not parse XDR:", (err as Error).message);
  process.exit(1);
}
