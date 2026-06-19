import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── EDIFICIO KUBOO TOBOROCHI ─── */
// Frontales kuboo
import kubooFrontal1 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-1.jpeg";
import kubooFrontal9 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-9.jpeg";
import kuboPruebaBw from "../assets/EDIFICIO KUBOO TOBOROCHI/kubo-prueba-bw.jpg";
// Interiores kuboo
import kubooInterior2 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-2.jpeg";
import kubooInterior3 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-3.jpeg";
import kubooInterior4 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-4.jpeg";
// Áreas verdes kuboo
import kubooInteriorArbol1 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-arbol-1.jpeg";
import kubooInteriorArbol4 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-arbol-4.jpg";
// Terraza kuboo
import kubooTerraza3 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-3.jpeg";
import kubooTerrazaPiscina1 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-piscina-1.jpeg";
import kubooTerrazaPiscina2 from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-piscina-2.jpeg";

/* ─── EDIFICIO HV ─── */
import edificioHV1 from "../assets/EDIFICIO HV/edificio-HV-1.jpeg";
import edificioHV2 from "../assets/EDIFICIO HV/edificio-HV-2.jpeg";
import edificioHV3 from "../assets/EDIFICIO HV/edificio-HV-3.jpeg";

/* ─── SHOWROOM KTM ─── */
// Frontal ktm
import ktmFrontal1 from "../assets/SHOWRROM KTM/ktm-frontal-1.png";
// Interiores ktm
import ktmInterior1 from "../assets/SHOWRROM KTM/ktm-interior-1.png";
import ktmInterior2 from "../assets/SHOWRROM KTM/ktm-interior-2.png";
import ktmInterior3 from "../assets/SHOWRROM KTM/ktm-interior-3.png";
import ktmInterior4 from "../assets/SHOWRROM KTM/ktm-interior-4.jpg";
import ktmInterior5 from "../assets/SHOWRROM KTM/ktm-interior-5.jpg";
import ktmPlano1 from "../assets/SHOWRROM KTM/ktm-plano-1.jpg";

/* ─── STAND HONDA ─── */
import hondaFrontal1 from "../assets/STAND HONDA/honda-frontal-1.jpeg";
import hondaFrontal2 from "../assets/STAND HONDA/honda-frontal-2.jpeg";
import hondaFrontal3 from "../assets/STAND HONDA/honda-frontal-3.jpeg";
import hondaFrontal4 from "../assets/STAND HONDA/honda-frontal-4.jpeg";
import hondaPlano1 from "../assets/STAND HONDA/honda-plano-1.jpg";
import hondaPlano2 from "../assets/STAND HONDA/honda-plano-2.jpg";

/* ─── LA FONTANA ─── */
// Churrasquera la fontana
import fontanaChurrasquera1 from "../assets/LA FONTANA/fontana-churrasquera-1.jpeg";
import fontanaChurrasquera2 from "../assets/LA FONTANA/fontana-churrasquera-2.jpeg";
import fontanaChurrasquera4 from "../assets/LA FONTANA/fontana-churrasquera-4.jpeg";
// Patio la fontana
import fontanaPatio1 from "../assets/LA FONTANA/fontana-patio-1.jpeg";
import fontanaPatio2 from "../assets/LA FONTANA/fontana-patio-2.jpeg";
// Piscina la fontana
import fontanaPiscina1 from "../assets/LA FONTANA/fontana-piscina-1.jpeg";
import fontanaPiscina2 from "../assets/LA FONTANA/fontana-piscina-2.jpeg";

/* ─── VIVIENDA FERRUFINO ─── */
// Exterior vivienda ferrufino
import ferrufinoExterior1 from "../assets/VIVIENDA FERRUFINO/ferrufino-exterior-1.jpeg";
// Interiores vivienda ferrufino
import ferrufinoInterior1 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-1.jpeg";
import ferrufinoInterior2 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-2.jpeg";
import ferrufinoInterior3 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-3.jpeg";
import ferrufinoInterior4 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-4.jpeg";
import ferrufinoInterior5 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-5.jpeg";
import ferrufinoInterior6 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-6.jpeg";
import ferrufinoInterior7 from "../assets/VIVIENDA FERRUFINO/ferrufino-interior-7.jpeg";
// Piscina vivienda ferrufino
import ferrufinoPiscina1 from "../assets/VIVIENDA FERRUFINO/ferrufino-piscina-1.jpeg";
import ferrufinoPiscina2 from "../assets/VIVIENDA FERRUFINO/ferrufino-piscina-2.jpeg";
import ferrufinoPiscina3 from "../assets/VIVIENDA FERRUFINO/ferrufino-piscina-3.jpeg";
import ferrufinoPiscina4 from "../assets/VIVIENDA FERRUFINO/ferrufino-piscina-4.jpeg";

/* ─── VIVIENDA SALVATIERRA ─── */
import salvatierraFrontal2 from "../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-2.jpeg";
import salvatierraFrontal3 from "../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-3.jpeg";
import salvatierraFrontal4 from "../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-4.jpg";
import salvatierraFrontal5 from "../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-5.jpg";
import salvatierraInterior1 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-1.jpeg";
import salvatierraInterior2 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-2.jpeg";
import salvatierraInterior3 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-3.jpeg";
import salvatierraInterior4 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-4.jpeg";
import salvatierraInterior5 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-5.jpeg";
import salvatierraInterior6 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-6.jpeg";
import salvatierraInterior7 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-7.jpeg";
import salvatierraInterior9 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-9.jpeg";
import salvatierraInterior10 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-10.jpeg";
import salvatierraInterior11 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-11.jpeg";
import salvatierraInterior12 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-12.jpeg";
import salvatierraInterior14 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-14.jpeg";
import salvatierraInterior15 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-15.jpg";
import salvatierraInterior16 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-16.jpg";
import salvatierraInterior17 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-17.jpg";
import salvatierraInterior18 from "../assets/VIVIENDA SALVATIERRA/salvatierra-interior-18.jpg";

/* ─── VIVIENDA ARACELY SALVATIERRA ─── */
import aracelySalvatierraFrontal1 from "../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-frontal-1.png";
import aracelySalvatierraConstruccion1 from "../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-construccion-1.png";
import aracelySalvatierraConstruccion2 from "../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-construccion-2.png";
import aracelySalvatierraConstruccion3 from "../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-construccion-3.jpeg";
import aracelySalvatierraConstruccion4 from "../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-construccion-4.jpeg";

/* ─── VIVIENDA FERNANDA CABRERA ─── */
import fernandaCabreraFrontal1 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-1.png";
import fernandaCabreraFrontal2 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-2.png";
import fernandaCabreraFrontal3 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-3.png";
import fernandaCabreraConst1 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-construccion-1.jpg";
import fernandaCabreraConst2 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-construccion-2.jpg";
import fernandaCabreraConst3 from "../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-construccion-3.jpg";

