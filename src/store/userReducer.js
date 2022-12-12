const initialState = [
  {
      id: '1',
      image: require('./images/h1.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      description: 'At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 2 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits1: 'Very competitive compensation package with bonuses',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 54 000—60 000',
  },
  {
      id: '2',
      image: require('./images/h2.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 3 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits1: 'Very competitive compensation package with bonuses',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 68 000—80 000',
  },
  {
      id: '3',
      image: require('./images/h3.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 4 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 24 000—40 000',
    },
  {
      id: '4',
      image: require('./images/h4.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 2 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits1: 'Very competitive compensation package with bonuses',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 50 000—65 000',
  },
  {
      id: '5',
      image: require('./images/h3.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 6 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits1: 'Very competitive compensation package with bonuses',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 80 000—100 000',
  },
  {
      id: '6',
      image: require('./images/h4.png'),
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 9 days ago',
      responsibilitiesfirstp: 'Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently\n' +
      'recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This\n' +
      'is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.',
      responsibilitiessecondp: 'The ideal candidate will have five or more years of experience in cardiac surgery. This candidate\n' +
      'should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve\n' +
      'and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular\n' +
      'assist device placement, and extra corporeal membrane oxygenation.',
      responsibilitiesthirdp: 'Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta\n' +
      'metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,\n' +
      'Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only\n' +
      'center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.',
      benefits2: 'Medical, Dental, and Vision Insurance',
      benefits3: 'Occurrence-based Malpractice Coverage',
      benefits4: 'Short-term and Long-term Disability Insurance',
      benefits5: 'and life insurance',
      salary: '€ 10 000—30 000',
  },
];

const userReducer = (state = initialState) => {
  return state;
};

export default userReducer;