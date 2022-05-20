import { makeAutoObservable } from "mobx"
import { Lang } from "../types"

export class Storage {
    _lang: Lang = 'en'

    constructor() {
        makeAutoObservable(this)
    }

    setLang(v:Lang){
        this._lang = v
    }
    get Lang(){
        return this._lang
    }
}