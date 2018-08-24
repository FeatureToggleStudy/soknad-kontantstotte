import * as React from 'react';

interface IVeilderikonProps {
    morkBakgrunn?: boolean;
}

const Veilederikon: React.StatelessComponent<IVeilderikonProps> = ({ morkBakgrunn }) => {
    return (
        <svg
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>spotlight/ person</title>
            <desc>Created with Sketch.</desc>
            <defs>
                <circle id="path-1" cx="50" cy="50" r="50" />
                <path
                    d="M48.496133,69.0377195 C36.9560007,70.8128735 37.2344306,72.8877195 24.2647059,72.8877195 C11.231066,72.8877195 11.4767629,70.7807589 0.0245233027,68.8349914 C0.00823231302,68.4262765 0,27.5902131 0,27.1769955 C0,12.1678398 10.8625938,2.84217094e-14 24.2651972,2.84217094e-14 C37.6648527,2.84217094e-14 48.5294118,12.1678398 48.5294118,27.1769955 C48.5294118,27.6585989 48.5182271,68.5622762 48.496133,69.0377195 Z"
                    id="path-3"
                />
                <path
                    d="M37.2476027,0.171729987 C43.021322,2.99216261 52,10.6326046 52,17.7174241 L52,41.1304348 L0,41.1304348 L0,17.7174241 C0,10.8816263 8.2153007,3.52857822 13.922938,0.486763823 C13.6338285,0.66222378 13.4814815,0.76798831 13.4814815,0.76798831 C14.464954,2.38547967 17.10827,9.56521739 25.3995895,9.56521739 C33.6927037,9.56521739 37.5555556,1.85707915 37.5555556,0.350320724 C37.4528164,0.289787604 37.3501637,0.23026147 37.2476027,0.171729987 Z"
                    id="path-5"
                />
            </defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="spotlight/-person">
                    <g id="-80/-Blå">
                        <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1" />
                        </mask>
                        <g id="Mask" />
                        <g
                            id="STYLING/farge/-Lilla/-60"
                            mask="url(#mask-2)"
                            fill={morkBakgrunn ? '#a190b8' : '#C1B5D0'}
                        >
                            <g transform="translate(-8.000000, 0.000000)" id="Fill-37">
                                <polygon points="0 100 126 100 126 0 0 0" />
                            </g>
                        </g>
                        <g id="mennesker/NAV-ansatt/kvinne/-Frida" mask="url(#mask-2)">
                            <g
                                transform="translate(15.000000, 8.000000)"
                                id="mennesker/kvinne/-forfra/-B"
                            >
                                <g>
                                    <g id="Group-2" transform="translate(2.058824, 6.187500)">
                                        <g>
                                            <g
                                                id="hårfarge/-sort"
                                                transform="translate(8.735294, 0.000000)"
                                            >
                                                <mask id="mask-4" fill="white">
                                                    <use xlinkHref="#path-3" />
                                                </mask>
                                                <g id="Mask" />
                                                <g mask="url(#mask-4)" fill="#F6B873">
                                                    <g
                                                        transform="translate(-9.705882, -0.962500)"
                                                        id="hårfarge/-gull"
                                                    >
                                                        <rect x="0" y="0" width="67" height="76" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Group" transform="translate(6.755515, 15.468750)">
                                            <path
                                                d="M13.5110294,36.4219204 C14.4966575,38.0008474 17.2649566,65.7421875 25.5744485,65.7421875 C33.8857391,65.7421875 37.6378676,37.4850451 37.6378676,36.0142109 C24.9132656,28.7117259 13.5110294,36.4219204 13.5110294,36.4219204 Z"
                                                id="Combined-Shape"
                                                fill="#E7E5E2"
                                            />
                                            <g transform="translate(0.000000, 32.871094)">
                                                <g>
                                                    <g
                                                        id="Group"
                                                        transform="translate(0.000000, 2.869565)"
                                                    >
                                                        <g id="+20/-Blå">
                                                            <mask id="mask-6" fill="white">
                                                                <use xlinkHref="#path-5" />
                                                            </mask>
                                                            <use
                                                                id="Mask"
                                                                fill="#D8A25D"
                                                                xlinkHref="#path-5"
                                                            />
                                                            <g id="+20/-Lilla" mask="url(#mask-6)">
                                                                <g transform="translate(-31.777778, -26.782609)">
                                                                    <g>
                                                                        <polygon
                                                                            id="Fill-58"
                                                                            fill="#5C4378"
                                                                            points="0 96 121 96 121 0 0 0"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g
                                                    id="nav-id/-kort/-rød"
                                                    transform="translate(30.814815, 19.130435)"
                                                >
                                                    <g
                                                        id="NAV-Copy-2"
                                                        transform="translate(0.000000, -0.916667)"
                                                    >
                                                        <g id="Group-11">
                                                            <g id="Navansatt-dame">
                                                                <g transform="translate(0.000000, 0.687500)">
                                                                    <path
                                                                        d="M15.8171705,11.2291667 L1.18195396,11.2291667 C0.528814956,11.2291667 0,10.7080909 0,10.0645106 L0,2.3113521 C0,1.66777179 0.528814956,1.14583333 1.18195396,1.14583333 L15.8171705,1.14583333 C16.4703095,1.14583333 17,1.66777179 17,2.3113521 L17,10.0645106 C17,10.7080909 16.4703095,11.2291667 15.8171705,11.2291667"
                                                                        id="Fill-97"
                                                                        fill="#D2242A"
                                                                    />
                                                                    <path
                                                                        d="M12.1490818,6.65343693 C12.1490818,8.55751302 10.5511571,10.1029557 8.57932136,10.1029557 C6.60413215,10.1029557 5.00536906,8.55751302 5.00536906,6.65343693 C5.00536906,4.74936085 6.60413215,3.20391814 8.57932136,3.20391814 C10.5511571,3.20391814 12.1490818,4.74936085 12.1490818,6.65343693"
                                                                        id="Fill-98"
                                                                        fill="#FFFFFF"
                                                                    />
                                                                    <polygon
                                                                        id="Fill-99"
                                                                        fill="#FFFFFF"
                                                                        points="3.95171125 8.17394531 3.25502949 8.17394531 3.99949809 6.41154155 4.69785658 6.41154155"
                                                                    />
                                                                    <polygon
                                                                        id="Fill-100"
                                                                        fill="#FFFFFF"
                                                                        points="12.7319974 8.17394531 12.3002391 8.17394531 13.0447077 6.41154155 13.476466 6.41154155"
                                                                    />
                                                                    <polygon
                                                                        id="Fill-101"
                                                                        fill="#FFFFFF"
                                                                        points="13.9236502 8.17394531 13.7408865 8.17394531 14.4836783 6.41154155 14.666442 6.41154155"
                                                                    />
                                                                    <path
                                                                        d="M5.86586745,8.16544497 L6.41415851,8.16544497 C6.44266294,8.16544497 6.46446045,8.14439651 6.46446045,8.11768116 L6.46446045,6.46861526 C6.46446045,6.44189991 6.44266294,6.42085145 6.41415851,6.42085145 L5.85999889,6.42085145 C5.82311081,6.42085145 5.79628311,6.44837636 5.79628311,6.48318727 L5.57830807,7.00211277 C5.56489422,7.02882812 5.58669173,7.06121037 5.61603452,7.06121037 L5.77280888,7.06121037 C5.79628311,7.06121037 5.81640388,7.07821105 5.81640388,7.10330729 L5.81640388,8.11768116 C5.81640388,8.14439651 5.83820139,8.16544497 5.86586745,8.16544497"
                                                                        id="Fill-102"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M7.05710105,8.16544497 L7.60706884,8.16544497 C7.63557327,8.16544497 7.65988587,8.14439651 7.65988587,8.11768116 L7.65988587,6.46861526 C7.65988587,6.44189991 7.63557327,6.42085145 7.60706884,6.42085145 L6.75193599,6.42085145 C6.71588627,6.42085145 6.68738184,6.44837636 6.68738184,6.48318727 L6.46856844,7.00211277 L6.39311554,7.06121037 L6.83074235,7.06121037 C6.92799275,7.06121037 7.00763748,7.13568954 7.00763748,7.23121716 L7.00763748,8.11768116 C7.00763748,8.14439651 7.02943498,8.16544497 7.05710105,8.16544497"
                                                                        id="Fill-103"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M9.51644636,6.42101336 L8.96647856,6.42101336 C8.9388125,6.42101336 8.91617663,6.44206182 8.91617663,6.46877717 L8.91617663,8.11784307 C8.91617663,8.14455842 8.9388125,8.16560688 8.96647856,8.16560688 L9.52231492,8.16560688 C9.559203,8.16560688 9.5860307,8.13808197 9.5860307,8.10327106 L9.80400574,7.58434556 C9.81741959,7.5560111 9.79646045,7.52524796 9.76292583,7.52524796 L9.61118166,7.52524796 C9.5860307,7.52524796 9.56842502,7.50581861 9.56842502,7.4839606 L9.56842502,6.46877717 C9.56842502,6.44206182 9.54327405,6.42101336 9.51644636,6.42101336"
                                                                        id="Fill-104"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M7.25436846,8.16544497 L7.61570401,8.16544497 C7.65091536,8.16544497 7.67941979,8.13711051 7.67941979,8.1039187 L7.89739483,7.58337409 C7.90997031,7.55584918 7.88901117,7.52427649 7.85715328,7.52427649 L7.70457075,7.52427649 L7.25436846,8.16544497 Z"
                                                                        id="Fill-105"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M10.9881132,6.42101336 L11.6420383,6.42101336 C11.6738962,6.42101336 11.6965321,6.45015738 11.6831183,6.47849185 L10.9906283,8.13889153 C10.9855981,8.15589221 10.9696692,8.16560688 10.9503868,8.16560688 L10.3585007,8.16560688 L10.9453566,6.44934783 C10.9520635,6.43234715 10.9696692,6.42101336 10.9881132,6.42101336"
                                                                        id="Fill-106"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M10.1681917,6.42101336 L9.24347454,6.42101336 C9.17808202,6.42101336 9.50923641,6.48253963 9.53271065,6.54001812 L10.1866358,8.11055707 C10.2000496,8.14536798 10.2335842,8.16560688 10.2704723,8.16560688 L10.8313389,8.16560688 L10.2545434,6.48011096 C10.2419679,6.44287138 10.2067565,6.42101336 10.1681917,6.42101336"
                                                                        id="Fill-107"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M8.96077768,6.98041667 C8.96077768,7.33176404 8.91466757,7.3528125 8.91466757,7.3528125 C8.91466757,7.3528125 8.86268891,7.01603714 8.59357357,7.01603714 C8.32948843,7.01603714 8.26912611,7.16499547 8.26912611,7.27590466 C8.26912611,7.40462409 8.40410296,7.52524796 8.47955586,7.52524796 L8.96077768,7.52524796 L8.67657176,8.13322464 C8.66651137,8.15346354 8.6463906,8.16560688 8.62375473,8.16560688 L8.40494132,8.16560688 C8.17606753,8.16560688 7.5783129,7.87578578 7.5783129,7.31476336 C7.5783129,6.75293139 8.02264664,6.42101336 8.39320421,6.42101336 C8.69920763,6.42101336 8.96077768,6.62421196 8.96077768,6.98041667 Z"
                                                                        id="Fill-108"
                                                                        fill="#C52D35"
                                                                    />
                                                                    <path
                                                                        d="M9.37937359,2.746357 L7.86277033,2.746357 C7.75042935,2.746357 7.65988587,2.65892493 7.65988587,2.55044441 L7.65988587,2.30352978 C7.65988587,2.19585881 7.75042935,2.10761719 7.86277033,2.10761719 L9.37937359,2.10761719 C9.49171457,2.10761719 9.58225805,2.19585881 9.58225805,2.30352978 L9.58225805,2.55044441 C9.58225805,2.65892493 9.49171457,2.746357 9.37937359,2.746357"
                                                                        id="Fill-109"
                                                                        fill="#5A1F57"
                                                                    />
                                                                    <polygon
                                                                        id="Fill-110"
                                                                        fill="#C2B5CF"
                                                                        points="8.18201993 2.52083333 9.06062701 2.52083333 9.06062701 0.229166667 8.18201993 0.229166667"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <path
                                                d="M6.31126172,11.1381718 C6.31126172,11.1381718 6.21011654,11.7137128 6.07916967,11.6190207 C5.89674713,11.5449547 5.70168145,11.5008901 5.49397261,11.4999525 C4.59901847,11.499015 3.87113447,12.2518636 3.86932831,13.1819081 L3.86029749,19.6173281 C3.85849132,20.5473727 4.58276299,21.3020963 5.4795233,21.3039714 C5.83804681,21.3039714 6.16676861,21.1802155 6.43588702,20.9748931 C8.60328353,31.3375772 16.3282459,38.6559147 25.5396811,38.671853 C34.7511163,38.6868537 42.500462,31.3928923 44.6976602,21.0377086 C44.9658755,21.243031 45.2945973,21.368662 45.6540239,21.3695995 C46.5498811,21.3705371 47.2777651,20.6176885 47.2786682,19.6885815 L47.2886021,13.252224 C47.2895052,12.3221794 46.5652335,11.5674558 45.6693763,11.5655807 C45.4625705,11.5655807 45.2656987,11.6096453 45.0841792,11.6827738 C24.3096836,14.1494545 17.0633546,0.000937544923 16.4510651,0 C16.4510651,0 7.7625143,8.14740351 6.31126172,11.1381718 Z"
                                                id="Fill-337-Copy-7"
                                                fill="#E7E5E2"
                                            />
                                        </g>
                                        <g transform="translate(16.406250, 27.070312)">
                                            <g id="Group" transform="translate(7.764706, 0.000000)">
                                                <path
                                                    d="M2.25729706,5.49347 C0.852855882,5.59702 0.459767647,3.57067 0.882944118,2.24732 C0.962532353,1.99652 1.42744412,0.85462 2.25050294,0.85462 C3.07259118,0.85462 3.43559118,1.47877 3.48606176,1.58612 C4.09073824,2.87622 3.79373824,5.37947 2.25729706,5.49347"
                                                    id="Fill-42"
                                                    fill="#635E59"
                                                />
                                                <path
                                                    d="M15.9905382,5.49347 C17.3949794,5.59702 17.7880676,3.57067 17.3648912,2.24732 C17.2853029,1.99652 16.8203912,0.85462 15.9973324,0.85462 C15.1752441,0.85462 14.8122441,1.47877 14.7617735,1.58612 C14.1570971,2.87622 14.4540971,5.37947 15.9905382,5.49347"
                                                    id="Fill-44"
                                                    fill="#635E59"
                                                />
                                                <path
                                                    d="M9.569293,7.82313527 C10.3952495,7.6986885 10.9593417,7.77678781 11.1613595,8.01945965 C11.9238789,8.93672908 11.6799815,9.90715899 10.3717738,10.7038007 C9.68395407,11.1224965 8.73719294,11.2698619 8.23597198,11.0527502 C7.99087999,10.9465847 7.70426441,11.0549924 7.59579816,11.2948855 C7.48733192,11.5347785 7.59808897,11.8153144 7.84318096,11.9214798 C8.6715729,12.2803108 9.94550539,12.0820205 10.8844277,11.5104713 C12.6622043,10.4278824 13.0690549,8.80908679 11.9140063,7.41962627 C11.425217,6.83247292 10.559977,6.71267929 9.42162465,6.88419473 C9.15672428,6.92410724 8.97503678,7.16665172 9.01581427,7.42593299 C9.05659176,7.68521427 9.30439263,7.86304778 9.569293,7.82313527 Z"
                                                    id="Stroke-46"
                                                    fill="#D1BFA3"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="M15.1012545,14.7491688 C15.0574789,14.8473092 14.957092,15.0352148 14.7957577,15.2827257 C14.5226585,15.7017005 14.1797145,16.1217445 13.7631888,16.5134447 C12.5219731,17.680682 10.9064227,18.3556286 8.85023992,18.2938983 C6.84533705,18.2337075 5.23700814,17.5691762 3.97603483,16.4975756 C3.51306401,16.1041336 3.1308354,15.6827823 2.82531885,15.2627914 C2.64515596,15.015123 2.5326612,14.8273405 2.48346071,14.7294864 C2.3651149,14.4941102 2.07423139,14.3972033 1.83375419,14.5130388 C1.593277,14.6288742 1.49426995,14.9135875 1.61261576,15.1489636 C1.68389888,15.2907375 1.82262325,15.522304 2.03466695,15.8137986 C2.38282806,16.2924126 2.81576842,16.7696663 3.33970981,17.2149223 C4.7631785,18.4246148 6.58234138,19.1762586 8.82048361,19.2434517 C11.151164,19.313423 13.0144495,18.5349773 14.4356356,17.1984961 C14.9108341,16.7516201 15.3014476,16.2731897 15.6139984,15.7936901 C15.804054,15.5021165 15.927668,15.270734 15.9907632,15.1292812 C16.0980031,14.8888605 15.9858149,14.60887 15.7401839,14.5039048 C15.4945528,14.3989397 15.2084944,14.5087481 15.1012545,14.7491688 Z"
                                                    id="Stroke-48"
                                                    fill="#D19E9C"
                                                    fillRule="nonzero"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Veilederikon;