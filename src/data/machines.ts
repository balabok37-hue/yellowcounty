import type { Machine, MachineCategory } from '@/components/MachineCard';
import sanySy80uImage from '@/assets/machines/sany-sy80u-1.webp';
import sanySy80uImage2 from '@/assets/machines/sany-sy80u-2.webp';
import sanySy80uImage3 from '@/assets/machines/sany-sy80u-3.webp';
import sanySy80uImage4 from '@/assets/machines/sany-sy80u-4.webp';
import sanySy80uImage5 from '@/assets/machines/sany-sy80u-5.webp';
import develonDd100Image1 from '@/assets/machines/develon-dd100-1.webp';
import develonDd100Image2 from '@/assets/machines/develon-dd100-2.webp';
import develonDd100Image3 from '@/assets/machines/develon-dd100-3.webp';
import develonDd100Image4 from '@/assets/machines/develon-dd100-4.webp';
import kubotaR640r43Image1 from '@/assets/machines/kubota-r640r43-1.webp';
import kubotaR640r43Image2 from '@/assets/machines/kubota-r640r43-2.webp';
import kubotaR640r43Image3 from '@/assets/machines/kubota-r640r43-3.webp';
import kubotaR640r43Image4 from '@/assets/machines/kubota-r640r43-4.webp';
import kubotaR640r43Image5 from '@/assets/machines/kubota-r640r43-5.webp';
// sanySy215cImage removed - file doesn't exist
import manitouMlt1040145Image1 from '@/assets/machines/manitou-mlt1040-145-1.webp';
import manitouMlt1040145Image2 from '@/assets/machines/manitou-mlt1040-145-2.webp';
import manitouMlt1040145Image3 from '@/assets/machines/manitou-mlt1040-145-3.webp';
import manitouMlt1040145Image4 from '@/assets/machines/manitou-mlt1040-145-4.webp';
import jcb9404NewImage from '@/assets/machines/jcb-940-4-new.webp';
// johnDeere310lImage removed - file doesn't exist
import merloP5018hmNewImage from '@/assets/machines/merlo-p50-18hm-new.webp';
import johnDeere6430NewImage from '@/assets/machines/john-deere-6430-new.webp';
import asvVt70hoNewImage from '@/assets/machines/asv-vt70ho-new.webp';
import komatsuWa3208Image1 from '@/assets/machines/komatsu-wa320-8-1.webp';
import komatsuWa3208Image2 from '@/assets/machines/komatsu-wa320-8-2.webp';
import komatsuWa3208Image3 from '@/assets/machines/komatsu-wa320-8-3.webp';
import komatsuWa3208Image4 from '@/assets/machines/komatsu-wa320-8-4.webp';
import komatsuWa3208Image5 from '@/assets/machines/komatsu-wa320-8-5.webp';
import caterpillarCb16Image from '@/assets/machines/caterpillar-cb16-1.webp';
import caterpillarCb16Image2 from '@/assets/machines/caterpillar-cb16-2.webp';
import caterpillarCb16Image3 from '@/assets/machines/caterpillar-cb16-3.webp';
import caterpillarCb16Image4 from '@/assets/machines/caterpillar-cb16-4.webp';
import caterpillarCb16Image5 from '@/assets/machines/caterpillar-cb16-5.webp';
// johnDeere310sl2023Image1 removed - file doesn't exist
import johnDeere310sl2023Image2 from '@/assets/machines/john-deere-310sl-2023-2.webp';
import johnDeere310sl2023Image3 from '@/assets/machines/john-deere-310sl-2023-3.webp';
import johnDeere310sl2023Image4 from '@/assets/machines/john-deere-310sl-2023-4.webp';
import johnDeere310sl2023Image5 from '@/assets/machines/john-deere-310sl-2023-5.webp';
import johnDeere333g2022Image1 from '@/assets/machines/john-deere-333g-2022-1.webp';
import johnDeere333g2022Image2 from '@/assets/machines/john-deere-333g-2022-2.webp';
import johnDeere333g2022Image3 from '@/assets/machines/john-deere-333g-2022-3.webp';
import johnDeere333g2022Image4 from '@/assets/machines/john-deere-333g-2022-4.webp';
import johnDeere333g2022Image5 from '@/assets/machines/john-deere-333g-2022-5.webp';
import komatsuD65pxiNewImage from '@/assets/machines/komatsu-d65pxi-new.webp';
import kubotaKx0404NewImage from '@/assets/machines/kubota-kx040-4-new.webp';
import case321f2019Image from '@/assets/machines/case-321f-2019.webp';
import case321f2023NewImage from '@/assets/machines/case-321f-2023-new.webp';
import case321f2024Image1 from '@/assets/machines/case-321f-2024-1.webp';
import case321f2024Image2 from '@/assets/machines/case-321f-2024-2.webp';
import case321f2024Image3 from '@/assets/machines/case-321f-2024-3.webp';
import case321f2024Image4 from '@/assets/machines/case-321f-2024-4.webp';
import case321f2024Image5 from '@/assets/machines/case-321f-2024-5.webp';
import case321f2024Image6 from '@/assets/machines/case-321f-2024-6.webp';
import caterpillar938m2021NewImage from '@/assets/machines/caterpillar-938m-2021-new.webp';
import caterpillar938m2022Image1 from '@/assets/machines/caterpillar-938m-2022-1.webp';
import caterpillar938m2022Image2 from '@/assets/machines/caterpillar-938m-2022-2.webp';
import caterpillar938m2022Image3 from '@/assets/machines/caterpillar-938m-2022-3.webp';
import caterpillar938m2022Image4 from '@/assets/machines/caterpillar-938m-2022-4.webp';
import jcb55z1Image from '@/assets/machines/jcb-55z-1.webp';
import caseCx42dImage1 from '@/assets/machines/case-cx42d-1.webp';
import caseCx42dImage2 from '@/assets/machines/case-cx42d-2.webp';
import caseCx42dImage3 from '@/assets/machines/case-cx42d-3.webp';
import caseCx42dImage4 from '@/assets/machines/case-cx42d-4.webp';
import caseCx42dImage5 from '@/assets/machines/case-cx42d-5.webp';
import caterpillar304e2crImage1 from '@/assets/machines/caterpillar-304e2-cr-1.webp';
import caterpillar304e2crImage2 from '@/assets/machines/caterpillar-304e2-cr-2.webp';
import caterpillar304e2crImage3 from '@/assets/machines/caterpillar-304e2-cr-3.webp';
import caterpillar304e2crImage4 from '@/assets/machines/caterpillar-304e2-cr-4.webp';
import caterpillar304e2crImage5 from '@/assets/machines/caterpillar-304e2-cr-5.webp';
import kubotaKx0334Image from '@/assets/machines/kubota-kx033-4-1.webp';
import kubotaKx0334Image2 from '@/assets/machines/kubota-kx033-4-2.webp';
import kubotaKx0334Image3 from '@/assets/machines/kubota-kx033-4-3.webp';
import kubotaKx0334Image4 from '@/assets/machines/kubota-kx033-4-4.webp';
import bobcatE10Image from '@/assets/machines/bobcat-e10.webp';
// johnDeere333gImage removed - file doesn't exist
import caterpillar299d2Image from '@/assets/machines/caterpillar-299d2.webp';
import caterpillar299d3Image from '@/assets/machines/caterpillar-299d3.webp';
import caterpillar299d32023Image1 from '@/assets/machines/caterpillar-299d3-2023-1.webp';
import caterpillar299d32023Image2 from '@/assets/machines/caterpillar-299d3-2023-2.webp';
import caterpillar299d32023Image3 from '@/assets/machines/caterpillar-299d3-2023-3.webp';
import caterpillar299d32023Image4 from '@/assets/machines/caterpillar-299d3-2023-4.webp';
import caterpillar299d32023Image5 from '@/assets/machines/caterpillar-299d3-2023-5.webp';
import caterpillar303eCr2021Image1 from '@/assets/machines/caterpillar-303e-cr-2021-1.webp';
import caterpillar303eCr2021Image2 from '@/assets/machines/caterpillar-303e-cr-2021-2.webp';
import caterpillar303eCr2021Image3 from '@/assets/machines/caterpillar-303e-cr-2021-3.webp';
import caterpillar303eCr2021Image4 from '@/assets/machines/caterpillar-303e-cr-2021-4.webp';
import caterpillar305e2cr2019Image1 from '@/assets/machines/caterpillar-305e2-cr-2019-1.webp';
import caterpillar305e2cr2019Image2 from '@/assets/machines/caterpillar-305e2-cr-2019-2.webp';
import caterpillar305e2cr2019Image3 from '@/assets/machines/caterpillar-305e2-cr-2019-3.webp';
import caterpillar305e2cr2019Image4 from '@/assets/machines/caterpillar-305e2-cr-2019-4.webp';
import caterpillar305e2cr2019Image5 from '@/assets/machines/caterpillar-305e2-cr-2019-5.webp';
import caterpillar279d3Image from '@/assets/machines/caterpillar-279d3.webp';
import caseTr310bImage from '@/assets/machines/case-tr310b.webp';
// kubotaSvl753Image removed - file doesn't exist
// bobcatA300Image removed - file doesn't exist
import caterpillar305crImage1 from '@/assets/machines/caterpillar-305cr-1.webp';
import caterpillar305crImage2 from '@/assets/machines/caterpillar-305cr-2.webp';
import caterpillar305crImage3 from '@/assets/machines/caterpillar-305cr-3.webp';
import caterpillar305crImage4 from '@/assets/machines/caterpillar-305cr-4.webp';
import caterpillar305crImage5 from '@/assets/machines/caterpillar-305cr-5.webp';
import caterpillar305e2crImage1 from '@/assets/machines/caterpillar-305e2-cr-1.webp';
import caterpillar305e2crImage2 from '@/assets/machines/caterpillar-305e2-cr-2.webp';
import caterpillar305e2crImage3 from '@/assets/machines/caterpillar-305e2-cr-3.webp';
import caterpillar305e2crImage4 from '@/assets/machines/caterpillar-305e2-cr-4.webp';
import caterpillar305e2crImage5 from '@/assets/machines/caterpillar-305e2-cr-5.webp';
import caterpillar305e2cr2022Image1 from '@/assets/machines/caterpillar-305e2-cr-2022-1.webp';
import caterpillar305e2cr2022Image2 from '@/assets/machines/caterpillar-305e2-cr-2022-2.webp';
import caterpillar305e2cr2022Image3 from '@/assets/machines/caterpillar-305e2-cr-2022-3.webp';
import caterpillar305e2cr2022Image4 from '@/assets/machines/caterpillar-305e2-cr-2022-4.webp';
import caterpillar305e2cr2022Image5 from '@/assets/machines/caterpillar-305e2-cr-2022-5.webp';
import caterpillar305e2cr2020Image1 from '@/assets/machines/caterpillar-305e2-cr-2020-1.webp';
import caterpillar305e2cr2020Image2 from '@/assets/machines/caterpillar-305e2-cr-2020-2.webp';
import caterpillar305e2cr2020Image3 from '@/assets/machines/caterpillar-305e2-cr-2020-3.webp';
import caterpillar305e2cr2020Image4 from '@/assets/machines/caterpillar-305e2-cr-2020-4.webp';
import caterpillar305e2cr2020Image5 from '@/assets/machines/caterpillar-305e2-cr-2020-5.webp';
import caterpillar305e2cr2021Image1 from '@/assets/machines/caterpillar-305e2-cr-2021-1.webp';
import caterpillar305e2cr2021Image2 from '@/assets/machines/caterpillar-305e2-cr-2021-2.webp';
import caterpillar305e2cr2021Image3 from '@/assets/machines/caterpillar-305e2-cr-2021-3.webp';
import caterpillar305e2cr2021Image4 from '@/assets/machines/caterpillar-305e2-cr-2021-4.webp';
import kubotaKx0404Image1 from '@/assets/machines/kubota-kx040-4-1.webp';
import kubotaKx0404Image2 from '@/assets/machines/kubota-kx040-4-2.webp';
import kubotaKx0404Image3 from '@/assets/machines/kubota-kx040-4-3.webp';
import kubotaKx0404Image4 from '@/assets/machines/kubota-kx040-4-4.webp';
import kubotaKx0404Image5 from '@/assets/machines/kubota-kx040-4-5.webp';
import caterpillar950mNewImage from '@/assets/machines/caterpillar-950m-new.webp';
import caterpillarTl943cNewImage from '@/assets/machines/caterpillar-tl943c-new.webp';
import johnDeere544pNewImage from '@/assets/machines/john-deere-544p-new.webp';
import volvoL120h2016Image1 from '@/assets/machines/volvo-l120h-2016-1.webp';
import volvoL120h2016Image2 from '@/assets/machines/volvo-l120h-2016-2.webp';
import volvoL120h2016Image3 from '@/assets/machines/volvo-l120h-2016-3.webp';
import volvoL120h2016Image4 from '@/assets/machines/volvo-l120h-2016-4.webp';
import volvoL120h2016Image5 from '@/assets/machines/volvo-l120h-2016-5.webp';
import volvoL120h2024Image1 from '@/assets/machines/volvo-l120h-2024-1.webp';
import volvoL120h2024Image2 from '@/assets/machines/volvo-l120h-2024-2.webp';
import volvoL120h2024Image3 from '@/assets/machines/volvo-l120h-2024-3.webp';
import volvoL120h2024Image4 from '@/assets/machines/volvo-l120h-2024-4.webp';
import volvoL120h2024Image5 from '@/assets/machines/volvo-l120h-2024-5.webp';
import caterpillar336Image1 from '@/assets/machines/caterpillar-336-1.webp';
import caterpillar336Image2 from '@/assets/machines/caterpillar-336-2.webp';
import caterpillar336Image3 from '@/assets/machines/caterpillar-336-3.webp';
import caterpillar336Image4 from '@/assets/machines/caterpillar-336-4.webp';
import hitachiZx350Image1 from '@/assets/machines/hitachi-zx350-1.webp';
import hitachiZx350Image2 from '@/assets/machines/hitachi-zx350-2.webp';
import hitachiZx350Image3 from '@/assets/machines/hitachi-zx350-3.webp';
import hitachiZx350Image4 from '@/assets/machines/hitachi-zx350-4.webp';
import johnDeere210gImage1 from '@/assets/machines/john-deere-210g-1.webp';
import johnDeere210gImage2 from '@/assets/machines/john-deere-210g-2.webp';
import johnDeere210gImage3 from '@/assets/machines/john-deere-210g-3.webp';
import johnDeere210gImage4 from '@/assets/machines/john-deere-210g-4.webp';
import johnDeere310slImage from '@/assets/machines/john-deere-310sl.webp';
import manitouMlt1040Image2 from '@/assets/machines/manitou-mlt1040-2.webp';
// New machine imports
import caterpillar289d3Image from '@/assets/machines/caterpillar-289d3.webp';
import mackGu713Image1 from '@/assets/machines/mack-gu713-1.webp';
import mackGu713Image2 from '@/assets/machines/mack-gu713-2.webp';
import mackGu713Image3 from '@/assets/machines/mack-gu713-3.webp';
import mackGu713Image4 from '@/assets/machines/mack-gu713-4.webp';
import mackGu713Image5 from '@/assets/machines/mack-gu713-5.webp';
import peterbilt389Image1 from '@/assets/machines/peterbilt-389-1.webp';
import peterbilt389Image2 from '@/assets/machines/peterbilt-389-2.webp';
import peterbilt389Image3 from '@/assets/machines/peterbilt-389-3.webp';
import peterbilt389Image4 from '@/assets/machines/peterbilt-389-4.webp';
import peterbilt389Image5 from '@/assets/machines/peterbilt-389-5.webp';
// bobcatE50Image removed - file doesn't exist


