## Bug Summary

Defining a function with a tuple as an argument results in the IDL not being generated correctly.

In this reproduction example, it doesn't generate the one function that has the tuple argument, 
but in the case I ran into the other day there was a lot more missing than just the one function.

## Reproduction Steps

1. `> yarn install`
2. `anchor test`

## Expected Behavior

The tests should pass and the IDL should be generated correctly, OR, if the IDL is not supposed to be generated correctly, there should be a clear error message.