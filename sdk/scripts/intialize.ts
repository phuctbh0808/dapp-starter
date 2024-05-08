import {getProgram} from "./fixture";
import * as anchor from '@project-serum/anchor';
import * as dotenv from 'dotenv';

dotenv.config();
(async () => {
    const rpc = process.env.PROVIDER_URL;
    console.log("RPC ", rpc);
    const { program, provider }  = await getProgram(rpc);
    console.log("Program ID ", program.programId);
    const config = anchor.web3.Keypair.generate();
    try {
        const tx = await program.rpc.initialize({
            accounts: {
                config: config.publicKey,
                deployer: provider.wallet.publicKey,
                systemProgram: anchor.web3.SystemProgram.programId,
            },
            signers: [config],
        });

        console.log("Initialize success at tx ", tx);
    } catch (error) {
        console.error(error);
        throw error;
    }
})();