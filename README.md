# Node.js Random Color Generator

Create an application that will return a random color in the command line.

When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

In addition to node index.js, it should also be able to accept the request for a:

hue (e.g. green or red or blue)
luminosity (e.g. light or dark)
...and then generate random colors that match those choices.

When you believe you are done, set up a test:

Create a directory called .github (there is a dot at the start)
Create a directory called workflows inside .github
Create a file called test.yml inside workflows conta

1. Import necessary modules (e.g., chalk, random color generation functions).

2. Define a function to generate a random color based on hue and luminosity:

   - Accept hue and luminosity as parameters.
   - Generate a random color within the specified hue and luminosity constraints.
   - Return the color in hex format (#RRGGBB).

3. Define a function to draw a colored block:

   - Accept a color as a parameter.
   - Generate a block of characters with the specified color.
   - Print the block to the command line.

4. Main program logic:

   - Parse command line arguments for hue and luminosity (if provided).
   - If hue and luminosity are provided:
     - Generate a random color based on the specified hue and luminosity.
   - Otherwise, generate a completely random color.
   - Draw a colored block using the generated color.

5. Handle errors and edge cases:

   - Check if the provided hue and luminosity values are valid.
   - Display appropriate error messages for invalid input.

6. Execute the main program logic.

7. End of the program.
