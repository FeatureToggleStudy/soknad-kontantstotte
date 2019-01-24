import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Element, Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Veileder from 'nav-frontend-veileder';
import * as React from 'react';
import { FormattedHTMLMessage, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { appNesteSteg } from '../../app/actions';
import Veilederikon from '../../component/Ikoner/Veilederikon';
import { IRootState } from '../../rootReducer';
import { selectSoker } from '../../soker/selectors';
import { teksterHent } from '../../tekster/actions';
import { ISprak } from '../../tekster/types';
import { isEnabled } from '../../toggles/selectors';
import { IToggleName } from '../../toggles/types';
import { Personopplysning } from './Personopplysning';

interface IMapStateToProps {
    fornavn: string;
    visSprakvalg: boolean;
}

interface IMapDispatchToProps {
    oppdaterTekster: (sprak: ISprak) => void;
    nesteSteg: () => void;
}

type VeiledningProps = IMapStateToProps & IMapDispatchToProps & InjectedIntlProps;

const Veiledning: React.StatelessComponent<VeiledningProps> = ({
    fornavn,
    nesteSteg,
    visSprakvalg,
    oppdaterTekster,
    intl,
}) => {
    if (intl) {
        document.title = intl.formatMessage({
            id: 'app.tittel.veiledning',
        });
    }

    return (
        <div className={'veiledning'}>
            {visSprakvalg && (
                <Knapp className={'veiledning__knapp'} onClick={() => oppdaterTekster(ISprak.nn)}>
                    Bytt til nynorsk (midlertidig knapp)
                </Knapp>
            )}
            <div className={'veiledning__veileder-container'}>
                <Veileder
                    posisjon={'topp'}
                    className={'veiledning__veileder'}
                    storrelse={'M'}
                    center={true}
                    tekst={
                        <div className={'veiledning__veileder-snakkeboble'}>
                            <Element>
                                <FormattedMessage id={'veiledningsside.veileder.hei'} />{' '}
                                <span className={'veiledning__veileder-navn'}>{fornavn}</span>!
                            </Element>
                            <Normaltekst>
                                <FormattedMessage id={'veiledningsside.veileder.melding'} />
                            </Normaltekst>
                        </div>
                    }
                >
                    <Veilederikon morkBakgrunn={true} />
                </Veileder>
            </div>

            <Sidetittel className={'veiledning__sidetittel'}>
                <FormattedMessage id={'kontantstotte.tittel'} />
            </Sidetittel>
            <Normaltekst className={'veiledning__info'}>
                <FormattedHTMLMessage id={'veiledningsside.vilkaar.info'} />
            </Normaltekst>
            <Personopplysning className={'veiledning__personopplysning'} />
            <Hovedknapp className={'veiledning__knapp'} onClick={nesteSteg}>
                <FormattedMessage id={'veiledningsside.knapp'} />
            </Hovedknapp>
        </div>
    );
};

const mapStateToProps = (state: IRootState): IMapStateToProps => {
    return {
        fornavn: selectSoker(state).fornavn.toLocaleLowerCase(),
        visSprakvalg: isEnabled(state, IToggleName.vis_sprakvalg),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        nesteSteg: () => dispatch(appNesteSteg()),
        oppdaterTekster: (sprak: ISprak) => dispatch(teksterHent(sprak)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(Veiledning));
