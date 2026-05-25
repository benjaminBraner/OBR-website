import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── EDIFICIO KUBOO TOBOROCHI ─── */
// Frontales kuboo
import kubooFrontal1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-1.jpeg';
import kubooFrontal2 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-2.jpeg';
import kubooFrontal3 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-3.jpeg';
import kubooFrontal4 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-4.jpeg';
import kubooFrontal5 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-5.jpeg';
import kubooFrontal6 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-6.jpeg';
import kubooFrontal7 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-7.jpeg';
import kubooFrontal8 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-8.jpeg';
import kubooFrontal9 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-9.jpeg';
import kubooFrontal10 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-10.jpeg';
import kubooFrontal11 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-11.jpeg';
import kubooFrontal12 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-12.jpeg';
import kubooFrontal13 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-13.jpeg';
import kubooFrontal14 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-14.jpeg';
// Interiores kuboo
import kubooInterior1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-1.jpeg';
import kubooInterior2 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-2.jpeg';
import kubooInterior3 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-3.jpeg';
import kubooInterior4 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-4.jpeg';
// Áreas verdes kuboo
import kubooInteriorArbol1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-arbol-1.jpeg';
import kubooInteriorArbol2 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-arbol-2.jpeg';
import kubooInteriorArbol3 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-interior-arbol-3.jpeg';
// Terraza kuboo
import kubooTerraza1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-1.jpeg';
import kubooTerraza2 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-2.jpeg';
import kubooTerraza3 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-3.jpeg';
import kubooTerraza4 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-4.jpeg';
import kubooTerrazaPiscina1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-terraza-piscina-1.jpeg';
// Ubicación kuboo
import kubooUbicacion1 from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-ubicacion-1.jpeg';

/* ─── SHOWROOM KTM ─── */
// Frontal ktm
import ktmFrontal1 from '../assets/SHOWRROM KTM/ktm-frontal-1.png';
// Interiores ktm
import ktmInterior1 from '../assets/SHOWRROM KTM/ktm-interior-1.png';
import ktmInterior2 from '../assets/SHOWRROM KTM/ktm-interior-2.png';
import ktmInterior3 from '../assets/SHOWRROM KTM/ktm-interior-3.png';

/* ─── STAND HONDA ─── */
import hondaFrontal1 from '../assets/STAND HONDA/honda-frontal-1.jpeg';
import hondaFrontal2 from '../assets/STAND HONDA/honda-frontal-2.jpeg';
import hondaFrontal3 from '../assets/STAND HONDA/honda-frontal-3.jpeg';
import hondaFrontal4 from '../assets/STAND HONDA/honda-frontal-4.jpeg';

/* ─── LA FONTANA ─── */
// Churrasquera la fontana
import fontanaChurrasquera1 from '../assets/LA FONTANA/fontana-churrasquera-1.jpeg';
import fontanaChurrasquera2 from '../assets/LA FONTANA/fontana-churrasquera-2.jpeg';
import fontanaChurrasquera3 from '../assets/LA FONTANA/fontana-churrasquera-3.jpeg';
// Piscina la fontana
import fontanaPiscina1 from '../assets/LA FONTANA/fontana-piscina-1.jpeg';
import fontanaPiscina2 from '../assets/LA FONTANA/fontana-piscina-2.jpeg';
import fontanaPiscina3 from '../assets/LA FONTANA/fontana-piscina-3.jpeg';

/* ─── VIVIENDA FERRUFINO ─── */
// Exterior vivienda ferrufino
import ferrufinoExterior1 from '../assets/VIVIENDA FERRUFINO/ferrufino-exterior-1.jpeg';
// Interiores vivienda ferrufino
import ferrufinoInterior1 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-1.jpeg';
import ferrufinoInterior2 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-2.jpeg';
import ferrufinoInterior3 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-3.jpeg';
import ferrufinoInterior4 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-4.jpeg';
import ferrufinoInterior5 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-5.jpeg';
import ferrufinoInterior6 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-6.jpeg';
import ferrufinoInterior7 from '../assets/VIVIENDA FERRUFINO/ferrufino-interior-7.jpeg';
// Piscina vivienda ferrufino
import ferrufinoPiscina1 from '../assets/VIVIENDA FERRUFINO/ferrufino-piscina-1.jpeg';
import ferrufinoPiscina2 from '../assets/VIVIENDA FERRUFINO/ferrufino-piscina-2.jpeg';
import ferrufinoPiscina3 from '../assets/VIVIENDA FERRUFINO/ferrufino-piscina-3.jpeg';
import ferrufinoPiscina4 from '../assets/VIVIENDA FERRUFINO/ferrufino-piscina-4.jpeg';

