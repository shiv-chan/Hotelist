import React from 'react';

const allData = React.createContext();

export default function DataProvider({ children }) {
	return <allData.Provider>{children}</allData.Provider>;
}
