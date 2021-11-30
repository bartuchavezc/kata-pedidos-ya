import { IEvent } from "./IEvent";
import { EventHandler } from "./EventHandler";

export interface EventBus {
    publish(event: IEvent): void;
    listen(event: IEvent): void;
    initialize(conf: { eventType: string; eventHandlers: EventHandler<IEvent>[]; }[]): void;
}