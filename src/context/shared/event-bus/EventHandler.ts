export interface EventHandler<A> {
    handle(event: A): Promise<any>;
}