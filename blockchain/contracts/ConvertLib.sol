// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

library ConvertLib{
	function convert(uint amount,uint conversionRate) public pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