/* ─── LAGUNA BRAVA ─── */
import lagunaBrava1 from "../assets/LAGUNA BRAVA/laguna-brava-1.jpeg";
import lagunaBrava2 from "../assets/LAGUNA BRAVA/laguna-brava-2.jpeg";
import lagunaBrava3 from "../assets/LAGUNA BRAVA/laguna-brava-3.jpeg";
import lagunaBrava4 from "../assets/LAGUNA BRAVA/laguna-brava-4.jpeg";
import lagunaBrava5 from "../assets/LAGUNA BRAVA/laguna-brava-5.jpeg";
import lagunaBrava6 from "../assets/LAGUNA BRAVA/laguna-brava-6.jpeg";
import lagunaBrava7 from "../assets/LAGUNA BRAVA/laguna-brava-7.jpeg";
import lagunaBrava8 from "../assets/LAGUNA BRAVA/laguna-brava-8.jpeg";
import lagunaBrava9 from "../assets/LAGUNA BRAVA/laguna-brava-9.jpg";
import lagunaBrava10 from "../assets/LAGUNA BRAVA/laguna-brava-10.jpg";
import lagunaBrava11 from "../assets/LAGUNA BRAVA/laguna-brava-11.jpg";

/* ─── PORTICO LA FONTANA ─── */
import porticoFontana1 from "../assets/PORTICO LA FONTANA/portico-fontana-1.jpeg";
import porticoFontana2 from "../assets/PORTICO LA FONTANA/portico-fontana-2.jpeg";
import porticoFontana3 from "../assets/PORTICO LA FONTANA/portico-fontana-3.jpeg";
import porticoFontana4 from "../assets/PORTICO LA FONTANA/portico-fontana-4.jpeg";

/* ─── PISCINA CIUDAD JARDIN ─── */
// import ciudadJardin3 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-3.jpeg";
import ciudadJardin5 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-5.jpeg";
import ciudadJardin6 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-6.jpeg";
import ciudadJardin7 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-7.jpeg";
// import ciudadJardin4 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-4.jpeg";
import ciudadJardinConstruccion3 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-3.png";
import ciudadJardinConstruccion4 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-4.png";
import ciudadJardinConstruccion7 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-7.jpeg";
import ciudadJardinConstruccion8 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-8.jpeg";
import ciudadJardinConstruccion9 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-9.jpeg";
import ciudadJardinPlano1 from "../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-plano-1.png";

/* ─── PISCINA EMILENE ─── */
import piscinaEmilene1 from "../assets/PISCINA EMILENE/piscina-emilene-1.jpeg";
import piscinaEmilene2 from "../assets/PISCINA EMILENE/piscina-emilene-2.jpeg";
import piscinaEmilene3 from "../assets/PISCINA EMILENE/piscina-emilene-3.jpeg";

/* ─── LOMAS DE ARENA ─── */
import lomasArenaFrontal1 from "../assets/LOMAS DE ARENA/lomas-arena-frontal-1.jpeg";
import lomasArenaFrontal2 from "../assets/LOMAS DE ARENA/lomas-arena-frontal-2.jpeg";
import lomasArenaFrontal3 from "../assets/LOMAS DE ARENA/lomas-arena-frontal-3.jpeg";
import lomasArenaFrontal4 from "../assets/LOMAS DE ARENA/lomas-arena-frontal-4.jpg";
import lomasArenaExterior1 from "../assets/LOMAS DE ARENA/lomas-arena-exterior-1.jpg";
import lomasArenaInterior1 from "../assets/LOMAS DE ARENA/lomas-arena-interior-1.jpg";
import lomasArenaInterior2 from "../assets/LOMAS DE ARENA/lomas-arena-interior-2.jpg";
import lomasArenaPiscina1 from "../assets/LOMAS DE ARENA/lomas-arena-piscina-1.jpeg";
import lomasArenaPiscina2 from "../assets/LOMAS DE ARENA/lomas-arena-piscina-2.jpeg";

/* ─── REMODELACION LAS PALMAS ─── */
import lasPalmasFrontal1 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-frontal-1.jpeg";
import lasPalmasFrontal2 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-frontal-2.jpeg";
import lasPalmasInterior1 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-1.jpeg";
import lasPalmasInterior2 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-2.jpeg";
import lasPalmasInterior3 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-3.jpeg";
import lasPalmasInterior4 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-4.jpeg";
import lasPalmasInterior5 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-5.jpeg";
import lasPalmasInterior6 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-6.jpeg";
import lasPalmasInterior7 from "../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-7.jpeg";

/* ─── GALPON AUTOBOL 3 ─── */
import autobolFrontal1 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-1.jpeg";
import autobolFrontal2 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-2.jpeg";
import autobolFrontal3 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-3.jpeg";
import autobolFrontal4 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-4.jpeg";
import autobol3Interior1 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-interior-1.jpg";
import autobol3Interior2 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-interior-2.jpg";
import autobol3Plano1 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-plano-1.png";
import autobol3Plano2 from "../assets/GALPON AUTOBOL 3/galpon-autobol-3-plano-2.jpg";

/* ─── GALPON AUTOBOL 4 ─── */
import autobol4Frontal1 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-1.jpeg";
import autobol4Frontal2 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-2.jpeg";
import autobol4Frontal3 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-3.jpeg";
import autobol4Plano1 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-plano-1.png";
import autobol4Plano2 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-plano-2.png";
import autobol4Plano3 from "../assets/GALPON AUTOBOL 4/galpon-autobol-4-plano-3.png";

/* ─── GALPON AUTOBOL CENTER 1 ─── */
import autobolCenter1Frontal1 from "../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-frontal-1.png";
import autobolCenter1Frontal2 from "../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-frontal-2.jpeg";
import autobolCenter1Interior1 from "../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-interior-1.jpg";
import autobolCenter1Plano1 from "../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-plano-1.png";
import autobolCenter1Plano2 from "../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-plano-2.jpg";

/* ─── GALPOTON AUTOBOL CENTER 2 ─── */
import autobolCenter2Frontal1 from "../assets/GALPOTON AUTOBOL CENTER 2/galpon-autobol-center-2-frontal-1.png";
import autobolCenter2Interior1 from "../assets/GALPOTON AUTOBOL CENTER 2/galpon-autobol-center-2-interior-1.jpg";
import autobolCenter2Interior2 from "../assets/GALPOTON AUTOBOL CENTER 2/galpon-autobol-center-2-interior-2.jpg";
import autobolCenter2Plano1 from "../assets/GALPOTON AUTOBOL CENTER 2/galpon-autobol-center-2-plano-1.jpg";

