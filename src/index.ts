import { SendMailToUser } from "@packages/emailhelper";
import { List as ProductList } from "@packages/products";
import { ValidateUserName } from "@packages/validatorhelper";


console.log("This is index.ts");

console.log(ProductList());

console.log("ValidateUserName says:");
console.log(ValidateUserName("Hop"));

SendMailToUser("Hop");

