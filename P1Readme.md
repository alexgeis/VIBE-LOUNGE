# 07 Project 1: Interactive Front-End Application

## ~Your Task / Project Requirements~

You and your group will use everything you’ve learned over the past six units to create a real-world front-end application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

- Use CSS framework Bootstrap.

- Be deployed to GitHub Pages.

- Be interactive (i.e., accept and respond to user input).

- Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).

- Does not use alerts, confirms, or prompts (use modals).

- Use client-side storage to store persistent data.

- Be responsive.

- Have a polished UI.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## ~User Story~

```
AS A human with emotions on the modern internet
I WANT a web experience to match my mood - up, down, or somewhere in between - and display my mood history
SO THAT I can tailor a unique web experience to match my situation and track my mood over time.
```

## ~Acceptance Criteria~

```
GIVEN I am choosing a mood-tailored web experience
WHEN I select a mood button
THEN the user is brought to a curated web experience reflecting their mood, with relevant images, media, and quotes
WHEN I interact with the media player
THEN I am able to navigate through a curated media experience
WHEN I click on the sides of the image carousal
THEN I am provided a new image matching my selected mood
WHEN I return to the home page
THEN I see a chart populated with my recent mood history
WHEN I refresh the page
THEN the saved mood history persists

```

## ~Description/Process~

To begin this project we evaluated available APIs and decided to build an application that was not only aware of a user's emotional state, but tailored incoming API information to match this state. Each team member separately tested the viability of certain APIs, and after bringing ideas together in discussion we were able to priortize our MVP features.

Visuals, relevant quotes, and a media player were decided to be included in the MVP mood-tailored experience, and on top of this we added a chart to track the history of the user's moods. Our team found success in having each team member be responsible for a certain feature, with constant communication to solve any merge conflicts or design considerations.

Regarding APIs, we used Pexels for our images, YouTube for our media player, and FavQuotes for our quote API. Chart JS was used to populate/design the mood history and Moment.js was used to determine when the user was accessing the application.

Once the user selects a mood button the information is captured in local storage, which we used to populate our API fetches and the chart of mood history.

Finally, we applied a modern, responsive design to the website and arranged the elements onscreen into a polished UI.

## ~Future Development Notes~

Please note: this application uses only free APIs with CORS capability, so we will not accept any additions of paid APIs or related developments.

Several features were discussed that did not make the final list for MVP development. Those features are below and can be expanded upon:

- ### Sunrise / Sunset indicator

[Moment.js](https://momentjs.com/) is currently used to track the time of user access, so this service can be used to also tie in sunrise/sunset timing. Visuals could potentially accompany this feature as well.

- ### Weather

A weather widget could easily be added into the Vibe Pages to show local conditions. We suggest [Open Weather API](https://openweathermap.org/api)

- ### Recipes

Users could pull from cocktails or food recipe APIs to be able to craft a menu, as food/drink are heavily related to our emotional state. We suggest [TheCocktailDB](https://www.thecocktaildb.com/api.php) or [TheMealDB](https://www.themealdb.com/api.php)

- ### Event calendar

Tying actions to how a user is feeling would fit nicely with our application. To this effort we'd suggest [EventBrite](https://www.eventbrite.com/platform/api/) ,[SeatGeek](https://platform.seatgeek.com/) or [Ticketmaster](http://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

- ### Forbid user from trying too hard

The internet can be an overwhelming place, so to reduce this chaos it may be useful for a user to turn off certain temptations. News articles or social media could easily be implemented into the Vibe Lounge application, but it may be even more useful for our users to prevent them from accessing these stressful environments in the first place.

- ### Game

Online games can be a relaxing or exhilirating experience, so it makes perfect sense to potentially tie this type of activity into Vibe Lounge. Approval would need to come from the original developers, but our thoughts on this are open-ended at the moment.

## ~Deployment Details~

Repo: [VIBE LOUNGE](https://github.com/alexgeis/VIBE-LOUNGE)

GitHub Pages URL: [VIBE LOUNGE](https://alexgeis.github.io/VIBE-LOUNGE/)
