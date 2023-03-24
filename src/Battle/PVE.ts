import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private _enviroment: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  static alive(enemy: (Fighter | SimpleFighter)) {
    return enemy.lifePoints !== -1;
  }

  private attackMonsters(enviroment: (Fighter | SimpleFighter)[]) {
    enviroment.forEach((enemy) => {
      if (enemy.lifePoints !== -1) { this.player.attack(enemy); }
    });
  }

  private attackPlayer(enviroment: (Fighter | SimpleFighter)[]) {
    enviroment.forEach((enemy) => {
      enemy.attack(this.player);
    });
  }

  fight(): number {
    let battle = true;
    const enemiesIsDead = this._enviroment.every(PVE.alive);
    const playerIsDead = PVE.alive(this.player);
    while (battle) {
      this.attackMonsters(this._enviroment);
      this.attackPlayer(this._enviroment);
      if (enemiesIsDead || playerIsDead) battle = false;
    }
    return super.fight();
  }
}