/* ─── VIVIENDA SALVATIERRA ─── */
import salvatierraFrontal1 from '../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-1.jpeg';
import salvatierraFrontal2 from '../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-2.jpeg';
import salvatierraFrontal3 from '../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-3.jpeg';
import salvatierraInterior1 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-1.jpeg';
import salvatierraInterior2 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-2.jpeg';
import salvatierraInterior3 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-3.jpeg';
import salvatierraInterior4 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-4.jpeg';
import salvatierraInterior5 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-5.jpeg';
import salvatierraInterior6 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-6.jpeg';
import salvatierraInterior7 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-7.jpeg';
import salvatierraInterior8 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-8.jpeg';
import salvatierraInterior9 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-9.jpeg';
import salvatierraInterior10 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-10.jpeg';
import salvatierraInterior11 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-11.jpeg';
import salvatierraInterior12 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-12.jpeg';
import salvatierraInterior13 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-13.jpeg';
import salvatierraInterior14 from '../assets/VIVIENDA SALVATIERRA/salvatierra-interior-14.jpeg';

/* ─── VIVIENDA ARACELY SALVATIERRA ─── */
import aracelySalvatierraFrontal1 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-frontal-1.png';
import aracelySalvatierraConstruccion1 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-construccion-1.png';
import aracelySalvatierraFrontal2 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-frontal-2.jpeg';
import aracelySalvatierraFrontal3 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-frontal-3.jpeg';
import aracelySalvatierraPiscina1 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-piscina-1.png';
import aracelySalvatierraPiscina2 from '../assets/VIVIENDA ARACELY SALVATIERRA/aracely-salvatierra-piscina-2.png';

/* ─── VIVIENDA FERNANDA CABRERA ─── */
import fernandaCabreraFrontal1 from '../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-1.png';
import fernandaCabreraFrontal2 from '../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-2.png';
import fernandaCabreraFrontal3 from '../assets/VIVIENDA FERNANDA CABRERA/fernanda-cabrera-frontal-3.png';

/* ─── PISCINA CIUDAD JARDIN ─── */
import ciudadJardin1 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-1.jpeg';
import ciudadJardin2 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-2.jpeg';
import ciudadJardin3 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-3.jpeg';
import ciudadJardin4 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-4.jpeg';
import ciudadJardin5 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-5.jpeg';
import ciudadJardin6 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-6.jpeg';
import ciudadJardin7 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-7.jpeg';
import ciudadJardinConstruccion1 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-1.png';
import ciudadJardinConstruccion2 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-2.png';
import ciudadJardinConstruccion3Jpeg from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-3.jpeg';
import ciudadJardinConstruccion3Png from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-3.png';
import ciudadJardinConstruccion4Jpeg from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-4.jpeg';
import ciudadJardinConstruccion4Png from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-4.png';
import ciudadJardinConstruccion5 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-5.png';
import ciudadJardinConstruccion6 from '../assets/PISCINA CIUDAD JARDIN/piscina-ciudad-jardin-construccion-6.jpeg';

/* ─── PISCINA EMILENE ─── */
import piscinaEmilene1 from '../assets/PISCINA EMILENE/piscina-emilene-1.jpeg';
import piscinaEmilene2 from '../assets/PISCINA EMILENE/piscina-emilene-2.jpeg';
import piscinaEmilene3 from '../assets/PISCINA EMILENE/piscina-emilene-3.jpeg';

/* ─── PISCINA URB. EL DUENDE ─── */
import elDuende1 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-1.png';
// import elDuendeConstruccion1 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-construccion-1.jpeg';
import elDuendeConstruccion2 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-construccion-2.jpeg';
import elDuendeConstruccion3 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-construccion-3.jpeg';
import elDuendeConstruccion4 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-construccion-4.jpeg';
import elDuendeConstruccion5 from '../assets/PISCINA URB. EL DUENDE/piscina-urb-el-duende-construccion-5.jpeg';

