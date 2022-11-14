const initialState = [
  {
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 2 days ago',
  },
  {
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 2 days ago',
  },
  {
      title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
      text: 'Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
      time: 'Posted 2 days ago',
  },
];

const userReducer = (state = initialState, action) => {
  console.log('reducer', state, action);
  return state;
}

export default userReducer;