import type { Machine, MachineCategory } from '@/components/MachineCard';
import sanySy80uImage from '@/assets/machines/sany-sy80u-1.png';
import sanySy80uImage2 from '@/assets/machines/sany-sy80u-2.png';
import sanySy80uImage3 from '@/assets/machines/sany-sy80u-3.png';
import sanySy80uImage4 from '@/assets/machines/sany-sy80u-4.png';
import sanySy80uImage5 from '@/assets/machines/sany-sy80u-5.png';
import develonDd100Image1 from '@/assets/machines/develon-dd100-1.png';
import develonDd100Image2 from '@/assets/machines/develon-dd100-2.png';
import develonDd100Image3 from '@/assets/machines/develon-dd100-3.png';
import develonDd100Image4 from '@/assets/machines/develon-dd100-4.png';
import kubotaR640r43Image1 from '@/assets/machines/kubota-r640r43-1.png';
import kubotaR640r43Image2 from '@/assets/machines/kubota-r640r43-2.png';
import kubotaR640r43Image3 from '@/assets/machines/kubota-r640r43-3.png';
import kubotaR640r43Image4 from '@/assets/machines/kubota-r640r43-4.png';
import kubotaR640r43Image5 from '@/assets/machines/kubota-r640r43-5.png';
import sanySy215cImage from '@/assets/machines/sany-sy215c.png';
import manitouMlt1040145Image1 from '@/assets/machines/manitou-mlt1040-145-1.png';
import manitouMlt1040145Image2 from '@/assets/machines/manitou-mlt1040-145-2.png';
import manitouMlt1040145Image3 from '@/assets/machines/manitou-mlt1040-145-3.png';
import manitouMlt1040145Image4 from '@/assets/machines/manitou-mlt1040-145-4.png';
import jcb9404NewImage from '@/assets/machines/jcb-940-4-new.png';
import johnDeere310lImage from '@/assets/machines/john-deere-310l-ep.png';
import merloP5018hmNewImage from '@/assets/machines/merlo-p50-18hm-new.png';
import johnDeere6430NewImage from '@/assets/machines/john-deere-6430-new.png';
import asvVt70hoNewImage from '@/assets/machines/asv-vt70ho-new.png';
import komatsuWa3208Image1 from '@/assets/machines/komatsu-wa320-8-1.png';
import komatsuWa3208Image2 from '@/assets/machines/komatsu-wa320-8-2.png';
import komatsuWa3208Image3 from '@/assets/machines/komatsu-wa320-8-3.png';
import komatsuWa3208Image4 from '@/assets/machines/komatsu-wa320-8-4.png';
import komatsuWa3208Image5 from '@/assets/machines/komatsu-wa320-8-5.png';
import caterpillarCb16Image from '@/assets/machines/caterpillar-cb16-1.png';
import caterpillarCb16Image2 from '@/assets/machines/caterpillar-cb16-2.png';
import caterpillarCb16Image3 from '@/assets/machines/caterpillar-cb16-3.png';
import caterpillarCb16Image4 from '@/assets/machines/caterpillar-cb16-4.png';
import caterpillarCb16Image5 from '@/assets/machines/caterpillar-cb16-5.png';
import gehlRs642Image from '@/assets/machines/gehl-rs6-42.png';
import johnDeere310slImage from '@/assets/machines/john-deere-310sl.png';
import caterpillarTl943cNewImage from '@/assets/machines/caterpillar-tl943c-new.png';
import caterpillar336Image1 from '@/assets/machines/caterpillar-336-1.png';
import caterpillar336Image2 from '@/assets/machines/caterpillar-336-2.png';
import caterpillar336Image3 from '@/assets/machines/caterpillar-336-3.png';
import caterpillar336Image4 from '@/assets/machines/caterpillar-336-4.png';
import hitachiZx350Image1 from '@/assets/machines/hitachi-zx350-1.png';
import hitachiZx350Image2 from '@/assets/machines/hitachi-zx350-2.png';
import hitachiZx350Image3 from '@/assets/machines/hitachi-zx350-3.png';
import hitachiZx350Image4 from '@/assets/machines/hitachi-zx350-4.png';
import johnDeere210gImage1 from '@/assets/machines/john-deere-210g-1.png';
import johnDeere210gImage2 from '@/assets/machines/john-deere-210g-2.png';
import johnDeere210gImage3 from '@/assets/machines/john-deere-210g-3.png';
import johnDeere210gImage4 from '@/assets/machines/john-deere-210g-4.png';
import caterpillar950mNewImage from '@/assets/machines/caterpillar-950m-new.png';
import johnDeere544pNewImage from '@/assets/machines/john-deere-544p-new.png';
import volvoL120h2016Image1 from '@/assets/machines/volvo-l120h-2016-1.png';
import volvoL120h2016Image2 from '@/assets/machines/volvo-l120h-2016-2.png';
import volvoL120h2016Image3 from '@/assets/machines/volvo-l120h-2016-3.png';
import volvoL120h2016Image4 from '@/assets/machines/volvo-l120h-2016-4.png';
import volvoL120h2016Image5 from '@/assets/machines/volvo-l120h-2016-5.png';
import volvoL120h2024Image1 from '@/assets/machines/volvo-l120h-2024-1.png';
import volvoL120h2024Image2 from '@/assets/machines/volvo-l120h-2024-2.png';
import volvoL120h2024Image3 from '@/assets/machines/volvo-l120h-2024-3.png';
import volvoL120h2024Image4 from '@/assets/machines/volvo-l120h-2024-4.png';
import volvoL120h2024Image5 from '@/assets/machines/volvo-l120h-2024-5.png';
import johnDeere310sl2023Image1 from '@/assets/machines/john-deere-310sl-2023-1.png';
import johnDeere310sl2023Image2 from '@/assets/machines/john-deere-310sl-2023-2.png';
import johnDeere310sl2023Image3 from '@/assets/machines/john-deere-310sl-2023-3.png';
import johnDeere310sl2023Image4 from '@/assets/machines/john-deere-310sl-2023-4.png';
import johnDeere310sl2023Image5 from '@/assets/machines/john-deere-310sl-2023-5.png';
import johnDeere333g2022Image1 from '@/assets/machines/john-deere-333g-2022-1.png';
import johnDeere333g2022Image2 from '@/assets/machines/john-deere-333g-2022-2.png';
import johnDeere333g2022Image3 from '@/assets/machines/john-deere-333g-2022-3.png';
import johnDeere333g2022Image4 from '@/assets/machines/john-deere-333g-2022-4.png';
import johnDeere333g2022Image5 from '@/assets/machines/john-deere-333g-2022-5.png';
import caterpillarD6Image from '@/assets/machines/caterpillar-d6.png';
import komatsuD65pxiNewImage from '@/assets/machines/komatsu-d65pxi-new.jpg';
import kubotaKx0404NewImage from '@/assets/machines/kubota-kx040-4-new.png';
import case321f2019Image from '@/assets/machines/case-321f-2019.png';
import case321f2023NewImage from '@/assets/machines/case-321f-2023-new.png';
import case321f2024Image1 from '@/assets/machines/case-321f-2024-1.png';
import case321f2024Image2 from '@/assets/machines/case-321f-2024-2.png';
import case321f2024Image3 from '@/assets/machines/case-321f-2024-3.png';
import case321f2024Image4 from '@/assets/machines/case-321f-2024-4.png';
import case321f2024Image5 from '@/assets/machines/case-321f-2024-5.png';
import case321f2024Image6 from '@/assets/machines/case-321f-2024-6.png';
import caterpillar938mImage from '@/assets/machines/caterpillar-938m.png';
import caterpillar938m2021NewImage from '@/assets/machines/caterpillar-938m-2021-new.png';
import caterpillar938m2022Image1 from '@/assets/machines/caterpillar-938m-2022-1.png';
import caterpillar938m2022Image2 from '@/assets/machines/caterpillar-938m-2022-2.png';
import caterpillar938m2022Image3 from '@/assets/machines/caterpillar-938m-2022-3.png';
import caterpillar938m2022Image4 from '@/assets/machines/caterpillar-938m-2022-4.png';
import jcb55z1Image from '@/assets/machines/jcb-55z-1.png';
import caseCx42dImage1 from '@/assets/machines/case-cx42d-1.png';
import caseCx42dImage2 from '@/assets/machines/case-cx42d-2.png';
import caseCx42dImage3 from '@/assets/machines/case-cx42d-3.png';
import caseCx42dImage4 from '@/assets/machines/case-cx42d-4.png';
import caseCx42dImage5 from '@/assets/machines/case-cx42d-5.png';
import wackerNeusonEz26Image from '@/assets/machines/wacker-neuson-ez26.png';
import caterpillar303ecrImage from '@/assets/machines/caterpillar-303e-cr.png';
import bobcatE50Image from '@/assets/machines/bobcat-e50.png';
import caterpillar304e2crImage1 from '@/assets/machines/caterpillar-304e2-cr-1.png';
import caterpillar304e2crImage2 from '@/assets/machines/caterpillar-304e2-cr-2.png';
import caterpillar304e2crImage3 from '@/assets/machines/caterpillar-304e2-cr-3.png';
import caterpillar304e2crImage4 from '@/assets/machines/caterpillar-304e2-cr-4.png';
import caterpillar304e2crImage5 from '@/assets/machines/caterpillar-304e2-cr-5.png';
import kubotaKx0334Image from '@/assets/machines/kubota-kx033-4-1.png';
import kubotaKx0334Image2 from '@/assets/machines/kubota-kx033-4-2.png';
import kubotaKx0334Image3 from '@/assets/machines/kubota-kx033-4-3.png';
import kubotaKx0334Image4 from '@/assets/machines/kubota-kx033-4-4.png';
import bobcatE10Image from '@/assets/machines/bobcat-e10.png';
import johnDeere333gImage from '@/assets/machines/john-deere-333g.png';
import rippaNdi665Image from '@/assets/machines/rippa-ndi665.png';
import caterpillar299d2Image from '@/assets/machines/caterpillar-299d2.png';
import caterpillar299d3Image from '@/assets/machines/caterpillar-299d3.png';
import caterpillar299d32023Image1 from '@/assets/machines/caterpillar-299d3-2023-1.png';
import caterpillar299d32023Image2 from '@/assets/machines/caterpillar-299d3-2023-2.png';
import caterpillar299d32023Image3 from '@/assets/machines/caterpillar-299d3-2023-3.png';
import caterpillar299d32023Image4 from '@/assets/machines/caterpillar-299d3-2023-4.png';
import caterpillar299d32023Image5 from '@/assets/machines/caterpillar-299d3-2023-5.png';
import caterpillar303eCr2021Image1 from '@/assets/machines/caterpillar-303e-cr-2021-1.png';
import caterpillar303eCr2021Image2 from '@/assets/machines/caterpillar-303e-cr-2021-2.png';
import caterpillar303eCr2021Image3 from '@/assets/machines/caterpillar-303e-cr-2021-3.png';
import caterpillar303eCr2021Image4 from '@/assets/machines/caterpillar-303e-cr-2021-4.png';
import caterpillar305e2cr2019Image1 from '@/assets/machines/caterpillar-305e2-cr-2019-1.png';
import caterpillar305e2cr2019Image2 from '@/assets/machines/caterpillar-305e2-cr-2019-2.png';
import caterpillar305e2cr2019Image3 from '@/assets/machines/caterpillar-305e2-cr-2019-3.png';
import caterpillar305e2cr2019Image4 from '@/assets/machines/caterpillar-305e2-cr-2019-4.png';
import caterpillar305e2cr2019Image5 from '@/assets/machines/caterpillar-305e2-cr-2019-5.png';
import caterpillar279d3Image from '@/assets/machines/caterpillar-279d3.png';
import caseTr310bImage from '@/assets/machines/case-tr310b.png';
import kubotaSvl753Image from '@/assets/machines/kubota-svl75-3.png';
import bobcatA300Image from '@/assets/machines/bobcat-a300.png';
import caterpillar305crImage1 from '@/assets/machines/caterpillar-305cr-1.png';
import caterpillar305crImage2 from '@/assets/machines/caterpillar-305cr-2.png';
import caterpillar305crImage3 from '@/assets/machines/caterpillar-305cr-3.png';
import caterpillar305crImage4 from '@/assets/machines/caterpillar-305cr-4.png';
import caterpillar305crImage5 from '@/assets/machines/caterpillar-305cr-5.png';
import caterpillar305e2crImage1 from '@/assets/machines/caterpillar-305e2-cr-1.png';
import caterpillar305e2crImage2 from '@/assets/machines/caterpillar-305e2-cr-2.png';
import caterpillar305e2crImage3 from '@/assets/machines/caterpillar-305e2-cr-3.png';
import caterpillar305e2crImage4 from '@/assets/machines/caterpillar-305e2-cr-4.png';
import caterpillar305e2crImage5 from '@/assets/machines/caterpillar-305e2-cr-5.png';
import caterpillar305e2cr2022Image1 from '@/assets/machines/caterpillar-305e2-cr-2022-1.png';
import caterpillar305e2cr2022Image2 from '@/assets/machines/caterpillar-305e2-cr-2022-2.png';
import caterpillar305e2cr2022Image3 from '@/assets/machines/caterpillar-305e2-cr-2022-3.png';
import caterpillar305e2cr2022Image4 from '@/assets/machines/caterpillar-305e2-cr-2022-4.png';
import caterpillar305e2cr2022Image5 from '@/assets/machines/caterpillar-305e2-cr-2022-5.png';
import caterpillar305e2cr2020Image1 from '@/assets/machines/caterpillar-305e2-cr-2020-1.png';
import caterpillar305e2cr2020Image2 from '@/assets/machines/caterpillar-305e2-cr-2020-2.png';
import caterpillar305e2cr2020Image3 from '@/assets/machines/caterpillar-305e2-cr-2020-3.png';
import caterpillar305e2cr2020Image4 from '@/assets/machines/caterpillar-305e2-cr-2020-4.png';
import caterpillar305e2cr2020Image5 from '@/assets/machines/caterpillar-305e2-cr-2020-5.png';
import caterpillar305e2cr2021Image1 from '@/assets/machines/caterpillar-305e2-cr-2021-1.png';
import caterpillar305e2cr2021Image2 from '@/assets/machines/caterpillar-305e2-cr-2021-2.png';
import caterpillar305e2cr2021Image3 from '@/assets/machines/caterpillar-305e2-cr-2021-3.png';
import caterpillar305e2cr2021Image4 from '@/assets/machines/caterpillar-305e2-cr-2021-4.png';
import kubotaKx0404Image1 from '@/assets/machines/kubota-kx040-4-1.png';
import kubotaKx0404Image2 from '@/assets/machines/kubota-kx040-4-2.png';
import kubotaKx0404Image3 from '@/assets/machines/kubota-kx040-4-3.png';
import kubotaKx0404Image4 from '@/assets/machines/kubota-kx040-4-4.png';
import kubotaKx0404Image5 from '@/assets/machines/kubota-kx040-4-5.png';

// Category definitions with labels and icons
export const categoryInfo: Record<MachineCategory, { label: string; labelRu?: string }> = {
  excavators: { label: 'Excavators', labelRu: 'Экскаваторы' },
  dozers: { label: 'Dozers', labelRu: 'Бульдозеры' },
  'wheel-loaders': { label: 'Wheel Loaders', labelRu: 'Колёсные погрузчики' },
  'track-loaders': { label: 'Track Loaders', labelRu: 'Гусеничные погрузчики' },
  backhoes: { label: 'Backhoes', labelRu: 'Экскаваторы-погрузчики' },
  telehandlers: { label: 'Telehandlers', labelRu: 'Телескопические' },
  compaction: { label: 'Compaction', labelRu: 'Уплотнение' },
};

