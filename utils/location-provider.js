'use client';

import LocationContext from '@/contexts/location-context';
import { useState } from 'react';

export default function LocationProvider({ children }) {
  const [location, setLocation] = useState("Ghana");

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
