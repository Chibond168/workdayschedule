# workdayschedule
The web site allows a user to enter any event during the working hours for the day (7am - 6pm).  The page displays working hours from 7am until 6pm.  

When the page opens, the current hour row displays in red.  The past hour displays in blue and does not allow the user to make an entry, the save button is disabled.  Future hours are displayed in green.

After the user types data in the hour row, and presses the 'save' button.  A message "Event is stored in local storage" will display under the date heading at the top of the page.  The message will disappear after a few seconds.

During the day, the event information will display after the user closes and re-opens the page.


Technical highlights:
Apply JQuery functions - $(#element) to search the element on the screen 
				- .hide() to hide message
				- .show() to show message
				- .format() to format the date 
				- .css to alter CSS content
				- .prop to alter property content
Link DayJS third party API - get current hour
Use Array to hold hourly event schedule information
Use JSON to store and retrive the data from local storage
Link "https://fonts.googleapis.com/css2?family=Krona+One&family=Pacifico&family=Roboto:wght@700&display=swap" to get different font type


web site url - https://chibond168.github.io/workdayschedule/
![work1](https://github.com/Chibond168/workdayschedule/assets/130376566/5ff81222-27cc-4dcb-bc39-ec6a2d08a5bc)
![work2](https://github.com/Chibond168/workdayschedule/assets/130376566/79fd5789-d11a-43f8-8033-69483a2cc828)
![work3](https://github.com/Chibond168/workdayschedule/assets/130376566/d4ea9b61-1a06-4ccd-aac3-132e44b060ca)
![work4](https://github.com/Chibond168/workdayschedule/assets/130376566/1940ee06-9eb2-4dae-905a-1f2a8339dff8)
