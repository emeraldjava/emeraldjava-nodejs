# Agegrade

Age grade provide a mechanism to compare the times from two runners of different ages for a given distance. This app
converts the excel matrix into a json form and has a fancy (TBD) front end to present the maths.

http://www.runscore.com/Alan/AgeGrade.html

Copnvert excel to csv and JSON - Row Array via

https://shancarter.github.io/mr-data-converter/

npm init
npm install express --save

RSET API endpoints

/ages - list of all ages supported
/events - list of supported events

/age/x - the event details for this age
/event/x - the age details for this event

/age/$age/event/$event/time/hh:mm:ss - for a give time for age and event, return the agegrade
