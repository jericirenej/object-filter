# Object filtering

**Easily filter object by their properties - then get the filtered object back!**

- Two types of filtering available: that will either 1) either exclude all of the matched properties or 2) include only the matched properties.
- Filter by a list of property names AND | OR
- Filter by a list of regex filters (**new feature**).
- Recursive filtering available.
  - Recursive filtering will not inspect (filter within) arrays, sets, and maps.

## Detailed usage info

For a detailed description package use and important notes, be sure to **visit the [project's wiki](https://github.com/jericirenej/object-filter/wiki)!**

## Installation and basic info

- Install the package via `npm install @jericirenej/object-filter`.
  - You can also clone the repo and transpile the files manually (`npm install`, followed by `npx tsc` which will transpile to `dist`).
- Import the `objectFilter` function and pass it the appropriate configuration object.


### Basic usage

`objectFilter` has the following signature:

```ts
const objectFilter = ({
  targetObject: Record<string,any>;
  filters?: string|string[];
  regexFilters?: string|RegExp|(string|RegExp)[]  // "At least one of the filter groups needs to be valid."
  filterType?: "exclude"|"include";               // "Will default to exclude if not provided."
  recursive?: boolean;
  }) => Record<string,any>
```