// All machines in one array - will be sorted dynamically
const allMachinesRaw: Array<Omit<Machine, 'category'> & { category?: string }> = [
  {
    id: 1,
    name: '2022 Sany SY80U Excavator',
    year: 2022,
    hours: 2847,
    location: 'Texas, USA',
    price: 58500,
    originalPrice: 58500,
    discount: 0,
    category: 'earthmoving',
    image: sanySy80uImage,
    description: 'The 2022 Sany SY80U is a powerhouse in compact form — built for endurance with reinforced boom, arm, and undercarriage. Powered by a reliable Yanmar 4TNV98CT engine, it delivers 66.4 hp for offset digging in tight spaces. Ideal for urban construction, landscaping, and utilities.',
    specs: {
      engine: 'Yanmar 4TNV98CT (Tier 4 Final)',
      power: '66.4 hp (49.5 kW) @ 2,000 rpm',
      weight: '19,401 lb (8,800 kg)',
      maxDiggingDepth: '14 ft 10.5 in (4,534 mm)',
      maxReach: '23 ft 11 in (7,290 mm)',
      maxDumpingHeight: '16 ft 2 in (4,930 mm)',
      bucketCapacity: '0.28 m³ (0.37 yd³)',
      bucketDiggingForce: '7,927 lbf (35.3 kN)',
      armDiggingForce: '5,709 lbf (25.4 kN)',
      swingSpeed: '10 rpm',
      travelSpeed: '2.0–2.8 mph (3.2–4.5 km/h)',
      tailSwing: '5 ft 11 in (1,800 mm) — Short Tail',
      transportDimensions: '21 ft 4 in x 7 ft 3 in x 8 ft 4 in',
      trackWidth: '17.7 in (450 mm)',
      fuelTank: '26.4 gal (100 L)',
      hydraulicTank: '31.7 gal (120 L)',
    },
    gallery: [
      sanySy80uImage,
      sanySy80uImage2,
      sanySy80uImage3,
      sanySy80uImage4,
      sanySy80uImage5,
    ],
  },
  {
    id: 3,
    name: '2023 Develon DD100 Dozer',
    year: 2023,
    hours: 1420,
    location: 'USA Stock',
    price: 175000,
    originalPrice: 175000,
    discount: 0,
    category: 'earthmoving',
    image: develonDd100Image1,
    description: 'The 2023 Develon DD100 (Serial #227473) is a next-gen dozer engineered for superior power-to-weight performance. With 122 hp and 24,286 lb operating weight, it delivers exceptional tractive effort and pushing power. Features fully electronic hydraulic controls, 6-way variable angle pitch blade, rearview camera, ECO mode, blade shake function, and premium cab with AC/heat. Low-hour unit ideal for site prep, grading, and land clearing.',
    specs: {
      engine: 'Doosan DL06P (Tier 4 Final)',
      power: '122 hp (91 kW) @ 2,200 rpm',
      weight: '24,286 lb (11,016 kg)',
      bucketCapacity: '3.4 yd³ (2.6 m³) blade capacity',
      maxDiggingDepth: '18 in (457 mm) blade drop',
      travelSpeed: '5.6 mph (9.0 km/h) forward',
      trackWidth: '24 in (610 mm) LGP shoes',
      transportDimensions: '16 ft 7 in x 10 ft 9 in x 9 ft 8 in',
      fuelTank: '62.8 gal (238 L)',
      hydraulicTank: '23.8 gal (90 L)',
    },
    gallery: [
      develonDd100Image1,
      develonDd100Image2,
      develonDd100Image3,
      develonDd100Image4,
    ],
  },
  {
    id: 4,
    name: '2025 Kubota R640R43 Wheel Loader',
    year: 2025,
    hours: 320,
    location: 'USA Stock',
    price: 72500,
    originalPrice: 72500,
    discount: 0,
    category: 'loaders',
    image: kubotaR640r43Image1,
    description: 'The 2025 Kubota R640R43 is a versatile compact powerhouse designed for demanding construction, landscaping, and material handling tasks, with a durable frame built for 8,000+ hour service life. Powered by a Kubota V2607-CR-TE5-WL Tier 4 Final engine (61.1 hp net), it delivers impressive 9,869 lbf breakout force and 7,450 lb static tipping load for precise loading and digging. Features load-sensing hydraulics, 360° visibility cab with AC/heat/USB ports, ergonomic controls, and quick-coupler for attachments. Ideal for urban sites, farms, or aggregate yards.',
    specs: {
      engine: 'Kubota V2607-CR-TE5-WL (Tier 4 Final)',
      power: '61.1 hp (45.6 kW) @ 2,400 rpm',
      weight: '11,563 lb (5,245 kg)',
      grossTorque: '173 lb-ft (235 Nm)',
      displacement: '2.615 L',
      bucketCapacity: '0.94 yd³ (0.72 m³)',
      breakoutForce: '9,869 lbf (43.9 kN)',
      tippingLoad: '7,450 lb (3,380 kg)',
      maxDumpHeight: '9 ft 8 in (2.95 m)',
      maxLiftHeight: '10 ft 8 in (3.25 m)',
      maxSpeed: '12.4 mph (20 km/h)',
      turningRadius: '12 ft (3.66 m)',
      tireSize: '405/70R20',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '12.4 gal (47 L)',
      transportDimensions: '18 ft x 5 ft 11 in x 8 ft 2 in',
    },
    gallery: [
      kubotaR640r43Image1,
      kubotaR640r43Image2,
      kubotaR640r43Image3,
      kubotaR640r43Image4,
      kubotaR640r43Image5,
    ],
  },
  {
    id: 5,
    name: '2021 Sany SY215C Excavator',
    year: 2021,
    hours: 4120,
    location: 'USA Stock',
    price: 118500,
    originalPrice: 118500,
    discount: 0,
    category: 'earthmoving',
    isComingSoon: true,
    image: sanySy215cImage,
    description: 'The Sany SY215C is a robust medium excavator built for demanding construction, quarrying, and earthmoving applications, featuring a reinforced undercarriage for 10,000+ hour durability. Powered by a Cummins QSB6.7 Tier 4 Final engine (163.6 hp net), it provides exceptional 30,800 lbf arm digging force and 21\' 8" dig depth for superior productivity. Equipped with positive flow load-sensing hydraulics, 360° camera system, spacious cab with AC/heat/USB ports, and quick-change coupler for attachments. Ideal for trenching, loading, or site prep.',
    specs: {
      engine: 'Cummins QSB6.7 (Tier 4 Final)',
      power: '163.6 hp (122 kW) @ 2,050 rpm',
      weight: '51,919 lb (23,550 kg)',
      grossTorque: '589 lb-ft (800 Nm)',
      displacement: '6.7 L',
      bucketCapacity: '1.22 yd³ (0.93 m³)',
      armDiggingForce: '30,800 lbf (137 kN)',
      bucketDiggingForce: '34,700 lbf (154 kN)',
      maxDiggingDepth: '21 ft 8 in (6.62 m)',
      maxReach: '32 ft 2 in (9.81 m)',
      maxDumpingHeight: '22 ft 4 in (6.81 m)',
      travelSpeed: '3.7 mph (6 km/h)',
      swingSpeed: '11 rpm',
      trackWidth: '24 in (600 mm)',
      fuelTank: '90 gal (340 L)',
      hydraulicTank: '63 gal (239 L)',
      transportDimensions: '31 ft 9 in x 9 ft 10 in x 10 ft 4 in',
    },
    gallery: [
      sanySy215cImage,
    ],
  },
  {
    id: 7,
    name: '2017 JCB 940-4 Rough Terrain Forklift',
    year: 2017,
    hours: 3890,
    location: 'USA Stock',
    price: 35500,
    originalPrice: 35500,
    discount: 0,
    image: jcb9404NewImage,
    description: 'The 2017 JCB 940-4 is a powerful 4×4 rough-terrain forklift designed for the toughest construction, industrial yards and recycling sites, with a heavy-duty chassis built for 12,000+ hour service life. Powered by a JCB EcoMAX 448 Tier 4 Final engine (74 hp net, no DPF/SCR), it lifts 8,000 lb (4,000 kg) to a full height of 22 ft (6.7 m) and offers excellent visibility and stability thanks to the 4-wheel drive and high ground clearance. Features hydrostatic transmission, servo joystick controls, spacious ROPS/FOPS cab with heat/AC, 360° lighting and quick-hitch carriage. This low-hour unit (est. 2,100 hrs) comes complete with 48" pallet forks + side-shift and 1.5 yd³ bucket — ready for immediate heavy-duty work. Outstanding resale value (+17% on recent auctions) and legendary JCB reliability make the smartest choice for contractors who need a true all-terrain mast forklift.',
    specs: {
      engine: 'JCB EcoMAX 448 (Tier 4 Final, no AdBlue)',
      power: '74 hp (55 kW)',
      weight: '17,637 lb (8,000 kg)',
      maxLiftCapacity: '8,000 lb (4,000 kg)',
      liftHeight: '22 ft (6.7 m)',
      forwardReach: '4 ft 3 in (1.3 m) at max height',
      transmission: 'Hydrostatic, 2 speeds, 19 mph (30 km/h)',
      turningRadius: '13 ft 1 in (4.0 m)',
      groundClearance: '15.7 in (400 mm)',
      tireSize: '15.5/80-24',
      fuelTank: '33 gal (125 L)',
      hydraulicFlow: '26.4 gal/min (100 L/min)',
      transportDimensions: '19 ft 8 in × 7 ft 8 in × 8 ft 10 in (6.0 × 2.36 × 2.69 m)',
    },
    gallery: [
      jcb9404NewImage,
    ],
  },
  {
    id: 8,
    name: '2019 John Deere 310L EP Backhoe Loader',
    year: 2019,
    hours: 3450,
    location: 'USA Stock',
    price: 48500,
    originalPrice: 48500,
    discount: 0,
    isReserved: true,
    image: johnDeere310lImage,
    description: 'The 2019 John Deere 310L EP is a super-clean, low-hour compact backhoe loader perfect for landscaping, utilities and small-to-medium construction jobs. Powered by a 99 hp John Deere PowerTech 4045HT Tier 4 Final engine (SCR only, no DPF), it offers smooth powershift transmission, pilot controls, extendable stick and ride control. This unit has only ≈ 2,100 hours and comes fully loaded. Ready to work — full service just completed, excellent tire condition, both quick couplers included.',
    specs: {
      engine: 'JD PowerTech 4045HT 99 hp Tier 4 Final',
      power: '99 hp (74 kW)',
      weight: '14,590 lb (6,618 kg)',
      maxDiggingDepth: '14 ft 3 in (4.34 m)',
      bucketCapacity: '1.0 yd³ GP',
      maxLiftCapacity: '7,403 lb (3,358 kg)',
      travelSpeed: '25 mph (40 km/h)',
      transportDimensions: '23 ft 3 in × 7 ft 2 in × 11 ft 2 in',
    },
    gallery: [
      johnDeere310lImage,
    ],
  },
  {
    id: 9,
    name: '2019 Merlo P50.18HM Telescopic Handler',
    year: 2019,
    hours: 3780,
    location: 'USA Stock',
    price: 95000,
    originalPrice: 95000,
    discount: 0,
    isComingSoon: true,
    image: merloP5018hmNewImage,
    description: 'The 2019 Merlo P50.18HM is a legendary 5-tonne / 18-meter heavy-duty telescopic handler — the absolute king for high-rise construction, steel erection, silo work, and big industrial jobs. Iconic side-engine layout, ring-mounted cab with 360° continuous rotation, and four independent outriggers deliver unmatched stability and visibility. Powered by a Deutz TCD 3.6 L4 Stage IV/Tier 4 Final engine (136 hp net, some units 156 hp), hydrostatic transmission with 25 mph (40 km/h) top speed, and load-sensing hydraulics. Full 11,000 lb (5,000 kg) capacity to 58 ft 5 in (17.9 m) height and 1,800 kg at maximum 43 ft 8 in forward reach. This low-hour 2019 unit (est. 2,200–2,800 hrs) comes with hydraulic quick-attach carriage, 1200 mm pallet forks, 4 hydraulic outlets at boom head, stabilizer legs, and full factory records. Excellent resale value (+18–22% in European & US auctions last 24 months) and remaining structural warranty until 2026.',
    specs: {
      engine: 'Deutz TCD 3.6 L4 (Stage IV / Tier 4 Final)',
      power: '136 hp (100 kW) – 156 hp versions available',
      weight: '30,645 lb (13,900 kg) with outriggers',
      maxLiftCapacity: '11,000 lb (5,000 kg)',
      liftHeight: '58 ft 5 in (17.9 m)',
      forwardReach: '43 ft 8 in (13.3 m)',
      capacityAtMaxReach: '3,968 lb (1,800 kg)',
      transmission: 'Hydrostatic 2-speed, 25 mph (40 km/h)',
      outriggers: '4 independent hydraulic stabilizers',
      turningRadius: '13 ft 9 in (4.19 m)',
      tireSize: '445/65 R22.5 or 18-22.5',
      fuelTank: '41 gal (155 L)',
      hydraulicFlow: '37.5 gal/min (142 L/min)',
      transportDimensions: '20 ft 8 in × 8 ft × 9 ft 10 in (6.32 × 2.44 × 3.00 m)',
    },
    gallery: [
      merloP5018hmNewImage,
    ],
  },
  {
    id: 10,
    name: '2012 John Deere 6430 Premium Cab Tractor',
    year: 2012,
    hours: 6420,
    location: 'USA Stock',
    price: 82500,
    originalPrice: 82500,
    discount: 0,
    image: johnDeere6430NewImage,
    description: '2012 John Deere 6430 Premium Cab Tractor – clean, ready-to-work unit. One of the most bulletproof and sought-after 6-series John Deere tractors. Only ≈ 4,850 hours, fully serviced, no money needed. PowerTech 4.5L Tier 3 engine – 125 hp. Premium cab: air conditioning, air-ride seat, excellent visibility. PowerQuad Plus 24F/24R transmission (40 km/h Eco) with left-hand reverser. MFWD front axle with TLS suspension. 80 l/min hydraulics, 3 SCVs + Power Beyond. Front PTO 1000 rpm + rear 540/1000. Tires: 420/85R28 front – 520/85R38 rear (70–80 % remaining). Front + rear suitcase weights included. Original paint, no welds or major repairs, full service history. Perfect for seeding, cultivation, transport, or municipal work.',
    specs: {
      power: '125 hp',
      transmission: 'PowerQuad Plus 24F/24R, 40 km/h Eco',
      hydraulicFlow: '80 l/min, 3 SCVs + Power Beyond',
      maxLiftCapacity: '11,900 lb (5,400 kg)',
      frontAxle: 'MFWD with TLS suspension',
      cab: 'Premium, A/C, air seat',
      tireSize: '420/85R28 – 520/85R38 (70–80 %)',
      pto: '540/1000 rear + 1000 front',
      weight: '≈ 13,670 lb (6,200 kg) with weights',
    },
    gallery: [
      johnDeere6430NewImage,
    ],
  },
  {
    id: 13,
    name: '2022 ASV VT-70 High Output',
    year: 2022,
    hours: 1845,
    location: 'USA Stock',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    image: asvVt70hoNewImage,
    description: 'The 2022 ASV VT-70 High Output is a compact track loader legend — built with ASV\'s patented Posi-Track® suspended undercarriage that delivers unmatched ride quality, traction, and track life in the roughest terrain. Powered by a Yanmar 4TNV86CT Tier 4 Final engine (72 hp), it offers smooth power delivery and excellent fuel economy. Features high-output hydraulics (24.5 gpm @ 3,500 psi) for running grapples, mulchers, augers, and more. Enclosed cab with heat/AC, joystick controls, rear camera, LED lights. This low-hour unit (1,845 hrs) comes with 72" low-profile bucket and is ready for immediate landscaping, grading, or rental fleet duty.',
    specs: {
      engine: 'Yanmar 4TNV86CT (Tier 4 Final)',
      power: '72 hp (54 kW)',
      weight: '6,550 lb (2,971 kg)',
      capacity: '2,300 lb (1,043 kg) ROC',
      tippingLoad: '6,571 lb (2,980 kg)',
      liftHeight: '9 ft 6 in (2.90 m) hinge pin',
      breakoutForce: '5,100 lbf (22.7 kN)',
      travelSpeed: '5.3 / 9.5 mph (2-speed)',
      hydraulicFlow: '24.5 gpm (92.8 L/min) @ 3,500 psi',
      trackWidth: '15 in (381 mm)',
      groundClearance: '2.9 psi (20 kPa) ground pressure',
      fuelTank: '20 gal (76 L)',
      transportDimensions: '10 ft 10 in × 5 ft × 6 ft 8 in',
      cab: 'Enclosed ROPS/FOPS, heat/AC, joystick, camera',
      status: 'Fully serviced, tight machine, ships nationwide',
    },
    gallery: [
      asvVt70hoNewImage,
    ],
  },
  {
    id: 20,
    name: '2019 Komatsu WA320-8 Wheel Loader',
    year: 2019,
    hours: 5840,
    location: 'USA Stock',
    price: 95000,
    originalPrice: 95000,
    discount: 0,
    isHotOffer: true,
    image: komatsuWa3208Image2,
    description: 'The 2019 Komatsu WA320-8 – one of the cleanest, tightest mid-size wheel loaders left in North America. Only 7,361 original hours, full Komatsu CARE history, no leaks, no welds, no excuses. 170 hp Komatsu SAA6D107E-3 Tier 4 Final (DEF), powershift transmission with auto-shift + traction control, limited-slip diffs, 3.6 yd³ pin-on bucket with bolt-on edge, ride control, enclosed ROPS cab with heat/AC/Bluetooth/camera, LED lights all around. Fresh service, 20.5R25 Michelin XHA2 tires at 80–90%, tight center, strong hydraulics, ice-cold A/C. Work-ready tomorrow. Ships nationwide (#B6525762). Same-year / similar-hour WA320-8 units still bringing $52–58k at Ritchie Bros, IronPlanet and Alex Lyon auctions.',
    specs: {
      engine: 'Komatsu SAA6D107E-3 (Tier 4 Final)',
      power: '170 hp (127 kW)',
      weight: '34,950 lb (15,853 kg)',
      bucketCapacity: '3.6 yd³ (2.7 m³) pin-on GP with BOE',
      breakoutForce: '31,580 lbf (140.5 kN)',
      maxDumpHeight: '9 ft 5 in (2.87 m)',
      transmission: 'Komatsu powershift 4F/4R with auto-shift',
      tireSize: '20.5R25 Michelin XHA2 (80–90%)',
      maxSpeed: '24.9 mph (40 km/h)',
      turningRadius: '20 ft 4 in (6.20 m)',
      hydraulicFlow: 'Load-sensing, 52.8 gpm (200 L/min)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera',
      status: 'Full service history, tight, ships nationwide',
    },
    gallery: [
      komatsuWa3208Image2,
      komatsuWa3208Image1,
      komatsuWa3208Image3,
      komatsuWa3208Image4,
      komatsuWa3208Image5,
    ],
  },
  {
    id: 36,
    name: '2019 Caterpillar CB16 Tandem Vibratory Roller',
    year: 2019,
    hours: 4929,
    location: 'USA Stock',
    price: 78000,
    originalPrice: 78000,
    discount: 0,
    image: caterpillarCb16Image,
    description: 'The 2019 Caterpillar CB16 – 84-inch tandem vibratory roller, 4929 original hours, open ROPS with canopy, work lights, and rotating beacon. Cat C4.4 Tier 4 Final 142 hp engine (no DEF), hydrostatic drive, dual amplitude/frequency, water spray system with triple filtration, pressurized water tank, cocoa mats, drum edge lights, and offset drum capability. Fresh full service, drums 95%, no leaks, no welds, ice-cold A/C cab version also available. Runs perfect, compacts like new. Ships nationwide (#A8006064). Same-spec 2019–2020 CB16 units with 4–6k hours still bringing $76–84k at Ritchie Bros, IronPlanet, and Alex Lyon auctions.',
    specs: {
      engine: 'Cat C4.4 142 hp (Tier 4 Final – no DEF)',
      weight: '33,420 lb (15,160 kg)',
      drumWidth: '84 in (2,134 mm)',
      frequency: '3,800 / 2,520 vpm (high/low)',
      centrifugalForce: '19,400 lb / 14,600 lb (high/low)',
      travelSpeed: '8 mph (13 km/h)',
      turningRadius: '12 ft 6 in (3.81 m)',
      waterTank: '264 gal (1,000 L)',
      cabRops: 'Open ROPS + canopy (A/C cab available)',
      features: 'Offset drum, edge cutter, LED lights, mats',
      status: 'Fully serviced, compaction-ready, ships nationwide',
      stockNumber: 'A8006064',
    },
    gallery: [
      caterpillarCb16Image,
      caterpillarCb16Image2,
      caterpillarCb16Image3,
      caterpillarCb16Image4,
      caterpillarCb16Image5,
    ],
  },
  {
    id: 38,
    name: '2016 Gehl RS6-42 Telehandler',
    year: 2016,
    hours: 3230,
    location: 'USA Stock',
    price: 28000,
    originalPrice: 28000,
    discount: 0,
    isSold: true,
    image: gehlRs642Image,
    description: 'The 2016 Gehl RS6-42 – clean, low-hour, high-spec 6,000 lb / 42 ft telehandler that still looks and runs like a 2020 model. Only 3,230 original hours, Deutz TCD 3.6 L4 Tier 4 Final 120 hp (no DEF issues), 4-speed powershift, 4WD + crab steer, 10° frame leveling, enclosed cab with heat/AC/Bluetooth, hydraulic quick-attach carriage + 60" pallet forks, foam-filled 13.00-24 tires at 85%, LED work lights, fenders, fresh full service, no leaks, no welds, boom tight as new. Ships nationwide (#A6567925). Same-year RS6-42 units with 3–4k hours still hammering $26–31k at Ritchie Bros, IronPlanet and JJ Kane auctions.',
    specs: {
      engine: 'Deutz TCD 3.6 L4 120 hp (Tier 4 Final)',
      maxLiftCapacity: '6,600 lb (2,994 kg)',
      liftHeight: '42 ft 1 in (12.83 m)',
      forwardReach: '28 ft 6 in (8.69 m)',
      capacityAtMaxHeight: '6,000 lb',
      capacityAtMaxReach: '2,000 lb',
      transmission: '4-speed powershift',
      driveSteer: '4×4×4, 3-mode steering',
      frameLeveling: '±10°',
      tires: '13.00-24 foam-filled (85%+)',
      hydraulicFlow: '43 gpm, pilot controls, aux at boom head',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth',
      status: 'Fully serviced, tight boom, ships nationwide',
      stockNumber: 'A6567925',
    },
    gallery: [
      gehlRs642Image,
    ],
  },
  {
    id: 39,
    name: '2016 John Deere 310SL Backhoe Loader',
    year: 2016,
    hours: 3560,
    location: 'USA Stock',
    price: 48000,
    originalPrice: 48000,
    discount: 0,
    isSold: true,
    image: johnDeere310slImage,
    description: 'The 2016 John Deere 310SL – premium low-hour backhoe loader that\'s been babied on light municipal duty, with just 2,164 original hours and a spotless service history. Iconic John Deere 4.5L PowerTech diesel (Tier 4 Final, no DEF headaches), 100 hp, sync-shuttle transmission with 4F/4R speeds, 4WD, powershift on the go, extendable stick (up to 19 ft 5 in dig depth), 92 in loader bucket with bolt-on teeth, enclosed cab with heat/AC/joystick controls/Bluetooth/radio, ride control, quick-attach loader ends, fresh tracks and tires at 90%+, no leaks, no welds, tight as a drum. Fresh full service, DOT-ready for any trenching, loading, or demo job. Ships nationwide (#A8195987). Similar low-hour 2016 310SL units with 2–3k hours still fetching $46–52k at Ritchie Bros, IronPlanet, and JJ Kane auctions – this one\'s undervalued big time.',
    specs: {
      engine: 'John Deere PowerTech 4.5L (Tier 4 Final)',
      power: '100 hp (74.6 kW) @ 2,000 rpm',
      weight: '16,500 lb (7,484 kg)',
      bucketCapacity: '1.0 yd³ (0.76 m³)',
      breakoutForce: '9,612 lb (42.8 kN)',
      liftHeight: '11 ft 3 in (3.43 m)',
      maxDiggingDepth: '19 ft 5 in (5.92 m) extendable / 14 ft 8 in (4.47 m) std',
      transmission: 'Sync-shuttle 4F/4R with powershift',
      driveSteer: '4WD with limited-slip diffs',
      tires: '14-17.5 front / 19.5L-24 rear (90%+)',
      fuelTank: '42 gal (159 L)',
      hydraulicFlow: '27 gpm loader / 28 gpm backhoe',
      cab: 'Enclosed OPG, heat/AC, joystick, Bluetooth',
      status: 'Fully serviced, tight machine, ships nationwide',
      stockNumber: 'A8195987',
    },
    gallery: [
      johnDeere310slImage,
    ],
  },
  {
    id: 40,
    name: '2014 Caterpillar TL943C Telehandler',
    year: 2014,
    hours: 5680,
    location: 'USA Stock',
    price: 36000,
    originalPrice: 36000,
    discount: 0,
    image: caterpillarTl943cNewImage,
    description: 'The 2014 Caterpillar TL943C – rock-solid 9,000 lb / 43 ft telehandler with full Cat service history and only original hours in the mid-range sweet spot. Cat C4.4 Tier 4 Interim 124 hp (no DEF, just DOC), 4-speed powershift, 4WD + crab steer, 10° frame leveling, enclosed cab with heat/AC/Bluetooth, quick-attach carriage + 60" pallet forks, foam-filled 14.00-24 tires at 75–85%, LED work lights, fenders, fresh annual inspection, tight boom, no leaks, no welds, ready to go straight to work. Ships nationwide (#A2585619). Same-year TL943C units with comparable hours still hammering $34–39k at Ritchie Bros, IronPlanet and Alex Lyon auctions.',
    specs: {
      engine: 'Cat C4.4 124 hp (Tier 4i – no DEF)',
      maxLiftCapacity: '9,000 lb (4,082 kg)',
      liftHeight: '43 ft (13.1 m)',
      forwardReach: '31 ft 6 in (9.6 m)',
      capacityAtMaxHeight: '7,000 lb',
      capacityAtMaxReach: '2,500 lb',
      transmission: '4-speed powershift',
      driveSteer: '4×4×4, three-mode steering',
      frameLeveling: '±10°',
      tires: '14.00-24 foam-filled (75–85%)',
      hydraulicFlow: '40 gpm, pilot controls, aux at boom head',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth',
      weight: '26,240 lb (11,902 kg)',
      status: 'Fully serviced, tight boom, ships nationwide',
      stockNumber: 'A2585619',
    },
    gallery: [
      caterpillarTl943cNewImage,
    ],
  },
  {
    id: 45,
    name: '2020 Caterpillar 336 Excavator',
    year: 2020,
    hours: 4500,
    location: 'Phoenix, Arizona',
    price: 285000,
    originalPrice: 285000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar336Image1,
    isHotOffer: true,
    description: 'Premier 2020 CAT 336 in immaculate condition – one-owner Arizona contractor unit with only 4,500 dealer-verified hours. Still under Cat extended warranty until 2026/8,000 hours. Fresh undercarriage (80% remaining), full Cat S·O·S oil analysis history with zero abnormalities. Equipped with Cat Grade Assist 2D with slope assist, rear camera, LED work lights, auxiliary hydraulics (hammer/shear circuit), quick coupler, and 48" digging bucket. This is the cleanest low-hour 336 on the market right now – serious buyers only.',
    specs: {
      engine: 'Cat C9.3B Tier 4 Final (310 hp)',
      power: '310 hp (231 kW)',
      weight: '83,600 lbs (37.9 metric tons)',
      trackWidth: '31.5" (800 mm) steel – 80% remaining',
      bucketCapacity: '2.44 yd³ (1.87 m³)',
      maxDiggingDepth: '24 ft 9 in (7.54 m)',
      maxReach: '40 ft 2 in (12.25 m)',
      hydraulicFlow: 'Smart boom, stick, bucket circuits with Grade Assist 2D',
      cab: 'Enclosed ROPS, premium air suspension seat, 10" touchscreen display, AC/heat, rear camera, LED lights',
      features: 'Cat extended warranty (remaining), quick coupler, 48" bucket, hammer circuit, slope assist',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      caterpillar336Image1,
      caterpillar336Image2,
      caterpillar336Image3,
      caterpillar336Image4,
    ],
  },
  {
    id: 46,
    name: '2018 Hitachi ZX350LC-6 Excavator',
    year: 2018,
    hours: 6200,
    location: 'Houston, Texas',
    price: 165000,
    originalPrice: 165000,
    discount: 0,
    category: 'earthmoving',
    image: hitachiZx350Image1,
    isHotOffer: false,
    description: 'One-owner fleet unit – ultra-clean 2018 Hitachi ZX350LC-6 with only 6,200 hours on the original Isuzu powerplant. Always dealer-serviced, no rentals. Undercarriage 70%, fresh cutting edges, no leaks. Cat-style quick coupler with 60" cleanup bucket + 36" digging bucket included. Fully equipped with rear and side cameras, beacon, and LED work package. Runs quiet and cold – exceptional value in this class.',
    specs: {
      engine: 'Isuzu AQ-6HK1X Tier 4 Final',
      power: '270 hp (201 kW)',
      weight: '77,050 lbs (34.9 metric tons)',
      trackWidth: '27.6" (700 mm) steel – 70% remaining',
      bucketCapacity: '1.96 yd³ (1.5 m³)',
      maxDiggingDepth: '23 ft 4 in (7.11 m)',
      maxReach: '37 ft 10 in (11.53 m)',
      hydraulicFlow: 'HIOS IV system, hammer/shear circuit',
      cab: 'Enclosed ROPS, deluxe seat, Bluetooth radio, AC/heat, rear + side cameras',
      features: 'Quick coupler, 2 buckets included (60" cleanup + 36" digging), LED light package, beacon, fresh service',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      hitachiZx350Image1,
      hitachiZx350Image2,
      hitachiZx350Image3,
      hitachiZx350Image4,
    ],
  },
  {
    id: 47,
    name: '2021 John Deere 210G LC Excavator',
    year: 2021,
    hours: 2850,
    location: 'Nashville, Tennessee',
    price: 198000,
    originalPrice: 198000,
    discount: 0,
    category: 'earthmoving',
    image: johnDeere210gImage1,
    isHotOffer: false,
    description: 'Super-low-hour 2021 John Deere 210G LC – only 2,850 hours and still under JDLink monitoring. Factory Grade Guidance system, dual-flange rollers, 9 ft 10 in arm, auxiliary hydraulics (hammer circuit), quick coupler, and 48" bucket. Premium cab with heated air suspension seat, Bluetooth, and rear view camera. Undercarriage 90%+ – this machine presents like new. No welds, no damage history, full dealer service records.',
    specs: {
      engine: 'John Deere PS6068 Tier 4 Final',
      power: '159 hp (119 kW)',
      weight: '47,250 lbs (21.4 metric tons)',
      trackWidth: '27.6" (700 mm) triple grouser – 90% remaining',
      bucketCapacity: '1.31 yd³ (1.0 m³)',
      maxDiggingDepth: '21 ft 4 in (6.51 m)',
      maxReach: '33 ft 1 in (10.09 m)',
      hydraulicFlow: 'Boom priority, auxiliary circuit for hammer/shear',
      cab: 'Premium enclosed, heated/cooled air seat, 8" touchscreen, Bluetooth, rear camera',
      features: 'Grade Guidance, JDLink telematics, quick coupler, 48" bucket, hammer circuit, LED lights',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      johnDeere210gImage1,
      johnDeere210gImage2,
      johnDeere210gImage3,
      johnDeere210gImage4,
    ],
  },
  {
    id: 48,
    name: '2018 Caterpillar 950M Wheel Loader',
    year: 2018,
    hours: 5420,
    location: 'Denver, Colorado',
    price: 185000,
    originalPrice: 185000,
    discount: 0,
    category: 'loaders',
    image: caterpillar950mNewImage,
    isHotOffer: false,
    description: 'Work-ready 2018 CAT 950M with only 5,420 hours. One of the best-running 950M units we\'ve had – tight as a drum, zero blow-by, ice-cold A/C. New tires just installed (23.5R25 Michelin XHA2), fresh undercarriage rails and pins, full 500-hour service completed. Fusion quick-coupler, 4.5 yd³ GP bucket with bolt-on edge, ride control, rearview camera, high-flow hydraulics. Strong Cat extended warranty history – no issues ever logged.',
    specs: {
      engine: 'Cat C7.1 Acert Tier 4 Final',
      power: '223 hp (166 kW)',
      weight: '42,500 lbs (19.3 metric tons)',
      trackWidth: '23.5R25 Michelin XHA2 – new install',
      bucketCapacity: '4.5 yd³ (3.44 m³) GP with BOE',
      breakoutForce: '37,225 lbf (166 kN)',
      tippingLoad: '29,400 lb (13,336 kg)',
      hydraulicFlow: 'Load-sensing, high-flow auxiliary',
      cab: 'Enclosed ROPS, deluxe air seat, Bluetooth radio, AC/heat, rearview camera',
      features: 'Fusion quick-coupler, ride control, new tires, fresh 500h service, Cat extended warranty history',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      caterpillar950mNewImage,
    ],
  },
  {
    id: 49,
    name: '2021 John Deere 544 P-Tier Wheel Loader',
    year: 2021,
    hours: 2100,
    location: 'Omaha, Nebraska',
    price: 175000,
    originalPrice: 175000,
    discount: 0,
    category: 'loaders',
    image: johnDeere544pNewImage,
    isHotOffer: false,
    description: 'Ultra-low-hour 2021 John Deere 544 P-Tier – only 2,100 hours from a single-owner municipal fleet (snow removal only). Absolutely immaculate inside and out. Still under JDLink monitoring with full telematics history. 3.0 yd³ GP bucket with bolt-on edge, quick-coupler, ride control, LED lights, heated mirrors, rear camera. Premium cab with heated/cooled air seat, Bluetooth, and factory sound system. Tires at 95% – this is as close to new as you\'ll find without paying new-machine price.',
    specs: {
      engine: 'John Deere PowerTech PSS 6.8L Tier 4 Final',
      power: '166 hp (124 kW)',
      weight: '29,725 lbs (13.5 metric tons)',
      trackWidth: '20.5R25 L3 – 95% remaining',
      bucketCapacity: '3.0 yd³ (2.3 m³) GP with BOE',
      breakoutForce: '24,400 lbf (108.5 kN)',
      tippingLoad: '21,600 lb (9,800 kg)',
      hydraulicFlow: 'Load-sensing with ride control',
      cab: 'Premium enclosed, heated/cooled air seat, 8" touchscreen, Bluetooth, rear camera',
      features: 'Quick-coupler, JDLink telematics, LED lights, heated mirrors, low hours – immaculate condition',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      johnDeere544pNewImage,
    ],
  },
  {
    id: 50,
    name: '2016 Volvo L120H Wheel Loader',
    year: 2016,
    hours: 8450,
    location: 'Seattle, Washington',
    price: 125000,
    originalPrice: 125000,
    discount: 0,
    category: 'loaders',
    image: volvoL120h2016Image1,
    isHotOffer: false,
    description: 'Legendary 2016 Volvo L120H with outstanding dealer service history. Higher hours but runs like half the meter – this is a perfect example of Volvo\'s reputation for longevity. Boom Suspension System, ride control, quick-coupler, 4.2 yd³ rehandling bucket, reversing fan, LED work lights. Fresh transmission service just completed. Tires at 60% – ideal for aggregate, recycling, or heavy municipal duty.',
    specs: {
      engine: 'Volvo D8J Tier 4 Final',
      power: '265 hp (198 kW)',
      weight: '45,635 lbs (20.7 metric tons)',
      trackWidth: '23.5R25 L3 – 60% remaining',
      bucketCapacity: '4.2 yd³ (3.2 m³) rehandling bucket',
      breakoutForce: '40,040 lbf (178 kN)',
      tippingLoad: '30,200 lb (13,700 kg)',
      hydraulicFlow: 'Load-sensing TP-linkage, reversing fan',
      cab: 'Enclosed ROPS, deluxe air seat, Volvo MATRIS display, AC/heat, rear camera',
      features: 'Boom Suspension System, quick-coupler, ride control, LED lights, fresh transmission service',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      volvoL120h2016Image1,
      volvoL120h2016Image2,
      volvoL120h2016Image3,
      volvoL120h2016Image4,
      volvoL120h2016Image5,
    ],
  },
  {
    id: 51,
    name: '2019 Caterpillar D6 LGP Dozer',
    year: 2019,
    hours: 3780,
    location: 'Sacramento, California',
    price: 295000,
    originalPrice: 295000,
    discount: 0,
    category: 'earthmoving',
    isSold: true,
    image: caterpillarD6Image,
    isHotOffer: false,
    description: 'Super-clean 2019 CAT D6 LGP – only 3,780 hours, California CARB-compliant, one-owner unit from a highway contractor. Wide LGP tracks for low ground pressure, 6-way PAT blade, rear ripper with 3 shanks, Cat GRADE 2D slope assist ready. Undercarriage at 75% remaining, fresh cutting edges, all pins and bushings tight. Premium cab with heated/cooled seat, touchscreen, and 360° visibility. Zero emissions violations, full dealer service history.',
    specs: {
      engine: 'Cat C9.3B Tier 4 Final (215 hp)',
      power: '215 hp (160 kW)',
      weight: '48,940 lbs (22.2 metric tons)',
      trackWidth: 'LGP 30" (762 mm) – 75% remaining',
      bucketCapacity: '6-way PAT blade (power angle tilt)',
      hydraulicFlow: 'Cat GRADE with 2D slope assist ready',
      cab: 'Enclosed ROPS, heated/cooled seat, 10" touchscreen, AC/heat, 360° cameras',
      features: 'CARB-compliant, rear ripper 3-shank, LGP tracks, fresh cutting edges, full service history',
      status: 'SOLD – Full dealer service history',
    },
    gallery: [
      caterpillarD6Image,
    ],
  },
  {
    id: 52,
    name: '2019 Komatsu D65PXi-18 Intelligent Dozer',
    year: 2019,
    hours: 4150,
    location: 'Phoenix, Arizona',
    price: 195000,
    originalPrice: 195000,
    discount: 0,
    category: 'earthmoving',
    image: komatsuD65pxiNewImage,
    isHotOffer: false,
    description: 'Ultra-clean 2019 Komatsu D65PXi-18 (factory intelligent machine control). One-owner Arizona highway contractor unit, always dealer-serviced and shedded. Full iMC GPS system (3D-MC) still active with current subscription. Fresh service, new cutting edges, zero leaks. This is the smartest dozer you can buy at this price.',
    specs: {
      engine: 'Komatsu SAA6D114E-6 Tier 4 Final',
      power: '217 hp',
      weight: '52,160 lbs (23.7 metric tons)',
      trackWidth: 'PLUS rotating bushings ≈ 82% remaining',
      bucketCapacity: '13\'8" PAT blade (power angle tilt) – new edges & corners',
      hydraulicFlow: 'Multi-shank ripper with 3 teeth',
      cab: 'Enclosed ROPS, heat & A/C, air-ride seat, 360° cameras, Komatsu Intelligent Machine Control (GPS ready)',
      features: 'Active iMC subscription transferable, fresh service, full inspection report, clean Arizona title',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      komatsuD65pxiNewImage,
    ],
  },
  {
    id: 53,
    name: '2024 Kubota KX040-4 Mini Excavator',
    year: 2024,
    hours: 125,
    location: 'Atlanta, Georgia',
    price: 63400,
    originalPrice: 63400,
    discount: 0,
    category: 'earthmoving',
    image: kubotaKx0404NewImage,
    isHotOffer: false,
    description: '2024 Kubota KX040-4 demo unit with factory warranty remaining. Only light dealer yard use – basically brand-new. Full KubotaCare coverage until 2027 or 3,000 hours. Zero-turn, angle blade, hydraulic thumb, rubber tracks like new. Still smells new inside the cab.',
    specs: {
      engine: 'Kubota V2607 Tier 4 Final',
      power: '40.4 hp',
      weight: '9,300 lbs (4.2 metric tons)',
      trackWidth: 'Rubber tracks ≈ 98% remaining',
      bucketCapacity: '6-way angle blade, factory hydraulic thumb',
      hydraulicFlow: '2-way auxiliary + proportional controls',
      cab: 'Enclosed, heat & ice-cold A/C, Bluetooth radio, deluxe seat',
      features: 'Full factory warranty until 2027/3,000h, fresh 500-hour service, clean Georgia title',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      kubotaKx0404NewImage,
    ],
  },
  {
    id: 57,
    name: '2019 Case 321F Wheel Loader',
    year: 2019,
    hours: 4680,
    location: 'Indianapolis, Indiana',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'loaders',
    image: case321f2019Image,
    isHotOffer: false,
    description: 'Super-clean 2019 Case 321F compact wheel loader from a municipal fleet. Always dealer-serviced, stored inside, no rust. Fresh service, excellent rubber, tight center pin. Comes with quick coupler + forks and 1.7 yd³ bucket. Perfect size for landscaping, snow, or tight job sites.',
    specs: {
      engine: 'FPT Tier 4 Final',
      power: '74 hp',
      weight: '14,100 lbs (6.4 metric tons)',
      trackWidth: '405/70R20 tires ≈ 88% remaining',
      bucketCapacity: '1.7 yd³ GP bucket with bolt-on edge',
      hydraulicFlow: 'Parallel lift, skid-steer style quick coupler, 3rd function',
      cab: 'Enclosed ROPS, heat & A/C, air-ride seat, rear camera',
      features: 'Fresh service + inspection report, clean Indiana title',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      case321f2019Image,
    ],
  },
  {
    id: 58,
    name: '2023 Case 321F Wheel Loader',
    year: 2023,
    hours: 580,
    location: 'Indianapolis, Indiana',
    price: 98799,
    originalPrice: 98799,
    discount: 0,
    category: 'loaders',
    image: case321f2023NewImage,
    isHotOffer: false,
    description: '2023 Case 321F with only light municipal use. Still covered by full Case ProCare warranty until 2026 / 3,000 hours. Basically brand-new condition – fresh service, zero damage, perfect paint. Quick coupler, forks + bucket, deluxe cab. Save big vs new price.',
    specs: {
      engine: 'FPT 3.4L Tier 4 Final',
      power: '74 hp',
      weight: '14,100 lbs (6.4 metric tons)',
      trackWidth: '405/70R20 tires ≈ 96% remaining',
      bucketCapacity: '1.7 yd³ GP bucket with bolt-on edge',
      hydraulicFlow: 'Parallel lift Z-bar, skid-steer style QC, 3rd & 4th function',
      cab: 'Premium enclosed, heat & A/C, air-ride seat, rear camera, Bluetooth',
      features: 'Full Case ProCare warranty until 2026/3,000h, fresh service, clean Indiana title',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      case321f2023NewImage,
    ],
  },
  {
    id: 59,
    name: '2024 Case 321F Compact Wheel Loader',
    year: 2024,
    hours: 12,
    location: 'Billings, Montana',
    price: 72000,
    originalPrice: 72000,
    discount: 0,
    category: 'loaders',
    image: case321f2024Image1,
    isHotOffer: true,
    description: 'Brand-new 2024 Case 321F – top-selling F Series compact wheel loader. Z-Bar linkage delivers 8,000+ lb full-height lift and 11,000 lb bucket breakout in a super-compact 8\'10" frame. Tier 4 Final FPT 74 hp engine (no DEF), hydrostatic transmission with 25 mph top speed, ride control, skid-steer coupler, enhanced auxiliary hydraulics. Zero hours, deluxe cab with heat/AC/air suspension seat/Bluetooth/camera, LED lights, cold weather package. Includes 1.3 yd³ GP bucket + pallet forks. Full CASE factory warranty (2 yr/2,000 hr bumper-to-bumper + 3 yr/3,000 hr powertrain).',
    specs: {
      engine: 'FPT 74 hp Tier 4 Final (no DEF required)',
      power: '74 hp',
      weight: '12,800 lbs operating weight',
      trackWidth: '20.5R25 Michelin tires (100% tread)',
      bucketCapacity: '1.3 yd³ GP bucket + pallet forks included',
      maxLiftCapacity: '8,000+ lb full-height lift capacity',
      breakoutForce: '11,000 lb bucket breakout force',
      hydraulicFlow: 'Enhanced auxiliary hydraulics for grapples/mulchers, electro-hydraulic joystick',
      cab: 'Deluxe enclosed cab – heat/AC, air suspension seat, Bluetooth radio, rear camera, LED lights, cold weather package',
      transmission: 'Hydrostatic with high-speed axles, up to 25 mph, ride control',
      transportDimensions: '8 ft 10 in overall length – fits tight sites',
      features: 'Standard skid-steer coupler, Z-Bar linkage, brand-new zero hours',
      warranty: 'Full CASE factory warranty: 2 yr/2,000 hr bumper-to-bumper + 3 yr/3,000 hr powertrain',
      status: 'In stock – ready to deploy',
    },
    gallery: [
      case321f2024Image1,
      case321f2024Image2,
      case321f2024Image3,
      case321f2024Image4,
      case321f2024Image5,
      case321f2024Image6,
    ],
  },
  {
    id: 60,
    name: '2022 Caterpillar 938M Wheel Loader',
    year: 2022,
    hours: 2860,
    location: 'Billings, Montana',
    price: 185000,
    originalPrice: 185000,
    discount: 0,
    category: 'loaders',
    isSold: true,
    image: caterpillar938mImage,
    description: 'One of the cleanest, lowest-hour late-model 938M units available. Only 1,850 original hours with full Cat dealer service history. Features Fusion quick-coupler, 4.0 yd³ GP bucket with bolt-on edge, ride control, high-lift arms, 23.5R25 Michelin XHA2 tires at 95%, third valve + high-flow hydraulics, reversing fan, LED lights, deluxe cab with Cat Payload & Autodig. Zero leaks, zero welds, runs whisper-quiet. Still under Cat Platinum warranty until 2027/7,500 hrs.',
    specs: {
      engine: 'Cat C7.1 Acert 190 hp (Tier 4 Final)',
      power: '190 hp',
      weight: '36,300 lb (16,466 kg) operating weight',
      bucketCapacity: '4.0 yd³ (3.1 m³) GP with BOE',
      breakoutForce: '34,500 lbf (153 kN)',
      maxLiftCapacity: '25,000 lb (11,340 kg) static tipping load',
      maxDumpHeight: '10 ft 6 in (3.20 m) high-lift dump clearance',
      transmission: 'Cat powershift 5F/3R with lock-up torque converter',
      travelSpeed: '25 mph (40 km/h)',
      trackWidth: '23.5R25 Michelin XHA2 (95%+)',
      hydraulicFlow: 'Load-sensing, high-flow + 3rd valve',
      fuelTank: '51.5 gal (195 L)',
      cab: 'Deluxe enclosed – heat/AC, heated air-ride seat, Bluetooth, camera, Cat Payload & Autodig, LED lights',
      warranty: 'Cat Platinum EPP until 2027 or 7,500 hrs (powertrain + hydraulics)',
      features: 'Fusion quick-coupler, ride control, high-lift arms, reversing fan',
      status: 'SOLD – Full dealer service history, zero leaks, zero welds',
    },
    gallery: [
      caterpillar938mImage,
    ],
  },
  {
    id: 61,
    name: '2021 Caterpillar 938M Wheel Loader',
    year: 2021,
    hours: 980,
    location: 'Billings, Montana',
    price: 195000,
    originalPrice: 195000,
    discount: 0,
    category: 'loaders',
    image: caterpillar938m2021NewImage,
    description: 'Ultra-low-hour dealer-maintained unicorn with only 1,420 original hours and remaining Cat Platinum warranty until 2026/6,000 hrs. Features Fusion coupler, 4.2 yd³ spade-nose bucket + BOE, ride control, high-lift z-bar, 23.5R25 Michelin XHA2 tires 95%+, high-flow XPS hydraulics + 3rd/4th valve, reversing fan, Autodig + Cat Payload with printer, LED 360° lighting, deluxe cab with touchscreen. Zero damage, zero leaks, fresh TA2 & SOS – runs like the day it left the factory.',
    specs: {
      engine: 'Cat C7.1 190 hp (Tier 4 Final)',
      power: '190 hp',
      weight: '36,667 lb (16,632 kg) operating weight',
      bucketCapacity: '4.2 yd³ Fusion spade-nose + BOE',
      breakoutForce: '35,800 lbf (159 kN)',
      maxLiftCapacity: '25,850 lb (11,725 kg) static tipping load',
      maxDumpHeight: '10 ft 8 in (3.25 m) high-lift dump clearance',
      transmission: 'Powershift 5F/3R lock-up torque converter',
      travelSpeed: '25 mph (40 km/h)',
      trackWidth: '23.5R25 Michelin XHA2 (95%+)',
      hydraulicFlow: 'High-flow XPS + 3rd/4th function',
      cab: 'Deluxe enclosed – heat/AC, heated air-ride seat, Bluetooth, camera, touchscreen, Cat Payload with printer, LED 360° lighting',
      warranty: 'Cat Platinum EPP until 2026 or 6,000 hrs',
      features: 'Fusion coupler, ride control, high-lift z-bar, reversing fan, Autodig, block heater, cold-weather package',
      status: 'Dealer-maintained, like-new, zero damage/leaks',
    },
    gallery: [
      caterpillar938m2021NewImage,
    ],
  },
  {
    id: 62,
    name: '2022 Caterpillar 938M Wheel Loader',
    year: 2022,
    hours: 1890,
    location: 'Billings, Montana',
    price: 175000,
    originalPrice: 175000,
    discount: 0,
    category: 'loaders',
    image: caterpillar938m2022Image1,
    description: 'Immaculate one-owner, low-hour dealer-maintained machine with only 2,680 original hours and remaining Cat Platinum warranty until 2027/7,500 hrs. Features Fusion quick-coupler, 4.0 yd³ GP bucket + BOE, ride control, standard z-bar, 23.5R25 Michelin XLD tires at 90-95%, high-flow hydraulics + 3rd valve, reversing fan, LED lights, deluxe cab with Cat Payload. Fresh full service and SOS clean.',
    specs: {
      engine: 'Cat C7.1 Acert 190 hp (Tier 4 Final)',
      power: '190 hp',
      weight: '36,216 lb (16,427 kg) operating weight',
      bucketCapacity: '4.0 yd³ Fusion GP + BOE',
      breakoutForce: '34,200 lbf (152 kN)',
      maxLiftCapacity: '24,800 lb (11,250 kg) static tipping load',
      maxDumpHeight: '9 ft 10 in (3.00 m) standard lift dump clearance',
      transmission: 'Powershift 5F/3R lock-up torque converter',
      travelSpeed: '25 mph (40 km/h)',
      trackWidth: '23.5R25 Michelin XLD (90-95%)',
      hydraulicFlow: 'High-flow + 3rd function',
      cab: 'Deluxe enclosed – heat/AC, heated air-ride seat, Bluetooth, camera, Cat Payload',
      warranty: 'Cat Platinum EPP until 2027 or 7,500 hrs',
      features: 'Fusion quick-coupler, ride control, standard z-bar, reversing fan, block heater, LED lights',
      status: 'Dealer-serviced, zero issues, ready to ship',
    },
    gallery: [
      caterpillar938m2022Image1,
      caterpillar938m2022Image2,
      caterpillar938m2022Image3,
      caterpillar938m2022Image4,
    ],
  },
  {
    id: 63,
    name: '2022 JCB 55Z-1 Mini Excavator',
    year: 2022,
    hours: 1240,
    location: 'Billings, Montana',
    price: 55000,
    originalPrice: 55000,
    discount: 0,
    category: 'earthmoving',
    isComingSoon: true,
    image: jcb55z1Image,
    description: 'Zero-tailswing mini excavator powerhouse built for tight urban digs, landscaping, utilities, and rental fleets where maneuverability is king. Kohler Tier 4 Final KDI 1903 diesel cranks 48.3 hp with no AdBlue/DEF hassles, delivering massive 6,435 lbf bucket breakout and 181° rotation for unbeatable spoil retention. Full JCB service history, enclosed cab with heat/AC/joystick controls/Bluetooth/camera, 4-way dozer blade with float, high/low-flow aux hydraulics, quick-hitch ready.',
    specs: {
      engine: 'Kohler KDI 1903 TCR Tier 4 Final',
      power: '48.3 hp @ 2,200 rpm',
      weight: '11,830 lb (5,365 kg)',
      maxDiggingDepth: '12 ft 7 in (3.84 m)',
      maxReach: '20 ft 4 in (6.20 m)',
      maxDumpHeight: '13 ft 9 in (4.19 m)',
      breakoutForce: '6,435 lbf bucket / 5,512 lbf dipper',
      travelSpeed: '1.6 / 2.9 mph',
      tailSwing: 'Zero tail swing',
      trackWidth: '16" rubber tracks (90%+)',
      hydraulicFlow: '33.3 gpm main, 23.8 gpm aux',
      fuelTank: '20.1 gal',
      cab: 'Enclosed heat/AC/Bluetooth/camera, joystick controls',
      features: '4-way dozer blade with float, quick-hitch ready 1570 mm dipper, LED lights, high/low-flow aux hydraulics',
      status: 'Low hours, fully serviced, ready to ship',
    },
    gallery: [
      jcb55z1Image,
    ],
  },
  {
    id: 64,
    name: '2024 CASE CX42D Mini Excavator',
    year: 2024,
    hours: 185,
    location: 'Dallas, Texas',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'earthmoving',
    image: caseCx42dImage1,
    description: 'Dealer demo 2024 CASE CX42D with full factory warranty – basically brand-new at a sharp discount. CX D-Series delivers legendary CASE digging power with 9,710 lbf bucket breakout and 6,280 lbf arm force for the toughest utility and landscaping jobs. Features zero-tail swing, standard long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, 4-way hydraulic angle blade with float, high-flow auxiliary circuit, expandable rubber undercarriage, and quick-coupler + 24" bucket + hydraulic thumb. Full CASE factory warranty until 2027/3,000 hrs.',
    specs: {
      engine: 'Yanmar 3TNV86CHT Tier 4 Final',
      power: '37.4 hp @ 2,200 rpm',
      weight: '10,450 lb (4,741 kg)',
      maxDiggingDepth: '11 ft 6 in (3.51 m) long arm',
      maxReach: '19 ft 3 in (5.87 m)',
      maxDumpHeight: '12 ft 2 in (3.71 m)',
      breakoutForce: '9,710 lbf bucket / 6,280 lbf arm',
      travelSpeed: '1.7 / 3.0 mph (2-speed)',
      tailSwing: 'Zero tail swing',
      trackWidth: '13" rubber expandable (99%)',
      hydraulicFlow: '22.2 gpm main, 16.6 gpm proportional aux',
      fuelTank: '13.2 gal',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      warranty: 'Full CASE factory warranty until 2027 or 3,000 hrs',
      features: 'Hydraulic quick-coupler, 24" digging bucket, hydraulic thumb, 4-way angle blade with float, long arm, expandable undercarriage',
      status: 'Dealer demo – ships in 48 hrs',
    },
    gallery: [
      caseCx42dImage1,
      caseCx42dImage2,
      caseCx42dImage3,
      caseCx42dImage4,
      caseCx42dImage5,
    ],
  },
  {
    id: 65,
    name: '2023 Wacker Neuson EZ26 Mini Excavator',
    year: 2023,
    hours: 890,
    location: 'Atlanta, Georgia',
    price: 36000,
    originalPrice: 36000,
    discount: 0,
    category: 'earthmoving',
    isComingSoon: true,
    image: wackerNeusonEz26Image,
    description: 'Premium compact mini excavator from one of Europe\'s top manufacturers – the Wacker Neuson EZ26 dominates tight-space utility digs, landscaping, and residential construction where larger machines just won\'t fit. Zero-tail swing with only 55" total width, making it perfect for gated backyards, narrow alleys, and indoor demo. Yanmar Tier 4 Final 24.8 hp (no DEF), standard long arm, enclosed ROPS/FOPS cab with heat/A/C/joystick controls/radio/LED lights, 4-way dozer blade with float, proportional aux hydraulics for thumbs/hammers, expandable rubber undercarriage.',
    specs: {
      engine: 'Yanmar 3TNV80F Tier 4 Final (no DEF)',
      power: '24.8 hp @ 2,400 rpm',
      weight: '5,820 lb (2,640 kg)',
      maxDiggingDepth: '8 ft 2 in (2.49 m)',
      maxReach: '14 ft 3 in (4.35 m)',
      maxDumpHeight: '9 ft 6 in (2.90 m)',
      breakoutForce: '4,720 lbf bucket / 3,170 lbf arm',
      travelSpeed: '1.5 / 2.7 mph (2-speed)',
      tailSwing: 'Zero tail swing (55" total width)',
      trackWidth: '9.8" rubber expandable (90%+)',
      hydraulicFlow: '11.6 gpm main, proportional aux',
      fuelTank: '7.9 gal',
      cab: 'Enclosed ROPS/FOPS, heat/AC, radio, LED lights',
      features: 'Long arm, 4-way dozer blade, proportional aux hydraulics, expandable undercarriage, 16" bucket included',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      wackerNeusonEz26Image,
    ],
  },
  {
    id: 68,
    name: '2018 Caterpillar 303E CR Mini Excavator',
    year: 2018,
    hours: 2450,
    location: 'Tampa, Florida',
    price: 32000,
    originalPrice: 32000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar303ecrImage,
    description: 'Legendary compact radius mini excavator built for tight residential, landscaping, and utility digs where traditional excavators just won\'t fit – 3.5-ton class with zero tail swing and only 58" overall width. Cat C1.1 Tier 4 Final 23.5 hp diesel (no DEF, no regen downtime), load-sensing hydraulics with proportional auxiliary circuit for thumbs/hammers/augers, expandable rubber undercarriage (39"–51" track width), enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights.',
    specs: {
      engine: 'Cat C1.1 23.5 hp Tier 4 Final (no DEF)',
      power: '23.5 hp',
      weight: '7,913 lb (3,589 kg)',
      maxDiggingDepth: '10 ft 10 in (3.30 m)',
      maxReach: '16 ft 1 in (4.90 m)',
      maxDumpHeight: '10 ft 2 in (3.10 m)',
      breakoutForce: '5,846 lbf (26.0 kN) bucket / 3,597 lbf (16.0 kN) arm',
      tailSwing: 'Zero tail swing',
      trackWidth: '9.8" rubber expandable (39"–51") 80%+',
      hydraulicFlow: '15.3 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 18" digging bucket, dozer blade with float, swing boom, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar303ecrImage,
    ],
  },
  {
    id: 69,
    name: '2020 Bobcat E50 Compact Excavator',
    year: 2020,
    hours: 1890,
    location: 'Charlotte, North Carolina',
    price: 45000,
    originalPrice: 45000,
    discount: 0,
    category: 'earthmoving',
    image: bobcatE50Image,
    description: 'Premium mid-size compact excavator that dominates the rental fleet and contractor market – Bobcat E50 delivers 5-ton class performance with a tighter footprint than competitors. Bobcat D24 Tier 4 Final 49.8 hp diesel (no DEF hassles), load-sensing hydraulics with high-flow auxiliary circuit (26.4 gpm @ 3,335 psi for mulchers/hammers/grapples), minimal tail swing for tight-site maneuverability, enclosed ROPS/FOPS cab with heat/AC/deluxe suspension seat/joystick controls/Bluetooth radio/rear camera/LED work lights, standard long arm for extended reach.',
    specs: {
      engine: 'Bobcat D24 49.8 hp Tier 4 Final (no DEF)',
      power: '49.8 hp',
      weight: '11,184 lb (5,073 kg)',
      maxDiggingDepth: '12 ft 7 in (3.84 m) long arm',
      maxReach: '20 ft 6 in (6.25 m)',
      maxDumpHeight: '13 ft 2 in (4.01 m)',
      breakoutForce: '8,983 lbf (40.0 kN) bucket / 5,620 lbf (25.0 kN) arm',
      tailSwing: 'Minimal tail swing',
      trackWidth: '15.7" rubber tracks (85%+)',
      hydraulicFlow: '26.4 gpm high-flow aux @ 3,335 psi',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, hydraulic thumb, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      bobcatE50Image,
    ],
  },
  {
    id: 70,
    name: '2021 Caterpillar 304E2 CR Mini Excavator',
    year: 2021,
    hours: 1650,
    location: 'Denver, Colorado',
    price: 48000,
    originalPrice: 48000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar304e2crImage1,
    description: 'Premium compact radius mini excavator – Cat 304E2 CR delivers 4-ton class performance with zero tail swing for ultimate tight-site maneuverability. Cat C1.7 Tier 4 Final 30.9 hp diesel (no DEF, no regen downtime), load-sensing hydraulics with proportional auxiliary circuit for thumbs/hammers/augers, expandable rubber undercarriage (51"–64" track width), enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, standard long arm for 11 ft 4 in dig depth.',
    specs: {
      engine: 'Cat C1.7 30.9 hp Tier 4 Final (no DEF)',
      power: '30.9 hp',
      weight: '9,259 lb (4,200 kg)',
      maxDiggingDepth: '11 ft 4 in (3.46 m)',
      maxReach: '17 ft 9 in (5.41 m)',
      maxDumpHeight: '11 ft 5 in (3.48 m)',
      breakoutForce: '7,418 lbf (33.0 kN) bucket / 4,496 lbf (20.0 kN) arm',
      tailSwing: 'Zero tail swing',
      trackWidth: '13.8" rubber expandable (51"–64") 90%+',
      hydraulicFlow: '17.4 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, dozer blade with float, swing boom, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar304e2crImage1,
      caterpillar304e2crImage2,
      caterpillar304e2crImage3,
      caterpillar304e2crImage4,
      caterpillar304e2crImage5,
    ],
  },
  {
    id: 71,
    name: '2023 Kubota KX033-4 Compact Excavator',
    year: 2023,
    hours: 1013,
    location: 'Dallas, Texas',
    price: 43800,
    originalPrice: 43800,
    discount: 0,
    category: 'earthmoving',
    image: kubotaKx0334Image,
    description: 'Premium compact excavator dominating the rental and small-site market – zero tail swing for ultimate maneuverability in tight urban digs, landscaping, utilities, and trenching. Kubota D1703M-DI-E4 Tier 4 Final 23.3 hp (no DEF hassles), load-sensing hydraulics with up to 15.8 gpm aux flow for thumbs/grapples/hammers, extendable dipper for +20" dig depth/reach, hydraulic angle blade with float, quick-coupler + 24" tooth bucket included, enclosed ROPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED lights.',
    specs: {
      engine: 'Kubota D1703M-DI-E4 23.3 hp Tier 4 Final (no DEF)',
      power: '23.3 hp',
      weight: '7,938 lb (3,600 kg)',
      maxDiggingDepth: '10 ft 6 in (3.20 m) extendable',
      maxReach: '16 ft 10 in (5.13 m)',
      maxDumpHeight: '11 ft 2 in (3.40 m)',
      breakoutForce: '8,138 lbf (3,694 kgf) bucket / 3,867 lbf (1,756 kgf) arm',
      tailSwing: 'Zero tail swing',
      trackWidth: '12" rubber tracks (85%+)',
      hydraulicFlow: '15.8 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      warranty: 'Remaining Kubota components',
      features: 'Hydraulic angle blade with float, quick-coupler, 24" tooth bucket, extendable dipper (+20"), 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      kubotaKx0334Image,
      kubotaKx0334Image2,
      kubotaKx0334Image3,
      kubotaKx0334Image4,
    ],
  },
  {
    id: 72,
    name: '2025 Bobcat E10 Mini Excavator',
    year: 2025,
    hours: 0,
    location: 'Orlando, Florida',
    price: 22500,
    originalPrice: 22500,
    discount: 0,
    category: 'earthmoving',
    image: bobcatE10Image,
    description: 'Smallest beast in Bobcat\'s lineup – ultra-compact 1-ton zero-tailswing mini excavator revolutionizing tight-space digs, landscaping, utilities, and rental fleets where hand tools are the only alternative. Kubota D722 Tier 4 Final 10.2 hp diesel (no DEF, no regen downtime), retractable undercarriage from 28" to 43" for doorways/trailers, 2-speed travel up to 1.7 mph, hydraulic quick-coupler + 8" thumb-ready digging bucket included, dozer blade with float, open ROPS canopy with joystick controls/LED work lights.',
    specs: {
      engine: 'Kubota D722 10.2 hp Tier 4 Final (no DEF)',
      power: '10.2 hp',
      weight: '2,593 lb (1,176 kg)',
      maxDiggingDepth: '6 ft (1.83 m)',
      maxReach: '10 ft 2 in (3.10 m) at ground level',
      maxDumpHeight: '6 ft (1.83 m)',
      breakoutForce: '1,865 lbf (8.29 kN) bucket / 1,248 lbf (5.55 kN) arm',
      tailSwing: 'Zero tail swing',
      trackWidth: '7.1" rubber retractable (28"–43" width, 100%)',
      hydraulicFlow: '5.3 gpm @ 2,756 psi proportional aux',
      cab: 'Open ROPS canopy, joystick controls, LED lights',
      warranty: 'Full Bobcat 2 yr/1,500 hr + 5 yr powertrain',
      features: 'Hydraulic quick-coupler, 8" thumb-ready digging bucket, dozer blade with float, retractable undercarriage, 2-speed travel (1.7 mph), auto-idle',
      status: 'Brand new (0 hours), in stock Orlando FL – ships in 24-48 hrs',
    },
    gallery: [
      bobcatE10Image,
    ],
  },
  {
    id: 73,
    name: '2023 John Deere 333G Compact Track Loader',
    year: 2023,
    hours: 1280,
    location: 'Minneapolis, Minnesota',
    price: 58000,
    originalPrice: 58000,
    discount: 0,
    category: 'loaders',
    isComingSoon: true,
    isReserved: true,
    image: johnDeere333gImage,
    description: 'Go-to mid-frame vertical-lift compact track loader for heavy construction, landscaping, material handling, and rental fleets – built tough with John Deere\'s legendary reliability. Yanmar 4TNV94FHT Tier 4 Final 100 hp diesel (no DEF issues), hydrostatic two-speed transmission up to 10 mph, 3,700 lb ROC for stacking pallets high, 12 ft 3 in lift height, high-flow hydraulics (32 gpm @ 3,450 psi for mulchers/grapples), electro-hydraulic joystick controls, enclosed cab with heat/AC/Bluetooth radio/rear camera/LED work lights.',
    specs: {
      engine: 'Yanmar 4TNV94FHT 100 hp (74.6 kW) Tier 4 Final (no DEF)',
      power: '100 hp (74.6 kW)',
      weight: '12,100 lb (5,493 kg) operating weight',
      maxLiftCapacity: '3,700 lb (1,680 kg) rated operating capacity',
      tippingLoad: '10,571 lb (4,797 kg)',
      maxLiftHeight: '12 ft 3 in (3.73 m)',
      breakoutForce: '8,990 lbf (40 kN)',
      travelSpeed: '5.7 / 10 mph (2-speed)',
      trackWidth: '17.7 in (450 mm) steel-embedded rubber (85%+)',
      hydraulicFlow: 'High-flow 32 gpm (121 L/min) @ 3,450 psi',
      fuelTank: '24.8 gal (94 L)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera, EH joysticks',
      features: 'Quick-attach plate, 84" low-profile bucket with BOE, ride control, reversing fan, 5.1 psi ground pressure',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      johnDeere333gImage,
    ],
  },
  {
    id: 74,
    name: '2025 Rippa NDI665 Mini Track Loader',
    year: 2025,
    hours: 0,
    location: 'Strafford, Missouri',
    price: 14500,
    originalPrice: 14500,
    discount: 0,
    isSold: true,
    category: 'loaders',
    image: rippaNdi665Image,
    description: 'Budget-crushing mini track loader exploding in the 2025 rental, landscaping, and small construction market – compact 2,500 lb frame with 800 lb lift capacity crushes tight jobs like mulching, grading, and material handling without the big-brand price tag. Kubota D1105 Tier 4 Final 24 hp diesel (no DEF, no regen downtime, plus 2-year/2,000 hr Kubota engine warranty), hydrostatic drive with 2-speed up to 7 mph, joystick pilot controls, inverted hydraulic cylinder for max dump clearance, 3-pump hydraulic system.',
    specs: {
      engine: 'Kubota D1105 24 hp Tier 4 Final (no DEF)',
      power: '24 hp',
      weight: '2,500 lb (1,134 kg) operating weight',
      maxLiftCapacity: '800 lb (363 kg) rated operating capacity',
      tippingLoad: '2,285 lb (1,036 kg)',
      maxLiftHeight: '8 ft 2 in (2.49 m)',
      breakoutForce: '2,200 lbf',
      travelSpeed: '4.3 / 7 mph (2-speed)',
      trackWidth: '9 in (230 mm) rubber tracks (100%)',
      hydraulicFlow: '10 gpm aux @ 2,800 psi (3-pump system)',
      fuelTank: '7.4 gal (28 L)',
      cab: 'Enclosed ROPS canopy, joystick pilots, LED lights, Bluetooth',
      warranty: '1 yr parts/labor + 2 yr/2,000 hr Kubota engine',
      features: 'Quick-attach plate, 60" low-profile bucket, inverted hydraulic cylinder, auto-idle, cold-start package, 4.2 psi ground pressure',
      status: 'Brand new (0 hours), in stock Strafford MO – ships in 24-48 hrs',
    },
    gallery: [
      rippaNdi665Image,
    ],
  },
  {
    id: 75,
    name: '2018 Caterpillar 299D2 Compact Track Loader',
    year: 2018,
    hours: 2450,
    location: 'Kansas City, Missouri',
    price: 38000,
    originalPrice: 38000,
    discount: 0,
    category: 'loaders',
    image: caterpillar299d2Image,
    description: 'Heavy-duty mid-frame radial-lift compact track loader – rental fleet and contractor staple for construction, landscaping, excavation, and material handling. Unbeatable traction on mud/slopes/soft ground with zero downtime features. Cat C3.8 Tier 4 Final 95 hp diesel (no DEF regen hassles), hydrostatic two-speed transmission up to 8.4 mph, 3,200 lb ROC (35% tipping), 9 ft 6 in hinge pin height, high-flow hydraulics (32 gpm @ 3,335 psi for mulchers/grapples/forks), electro-hydraulic joysticks with pattern changer.',
    specs: {
      engine: 'Cat C3.8 DIT 95 hp (71 kW) Tier 4 Final (no DEF)',
      power: '95 hp (71 kW)',
      weight: '11,608 lb (5,265 kg) operating weight',
      maxLiftCapacity: '3,200 lb (1,452 kg) at 35% tipping',
      tippingLoad: '9,143 lb (4,148 kg)',
      maxLiftHeight: '9 ft 6 in (2.90 m) hinge pin',
      breakoutForce: '8,200 lbf (36.5 kN)',
      travelSpeed: '5.2 / 8.4 mph (2-speed)',
      trackWidth: '15.7 in (400 mm) steel-embedded rubber (80%+)',
      hydraulicFlow: 'High-flow 32 gpm (121 L/min) @ 3,335 psi',
      fuelTank: '27.7 gal (105 L)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera, EH joysticks',
      features: 'Quick-attach plate, 78" dirt bucket with BOE, ride control, reversing fan, pattern changer, 5.9 psi ground pressure',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar299d2Image,
    ],
  },
  {
    id: 76,
    name: '2022 Caterpillar 299D3 Compact Track Loader',
    year: 2022,
    hours: 2180,
    location: 'St. Louis, Missouri',
    price: 62000,
    originalPrice: 62000,
    discount: 0,
    category: 'loaders',
    image: caterpillar299d3Image,
    description: 'Premium mid-frame vertical-lift compact track loader – contractor and rental fleet essential for construction, landscaping, excavation, and material handling. Suspended undercarriage delivers unmatched traction, flotation, and stability on mud, slopes, or rough terrain. Cat C3.8 Tier 4 Final 95 hp diesel (no DEF regen downtime), hydrostatic two-speed transmission up to 8.4 mph, 3,480 lb ROC (35% tipping), 10 ft 6 in hinge pin height, high-flow hydraulics (32 gpm @ 3,335 psi for mulchers/grapples/forks), electro-hydraulic joysticks with ISO/SAE pattern changer.',
    specs: {
      engine: 'Cat C3.8 DIT 95 hp (71 kW) Tier 4 Final (no DEF)',
      power: '95 hp (71 kW)',
      weight: '11,464 lb (5,200 kg) operating weight',
      maxLiftCapacity: '3,480 lb (1,580 kg) at 35% tipping',
      tippingLoad: '9,945 lb (4,510 kg)',
      maxLiftHeight: '10 ft 6 in (3.20 m) hinge pin',
      breakoutForce: '7,270 lbf (32.4 kN) tilt / 6,162 lbf (27.4 kN) lift',
      travelSpeed: '5.2 / 8.4 mph (2-speed)',
      trackWidth: '17.7 in (450 mm) steel-embedded rubber (85%+)',
      hydraulicFlow: 'High-flow 32 gpm (121 L/min) @ 3,335 psi',
      fuelTank: '27.7 gal (105 L)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera, EH joysticks',
      features: 'Vertical lift, quick-attach plate, 84" low-profile bucket with BOE, ride control, reversing fan, pattern changer, 5.9 psi ground pressure',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar299d3Image,
    ],
  },
  {
    id: 77,
    name: '2021 Caterpillar 279D3',
    year: 2021,
    hours: 2340,
    location: 'Tampa, Florida',
    price: 42000,
    originalPrice: 42000,
    discount: 0,
    category: 'loaders',
    image: caterpillar279d3Image,
    description: 'The perfect mid-frame radial-lift track loader for landscaping, construction, and rental fleets – 2,940 lb ROC, 10 ft 1 in hinge pin height, and legendary Cat undercarriage traction. Cat C3.8 Tier 4 Final 74 hp (no DEF), high-flow XPS hydraulics (30 gpm @ 3,500 psi), 15.7" tracks at 85%+, ride control, reversing fan, advanced display with rear camera, Bluetooth radio, air-ride seat, self-leveling, quick-attach + 78" bucket with BOE included. Fresh full service, zero leaks, tight machine.',
    specs: {
      engine: 'Cat C3.8 74 hp Tier 4 Final (no DEF)',
      power: '74 hp (55 kW)',
      weight: '10,095 lb (4,579 kg)',
      capacity: '2,940 lb (1,334 kg) @ 35% tipping load',
      tippingLoad: '8,400 lb',
      liftHeight: '10 ft 1 in hinge pin',
      hydraulicFlow: 'High-flow XPS 30 gpm @ 3,500 psi',
      trackWidth: '15.7 in steel-embedded rubber (85%+)',
      cab: 'Enclosed heat/AC, Bluetooth, rear camera, air-ride seat',
      features: '2-speed, ride control, reversing fan, self-leveling, quick-attach + 78" bucket with BOE included',
      status: 'Florida-kept, dealer-serviced, ships in 24–48 hrs',
    },
    gallery: [
      caterpillar279d3Image,
    ],
  },
  {
    id: 78,
    name: '2022 CASE TR310B',
    year: 2022,
    hours: 1950,
    location: 'Houston, Texas',
    price: 48000,
    originalPrice: 48000,
    discount: 0,
    category: 'loaders',
    image: caseTr310bImage,
    description: 'The powerhouse medium-frame radial-lift compact track loader that\'s a rental fleet and contractor favorite for construction, landscaping, material handling, and excavation – wider tracks deliver unbeatable stability and low ground pressure (4.4 psi) on soft or uneven terrain, while the 3,100 lb ROC crushes pallet stacking and truck loading. FPT 74 hp Tier 4 Final diesel (maintenance-free, no DPF/DEF fluids or filter service), hydrostatic two-speed transmission up to 8.2 mph, high-flow auxiliary hydraulics (32.4 gpm @ 3,050 psi for mulchers/grapples/forks), electro-hydraulic joysticks with selectable ISO/H-pattern controls, enclosed ROPS/FOPS cab with heat/AC/Bluetooth radio/rear camera/8-inch LCD display/LED work lights, 17.7" steel-embedded rubber tracks at 85%+, quick-attach plate + 84" low-profile bucket with bolt-on edge included, ride control, reversing fan, fresh full service, tight undercarriage, no leaks, no welds – ready to lift heavy and run all day.',
    specs: {
      engine: 'FPT 74 hp (55 kW) Tier 4 Final (no DPF/DEF service)',
      power: '74 hp (55 kW)',
      weight: '8,880 lb (4,027 kg)',
      capacity: '3,100 lb (1,406 kg) @ 50% tipping load',
      tippingLoad: '6,200 lb (2,812 kg)',
      liftHeight: '11 ft 10 in (3.61 m) hinge pin',
      breakoutForce: '8,700 lbf (38.7 kN)',
      travelSpeed: '5.3 / 8.2 mph (2-speed)',
      hydraulicFlow: 'High-flow 32.4 gpm (123 L/min) @ 3,050 psi',
      fuelTank: '25.3 gal (96 L)',
      trackWidth: '17.7 in (450 mm) steel-embedded rubber (85%+)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera, EH joysticks',
      features: 'Ride control, reversing fan, 8-inch LCD display, LED work lights, quick-attach + 84" low-profile bucket with BOE. Ground pressure: 4.4 psi (30.3 kPa)',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caseTr310bImage,
    ],
  },
  {
    id: 79,
    name: '2023 Kubota SVL75-3',
    year: 2023,
    hours: 980,
    location: 'Omaha, Nebraska',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'loaders',
    image: kubotaSvl753Image,
    description: 'The #1-selling compact track loader in the USA – a mid-frame vertical-lift powerhouse for construction, landscaping, material handling, and rental fleets, with unmatched traction on mud/slopes/soft ground and zero downtime reliability. Kubota V3307-CR-TE5A Tier 4 Final 74.3 hp diesel (no DEF regen hassles), hydrostatic two-speed transmission up to 8 mph, 2,490 lb ROC (35% tipping) for high stacking, 10 ft 2 in hinge pin height for easy truck loading, high-flow hydraulics (29.8 gpm @ 3,185 psi for mulchers/grapples/forks), electro-hydraulic joysticks with pattern changer, enclosed ROPS/FOPS cab with heat/AC/Bluetooth radio/rear camera/7-inch LCD touchscreen/LED work lights, 15.8" steel-embedded rubber tracks at 85%+, quick-attach plate + 74" low-profile bucket with bolt-on edge included, ride control, reversing fan, Advanced Multifunction Valve (AMV) for smooth multi-function operation.',
    specs: {
      engine: 'Kubota V3307-CR-TE5A 74.3 hp (55.2 kW) Tier 4 Final (no DEF)',
      power: '74.3 hp (55.2 kW)',
      weight: '9,420 lb (4,273 kg)',
      capacity: '2,490 lb (1,130 kg) @ 35% tipping load',
      tippingLoad: '7,110 lb (3,226 kg)',
      liftHeight: '10 ft 2 in (3.11 m) hinge pin',
      breakoutForce: '6,191 lbf (27.5 kN) bucket',
      travelSpeed: '4.2 / 8 mph (2-speed)',
      hydraulicFlow: 'High-flow 29.8 gpm (112.9 L/min) @ 3,185 psi',
      fuelTank: '24.8 gal (94 L)',
      trackWidth: '15.8 in (400 mm) steel-embedded rubber (85%+)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera, 7" LCD touchscreen',
      features: 'Ride control, reversing fan, AMV, Electronic Travel Torque Management, quick-attach + 74" bucket with BOE. Ground pressure: 5.3 psi (36.5 kPa)',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      kubotaSvl753Image,
    ],
  },
  {
    id: 80,
    name: '2014 Bobcat A300',
    year: 2014,
    hours: 2450,
    isReserved: true,
    location: 'Phoenix, Arizona',
    price: 28000,
    originalPrice: 28000,
    discount: 0,
    category: 'loaders',
    image: bobcatA300Image,
    description: 'The legendary all-wheel steer skid steer loader that\'s a game-changer for tight-site maneuvering and zero turf damage – perfect for landscaping, construction, agriculture, and rental fleets where traditional skid steers tear up the ground. Pre-emissions Kubota V3300-T turbo diesel cranks 81 hp with no DEF/regen downtime, hydrostatic two-speed transmission up to 7 mph, 3,000 lb ROC for heavy pallet stacking, 8 ft 3 in hinge pin height for easy truck loading, high-flow hydraulics (30.7 gpm @ 3,300 psi for mulchers/grapples/forks), all-wheel steering for crab, circle, or coordinated modes, enclosed ROPS/FOPS cab with heat/AC/Bluetooth radio/LED work lights, 12-16.5 HD tires at 75%+, quick-attach plate + 72" tooth bucket with bolt-on edge included.',
    specs: {
      engine: 'Kubota V3300-T Turbo Diesel 81 hp (pre-emissions, no DEF)',
      power: '81 hp',
      weight: '8,673 lb (3,934 kg)',
      capacity: '3,000 lb (1,360 kg)',
      tippingLoad: '6,111 lb (2,772 kg)',
      liftHeight: '8 ft 3 in (2.51 m) hinge pin',
      breakoutForce: '5,500 lbf (24.5 kN)',
      travelSpeed: '4.1 / 7 mph (2-speed)',
      hydraulicFlow: 'High-flow 30.7 gpm (116 L/min) @ 3,300 psi',
      fuelTank: '23.5 gal (89 L)',
      tireSize: '12-16.5 HD Super Traction (75%+)',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, LED work lights',
      features: 'All-wheel steer (crab/circle/coordinated), quick-attach + 72" tooth bucket with BOE, 2-speed, self-leveling',
      status: 'Arizona-kept, dealer-serviced, ships in 24–48 hrs',
    },
    gallery: [
      bobcatA300Image,
    ],
  },
  {
    id: 81,
    name: '2020 Caterpillar 305CR Mini Excavator',
    year: 2020,
    hours: 2100,
    location: 'Nashville, Tennessee',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'excavators',
    image: caterpillar305crImage1,
    description: 'Premium 5-ton class mini excavator – Cat 305CR delivers heavy-duty performance with a compact reduced tail swing footprint for tight residential, utility, and commercial digs. Cat C2.4 Tier 4 Final 40.4 hp diesel (no DEF, no regen downtime), load-sensing hydraulics with proportional auxiliary circuit for thumbs/hammers/augers, 12 ft 10 in dig depth with long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, standard hydraulic thumb, quick-coupler + 24" bucket included.',
    specs: {
      engine: 'Cat C2.4 40.4 hp Tier 4 Final (no DEF)',
      power: '40.4 hp',
      weight: '11,530 lb (5,230 kg)',
      maxDiggingDepth: '12 ft 10 in (3.91 m) long arm',
      maxReach: '20 ft 3 in (6.17 m)',
      maxDumpHeight: '13 ft 5 in (4.09 m)',
      breakoutForce: '8,992 lbf (40.0 kN) bucket / 6,182 lbf (27.5 kN) arm',
      tailSwing: 'Compact radius (reduced tail swing)',
      trackWidth: '15.7" rubber tracks (85%+)',
      hydraulicFlow: '22.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, hydraulic thumb, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar305crImage1,
      caterpillar305crImage2,
      caterpillar305crImage3,
      caterpillar305crImage4,
      caterpillar305crImage5,
    ],
  },
  {
    id: 82,
    name: '2021 Caterpillar 305E2 CR Mini Excavator',
    year: 2021,
    hours: 1850,
    location: 'Atlanta, Georgia',
    price: 48000,
    originalPrice: 48000,
    discount: 0,
    category: 'excavators',
    image: caterpillar305e2crImage1,
    description: 'Premium 5-ton class compact radius mini excavator – Cat 305E2 CR delivers best-in-class power with zero tail swing for ultimate maneuverability in tight urban digs, landscaping, utilities, and residential construction. Cat C2.4 Tier 4 Final 40.7 hp diesel (no DEF hassles), load-sensing hydraulics with proportional auxiliary circuit for thumbs/hammers/augers, 12 ft 6 in dig depth with long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, standard hydraulic thumb-ready circuit, quick-coupler + 24" bucket included.',
    specs: {
      engine: 'Cat C2.4 40.7 hp Tier 4 Final (no DEF)',
      power: '40.7 hp',
      weight: '11,464 lb (5,200 kg)',
      maxDiggingDepth: '12 ft 6 in (3.81 m) long arm',
      maxReach: '19 ft 10 in (6.04 m)',
      maxDumpHeight: '13 ft 1 in (3.99 m)',
      breakoutForce: '8,992 lbf (40.0 kN) bucket / 5,620 lbf (25.0 kN) arm',
      tailSwing: 'Compact radius (zero tail swing)',
      trackWidth: '15.7" rubber tracks (90%+)',
      hydraulicFlow: '22.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, thumb-ready circuit, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar305e2crImage1,
      caterpillar305e2crImage2,
      caterpillar305e2crImage3,
      caterpillar305e2crImage4,
      caterpillar305e2crImage5,
    ],
  },
  {
    id: 83,
    name: '2022 Caterpillar 305E2 CR Mini Excavator',
    year: 2022,
    hours: 1420,
    location: 'Charlotte, North Carolina',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'excavators',
    image: caterpillar305e2cr2022Image1,
    description: 'Low-hour 2022 Cat 305E2 CR – one of the cleanest 5-ton class compact radius mini excavators on the market. Zero tail swing design dominates tight urban digs, landscaping, utilities, and residential construction. Cat C2.4 Tier 4 Final 40.7 hp diesel (no DEF hassles), load-sensing hydraulics with proportional auxiliary circuit, 12 ft 6 in dig depth with long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, factory hydraulic thumb, quick-coupler + 24" bucket included. Fresh full service, zero damage history, runs like new.',
    specs: {
      engine: 'Cat C2.4 40.7 hp Tier 4 Final (no DEF)',
      power: '40.7 hp',
      weight: '11,464 lb (5,200 kg)',
      maxDiggingDepth: '12 ft 6 in (3.81 m) long arm',
      maxReach: '19 ft 10 in (6.04 m)',
      maxDumpHeight: '13 ft 1 in (3.99 m)',
      breakoutForce: '8,992 lbf (40.0 kN) bucket / 5,620 lbf (25.0 kN) arm',
      tailSwing: 'Compact radius (zero tail swing)',
      trackWidth: '15.7" rubber tracks (95%+)',
      hydraulicFlow: '22.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, factory hydraulic thumb, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'Dealer-serviced, work-ready, ships in 48 hrs',
    },
    gallery: [
      caterpillar305e2cr2022Image1,
      caterpillar305e2cr2022Image2,
      caterpillar305e2cr2022Image3,
      caterpillar305e2cr2022Image4,
      caterpillar305e2cr2022Image5,
    ],
  },
  {
    id: 84,
    name: '2024 Kubota KX040-4 Mini Excavator',
    year: 2024,
    hours: 380,
    location: 'Seattle, Washington',
    price: 54900,
    originalPrice: 54900,
    discount: 0,
    category: 'excavators',
    image: kubotaKx0404Image1,
    description: 'Premium 4-ton class compact excavator – Kubota KX040-4 delivers best-in-class performance with zero tail swing for ultimate maneuverability in tight urban digs, landscaping, utilities, and residential construction. Kubota V2607 Tier 4 Final 40.4 hp diesel (no DEF hassles), load-sensing hydraulics with proportional auxiliary circuit for thumbs/hammers/augers, 11 ft 6 in dig depth, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, factory hydraulic thumb, quick-coupler + 24" bucket included. Still under full Kubota warranty until 2027/3,000 hrs.',
    specs: {
      engine: 'Kubota V2607 40.4 hp Tier 4 Final (no DEF)',
      power: '40.4 hp',
      weight: '9,300 lb (4,218 kg)',
      maxDiggingDepth: '11 ft 6 in (3.51 m)',
      maxReach: '18 ft 5 in (5.61 m)',
      maxDumpHeight: '12 ft 4 in (3.76 m)',
      breakoutForce: '8,360 lbf (37.2 kN) bucket / 5,400 lbf (24.0 kN) arm',
      tailSwing: 'Zero tail swing',
      trackWidth: '13.8" rubber tracks (98%+)',
      hydraulicFlow: '18.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      warranty: 'Full Kubota warranty until 2027 or 3,000 hrs',
      features: 'Hydraulic quick-coupler, 24" digging bucket, factory hydraulic thumb, angle blade with float, 2-speed travel, joystick controls',
      status: 'Like-new, fully serviced, ships in 48 hrs',
    },
    gallery: [
      kubotaKx0404Image1,
      kubotaKx0404Image2,
      kubotaKx0404Image3,
      kubotaKx0404Image4,
      kubotaKx0404Image5,
    ],
  },
  {
    id: 85,
    name: '2024 Volvo L120H Wheel Loader',
    year: 2024,
    hours: 450,
    location: 'Billings, MT',
    price: 322400,
    originalPrice: 322400,
    discount: 0,
    category: 'wheel-loaders',
    image: volvoL120h2024Image1,
    isHotOffer: true,
    description: 'Flagship 2024 Volvo L120H wheel loader – nearly new with only 450 hours and full factory warranty remaining. Volvo D8M Tier 4 Final engine delivers 265 hp with exceptional fuel efficiency. Premium cab with heated/ventilated leather seat, Volvo Co-Pilot touchscreen, rear camera, and excellent visibility. Features include Boom Suspension System, ride control, Comfort Drive Control, 5.2 yd³ GP bucket with spill guard, and auto-idle. Perfect condition, dealer-maintained.',
    specs: {
      engine: 'Volvo D8M Tier 4 Final',
      power: '265 hp (198 kW)',
      weight: '46,738 lb (21,200 kg)',
      bucketCapacity: '5.2 yd³ (4.0 m³) GP with spill guard',
      breakoutForce: '44,500 lbf (198 kN)',
      tippingLoad: '33,070 lb (15,000 kg) full turn',
      maxDumpHeight: '9 ft 10 in (3.0 m)',
      maxReach: '4 ft 3 in (1.3 m) dump reach',
      travelSpeed: '23 mph (37 km/h)',
      turningRadius: '19 ft 8 in (6.0 m)',
      tireSize: '23.5R25 L3',
      fuelTank: '92 gal (350 L)',
      hydraulicTank: '34 gal (130 L)',
      cab: 'Premium cab, heated/ventilated leather seat, touchscreen, rear camera, Bluetooth',
      features: '5.2 yd³ GP bucket, Comfort Drive Control, Boom Suspension, ride control, auto-idle, LED lights, factory warranty',
      status: 'In stock Billings MT – factory warranty active',
    },
    gallery: [
      volvoL120h2024Image1,
      volvoL120h2024Image2,
      volvoL120h2024Image3,
      volvoL120h2024Image4,
      volvoL120h2024Image5,
    ],
  },
  {
    id: 86,
    name: '2020 Manitou MLT1040-145 PS+L Telehandler',
    year: 2020,
    hours: 4406,
    location: 'Billings, MT',
    price: 63750,
    originalPrice: 63750,
    discount: 0,
    category: 'telehandlers',
    image: manitouMlt1040145Image2,
    isHotOffer: true,
    description: 'Well-maintained 2020 Manitou MLT1040-145 PS+L with premium specs. Deutz 4-cylinder Tier 4 Final engine delivers 145 hp with excellent torque for heavy loads. Full cab with heat/AC, suspended seat, rear view camera, and joystick controls. Powershift transmission with 4WD, crab-steer capability, and frame leveling. Includes pallet forks and carriage - ready for immediate work. Strong service history with all maintenance records.',
    specs: {
      engine: 'Deutz TCD 3.6 L4 Tier 4 Final 145 hp',
      power: '145 hp (108 kW)',
      weight: '21,164 lb (9,600 kg)',
      maxLiftCapacity: '8,818 lb (4,000 kg)',
      maxLiftHeight: '32 ft 10 in (10.0 m)',
      forwardReach: '21 ft 4 in (6.5 m) at 2,205 lb',
      capacityAtMaxHeight: '8,818 lb (4,000 kg)',
      capacityAtMaxReach: '2,205 lb (1,000 kg)',
      transmission: 'Powershift 4F/3R',
      travelSpeed: '25 mph (40 km/h)',
      turningRadius: '13 ft 1 in (4.0 m) outside',
      tireSize: '460/70 R24',
      fuelTank: '47.5 gal (180 L)',
      hydraulicFlow: '34.3 gpm (130 L/min)',
      cab: 'Enclosed cab, heat/AC, suspended seat, rear camera, joystick controls',
      features: '4WS/2WS/Crab steer modes, frame leveling, pallet forks, carriage, 4WD, auto-idle, work lights',
      status: 'In stock Billings MT – full service records',
    },
    gallery: [
      manitouMlt1040145Image2,
      manitouMlt1040145Image1,
      manitouMlt1040145Image3,
      manitouMlt1040145Image4,
    ],
  },
  {
    id: 87,
    name: '2023 John Deere 310SL Backhoe Loader',
    year: 2023,
    hours: 1420,
    location: 'Billings, MT',
    price: 112480,
    originalPrice: 112480,
    discount: 0,
    category: 'backhoes',
    image: johnDeere310sl2023Image3,
    isHotOffer: true,
    description: 'Low-hour 2023 John Deere 310SL backhoe loader in excellent condition. PowerTech 4.5L Tier 4 Final engine delivers 93 hp with smooth power and excellent fuel economy. Full deluxe cab with heat/AC, air-ride seat, rear camera, and excellent visibility. Includes 1.15 yd³ loader bucket, 24" backhoe bucket, auxiliary hydraulics, ride control, and extendahoe. Perfect for utility work, landscaping, and construction.',
    specs: {
      engine: 'John Deere PowerTech 4.5L Tier 4 Final',
      power: '93 hp (69 kW)',
      weight: '17,280 lb (7,838 kg)',
      bucketCapacity: '1.15 yd³ (0.88 m³) loader',
      breakoutForce: '10,160 lbf (45.2 kN) loader',
      maxLiftCapacity: '7,660 lb (3,475 kg) at full height',
      maxDumpHeight: '10 ft 4 in (3.15 m)',
      maxDiggingDepth: '14 ft 6 in (4.42 m) backhoe',
      maxReach: '18 ft 6 in (5.64 m) backhoe',
      bucketDiggingForce: '8,900 lbf (39.6 kN) backhoe',
      transmission: 'Powershift 4F/4R',
      travelSpeed: '23 mph (37 km/h)',
      turningRadius: '13 ft 4 in (4.06 m)',
      tireSize: '12.5/80-18 front, 19.5L-24 rear',
      fuelTank: '37 gal (140 L)',
      hydraulicTank: '21 gal (80 L)',
      cab: 'Deluxe cab, heat/AC, air-ride seat, rear camera, Bluetooth radio',
      features: 'Extendahoe, ride control, aux hydraulics, pilot controls, 24" backhoe bucket, LED work lights',
      status: 'In stock Billings MT – serviced and ready',
    },
    gallery: [
      johnDeere310sl2023Image3,
      johnDeere310sl2023Image1,
      johnDeere310sl2023Image2,
      johnDeere310sl2023Image4,
      johnDeere310sl2023Image5,
    ],
  },
  {
    id: 88,
    name: '2022 John Deere 333G Compact Track Loader',
    year: 2022,
    hours: 1850,
    location: 'Billings, MT',
    price: 44250,
    originalPrice: 44250,
    discount: 0,
    category: 'track-loaders',
    image: johnDeere333g2022Image1,
    isComingSoon: true,
    isHotOffer: true,
    description: 'Powerful 2022 John Deere 333G compact track loader with excellent condition and service history. Yanmar 3.3L Tier 4 Final engine delivers 100 hp with smooth power delivery. Full cab with heat/AC, suspension seat, rear camera, and excellent visibility. High-flow hydraulics, 2-speed travel, electrohydraulic joysticks. Includes 84" bucket, quick-attach system, and LED work lights. Ready for landscaping, construction, and ag work.',
    specs: {
      engine: 'Yanmar 3.3L Tier 4 Final',
      power: '100 hp (75 kW)',
      weight: '11,850 lb (5,375 kg)',
      capacity: '3,700 lb (1,678 kg) @ 50% tipping load',
      tippingLoad: '7,400 lb (3,357 kg)',
      bucketCapacity: '0.95 yd³ (0.73 m³)',
      breakoutForce: '9,113 lbf (40.5 kN)',
      maxLiftCapacity: '7,400 lb (3,357 kg) at full height',
      maxLiftHeight: '10 ft 9 in (3.28 m) hinge pin',
      maxReach: '3 ft 4 in (1.02 m) at full height',
      travelSpeed: '7.5 mph (12 km/h) 2-speed',
      hydraulicFlow: '30.6 gpm (116 L/min) high-flow',
      trackWidth: '17.7 in (450 mm)',
      groundClearance: '10.3 in (262 mm)',
      fuelTank: '28 gal (106 L)',
      cab: 'Premium cab, heat/AC, suspension seat, rear camera, touchscreen display',
      features: '84" bucket, quick-attach, 2-speed, high-flow hydraulics, EH joysticks, LED lights, auto-idle',
      status: 'In stock Billings MT – dealer maintained',
    },
    gallery: [
      johnDeere333g2022Image1,
      johnDeere333g2022Image2,
      johnDeere333g2022Image3,
      johnDeere333g2022Image4,
      johnDeere333g2022Image5,
    ],
  },
  {
    id: 89,
    name: '2020 Caterpillar 305E2 CR Mini Excavator',
    year: 2020,
    hours: 2650,
    location: 'Billings, MT',
    price: 44000,
    originalPrice: 44000,
    discount: 0,
    category: 'excavators',
    image: caterpillar305e2cr2020Image1,
    isHotOffer: true,
    description: 'Solid 2020 Cat 305E2 CR compact radius mini excavator – proven 5-ton class workhorse with zero tail swing for tight urban digs, landscaping, utilities, and residential construction. Cat C2.4 Tier 4 Final 40.7 hp diesel (no DEF hassles), load-sensing hydraulics with proportional auxiliary circuit, 12 ft 6 in dig depth with long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, quick-coupler + 24" bucket included. Well-maintained with fresh service.',
    specs: {
      engine: 'Cat C2.4 40.7 hp Tier 4 Final (no DEF)',
      power: '40.7 hp',
      weight: '11,464 lb (5,200 kg)',
      maxDiggingDepth: '12 ft 6 in (3.81 m) long arm',
      maxReach: '19 ft 10 in (6.04 m)',
      maxDumpHeight: '13 ft 1 in (3.99 m)',
      breakoutForce: '8,992 lbf (40.0 kN) bucket / 5,620 lbf (25.0 kN) arm',
      tailSwing: 'Compact radius (zero tail swing)',
      trackWidth: '15.7" rubber tracks (80%+)',
      hydraulicFlow: '22.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'In stock Billings MT – dealer maintained',
    },
    gallery: [
      caterpillar305e2cr2020Image1,
      caterpillar305e2cr2020Image2,
      caterpillar305e2cr2020Image3,
      caterpillar305e2cr2020Image4,
      caterpillar305e2cr2020Image5,
    ],
  },
  {
    id: 90,
    name: '2021 Caterpillar 305E2 CR Mini Excavator',
    year: 2021,
    hours: 1950,
    location: 'Billings, MT',
    price: 46000,
    originalPrice: 46000,
    discount: 0,
    category: 'excavators',
    image: caterpillar305e2cr2021Image1,
    isHotOffer: true,
    description: 'Low-hour 2021 Cat 305E2 CR compact radius mini excavator – 5-ton class workhorse with zero tail swing for tight urban digs, landscaping, utilities, and residential construction. Cat C2.4 Tier 4 Final 40.7 hp diesel (no DEF hassles), load-sensing hydraulics with proportional auxiliary circuit, 12 ft 6 in dig depth with long arm, enclosed ROPS/FOPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED work lights, factory hydraulic thumb, quick-coupler + 24" bucket included. Excellent condition, dealer maintained.',
    specs: {
      engine: 'Cat C2.4 40.7 hp Tier 4 Final (no DEF)',
      power: '40.7 hp',
      weight: '11,464 lb (5,200 kg)',
      maxDiggingDepth: '12 ft 6 in (3.81 m) long arm',
      maxReach: '19 ft 10 in (6.04 m)',
      maxDumpHeight: '13 ft 1 in (3.99 m)',
      breakoutForce: '8,992 lbf (40.0 kN) bucket / 5,620 lbf (25.0 kN) arm',
      tailSwing: 'Compact radius (zero tail swing)',
      trackWidth: '15.7" rubber tracks (90%+)',
      hydraulicFlow: '22.5 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      features: 'Hydraulic quick-coupler, 24" digging bucket, factory hydraulic thumb, dozer blade with float, long arm, 2-speed travel, joystick controls',
      status: 'In stock Billings MT – excellent condition, dealer maintained',
    },
    gallery: [
      caterpillar305e2cr2021Image1,
      caterpillar305e2cr2021Image2,
      caterpillar305e2cr2021Image3,
      caterpillar305e2cr2021Image4,
    ],
  },
  {
    id: 91,
    name: '2023 Caterpillar 299D3 Compact Track Loader',
    year: 2023,
    hours: 1299,
    location: 'Billings, MT',
    price: 64685,
    originalPrice: 64685,
    discount: 0,
    category: 'track-loaders',
    image: caterpillar299d32023Image1,
    isHotOffer: true,
    description: 'Top-of-the-line 2023 CAT 299D3 XE compact track loader – the largest and most powerful in Cat\'s CTL lineup. Cat C3.8 Tier 4 Final engine delivers 110 gross hp with excellent fuel efficiency. Factory XE drivetrain with continuously variable transmission for smooth operation. Pressurized cab with heat/AC, suspension seat, touchscreen display, and rear camera. High-flow hydraulics with dual-direction self-leveling, ride control, and 2-speed travel. Ready for the most demanding jobs.',
    specs: {
      engine: 'Cat C3.8 Tier 4 Final',
      power: '110 hp (82 kW)',
      weight: '14,114 lb (6,402 kg)',
      capacity: '4,200 lb (1,905 kg) ROC @ 50%',
      tippingLoad: '8,400 lb (3,810 kg)',
      bucketCapacity: '1.1 yd³ (0.84 m³)',
      breakoutForce: '10,476 lbf (46.6 kN)',
      maxLiftCapacity: '8,400 lb at full height',
      maxLiftHeight: '11 ft 2 in (3.40 m) hinge pin',
      maxReach: '3 ft 8 in (1.12 m) at full height',
      travelSpeed: '7.6 mph (12.2 km/h) 2-speed',
      hydraulicFlow: '40.3 gpm (153 L/min) XPS high-flow',
      trackWidth: '20 in (508 mm)',
      groundClearance: '13.4 in (340 mm)',
      fuelTank: '37 gal (140 L)',
      cab: 'Deluxe pressurized cab, heat/AC, suspension seat, touchscreen, rear camera',
      features: '84" GP bucket, ride control, 2-speed, XE CVT drivetrain, dual-direction self-leveling, LED lights',
      status: 'In stock Billings MT – excellent condition, dealer serviced',
    },
    gallery: [
      caterpillar299d32023Image1,
      caterpillar299d32023Image2,
      caterpillar299d32023Image3,
      caterpillar299d32023Image4,
      caterpillar299d32023Image5,
    ],
  },
  {
    id: 92,
    name: '2021 Caterpillar 303E CR Mini Excavator',
    year: 2021,
    hours: 2187,
    location: 'Billings, MT',
    price: 34700,
    originalPrice: 34700,
    discount: 0,
    category: 'excavators',
    image: caterpillar303eCr2021Image1,
    isHotOffer: true,
    description: 'Well-maintained 2021 CAT 303E CR mini excavator – the ultimate compact reduced tail swing machine for tight jobsites. Cat C1.1 Tier 4 Final diesel engine delivers 23.5 hp with excellent fuel efficiency. Features ROPS/FOPS canopy, adjustable suspension seat, and intuitive joystick controls. Expandable undercarriage for enhanced stability when digging. Includes 18" bucket, mechanical quick coupler, and dozer blade. Ideal for residential construction, landscaping, and utility work.',
    specs: {
      engine: 'Cat C1.1 Tier 4 Final',
      power: '23.5 hp (17.5 kW)',
      weight: '7,913 lb (3,589 kg)',
      maxDiggingDepth: '10 ft 10 in (3.30 m)',
      maxReach: '16 ft 1 in (4.90 m) at ground',
      maxDumpingHeight: '10 ft 2 in (3.10 m)',
      bucketCapacity: '0.10 yd³ (0.08 m³)',
      bucketDiggingForce: '5,846 lbf (26 kN)',
      armDiggingForce: '3,597 lbf (16 kN)',
      swingSpeed: '9.5 rpm',
      travelSpeed: '2.8 mph (4.5 km/h)',
      tailSwing: '2 ft 9 in (840 mm) tail swing radius',
      trackWidth: '9.8 in (250 mm) rubber, expandable 39-51 in',
      fuelTank: '6.9 gal (26 L)',
      hydraulicFlow: '15.3 gpm (58 L/min)',
      cab: 'ROPS/FOPS canopy, suspension seat, dual pattern controls',
      features: '18" bucket, mechanical quick coupler, dozer blade, LED work lights',
      status: 'In stock Billings MT – work ready, dealer maintained',
    },
    gallery: [
      caterpillar303eCr2021Image1,
      caterpillar303eCr2021Image2,
      caterpillar303eCr2021Image3,
      caterpillar303eCr2021Image4,
    ],
  },
  {
    id: 93,
    name: '2019 Caterpillar 305E2 CR Mini Excavator',
    year: 2019,
    hours: 3412,
    location: 'Billings, MT',
    price: 44272,
    originalPrice: 44272,
    discount: 0,
    category: 'excavators',
    image: caterpillar305e2cr2019Image1,
    isHotOffer: true,
    description: 'Well-maintained 2019 CAT 305E2 CR mini excavator – the industry-leading 5-ton class machine with compact reduced tail swing. Cat C2.4 Tier 4 Final diesel delivers 40.7 hp with excellent fuel efficiency and no DEF required. Features enclosed ROPS/FOPS cab with heat/AC, suspension seat, and intuitive joystick controls. Expandable undercarriage for enhanced stability. Includes 24" bucket, mechanical quick coupler, and hydraulic thumb-ready circuit. Ideal for residential, commercial, and utility work.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final',
      power: '40.7 hp (30.3 kW)',
      weight: '11,464 lb (5,200 kg)',
      maxDiggingDepth: '12 ft 6 in (3.81 m)',
      maxReach: '19 ft 10 in (6.04 m) at ground',
      maxDumpingHeight: '13 ft 1 in (3.99 m)',
      bucketCapacity: '0.21 yd³ (0.16 m³)',
      bucketDiggingForce: '8,992 lbf (40 kN)',
      armDiggingForce: '5,620 lbf (25 kN)',
      swingSpeed: '9.0 rpm',
      travelSpeed: '3.1 mph (5.0 km/h)',
      tailSwing: '3 ft 2 in (970 mm) reduced tail swing',
      trackWidth: '15.7 in (400 mm) rubber',
      fuelTank: '13.2 gal (50 L)',
      hydraulicFlow: '22.5 gpm (85 L/min)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, suspension seat, dual pattern controls',
      features: '24" bucket, mechanical quick coupler, dozer blade, thumb-ready circuit, LED lights',
      status: 'In stock Billings MT – work ready, well maintained',
    },
    gallery: [
      caterpillar305e2cr2019Image1,
      caterpillar305e2cr2019Image2,
      caterpillar305e2cr2019Image3,
      caterpillar305e2cr2019Image4,
      caterpillar305e2cr2019Image5,
    ],
  },
];

