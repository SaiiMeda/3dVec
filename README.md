# 3dVec

### Node Package for 3D vectors. 

The documentation can be found [here](https://htmlpreview.github.io/?https://github.com/WistfulSai/3dVec/blob/main/Docs/global.html)

To install the node package
> npm install 3dvec

## For this repo

First,
  > npm install --legacy-peer-deps
 
**Testing using jasmine ( the tests are in src/ directory)**
>jasmine 

Generate a jasmine webpage with tests

>node jas.js

This generates a jasmine website in the results folder. 


### For Creating a vector in js file:

> var vec = require("3dvec/vec");

> x = vec(1,1,1) 

### For Using the vector functions: 

**Add**:
>var add = require("3dvec/add");

> x = vec(1,1,1) 

> y = vec(1,1,1) 

> z = add(x,y)

**Dot**:
>var dot = require("3dvec/dot");

> x = vec(1,1,1) 

> y = vec(1,1,1) 

> z = dot(x,y)

**Cross**:
>var cross = require("3dvec/cross");

> x = vec(1,1,1) 

> y = vec(1,1,1) 

> z = cross(x,y)

**Equal**:
>var equal = require("3dvec/equal");

> x = vec(1,1,1) 

> y = vec(1,1,1) 

> z = equal(x,y)