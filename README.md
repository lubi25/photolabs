# PhotoLabs

PhotoLabs is a client-side application built using the React view-layer library. It allows users to view and interact with a collection of photos. The application features different photo categories, the ability to like photos, and a notification system for liked photos.

## Table of Contents
1. [Functional Requirements](#functional-requirements)
2. [Behavioural Requirements](#behavioural-requirements)
3. [Technical Specifications](#technical-specifications)
4. [Screenshots](#screenshots)
5. [Getting Started](#getting-started)
6. [API Endpoints](#api-endpoints)
7. [License](#license)

## Functional Requirements

- The client-side consists of a React single page application (SPA) called PhotoLabs.
- The server and persistence layer consists of:
  - PostgreSQL database for data storage.
  - Node.js for the API server.
- The client will communicate with the API over HTTP using the JSON format.

## Behavioural Requirements

- Users can view photos from the homepage loaded from the API.
- Users can navigate to different photo categories (topics).
- Users can click on a photo to view a larger version and see relevant/similar photos.
- Users can like photos and see a heart icon with a notification in the navigation if there are liked photos.
- The navigation consists of different topics and a heart icon.
- The client-side application makes API requests to load data.

## Technical Specifications

- **React**: For building the user interface.
- **Create React App**: For setting up the React application.
- **Webpack**: Module bundler.
- **Babel**: JavaScript compiler.
- **Express**: For creating the API server.

Two servers will run during development:

1. Client-side Webpack development server.
2. API server to provide photo data.


## Screenshots
!["PhotoLabs main page"](https://github.com/lubi25/photolabs/blob/main/docs/main-page.png?raw=true)
!["PhotoLabs modal"](https://github.com/lubi25/photolabs/blob/main/docs/open-modal.png?raw=true)


## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/photolabs.git
cd photolabs
```

2. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

3. **Frontend:** Running Webpack Development Server

```sh
cd frontend
npm start
```

4. **Backend:** Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## API Endpoints

`GET /api/photos:` Retrieve all photos.

`GET /api/topics:` Retrieve all photo topics.

`GET /api/topics/:id/photos:` Retrieve photos by topic ID.

## License
This project is licensed under the MIT License. See the LICENSE file for details.