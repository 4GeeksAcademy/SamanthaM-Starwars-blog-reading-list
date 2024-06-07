const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			
			fetchGetAllPeople: () => { 
				fetch("https://swapi.dev/api/people")
				.then(response => response.json())	
				.then(data => {
					
					setStore({people:data.results});
				})
				.catch(error => console.log("Something went wrong, check me out:", error))
			},
			fetchGetAllPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets");
				let data = await response.json();
			
				setStore({planets:data.results});
			},
			fetchGetAllVehicles: async () => {
				const response = await fetch("https://swapi.dev/api/vehicles");
				let data = await response.json();
				
				setStore({vehicles:data.results});
			},
			addFavorite: (name) => {
				const favorites = getStore().favorites
				favorites.push(name)
				setStore({favorites: favorites})
			},
			removeFavorite: (idx) => {
				const favorites = getStore().favorites
				let filteredFavorites = favorites.filter((item, index) => {
					return(
						index !== idx
					);
				});
				setStore({favorites: filteredFavorites})
			}
		}
	};
};

export default getState;