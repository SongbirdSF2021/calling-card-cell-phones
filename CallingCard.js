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

export default CallingCard


    


