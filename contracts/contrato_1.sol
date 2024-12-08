// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PropertyRegistry {
    struct Property {
        uint id;
        string owner;
        string name;
        string description;
    }

    mapping(uint => Property) public properties;
    uint public propertyCount;

    function registerProperty(string memory _owner, string memory _name, string memory _description) public {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, _owner, _name, _description);
    }
}
