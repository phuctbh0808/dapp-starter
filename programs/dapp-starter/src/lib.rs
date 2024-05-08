use anchor_lang::prelude::*;

declare_id!("CkXsSzvGAz4Fkam5iqoYsxrCVRF7LvjjzCanbuZrzFnm");

#[program]
pub mod dapp_starter {
    use super::*;
    pub fn initialize(_ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> ProgramResult {
        let config = &mut ctx.accounts.config;
        config.count += 1;
        Ok(())
    }

    pub fn reserve(ctx: Context<Reserve>, se: String) -> ProgramResult {
        let reserve_state = &mut ctx.accounts.reserve_state;
        let payer = ctx.accounts.user.key();
        reserve_state.reserve = payer;
        reserve_state.initialized = true;
        reserve_state.reward_token = payer;
        reserve_state.apy = 20;
        Ok(())
    }

    pub fn inspect(ctx: Context<Inspect>, se: String, t: u32) -> ProgramResult {
        let reserve_state = &ctx.accounts.reserve_state;
        msg!("Data {} {} {} {}", reserve_state.reserve, reserve_state.apy, reserve_state.reward_token, reserve_state.reward_token);
        if (t == 1) {
            msg!("New data {} {}", reserve_state.state_date, reserve_state.end_date);
        }
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info>{
    #[account(
        init, 
        payer = deployer, 
        space = 8 + 8,
    )]
    pub config: Account<'info, Counter>,

    #[account(mut)]
    pub deployer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info>{
    #[account(
        mut
    )]
    pub config: Account<'info, Counter>,

    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
#[instruction(se: String)]
pub struct Reserve<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + 32 + 4 + 32 + 1 + 1,
        seeds = [se.as_ref()],
        bump,
    )]
    pub reserve_state: Account<'info, ReserveState>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(se: String)]
pub struct Inspect<'info> {
    #[account(
        seeds = [se.as_ref()],
        bump,
    )]
    pub reserve_state: Account<'info, ReserveState>,
}

#[account]
pub struct Counter {
    pub count: u64,
}

#[account]
pub struct ReserveState {
    pub reserve: Pubkey,
    pub apy: u32,
    pub reward_token: Pubkey,
    pub token_decimals: u8,
    pub initialized: bool,
    pub state_date: u32,
    pub end_date: u32,
}