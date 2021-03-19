Question 1 - How long did you spend on the coding test? What would you add to your solution if you had more time?\
    
    Start day: 18:00 March 13 st\
    End day: 4:00 March 19 st\

    I had to take Monday off. And also, I spent approx 4 hours working for day, so doing the site from scratch (but with material-ui), I spent roughly 3 working days in total.
    If I had more time I would do a component Table.js apart from the file Chart.js and more tests.
    
Question 2 - What alternative approaches/solutions to the user story did you consider when engineering your solution? \
             What benefits/downsides would they have had compared to the selected solution?\

    My solution is not mobile-friendly. It can seem on mobiles because it is responsive but is not visually pleasurable\

Question 3 - What additional features/improvements do you think could help the customer gain more value from your application?\

    Notifications when the API updates the Covid-19 data. I myself do not know exactly when this happens, so it would be nice to know\

Question 4 - Where do you see issues in your code that might cause issues in the future? How would you monitor the performance of your app?\

    The table could be a separate component, if another future component outside Cases.js needs a table, the solution would either result in the table needs to be on a different file or redundancy of code.

Question 5 - How would you improve the API that you just used or its documentation?\

    The API went down a few times during development, I would like to improve the availability more than "run it locally" as the documentation advises in case of problems
    Around 2 AM of March 17 st it is returning {} data, when this happens the site goes a little bit crazy. I supposed that the 90 days were going to come if the request was ok, but sometimes the information is {}. Whatever causes this in the API is probably related to the actualization of the cases process and it should be fixed.


Question 6 - What did you think about this test? How interesting was it for you? How would you recommend us to improve the test?\

    It is awesome to think that a piece of code so simple like making a API request and drawing a chart, can help so much the front line agaisnt viruses such as COVID=19\