/* ─── LOMAS DE ARENA ─── */
import lomasArenaFrontal1 from '../assets/LOMAS DE ARENA/lomas-arena-frontal-1.jpeg';
import lomasArenaFrontal2 from '../assets/LOMAS DE ARENA/lomas-arena-frontal-2.jpeg';
import lomasArenaFrontal3 from '../assets/LOMAS DE ARENA/lomas-arena-frontal-3.jpeg';
import lomasArenaPiscina1 from '../assets/LOMAS DE ARENA/lomas-arena-piscina-1.jpeg';
import lomasArenaPiscina2 from '../assets/LOMAS DE ARENA/lomas-arena-piscina-2.jpeg';

/* ─── REMODELACION LAS PALMAS ─── */
import lasPalmasFrontal1 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-frontal-1.jpeg';
import lasPalmasFrontal2 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-frontal-2.jpeg';
import lasPalmasInterior1 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-1.jpeg';
import lasPalmasInterior2 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-2.jpeg';
import lasPalmasInterior3 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-3.jpeg';
import lasPalmasInterior4 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-4.jpeg';
import lasPalmasInterior5 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-5.jpeg';
import lasPalmasInterior6 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-6.jpeg';
import lasPalmasInterior7 from '../assets/REMODELACION LAS PALMAS/remodelacion-las-palmas-interior-7.jpeg';

/* ─── GALPON AUTOBOL 3 ─── */
import autobolFrontal1 from '../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-1.jpeg';
import autobolFrontal2 from '../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-2.jpeg';
import autobolFrontal3 from '../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-3.jpeg';
import autobolFrontal4 from '../assets/GALPON AUTOBOL 3/galpon-autobol-3-frontal-4.jpeg';

/* ─── GALPON AUTOBOL 4 ─── */
import autobol4Frontal1 from '../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-1.jpeg';
import autobol4Frontal2 from '../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-2.jpeg';
import autobol4Frontal3 from '../assets/GALPON AUTOBOL 4/galpon-autobol-4-frontal-3.jpeg';

/* ─── GALPON AUTOBOL CENTER 1 ─── */
import autobolCenter1Frontal1 from '../assets/GALPON AUTOBOL CENTER 1/galpon-autobol-center-1-frontal-1.png';

/* ─── GALPOTON AUTOBOL CENTER 2 ─── */
import autobolCenter2Frontal1 from '../assets/GALPOTON AUTOBOL CENTER 2/galpoton-autobol-center-2-frontal-1.png';
import autobolCenter2Frontal2 from '../assets/GALPOTON AUTOBOL CENTER 2/galpoton-autobol-center-2-frontal-2.jpeg';
import autobolCenter2Interior1 from '../assets/GALPOTON AUTOBOL CENTER 2/galpoton-autobol-center-2-interior-1.png';

/* ─── GALPON HONDA ─── */
import galponHondaFrontal1 from '../assets/GALPON HONDA/galpon-honda-frontal-1.jpeg';
import galponHondaFrontal2 from '../assets/GALPON HONDA/galpon-honda-frontal-2.jpeg';
import galponHondaFrontal3 from '../assets/GALPON HONDA/galpon-honda-frontal-3.jpeg';
import galponHondaFrontal4 from '../assets/GALPON HONDA/galpon-honda-frontal-4.jpeg';
import galponHondaInterior1 from '../assets/GALPON HONDA/galpon-honda-interior-1.jpeg';
import galponHondaInterior2 from '../assets/GALPON HONDA/galpon-honda-interior-2.jpeg';
import galponHondaInterior3 from '../assets/GALPON HONDA/galpon-honda-interior-3.jpeg';
import galponHondaInterior4 from '../assets/GALPON HONDA/galpon-honda-interior-4.jpeg';
import galponHondaInterior5 from '../assets/GALPON HONDA/galpon-honda-interior-5.jpeg';
import galponHondaInterior6 from '../assets/GALPON HONDA/galpon-honda-interior-6.jpeg';
import galponHondaInterior7 from '../assets/GALPON HONDA/galpon-honda-interior-7.jpeg';

