import React, { useState } from 'react'
import characters from './config/characters';
import Animal from './Animal';
import "./index.css";
const selectedTemplatesIds = [];
function App() {
    const [animal, setAnimal] = useState(characters)
	const [searchString, setSearchString] = React.useState("");
	 const [slectetCaracter, setCaracter] = useState([]);
	 const [TextCount, setTextCount] = useState("");
	 const [TextSelectd, setTextSelectd] = useState("");
	React.useEffect(() => {
		console.log('searchString'+searchString)
    if(searchString.length === 0){
      setAnimal(characters)
    } else {
      const searchedObjects = []
      characters.forEach((singleHeroObject, index) => {
		  console.log('index--'+index);
        //Object.values(singleHeroObject).every((onlyValues, valIndex) => {
		//	console.log('valIndex--'+valIndex);
			//console.log('onlyValues--'+onlyValues);
          if(singleHeroObject.title.toLowerCase().includes(searchString.toLowerCase())){
            searchedObjects.push(singleHeroObject)
            return;
          }
        //})
      })
	   
      setAnimal(searchedObjects) 
    }
  }, [searchString]);
  
const   getValidatedArticles= ( ) =>{
		
     console.log('Liste des articles Choisit : ');
		   console.log(slectetCaracter);
		  
  } ;
const  getClearArticles= ( ) =>{
		console.log('Articles choisit vide : ');
		 
		setCaracter( []);
		selectedTemplatesIds.splice(0, selectedTemplatesIds.length);
      setTextSelectd('');
	  setTextCount('');
		   
  } ;
    return ( <div className = "page">
        <div className = "header">
        <div className = "title" > Number of selected Heroes:  {TextCount}  </div> <div className = "text" > Selected heroes : {TextSelectd} </div >
        <div className = "header__button">
        <button className = "button__validate" onClick={() =>getValidatedArticles()}
       > Validate </button> <button className = "button__clear" onClick={() =>getClearArticles()} > Clear </button> </div>
		<div className = "header__search" > 
        <input className = "header__search--input"  onChange={(e) => setSearchString(e.target.value)} type = "text" placeholder = "Rechercher un héros..."/> </div> </div> 
		<div className = "body" >     <Animal animal={animal} TextSelectd={TextSelectd} setTextSelectd={setTextSelectd}    setTextCount={setTextCount} slectetCaracter={slectetCaracter}  setCaracter={setCaracter} selectedTemplatesIds={selectedTemplatesIds}/>
        </div> </div>

    )
}

export default App