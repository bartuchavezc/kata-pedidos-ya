import { Subject } from "rxjs";
import { IEvent } from "./IEvent";
import { EventBus } from "./EventBus";
import { EventHandler } from "./EventHandler";

export class RxJsEventBus implements EventBus {
    private readonly _subject: Subject<IEvent> = new Subject<IEvent>();
    private readonly EventHandlers: Map<string, EventHandler<IEvent>[]> = new Map<string, EventHandler<IEvent>[]>();

    constructor() {
        this.listen();
    }

    initialize(conf: { eventType: string; eventHandlers: EventHandler<IEvent>[]; }[]): void {
        conf.forEach(({ eventType, eventHandlers }) => this.EventHandlers.set(eventType, eventHandlers));
    }

    listen(): void {
        this._subject.subscribe(event => {
            (this.EventHandlers.get(event.type) as EventHandler<IEvent>[]).forEach(handler => handler.handle(event));
        })
    }

    // public register(event: Event, handler: EventHandler<Event>): void {
    //     if (this.EventHandlers.has(event.type)) this.EventHandlers.set(event.type, [handler])
    //     else this.EventHandlers.set(event.type, (this.EventHandlers.get(event.type) as EventHandler<Event>[]).concat(handler));
    // }

    public publish(event: IEvent): void {
        this._subject.next(event);
    }
}