// Category definitions with labels and icons
export const categoryInfo: Record<MachineCategory, { label: string; labelRu?: string }> = {
  excavators: { label: 'Excavators', labelRu: 'Экскаваторы' },
  dozers: { label: 'Dozers', labelRu: 'Бульдозеры' },
  'wheel-loaders': { label: 'Wheel Loaders', labelRu: 'Колёсные погрузчики' },
  'track-loaders': { label: 'Track Loaders', labelRu: 'Гусеничные погрузчики' },
  backhoes: { label: 'Backhoes', labelRu: 'Экскаваторы-погрузчики' },
  telehandlers: { label: 'Telehandlers', labelRu: 'Телескопические' },
  trucks: { label: 'Trucks', labelRu: 'Грузовики' },
  compaction: { label: 'Compaction', labelRu: 'Уплотнение' },
};

// All machines in one array - will be sorted dynamically
// Note: category values here are legacy, categoryMap below defines actual categories
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
  // Machine id=5 (Sany SY215C) removed - image file doesn't exist
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
  // Machine id=8 (John Deere 310L EP) removed - image file doesn't exist
  {
    id: 9,
    name: '2019 Merlo P50.18HM Telescopic Handler',
    year: 2019,
    hours: 3780,
    location: 'USA Stock',
    price: 95000,
    originalPrice: 95000,
    discount: 0,
    isReserved: true,
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
    description: 'The 2022 ASV VT-70HO – one of the cleanest, lowest-hour high-output mid-frame CTL on the planet right now. Only 983 original hours, still under full ASV factory coverage on major components. Turbo Deutz 74.3 hp / 207 ft-lbs, Posi-Track beast with 15" rubber tracks at 90%+, vertical lift, 2-speed (11 mph), high-flow hydraulics, enclosed cab with heat/AC/Bluetooth/camera, hydraulic quick-attach, LED lights all around. Fully serviced, zero leaks, ready to ship nationwide today (#A4340396). Perfect rental-fleet grade or owner-operator dream machine. Insane deal – same-year/hours units still bringing $34–38k at Ritchie Bros and JJ Kane auctions.',
    specs: {
      engine: 'Deutz TCD 2.2 L3 Turbo Diesel (Tier 4 Final)',
      power: '74.3 hp @ 2,600 rpm',
      grossTorque: '207 ft-lbs peak torque',
      weight: '8,035 lb (3,645 kg)',
      tippingLoad: '6,651 lb',
      breakoutForce: '2,328 lb ROC (35% tipping load)',
      maxLiftHeight: '126.5 in (3.21 m) hinge pin',
      hydraulicFlow: '28 gpm @ 3,300 psi high-flow',
      travelSpeed: '7.1 mph / 10.6 mph (2-speed)',
      groundClearance: '4.5 psi ground pressure',
      trackWidth: '15 in (381 mm)',
      fuelTank: '25 gal',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, camera',
      bucketCapacity: '72" low-profile bucket + hydraulic QA',
      status: 'Remaining factory coverage on major components',
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
    name: '2022 Caterpillar 336 Excavator',
    year: 2022,
    hours: 6769,
    location: 'Lake Worth, Texas',
    price: 265000,
    originalPrice: 265000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar336Image1,
    isHotOffer: true,
    description: '2019 CAT 336 straight from a Texas pipeline contractor. One-owner machine, no salt exposure, full Cat dealer history. Just received fresh 1,000-hour service, all pins & bushings tight, undercarriage strong (70% remaining). Runs quiet and powerful – ready to load on a lowboy today. Includes 54" HD bucket + hydraulic thumb. Clean Texas title & ownership docs.',
    specs: {
      engine: 'Cat C7.1 ACERT Tier 4 Final',
      power: '300 hp',
      weight: '81,700 lbs (37 metric tons)',
      bucketCapacity: '54" (1.9 m³) severe-duty with teeth',
      hydraulicFlow: 'High-flow auxiliary + hydraulic thumb installed',
      cab: 'Deluxe enclosed ROPS, ice-cold A/C, heated seat, 360° cameras, Cat Grade with 2D',
      trackWidth: '70% undercarriage remaining (Cat HD chains, rollers, idlers)',
      features: 'Heavy-duty reach boom (no cracks/welds), fresh 1,000-hr service, full inspection report, clean Texas title',
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
    name: '2016 Hitachi ZX350 LC-6N Excavator',
    year: 2016,
    hours: 6015,
    location: 'Lake Worth, Texas',
    price: 145000,
    originalPrice: 145000,
    discount: 0,
    category: 'earthmoving',
    image: hitachiZx350Image4,
    isHotOffer: true,
    description: 'Clean 2016 Hitachi ZX350 LC-6N straight out of a Texas rental fleet. Full service history, no major repairs ever needed. Fresh 500-hour service just completed – all filters, oils, greased, hydraulics 100%. Tight pins & bushings, strong undercarriage (75% remaining), ice-cold A/C. Ready to dig the day it lands. Includes 42" HD bucket.',
    specs: {
      engine: 'Isuzu 6HK1 Tier 4 Interim',
      power: '271 hp',
      weight: '79,600 lbs (36 metric tons)',
      bucketCapacity: '42" HD with teeth',
      hydraulicFlow: 'High-flow auxiliary ready',
      cab: 'Enclosed ROPS, heat & A/C, rear camera, Bluetooth, air-ride seat',
      trackWidth: '75% remaining',
      features: '500-hour service completed, full inspection report, clean Texas title',
      status: 'In stock – ships worldwide',
    },
    gallery: [
      hitachiZx350Image4,
      hitachiZx350Image1,
      hitachiZx350Image2,
      hitachiZx350Image3,
    ],
  },
  {
    id: 47,
    name: '2018 John Deere 210G LC Excavator',
    year: 2018,
    hours: 5520,
    location: 'Billings, Montana',
    price: 115000,
    originalPrice: 115000,
    discount: 0,
    category: 'earthmoving',
    image: johnDeere210gImage1,
    isHotOffer: true,
    description: 'Strong 2018 John Deere 210G LC from a Montana quarry operation. Single owner, full dealer service history. Fresh 500-hr service, all pins & bushings checked, undercarriage at 60–65% remaining. Tight machine, runs great. Includes 42" HD bucket with teeth. Ready to ship today.',
    specs: {
      engine: 'JD PowerTech PSS 6.8L Tier 4 Final',
      power: '159 hp',
      weight: '51,440 lbs (23.3 metric tons)',
      bucketCapacity: '42" HD with teeth',
      hydraulicFlow: 'Aux hydraulics ready, pattern changer',
      cab: 'Enclosed ROPS, heat & A/C, rear camera, JDLink telematics, air-ride seat',
      trackWidth: '60–65% remaining',
      features: 'Fresh 500-hr service, full inspection report, clean Montana title',
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
    hours: 4280,
    location: 'Billings, Montana',
    price: 185000,
    originalPrice: 185000,
    discount: 0,
    category: 'loaders',
    image: caterpillar950mNewImage,
    isHotOffer: true,
    description: 'One-owner 2018 CAT 950M from a Montana aggregate operation. Full Cat dealer service history, always shedded. Fresh 500-hour service, all filters/fluids, tight center pin, no leaks. Runs strong and quiet. Includes 5.5 yd³ GP bucket with BOE. Ready to load the day it lands.',
    specs: {
      engine: 'Cat C7.1 Tier 4 Final',
      power: '250 hp',
      weight: '42,357 lbs (19.2 metric tons)',
      bucketCapacity: '5.5 yd³ general purpose with BOE',
      hydraulicFlow: '3rd valve + ride control, quick coupler ready',
      cab: 'Deluxe enclosed, heat & A/C, rear camera, Cat Payload scales',
      tireSize: '23.5R25 Michelin XHA2 ≈ 80% remaining',
      features: 'Auto-lube ready, fresh 500-hr service, full inspection report, clean Montana title',
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
    hours: 1840,
    location: 'Billings, Montana',
    price: 145000,
    originalPrice: 145000,
    discount: 0,
    category: 'loaders',
    image: johnDeere544pNewImage,
    isHotOffer: false,
    description: 'Like-new 2021 John Deere 544 P-Tier with super low hours. One-owner Montana county machine, always stored inside, full JD dealer service records. Still under remaining PowerGard Protection Plan. Fresh service, no leaks, excellent rubber (92% remaining). Comes with 4.25 yd³ bucket + bolt-on edge and quick coupler.',
    specs: {
      engine: 'JD PowerTech PSS 6.8L Tier 4 Final',
      power: '171 hp',
      weight: '30,180 lbs (13.7 metric tons)',
      bucketCapacity: '4.25 yd³ pin-on with BOE',
      hydraulicFlow: 'High-lift Z-bar, ride control, 3rd & 4th function',
      cab: 'Premium enclosed, heat & A/C, air-ride seat, JDLink telematics, rear camera',
      tireSize: '20.5R25 Michelin XHA2 ≈ 92% remaining',
      features: 'Remaining factory PowerGard warranty transferable, fresh service, full inspection report, clean Montana title',
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
    hours: 7250,
    location: 'Salt Lake City, Utah',
    price: 125000,
    originalPrice: 125000,
    discount: 0,
    category: 'loaders',
    image: volvoL120h2016Image1,
    isHotOffer: true,
    description: 'Super-clean 2016 Volvo L120H from a single-owner mining support fleet. Always dealer-serviced, stored indoors when not in use. Fresh 500-hour service completed, zero leaks, excellent Michelin tires (85% remaining). Ice-cold A/C, Comfort Drive Control, Boom Suspension. Comes with 5.0 yd³ rehandling bucket + bolt-on edge. Ready to load trucks the day it arrives.',
    specs: {
      engine: 'Volvo D8J Tier 4 Final',
      power: '255 hp',
      weight: '43,650 lbs (19.8 metric tons)',
      bucketCapacity: '5.0 yd³ rehandling with BOE',
      hydraulicFlow: 'Load-sensing, 3rd & 4th function, quick coupler ready',
      cab: 'Care Cab, heat & A/C, CDC steering, rear camera, radio',
      tireSize: '23.5R25 Michelin XHA2 ≈ 85% remaining',
      features: 'Boom Suspension, Comfort Drive Control, fresh 500-hr service, full inspection report, clean Utah title',
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
    price: 52500,
    originalPrice: 52500,
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
    isSold: true,
    description: 'Pristine 2021 Caterpillar 938M – one of the lowest-hour, most loaded late-model 938M units available anywhere. Only 980 original hours, full Cat dealer service history, never left Montana. Features Fusion quick-coupler, 4.0 yd³ GP bucket + BOE, ride control, high-lift Z-bar, 23.5R25 Michelin XHA2 tires at 98%, high-flow XPS hydraulics + 3rd/4th function, reversing fan, LED 360° lights, deluxe cab with Cat Payload + printer + Autodig. Zero leaks, zero welds, runs whisper-quiet. Remaining Cat Platinum EPP until 2026/6,000 hrs (powertrain + hydraulics transferable).',
    specs: {
      engine: 'Cat C7.1 Acert 190 hp (Tier 4 Final)',
      power: '190 hp',
      weight: '36,530 lb (16,574 kg) operating weight',
      bucketCapacity: '4.0 yd³ (3.1 m³) Fusion GP + BOE',
      breakoutForce: '34,700 lbf (154 kN)',
      maxLiftCapacity: '25,200 lb (11,431 kg) static tipping load',
      maxDumpHeight: '10 ft 6 in (3.20 m) high-lift dump clearance',
      transmission: 'Cat powershift 5F/3R with lock-up torque converter',
      travelSpeed: '25 mph (40 km/h)',
      trackWidth: '23.5R25 Michelin XHA2 (98%+)',
      hydraulicFlow: 'High-flow XPS + 3rd/4th function',
      cab: 'Deluxe enclosed – heat/AC, heated air-ride seat, Bluetooth, camera, touchscreen, Cat Payload with printer, LED 360° lighting',
      warranty: 'Cat Platinum EPP until 2026 or 6,000 hrs',
      features: 'Fusion coupler, ride control, high-lift z-bar, reversing fan, Autodig, block heater, cold-weather package',
      status: 'SOLD – Dealer-maintained, like-new, zero damage/leaks',
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
    image: jcb55z1Image,
    isReserved: true,
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
    name: '2025 CASE CX42D Mini Excavator',
    year: 2025,
    hours: 45,
    location: 'Atlanta, Georgia',
    price: 48000,
    originalPrice: 48000,
    discount: 0,
    category: 'earthmoving',
    image: caseCx42dImage5,
    description: 'Brand-new 4.2-ton zero-tailswing mini excavator. FPT 37.4 hp Tier 4 Final (no DEF/AdBlue), 2-speed travel, 16" rubber tracks 100%, enclosed cab with heat/AC/touchscreen joysticks/Bluetooth/radio/rear camera, proportional aux hydraulics (thumb/grapple ready), hydraulic quick-coupler + 24" digging bucket included, LED work lights, auto-idle, float blade. 100% under full CASE ProCare factory warranty: 3 yr/3,000 hr bumper-to-bumper + 5 yr powertrain.',
    specs: {
      engine: 'FPT 37.4 hp Tier 4 Final (no DEF)',
      power: '37.4 hp',
      weight: '9,260 lb (4,200 kg)',
      maxDiggingDepth: '12 ft 4 in (3.76 m)',
      maxReach: '20 ft 2 in (6.15 m)',
      maxDumpHeight: '13 ft 9 in (4.19 m)',
      breakoutForce: '8,400 lbf bucket breakout',
      tailSwing: 'Zero tail swing',
      trackWidth: '16" rubber tracks 100%',
      hydraulicFlow: 'Proportional 1st & 2nd circuit aux hydraulics',
      cab: 'Enclosed heat/AC, touchscreen joysticks, Bluetooth, radio, rear camera',
      warranty: 'Full CASE ProCare 3 yr/3,000 hr + 5 yr powertrain',
      features: 'Hydraulic quick-coupler, 24" digging bucket, LED work lights, auto-idle, float blade, 2-speed travel',
      status: 'Brand new, in stock Atlanta GA – ready to ship in 48 hrs',
    },
    gallery: [
      caseCx42dImage5,
      caseCx42dImage1,
      caseCx42dImage2,
      caseCx42dImage3,
      caseCx42dImage4,
    ],
  },
  // Machine id=69 (Bobcat E50) removed - image file doesn't exist
  {
    id: 70,
    name: '2020 Caterpillar 304E2 CR Mini Excavator',
    year: 2020,
    hours: 1650,
    location: 'Seattle, Washington',
    price: 42000,
    originalPrice: 42000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar304e2crImage1,
    description: 'Versatile compact radius mini excavator – staple for urban construction, landscaping, utilities, and rental fleets. Zero tail swing for zero headaches in tight spots. Cat C2.4 Tier 4 Final 40.2 hp (no DEF downtime), load-sensing hydraulics with 17 gpm aux flow for thumbs/hammers, swing boom for max reach, hydraulic quick-coupler + 24" digging bucket included, dozer blade with float, enclosed ROPS cab with heat/AC/joystick controls/Bluetooth radio/rear camera/LED lights, 14" rubber tracks at 85%+.',
    specs: {
      engine: 'Cat C2.4 40.2 hp Tier 4 Final (no DEF)',
      power: '40.2 hp',
      weight: '8,996 lb (4,080 kg)',
      maxDiggingDepth: '10 ft 3 in (3.13 m) long stick',
      maxReach: '17 ft 2 in (5.22 m)',
      maxDumpHeight: '10 ft 8 in (3.25 m)',
      breakoutForce: '8,470 lbf (37.8 kN) bucket breakout',
      tailSwing: 'Compact radius (zero tail swing)',
      trackWidth: '14" rubber tracks (85%+)',
      hydraulicFlow: '17 gpm proportional aux',
      cab: 'Enclosed ROPS/FOPS, heat/AC, Bluetooth, rear camera, LED lights',
      warranty: 'Remaining Cat components',
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
    description: 'Brand-new ultra-compact mini excavator – king of the 1-ton class for landscaping, tight urban digs, indoor demo, and utility trenching. Yanmar 3TNV70 Tier 4 Final 10.2 hp (no DEF), zero tail swing, retractable undercarriage 28"–39" for doorway pass-through, 2-speed travel up to 2.5 mph, proportional aux hydraulics (hammer/thumb ready), swing boom for trench walls, dozer blade with float, ROPS canopy (enclosed cab option), joystick controls, LED work lights, rubber tracks 100%.',
    specs: {
      engine: 'Yanmar 3TNV70 10.2 hp Tier 4 Final (no DEF)',
      power: '10.2 hp',
      weight: '2,356 lb (1,069 kg)',
      maxDiggingDepth: '5 ft 10 in (1.78 m)',
      maxReach: '10 ft 2 in (3.10 m)',
      maxDumpHeight: '7 ft 1 in (2.16 m)',
      breakoutForce: '2,135 lbf (9.5 kN) bucket',
      tailSwing: 'Zero tail swing',
      trackWidth: '7 in rubber, retractable 28"–39" undercarriage',
      hydraulicFlow: '6.3 gpm proportional aux',
      cab: 'ROPS canopy (enclosed cab option)',
      warranty: 'Full Bobcat 2 yr/2,000 hr factory warranty',
      features: 'Swing boom, dozer blade with float, LED lights, joystick controls, 2-speed travel, fits through 36" doorways',
      status: 'Brand new (0 hours), in stock Orlando FL – ships in 24-48 hrs',
    },
    gallery: [
      bobcatE10Image,
    ],
  },
  // Machine id=73 (John Deere 333G) removed - image file doesn't exist
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
  // Machine id=79 (Kubota SVL75-3) removed - image file doesn't exist
  // Machine id=80 (Bobcat A300) removed - image file doesn't exist
  {
    id: 81,
    name: '2023 Caterpillar 305CR Mini Excavator',
    year: 2023,
    hours: 420,
    location: 'Atlanta, Georgia',
    price: 58000,
    originalPrice: 58000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar305crImage1,
    description: 'Versatile 5-ton mini excavator with near-zero tail swing design for tight-space excavation. Cat C2.4 Tier 4 Final diesel delivers 42.6 hp with no DEF required, enclosed cab with heat/AC/Bluetooth radio/rear-view camera, joystick controls with proportional auxiliary hydraulics for thumb or grapple, standard blade with float, rubber tracks at 90%+, quick-coupler with 24" bucket included. Ideal for residential excavation, utility work, landscaping, and farm applications.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final 42.6 hp (no DEF)',
      power: '42.6 hp (31.8 kW)',
      weight: '11,662 lb (5,290 kg)',
      maxDiggingDepth: '11 ft 10 in (3.61 m)',
      maxReach: '18 ft 8 in (5.69 m)',
      maxDumpingHeight: '12 ft 8 in (3.86 m)',
      bucketCapacity: '0.14 - 0.33 yd³ (0.11 - 0.25 m³)',
      bucketDiggingForce: '8,543 lbf (38 kN)',
      armDiggingForce: '5,620 lbf (25 kN)',
      swingSpeed: '8.5 rpm',
      travelSpeed: '2.8 mph (4.5 km/h)',
      tailSwing: '4 ft 6 in (1.37 m) – near-zero tail swing',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '13 in (330 mm)',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '13.2 gal (50 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, Bluetooth radio, rear-view camera',
      features: 'Quick-coupler, 24" bucket, proportional aux hydraulics, float blade, LED work lights, auto-idle',
      status: 'In stock Atlanta GA – ready to ship in 48 hrs',
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
    hours: 1121,
    location: 'Billings, MT',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar305e2crImage1,
    description: 'Compact 5-ton mini excavator with zero tail swing design, perfect for residential and commercial jobsites with limited space. Cat C2.4 Tier 4 Final diesel delivers 40.2 hp with excellent fuel efficiency, enclosed cab with heat/AC, joystick controls with proportional auxiliary hydraulics, standard blade with float, rubber tracks at 80%+, quick-coupler with 24" bucket included. Ideal for utility work, landscaping, trenching, and foundation excavation.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final 40.2 hp',
      power: '40.2 hp (30 kW)',
      weight: '11,354 lb (5,150 kg)',
      maxDiggingDepth: '11 ft 8 in (3.56 m)',
      maxReach: '18 ft 4 in (5.59 m)',
      maxDumpingHeight: '12 ft 6 in (3.81 m)',
      bucketCapacity: '0.13 - 0.31 yd³ (0.10 - 0.24 m³)',
      bucketDiggingForce: '8,320 lbf (37 kN)',
      armDiggingForce: '5,400 lbf (24 kN)',
      swingSpeed: '8.3 rpm',
      travelSpeed: '2.7 mph (4.3 km/h)',
      tailSwing: 'Zero tail swing design',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '12.6 in (320 mm)',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '12.7 gal (48 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, high-back seat',
      features: 'Quick-coupler, 24" bucket, proportional aux hydraulics, float blade, LED work lights',
      status: 'In stock Billings MT – ready to ship in 48 hrs',
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
    hours: 838,
    location: 'Billings, MT',
    price: 50580,
    originalPrice: 50580,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar305e2cr2022Image2,
    description: 'Premium 5-ton mini excavator with zero tail swing design for tight-space excavation. Cat C2.4 Tier 4 Final diesel delivers 40.2 hp with excellent fuel efficiency and no DEF required. Enclosed cab with heat/AC, joystick controls with proportional auxiliary hydraulics for thumb or grapple, standard blade with float, rubber tracks at 85%+, quick-coupler with 24" bucket included. Low hours, dealer-serviced, ready for residential or commercial work.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final 40.2 hp (no DEF)',
      power: '40.2 hp (30 kW)',
      weight: '11,354 lb (5,150 kg)',
      maxDiggingDepth: '11 ft 8 in (3.56 m)',
      maxReach: '18 ft 4 in (5.59 m)',
      maxDumpingHeight: '12 ft 6 in (3.81 m)',
      bucketCapacity: '0.13 - 0.31 yd³ (0.10 - 0.24 m³)',
      bucketDiggingForce: '8,320 lbf (37 kN)',
      armDiggingForce: '5,400 lbf (24 kN)',
      swingSpeed: '8.3 rpm',
      travelSpeed: '2.7 mph (4.3 km/h)',
      tailSwing: 'Zero tail swing design',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '12.6 in (320 mm)',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '12.7 gal (48 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, high-back seat',
      features: 'Quick-coupler, 24" bucket, proportional aux hydraulics, float blade, LED work lights, auto-idle',
      status: 'In stock Billings MT – dealer serviced, ready to ship',
    },
    gallery: [
      caterpillar305e2cr2022Image2,
      caterpillar305e2cr2022Image1,
      caterpillar305e2cr2022Image3,
      caterpillar305e2cr2022Image4,
      caterpillar305e2cr2022Image5,
    ],
  },
  {
    id: 84,
    name: '2024 Kubota KX040-4 Mini Excavator',
    year: 2024,
    hours: 320,
    location: 'Billings, MT',
    price: 63400,
    originalPrice: 63400,
    discount: 0,
    category: 'earthmoving',
    image: kubotaKx0404Image1,
    description: 'Nearly new 4-ton mini excavator with tight tail swing design for confined spaces. Kubota V2403 Tier 4 Final diesel delivers 40.4 hp with exceptional fuel efficiency and no DPF regeneration required. Enclosed cab with heat/AC, deluxe suspension seat, joystick controls with proportional auxiliary hydraulics for thumb attachment, standard angle blade with float, rubber tracks at 98%+, quick-coupler with 18" and 24" buckets included. Very low hours, full factory warranty remaining.',
    specs: {
      engine: 'Kubota V2403-CR-TE4 Tier 4 Final 40.4 hp',
      power: '40.4 hp (30.1 kW)',
      weight: '9,480 lb (4,300 kg)',
      maxDiggingDepth: '11 ft 2 in (3.41 m)',
      maxReach: '17 ft 10 in (5.44 m)',
      maxDumpingHeight: '12 ft 1 in (3.68 m)',
      bucketCapacity: '0.09 - 0.28 yd³ (0.07 - 0.21 m³)',
      bucketDiggingForce: '7,385 lbf (32.8 kN)',
      armDiggingForce: '4,600 lbf (20.5 kN)',
      swingSpeed: '9.0 rpm',
      travelSpeed: '2.8 mph (4.5 km/h)',
      tailSwing: 'Tight tail swing (minimal overhang)',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '11.6 in (295 mm)',
      fuelTank: '15.9 gal (60 L)',
      hydraulicTank: '10.8 gal (41 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, deluxe suspension seat, Bluetooth radio',
      features: 'Quick-coupler, 18" & 24" buckets, proportional aux hydraulics, angle blade with float, LED work lights, auto-idle, pattern changer',
      status: 'In stock Billings MT – factory warranty remaining',
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
    hours: 180,
    location: 'Billings, MT',
    price: 322400,
    originalPrice: 322400,
    discount: 0,
    category: 'wheel-loaders',
    image: volvoL120h2024Image1,
    isHotOffer: true,
    description: 'Nearly-new 2024 Volvo L120H with factory warranty remaining. Volvo D8M Tier 4 Final engine delivers 245 hp with industry-leading fuel efficiency and smooth power delivery. Full spec cab with heated/ventilated leather seat, touchscreen display, rear camera, Comfort Drive Control, and Boom Suspension for smooth loads. Includes 5.2 yd³ GP bucket, ride control, auto-idle, LED lights throughout. Only 180 hours - practically brand new condition.',
    specs: {
      engine: 'Volvo D8M Tier 4 Final 245 hp',
      power: '245 hp (183 kW)',
      weight: '45,635 lb (20,700 kg)',
      bucketCapacity: '5.2 yd³ (4.0 m³)',
      breakoutForce: '36,155 lbf (160.8 kN)',
      tippingLoad: '32,408 lb (14,700 kg) straight / 28,219 lb (12,800 kg) full turn',
      maxLiftCapacity: '27,337 lb (12,400 kg) at full height',
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
      manitouMlt1040Image2,
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
      johnDeere310slImage,
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
    price: 58000,
    originalPrice: 58000,
    discount: 0,
    category: 'track-loaders',
    image: johnDeere333g2022Image1,
    isReserved: true,
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
    hours: 1789,
    location: 'Billings, MT',
    price: 48500,
    originalPrice: 48500,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar305e2cr2020Image1,
    description: 'Reliable 5-ton mini excavator with zero tail swing design for tight jobsites. Cat C2.4 Tier 4 Final diesel delivers 40.2 hp with excellent fuel efficiency. Enclosed cab with heat/AC, joystick controls with proportional auxiliary hydraulics, standard blade with float, rubber tracks at 75%+, quick-coupler with 24" bucket included. Well-maintained machine ready for residential or commercial excavation.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final 40.2 hp',
      power: '40.2 hp (30 kW)',
      weight: '11,354 lb (5,150 kg)',
      maxDiggingDepth: '11 ft 8 in (3.56 m)',
      maxReach: '18 ft 4 in (5.59 m)',
      maxDumpingHeight: '12 ft 6 in (3.81 m)',
      bucketCapacity: '0.13 - 0.31 yd³ (0.10 - 0.24 m³)',
      bucketDiggingForce: '8,320 lbf (37 kN)',
      armDiggingForce: '5,400 lbf (24 kN)',
      swingSpeed: '8.3 rpm',
      travelSpeed: '2.7 mph (4.3 km/h)',
      tailSwing: 'Zero tail swing design',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '12.6 in (320 mm)',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '12.7 gal (48 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, high-back seat',
      features: 'Quick-coupler, 24" bucket, proportional aux hydraulics, float blade, LED work lights',
      status: 'In stock Billings MT – ready to ship in 48 hrs',
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
    hours: 933,
    location: 'Billings, MT',
    price: 54300,
    originalPrice: 54300,
    discount: 0,
    category: 'earthmoving',
    image: caterpillar305e2cr2021Image1,
    description: 'Well-maintained 5-ton mini excavator with zero tail swing design, perfect for residential and commercial jobsites. Cat C2.4 Tier 4 Final diesel delivers 40.2 hp with excellent fuel efficiency. Enclosed cab with heat/AC, joystick controls with proportional auxiliary hydraulics, standard blade with float, rubber tracks at 80%+. Ideal for utility work, landscaping, trenching, and foundation excavation.',
    specs: {
      engine: 'Cat C2.4 Tier 4 Final 40.2 hp',
      power: '40.2 hp (30 kW)',
      weight: '11,354 lb (5,150 kg)',
      maxDiggingDepth: '11 ft 8 in (3.56 m)',
      maxReach: '18 ft 4 in (5.59 m)',
      maxDumpingHeight: '12 ft 6 in (3.81 m)',
      bucketCapacity: '0.13 - 0.31 yd³ (0.10 - 0.24 m³)',
      bucketDiggingForce: '8,320 lbf (37 kN)',
      armDiggingForce: '5,400 lbf (24 kN)',
      swingSpeed: '8.3 rpm',
      travelSpeed: '2.7 mph (4.3 km/h)',
      tailSwing: 'Zero tail swing design',
      trackWidth: '15.7 in (400 mm) rubber tracks',
      groundClearance: '12.6 in (320 mm)',
      fuelTank: '18.5 gal (70 L)',
      hydraulicTank: '12.7 gal (48 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, high-back seat',
      features: 'Quick-coupler, proportional aux hydraulics, float blade, LED work lights',
      status: 'In stock Billings MT – ready to ship in 48 hrs',
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
  // NEW MACHINES - December 2024
  {
    id: 94,
    name: '2023 Caterpillar 289D3 Compact Track Loader',
    year: 2023,
    hours: 1200,
    location: 'USA Stock',
    price: 52000,
    originalPrice: 52000,
    discount: 0,
    category: 'track-loaders',
    image: caterpillar289d3Image,
    isHotOffer: false,
    description: 'Clean 2023 Caterpillar 289D3 compact track loader with low hours. Cat C3.3B Tier 4 Final engine delivers 74.3 hp for excellent power and efficiency. Features advanced Cat electronics, sealed and pressurized cab with AC/heat, standard 2-speed travel, and easy service access. High-flow hydraulics ready for demanding attachments. Ideal for landscaping, construction, and site prep work.',
    specs: {
      engine: 'Cat C3.3B Tier 4 Final',
      power: '74.3 hp (55.4 kW)',
      weight: '9,984 lb (4,529 kg)',
      ratedOperatingCapacity: '2,900 lb (1,315 kg) @ 50% tipping',
      bucketCapacity: '0.56 yd³ (0.43 m³)',
      travelSpeed: '7.3 mph (11.8 km/h) 2-speed',
      trackWidth: '15.7 in (400 mm)',
      hydraulicFlow: '23.9 gpm (90.5 L/min) standard',
      fuelTank: '24 gal (91 L)',
      cab: 'Enclosed ROPS/FOPS cab, heat/AC, suspension seat, advanced display',
      features: 'High-flow hydraulics, 2-speed travel, reversing fan, LED lights, rearview camera',
      status: 'In stock – low hours, well maintained',
    },
    gallery: [caterpillar289d3Image],
  },
  {
    id: 95,
    name: '2022 Mack GU713 Granite Dump Truck',
    year: 2022,
    miles: 45000,
    location: 'USA Stock',
    price: 85000,
    originalPrice: 85000,
    discount: 0,
    category: 'trucks',
    image: mackGu713Image1,
    isHotOffer: false,
    description: 'Well-maintained 2022 Mack GU713 Granite dump truck with 45,000 miles. Mack MP7 engine delivers 425 hp with excellent torque for heavy hauling. mDrive HD automated transmission for smooth, efficient shifting. Full air ride cab, heated mirrors, and excellent visibility. 16-18 yd steel dump body with tarp system. Perfect for aggregate, demolition, and construction hauling.',
    specs: {
      engine: 'Mack MP7 425 hp Tier 4 Final',
      power: '425 hp (317 kW) @ 1,800 rpm',
      torque: '1,560 lb-ft (2,115 Nm)',
      transmission: 'mDrive HD 12-speed automated',
      gvwr: '56,000 lb (25,401 kg)',
      wheelbase: '192 in (4,877 mm)',
      axles: 'Tandem rear axle, 46,000 lb capacity',
      dumpBody: '16-18 yd³ steel body with tarp',
      fuelTank: '100 gal (379 L)',
      cab: 'Day cab, air ride, heated mirrors, power windows/locks',
      features: 'Diff lock, exhaust brake, PTO, steel dump body, tarp system',
      status: 'Work ready – serviced and inspected',
    },
    gallery: [
      mackGu713Image1,
      mackGu713Image2,
      mackGu713Image3,
      mackGu713Image4,
      mackGu713Image5,
    ],
  },
  {
    id: 96,
    name: '2021 Peterbilt 389 Sleeper Truck',
    year: 2021,
    miles: 120000,
    location: 'USA Stock',
    price: 95000,
    originalPrice: 95000,
    discount: 0,
    category: 'trucks',
    image: peterbilt389Image1,
    isHotOffer: false,
    description: 'Classic 2021 Peterbilt 389 with 70-inch sleeper cab. Cummins X15 engine delivers 565 hp for powerful, reliable performance. Eaton Fuller 18-speed transmission. Extended hood design with premium chrome package. Sleeper features full amenities including bunk heater, refrigerator, and storage. Excellent highway truck for long-haul operations.',
    specs: {
      engine: 'Cummins X15 565 hp Tier 4 Final',
      power: '565 hp (421 kW) @ 1,800 rpm',
      torque: '1,850 lb-ft (2,508 Nm)',
      transmission: 'Eaton Fuller 18-speed manual',
      gvwr: '52,000 lb (23,587 kg)',
      wheelbase: '244 in (6,198 mm)',
      sleeperSize: '70-inch flat-top sleeper',
      axles: 'Tandem rear axle, 40,000 lb capacity',
      fuelTank: '150 gal (568 L) dual tanks',
      cab: 'Premium cab with 70-in sleeper, bunk heater, fridge, storage',
      features: 'Chrome package, air ride, power windows/locks, APU-ready, diff lock',
      status: 'Road ready – well maintained fleet truck',
    },
    gallery: [
      peterbilt389Image1,
      peterbilt389Image2,
      peterbilt389Image3,
      peterbilt389Image4,
      peterbilt389Image5,
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
  64: 'excavators', // CASE CX42D Mini Excavator
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
  63: 'excavators', // JCB 55Z-1 Mini Excavator
  
  // Dozers
  3: 'dozers', // Develon DD100 Dozer
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
  61: 'wheel-loaders', // CAT 938M Wheel Loader 2021 (SOLD)
  62: 'wheel-loaders', // CAT 938M Wheel Loader 2022 (2,680 hrs)
  80: 'wheel-loaders', // Bobcat A300 All-Wheel Steer Skid Steer
  
  // Track Loaders (Compact Track Loaders, Skid Steers)
  13: 'track-loaders', // ASV VT-70 Track Loader
  73: 'track-loaders', // John Deere 333G Compact Track Loader
  75: 'track-loaders', // CAT 299D2 Compact Track Loader
  76: 'track-loaders', // CAT 299D3 Compact Track Loader
  77: 'track-loaders', // CAT 279D3 Compact Track Loader
  78: 'track-loaders', // CASE TR310B Compact Track Loader
  79: 'track-loaders', // Kubota SVL75-3 Compact Track Loader
  88: 'track-loaders', // John Deere 333G Compact Track Loader (2022)
  91: 'track-loaders', // CAT 299D3 Compact Track Loader (2023)
  
  // Backhoes
  8: 'backhoes', // 310L EP Backhoe
  87: 'backhoes', // John Deere 310SL Backhoe (2023)
  
  // Telehandlers & Forklifts
  7: 'telehandlers', // JCB 940-4
  9: 'telehandlers', // Merlo P50.18HM
  10: 'telehandlers', // John Deere 6430 (agricultural telehandler)
  40: 'telehandlers', // TL943C
  86: 'telehandlers', // Manitou MLT1040-145 PS+L
  
  // Compaction (Rollers)
  36: 'compaction', // CB16 Roller
  
  // NEW - December 2024
  94: 'track-loaders', // CAT 289D3 Compact Track Loader
  95: 'trucks', // Mack GU713 Dump Truck
  96: 'trucks', // Peterbilt 389 Sleeper
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

// Export all machines and sorted variants
export const allMachines = machinesWithCategories;
export const featuredMachines = miniExcavators.slice(0, 4);
export const catalogMachines = sortedMachines;
