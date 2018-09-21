import * as classNames from 'classnames';
import PanelBase from 'nav-frontend-paneler';
import RadioPanelGruppe from 'nav-frontend-skjema/lib/radio-panel-gruppe';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, Dispatch } from 'react-redux';
import { selectHarForsoktNesteSteg } from '../../app/selectors';
import { hentFeltMedFeil } from '../../common/utils';
import Barnehageikon from '../../component/Ikoner/BarnehageIkon';
import SideContainer from '../../component/SideContainer/SideContainer';
import { IRootState } from '../../rootReducer';
import { soknadNullstillNesteSteg, soknadValiderFelt } from '../../soknad/actions';
import { selectBarnehageplass } from '../../soknad/selectors';
import { BarnehageplassVerdier, Feltnavn, IBarnehageplass, Svar } from '../../soknad/types';
import BarnehageplassHarSluttetInfo from './BarnehageplassHarSluttetInfo';
import BarnehageplassStatus from './BarnehageplassStatus';
import HarBarnehageplassInfo from './HarBarnehageplassInfo';

interface IMapDispatchToProps {
    nullstillNesteSteg: () => void;
    settBarnehageplassVerdiFelt: (feltnavn: Feltnavn, verdi: BarnehageplassVerdier) => void;
    settSvarFelt: (feltnavn: Feltnavn, verdi: Svar) => void;
}

interface IMapStateToProps {
    barnehageplass: IBarnehageplass;
    harForsoktNesteSteg: boolean;
}

type BarnehageplassSideProps = IMapStateToProps & IMapDispatchToProps & InjectedIntlProps;

const Barnehageplass: React.StatelessComponent<BarnehageplassSideProps> = ({
    barnehageplass,
    harForsoktNesteSteg,
    intl,
    nullstillNesteSteg,
    settBarnehageplassVerdiFelt,
    settSvarFelt,
}) => {
    const { barnBarnehageplassStatus, harBarnehageplass } = barnehageplass;
    const feltMedFeil = hentFeltMedFeil(barnehageplass, harForsoktNesteSteg, intl);

    return (
        <SideContainer
            className={'barnehage'}
            ikon={<Barnehageikon />}
            tittel={intl.formatMessage({ id: 'barnehageplass.tittel' })}
            hjelpetekstNokkel={'barnehageplass.hjelpetekst'}
        >
            <p className={classNames('typo-ingress', 'barnehage__ingress')}>
                {intl.formatMessage({ id: 'barnehageplass.ingress' })}
            </p>

            <form>
                <RadioPanelGruppe
                    legend={intl.formatMessage({
                        id: 'barnehageplass.harPlass',
                    })}
                    name={'harBarnehageplass'}
                    className={'soknad__inputPanelGruppe'}
                    onChange={(evt: {}, value: string) => {
                        settSvarFelt('harBarnehageplass' as Feltnavn, value as Svar);
                        settBarnehageplassVerdiFelt(
                            'barnBarnehageplassStatus' as Feltnavn,
                            BarnehageplassVerdier.Ubesvart
                        );
                        nullstillNesteSteg();
                    }}
                    checked={harBarnehageplass.verdi}
                    radios={[
                        { label: intl.formatMessage({ id: 'svar.nei' }), value: Svar.NEI },
                        { label: intl.formatMessage({ id: 'svar.ja' }), value: Svar.JA },
                    ]}
                    feil={feltMedFeil.harBarnehageplass}
                />
                {harBarnehageplass.verdi !== Svar.UBESVART && (
                    <PanelBase className={'barnehage__panel'}>
                        <BarnehageplassStatus
                            barnBarnehageplassStatus={barnBarnehageplassStatus}
                            feltMedFeil={feltMedFeil}
                            harBarnehageplass={harBarnehageplass}
                            intl={intl}
                            settBarnehageplassVerdiFelt={settBarnehageplassVerdiFelt}
                        />
                        {barnBarnehageplassStatus.verdi ===
                            BarnehageplassVerdier.harSluttetIBarnehage && (
                            <BarnehageplassHarSluttetInfo
                                intl={intl}
                                feltMedFeil={feltMedFeil}
                                settBarnehageplassVerdiFelt={settBarnehageplassVerdiFelt}
                            />
                        )}

                        {barnBarnehageplassStatus.verdi ===
                            BarnehageplassVerdier.harBarnehageplass && (
                            <HarBarnehageplassInfo
                                feltMedFeil={feltMedFeil}
                                intl={intl}
                                settBarnehageplassVerdiFelt={settBarnehageplassVerdiFelt}
                            />
                        )}
                    </PanelBase>
                )}
            </form>
        </SideContainer>
    );
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        nullstillNesteSteg: () => {
            dispatch(soknadNullstillNesteSteg());
        },
        settBarnehageplassVerdiFelt: (feltnavn: Feltnavn, verdi: BarnehageplassVerdier) => {
            dispatch(soknadValiderFelt('barnehageplass', feltnavn, verdi));
        },
        settSvarFelt: (feltnavn: Feltnavn, verdi: Svar) => {
            dispatch(soknadValiderFelt('barnehageplass', feltnavn, verdi));
        },
    };
};

const mapStateToProps = (state: IRootState): IMapStateToProps => {
    return {
        barnehageplass: selectBarnehageplass(state),
        harForsoktNesteSteg: selectHarForsoktNesteSteg(state),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(Barnehageplass));
