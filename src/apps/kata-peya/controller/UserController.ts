
import { User } from "../../../context/kata-peya/domain/User";
import { UserColitionsService } from "../../../context/kata-peya/application/service/UserColitionsService";

export class UserController {

    constructor(private readonly userColitionsService: UserColitionsService) { }

    public update(user: User, target: User): string {
        return this.userColitionsService.onUserAttack(user, target);
    }

}