import React, { useState  }  from 'react';
// const selectedTemplatesIds = [];
 //const slectetCaracter=null;
export default function Animal  ({ animal,TextSelectd,setTextSelectd, setTextCount,slectetCaracter,setCaracter,selectedTemplatesIds })   { 
	  const [isActive, setActive] = useState(false);
	   const initialState = "Sélectionner";
  const [buttonText, setButtonText] = useState("Sélectionner");
	//const [slectetCaracter, setCaracter] = useState([]);
	function handleAddAnimalS (animal ){
		console.log(slectetCaracter);
    if ( !slectetCaracter.filter(b => b.id === animal.id).length) {
		  console.log('id_selected'+animal.id);
		  selectedTemplatesIds.push(animal.id);
		  console.log('selectedTemplatesIds'+selectedTemplatesIds);
		   toggleClass(animal.id);
       setCaracter([...slectetCaracter, animal]);
	   setTextCount(selectedTemplatesIds.length);
	     
	  setTextSelectd( selectedTemplatesIds.join(","));
	   //setButtonText('Déselectionner');
    } else {
		console.log('else'+animal.id);
		 selectedTemplatesIds.splice(selectedTemplatesIds.indexOf(animal.id),1);
		 slectetCaracter.splice(slectetCaracter.indexOf(animal),1);
		  toggleClass(animal.id);
		  setTextCount(selectedTemplatesIds.length);
		   setTextSelectd( selectedTemplatesIds.join(","));
    //  return false;
    }
  } ;
  const toggleClass = (id) => {
	  //  const id = e.target.id;
	  console.log('testtt++'+id)
	  if(!isActive)
     setActive({[id]: isActive});
 else 
	 setActive({[id]:false});
   //setState({ isActive: !this.state.isActive });
  };
  return (
    <>
      {animal.map((animal) => {
        const { id, title, description } = animal;
        return (
          <article key={id}  id={id} className={selectedTemplatesIds.includes(animal.id)  ? 'animalSlected animal': 'animal'}>
            <div className="animal-title">
              <h3>{title}</h3>
            </div>
            <div className="animal-description">  
              <p>{description}</p>
            </div>
            <button className="animal-button" onClick={() => handleAddAnimalS(animal)}> {selectedTemplatesIds.includes(animal.id)  ? "Déselectionner": "Sélectionner"}</button>
          </article>
        );
      })}
    </>
  );
};

//export default Animal;
 