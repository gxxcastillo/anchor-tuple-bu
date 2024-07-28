use anchor_lang::prelude::*;

declare_id!("5yHwNPZciYN5cTPvGYQ3stkdTWNFYbLSuwXn4xeR3Npv");

#[program]
pub mod tuple_bug {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    pub fn get_up(_ctx: Context<GetUp>, tuple: (u32, u8)) -> Result<()> {
        msg!("Get on up: {:?}", tuple);
        Ok(())
    }

    pub fn get_down(_ctx: Context<GetDown>, id: u32) -> Result<()> {
        msg!("Get on down: {:?}", id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct GetUp {}

#[derive(Accounts)]
pub struct GetDown {}
