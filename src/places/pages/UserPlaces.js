import React from 'react';
import PlaceList  from '../components/PlaceList';
import {useParams} from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Tours Eiffel',
        description:'Best Place',
        image: 'https://cdn.pariscityvision.com/library/image/5144.jpg',
        address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
        location: {
            lat: '48.8584',
            lng: '2.2945',
        },
        creator:'u1'     
    },
    {
        id: 'p2',
        title: 'Arc de Triomphe',
        description:'Best Place',
        image:'https://mymodernmet.com/wp/wp-content/uploads/2019/05/arc-de-triomphe-1.jpg',
        address: 'Pl. Charles de Gaulle, 75008 Paris, France',
        location: {
            lat: '48.8738',
            lng: '2.2950',
        },
        creator:'u2'          
    },

];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces;