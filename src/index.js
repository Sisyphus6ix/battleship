import { ship, fleet } from "./factories/ships";

let Carrier = new ship('Carrier', 5, 0, 'sailing')
Carrier.hit()
console.log(Carrier)