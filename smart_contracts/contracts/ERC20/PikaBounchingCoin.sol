// SPDX-License-Identifier: MIT
/*
 * ** author  : pikabounching.lab
 * ** package : @contracts/ERC721/PikaBounchingCoin.sol
 */
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract PikaBounchingCoin is ERC20, ERC20Burnable, Ownable {
    //--------------------------------------------------------------------
    // VARIABLES
    using SafeMath for uint256;

    mapping(address => bool) controllers;
    mapping(address => uint256) balances;
    bool public initialMinted;

    // Initial supply: total 21M
    uint public initialSupply = 21 * 1e6 * 1e18;
    // stakeholder addresses
    address constant FOUNDATION = 0xeE66bda0BC2C9ab72127Ce90944b4048775f5Fd9; // 40% for Foundation & Future partners.
    address constant FOUNDER = 0xfff14eBDA7dc570ECf70ac26F45543b0Eb39Eeb3; // 5% to founder
    address constant GENESIS_POOL = 0xEE5a230528B70c6CAA1cD17fA54AEA481241deAA; // 20% For genesis liquidity pool team.
    address constant AIRDROP = 0xa977bb7de34298126092738DB59177541Ab6080d; // 35% airdrop for testnet stage participants.
    address[] public INITIAL_SUPPLY_RECEIVER = [
        FOUNDATION,
        FOUNDER,
        GENESIS_POOL,
        AIRDROP
    ];

    // stakeholder allocations as a percentage of total supply
    uint constant FOUNDATION_ALLOCATION = 40;
    uint constant FOUNDER_ALLOCATION = 5;
    uint constant GENESIS_POOL_ALLOCATION = 20;
    uint constant AIRDROP_ALLOCATION = 35;
    uint[] public INITIAL_SUPPLY_ALLOCATION = [
        FOUNDATION_ALLOCATION,
        FOUNDER_ALLOCATION,
        GENESIS_POOL_ALLOCATION,
        AIRDROP_ALLOCATION
    ];

    //--------------------------------------------------------------------
    // ERRORS

    error PikaBounchingCoin__OnlyControllersCanMint();

    //--------------------------------------------------------------------
    // CONSTRUCTOR

    constructor() ERC20("Pika Bouncing Coin", "PBC") {
        _genesisSupply();
    }

    //--------------------------------------------------------------------
    // FUNCTIONS
    function _genesisSupply() internal {
        uint256 _amount;
        address _receiver;
        uint len = INITIAL_SUPPLY_RECEIVER.length;
        require(!initialMinted, "Initial supply has minted.");
        initialMinted = true;
        for (uint256 i = 0; i < len; i++) {
            _receiver = INITIAL_SUPPLY_RECEIVER[i];
            _amount = (INITIAL_SUPPLY_ALLOCATION[i] * initialSupply) / 100;
            _mint(_receiver, _amount);
        }
    }

    function mint(address to, uint256 amount) external {
        if (!controllers[msg.sender])
            revert PikaBounchingCoin__OnlyControllersCanMint();
        _mint(to, amount);
    }

    function burnFrom(address account, uint256 amount) public override {
        if (controllers[msg.sender]) {
            _burn(account, amount);
        }
    }

    //--------------------------------------------------------------------
    // OWNER FUNCTIONS

    function setController(
        address controller,
        bool _state
    ) external payable onlyOwner {
        controllers[controller] = _state;
    }
}