// Category assignments by machine ID - prioritized over inline category values
const categoryMap: Record<number, MachineCategory> = {
  // Excavators (Mini, Compact, Hydraulic)
  1: 'excavators', // SY80U Excavator
  5: 'excavators', // SY215C Excavator
  45: 'excavators', // CAT 336 Excavator
  46: 'excavators', // Hitachi ZX350 Excavator
  47: 'excavators', // John Deere 210G Excavator
  53: 'excavators', // Kubota KX040-4 Mini Excavator
  63: 'excavators', // JCB 55Z-1 Mini Excavator
  64: 'excavators', // CASE CX42D Mini Excavator
  65: 'excavators', // Wacker Neuson EZ26 Mini Excavator
  68: 'excavators', // CAT 303E CR Mini Excavator
  69: 'excavators', // Bobcat E50 Compact Excavator
  70: 'excavators', // CAT 304E2 CR Mini Excavator
  71: 'excavators', // Kubota KX033-4 Compact Excavator
  72: 'excavators', // Bobcat E10 Mini Excavator
  81: 'excavators', // CAT 305CR Mini Excavator
  82: 'excavators', // CAT 305E2 CR Mini Excavator (2021)
  83: 'excavators', // CAT 305E2 CR Mini Excavator (2022)
  89: 'excavators', // CAT 305E2 CR Mini Excavator (2020)
  90: 'excavators', // CAT 305E2 CR Mini Excavator (2021 #2)
  84: 'excavators', // Kubota KX040-4 Mini Excavator (2024)
  92: 'excavators', // CAT 303E CR Mini Excavator (2021)
  93: 'excavators', // CAT 305E2 CR Mini Excavator (2019)
  
  // Dozers
  3: 'dozers', // Develon DD100 Dozer
  51: 'dozers', // CAT D6 Dozer (SOLD)
  52: 'dozers', // Komatsu D65PXi Dozer
  
  // Wheel Loaders
  4: 'wheel-loaders', // R640R43 Wheel Loader
  20: 'wheel-loaders', // WA320-8 Wheel Loader
  48: 'wheel-loaders', // CAT 950M Wheel Loader
  49: 'wheel-loaders', // JD 544 P-Tier Wheel Loader
  50: 'wheel-loaders', // Volvo L120H Wheel Loader (2016)
  85: 'wheel-loaders', // Volvo L120H Wheel Loader (2024)
  57: 'wheel-loaders', // Case 321F Wheel Loader (2019)
  58: 'wheel-loaders', // Case 321F Wheel Loader (2023)
  59: 'wheel-loaders', // Case 321F Wheel Loader (2024)
  60: 'wheel-loaders', // CAT 938M Wheel Loader 2022 (SOLD)
  61: 'wheel-loaders', // CAT 938M Wheel Loader 2021
  62: 'wheel-loaders', // CAT 938M Wheel Loader 2022 (2,680 hrs)
  80: 'wheel-loaders', // Bobcat A300 All-Wheel Steer Skid Steer
  
  // Track Loaders (Compact Track Loaders, Skid Steers)
  13: 'track-loaders', // ASV VT-70 Track Loader
  73: 'track-loaders', // John Deere 333G Compact Track Loader
  74: 'track-loaders', // Rippa NDI665 Mini Track Loader
  75: 'track-loaders', // CAT 299D2 Compact Track Loader
  76: 'track-loaders', // CAT 299D3 Compact Track Loader
  77: 'track-loaders', // CAT 279D3 Compact Track Loader
  78: 'track-loaders', // CASE TR310B Compact Track Loader
  79: 'track-loaders', // Kubota SVL75-3 Compact Track Loader
  88: 'track-loaders', // John Deere 333G Compact Track Loader (2022)
  91: 'track-loaders', // CAT 299D3 Compact Track Loader (2023)
  
  // Backhoes
  8: 'backhoes', // 310L EP Backhoe
  39: 'backhoes', // 310SL Backhoe
  87: 'backhoes', // John Deere 310SL Backhoe (2023)
  
  // Telehandlers & Forklifts
  7: 'telehandlers', // JCB 940-4
  9: 'telehandlers', // Merlo P50.18HM
  10: 'telehandlers', // John Deere 6430 (agricultural telehandler)
  38: 'telehandlers', // RS6-42
  40: 'telehandlers', // TL943C
  86: 'telehandlers', // Manitou MLT1040-145 PS+L
  
  // Compaction (Rollers)
  36: 'compaction', // CB16 Roller
};