/* ─── GALPON HONDA ─── */
import galponHondaFrontal1 from "../assets/GALPON HONDA/galpon-honda-frontal-1.jpeg";
import galponHondaFrontal2 from "../assets/GALPON HONDA/galpon-honda-frontal-2.jpeg";
import galponHondaFrontal3 from "../assets/GALPON HONDA/galpon-honda-frontal-3.jpeg";
import galponHondaFrontal4 from "../assets/GALPON HONDA/galpon-honda-frontal-4.jpeg";
import galponHondaFrontal5 from "../assets/GALPON HONDA/galpon-honda-frontal-5.jpg";
import galponHondaInterior1 from "../assets/GALPON HONDA/galpon-honda-interior-1.jpeg";
import galponHondaInterior2 from "../assets/GALPON HONDA/galpon-honda-interior-2.jpeg";
import galponHondaInterior3 from "../assets/GALPON HONDA/galpon-honda-interior-3.jpeg";
import galponHondaInterior4 from "../assets/GALPON HONDA/galpon-honda-interior-4.jpeg";
import galponHondaInterior5 from "../assets/GALPON HONDA/galpon-honda-interior-5.jpeg";
import galponHondaInterior6 from "../assets/GALPON HONDA/galpon-honda-interior-6.jpeg";
import galponHondaInterior7 from "../assets/GALPON HONDA/galpon-honda-interior-7.jpeg";
import galponHondaInterior8 from "../assets/GALPON HONDA/galpon-honda-interior-8.jpg";
import galponHondaInterior9 from "../assets/GALPON HONDA/galpon-honda-interior-9.jpg";
import galponHondaPlano1 from "../assets/GALPON HONDA/galpon-honda-plano-1.png";

/* ─── GALPON VISAL 2024 ─── */
import visalFrontal1 from "../assets/GALPON VISAL 2024/galpon-visal-frontal-1.jpeg";
import visalFrontal2 from "../assets/GALPON VISAL 2024/galpon-visal-frontal-2.jpeg";
import visalFrontal3 from "../assets/GALPON VISAL 2024/galpon-visal-frontal-3.jpeg";
import visalFrontal4 from "../assets/GALPON VISAL 2024/galpon-visal-frontal-4.jpeg";

/* ─── PAVIMENTO HONDA ─── */
import pavimentoHonda1 from "../assets/PAVIMENTO HONDA/pavimento-honda-1.jpeg";
import pavimentoHonda2 from "../assets/PAVIMENTO HONDA/pavimento-honda-2.jpeg";
import pavimentoHonda3 from "../assets/PAVIMENTO HONDA/pavimento-honda-3.jpeg";
import pavimentoHonda4 from "../assets/PAVIMENTO HONDA/pavimento-honda-4.jpeg";
import pavimentoHonda5 from "../assets/PAVIMENTO HONDA/pavimento-honda-5.jpeg";

/* ─── SHOWROOM BMW 3ER ANILLO ─── */
import showroomBmw3a1 from "../assets/SHOWROOM BMW 3ER ANILLO/showroom-bmw-3a-1.png";
import showroomBmw3a2 from "../assets/SHOWROOM BMW 3ER ANILLO/showroom-bmw-3a-2.png";
import showroomBmw3a3 from "../assets/SHOWROOM BMW 3ER ANILLO/showroom-bmw-3a-3.png";

/* ─── SHOWROOM BMW AV LA SALLE ─── */
import showroomBmwSalle1 from "../assets/SHOWROOM BMW AV LA SALLE/showroom-bmw-salle-1.png";
import showroomBmwSalle2 from "../assets/SHOWROOM BMW AV LA SALLE/showroom-bmw-salle-2.png";
import showroomBmwSalle3 from "../assets/SHOWROOM BMW AV LA SALLE/showroom-bmw-salle-3.jpg";

/* ─── SHOWROOM HERO ─── */
import showroomHero1 from "../assets/SHOWROOM HERO/showroom-hero-1.jpg";
import showroomHero2 from "../assets/SHOWROOM HERO/showroom-hero-2.jpg";

/* ─── SHOWROOM LADA ─── */
import showroomLada1 from "../assets/SHOWROOM LADA/showroom-lada-1.jpg";
import showroomLada2 from "../assets/SHOWROOM LADA/showroom-lada-2.jpg";

/* ─── RESTAURANTE LAGUNA BRAVA ─── */
import restauranteLagunaBrava1 from "../assets/RESTAURANTE LAGUNA BRAVA/restaurante-laguna-brava-1.jpg";
import restauranteLagunaBrava2 from "../assets/RESTAURANTE LAGUNA BRAVA/restaurante-laguna-brava-2.jpg";
import restauranteLagunaBrava3 from "../assets/RESTAURANTE LAGUNA BRAVA/restaurante-laguna-brava-3.jpg";
import restauranteLagunaBravaPlano1 from "../assets/RESTAURANTE LAGUNA BRAVA/restaurante-laguna-brava-plano-1.png";

/* ─── PASTELERIA MACADAMIA ─── */
import macadamia1 from "../assets/PASTELERIA MACADAMIA/pasteleria-macadamia-1.jpg";
import macadamia2 from "../assets/PASTELERIA MACADAMIA/pasteleria-macadamia-2.jpg";
import macadamia3 from "../assets/PASTELERIA MACADAMIA/pasteleria-macadamia-3.jpg";

/* ─── PETSHOP LA MASCOTERIA ─── */
import mascoteria1 from "../assets/PETSHOP LA MASCOTERIA/mascoteria-frontal-1.jpg";
import mascoteria2 from "../assets/PETSHOP LA MASCOTERIA/mascoteria-plano-1.jpg";

/* ─── TALLER PEUGEOT ─── */
import tallerPeugeotFrontal1 from "../assets/TALLER PEUGEOT/taller-peugeot-frontal-1.jpg";
import tallerPeugeotInterior1 from "../assets/TALLER PEUGEOT/taller-peugeot-interior-1.jpg";
import tallerPeugeotInterior2 from "../assets/TALLER PEUGEOT/taller-peugeot-interior-2.jpg";
import tallerPeugeotInterior3 from "../assets/TALLER PEUGEOT/taller-peugeot-interior-3.jpg";

/* ─── OFICINAS HONDA ─── */
import oficinasHonda1 from "../assets/OFICINAS HONDA/oficina-honda-1.png";
import oficinasHonda2 from "../assets/OFICINAS HONDA/oficina-honda-2.jpg";
import oficinasHonda3 from "../assets/OFICINAS HONDA/oficina-honda-3.png";
import oficinasHonda4 from "../assets/OFICINAS HONDA/oficina-honda-4.jpg";

/* ─── GALPON HONDA AUTOS USADOS ─── */
import galponHondaUsadosFrontal1 from "../assets/GALPON HONDA AUTOS USADOS/galpon-honda-usados-frontal-1.jpg";
import galponHondaUsadosPlano1 from "../assets/GALPON HONDA AUTOS USADOS/galpon-honda-usados-plano-1.png";
import galponHondaUsadosPlano2 from "../assets/GALPON HONDA AUTOS USADOS/galpon-honda-usados-plano-2.png";

/* ─── EDIFICIO RIVER VIEW ─── */
import riverViewFrontal1 from "../assets/EDIFICIO RIVER VIEW/river-view-frontal-1.jpg";
import riverViewFrontal2 from "../assets/EDIFICIO RIVER VIEW/river-view-frontal-2.jpg";

