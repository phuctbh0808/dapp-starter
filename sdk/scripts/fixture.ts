import {Connection, PublicKey} from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import * as path from 'path';
import * as fs from 'fs';
import {Program} from "@project-serum/anchor";
import {DappStarter} from "../../app/src/artifacts/dapp_starter";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";

export async function getProgram(
    rpc: string
) {
    const connection = new Connection(rpc);
    const dataKeypair = fs.readFileSync(path.join(__dirname, '../../', '.wallets/hoangphuc.json'));
    const keypair = anchor.web3.Keypair.fromSecretKey(
        Uint8Array.from(JSON.parse(dataKeypair.toString()))
    );
    const provider = new anchor.Provider(connection, new NodeWallet(keypair), { commitment: "confirmed"});
    anchor.setProvider(provider);
    const program =  anchor.workspace.DappStarter as Program<DappStarter>;
    return { program, provider };
}