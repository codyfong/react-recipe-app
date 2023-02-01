import React, {useLayoutEffect, useState} from "react";
import {Formik, Form} from "formik"
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const addIngredient = () =>{
    setIngredients([...ingredients, {name, quantity}])
    setName("")
    setQuantity("")
  }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
}
const onSubmit = (values, actions) => {
  values.ingredients = ingredients
  axios.post(`https://recipes.devmountain.com/recipes`, values)
  .then(()=>{
    actions.resetForm({values: initialValues})
    setIngredients([])
  })
}

  return (
    <section className="form-section">
      <h1 className="form-header">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <div className="form-1">
          <input onChange={handleChange} placeholder="Name" name="recipeName" value={values.recipeName}/>
          <input type="text" onChange={handleChange} placeholder="Image URL" name="imageURL" value={values.imageURL}/>
        </div>
        <div className="radio-div">
          <input id="cook-radio" type="radio" onChange={handleChange} value="cook" name="type"/>
          <label htmlFor="cook-radio">Cook</label>
          <input id="bake-radio" type="radio" onChange={handleChange} value="bake" name="type"/>
          <label htmlFor="bake-radio">Bake</label>
          <input id="drink-radio" type="radio" onChange={handleChange} value="drink" name="type"/>
          <label htmlFor="drink-radio">Drink</label>
        </div>
        <div className="form-1">
          <input type="text" onChange={handleChange} placeholder="Prep Time" name="prepTime" value={values.prepTime}/>
          <input type="text" onChange={handleChange} placeholder="Cook Time" name="cookTime" value={values.cookTime}/>
          <input type="text" onChange={handleChange} placeholder="Serves" name="serves" value={values.serves}/>
        </div>
        <div className="form-1">
          <div>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Ingredient" value={name}/>
          <input type="text" onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" value={quantity}/>
          </div>
          <div>
            <ul>
          {ingredients.map((ele)=>{
            return(<li>{ele.quantity} {ele.name}</li>)
          })}
            </ul>
          </div>
          <div>
            <button type="button" onClick={addIngredient}>Add Another</button>
          </div>
        </div>
        <div>
          <textarea onChange={handleChange} name="instructions" value={values.instructions} cols="30" rows="10" placeholder="What are the instructions?"></textarea>
          <button>Save</button>
        </div>
        
      </Form>
      )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
