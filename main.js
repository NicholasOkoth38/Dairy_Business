
let selling_price = 45;
let shedProduct = [510, 308, 486, 572];
let shedName = ["A", "B", "C", "D"];

let totalLitres = 0;
let time;
let week = 7;
let year = 365;

let totalProduction = function(){
    for (let i = 0; i < shedProduct.length; i++){
        totalLitres = totalLitres + shedProduct[i];
        console.log("Your production in Shed " +  shedName[i] + " is " + shedProduct[i] + " litres per day \n")
    }
    console.log("\n");
    console.log("The total production is " + totalLitres + " litres per day\n");
    return totalLitres;
}
totalProduction();

let months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31,  August: 31, September: 30, October: 31, November: 30, December: 31}

let incomeOverTime = function income(selling_price, time){
    let weekTotal = 1;
    let yearTotal = 1;
    weekTotal = week * selling_price * totalLitres;
    yearTotal = year * selling_price * totalLitres;
    console.log("\n");
    console.log("Your week income will be Ksh " + weekTotal);
    console.log("Your year income will be Ksh " + yearTotal);
    
    for (const [key, value] of Object.entries(months)) {
        console.log("Your income for " + key + " will be " + value * totalLitres * selling_price);
      }
}
incomeOverTime(selling_price, time);