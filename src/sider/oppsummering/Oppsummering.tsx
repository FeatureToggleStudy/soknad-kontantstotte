import KnappBase from 'nav-frontend-knapper';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, Dispatch } from 'react-redux';
import SideContainer from '../../component/SideContainer/SideContainer';
import { sendInn } from '../../innsending/actions';
import { IRootState } from '../../rootReducer';
import { selectSoknad } from '../../soknad/selectors';
import { ISoknadState } from '../../soknad/types';
import ArbeidsforholdOppsummering from './ArbeidsforholdOppsummering';
import BarnehageplassOppsummering from './BarnehageplassOppsummering';
import FamilieforholdOppsummering from './FamilieforholdOppsummering';
import KravTilSokerOppsummering from './KravTilSokerOppsummering';
import PersonaliaOgBarnOppsummering from './PersonaliaOgBarnOppsummering';

interface IMapDispatchToProps {
    sendSoknad: () => void;
}

interface IMapStateToProps {
    soknad: ISoknadState;
}

interface IOppsummeringState {
    sendingPagar: boolean;
}

type OppsummeringSideProps = IMapDispatchToProps & IMapStateToProps & InjectedIntlProps;
class Oppsummering extends React.Component<OppsummeringSideProps, IOppsummeringState> {
    constructor(props: OppsummeringSideProps) {
        super(props);

        this.state = {
            sendingPagar: false,
        };
    }

    public render() {
        const { soknad, intl, sendSoknad } = this.props;

        return (
            <SideContainer>
                <h1>Oversikt over hva du har fylt ut</h1>

                <ul>
                    <PersonaliaOgBarnOppsummering
                        person={{ navn: 'Test Testersen', fodselsnummer: '***REMOVED***' }}
                        barnet={soknad.mineBarn}
                    />
                    <KravTilSokerOppsummering intl={intl} kravTilSoker={soknad.kravTilSoker} />
                    <FamilieforholdOppsummering
                        intl={intl}
                        familieforhold={soknad.familieforhold}
                    />
                    <BarnehageplassOppsummering
                        intl={intl}
                        barnehageplass={soknad.barnehageplass}
                    />
                    <ArbeidsforholdOppsummering
                        intl={intl}
                        arbeidsforhold={soknad.arbeidsforhold}
                    />
                </ul>

                <KnappBase
                    spinner={this.state.sendingPagar}
                    type={'hoved'}
                    onClick={() => {
                        this.setState({ sendingPagar: true });
                        sendSoknad();
                    }}
                >
                    Send inn
                </KnappBase>
            </SideContainer>
        );
    }
}

const mapStateToProps = (state: IRootState): IMapStateToProps => {
    return {
        soknad: selectSoknad(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        sendSoknad: () => {
            dispatch(sendInn());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(Oppsummering));
