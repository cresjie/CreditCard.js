# CreditCard.js
javascript library for checking credit card

Basic Usage
----------
```javascript

var credit = new CreditCard;
var brand = credit.getBrandName(3530111333300000); //JCB

//Or simply use

var brand = CreditCard().getBrandName(378282246310005); //American Express

```

Public methods
----------
- **getBrandCode(number)**: returns brand code
- **getBrandName(number)**: returns brand name
- **checkByBrand(code, number)**: returns boolean
- **getBrandNameByCode(code)** : returns brand name
