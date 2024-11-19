# Cash-Register
Calculate the change due to the customer

## Description
This function calculates the change owed to the customer based on the amount they paid and the cash available in the drawer.

## How to use
1. **Enter the price:** Input the price of the item into the "Price" field.
2. **Enter the cash given:** Input the amount of cash given by the customer into the "Cash" field.
3. **Click the "Purchase" button:** The application will calculate and display the change due to the customer, broken down by denomination (PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE HUNDRED).
4. **Result:** The application also displays the status of the cash drawer:
    * **OPEN:** The drawer still has cash.
    * **CLOSED:** The drawer is empty.
    * **INSUFFICIENT_FUNDS:** Not enough cash in the drawer to give change.

## Technologies Used
* HTML
* CSS
* JavaScript

## Code Structure
* **`changer(cash)`:** The main function to calculate the change.
    * Checks if the cash given is enough.
    * Calculates the change due.
    * Iterates through the denominations, from highest to lowest, to find the optimal way to give change.
    * Updates the amount of cash in the drawer.
    * Calls the `statusCash()` function to check the drawer status.
* **`statusCash(cid, cashValue)`:**  This function checks the status of the cash drawer.
    * Checks if there is enough cash to give change.
    * Checks if the drawer is empty.
    * Returns the status of the drawer.

## Example Usage
* **Price:** $73.51
* **Cash given:** $100
* **Change due:** 
    * TWENTY: $20
    * FIVE: $5
    * ONE: $1
    * QUARTER: $0.25
    * DIME: $0.2
    * NICKEL: $0.05
    * PENNY: $0.01
* **Status:** OPEN
