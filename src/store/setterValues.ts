import { makeAutoObservable } from "mobx"

 class SetterValues {
   value = 'UNSET';
  constructor() {
    makeAutoObservable(this)
  }

  setValue(value: string){
    this.value = value
  }

 }

export default new SetterValues()
