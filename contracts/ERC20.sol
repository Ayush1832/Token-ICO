// contracts
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AyushToken is ERC20 {
    constructor()   ERC20("Ayush", "AN") {
        _mint(msg.sender, 10000000000000000000000000);
    }
}

