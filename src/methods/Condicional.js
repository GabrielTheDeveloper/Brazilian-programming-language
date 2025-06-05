class Condicional {
  constructor() {
    this.condição = null;
    this.verdadeiro = null;
    this.falso = null;
  }

  setCondição(condicion) {
    this.condicion = condicion;
    return this;
  }

  setVerdadeiro(verdadero) {
    this.verdadero = verdadero;
    return this;
  }

  setFalso(falso) {
    this.falso = falso;
    return this;
  }

  evaluar() {
    if (this.condicion) {
      return this.verdadeiro;
    } else {
      return this.falso;
    }
  }
}

module.exports = Condicional;