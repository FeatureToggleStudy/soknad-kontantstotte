import { Element, Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import OppsummeringSteg from './OppsummeringSteg';

interface IMapStateToProps {
    soker: {
        fodselsnummer: string;
        navn: string;
        statsborgerskap: string;
    };
    visStatsborgerskap: boolean;
}

type PersonaliaOgBarnProps = IMapStateToProps;

const PersonaliaOppsummering: React.StatelessComponent<PersonaliaOgBarnProps> = ({
    soker,
    visStatsborgerskap,
}) => {
    return (
        <OppsummeringSteg>
            <Element>
                <FormattedMessage id="oppsummering.sokerKontantstotteAv.label" />
            </Element>
            <Normaltekst>{soker.navn}</Normaltekst>
            <Normaltekst>
                <FormattedMessage id="oppsummering.fodselsnummer.label" />
                {soker.fodselsnummer}
            </Normaltekst>
            {visStatsborgerskap && (
                <Normaltekst>
                    <FormattedMessage id="oppsummering.statsborgerskap.label" />
                    {soker.statsborgerskap}
                </Normaltekst>
            )}
        </OppsummeringSteg>
    );
};

export default PersonaliaOppsummering;
