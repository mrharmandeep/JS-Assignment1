// write a function to check the number is even or not?
function check(a) {

    if (a == 0) {
        return "neither even nor odd";
    }
    else {
        if (a % 2 == 0) {
            return "the number is even";
        }
        else {
            return "the number is odd"
        }
    }
}
// write a function to check whether a year that is taken as input is leap year or not?
function leapyear(b){
    if((b%4==0 ) && (b % 100 != 0) || (b % 400 == 0) )
    {
        return b+ " is a leap year";
    }
    else
    {
        return b+ " is not a leap year";
    }
}