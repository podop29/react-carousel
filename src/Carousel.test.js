import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders", function(){
  render(<Carousel/>)
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left and right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
  // expect the first image to show, but not the second

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

test("if arrows disappear when needed", ()=>{
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument()
  expect(queryByTestId("right-arrow")).toBeInTheDocument()


  fireEvent.click(queryByTestId("right-arrow"));
  expect(queryByTestId("left-arrow")).toBeInTheDocument()

  fireEvent.click(queryByTestId("right-arrow"));
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument()
  expect(queryByTestId("left-arrow")).toBeInTheDocument()







})

it("matches snapshot", ()=>{
  const {asFragment} = render(<Carousel/>);
  expect(asFragment()).toMatchSnapshot()

})
