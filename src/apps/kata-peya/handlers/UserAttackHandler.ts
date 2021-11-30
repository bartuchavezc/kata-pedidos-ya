import { UserAttack } from "../../../context/kata-peya/domain/events/UserAttack";
import { EventHandler } from "../../../context/shared/event-bus/EventHandler";

export class UserAttackHandler implements EventHandler<UserAttack> {

    handle(event: UserAttack): Promise<void> {
        return new Promise((resolve, reject) => {
            if (event.target.isDead()) {
                console.log(`User ${event.user.name} kill user ${event.target.name}`);
                return resolve();
            }

            if (event.target.life < 50) console.log(`User ${event.target.name} lower life`);
            resolve();
        });
    }
}