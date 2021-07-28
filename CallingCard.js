class CallingCard {
    constructor(centsPerMinute) {  
        this.centsPerMinute = centsPerMinute;
        this.totalMinutes = 0;
    }

    addDollars(dollar) {
        // increase totalAmount here
         const amount = (dollar * 100);
         const minute = (amount / this.centsPerMinute);
         return this.totalMinutes += minute;
    }
    
    getRemainingMinutes() {
    //totalAmount / cents/minute
     
        return this.totalMinutes;
    }

    useMinutes(amount) {
      if((this.totalMinutes - amount) > 0) {
         this.totalMinutes -= amount
      } else {
         this.totalMinutes = 0
      }
         return this.totalMinutes;
 }
}


let card = new CallingCard(20); // this card costs 20 cents / minute to use

card.addDollars(1);          // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added
//card.addDollars(1);
//card.addDollars(7);
//console.log(card);

card.getRemainingMinutes();   // returns 5  (5 minutes left)

card.useMinutes(3);
card.getRemainingMinutes();   // return 2

card.useMinutes(1);
card.getRemainingMinutes();   // returns 1

export default CallingCard


    


