import { makeAutoObservable } from 'mobx';
import { Lang } from '../types';

class Storage {
    Lang: Lang = 'en';

    constructor() {
        makeAutoObservable(this);
    }

    setLang(v: Lang) {
        this.Lang = v;
    }
}

export const store = new Storage();
