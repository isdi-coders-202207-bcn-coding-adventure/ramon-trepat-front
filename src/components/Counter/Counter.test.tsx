import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Give a counter component", () => {
  describe("When is instantiated props with 'day', 'hours', 'minutes' 'seconds'", () => {
    test("Then should show this props", () => {
      const day = 23;
      const hours = 3;
      const minutes = 33;
      const seconds = 12;

      render(
        <Counter day={day} hours={hours} minutes={minutes} seconds={seconds} />
      );

      const day_digit = screen.getByText(day);
      const hours_digit = screen.getByText(hours);
      const minutes_digit = screen.getByText(minutes);
      const seconds_digit = screen.getByText(seconds);

      const date = [day_digit, hours_digit, minutes_digit, seconds_digit];

      date.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
