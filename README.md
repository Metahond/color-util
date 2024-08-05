# 🎨 Deno color utils
Hey there! This library is a collection of utilities for working with colors in Deno. It's still work in progress so 
some of the functions may not be implemented or may not work as expected. If you encounter any issues, feel free to 
report them on our Discord or open an issue on GitHub directly.

# ⚙️ Usage
To use this library in your project, you'll need to import the `mod.ts` file from this URL:
```
https://deno.land/x/color_util/mod.ts
```

Here is a quick example of how to convert a hex color to a RGB color:
```ts
import { hex, RGBColor } from 'https://deno.land/x/color_util/mod.ts';

const rgbColor: RGBColor = hex('#ff0000').toRGB();
console.log(rgbColor.toString()); // => rgb(255, 0, 0) 
```

You can find more examples in the examples directory.

# 📚 Contribution
If you want to contribute to this project, feel free to choose an issue and create a pull request. 

# 🤷‍♀️ Support
If you need help with this library, check out our [Discord server](https://discord.metahond.dev) for help!

# ⚖️ License
This project is licensed under the [Apache 2.0 license](./LICENSE).
