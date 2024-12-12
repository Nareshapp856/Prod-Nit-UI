class ObserverClass {
  constructor() {
    this.observers = [];
  }

  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ObserverClass();
    }

    return this.instance;
  }

  SER_AO_D_login(payload) {
    this.observers.forEach((observer) => {
      observer(payload);
    });
  }

  SER_AO_subescribe(newObserver) {
    this.observers.push(newObserver);
  }
}

export const SER_AO_INSTANCE = ObserverClass.getInstance();
