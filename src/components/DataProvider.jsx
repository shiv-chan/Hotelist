import React, {useState, useEffect} from 'react';

export const allData = React.createContext();

export default function DataProvider({ children }) {
	const [data, setData] = useState(null);
	const [hotel, setHotel] = useState(null);
	const [hotelData, setHotelData] = useState(null);

	// fetch fake-hotel api
	const setAllData = async () => {
		try {
			const responseApi = await fetch(
				"http://fake-hotel-api.herokuapp.com/api/hotels"
			);

			if (responseApi.status !== 200)
				throw Error(`Oops, error! Error code: ${responseApi.status}`);

			const dataApi = await responseApi.json();
			console.log(dataApi);

			setData(dataApi);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setAllData();
	}, []);

	useEffect(() => {
		if (data !== null) {
			const hotelInfo = data.filter((item) => item.id === hotel);
			console.log(hotelInfo);
			setHotelData(hotelInfo);
		}
	}, [hotel]);

	return (
		<allData.Provider value={{
			data,
			hotel,
			setHotel,
			hotelData
		}}>
			{children}
		</allData.Provider>
	);
}
