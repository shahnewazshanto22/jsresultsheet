
let result = 89;


if ( result >= 0 && result <= 32 ) {
    console.log ('আপনি ফেল করেছেন')
}
else if ( result >= 33 && result <= 39 ) {
    console.log('আপনি C পেয়েছেন')
}
else if ( result >= 40 && result <= 49 ) {
    console.log('আপনি B- পেয়েছেন')
}
else if ( result >= 50 && result <= 59 ) {
    console.log('আপনি B পেয়েছেন')
}
else if ( result >= 60 && result <= 69 ) {
    console.log('আপনি A- পেয়েছেন')
}
else if ( result >= 70 && result <= 79 ) {
    console.log('আপনি A পেয়েছেন')
}
else if ( result <= 80 || result <= 100 ) {
    console.log('আপনি A+ পেয়েছেন')
}
else {
    console.log('আপনি ১০০ এর থেকেও বেশি নাম্বার পেয়েছেন ? হাস্যকর!')
}



