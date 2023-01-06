class Input {
  _type = 'text';
  required = false;

  constructor(name, label){
    this.name = name;
    this.label = label;
  }

  get type(){
    return this.type;
  }

  set type(t){
    if (['text','password','submit','email'].includes(t)) {
      this._type = t;
    }else{
      throw new Error(`Input ${t} type doesn't exist.`);
    }
  }
  
}

