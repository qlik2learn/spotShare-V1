import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Buton';
import Card from '../../shared/components/UIElements/Card';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook';

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
  

  const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true);
   
    
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    useEffect(() =>{
        if(identifiedPlace){
            setFormData(
                { 
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true);
        }
        
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);
    

    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedPlace) {
      return (
        <div className="center">
            <Card>
                <h2>Could not find place!</h2>
            </Card>
        </div>
      );
    }

    if(isLoading){
        return (
            <div className="center">
              <h2>Loading...</h2>
            </div>
          );
    }
  
    return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  