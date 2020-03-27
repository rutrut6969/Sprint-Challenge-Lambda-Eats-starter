import React from 'react';
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

export default function Home() {
  return (
    <>
      <Form>
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
          <Name type='text' name='name' id='name' placeholder='Name: ' />
        </FormWrapper>
        <FormWrapper>
          <FormDiv>
            <H2>Choose your Size!</H2>
            <P>Required</P>
          </FormDiv>
          <Select>
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
          <Label htmlFor='red'>
            <Radio name='red' id='red' type='radio' />
            <P>Original Red</P>
          </Label>
          <Label htmlFor='garlic'>
            <Radio name='garlic' id='garlic' type='radio' />
            <P>Garlic Ranch</P>
          </Label>
          <Label htmlFor='bbq'>
            <Radio name='bbq' id='rbbq' type='radio' />
            <P>BBQ Sauce</P>
          </Label>
          <Label htmlFor='spinach'>
            <Radio name='spinach' id='spinach' type='radio' />
            <P>Spinach Alfredo</P>
          </Label>
          <FormDiv>
            <H2>Add Toppings Here!!</H2>
            <P>Choose up to 10</P>
          </FormDiv>
          <CheckWrap>
            <CheckCon>
              <Label>
                <CheckBox type='checkbox' name='pepperoni' id='pepperoni' />
                <P>Pepperoni</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='sausage' id='sausage' />
                <P>Sausage</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='canBacon' id='canBacon' />
                <P>Canadian Bacon</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='spicy' id='spicy' />
                <P>Spicy Italian Sausage</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='grilled' id='grilled' />
                <P>Grilled Chicken</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='onions' id='onions' />
                <P>Onions</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='green' id='green' />
                <P>Green Pepper</P>
              </Label>
            </CheckCon>
            <CheckCon>
              <Label>
                <CheckBox type='checkbox' name='diced' id='diced' />
                <P>Diced Tomatoes</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='olives' id='olives' />
                <P>Black Olives</P>
              </Label>
              <Label>
                <CheckBox
                  type='checkbox'
                  name='roastedGarlic'
                  id='roastedGarlic'
                />
                <P>Roasted Garlic</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='arti' id='arti' />
                <P>Artichoke Hearts</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='triple' id='triple' />
                <P>Three Cheese</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='pineapple' id='pineapple' />
                <P>Pineapple</P>
              </Label>
              <Label>
                <CheckBox type='checkbox' name='extra' id='extra' />
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
