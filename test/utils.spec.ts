import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";
import { deployMockContract, MockContract } from "ethereum-waffle";

let Owner: SignerWithAddress;
let Operator: SignerWithAddress;
let RiskOperator: SignerWithAddress;
let User: SignerWithAddress;

let AdapterInvestLimit_factory: ContractFactory;
let adapterInvestLimit: Contract;
let registry: MockContract;
let newRegistry: MockContract;
let pool: MockContract;
let token: MockContract;
let poolValue: BigNumber;

describe("utils", () => {
  before(async () => {
    [Owner, Operator, RiskOperator, User] = await ethers.getSigners();
    registry = await deployMockContract(Owner, [
      "function getOperator() public view returns(address)",
      "function getRiskOperator() public view returns(address)",
    ]);
    newRegistry = await deployMockContract(Operator, [
      "function getOperator() public view returns(address)",
      "function getRiskOperator() public view returns(address)",
    ]);
    pool = await deployMockContract(Owner, [
      /* no functions */
    ]);
    token = await deployMockContract(Owner, [
      /* no functions */
    ]);
    AdapterInvestLimit_factory = await ethers.getContractFactory("AdapterInvestLimitBaseMock");
    adapterInvestLimit = await AdapterInvestLimit_factory.deploy(registry.address);
    await registry.mock.getRiskOperator.returns(RiskOperator.address);
    await registry.mock.getOperator.returns(Operator.address);
  });

  describe("AdapterInvestLimitBase", () => {
    describe("#setMaxDepositPoolPct(address, uint256)", () => {
      it("Risk Operator should be able to set maxDepositPoolPct", async () => {
        await expect(adapterInvestLimit.connect(RiskOperator).setMaxDepositPoolPct(pool.address, 10)).to.emit(
          adapterInvestLimit,
          "LogMaxDepositPoolPct",
        );
        expect(await adapterInvestLimit.maxDepositPoolPct(pool.address)).to.be.eq(10);
      });

      it("Non Risk Operator cannot set maxDepositPoolPct", async () => {
        await expect(adapterInvestLimit.connect(User).setMaxDepositPoolPct(pool.address, 10)).to.be.revertedWith(
          "caller is not the riskOperator",
        );
      });
    });

    describe("#setMaxDepositAmount(address, address, uint256)", () => {
      it("Risk Operator should be able to set maxDepositAmount", async () => {
        await expect(
          adapterInvestLimit.connect(RiskOperator).setMaxDepositAmount(pool.address, token.address, 100),
        ).to.emit(adapterInvestLimit, "LogMaxDepositAmount");
        expect(await adapterInvestLimit.maxDepositAmount(pool.address, token.address)).to.be.eq(100);
      });

      it("Non Risk Operator cannot set maxDepositAmount", async () => {
        await expect(
          adapterInvestLimit.connect(User).setMaxDepositAmount(pool.address, token.address, 100),
        ).to.be.revertedWith("caller is not the riskOperator");
      });
    });

    describe("#setMaxDepositProtocolMode(MaxExposure)", () => {
      it("Risk Operator should be able to set maxDepositProtocolMode", async () => {
        await expect(adapterInvestLimit.connect(RiskOperator).setMaxDepositProtocolMode(0)).to.emit(
          adapterInvestLimit,
          "LogMaxDepositProtocolMode",
        );
        expect(await adapterInvestLimit.maxDepositProtocolMode()).to.be.eq(0);
      });

      it("Non Risk Operator cannot set maxDepositProtocolMode", async () => {
        await expect(adapterInvestLimit.connect(User).setMaxDepositProtocolMode(1)).to.be.revertedWith(
          "caller is not the riskOperator",
        );
      });
    });

    describe("#setMaxDepositProtocolPct(uint256)", () => {
      it("Risk Operator should be able to set maxDepositProtocolPct", async () => {
        await expect(adapterInvestLimit.connect(RiskOperator).setMaxDepositProtocolPct(20)).to.emit(
          adapterInvestLimit,
          "LogMaxDepositProtocolPct",
        );
        expect(await adapterInvestLimit.maxDepositProtocolPct()).to.be.eq(20);
      });

      it("Non Risk Operator cannot set maxDepositProtocolPct", async () => {
        await registry.mock.getRiskOperator.returns(RiskOperator.address);
        await expect(adapterInvestLimit.connect(User).setMaxDepositProtocolPct(21)).to.be.revertedWith(
          "caller is not the riskOperator",
        );
      });
    });

    describe("#getMaxDepositAmountByPct(address, uint256)", () => {
      it("Return maximum amount underlying token limited by percentage correctly", async () => {
        poolValue = BigNumber.from(10000);
        expect(await adapterInvestLimit.getMaxDepositAmountByPct(pool.address, poolValue)).to.be.eq(
          poolValue.mul(await adapterInvestLimit.maxDepositPoolPct(pool.address)).div(BigNumber.from(10000)),
        );
      });

      it("Return maxDepositProtocolPct if maxDepositPoolPct for the liquidityPool is zero", async () => {
        await adapterInvestLimit.connect(RiskOperator).setMaxDepositPoolPct(pool.address, 0);
        expect(await adapterInvestLimit.getMaxDepositAmountByPct(pool.address, poolValue)).to.be.eq(
          poolValue.mul(await adapterInvestLimit.maxDepositProtocolPct()).div(BigNumber.from(10000)),
        );
      });
    });

    describe("#getDepositAmount(address, address, uint256, uint256)", () => {
      it("Return deposit amount corretly if maxDepositProtocolMode is in absolute value", async () => {
        await adapterInvestLimit.connect(RiskOperator).setMaxDepositProtocolMode(0);
        expect(
          await adapterInvestLimit.getDepositAmount(pool.address, token.address, BigNumber.from(1000), poolValue),
        ).to.be.eq(await adapterInvestLimit.maxDepositAmount(pool.address, token.address));
        expect(
          await adapterInvestLimit.getDepositAmount(pool.address, token.address, BigNumber.from(10), poolValue),
        ).to.be.eq(BigNumber.from(10));
      });

      it("Return deposit amount corretly if maxDepositProtocolMode is in percentage", async () => {
        await adapterInvestLimit.connect(RiskOperator).setMaxDepositProtocolMode(1);
        expect(
          await adapterInvestLimit.getDepositAmount(pool.address, token.address, BigNumber.from(1000), poolValue),
        ).to.be.eq(await adapterInvestLimit.getMaxDepositAmountByPct(pool.address, poolValue));
        expect(
          await adapterInvestLimit.getDepositAmount(pool.address, token.address, BigNumber.from(10), poolValue),
        ).to.be.eq(BigNumber.from(10));
      });
    });
  });

  describe("AdapterModifiersBase", () => {
    describe("#setRegistry(address)", () => {
      it("Operator should be able to set registry contract address", async () => {
        await adapterInvestLimit.connect(Operator).setRegistry(newRegistry.address);
        expect(await adapterInvestLimit.registryContract()).to.equal(newRegistry.address);
      });

      it("Non Operator cannot set registry contract address", async () => {
        await newRegistry.mock.getOperator.returns(Operator.address);
        await expect(adapterInvestLimit.connect(User).setRegistry(registry.address)).to.be.revertedWith(
          "caller is not the operator",
        );
      });
    });
  });
});
