import { push } from 'connected-react-router';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ValidForm } from '../../common/lib/validation';
import JaNeiSporsmal from '../../component/JaNeiSporsmal/JaNeiSporsmal';
import SubmitKnapp from '../../component/SubmitKnapp/SubmitKnapp';
import SideContainer from '../../container/SideContainer/SideContainer';
import { IRootState } from '../../rootReducer';
import { soknadSettVerdi } from '../../soknad/actions';
import { selectFamilieforhold } from '../../soknad/selectors';
import { IFamilieforhold, Svar } from '../../soknad/types';
import AnnenForelderInfo from './AnnenForelderInfo';

interface IMapDispatchToProps {
    settAnnenForelderNavn: (navn: string) => any;
    settAnnenForelderFodselsnummer: (personnummer: string) => any;
    navigerTilPath: (path: string) => any;
}

type FamilieforholdSideProps = IFamilieforhold & IMapDispatchToProps;

const FamilieforholdSide: React.StatelessComponent<FamilieforholdSideProps> = (
    {
        borForeldreneSammenMedBarnet,
        erAvklartDeltBosted,
        navigerTilPath
        ...annenForelderProps
    }) => {

    return (
        <SideContainer>
            <ValidForm summaryTitle={'Familieforhold'} onSubmit={() => navigerTilPath('/barnehageplass')}>
                <JaNeiSporsmal
                    bolk='familieforhold'
                    felt='borForeldreneSammenMedBarnet'
                    sporsmalNokkel='familieforhold.borForeldreneSammenMedBarnet.sporsmal'
                    verdi={ borForeldreneSammenMedBarnet }
                    hjelpetekstNokkel={'familieforhold.borForeldreneSammenMedBarnet.hjelpetekst'}
                />

                { borForeldreneSammenMedBarnet === Svar.JA &&
                    <AnnenForelderInfo
                {...annenForelderProps}
                />}

                { borForeldreneSammenMedBarnet === Svar.NEI &&
                    <JaNeiSporsmal
                        bolk='familieforhold'
                    felt='erAvklartDeltBosted'
                        sporsmalNokkel='familieforhold.erAvklartDeltBosted.sporsmal'
                        verdi={ erAvklartDeltBosted }
                    />
                }
                <SubmitKnapp label='submitknapp.neste'/>
            </ValidForm>
        </SideContainer>
    );
};

const mapStateToProps = (state: IRootState): IFamilieforhold => {
    return selectFamilieforhold(state);
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        settAnnenForelderFodselsnummer: (personnr) => {
            dispatch(soknadSettVerdi('familieforhold', 'annenForelderFodselsnummer', personnr));
        },
        settAnnenForelderNavn: (navn) => {
            dispatch(soknadSettVerdi('familieforhold', 'annenForelderNavn', navn));
        },
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        navigerTilPath: (path: string) => dispatch(push(path))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FamilieforholdSide);