/* ─── PISCINA SCZ DE LA COLINA ─── */
import piscinaSczColina1 from "../assets/PISCINA SCZ DE LA COLINA/piscina-scz-colina-1.png";
import piscinaSczColina2 from "../assets/PISCINA SCZ DE LA COLINA/piscina-scz-colina-2.png";
import piscinaSczColina3 from "../assets/PISCINA SCZ DE LA COLINA/piscina-scz-colina-3.png";
import piscinaSczColinaPlano1 from "../assets/PISCINA SCZ DE LA COLINA/piscina-scz-colina-plano-1.png";
import piscinaSczColinaPlano2 from "../assets/PISCINA SCZ DE LA COLINA/piscina-scz-colina-plano-2.png";

/* ─── VIVIENDA MFC ─── */
import mfcFrontal1 from "../assets/VIVIENDA MFC/mfc-frontal-1.jpg";
import mfcFrontal2 from "../assets/VIVIENDA MFC/mfc-frontal-2.jpg";
import mfcInterior1 from "../assets/VIVIENDA MFC/mfc-interior-1.jpg";
import mfcInterior2 from "../assets/VIVIENDA MFC/mfc-interior-2.jpg";

/* ─── VIVIENDAS LA FONTANA ─── */
import viviendasFontana1 from "../assets/VIVIENDAS LA FONTANA/viviendas-fontana-1.jpg";
import viviendasFontana2 from "../assets/VIVIENDAS LA FONTANA/viviendas-fontana-2.png";
import viviendasFontana3 from "../assets/VIVIENDAS LA FONTANA/viviendas-fontana-3.png";
import viviendasFontana4 from "../assets/VIVIENDAS LA FONTANA/viviendas-fontana-4.png";

/* ─── Categories ─── */
const CATEGORIES = [
	"Todos",
	"Residencial",
	"Comercial",
	"Áreas Sociales",
	"Industrial",
];

/* ─── Project Data ─── */
const projects = [
	{
		id: 1,
		status: "terminado",
		title: "Edificio Kuboo Toborochi",
		category: "Comercial",
		image: kubooFrontal1,
		gallery: [
			kubooFrontal1,
			kubooFrontal9,
			kuboPruebaBw,
			kubooInterior2,
			kubooInterior3,
			kubooInterior4,
			kubooInteriorArbol1,
			kubooInteriorArbol4,
			kubooTerraza3,
			kubooTerrazaPiscina1,
			kubooTerrazaPiscina2,
		],
		desc: "Edificio corporativo con fachada vanguardista, amplias áreas verdes interiores y piscina en terraza con vistas panorámicas.",
	},
	{
		id: 2,
		status: "terminado",
		title: "Showroom KTM",
		category: "Comercial",
		image: ktmFrontal1,
		gallery: [
			ktmFrontal1,
			ktmInterior1,
			ktmInterior2,
			ktmInterior3,
			ktmInterior4,
			ktmInterior5,
			ktmPlano1,
		],
		desc: "Showroom de exposición automotriz diseñado para realzar la marca KTM, con iluminación estratégica y circulación fluida.",
	},
	{
		id: 3,
		status: "terminado",
		title: "Edificio HV",
		category: "Comercial",
		image: edificioHV1,
		gallery: [edificioHV1, edificioHV2, edificioHV3],
		desc: "Edificio de uso mixto con fachada contemporánea, optimizado para oficinas y locales comerciales de alto tráfico.",
	},
	{
		id: 4,
		status: "terminado",
		title: "Showroom BMW 3er Anillo",
		category: "Comercial",
		image: showroomBmw3a1,
		gallery: [
			showroomBmw3a1, 
			showroomBmw3a2, 
			showroomBmw3a3
		],
		desc: "Showroom premium para la marca BMW sobre el 3er anillo, con acabados de lujo acordes a los estándares de la marca.",
	},
	{
		id: 5,
		status: "terminado",
		title: "Showroom BMW Av. La Salle",
		category: "Comercial",
		image: showroomBmwSalle1,
		gallery: [
			showroomBmwSalle1, 
			showroomBmwSalle2, 
			// showroomBmwSalle3
		],
		desc: "Segunda sede de exposición BMW, con diseño minimalista y materiales nobles que reflejan la identidad de la marca.",
	},
	{
		id: 6,
		status: "terminado",
		title: "Stand Honda",
		category: "Comercial",
		image: hondaFrontal4,
		gallery: [
			hondaFrontal4,
			hondaFrontal1,
			hondaFrontal2,
			hondaFrontal3,
			hondaPlano1,
			hondaPlano2,
		],
		desc: "Stand corporativo para ferias con impacto visual máximo, diseñado para destacar la gama de productos Honda.",
	},
	{
		id: 7,
		status: "terminado",
		title: "Showroom Lada",
		category: "Comercial",
		image: showroomLada1,
		gallery: [showroomLada1, showroomLada2],
		desc: "Espacio de exhibición automotriz para la marca Lada, con distribución eficiente y ambientación que resalta los vehículos.",
	},
	{
		id: 8,
		status: "terminado",
		title: "Restaurante Laguna Brava",
		category: "Comercial",
		image: restauranteLagunaBrava1,
		gallery: [
			restauranteLagunaBrava1,
			restauranteLagunaBrava2,
			restauranteLagunaBrava3,
			restauranteLagunaBravaPlano1,
		],
		desc: "Proyecto de interiorismo y construcción de restaurante con terraza exterior, mobiliario a medida y ambientación cálida.",
	},
	// {
	// 	id: 9,
	// 	status: "terminado",
	// 	title: "Stand Mini",
	// 	category: "Comercial",
	// 	image: "",
	// 	gallery: [],
	// 	desc: "Stand para ferias de la marca Mini, con diseño compacto y elegante que evoca la esencia del modelo.",
	// },
	{
		id: 10,
		status: "terminado",
		title: "Pastelería Artesanal Macadamia",
		category: "Comercial",
		image: macadamia1,
		gallery: [macadamia1, macadamia2, macadamia3],
		desc: "Diseño y equipamiento de pastelería artesanal con énfasis en la experiencia del cliente y la exhibición de productos.",
	},
	{
		id: 11,
		status: "terminado",
		title: "Petshop La Mascotería",
		category: "Comercial",
		image: mascoteria1,
		gallery: [mascoteria1, mascoteria2],
		desc: "Tienda especializada en productos para mascotas con diseño alegre y funcional, pensado para el bienestar animal y la comodidad del cliente.",
	},
	{
		id: 12,
		status: "terminado",
		title: "Taller Peugeot",
		category: "Comercial",
		image: tallerPeugeotInterior1,
		gallery: [
			tallerPeugeotFrontal1,
			tallerPeugeotInterior1,
			tallerPeugeotInterior2,
			tallerPeugeotInterior3,
		],
		desc: "Taller automotriz oficial Peugeot con distribución optimizada para mantenimiento vehicular y atención al cliente.",
	},
	{
		id: 13,
		status: "en_desarrollo",
		title: "La Fontana",
		category: "Áreas Sociales",
		image: fontanaPiscina1,
		gallery: [
			fontanaChurrasquera1,
			fontanaChurrasquera2,
			fontanaChurrasquera4,
			fontanaPatio1,
			fontanaPatio2,
			fontanaPiscina1,
			fontanaPiscina2,
		],
		desc: "Área social de condominio con piscina, churrasquera y patio exterior, con acabados de lujo pensados para el disfrute colectivo.",
	},
	{
		id: 14,
		status: "terminado",
		title: "Vivienda Ferrufino",
		category: "Residencial",
		image: ferrufinoPiscina4,
		gallery: [
			ferrufinoExterior1,
			ferrufinoInterior1,
			ferrufinoInterior2,
			ferrufinoInterior3,
			ferrufinoInterior4,
			ferrufinoInterior5,
			ferrufinoInterior6,
			ferrufinoInterior7,
			ferrufinoPiscina1,
			// ferrufinoPiscina2,
			ferrufinoPiscina3,
			ferrufinoPiscina4,
		],
		desc: "Vivienda residencial de lujo con diseño contemporáneo, interiores de alto nivel y piscina privada con acabados premium.",
	},
	{
		id: 15,
		status: "terminado",
		title: "Vivienda J.C.S.",
		category: "Residencial",
		image: salvatierraFrontal2,
		gallery: [
			salvatierraFrontal2,
			salvatierraFrontal3,
			salvatierraFrontal4,
			salvatierraFrontal5,
			salvatierraInterior1,
			salvatierraInterior2,
			// salvatierraInterior3,
			salvatierraInterior4,
			salvatierraInterior5,
			salvatierraInterior6,
			salvatierraInterior7,
			salvatierraInterior9,
			salvatierraInterior10,
			salvatierraInterior11,
			// salvatierraInterior12,
			salvatierraInterior14,
			salvatierraInterior15,
			salvatierraInterior16,
			salvatierraInterior17,
			salvatierraInterior18,
		],
		desc: "Residencia elegante que combina diseño contemporáneo con alta funcionalidad, espacios abiertos y acabados de primera calidad.",
	},
	{
		id: 16,
		status: "en_desarrollo",
		title: "Vivienda A.S.",
		category: "Residencial",
		image: aracelySalvatierraFrontal1,
		gallery: [
			aracelySalvatierraFrontal1,
			aracelySalvatierraConstruccion1,
			aracelySalvatierraConstruccion2,
			aracelySalvatierraConstruccion3,
			aracelySalvatierraConstruccion4,
		],
		desc: "Proyecto residencial en construcción con enfoque en espacios abiertos, luz natural y una propuesta arquitectónica moderna.",
	},
	{
		id: 17,
		status: "en_desarrollo",
		title: "Vivienda F.C.",
		category: "Residencial",
		image: fernandaCabreraFrontal1,
		gallery: [
			fernandaCabreraFrontal1,
			fernandaCabreraFrontal2,
			fernandaCabreraFrontal3,
			fernandaCabreraConst1,
			fernandaCabreraConst2,
			fernandaCabreraConst3,
		],
		desc: "Casa en desarrollo con diseño interior de alto nivel, volumetría distintiva y materiales seleccionados para una experiencia de vida premium.",
	},
	{
		id: 18,
		status: "terminado",
		title: "Hacienda Flia P.G.",
		category: "Residencial",
		image: lagunaBrava9,
		gallery: [
			lagunaBrava9,
			lagunaBrava2,
			lagunaBrava1,
			lagunaBrava3,
			lagunaBrava4,
			lagunaBrava5,
			lagunaBrava6,
			lagunaBrava7,
			lagunaBrava8,
			lagunaBrava10,
			lagunaBrava11,
		],
		desc: "Residencia en zona natural con diseño que integra el entorno, amplias terrazas y espacios que invitan a la contemplación del paisaje.",
	},
	// {
	// 	id: 19,
	// 	status: "en_desarrollo",
	// 	title: "Vivienda Riviera",
	// 	category: "Residencial",
	// 	image: "",
	// 	gallery: [],
	// 	desc: "Proyecto residencial de categoría con inspiración mediterránea, espacios generosos y propuesta de acabados de alta gama.",
	// },
	{
		id: 33,
		status: "terminado",
		title: "Vivienda M.F.C.",
		category: "Residencial",
		image: mfcFrontal1,
		gallery: [mfcFrontal1, mfcFrontal2, mfcInterior1, mfcInterior2],
		desc: "Vivienda residencial con diseño contemporáneo de dos volúmenes, interiores de alto nivel y espacios bien definidos.",
	},
	{
		id: 34,
		status: "en_desarrollo",
		title: "Viviendas La Fontana",
		category: "Residencial",
		image: viviendasFontana1,
		gallery: [
			viviendasFontana1,
			viviendasFontana2,
			viviendasFontana3,
			viviendasFontana4,
		],
		desc: "Conjunto de viviendas dentro del condominio La Fontana, con propuesta arquitectónica uniforme y acabados de primera calidad.",
	},
	{
		id: 20,
		status: "en_desarrollo",
		title: "Edificio River View",
		category: "Residencial",
		image: riverViewFrontal1,
		gallery: [riverViewFrontal1, riverViewFrontal2],
		desc: "Edificio residencial en desarrollo con vistas privilegiadas, diseño contemporáneo y unidades con acabados de primera.",
	},
	{
		id: 21,
		status: "terminado",
		title: "Piscina Ciudad Jardín",
		category: "Áreas Sociales",
		image: ciudadJardin6,
		gallery: [
			ciudadJardin5,
			ciudadJardin6,
			ciudadJardin7,
			// ciudadJardin3,
			// ciudadJardin4,
			// ciudadJardinConstruccion3,
			// ciudadJardinConstruccion4,
			// ciudadJardinConstruccion7,
			// ciudadJardinConstruccion8,
			// ciudadJardinConstruccion9,
			ciudadJardinPlano1,
		],
		desc: "Piscina comunitaria para urbanización Ciudad Jardín, con diseño moderno y proceso de construcción supervisado con altos estándares.",
	},
	{
		id: 35,
		status: "en_desarrollo",
		title: "Piscina SCZ de La Colina",
		category: "Áreas Sociales",
		image: piscinaSczColina1,
		gallery: [
			piscinaSczColina1,
			piscinaSczColina2,
			piscinaSczColina3,
			piscinaSczColinaPlano1,
			piscinaSczColinaPlano2,
		],
		desc: "Piscina residencial en el condominio SCZ de La Colina, con diseño de alta calidad y planimetría detallada para su correcta ejecución.",
	},
	{
		id: 22,
		status: "terminado",
		title: "Piscina E.M.",
		category: "Áreas Sociales",
		image: piscinaEmilene1,
		gallery: [piscinaEmilene1, piscinaEmilene2, piscinaEmilene3],
		desc: "Piscina residencial privada con acabados de primera calidad, diseño limpio y detalles que aportan elegancia al espacio exterior.",
	},
	{
		id: 23,
		status: "en_desarrollo",
		title: "Pórtico La Fontana",
		category: "Áreas Sociales",
		image: porticoFontana1,
		gallery: [
			porticoFontana1,
			porticoFontana2,
			porticoFontana3,
			porticoFontana4,
		],
		desc: "Pórtico de ingreso para el condominio La Fontana, con diseño arquitectónico imponente que define la identidad del conjunto.",
	},
	{
		id: 24,
		status: "terminado",
		title: "Lomas de Arena",
		category: "Residencial",
		image: lomasArenaFrontal1,
		gallery: [
			lomasArenaFrontal1,
			lomasArenaFrontal2,
			lomasArenaFrontal3,
			lomasArenaFrontal4,
			lomasArenaExterior1,
			lomasArenaInterior1,
			lomasArenaInterior2,
			// lomasArenaPiscina1,
			// lomasArenaPiscina2,
		],
		desc: "Proyecto residencial en zona privilegiada con vistas naturales, piscina integrada al paisaje y acabados contemporáneos.",
	},
	{
		id: 25,
		status: "terminado",
		title: "Remodelación Las Palmas",
		category: "Residencial",
		image: lasPalmasFrontal1,
		gallery: [
			lasPalmasFrontal1,
			lasPalmasFrontal2,
			lasPalmasInterior1,
			lasPalmasInterior2,
			lasPalmasInterior3,
			lasPalmasInterior4,
			lasPalmasInterior5,
			lasPalmasInterior6,
			lasPalmasInterior7,
		],
		desc: "Remodelación integral de vivienda con nueva distribución funcional, renovación de interiores y actualización completa de acabados.",
	},
	{
		id: 26,
		status: "terminado",
		title: "Galpón Autobol 3",
		category: "Industrial",
		image: autobolFrontal1,
		gallery: [
			autobolFrontal1,
			autobolFrontal2,
			autobolFrontal3,
			autobolFrontal4,
			autobol3Interior1,
			autobol3Interior2,
			autobol3Plano1,
			autobol3Plano2,
		],
		desc: "Galpón industrial de gran escala para operaciones automotrices de Autobol, con estructura metálica reforzada y amplia superficie útil.",
	},
	{
		id: 27,
		status: "terminado",
		title: "Galpón Autobol 4",
		category: "Industrial",
		image: autobol4Frontal1,
		gallery: [
			autobol4Frontal1, 
			autobol4Frontal2, 
			autobol4Frontal3,
			autobol4Plano1,
			autobol4Plano2,
			autobol4Plano3,
		],
		desc: "Expansión industrial del complejo Autobol con estructura de alto rendimiento y optimización de flujos operativos.",
	},
	{
		id: 28,
		status: "terminado",
		title: "Galpón Autobol Center 1",
		category: "Industrial",
		image: autobolCenter1Frontal1,
		gallery: [
			autobolCenter1Frontal1, 
			autobolCenter1Frontal2,
			autobolCenter1Interior1,
			autobolCenter1Plano1,
			autobolCenter1Plano2,
		],
		desc: "Centro industrial automotriz con diseño funcional optimizado para operaciones de recepción y despacho vehicular.",
	},
	{
		id: 29,
		status: "terminado",
		title: "Galpón Autobol Center 2",
		category: "Industrial",
		image: autobolCenter2Frontal1,
		gallery: [
			autobolCenter2Frontal1,
			autobolCenter2Interior1,
			autobolCenter2Interior2,
			autobolCenter2Plano1,
		],
		desc: "Segunda fase del complejo industrial Autobol Center, con mayor capacidad de almacenamiento y áreas de servicio ampliadas.",
	},
	{
		id: 30,
		status: "terminado",
		title: "Galpón Honda",
		category: "Industrial",
		image: galponHondaFrontal5,
		gallery: [
			galponHondaFrontal5,
			galponHondaFrontal1,
			galponHondaFrontal2,
			galponHondaFrontal3,
			galponHondaFrontal4,
			galponHondaInterior1,
			galponHondaInterior2,
			galponHondaInterior3,
			galponHondaInterior4,
			galponHondaInterior5,
			galponHondaInterior6,
			galponHondaInterior7,
			galponHondaInterior8,
			galponHondaInterior9,
			galponHondaPlano1,
		],
		desc: "Galpón corporativo para operaciones de Honda, con interiores de alta especificación y fachada institucional alineada a la imagen de marca.",
	},
	{
		id: 36,
		status: "terminado",
		title: "Galpón Honda Autos Usados",
		category: "Industrial",
		image: galponHondaUsadosFrontal1,
		gallery: [
			galponHondaUsadosFrontal1,
			galponHondaUsadosPlano1,
			galponHondaUsadosPlano2,
		],
		desc: "Galpón destinado al área de vehículos usados de Honda, con infraestructura planificada para exhibición y gestión eficiente del inventario.",
	},
	{
		id: 37,
		status: "terminado",
		title: "Oficinas Honda",
		category: "Comercial",
		image: oficinasHonda1,
		gallery: [
			oficinasHonda1,
			oficinasHonda2,
			oficinasHonda3,
			oficinasHonda4,
		],
		desc: "Diseño y construcción de oficinas corporativas para Honda, con ambientes funcionales y acabados acordes a la imagen de la marca.",
	},
	{
		id: 38,
		status: "terminado",
		title: "Showroom Hero",
		category: "Comercial",
		image: showroomHero1,
		gallery: [showroomHero1, showroomHero2],
		desc: "Showroom de exposición para la marca Hero, con diseño dinámico e iluminación destacada para la presentación de motocicletas.",
	},
	{
		id: 31,
		status: "terminado",
		title: "Galpón Visal 2024",
		category: "Industrial",
		image: visalFrontal1,
		gallery: [visalFrontal1, visalFrontal2, visalFrontal3, visalFrontal4],
		desc: "Construcción industrial para Visal 2024 con estándares modernos de calidad, estructura eficiente y acabados duraderos.",
	},
	{
		id: 32,
		status: "terminado",
		title: "Pavimento Honda",
		category: "Industrial",
		image: pavimentoHonda1,
		gallery: [
			pavimentoHonda1,
			pavimentoHonda2,
			pavimentoHonda3,
			pavimentoHonda4,
			pavimentoHonda5,
		],
		desc: "Pavimentación de alto rendimiento para las instalaciones de Honda, con materiales resistentes al tráfico pesado y acabado uniforme.",
	},
];

