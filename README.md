# Meet App Readme

## Project Description

To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## How to get project running 

npm install
npm run start

## Project Dependencies

 "@testing-library/jest-dom": "^5.15.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.4",
    "workbox-broadcast-update": "^5.1.4",
    "workbox-cacheable-response": "^5.1.4",
    "workbox-core": "^5.1.4",
    "workbox-expiration": "^5.1.4",
    "workbox-google-analytics": "^5.1.4",
    "workbox-navigation-preload": "^5.1.4",
    "workbox-precaching": "^5.1.4",
    "workbox-range-requests": "^5.1.4",
    "workbox-routing": "^5.1.4",
    "workbox-strategies": "^5.1.4",
    "workbox-streams": "^5.1.4"

## API used by project

TBD

# User Stories

**FEATURE 1: FILTER EVENTS BY CITY**
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Scenario 2: User should see a list of suggestions when they search for a city.
Scenario 3: User can select a city from the suggested list.

As a **user**
I should be able to **“filter events by city”**
So that **I can see the list of events that take place in that city**

**FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS**
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see its details.
Scenario 3: User can collapse an event to hide its details.

As a **user**
I should be able to **“show or hide event details”**
So that **I can see an event either collapsed or expanded**

**FEATURE 3: SPECIFY NUMBER OF EVENTS**
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Scenario 2: User can change the number of events they want to see.

As a **user**
I should be able to **“specify the number of events”**
So that **I can customize the number of events I want to see**


**FEATURE 4: USE THE APP WHEN OFFLINE**
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes the settings (city, time range).

As a **user**
I should be able to **“use the app offline”**
So that **I can see events without an internet connection**


**FEATURE 5: DATA VISUALIZATION**
Scenario 1: Show a chart with the number of upcoming events in each city.


As a **user**
I should be able to **“see a chart displaying event data”**
So that **I can see events displayed visually**


# Test Scenarios

## FEATURE 1: FILTER EVENTS BY CITY

**Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities.**

**Given** a search hasn’t been made
**When** the user opens the app
**Then** user should see list of all upcoming events

**Scenario 2: User should see a list of suggestions when they search for a city.**

**Given** the user was typing “Berlin” in the city text
**When** user starts typing in the city textbox
**Then** the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3: User can select a city from the suggested list.**

**Given** the user was typing “Berlin” in the city textbox 
And the list of suggested cities is showing
**When** the user selects a city (e.g., “Berlin, Germany”) from the list
**Then** their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

## FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

**Scenario 1: An event element is collapsed by default.**

**Given** an event hasn’t been selected
**When** the user has selected a city and customized the amount of events
**Then** user should see the event details collapsed by default

**Scenario 2: User can expand an event to see its details.**

**Given** all events have been displayed
**When** the user has clicked on the “show details” button
**Then** user should see the event details expanded 

**Scenario 3: User can collapse an event to hide its details.**

**Given** all events have been displayed
**When** the user has clicked on the “show details” button
**Then** user can hide details by clicking the “hide details” button

## FEATURE 3: SPECIFY NUMBER OF EVENTS

**Scenario 1: When user hasn’t specified a number, 32 is the default number.**

**Given** the user has selected a city
**When** the user sees the number of events textbox
**Then** user will see 32 as the default

**Scenario 2: User can change the number of events they want to see.**

**Given** the user has selected a city
**When** the user sees the number of events textbox defaulted to 32
**Then** user can customize the number of events

## FEATURE 4: USE THE APP WHEN OFFLINE

**Scenario 1: Show cached data when there’s no internet connection.**

**Given** the user is offline
**When** the user selects data from any of the fields
**Then** user will see cached data

**Scenario 2: Show error when user changes the settings (city, time range).**

**Given** the user is offline
**When** the user customizes any fields
**Then** user will see an error message for city, time or range

## FEATURE 5: DATA VISUALIZATION

**Scenario 1: Show a chart with the number of upcoming events in each city.**

**Given** the user has searched a city for events
**When** the user selects a city
**Then** user will see data visualization charts displaying how many events will take place and the popularity of each event
