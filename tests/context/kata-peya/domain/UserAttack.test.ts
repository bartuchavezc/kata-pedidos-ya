import { User } from "../../../../src/context/kata-peya/domain/User";


it("should mock class B", () => {
    let victim = new User("victim");
    let attacker = new User("attacker");

    attacker.attack(victim);

    expect(victim.life).toBe(100 - 10);
});