/* ─── Project Gallery Modal ─── */
function ProjectGalleryModal({ project, onClose }) {
	const [currentIdx, setCurrentIdx] = useState(null);

	// Prevent body scrolling when modal is open
	useEffect(() => {
		window.dispatchEvent(new Event("modalOpen"));
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
			window.dispatchEvent(new Event("modalClose"));
		};
	}, []);

	if (!project) return null;

	const images = project.gallery;
	const prev = (e) => {
		e.stopPropagation();
		setCurrentIdx((c) => (c - 1 + images.length) % images.length);
	};
	const next = (e) => {
		e.stopPropagation();
		setCurrentIdx((c) => (c + 1) % images.length);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 200,
				background: "var(--color-bg)",
				overflowY: "auto",
				padding: "2rem 1rem",
			}}
		>
			{/* Close button for Gallery Modal */}
			<button
				onClick={onClose}
				style={{
					position: "fixed",
					top: "2rem",
					right: "2rem",
					color: "var(--color-text-main)",
					background: "var(--color-surface-2)",
					border: "1px solid var(--color-border)",
					borderRadius: "50%",
					width: "48px",
					height: "48px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					zIndex: 210,
					boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
					transition: "transform 0.2s ease",
				}}
				onMouseOver={(e) =>
					(e.currentTarget.style.transform = "scale(1.05)")
				}
				onMouseOut={(e) =>
					(e.currentTarget.style.transform = "scale(1)")
				}
			>
				<X size={24} />
			</button>

			{/* Gallery Header */}
			<div
				style={{
					textAlign: "center",
					marginBottom: "3rem",
					paddingTop: "2rem",
				}}
			>
				<motion.span
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					style={{
						color: "var(--color-primary)",
						fontSize: "0.8rem",
						fontWeight: 600,
						letterSpacing: "2px",
						textTransform: "uppercase",
					}}
				>
					{project.category}
				</motion.span>
				<motion.h3
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					style={{
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						color: "var(--color-text-main)",
						marginTop: "1rem",
						fontFamily: "var(--font-heading)",
						lineHeight: 1.1,
					}}
				>
					{project.title}
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					style={{
						color: "var(--color-text-secondary)",
						maxWidth: "600px",
						margin: "1.5rem auto 0",
						fontSize: "1.1rem",
						lineHeight: 1.6,
					}}
				>
					{project.desc}
				</motion.p>
			</div>

			{/* Grid of Images */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fill, minmax(280px, 1fr))",
					gap: "1.5rem",
					maxWidth: "1400px",
					margin: "0 auto",
					paddingBottom: "4rem",
				}}
			>
				{images.map((imgSrc, idx) => (
					<motion.div
						key={idx}
						whileHover={{ scale: 1.02, y: -5 }}
						onClick={() => setCurrentIdx(idx)}
						style={{
							cursor: "pointer",
							borderRadius: "var(--radius-lg)",
							overflow: "hidden",
							boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
							background: "var(--color-surface-2)",
							position: "relative",
							aspectRatio: "4/3",
						}}
					>
						<img
							src={imgSrc}
							alt={`${project.title} - ${idx + 1}`}
							loading="lazy"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								transition: "transform 0.5s ease",
							}}
						/>
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: "rgba(0,0,0,0.1)",
								opacity: 0,
								transition: "opacity 0.3s ease",
							}}
							onMouseOver={(e) =>
								(e.currentTarget.style.opacity = "1")
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.opacity = "0")
							}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Expanded Image Viewer (Lightbox) */}
			<AnimatePresence>
				{currentIdx !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						style={{
							position: "fixed",
							inset: 0,
							zIndex: 300,
							background: "rgba(0,0,0,0.95)",
							backdropFilter: "blur(10px)",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onClick={() => setCurrentIdx(null)}
					>
						<button
							onClick={() => setCurrentIdx(null)}
							style={{
								position: "absolute",
								top: "2rem",
								right: "2rem",
								color: "#fff",
								background: "rgba(255,255,255,0.1)",
								borderRadius: "50%",
								width: "48px",
								height: "48px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								zIndex: 310,
								border: "none",
								transition: "background 0.2s ease",
							}}
							onMouseOver={(e) =>
								(e.currentTarget.style.background =
									"rgba(255,255,255,0.2)")
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.background =
									"rgba(255,255,255,0.1)")
							}
						>
							<X size={24} />
						</button>

						<div
							style={{
								position: "relative",
								maxWidth: "90vw",
								width: "100%",
								height: "85vh",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<AnimatePresence mode="wait">
								<motion.img
									key={currentIdx}
									src={images[currentIdx]}
									alt={`${project.title} - ${currentIdx + 1}`}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									style={{
										maxWidth: "100%",
										maxHeight: "100%",
										objectFit: "contain",
										borderRadius: "8px",
										boxShadow:
											"0 20px 50px rgba(0,0,0,0.5)",
									}}
								/>
							</AnimatePresence>

							{images.length > 1 && (
								<>
									<button
										onClick={prev}
										style={{
											position: "absolute",
											left: "2%",
											color: "#fff",
											background:
												"rgba(255,255,255,0.1)",
											borderRadius: "50%",
											width: "56px",
											height: "56px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											zIndex: 320,
											border: "none",
											cursor: "pointer",
											backdropFilter:
												"blur(5px)",
											transition:
												"background 0.2s ease",
										}}
										onMouseOver={(e) =>
											(e.currentTarget.style.background =
												"rgba(255,255,255,0.2)")
										}
										onMouseOut={(e) =>
											(e.currentTarget.style.background =
												"rgba(255,255,255,0.1)")
										}
									>
										<ChevronLeft size={32} />
									</button>
									<button
										onClick={next}
										style={{
											position: "absolute",
											right: "2%",
											color: "#fff",
											background:
												"rgba(255,255,255,0.1)",
											borderRadius: "50%",
											width: "56px",
											height: "56px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											zIndex: 320,
											border: "none",
											cursor: "pointer",
											backdropFilter:
												"blur(5px)",
											transition:
												"background 0.2s ease",
										}}
										onMouseOver={(e) =>
											(e.currentTarget.style.background =
												"rgba(255,255,255,0.2)")
										}
										onMouseOut={(e) =>
											(e.currentTarget.style.background =
												"rgba(255,255,255,0.1)")
										}
									>
										<ChevronRight size={32} />
									</button>
								</>
							)}
						</div>

						{/* Image Counter */}
						<div
							style={{
								position: "absolute",
								bottom: "1.5rem",
								color: "rgba(255,255,255,0.7)",
								fontSize: "0.9rem",
								letterSpacing: "2px",
							}}
						>
							{currentIdx + 1} / {images.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

/* ─── Projects Section ─── */
export default function Projects() {
	const [activeCategory, setActiveCategory] = useState("Todos");
	const [lightboxProject, setLightboxProject] = useState(null);

	useEffect(() => {
		const handleFilter = (e) => {
			setActiveCategory(e.detail);
		};
		const handleOpenLightbox = (e) => {
			const proj = projects.find((p) => p.id === e.detail);
			if (proj) setLightboxProject(proj);
		};
		window.addEventListener("filterProjects", handleFilter);
		window.addEventListener("openLightbox", handleOpenLightbox);
		return () => {
			window.removeEventListener("filterProjects", handleFilter);
			window.removeEventListener("openLightbox", handleOpenLightbox);
		};
	}, []);

	const filtered =
		activeCategory === "Todos"
			? projects
			: projects.filter((p) => p.category === activeCategory);

	const enDesarrollo = filtered.filter((p) => p.status === "en_desarrollo");
	const terminados = filtered.filter((p) => p.status === "terminado");

	const renderProject = (project) => (
		<motion.div
			key={project.id}
			layout
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.4 }}
			onClick={() => setLightboxProject(project)}
			style={{
				borderRadius: "var(--radius-lg)",
				overflow: "hidden",
				cursor: "pointer",
				position: "relative",
				border: "1px solid var(--color-border)",
				background: "var(--color-surface-2)",
			}}
			onMouseOver={(e) => {
				const img = e.currentTarget.querySelector(".project-img");
				const overlay =
					e.currentTarget.querySelector(".project-overlay");
				if (img) img.style.transform = "scale(1.08)";
				if (overlay) overlay.style.opacity = "1";
			}}
			onMouseOut={(e) => {
				const img = e.currentTarget.querySelector(".project-img");
				const overlay =
					e.currentTarget.querySelector(".project-overlay");
				if (img) img.style.transform = "scale(1)";
				if (overlay) overlay.style.opacity = "0";
			}}
		>
			<div style={{ height: "280px", overflow: "hidden" }}>
				<img
					className="project-img"
					src={project.image}
					alt={project.title}
					loading="lazy"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						transition:
							"transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
					}}
				/>
			</div>

			{/* Overlay */}
			<div
				className="project-overlay"
				style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(to top, rgba(255, 255, 255,0.95) 0%, rgba(255, 255, 255,0.4) 50%, rgba(255, 255, 255,0) 100%)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					padding: "2rem",
					opacity: 0,
					transition: "opacity 0.4s ease",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						marginBottom: "0.5rem",
					}}
				>
					<span
						style={{
							color: "var(--color-primary)",
							fontSize: "0.75rem",
							fontWeight: 700,
							letterSpacing: "2px",
							textTransform: "uppercase",
						}}
					>
						{project.category}
					</span>
					{project.status === "en_desarrollo" && (
						<span
							style={{
								background: "var(--color-primary)",
								color: "#fff",
								fontSize: "0.65rem",
								fontWeight: 700,
								padding: "0.2rem 0.6rem",
								borderRadius: "100px",
								textTransform: "uppercase",
								letterSpacing: "1px",
							}}
						>
							En Desarrollo
						</span>
					)}
				</div>
				<h3
					style={{
						fontSize: "1.4rem",
						color: "var(--color-text-main)",
						marginBottom: "0.5rem",
					}}
				>
					{project.title}
				</h3>
				<p
					style={{
						color: "var(--color-text-secondary)",
						fontSize: "0.9rem",
						lineHeight: 1.5,
					}}
				>
					{project.desc}
				</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.5rem",
						color: "var(--color-primary-light)",
						fontSize: "0.85rem",
						fontWeight: 600,
						marginTop: "1rem",
					}}
				>
					Ver galería <ArrowUpRight size={14} />
				</div>
			</div>
		</motion.div>
	);

	return (
		<>
			<section id="projects" className="section">
				<div className="container">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.7 }}
						style={{
							textAlign: "center",
							marginBottom: "3rem",
						}}
					>
						<h2
							className="section-title"
							style={{ margin: "0 auto 1.25rem" }}
						>
							Nuestros{" "}
							<span className="gradient-text-primary">
								Proyectos
							</span>
						</h2>
						<p
							className="section-subtitle"
							style={{ margin: "0 auto" }}
						>
							Explora nuestro portafolio de obras, donde la
							visión y la técnica se unen para crear
							espacios excepcionales.
						</p>
					</motion.div>

					{/* Category Filter */}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "0.5rem",
							marginBottom: "3rem",
							flexWrap: "wrap",
						}}
					>
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								style={{
									padding: "0.55rem 1.4rem",
									borderRadius: "100px",
									fontSize: "0.85rem",
									fontWeight: 500,
									transition: "all 0.3s ease",
									background:
										activeCategory === cat
											? "var(--color-primary)"
											: "rgba(0, 0, 0,0.04)",
									color:
										activeCategory === cat
											? "#fff"
											: "var(--color-text-muted)",
									border:
										activeCategory === cat
											? "none"
											: "1px solid var(--color-border)",
								}}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Project Sections */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "4rem",
						}}
					>
						{terminados.length > 0 && (
							<div>
								<h3
									style={{
										fontSize: "1.6rem",
										marginBottom: "1.5rem",
										fontFamily:
											"var(--font-heading)",
										display: "flex",
										alignItems: "center",
										gap: "0.75rem",
										color: "var(--color-text-main)",
									}}
								>
									<div
										style={{
											width: "8px",
											height: "24px",
											background:
												"var(--color-text-muted)",
											borderRadius: "4px",
										}}
									/>
									Proyectos Terminados
								</h3>
								<motion.div
									layout
									className="projects-grid"
									style={{
										display: "grid",
										gap: "1.5rem",
									}}
								>
									<AnimatePresence mode="popLayout">
										{terminados.map(
											renderProject,
										)}
									</AnimatePresence>
								</motion.div>
							</div>
						)}

						{enDesarrollo.length > 0 && (
							<div>
								<h3
									style={{
										fontSize: "1.6rem",
										marginBottom: "1.5rem",
										fontFamily:
											"var(--font-heading)",
										display: "flex",
										alignItems: "center",
										gap: "0.75rem",
										color: "var(--color-text-main)",
									}}
								>
									<div
										style={{
											width: "8px",
											height: "24px",
											background:
												"var(--color-primary)",
											borderRadius: "4px",
										}}
									/>
									Proyectos en Desarrollo
								</h3>
								<motion.div
									layout
									className="projects-grid"
									style={{
										display: "grid",
										gap: "1.5rem",
									}}
								>
									<AnimatePresence mode="popLayout">
										{enDesarrollo.map(
											renderProject,
										)}
									</AnimatePresence>
								</motion.div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Project Gallery Modal */}
			<AnimatePresence>
				{lightboxProject && (
					<ProjectGalleryModal
						project={lightboxProject}
						onClose={() => setLightboxProject(null)}
					/>
				)}
			</AnimatePresence>

			<style>{`
        .projects-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }
        
        .lightbox-nav-btn.lightbox-prev {
          left: -3rem;
        }
        .lightbox-nav-btn.lightbox-next {
          right: -3rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          
          .lightbox-nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .lightbox-nav-btn.lightbox-prev {
            left: 0.5rem;
            background: rgba(255, 255, 255, 0.5) !important;
          }
          .lightbox-nav-btn.lightbox-next {
            right: 0.5rem;
            background: rgba(255, 255, 255, 0.5) !important;
          }
        }
        
        @media (max-width: 340px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
		</>
	);
}
