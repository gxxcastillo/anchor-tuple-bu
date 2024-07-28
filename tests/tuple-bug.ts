import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { TupleBug } from "../target/types/tuple_bug";
import { expect } from "chai";

describe("tuple-bug", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.TupleBug as Program<TupleBug>;

  it("Is initialized!", async () => {
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });

  it("It gets up!", async () => {
    expect(program.methods).to.have.property('getUp').that.is.a('function');

    const tx = await program.methods.getUp([123, 123]).rpc();
    console.log("Your transaction signature", tx);
  });

  it("It gets down!", async () => {
    expect(program.methods).to.have.property('getDown').that.is.a('function');
    const tx = await program.methods.getDown(123).rpc();
    console.log("Your transaction signature", tx);
  });
});
