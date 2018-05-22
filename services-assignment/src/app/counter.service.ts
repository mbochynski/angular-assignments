export class CounterService {
  activeInactiveTransitions = 0;
  inactiveActiveTransitions = 0;

  constructor() { }

  logActiveToInactiveTransition() {
    this.activeInactiveTransitions += 1;
    console.log(`active -> inactive transitions number: ${this.activeInactiveTransitions}`);
  }

  logInactiveToActiveTransition() {
    this.inactiveActiveTransitions += 1;
    console.log(`inactive -> active transitions number: ${this.inactiveActiveTransitions}`);
  }
}
