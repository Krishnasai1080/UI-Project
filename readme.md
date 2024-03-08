# Trip Management System

## Overview

The Trip Management System is a database project aimed at efficiently managing customer bookings, trips, feedback, destinations, and associated bookings. This system follows a well-defined Entity-Relationship (ER) model that outlines the relationships between various entities.

## Entity-Relationship Model

### 1. Customer and Trip

- ***Rule 1:*** A customer can book multiple trips.
- **Rule 2:** A trip can be booked by multiple customers.

### 2. Customer and Feedback

- **Rule 1:** A customer can provide feedback multiple times.
- **Rule 2:** Each feedback is provided by one customer.

### 3. Trip and Destination

- **Rule 1:** A trip includes one or more destinations.
- **Rule 2:** A destination can be part of multiple trips.

### 4. Booking and Customer

- **Rule 1:** A booking is associated with one customer.
- **Rule 2:** One customer can have multiple bookings.

### 5. Booking and Trip

- A booking is associated with one trip.
- One trip can have multiple bookings.

## How to Use

1. Set up the database using the provided SQL scripts.
1. Connect your application to the database using the appropriate configuration.
1. Integrate the ER model rules into your application logic for effective data management.

## E-R Model

![E-R Model](/images/ER%20Model.png)

## Database relations

![Database relations](/images/DB%20Relations.png)
## Contributing

If you would like to contribute to the Trip Management System project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
