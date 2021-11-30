import { Server } from './Server';
import * as dotenv from "dotenv";
import container from './dependenci-injection';
import { RxJsEventBus } from '../../context/shared/event-bus/RxJsEventBus';
import { UserAttackHandler } from './handlers/UserAttackHandler';
dotenv.config();

export class KataPeyaApp {
    server?: Server;

    async start() {
        if (!process.env.PORT) {
            process.exit(1);
        }

        await this.configureEventBus();

        const port = process.env.PORT;
        this.server = new Server(port);
        return this.server.listen();
    }

    get httpServer() {
        return this.server?.getHTTPServer();
    }

    async stop() {
        return this.server?.stop();
    }

    async configureEventBus() {
        (container.get('Context.shared.EventBus.RxJsEventBus') as RxJsEventBus).initialize([
            {
                eventType: "USER_ATTACK",
                eventHandlers: [
                    new UserAttackHandler()
                ]
            }
        ]);
    }

}