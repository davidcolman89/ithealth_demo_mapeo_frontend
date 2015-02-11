/**
 * Created by david on 27/10/14.
 */
var App = {
    initialize: function () {
        App.cityCircle = "";
        App.currentDuenio = 0;
        App.currentMascota = 0;
        App.duenios = [
            {
                mascotas: [
                    {
                        id:1,
                        nombre:"Perro Octabio",
                        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        duenio: 'David',
                        sexo: 'Masculino',
                        nacimiento: '99/99/9999',
                        problemas:[
                            {
                                id:"1",
                                estado:{id:1,texto:'Active'},
                                titulo:"Pierna lastimada",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            },
                            {
                                id:"2",
                                estado:{id:2,texto:'passive'},
                                titulo:"Resfrio",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            },
                            {
                                id:"3",
                                estado:{id:1,texto:'Active'},
                                titulo:"Dolor de estomago",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:2,
                        nombre: "Gato Olga",
                        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        duenio: 'David',
                        sexo: 'Femenino',
                        nacimiento: '99/99/9999',
                        problemas:[
                            {
                                id:"1",
                                titulo:"Pierna lastimada",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            },
                            {
                                id:"2",
                                titulo:"Resfrio",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            },
                            {
                                id:"3",
                                titulo:"Dolor de estomago",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
                                    {
                                        id:1,
                                        practica:{titulo:'Practice 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    },
                                    {
                                        id:2,
                                        practica:{titulo:'Practice 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        medicacion:{titulo:'Medication 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                                        estudio:{titulo:'Study 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        App.locales = {
            petShops : [
                {
                    georeference:{lat:'-23.530549', long:'-46.681076'},
                    data:{id:'p1',nombre:'PetShop A',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.530657', long:'-46.682417'},
                    data:{id:'p2',nombre:'PetShop B',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.529418', long:'-46.680186'},
                    data:{id:'p3',nombre:'PetShop C',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.528129', long:'-46.681988'},
                    data:{id:'p4',nombre:'PetShop D',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.533097', long:'-46.679778'},
                    data:{id:'p5',nombre:'PetShop E',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.532969', long:'-46.682922'},
                    data:{id:'p6',nombre:'PetShop F',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.670433', long:'-58.380625'},
                    data:{id:'p7',nombre:'PetShop G',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.668819', long:'-58.380142'},
                    data:{id:'p8',nombre:'PetShop H',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.667504', long:'-58.381826'},
                    data:{id:'p9',nombre:'PetShop I',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.671095', long:'-58.384519'},
                    data:{id:'p10',nombre:'PetShop J',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.671148', long:'-58.375067'},
                    data:{id:'p11',nombre:'PetShop K',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-24.046873', long:'-46.516192'},
                    data:{id:'p66',nombre:'PetShop AAH',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.047754', long:'-46.518048'},
                    data:{id:'p99',nombre:'PetShop A5T',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.047029', long:'-46.519067'},
                    data:{id:'p178',nombre:'PetShop ZZ Top',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.046696', long:'-46.518294'},
                    data:{id:'p1A',nombre:'PetShop A11',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.046206', long:'-46.517576'},
                    data:{id:'p566',nombre:'PetShop AJJ',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },


            ],
            veterinarias : [
                {georeference:{lat:'-16.669373', long:'-49.233268'},data:{id:'335',nombre:'Centro Veterinário VetSul',descripcion:'Tel: (62) 3624-3335 Tel2:  Address: R 0088 Barrio: Setor Sul Number: 721 Localidad: Goiânia Estado: Goiânia CP: 74085-010 Email: vetsulcv@gmail.com Web: http://https//www.facebook.com/centroveterinariovetsul'}},
                {georeference:{lat:'-16.755911', long:'-49.290046'},data:{id:'337',nombre:'Clinica Veterinária e Pet Shop Procriar',descripcion:'Tel: (62) 3085-6656 Tel2: (62) 9295-1102 Address: Avenida Dona Ilda Araujo Manso Figueiredo Barrio: Ilda Number: 1 Localidad: Aparecida de Goiânia Estado: Goiânia CP: 74935-620 Email: procriarveterinaria@gmail.com Web: '}},
                {georeference:{lat:'-16.706816', long:'-49.284501'},data:{id:'339',nombre:'Mundo Animal Clínica Veterinária e Pet Shop',descripcion:'Tel: (62) 3285-4319 | 3285-6803 | 8177-0445 Tel2:  Address: R C - 209 Barrio: Jardim América Number: 386 Localidad: Goiânia Estado: Goiânia CP: 74270-220 Email: mv.sergioluiz@hotmail.com Web: http://www.mundoanimalvet.com.br/'}},
                {georeference:{lat:'-16.72655', long:'-49.301137'},data:{id:'341',nombre:'Doutor Amicão Clinica Veterinária e Pet Shop',descripcion:'Tel: (62) 3087-2323 | 3087-9292 Tel2:  Address: R Afonso Pena Barrio: Parque Anhangüera Number: 339 Localidad: Goiânia Estado: Goiânia CP: 74340-030 Email: doutoramicao@gmail.com Web: '}},
                {georeference:{lat:'-16.663036', long:'-49.26643'},data:{id:'343',nombre:'Clínica Veterinária Estação dos Bichos',descripcion:'Tel: (62) 3211-7467 Tel2:  Address: Avenida Marechal Rondon Barrio: Setor Norte Ferroviário Number: 8 Localidad: Goiânia Estado: Goiânia CP: 74063-110 Email: clinica.estacao@hotmail.com Web: '}},
                {georeference:{lat:'-16.62717', long:'-49.32667'},data:{id:'345',nombre:'Med Cão Veterinária e Pet Shop',descripcion:'Tel: (62) 3091-4386 Tel2:  Address: Av Mangalô Barrio: Setor Morada do Sol Number:  Localidad: Goiânia Estado: Goiânia CP: 74475-115 Email: medcao@gmail.com Web: http://www.medcao.com/'}},
                {georeference:{lat:'-16.723154', long:'-49.310101'},data:{id:'347',nombre:'Saúde Animal Clínica Veterinária e Pet Shop',descripcion:'Tel: (62) 3256-0918 Tel2: (62) 8556-7326 | 9112-3606 Address: Avenida Italia Barrio: Jardim Europa Number: 1885 Localidad: Goiânia Estado: Goiânia CP: 74325-110 Email: sac@saudeanimalgo.com.br Web: http://www.saudeanimalgo.com.br/'}},
                {georeference:{lat:'-16.670958', long:'-49.252806'},data:{id:'349',nombre:'Dog Center',descripcion:'Tel: (62) 3224-1333 | 3251-0276 | 3223-5903 Tel2:  Address: Av Paranaíba Barrio: Goiânia Number: 268 Localidad: Goiânia Estado: Goiânia CP: 74020-010 Email: dogcenter@dogcenter.com.br Web: http://www.dogcenter.com.br/'}},
                {georeference:{lat:'-16.603146', long:'-49.3339'},data:{id:'351',nombre:'Consultório Veterinário Magnum-dr Fabianogonçalves',descripcion:'Tel: (62) 3581-5575 |  3297-2358 Tel2: (62) 9903-2856 Address: Av do Povo  Barrio: Jardim Liberdade Number: 1098 Localidad: Goiânia Estado: Goiânia CP: 74480-110 Email:  Web: '}},
                {georeference:{lat:'-16.704644', long:'-49.263841'},data:{id:'353',nombre:'Pet s & Bull s',descripcion:'Tel: (62) 3520-5999 Tel2:  Address: Av Ricardo Paranhos Barrio: Setor Marista Number: 309 Localidad: Goiânia Estado: Goiânia CP: 74175-020 Email:  Web: '}},
                {georeference:{lat:'-16.701086', long:'-49.252796'},data:{id:'355',nombre:'Refúgio Silvestre',descripcion:'Tel: (62) 3432-9275 Tel2: (62) 8229-1114 Address: R Noventa Barrio: Marista Number: 1104 Localidad: Goiânia Estado: Goiânia CP: 74180-015 Email: contato@refugiosilvestre.com Web: http://www.refugiosilvestre.com.br/'}},
                {georeference:{lat:'-16.674011', long:'-49.209355'},data:{id:'357',nombre:'Consultório Veterinário Só Cães Setor Jardim',descripcion:'Tel: (62) 3206-3463 Tel2:  Address: Pedro Álvares Cabral Barrio: Jardim Novo Mundo Number: 27 Localidad: Goiânia Estado: Goiânia CP: 74710-060 Email:  Web: '}},
                {georeference:{lat:'-16.693188', long:'-49.314782'},data:{id:'359',nombre:'Clínica Veterinária Anjos de Patas',descripcion:'Tel: (62) 3287-1961 Tel2:  Address: Avenida das Bandeiras Barrio: Jardim Ana Lúcia Number: 38 Localidad: Goiânia Estado: Goiânia CP: 74315-030 Email:  Web: '}},
                {georeference:{lat:'-15.322574', long:'-49.115097'},data:{id:'361',nombre:'Clínica Veterinária Mundo Animal',descripcion:'Tel: (62) 3353-7368 Tel2: (62) 8641-1810 Address: R Rua 33 Barrio: Setor Central Number: 314 Localidad: Goianésia Estado: Goiânia CP: 76380-000 Email:  Web: '}},
                {georeference:{lat:'-16.697847', long:'-49.277716'},data:{id:'363',nombre:'Clínica Veterinária Bueno',descripcion:'Tel: (62) 3251-6335 Tel2:  Address: Av T 8 Barrio: Setor Bueno Number: 1143 Localidad: Goiânia Estado: Goiânia CP: 74210-270 Email:  Web: '}},
                {georeference:{lat:'-16.352077', long:'-48.937126'},data:{id:'365',nombre:'Clínica Veterinária Vida Animal',descripcion:'Tel: (62) 3314-2617 Tel2:  Address: Av Paranapanema Barrio: Jd América Number: 1697 Localidad: Anápolis Estado: Goiânia CP: 75115-640 Email:  Web: '}},
                {georeference:{lat:'-16.334437', long:'-48.945666'},data:{id:'367',nombre:'Clínica Veterinária de Anápolis',descripcion:'Tel: (62) 3324-1470 Tel2:  Address: Av Pinheiro Chagas Barrio: Jundiaí Number: 359 Localidad: Anápolis Estado: Goiânia CP: 75110-580 Email:  Web: '}},
                {georeference:{lat:'-16.34583', long:'-48.959422'},data:{id:'369',nombre:'Quality Vet Serviços Veterinários',descripcion:'Tel: (62) 3706-1667 Tel2: (62) 9925-1667 Address: R Bernardo Sayão Barrio: Vila Nossa Senhora D Abad Number:  Localidad: Anápolis Estado: Goiânia CP: 75120-675 Email:  Web: '}},
                {georeference:{lat:'-16.303427', long:'-48.970485'},data:{id:'371',nombre:'Hospital Veterinario São Francisco de Assis',descripcion:'Tel: (62) 3943-3838 Tel2:  Address: R 9 Barrio: Boa Vista Number:  Localidad: Anápolis Estado: Goiânia CP: 75000-000 Email:  Web: '}},
                {georeference:{lat:'-16.329776', long:'-48.962383'},data:{id:'373',nombre:'Clínica Veterinária Comave',descripcion:'Tel: (62) 3311-1550 Tel2:  Address: Rua Firmo Velasco Barrio: Setor Central Number: 1438 Localidad: Anápolis Estado: Goiânia CP: 75024-010 Email:  Web: '}},
                {georeference:{lat:'-16.790453', long:'-49.149924'},data:{id:'375',nombre:'Clini Vet',descripcion:'Tel: (62) 3249-0968 Tel2: (62) 8100-1762 Address: Flamboyants Barrio: Parque das Laranjeiras Number: 550 Localidad: Goiânia Estado: Goiânia CP: 74855-340 Email: clini_vet@hotmail.com Web: '}},
                {georeference:{lat:'-16.738486', long:'-49.274855'},data:{id:'377',nombre:'Mundo dos Bichos',descripcion:'Tel: (62) 3248-4686 Tel2: (62) 8403-6080 Address: R R.tauari  Barrio:  Number: 425 Localidad: Goiânia Estado: Goiânia CP: 74840-200 Email:  Web: '}},
                {georeference:{lat:'-16.717766', long:'-49.315563'},data:{id:'379',nombre:'Hospital Veterinário Santa Clara',descripcion:'Tel: (62) 3251-4924 Tel2:  Address: Av C 0231 Barrio: Jardim América Number: 231 Localidad: Goiânia Estado: Goiânia CP: 74290-030 Email:  Web: '}},
                {georeference:{lat:'-16.679393', long:'-49.28614'},data:{id:'381',nombre:'Clínica Veterinária Filhote',descripcion:'Tel: (62) 3291-9367 Tel2: (62) 8405-2574 Address: R 240 Barrio: Setor Bueno Number: 640 Localidad: Goiânia Estado: Goiânia CP: 74533-260 Email:  Web: '}},
                {georeference:{lat:'-16.651923', long:'-49.239094'},data:{id:'383',nombre:'Pet Angels',descripcion:'Tel: (62) 3932-6441 Tel2:  Address: Sen Péricles Barrio: Setor Negrão de Lima Number:  Localidad: Goiânia Estado: Goiânia CP: 74650-270 Email:  Web: '}},
                {georeference:{lat:'-13.005419', long:'-38.458932'},data:{id:'385',nombre:'Classe Animal Banho e Tosa',descripcion:'Tel: (62) 3247-3601 Tel2:  Address: Pc Itapua Barrio: Jardim Planalto Number:  Localidad: Goiânia Estado: Goiânia CP: 74333-015 Email:  Web: '}},
                {georeference:{lat:'-16.669266', long:'-49.238692'},data:{id:'387',nombre:'Cannys & Fellys Veterinária',descripcion:'Tel: (62) 3092-2126 Tel2:  Address: Av Anhangüera Barrio: Setor Leste Universitário Number: 2826 Localidad: Goiânia Estado: Goiânia CP: 74610-010 Email:  Web: '}},
                {georeference:{lat:'-16.648308', long:'-49.264877'},data:{id:'389',nombre:'Clinica Veterinaria Med-kão Petcenter',descripcion:'Tel: (62) 3204-2207 Tel2:  Address: Av Goias Barrio: Crimeia Oeste Number: 4217 Localidad: Goiânia Estado: Goiânia CP: 74560-220 Email:  Web: '}},
                {georeference:{lat:'-16.688247', long:'-49.311809'},data:{id:'393',nombre:'Rivander Vendramine Bonfim',descripcion:'Tel: (62) 9212-2464 Tel2:  Address: C 7 Barrio: Setor Sudoeste Number:  Localidad: Goiânia Estado: Goiânia CP: 74305-080 Email:  Web: http://www.dogdefender.com.br/'}},
                {georeference:{lat:'-16.104589', long:'-47.973792'},data:{id:'395',nombre:'Paraíso dos Bichos PET SHOP',descripcion:'Tel: (61) 3627-0730 Tel2: (61) 8543-8976 Address: R Quadra 03 Casa 34 Barrio: Setor Leste Universitário Number: 34 Localidad: Goiânia Estado: Goiânia CP: 72876-008 Email: contato@paraisodosbichos.com Web: http://www.paraisodosbichos.com'}},
                {georeference:{lat:'-16.685823', long:'-49.242739'},data:{id:'397',nombre:'Babydool',descripcion:'Tel: (62) 3218-6247 Tel2:  Address: 12a Avenida Barrio: Setor Leste Universitário Number:  Localidad: Goiânia Estado: Goiânia CP: 74603-020 Email:  Web: '}},
                {georeference:{lat:'-16.688093', long:'-49.31491'},data:{id:'399',nombre:'4 Patas Pet Shop',descripcion:'Tel: (65) 3558-4251 Tel2:  Address: Av. Neddermeyer Barrio: Cidade Jardim Number: 536 Localidad: Goiânia Estado: Goiânia CP: 74423-210 Email:  Web: '}},
                {georeference:{lat:'-16.347112', long:'-48.944885'},data:{id:'401',nombre:'Clinica Veterinária Sos Animal',descripcion:'Tel: (62) 3098-1500 Tel2:  Address: Av Anderson Cleyton Barrio: Eldorado Number: 390 Localidad: Anápolis Estado: Goiânia CP: 75115-390 Email:  Web: '}},
                {georeference:{lat:'-16.694162', long:'-49.261051'},data:{id:'403',nombre:'Dog s e Cat s',descripcion:'Tel: (62) 3281-0119 |  3202-9331 Tel2:  Address: R 0145 Barrio: Setor Marista Number: 500 Localidad: Goiânia Estado: Goiânia CP: 74170-080 Email: jjmachado1988@bol.com.br Web: '}},
                {georeference:{lat:'-16.722763', long:'-49.241507'},data:{id:'405',nombre:'Rural Shopping',descripcion:'Tel: (62) 3249-2833 Tel2:  Address: Av Gonzaga Jaime Barrio: Vila Redenção Number: 378 Localidad: Goiânia Estado: Goiânia CP: 74845-360 Email: rural_shopping@hotmail.com Web: http://www.ruralpet.com/'}},
                {georeference:{lat:'-16.624396', long:'-49.28773'},data:{id:'407',nombre:'Consultório Veterinário É o Bicho',descripcion:'Tel: (62) 3210-8972 Tel2:  Address: Genésio Lima Brito  Barrio: Jardim Balneário Meia Ponte Number:  Localidad: Goiânia Estado: Goiânia CP: 74593-210 Email:  Web: '}},
                {georeference:{lat:'-16.707358', long:'-49.279558'},data:{id:'409',nombre:'Clínica Veterinária',descripcion:'Tel: (62) 3251-9312 Tel2:  Address: C 233 Barrio: Nova Suíça Number:  Localidad: Goiânia Estado: Goiânia CP: 74290-040 Email:  Web: '}},
                {georeference:{lat:'-16.671814', long:'-49.309795'},data:{id:'411',nombre:'Animalli Pets Center',descripcion:'Tel: (62) 3945-3561 Tel2:  Address: R da Imprensa Barrio: St Rodoviário Number: 135 Localidad: Goiânia Estado: Goiânia CP: 74430-240 Email: animalli.petscenter@gmail.com Web: '}},
                {georeference:{lat:'-16.70494', long:'-49.270819'},data:{id:'413',nombre:'Cãopanheiros',descripcion:'Tel: (62) 3092-7886 Tel2:  Address: Av T-2C/T-8 Barrio: Setor Bueno Number: 155 Localidad: Goiânia Estado: Goiânia CP: 74210-005 Email:  Web: '}},
                {georeference:{lat:'16.352639', long:'-49.504623'},data:{id:'415',nombre:'Clinica Veterinaria Sao Francisco',descripcion:'Tel: (62) 3514-2406 Tel2:  Address: R Vicente Bueno Barrio: S Meia Ponte Number:  Localidad: Inhumas Estado: Goiânia CP: 75400-000 Email:  Web: '}},
                {georeference:{lat:'-16.698931', long:'-49.25218'},data:{id:'417',nombre:'Centro Clínico Veterinário',descripcion:'Tel: (62) 3242-0075 |  3088-5585 Tel2:  Address: R 90 Barrio: Setor Sul Number: 899 Localidad: Goiânia Estado: Goiânia CP: 74093-025 Email: ccvet@pop.com.br Web: '}},
                {georeference:{lat:'-16.732803', long:'-49.275872'},data:{id:'419',nombre:'Chérie Boutique e Pet Shop',descripcion:'Tel: (62) 3926-3662 Tel2: (62) 8143-3381 | 8566-4653 Address: Av Rio Negro Barrio: Paque Amazônia Number: 505 Localidad: Goiânia Estado: Goiânia CP: 74840-520 Email: cheriepetshop@gmail.com Web: '}},
                {georeference:{lat:'-16.329582', long:'-48.945919'},data:{id:'421',nombre:'Petzoo Clínica e Produtos Veterinários',descripcion:'Tel: (62) 3702-7102 | 3311-7102 Tel2: (62) 9631-4886 Address: Av Santos Dumont Barrio: Jundiaí Number: 246 Localidad: Anápolis Estado: Goiânia CP: 75113-180 Email: contato@petzoo.vet.br Web: http://petzoo.vet.br/'}},
                {georeference:{lat:'-16.710625', long:'-49.29702'},data:{id:'423',nombre:'Coyote Acessorios para Cães',descripcion:'Tel: (62) 3247-1318 Tel2:  Address: Afonso Pena Barrio: Jardim Planalto Number:  Localidad: Goiânia Estado: Goiânia CP: 74333-270 Email: coyoteacesorios@hotmail.com Web: http://www.coyoteacessorios.com.br/'}},
                {georeference:{lat:'-16.694471', long:'-49.31096'},data:{id:'425',nombre:'Clínica Veterinária Dr° Elisa',descripcion:'Tel: (62) 3274-1495 Tel2:  Address: T 2 Barrio: Setor Bueno Number: 624 Localidad: Goiânia Estado: Goiânia CP: 74210-010 Email:  Web: '}},
                {georeference:{lat:'-15.441886', long:'-47.608621'},data:{id:'427',nombre:'Clinica Veterinaria Rancho dos Animais',descripcion:'Tel: (61) 3637-5324 Tel2:  Address: av Quadra 7 Mr 10 Lote 18 Barrio: Setor Norte Number:  Localidad: Planaltina Estado: Goiânia CP: 73751-070 Email: clinicaranchodosanimais@hotmail.com Web: '}},
                {georeference:{lat:'-16.324199', long:'-48.951297'},data:{id:'429',nombre:'Clinicão Clínica Veterinária',descripcion:'Tel: (62) 3321-0924 | 3321-4706 Tel2:  Address: Sen José L Dias Barrio: Setor Central Number: 1860 Localidad: Anápolis Estado: Goiânia CP: 75020-010 Email:  Web: http://www.clinicao.vet.br/'}},
                {georeference:{lat:'-16.639084', long:'-49.238592'},data:{id:'431',nombre:'Clínica Veterinária Coyote',descripcion:'Tel: (62) 3204-2723 Tel2:  Address: Caiapó Barrio: Bairro Santa Genoveva Number: 470 Localidad: Goiânia Estado: Goiânia CP: 74672-400 Email: coyote3204@gmail.com Web: '}},
                {georeference:{lat:'-16.1046', long:'-47.973803'},data:{id:'433',nombre:'Magia Animal',descripcion:'Tel: (61) 3627-0730 Tel2: (61) 9368-8865 | 8439-3250 Address: R Quadra 03 Casa 34 Barrio: Valparaíso I Number: 34 Localidad: Valparaíso de Goiás Estado: Goiânia CP: 72876-008 Email: contato@magiaanimal.com Web: http://www.magiaanimal.com/'}},
                {georeference:{lat:'-16.30584', long:'-48.948322'},data:{id:'435',nombre:'Clínica Veterinária Animais e Cia',descripcion:'Tel: (62) 3318-1634 Tel2:  Address: Universitária Barrio: VL Santa Izabel Number: 1838 Localidad: Anápolis Estado: Goiânia CP: 75083-350 Email:  Web: '}},
                {georeference:{lat:'-16.768605', long:'-49.341278'},data:{id:'437',nombre:'Faro Pet Center e Clínica Veterinária',descripcion:'Tel: (62) 3288-5031 Tel2:  Address: Igualdade Barrio: S Garavelo Number:  Localidad: Aparecida de Goiânia Estado: Goiânia CP: 74930-530 Email:  Web: '}},
                {georeference:{lat:'-16.675559', long:'-49.238733'},data:{id:'439',nombre:'Associação Clínica Veterinária de Pequenos Animais',descripcion:'Tel: (62) 3565-4608 Tel2:  Address: Av Universitária Ed Super Barrio: Setor Leste Universitário Number:  Localidad: Goiânia Estado: Goiânia CP: 74605-010 Email:  Web: '}},
                {georeference:{lat:'-16.718477', long:'-49.257404'},data:{id:'441',nombre:'Pantanal Produtos Veterinários',descripcion:'Tel: (62) 3275-7000 Tel2:  Address: Av 4° Radial Barrio: Setor Pedro Ludovico Number: 744 Localidad: Goiânia Estado: Goiânia CP:  Email: jcspantanal@hotmail.com Web: '}},
                {georeference:{lat:'-16.675528', long:'-49.292214'},data:{id:'443',nombre:'Clinica Veterinária',descripcion:'Tel: (62) 3233-2052 | 3291-8092 Tel2:  Address: R Benjamin Constant Barrio: Setor Campinas Number: 97 Localidad: Goiânia Estado: Goiânia CP: 74525-050 Email:  Web: '}},
                {georeference:{lat:'-16.686296', long:'-49.263748'},data:{id:'445',nombre:'Policlínica Veterinária Plano de Saúde Animal',descripcion:'Tel: (62) 3214-1612 Tel2:  Address: R 5 Barrio: Setor Oeste Number: 1011 Localidad: Goiânia Estado: Goiânia CP: 99999-999 Email:  Web: '}},
                {georeference:{lat:'-16.657139', long:'-49.334814'},data:{id:'449',nombre:'Clínica Veterinária e Pet Shop Pegasus',descripcion:'Tel: (62) 3597-4377 Tel2:  Address: Av Inhumas Barrio: Vila Regina Number: 478 Localidad: Goiânia Estado: Goiânia CP: 74453-540 Email: clinicapegasus@yahoo.com.br Web: http://www.clinicapegasus.com.br/'}},
                {georeference:{lat:'-16.691692', long:'-49.278138'},data:{id:'451',nombre:'Clínica Veterinária Pitt Bull',descripcion:'Tel: (62) 3261-9329 Tel2:  Address: 9a Avenida Barrio: Setor Leste Vila Nova Number: 69 Localidad: Goiânia Estado: Goiânia CP: 74643-080 Email:  Web: '}},
                {georeference:{lat:'-14.526367', long:'-49.136973'},data:{id:'453',nombre:'Dog-center',descripcion:'Tel: (62) 3357-2599 Tel2:  Address: Tocantins Barrio: Setor Central Number: 1 Localidad: Uruaçu Estado: Goiânia CP: 76400-000 Email:  Web: '}},
                {
                    georeference:{lat:'-23.530401', long:'-46.684488'},
                    data:{id:'v1',nombre:'Veterinaria A',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.531537', long:'-46.680108'},
                    data:{id:'v2',nombre:'Veterinaria B',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.531424', long:'-46.683101'},
                    data:{id:'v3',nombre:'Veterinaria C',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.529678', long:'-46.679116'},
                    data:{id:'v4',nombre:'Veterinaria D',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.530037', long:'-46.684689'},
                    data:{id:'v5',nombre:'Veterinaria E',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.676963', long:'-58.382685'},
                    data:{id:'v6',nombre:'Veterinaria F',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.667080', long:'-58.378522'},
                    data:{id:'v7',nombre:'Veterinaria G',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.678727', long:'-58.388092'},
                    data:{id:'v8',nombre:'Veterinaria H',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-34.670857', long:'-58.381526'},
                    data:{id:'v9',nombre:'Veterinaria I',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.045393', long:'-46.519925'},
                    data:{id:'v1AA',nombre:'Veterinaria AVV',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.047999', long:'-46.520784'},
                    data:{id:'v166',nombre:'Veterinaria ASSS',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.044737', long:'-46.511782'},
                    data:{id:'v888',nombre:'Veterinaria AHJ',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.044325', long:'-46.514346'},
                    data:{id:'v99',nombre:'Veterinaria 000',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },

                {
                    georeference:{lat:'-24.046922', long:'-46.518530'},
                    data:{id:'v7KK',nombre:'Veterinaria 656',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
            ]
        };
        App.myPointGeoReference = {lat:'-23.530893', long:'-46.680588'};
        this.initializeTemplates();
        this.bindEvents();
    },
    initializeTemplates: function () {
        App.templates = {
            headerContent: "",
            footerContent: "",
            locationNavbar: "",
            mascotasListado: "",
            mascotaVista: "",
            mascotaProblemas: "",
            mascotaEvoluciones: "",
            estudiosImagenes: "",
            localPetShopInformacion: "",
            localVeterinariaInformacion: ""
        };

        this.compileTemplates();
        this.fillTemplatesContent();
    },
    bindEvents: function() {
        if ( Helper.isAccessedByMobile() ) return document.addEventListener('deviceready', this.onDeviceReady, false);
        return this.onDeviceReady();
    },
    onDeviceReady: function () {
        Helper.jqueryMobileOnPageInit(App.onPageInit);

        Helper.jqueryOnClick('#a-reload-location', function (e) {
            e.preventDefault();
        });

        Helper.jqueryMobileOnPageShow('#page-historia-clinica', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var mascotas = { mascotas:App.duenios[App.currentDuenio].mascotas};
            var html = App.templates.mascotasListado(mascotas);
            Helper.jqueryFillHTMLContent('#ul-mascotas-listview', html).listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        Helper.jqueryMobileOnPageShow('#page-mascota', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var html;
            var indexOfMascota = parseInt(App.currentMascota) - 1;
            Helper.jqueryClearHTMLContent('#div-evoluciones-listado');

            $('#div-estudios-imagenes').hide();

            var informacion = {
                nombre:App.duenios[App.currentDuenio].mascotas[indexOfMascota].nombre,
                duenio:App.duenios[App.currentDuenio].mascotas[indexOfMascota].duenio,
                sexo:App.duenios[App.currentDuenio].mascotas[indexOfMascota].sexo,
                nacimiento:App.duenios[App.currentDuenio].mascotas[indexOfMascota].nacimiento
            };

            html = App.templates.mascotaVista(informacion);
            Helper.jqueryFillHTMLContent('#div-mascota-informacion', html);

            var problemas = {problemas:App.duenios[App.currentDuenio].mascotas[indexOfMascota].problemas};

            html = App.templates.mascotaProblemas(problemas);
            Helper.jqueryFillHTMLContent('#ul-problemas-listview', html).listview('refresh');

            Helper.jqueryMobileHideAjaxLoading();
        });

        Helper.jqueryMobileOnPageShow('#page-location', function (e) {
            e.preventDefault();
            App.initializeMap();

            $("#div-share").hide();

            $("#geocomplete").geocomplete({
                details: "body",
                location: "",
                types: ["geocode", "establishment"],
                scrollwheel: true
            });

            Helper.jqueryOnClick('#a-georefence-me',function (event) {
                event.preventDefault();
                Mapa.clearMarkers();
                App.drawIntoMapCurrentPosition();
            });

            Helper.jqueryOnClick('#a-reload-location',function (event) {
                event.preventDefault();
                App.initializeMap();
            });

            Helper.jqueryOnClick('#a-georefence',function (event) {
                event.preventDefault();

                var lat = $("#lat").val();
                var lng = $("#lng").val();

                if(empty(lat) || empty(lng))
                {
                    alert("Debe seleccionar una direccion");
                    return false;
                }
                Mapa.clearMarkers();
                App.markOnMap(lat, lng, true);
            });

            Helper.jqueryOnClick('#a-georefence-petshops',function (event) {
                event.preventDefault();
                Helper.jqueryMobileShowAjaxLoading();
                Mapa.clearMarkers();
                App.drawIntoMapCurrentPosition();
                App.markPetShops();
                Helper.jqueryMobileHideAjaxLoading();
            });

            Helper.jqueryOnClick('#a-georefence-veterinarias',function (event) {
                event.preventDefault();
                Helper.jqueryMobileShowAjaxLoading();
                Mapa.clearMarkers();
                App.drawIntoMapCurrentPosition();
                App.markVeterinarias();
                Helper.jqueryMobileHideAjaxLoading();
            });
        });

        $("#ul-mascotas-listview").delegate('.a-go-to-mascota-view','click', function (e) {
            e.preventDefault();
            App.currentMascota = $(this).attr("data-id-mascota");
            Helper.jqueryMobileChangePage("#page-mascota");
        });

        $("#ul-problemas-listview").delegate('.a-show-evoluciones','click', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var idProblema = $(this).attr("data-id-problema");
            var indexProblema = parseFloat(idProblema) - 1;
            var evoluciones = {
                problema:App.duenios[0].mascotas[0].problemas[indexProblema],
                evoluciones:App.duenios[0].mascotas[0].problemas[indexProblema].evoluciones
            };
            var html = App.templates.mascotaEvoluciones(evoluciones);
            Helper.jqueryFillHTMLContent('#div-evoluciones-listado', html)
                .show()
                .find("ul#ul-evoluciones-listview").listview().listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        $("#map-canvas")
            .delegate('.a-share','click', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var idTitulo = "titulo-" + id;
                var idDescripcion = "descripcion-" + id;
                var titulo = $('#' + idTitulo).text();
                var message = 'Recomiendo ' + titulo + ' la mejor atencion by @ITHealth';
                window.plugins.socialsharing.share(message);
            })
            .delegate('.a-share-twitter','click', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var idTitulo = "titulo-" + id;
                var idDescripcion = "descripcion-" + id;
                var titulo = $('#' + idTitulo).text();
                var message = 'Recomiendo ' + titulo + ' la mejor atencion by @ITHealth';
                window.plugins.socialsharing.shareViaTwitter(message);
            })
            .delegate('.a-share-facebook','click', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var idTitulo = "titulo-" + id;
                var idDescripcion = "descripcion-" + id;
                var titulo = $('#' + idTitulo).text();
                var message = 'Recomiendo ' + titulo + ' la mejor atencion by @ITHealth';
                var image = null;
                var url = null;
                var messageCallBack = 'La información fue copiada a la papelera.\n Puede pegarla para compartir!';

                window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, image, url, messageCallBack,
                    function() {
                        console.log('share ok')
                    },
                    function(errormsg){
                        alert(errormsg)
                    }
                );
            });

        $("#div-evoluciones-listado").delegate('.a-estudio-ver-imagenes','click', function (e) {
            event.preventDefault();
            var html = App.templates.estudiosImagenes();
            Helper.jqueryFillHTMLContent('#div-estudios-imagenes', html)
                .show()
                .find("ul#ul-estudios-imagenes-listview").listview().listview('refresh');
        });
    },
    onPageInit: function () {
        $.mobile.defaultPageTransition = 'none';
        Helper.jqueryMobileHideAjaxLoading();
    },
    fillTemplatesContent: function () {
        this.fillHeaderContent();
        this.fillFooterContent();
    },
    fillHeaderContent: function () {
        Helper.jqueryFillHTMLContent('.header-content', App.templates.headerContent({title:''}));
        Helper.jqueryFillHTMLContent('.header-content#header-home', App.templates.headerContent({title:'Home'}));
        Helper.jqueryFillHTMLContent('.header-content#header-location', App.templates.headerContent({
            title:'Location',
            html:App.templates.locationNavbar()
        }));
        Helper.jqueryFillHTMLContent('.header-content#header-app-info', App.templates.headerContent({title:'©2014 App'}));
        Helper.jqueryFillHTMLContent('.header-content#header-historia-clinica', App.templates.headerContent({title:'Pets'}));
    },
    fillFooterContent: function () {
        Helper.jqueryFillHTMLContent('.footer-content', App.templates.footerContent());
    },
    compileTemplates: function () {
        var source;

        source = Helper.jqueryGetHTMLFromField('#header-content');
        App.templates.headerContent = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#footer-content');
        App.templates.footerContent = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#location-navbar');
        App.templates.locationNavbar = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-listado');
        App.templates.mascotasListado = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-vista');
        App.templates.mascotaVista = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-problemas');
        App.templates.mascotaProblemas = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-evoluciones');
        App.templates.mascotaEvoluciones = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#local-petshop-informacion');
        App.templates.localPetShopInformacion = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#local-veterinaria-informacion');
        App.templates.localVeterinariaInformacion = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#estudio-imagenes');
        App.templates.estudiosImagenes = Handlebars.compile(source);

    },
    onSuccess: function (position) {

        var latitude = position.coords.latitude || null;
        var longitude = position.coords.longitude || null;

        App.myPointGeoReference.lat = latitude;
        App.myPointGeoReference.long = longitude;

        App.markOnMap(latitude, longitude, true, function (map, googleMapsLatLng) {
            var populationOptions = {
                strokeColor: '#FF0000',
                strokeOpacity: 0.1,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: googleMapsLatLng,
                radius: 5 * 100
            };
            if(App.cityCircle) App.cityCircle.setMap(null);
            App.cityCircle = new google.maps.Circle(populationOptions);
        });
        Helper.jqueryMobileHideAjaxLoading();

    },
    onError: function (error) {
        Helper.jqueryMobileHideAjaxLoading();
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    },
    markOnMap: function(lat, long, center, callback) {
        var place = {
            lat:lat,
            lng:long,
            center:(center || false)
        };
        var cb = callback || null;
        Mapa.addMarker(place, cb);
    },
    initializeMap: function () {
        var optionsMap = {
            zoom: 4,
            center: new google.maps.LatLng(-38.416097, -63.616671999999994),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        Mapa.initializeMap(optionsMap, document.getElementById("map-canvas"));
    },
    drawIntoMapCurrentPosition: function () {
        navigator.geolocation.getCurrentPosition(App.onSuccess, App.onError,{enableHighAccuracy: true});
    },
    markPetShops: function () {
        $.each(App.locales.petShops,function(index,petShop){
            App.markOnMap(petShop.georeference.lat, petShop.georeference.long, false, function (map, googleMapsLatLng, marker) {
                var contentInfoWindow = App.templates.localPetShopInformacion({
                    id: petShop.data.id,
                    titulo: petShop.data.nombre,
                    descripcion: petShop.data.descripcion
                });
                Mapa.addPopUP(marker, contentInfoWindow);
            });
        });
    },
    markVeterinarias: function () {
        $.each(App.locales.veterinarias,function(index,veterinaria){
            App.markOnMap(veterinaria.georeference.lat, veterinaria.georeference.long, false, function (map, googleMapsLatLng, marker) {
                var contentInfoWindow = App.templates.localVeterinariaInformacion({
                    id: veterinaria.data.id,
                    titulo: veterinaria.data.nombre,
                    doctor: veterinaria.data.doctor,
                    descripcion: veterinaria.data.descripcion
                });
                Mapa.addPopUP(marker, contentInfoWindow);
            });
        });
    }
};