/* ─── GALPON VISAL 2024 ─── */
import visalFrontal1 from '../assets/GALPON VISAL 2024/galpon-visal-frontal-1.jpeg';
import visalFrontal2 from '../assets/GALPON VISAL 2024/galpon-visal-frontal-2.jpeg';
import visalFrontal3 from '../assets/GALPON VISAL 2024/galpon-visal-frontal-3.jpeg';
import visalFrontal4 from '../assets/GALPON VISAL 2024/galpon-visal-frontal-4.jpeg';


import pavimentoHonda1 from '../assets/PAVIMENTO HONDA/pavimento-honda-1.jpeg';
import pavimentoHonda2 from '../assets/PAVIMENTO HONDA/pavimento-honda-2.jpeg';
import pavimentoHonda3 from '../assets/PAVIMENTO HONDA/pavimento-honda-3.jpeg';
import pavimentoHonda4 from '../assets/PAVIMENTO HONDA/pavimento-honda-4.jpeg';
import pavimentoHonda5 from '../assets/PAVIMENTO HONDA/pavimento-honda-5.jpeg';


/* ─── Categories ─── */
const CATEGORIES = [
  'Todos',
  'Residencial',
  'Comercial',
  'Áreas Sociales',
  'Industrial',
  'Pavimentos',
];

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    title: 'Edificio Kuboo Toborochi',
    category: 'Comercial',
    image: kubooFrontal1,
    gallery: [
      kubooFrontal1,
      kubooFrontal2,
      kubooFrontal3,
      kubooFrontal4,
      kubooFrontal5,
      kubooFrontal6,
      kubooFrontal7,
      kubooFrontal8,
      kubooFrontal9,
      kubooFrontal10,
      kubooFrontal11,
      kubooFrontal12,
      kubooFrontal13,
      kubooFrontal14,
      kubooInterior1,
      kubooInterior2,
      kubooInterior3,
      kubooInterior4,
      kubooInteriorArbol1,
      kubooInteriorArbol2,
      kubooInteriorArbol3,
      kubooTerraza1,
      kubooTerraza2,
      kubooTerraza3,
      kubooTerraza4,
      kubooTerrazaPiscina1,
      kubooUbicacion1
    ],
    desc: 'Edificio corporativo con fachada vanguardista y áreas sociales premium.',
  },
  {
    id: 2,
    title: 'Showroom KTM',
    category: 'Comercial',
    image: ktmFrontal1,
    gallery: [
      ktmFrontal1,
      ktmInterior1,
      ktmInterior2,
      ktmInterior3
    ],
    desc: 'Showroom de exposición automotriz con diseño moderno y funcional.',
  },
  {
    id: 3,
    title: 'Stand Honda',
    category: 'Comercial',
    image: hondaFrontal4,
    gallery: [
      hondaFrontal4,
      hondaFrontal1,
      hondaFrontal2,
      hondaFrontal3,
    ],
    desc: 'Stand corporativo para ferias con impacto visual máximo.',
  },
  {
    id: 4,
    title: 'La Fontana',
    category: 'Áreas Sociales',
    image: fontanaPiscina1,
    gallery: [
      fontanaChurrasquera1,
      fontanaChurrasquera2,
      fontanaChurrasquera3,
      fontanaPiscina1,
      fontanaPiscina2,
      fontanaPiscina3
    ],
    desc: 'Área social de condominio con piscina y acabados de lujo.',
  },
  {
    id: 5,
    title: 'Vivienda Ferrufino',
    category: 'Residencial',
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
      ferrufinoPiscina2,
      ferrufinoPiscina3,
      ferrufinoPiscina4
    ],
    desc: 'Vivienda residencial de lujo con diseño contemporáneo y acabados premium.',
  },
  {
    id: 6,
    title: 'Vivienda Salvatierra',
    category: 'Residencial',
    image: salvatierraFrontal1,
    gallery: [
      salvatierraFrontal1,
      salvatierraFrontal2,
      salvatierraFrontal3,
      salvatierraInterior1,
      salvatierraInterior2,
      salvatierraInterior3,
      salvatierraInterior4,
      salvatierraInterior5,
      salvatierraInterior6,
      salvatierraInterior7,
      salvatierraInterior8,
      salvatierraInterior9,
      salvatierraInterior10,
      salvatierraInterior11,
      salvatierraInterior12,
      salvatierraInterior13,
      salvatierraInterior14
    ],
    desc: 'Residencia elegante con arquitectura minimalista y funcional.',
  },
  {
    id: 7,
    title: 'Vivienda Aracely Salvatierra',
    category: 'Residencial',
    image: aracelySalvatierraFrontal1,
    gallery: [
      aracelySalvatierraFrontal1,
      aracelySalvatierraConstruccion1
    ],
    desc: 'Proyecto residencial con enfoque en espacios abiertos y luz natural.',
  },
  {
    id: 8,
    title: 'Vivienda Fernanda Cabrera',
    category: 'Residencial',
    image: fernandaCabreraFrontal1,
    gallery: [
      fernandaCabreraFrontal1,
      fernandaCabreraFrontal2,
      fernandaCabreraFrontal3
    ],
    desc: 'Casa de lujo con diseño interior de alto nivel.',
  },
  {
    id: 9,
    title: 'Piscina Ciudad Jardín',
    category: 'Áreas Sociales',
    image: ciudadJardin3,
    gallery: [
      // ciudadJardin1,
      // ciudadJardin2,
      ciudadJardin3,
      // ciudadJardin4,
      // ciudadJardin5,
      // ciudadJardin6,
      // ciudadJardin7,
      ciudadJardinConstruccion1,
      ciudadJardinConstruccion2,
      ciudadJardinConstruccion3Jpeg,
      ciudadJardinConstruccion3Png,
      ciudadJardinConstruccion4Jpeg,
      ciudadJardinConstruccion4Png,
      ciudadJardinConstruccion5,
      ciudadJardinConstruccion6
    ],
    desc: 'Piscina para urbanización con diseño moderno y funcional.',
  },
  {
    id: 10,
    title: 'Piscina Emilene',
    category: 'Áreas Sociales',
    image: piscinaEmilene1,
    gallery: [
      piscinaEmilene1,
      piscinaEmilene2,
      piscinaEmilene3
    ],
    desc: 'Piscina residencial con acabados de primera calidad.',
  },
  {
    id: 11,
    title: 'Piscina Urb. El Duende',
    category: 'Áreas Sociales',
    image: elDuende1,
    gallery: [
      elDuende1,
      // elDuendeConstruccion1,
      elDuendeConstruccion2,
      elDuendeConstruccion3,
      elDuendeConstruccion4,
      elDuendeConstruccion5
    ],
    desc: 'Área recreativa con piscina para urbanización exclusiva.',
  },
  {
    id: 12,
    title: 'Lomas de Arena',
    category: 'Residencial',
    image: lomasArenaFrontal1,
    gallery: [
      lomasArenaFrontal1,
      lomasArenaFrontal2,
      lomasArenaFrontal3,
      lomasArenaPiscina1,
      lomasArenaPiscina2
    ],
    desc: 'Proyecto residencial en zona privilegiada con vistas naturales.',
  },
  {
    id: 13,
    title: 'Remodelación Las Palmas',
    category: 'Residencial',
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
      lasPalmasInterior7
    ],
    desc: 'Remodelación integral de vivienda con nueva distribución y acabados.',
  },
  {
    id: 14,
    title: 'Galpón Autobol 3',
    category: 'Industrial',
    image: autobolFrontal1,
    gallery: [
      autobolFrontal1,
      autobolFrontal2,
      autobolFrontal3,
      autobolFrontal4
    ],
    desc: 'Galpón industrial de gran escala para operaciones automotrices.',
  },
  {
    id: 15,
    title: 'Galpón Autobol 4',
    category: 'Industrial',
    image: autobol4Frontal1,
    gallery: [
      autobol4Frontal1,
      autobol4Frontal2,
      autobol4Frontal3  
    ],
    desc: 'Expansión industrial con estructura reforzada de alto rendimiento.',
  },
  {
    id: 16,
    title: 'Galpón Autobol Center 1',
    category: 'Industrial',
    image: autobolCenter1Frontal1,
    gallery: [
      autobolCenter1Frontal1
    ],
    desc: 'Centro industrial automotriz con diseño funcional optimizado.',
  },
  {
    id: 17,
    title: 'Galpón Autobol Center 2',
    category: 'Industrial',
    image: autobolCenter2Frontal1,
    gallery: [
      autobolCenter2Frontal1,
      autobolCenter2Frontal2,
      autobolCenter2Interior1
    ],
    desc: 'Segunda fase del complejo industrial Autobol.',
  },
  {
    id: 18,
    title: 'Galpón Honda',
    category: 'Industrial',
    image: galponHondaFrontal1,
    gallery: [
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
      galponHondaInterior7
    ],
    desc: 'Galpón corporativo para operaciones de Honda.',
  },
  {
    id: 19,
    title: 'Galpón Visal 2024',
    category: 'Industrial',
    image: visalFrontal1,
    gallery: [
      visalFrontal1,
      visalFrontal2,
      visalFrontal3,
      visalFrontal4
    ],
    desc: 'Construcción industrial con estándares modernos de calidad.',
  },
  {
    id: 20,
    title: 'Pavimento Honda',
    category: 'Pavimentos',
    image: pavimentoHonda1,
    gallery: [
      pavimentoHonda1,
      pavimentoHonda2,
      pavimentoHonda3,
      pavimentoHonda4,
      pavimentoHonda5
    ],
    desc: 'Pavimentación de alto rendimiento para operaciones de Honda.',
  },
];

