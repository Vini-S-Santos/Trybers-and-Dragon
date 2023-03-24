import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static counter = 0;
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}
