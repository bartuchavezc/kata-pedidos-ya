import { EventBus } from "../../../shared/event-bus/EventBus";
import { UserAttack } from "../../domain/events/UserAttack";
import { User } from "../../domain/User";

export function dinamicUserFactory(quantity: number): User[] {
    return new Array(quantity).fill(0).map((_, index) => new User(`User ${index}`));
}

export class UserColitionsService {

    constructor(private readonly eventBus: EventBus) {}

    // generate array for 40 hardcoded users
    private readonly userCollection: User[] = dinamicUserFactory(40);

    public onUserAttack(user: User, victim: User): string {
        const findedVictim = this.findUser(victim.name);

        if (findedVictim.isDead()) {
            throw new Error(`User ${victim.name} is already dead`);
        };

        findedVictim.life -= User.REDUCE_LIFE_ATTACK;

        this.eventBus.publish(new UserAttack(user, findedVictim));
        return `UserAttackService: life ${findedVictim.life}`;
    }

    private findUser(name: string): User {
        const user = this.userCollection.find(u => u.name === name);
        if (!user) throw new Error(`User ${name} not found`);
        return user;
    }

}