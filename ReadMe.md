# Doctor Search

## Description

- This is a web application created on CodeSandbox.
- The URL for preview is: https://dh27i.csb.app/
- This application can be used to search doctors near the address you input.
- Procedure:
  - After you enter an address in the search input, it will be converted to a geographic coordinates by the Google geocoidng API.
  - Then the geographic coordinates will be set in a GET request and be sent to the BetterDoctor(https://betterdoctor.com/) server which is a free RESTful API.
  - Finally a list of doctors who are in the certain radius near the address you input will be rendered. The web application also has pagination functionality. Now each page will shows 10 doctors.

## Technical Stack

### Front End

- React.js
- React-redux
- Semantic UI React
- react-geocode

### Back End

RESTful API from BetterDoctor(https://betterdoctor.com/).
