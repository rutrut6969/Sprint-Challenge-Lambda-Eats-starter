import React, { useState, useEffect } from 'react';
import {
  Form,
  FormWrapper,
  Name,
  FormDiv,
  H2,
  P,
  Select,
  Radio,
  Label,
  CheckBox,
  CheckWrap,
  CheckCon,
  TextArea,
  BottomBorder,
  Container,
  SubmitBtn,
  Count
} from './styles/styles';
import * as yup from 'yup';
const nameSchema = yup.object().shape({
  name: yup.string().required('You must enter a Name!')
});

export default function Home() {
  const [name, setName] = useState({
    name: ''
  });
  const [errors, setErrors] = useState({
    name: ''
  });
  const [data, setData] = useState({
    name: '',
    size: '',
    sauce: '',
    instructions: ''
  });

  const prevDef = e => {
    e.preventDefault();
  };
  const validateChange = e => {
    yup
      .reach(nameSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ''
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };
  const handleOnChange = e => {
    e.persist();
    const createdName = {
      ...name,
      [e.target.name]:
        e.target.value.length >= 2
          ? e.target.value
          : console.error('Name has to be greater 2 or more chars.')
    };
    validateChange(e);
    setName(createdName);
  };

  const getData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  };

  return (
    <>
      <Form onSubmit={prevDef}>
        <FormWrapper className='centered'>
          <H2>Create Your Pizza!</H2>
          <img src='./Pizza.jpg' alt="The 'Za" />
          {/*This doesn't want to work for me*/}
        </FormWrapper>
        <FormWrapper>
          <h3>Build Your Own Pizza</h3>
          <FormDiv>
            <H2>Name Goes Here!</H2>
            <P>Required</P>
          </FormDiv>
          <Name
            type='text'
            name='name'
            id='name'
            placeholder='Name: '
            onChange={handleOnChange}
          />
        </FormWrapper>
        <FormWrapper>
          <FormDiv>
            <H2>Choose your Size!</H2>
            <P>Required</P>
          </FormDiv>
          <Select name='size' onChange={getData}>
            <option>xSmall</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>xLarge</option>
          </Select>
          <FormDiv>
            <H2>Choose Your Sauce!</H2>
            <P>Required</P>
          </FormDiv>
          <div>
            <div>
              <Label htmlFor='red'>
                <Radio
                  name='red'
                  id='red'
                  type='radio'
                  value='Original Red'
                  onChange={getData}
                />
                <P>Original Red</P>
              </Label>
            </div>
            <div>
              <Label htmlFor='garlic'>
                <Radio
                  name='garlic'
                  id='garlic'
                  value='garlic ranch'
                  type='radio'
                  onChange={getData}
                />
                <P>Garlic Ranch</P>
              </Label>
            </div>
            <div>
              <Label htmlFor='bbq'>
                <Radio
                  name='bbq'
                  id='rbbq'
                  value='bbq'
                  type='radio'
                  onChange={getData}
                />
                <P>BBQ Sauce</P>
              </Label>
            </div>
            <div>
              <Label htmlFor='spinach'>
                <Radio
                  name='spinach'
                  id='spinach'
                  value='spinachalf'
                  type='radio'
                  onChange={getData}
                />
                <P>Spinach Alfredo</P>
              </Label>
            </div>
          </div>
          <FormDiv>
            <H2>Add Toppings Here!!</H2>
            <P>Choose up to 10</P>
          </FormDiv>
          <CheckWrap>
            <CheckCon>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='pepperoni'
                  id='pepperoni'
                  value='pepperoni'
                  onChange={getData}
                />
                <P>Pepperoni</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='sausage'
                  id='sausage'
                  value='sausage'
                  onChange={getData}
                />
                <P>Sausage</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='canBacon'
                  value='canBacon'
                  id='canBacon'
                  onChange={getData}
                />
                <P>Canadian Bacon</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='spicy'
                  value='spicy sausage'
                  id='spicy'
                  onChange={getData}
                />
                <P>Spicy Italian Sausage</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='grilled'
                  id='grilled'
                  value='grilledchicken'
                  onChange={getData}
                />
                <P>Grilled Chicken</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='onions'
                  id='onions'
                  value='onions'
                  onChange={getData}
                />
                <P>Onions</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='green'
                  id='green'
                  value='green peppers'
                  onChange={getData}
                />
                <P>Green Pepper</P>
              </Label>
            </CheckCon>
            <CheckCon>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='diced'
                  id='diced'
                  value='diced tomatoes'
                  onChange={getData}
                />
                <P>Diced Tomatoes</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='olives'
                  value='olives'
                  id='olives'
                  onChange={getData}
                />
                <P>Black Olives</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='roastedGarlic'
                  id='roastedGarlic'
                  value='roasted Garlic'
                  onChange={getData}
                />
                <P>Roasted Garlic</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='arti'
                  id='arti'
                  value='artihearts'
                  onChange={getData}
                />
                <P>Artichoke Hearts</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='triple'
                  value='tripcheese'
                  id='triple'
                  onChange={getData}
                />
                <P>Three Cheese</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='pineapple'
                  id='pineapple'
                  value='pineapple'
                  onChange={getData}
                />
                <P>Pineapple</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='extra'
                  value='extracheese'
                  id='extra'
                  onChange={getData}
                />
                <P>Extra Cheese</P>
              </Label>
            </CheckCon>
          </CheckWrap>
          <FormDiv>
            <H2>Choice of Substitute</H2>
            <P>Choose The only one Here if you want it</P>
          </FormDiv>
          <Label htmlFor='glutefree'>
            <CheckBox type='checkbox' name='glutefree' id='glutefree' />
            <P>Gluten Free Crust (+ $1.00)</P>
          </Label>

          <FormDiv>
            <H2>Special Instructions</H2>
          </FormDiv>
          <TextArea
            type='text'
            name='special'
            id='special'
            placeholder='Any Special Instructions?'
            onChange={getData}
          />
        </FormWrapper>
        <BottomBorder />

        <Container>
          <Count type='number' id='count' />
          <SubmitBtn type='submit'>
            <P>Add to Order!</P> <P>$17.99</P>
          </SubmitBtn>
        </Container>
      </Form>
    </>
  );
}
