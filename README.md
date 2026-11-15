# stellar-xdr-decoder


A small TypeScript command-line tool that reads a Stellar transaction in XDR format and prints it in a readable way.

## What it shows
- Source account
- Fee (in stroops)
- Sequence number
- Memo
- The list of operations in the transaction
- Whether it is a standard transaction or a fee bump

## Built with
- TypeScript
- Stellar SDK (`@stellar/stellar-sdk`)

## How to run
1. Install Node.js
2. Install the packages:

```
npm install
```

3. Run it with a base64 transaction XDR:

```
npm start -- <your-xdr-here>
```

You can get a test XDR from Stellar Lab (testnet).

## Notes
This tool currently reads testnet transactions only.

## Ideas for later
- Add a `--network` flag for testnet or mainnet
- Show payment amounts and destinations
- Decode other XDR types

## Author
Abdullahi Lawal (xenzi-01)