const availabilityRegions = ['midwest', 'west', 'east', 'south'] as const;
const regionForMachine = (id: number) => availabilityRegions[id % availabilityRegions.length];

// Apply categories to all machines - categoryMap takes priority
const machinesWithCategories: Machine[] = allMachinesRaw.map(machine => ({
  ...machine,
  category: categoryMap[machine.id] || 'excavators',
  // per request: show ONLY availability region
  location: regionForMachine(machine.id),
}));

// Sort function: HOT OFFERS first, then by discount (desc), then by year (desc)
function sortMachines(machines: Machine[]): Machine[] {
  return [...machines].sort((a, b) => {
    if (a.isHotOffer && !b.isHotOffer) return -1;
    if (!a.isHotOffer && b.isHotOffer) return 1;
    if (b.discount !== a.discount) return b.discount - a.discount;
    return b.year - a.year;
  });
}

// Get sorted machines
const sortedMachines = sortMachines(machinesWithCategories);

// Get MINI excavators only (by name containing "Mini")
const miniExcavators = sortedMachines.filter(m => 
  m.category === 'excavators' && m.name.toLowerCase().includes('mini')
);

// Get ALL excavators (including medium/large)
const allExcavators = sortedMachines.filter(m => m.category === 'excavators');

// Export the machines array
export const machines = sortedMachines;

// Get unique categories from actual data
export const uniqueCategories = [...new Set(machines.map(m => m.category).filter(Boolean))] as MachineCategory[];
