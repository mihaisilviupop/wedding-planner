import { FormControl, Validators, } from "@angular/forms";

export class Nuntas {
  $key: string;
  nume: string;
  prenume: string;
  invitat?: boolean;
  confirmat?: boolean;
  parte: string;
  nrInsotitori?: number;
  categorii: string;

  constructor(pers?: Nuntas) {
    if (pers) {
      this.$key = pers.$key;
      this.nume = pers.nume;
      this.prenume = pers.prenume;
      this.invitat = pers.invitat;
      this.confirmat = pers.confirmat;
      this.parte = pers.parte;
      this.nrInsotitori = pers.nrInsotitori;
      this.categorii = pers.categorii;
    }
  }
}

export class NuntasForm {
  $key;
  nume = <FormProp>{
    value: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
  };
  prenume = <FormProp>{
    value: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
  };
  invitat?: boolean;
  confirmat?: boolean;
  parte = <FormProp>{
    value: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
  };
  nrInsotitori?: number;
  categorii: string;

  constructor(pers?: Nuntas) {
    if (pers) {
      this.$key = pers.$key;
      this.nume.value.setValue(pers.nume);
      this.prenume.value.setValue(pers.prenume);
      this.invitat = pers.invitat;
      this.confirmat = pers.confirmat;
      this.parte.value.setValue(pers.parte);
      this.nrInsotitori = pers.nrInsotitori;
      this.categorii = pers.categorii;

      this.nume.error = () => {
        return this.getError('nume');
      }
      this.prenume.error = () => {
        return this.getError('prenume');
      }
      this.parte.error = () => {
        return this.getError('parte');
      }
    }
  }

  private getError(field: string): string {
    return this[field].value.hasError('required') ? 'Camp obligatoriu' :
      this[field].value.hasError('minLength') ? 'Prea putine caractere' :
        this[field].value.hasError('maxLength') ? 'Prea multe caractere' : '';
  }

  getNuntas(): Nuntas {
    return new Nuntas({
      $key: this.$key,
      categorii: this.categorii,
      confirmat: this.confirmat,
      invitat: this.invitat,
      nrInsotitori: this.nrInsotitori,
      nume: this.nume.value.value,
      prenume: this.prenume.value.value,
      parte: this.parte.value.value
    });
  }

}

interface FormProp {
  value: FormControl;
  error(): string;
}


