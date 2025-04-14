import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [obstacleDirection: string]: boolean;
}

// allows us to enforce that all controls for our cars must have an execute() method.
interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events) {
    if (!this.isRunning) {
      return console.log("The car is currently off.");
    }

    Object.keys(events).forEach((eventKey) => {
      if (!events[eventKey]) return;

      switch (eventKey) {
        case "ObstacleLeft":
          this.steeringControl.turn("right");
          break;
        case "ObstacleRight":
          this.steeringControl.turn("left");
          break;
      }
    });
  }
}

const steering = new SteeringControl();

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });

autonomousCar.respond(getObstacleEvents());