/* ─── Lightbox Component ─── */
function Lightbox({ project, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  if (!project) return null;

  const images = project.gallery;
  const prev = () => setCurrentIdx((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrentIdx((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(255, 255, 255,0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          color: '#000',
          padding: '0.5rem',
          zIndex: 10,
        }}
      >
        <X size={28} />
      </button>

      {/* Project info */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        zIndex: 10,
      }} onClick={e => e.stopPropagation()}>
        <span style={{
          color: 'var(--color-primary)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          {project.category}
        </span>
        <h3 style={{ fontSize: '1.8rem', color: '#000', marginTop: '0.5rem' }}>
          {project.title}
        </h3>
      </div>

      {/* Image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxHeight: '65vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-lg)',
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="lightbox-nav-btn lightbox-prev"
              style={{
                position: 'absolute',
                color: '#000',
                background: 'rgba(0, 0, 0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="lightbox-nav-btn lightbox-next"
              style={{
                position: 'absolute',
                color: '#000',
                background: 'rgba(0, 0, 0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
              }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }} onClick={e => e.stopPropagation()}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              style={{
                width: idx === currentIdx ? '24px' : '8px',
                height: '8px',
                borderRadius: '100px',
                background: idx === currentIdx ? 'var(--color-primary)' : 'rgba(0, 0, 0,0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightboxProject, setLightboxProject] = useState(null);

  useEffect(() => {
    const handleFilter = (e) => {
      setActiveCategory(e.detail);
    };
    window.addEventListener('filterProjects', handleFilter);
    return () => window.removeEventListener('filterProjects', handleFilter);
  }, []);

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>Portafolio</div>
            <h2 className="section-title" style={{ margin: '0 auto 1.25rem' }}>
              Nuestros <span className="gradient-text-primary">Proyectos</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explora nuestro portafolio de obras, donde la visión y la técnica
              se unen para crear espacios excepcionales.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.4rem',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  background: activeCategory === cat
                    ? 'var(--color-primary)'
                    : 'rgba(0, 0, 0,0.04)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                  border: activeCategory === cat
                    ? 'none'
                    : '1px solid var(--color-border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="projects-grid"
            style={{
              display: 'grid',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxProject(project)}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-2)',
                  }}
                  onMouseOver={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    if (img) img.style.transform = 'scale(1.08)';
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    if (img) img.style.transform = 'scale(1)';
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <div style={{ height: '280px', overflow: 'hidden' }}>
                    <img
                      className="project-img"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>

                  {/* Overlay */}
                  <div
                    className="project-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(255, 255, 255,0.95) 0%, rgba(255, 255, 255,0.4) 50%, rgba(255, 255, 255,0) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '2rem',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <span style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', color: '#000', marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {project.desc}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-primary-light)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginTop: '1rem',
                    }}>
                      Ver galería <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
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
