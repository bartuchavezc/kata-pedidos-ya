export class User {
    public static REDUCE_LIFE_ATTACK = 10;
    public life: number = 100;
    

    constructor(
        public readonly name: string
    ){}

    public attack(target: User): void {
        target.life -= User.REDUCE_LIFE_ATTACK;
    }

    public isDead(): boolean {
        return this.life <= 0;
    }
}