import { IRootState } from '../rootReducer';
import { IArbeidsforhold, IBarnehageplass, IFamilieforhold, IKravTilSoker, ISoknadState } from './types';

function selectFamilieforhold(state: IRootState): IFamilieforhold {
    return state.soknad.familieforhold;
}

function selectArbeidsforhold(state: IRootState): IArbeidsforhold {
    return state.soknad.arbeidsforhold;
}

function selectBarnehageplass(state: IRootState): IBarnehageplass {
    return state.soknad.barnehageplass;
}

function selectKravTilSoker(state: IRootState): IKravTilSoker {
    return state.soknad.kravTilSoker;
}

function selectValgtBarn(state: IRootState) {
    return state.soknad.mineBarn.valgtBarn;
}

function selectSoknad(state: IRootState): ISoknadState {
    return state.soknad;
}

export {
    selectArbeidsforhold,
    selectBarnehageplass,
    selectFamilieforhold,
    selectKravTilSoker,
    selectSoknad,
    selectValgtBarn,
};