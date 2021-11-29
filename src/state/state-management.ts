class State {

    private subscribers: Function[] = [];
    constructor(private stateData: any = null) {}

    subscribe = (callback: Function) => {

        this.subscribers.push(callback);
        this.fireNewSubscribe(callback);

    }

    unsubscribe = (callbackToRemove: Function) => {

        this.subscribers = this.subscribers.filter(callback => callback != callbackToRemove);

    }

    fireNewSubscribe = (callback: Function) => {

        callback(this.stateData);

    }

    fire = () => {

        this.subscribers.forEach(callback => {

            callback(this.stateData);

        });

    }

    emit = (newState: any) => {

        this.stateData = newState;
        this.fire();

    }

}

export const stateObject = new State();