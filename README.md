# Self Driving Car

## About

Self Driving Car is a program that allows a car to react to obstacles in the road. It uses TypeScript interfaces to apply types to a variety of classes, properties, and methods.

## Features and code breakdown

- The `AutonomousCar` **interface** is implemented by the `Car` **class** which ensure all cars have the functionality to respond to events, and an optional property to identify whether the car `isRunning`.
- The `Car` **class** takes in a props object with the `AutonomousCarProps` type via its constructor to instantiate new `Car` objects.
- The `AutonomousCarProps` interface ensures that the Car class implements `SteeringControl` and the optional `isRunning` property.
- The `SteeringControl` **class** implements the `Steering` interface which allows the car to turn in different directions.
- The `Steering` **interface** extends the `Control` **interface** which ensures cars have the functionality to execute commands.
- `getObstacleEvents()` is a **function** that creates random obstacles in the road.
- The `respond()` method inside the `Car` **class** allows instances of the `Car` **class** to respond to the obstacles. It takes in an `events` object typed to `Events` as a parameter.
- The `Events` **interface** uses an index signature to allow the type to have any string as each key, with all the keys having a boolean typed value.

## Technologies used

- TypeScript
