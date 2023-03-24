export default abstract class Race {
  private static _createdRacesInstances = 0;
  
  constructor(private _name: string, private _dexterity: number) {}
  
  get name() : string {
    return this._name;
  }
  
  get dexterity() : number {
    return this._dexterity;
  }

  abstract get maxLifePoints():number;
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}