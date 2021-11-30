import { IEvent } from "../../../shared/event-bus/IEvent";
import { User } from "../User";


export class UserAttack implements IEvent {
    
    constructor(
        public readonly user: User,
        public readonly target: User
    ) { }

    type: string = "USER_ATTACK";
}