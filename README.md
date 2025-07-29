Market Seasonality Explorer Project Documentation
=============================================

Table of Contents
-----------------

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Components](#components)
5. [Services](#services)
6. [Hooks](#hooks)
7. [Utilities](#utilities)
8. [Config](#config)
9. [Libraries Used](#libraries-used)

### Introduction

Market Seasonality Explorer is a Next.js project that aims to provide a interactive and visual way to explore market seasonality. The project uses various libraries such as Material UI, Chart.js, and Jest to provide a robust and maintainable codebase.

### Getting Started

To get started with the project, follow these steps:

1. Clone the repository using `git clone`
2. Install the dependencies using `npm install` or `yarn`
3. Start the development server using `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

### Project Structure

The project is structured as follows:

* `app`: contains the main application code
	+ `page.js`: the main page component
	+ `calendar`: contains the calendar components
		- `MonthlyCalendar.js`: the monthly calendar component
		- `YearlyCalendar.js`: the yearly calendar component
		- `DailyCalendar.js`: the daily calendar component
	+ `orders`: contains the orders components
		- `page.js`: the orders page component
* `components`: contains reusable UI components
	+ `TopBar.js`: the top bar component
	+ `Search.js`: the search component
	+ `CompanyProfileCard.js`: the company profile card component
	+ `OrderBook.js`: the order book component
* `services`: contains the services used by the application
	+ `FMPService.js`: the Financial Modeling Prep service
* `hooks`: contains the custom hooks used by the application
	+ `useFMPOrderbook.js`: the useFMPOrderbook hook
* `utilities`: contains utility functions used by the application
	+ `Color.js`: the color utility functions
* `config`: contains the configuration files
	+ `config.js`: the main configuration file

### Components

The project uses the following components:

* `TopBar`: a top bar component that displays the application title and navigation links
* `Search`: a search component that allows users to search for companies
* `CompanyProfileCard`: a company profile card component that displays company information
* `OrderBook`: an order book component that displays the order book data

### Services

The project uses the following services:

* `FMPService`: a Financial Modeling Prep service that provides financial data

### Hooks

The project uses the following custom hooks:

* `useFMPOrderbook`: a hook that fetches the order book data from the FMPService

### Utilities

The project uses the following utility functions:

* `Color`: a utility function that provides color-related functions

### Config

The project uses the following configuration files:

* `config.js`: the main configuration file that contains environment variables and API keys

### Libraries Used

The project uses the following libraries:

* `next.js`: a React-based framework for building server-side rendered applications
* `material-ui`: a popular UI library for React
* `chart.js`: a popular charting library for React
* `jest`: a popular testing library for React
