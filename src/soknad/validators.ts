import {
    BarnehageplassVerdier,
    IFelt,
    Svar,
    TilknytningTilUtlandVerdier,
    ValideringsStatus,
} from './types';

export const harTekstomradeInnhold = (verdi?: string): boolean => {
    return verdi ? verdi.length > 0 : false;
};

export const erDatoSatt = (verdi?: string): boolean => {
    return harTekstomradeInnhold(verdi);
};

export const harSvartPaJaNeiSporsmal = (svar: Svar): boolean => {
    return svar !== Svar.UBESVART;
};

export const harHuketAvPaCheckbox = (svar: Svar): boolean => {
    return svar === Svar.JA;
};

const ok = (felt: IFelt): IFelt => ({
    feilmeldingsNokkel: '',
    valideringsStatus: ValideringsStatus.OK,
    verdi: felt.verdi,
});

const advarsel = (felt: IFelt, advarselNokkel: string): IFelt => ({
    feilmeldingsNokkel: advarselNokkel,
    valideringsStatus: ValideringsStatus.ADVARSEL,
    verdi: felt.verdi,
});

const feil = (felt: IFelt, feilmeldingsNokkel: string): IFelt => ({
    feilmeldingsNokkel,
    valideringsStatus: ValideringsStatus.FEIL,
    verdi: felt.verdi,
});

const harSvart = (felt: IFelt, feilmeldingsNokkel: string): IFelt => {
    return felt.verdi !== Svar.UBESVART ? ok(felt) : feil(felt, feilmeldingsNokkel);
};

const harSvartBarnehageplassVerdiMedFeilmelding = (felt: IFelt): IFelt => {
    return felt.verdi !== BarnehageplassVerdier.Ubesvart
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.feilmelding');
};

const harSvartTilknytningTilUtlandVerdiMedFeilmelding = (felt: IFelt): IFelt => {
    return felt.verdi !== TilknytningTilUtlandVerdier.Ubesvart
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.feilmelding');
};

const harSvartJa = (felt: IFelt, feilmeldingsNokkel: string): IFelt => {
    return felt.verdi === Svar.JA ? ok(felt) : feil(felt, feilmeldingsNokkel);
};

const harSvartTekst = (felt: IFelt, feilmeldingsNokkel: string): IFelt => {
    return felt.verdi.length > 0 ? ok(felt) : feil(felt, feilmeldingsNokkel);
};

const harFyltInnNavn = (felt: IFelt): IFelt => {
    return felt.verdi.replace(' ', '').length > 0
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.navn');
};

const harFyltInnDato = (felt: IFelt): IFelt => {
    return /^\d{2}\.\d{2}\.\d{4}/.test(felt.verdi.replace(' ', ''))
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.dato');
};

const harGyldigDato = (felt: IFelt): IFelt => {
    const splittetFelt = felt.verdi.split('.').map(tall => parseInt(tall, 10));

    let gyldigDato = splittetFelt[0] >= 0 && splittetFelt[0] <= 31;
    gyldigDato = gyldigDato && (splittetFelt[1] >= 0 && splittetFelt[1] <= 12);
    gyldigDato =
        gyldigDato &&
        (splittetFelt[2] >= new Date().getFullYear() - 150 &&
            splittetFelt[2] <= new Date().getFullYear());

    return gyldigDato ? ok(felt) : feil(felt, 'feilmelding.generell.gyldigDato');
};

const harFyltInnFodselsnummer = (felt: IFelt): IFelt => {
    return /^\d{11}$/.test(felt.verdi.replace(' ', ''))
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.fodselsnummer');
};

const harFyltInnTall = (felt: IFelt): IFelt => {
    return /^[+-]?\d+(\.\d+)?$/.test(felt.verdi.replace(' ', ''))
        ? ok(felt)
        : feil(felt, 'feilmelding.generell.tall');
};

const harFyltInnGyldigAntallTimer = (felt: IFelt): IFelt => {
    const timer = parseFloat(felt.verdi);
    switch (true) {
        case timer >= 0 && timer <= 33:
            return ok(felt);
        case timer >= 33 && timer <= 50:
            return advarsel(felt, 'advarsel.barnehageplass.timerIBarnehage');
        default:
            return feil(felt, 'feilmelding.barnehageplass.timerIBarnehage');
    }
};

const harBekreftetOppsummering = (felt: IFelt): IFelt =>
    harSvartJa(felt, 'oppsummering.bekreftelse.feilmelding');

const harSvartMedFeilmelding = (felt: IFelt): IFelt =>
    harSvart(felt, 'feilmelding.generell.feilmelding');

const harSvartJaMedFeilmelding = (felt: IFelt): IFelt =>
    harSvartJa(felt, 'feilmelding.generell.feilmeldingCheckbox');

const harSvartTekstMedFeilmelding = (felt: IFelt): IFelt =>
    harSvartTekst(felt, 'feilmelding.generell.feilmelding');

const svarUtenValidering = (felt: IFelt): IFelt => ok(felt);

export {
    harBekreftetOppsummering,
    harFyltInnDato,
    harFyltInnFodselsnummer,
    harFyltInnGyldigAntallTimer,
    harFyltInnNavn,
    harFyltInnTall,
    harGyldigDato,
    harSvart,
    harSvartBarnehageplassVerdiMedFeilmelding,
    harSvartJa,
    harSvartJaMedFeilmelding,
    harSvartMedFeilmelding,
    harSvartTekstMedFeilmelding,
    harSvartTilknytningTilUtlandVerdiMedFeilmelding,
    svarUtenValidering,
};
